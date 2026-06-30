$sounds = @{
    "hairy-woodpecker" = "Leuconotopicus villosus"
    "white-throated-sparrow" = "Zonotrichia albicollis"
    "chipping-sparrow" = "Spizella passerina"
    "red-bellied-woodpecker" = "Melanerpes carolinus"
    "northern-flicker" = "Colaptes auratus"
    "yellow-bellied-sapsucker" = "Sphyrapicus varius"
    "wood-thrush" = "Hylocichla mustelina"
    "brown-headed-cowbird" = "Molothrus ater"
    "northern-parula" = "Setophaga americana"
    "american-redstart" = "Setophaga ruticilla"
    "black-and-white-warbler" = "Mniotilta varia"
    "common-yellowthroat" = "Geothlypis trichas"
    "yellow-rumped-warbler" = "Setophaga coronata"
    "ovenbird" = "Seiurus aurocapilla"
    "purple-finch" = "Haemorhous purpureus"
    "field-sparrow" = "Spizella pusilla"
    "blue-gray-gnatcatcher" = "Polioptila caerulea"
    "summer-tanager" = "Piranga rubra"
    "scarlet-tanager" = "Piranga olivacea"
    "great-crested-flycatcher" = "Myiarchus crinitus"
}

$dir = "C:\projects\birdIdentifier\static\sounds"

foreach ($id in $sounds.Keys) {
    $sci = $sounds[$id]
    $out = "$dir\$id.mp3"
    Write-Host "Searching Xeno-Canto for: $sci ..."

    $encoded = [System.Uri]::EscapeDataString($sci)
    $apiUrl = "https://xeno-canto.org/api/2/recordings?query=$encoded"
    try {
        $resp = Invoke-WebRequest -Uri $apiUrl -UseBasicParsing
        $data = $resp.Content | ConvertFrom-Json
        if ([int]$data.numRecordings -gt 0) {
            $rec = $data.recordings[0]
            $recId = $rec.id
            $downloadUrl = "https://xeno-canto.org/$recId/download"
            Write-Host "  Downloading recording $recId ($($rec.en)) ..."
            Invoke-WebRequest -Uri $downloadUrl -OutFile $out -UseBasicParsing
            Write-Host "  Saved: $((Get-Item $out).Length) bytes"
        } else {
            Write-Host "  No recordings found for $sci"
        }
    } catch {
        Write-Host "  Error: $_"
    }
    Start-Sleep -Milliseconds 500
}
Write-Host "`nAll sounds downloaded!"
