$UserAgent = "BirdIdentifier/1.0 (educational project; contact@birdidentifier)"

$birds = @(
    @{id="hairy-woodpecker"; file="File:Hairy_Woodpecker_-_Sisters_-_Oregon_S4E6792_(19038774190).jpg"}
    @{id="white-throated-sparrow"; file="File:White-throated_sparrow_in_CP_close_up_(02081).jpg"}
    @{id="chipping-sparrow"; file="File:Chipping_sparrow_(05555).jpg"}
    @{id="red-bellied-woodpecker"; file="File:Red-bellied_woodpecker_(84383).jpg"}
    @{id="northern-flicker"; file="File:Colaptes_auratus_(Northern_Flickr).jpg"}
    @{id="yellow-bellied-sapsucker"; file="File:Yellow-bellied_sapsucker_in_CP_(40484).jpg"}
    @{id="wood-thrush"; file="File:Wood_thrush_milford_mill_5.3.22_DSC_5249.jpg"}
    @{id="brown-headed-cowbird"; file="File:Molothrus_ater_(brown-headed_cowbird)_(Newark,_Ohio,_USA)_1.jpg"}
    @{id="northern-parula"; file="File:Northern_Parula_by_Dan_Pancamo.jpg"}
    @{id="american-redstart"; file="File:AMERICAN_REDSTART_(8117850842).jpg"}
    @{id="black-and-white-warbler"; file="File:Black_and_white_warbler_in_CP_(43098).jpg"}
    @{id="common-yellowthroat"; file="File:Common_yellowthroat_(42920).jpg"}
    @{id="yellow-rumped-warbler"; file="File:20241023_yellow_rumped_warber_hockanum_reservoir_PD209927.jpg"}
    @{id="ovenbird"; file="File:Ovenbird_(90497).jpg"}
    @{id="purple-finch"; file="File:Male_Purple_Finch_3813_(5126905172).jpg"}
    @{id="field-sparrow"; file="File:Field_sparrow_(10811).jpg"}
    @{id="blue-gray-gnatcatcher"; file="File:Blue-gray_Gnatcatcher_(8663596401).jpg"}
    @{id="summer-tanager"; file="File:Summer_Tanager_Male_Corpus_Christi_(cropped).jpg"}
    @{id="scarlet-tanager"; file="File:Scarlet_Tanager_(32795193257).jpg"}
    @{id="great-crested-flycatcher"; file="File:Myiarchus_crinitus_SamSmith_Park_Toronto.jpg"}
)

function Get-FileUrl($title) {
    $encTitle = [System.Uri]::EscapeDataString($title)
    $url = "https://commons.wikimedia.org/w/api.php?action=query&titles=$encTitle&prop=imageinfo&iiprop=url&format=json"
    try {
        $resp = Invoke-RestMethod -Uri $url -UserAgent $UserAgent
        foreach ($p in $resp.query.pages.PSObject.Properties) {
            if ($p.Value.imageinfo -and $p.Value.imageinfo[0].url) {
                return $p.Value.imageinfo[0].url
            }
        }
    } catch {
        Write-Host "  API error: $_"
    }
    return $null
}

$dir = "C:\projects\birdIdentifier\static\images\birds"
$count = 0
Write-Host "Getting image URLs and downloading one at a time..."
foreach ($bird in $birds) {
    $count++
    $out = "$dir\$($bird.id).jpg"
    if (Test-Path $out) {
        $existingLen = (Get-Item $out).Length
        if ($existingLen -gt 2000) {
            Write-Host "[$count/20] SKIP $($bird.id).jpg (already exists, $existingLen bytes)"
            continue
        }
    }
    Write-Host "[$count/20] Looking up $($bird.file) ..."
    $fullUrl = Get-FileUrl $bird.file
    if (-not $fullUrl) {
        Write-Host "  ERROR: Could not get URL"
        Start-Sleep -Milliseconds 5000
        continue
    }
    Write-Host "  URL: $fullUrl"
    
    # Build thumbnail URL
    $parts = $fullUrl.Split('/')
    $filename = $parts[-1]
    $hashDir1 = $parts[-3]
    $hashDir2 = $parts[-2]
    $thumbUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/$hashDir1/$hashDir2/$filename/960px-$filename"
    
    Write-Host "  Downloading thumb ..."
    try {
        Invoke-WebRequest -Uri $thumbUrl -OutFile $out -UseBasicParsing -UserAgent $UserAgent
        $len = (Get-Item $out).Length
        if ($len -gt 2000) {
            Write-Host "  OK - $len bytes"
        } else {
            Write-Host "  FAILED - too small ($len bytes) - trying full image..."
            Remove-Item $out -Force -ErrorAction SilentlyContinue
            Invoke-WebRequest -Uri $fullUrl -OutFile $out -UseBasicParsing -UserAgent $UserAgent
            $len2 = (Get-Item $out).Length
            if ($len2 -gt 2000) {
                Write-Host "  OK (full) - $len2 bytes"
            } else {
                Write-Host "  FAILED (full) - $len2 bytes"
            }
        }
    } catch {
        Write-Host "  ERROR: $_"
        Write-Host "  Trying full image instead..."
        try {
            Invoke-WebRequest -Uri $fullUrl -OutFile $out -UseBasicParsing -UserAgent $UserAgent
            $len = (Get-Item $out).Length
            if ($len -gt 2000) {
                Write-Host "  OK (full) - $len bytes"
            } else {
                Write-Host "  FAILED - too small ($len bytes)"
            }
        } catch {
            Write-Host "  ERROR on full: $_"
        }
    }
    Write-Host "  Waiting 8 seconds before next..."
    Start-Sleep -Seconds 8
}

Write-Host "`nDone! New files:"
Get-ChildItem $dir -Filter "*.jpg" | Where-Object { $_.LastWriteTime -gt (Get-Date).AddHours(-1) } | Select-Object Name, Length | Sort-Object Name
