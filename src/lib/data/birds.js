export const birds = [
  {
    id: 'carolina-chickadee',
    name: 'Carolina Chickadee',
    scientific: 'Poecile carolinensis',
    size: 'small',
    sizeInches: '4.5–5.5"',
    primaryColor: 'gray',
    colors: ['gray', 'white', 'black'],
    habitats: ['forest', 'suburban'],
    food: ['insects', 'seeds'],
    season: 'year-round',
    description: 'A tiny, energetic bird with a black cap and bib contrasting with white cheeks. Common at feeders across Western NC.',
    keyMarks: ['Black cap and bib', 'White cheeks', 'Gray back and wings', 'Small, round body'],
    similarSpecies: [
      { id: 'tufted-titmouse', note: 'Titmouse is larger with a crest and lacks the black bib.' },
      { id: 'black-capped-chickadee', note: 'Nearly identical to Black-capped Chickadee; ranges do not overlap in NC.' }
    ],
    song: '"chick-a-dee-dee-dee" — a nasal, whistled call.',
    funFact: 'Chickadees cache food in hundreds of locations and remember them for weeks.',
    silhouette: 'chickadee',
    image: '/images/birds/carolina-chickadee.jpg',
    sound: '/sounds/carolina-chickadee.mp3'
  },
  {
    id: 'tufted-titmouse',
    name: 'Tufted Titmouse',
    scientific: 'Baeolophus bicolor',
    size: 'small',
    sizeInches: '5.5–6.5"',
    primaryColor: 'gray',
    colors: ['gray', 'white'],
    habitats: ['forest', 'suburban'],
    food: ['seeds', 'insects'],
    season: 'year-round',
    description: 'A small gray bird with a prominent crest and rusty flanks. A frequent visitor to feeders.',
    keyMarks: ['Small gray crest', 'Rusty-orange flanks', 'Black forehead patch', 'Pale gray body'],
    similarSpecies: [
      { id: 'carolina-chickadee', note: 'Chickadee is smaller, has a black bib, and lacks a crest.' }
    ],
    song: '"peter-peter-peter" — a loud, whistled song.',
    funFact: 'Titmice are known for tearing apart paper wasp nests to eat the larvae.',
    silhouette: 'titmouse',
    image: '/images/birds/tufted-titmouse.jpg',
    sound: '/sounds/tufted-titmouse.mp3'
  },
  {
    id: 'eastern-bluebird',
    name: 'Eastern Bluebird',
    scientific: 'Sialia sialis',
    size: 'small',
    sizeInches: '6.5–8"',
    primaryColor: 'blue',
    colors: ['blue', 'orange', 'white'],
    habitats: ['field', 'suburban'],
    food: ['insects', 'fruit'],
    season: 'year-round',
    description: 'A beloved songbird with brilliant blue upperparts and a rusty throat and breast. Often seen on fence lines.',
    keyMarks: ['Bright blue back and head', 'Rusty-orange throat and breast', 'White belly', 'Slender, upright posture'],
    similarSpecies: [
      { id: 'indigo-bunting', note: 'Bunting is smaller, entirely blue, and lacks orange.' }
    ],
    song: 'Soft, musical warbling — "chur-lee chur-lee."',
    funFact: 'Bluebirds cannot see the color blue — their own brilliant plumage is invisible to them.',
    silhouette: 'bluebird',
    image: '/images/birds/eastern-bluebird.jpg',
    sound: '/sounds/eastern-bluebird.mp3'
  },
  {
    id: 'american-goldfinch',
    name: 'American Goldfinch',
    scientific: 'Spinus tristis',
    size: 'small',
    sizeInches: '4.5–5.5"',
    primaryColor: 'yellow',
    colors: ['yellow', 'black', 'white'],
    habitats: ['field', 'suburban', 'meadow'],
    food: ['seeds'],
    season: 'year-round',
    description: 'A bright yellow finch with black wings and a forked tail. Males are brilliant in summer, dull olive in winter.',
    keyMarks: ['Bright yellow body (breeding male)', 'Black wings with white bars', 'Forked tail', 'Small conical bill'],
    similarSpecies: [
      { id: 'house-finch', note: 'House Finch has red (not yellow) and heavy streaking.' }
    ],
    song: '"po-ta-to-chip" — a cheerful, bouncing flight call.',
    funFact: 'Goldfinches are strict vegetarians and molt twice a year.',
    silhouette: 'goldfinch',
    image: '/images/birds/american-goldfinch.jpg',
    sound: '/sounds/american-goldfinch.mp3'
  },
  {
    id: 'northern-cardinal',
    name: 'Northern Cardinal',
    scientific: 'Cardinalis cardinalis',
    size: 'small-medium',
    sizeInches: '8–9"',
    primaryColor: 'red',
    colors: ['red', 'black'],
    habitats: ['forest', 'suburban', 'garden'],
    food: ['seeds', 'fruit'],
    season: 'year-round',
    description: 'A stunning red bird with a tall crest and black face mask. Females are warm brown with red accents.',
    keyMarks: ['Bright red body (male)', 'Tall crest', 'Black mask around orange-red bill', 'Brown with red crest/wings/tail (female)'],
    similarSpecies: [
      { id: 'summer-tanager', note: 'Summer Tanager is entirely red with a pale bill and no crest.' }
    ],
    song: 'Loud whistles — "what-cheer cheer cheer" or "birdy-birdy-birdy."',
    funFact: 'Cardinals get their name from the red robes of Roman Catholic cardinals.',
    silhouette: 'cardinal',
    image: '/images/birds/northern-cardinal.jpg',
    sound: '/sounds/northern-cardinal.mp3'
  },
  {
    id: 'blue-jay',
    name: 'Blue Jay',
    scientific: 'Cyanocitta cristata',
    size: 'medium',
    sizeInches: '9–12"',
    primaryColor: 'blue',
    colors: ['blue', 'white', 'black'],
    habitats: ['forest', 'suburban'],
    food: ['seeds', 'nuts', 'insects'],
    season: 'year-round',
    description: 'A bold, noisy, crested blue bird with a white face and black necklace. One of the most recognizable birds in the East.',
    keyMarks: ['Blue crest and back', 'White face and underparts', 'Black collar around neck', 'Blue-and-black barred wings and tail'],
    similarSpecies: [
      { id: 'eastern-bluebird', note: 'Bluebird is much smaller, has no crest, and has a rusty breast.' }
    ],
    song: 'Loud "jay-jay" calls; also mimics Red-shouldered Hawks and other raptors.',
    funFact: 'Blue Jays are highly intelligent and related to crows. They cache acorns by the thousands.',
    silhouette: 'bluejay',
    image: '/images/birds/blue-jay.jpg',
    sound: '/sounds/blue-jay.mp3'
  },
  {
    id: 'american-crow',
    name: 'American Crow',
    scientific: 'Corvus brachyrhynchos',
    size: 'large',
    sizeInches: '16–20"',
    primaryColor: 'black',
    colors: ['black'],
    habitats: ['forest', 'field', 'suburban', 'city'],
    food: ['omnivorous'],
    season: 'year-round',
    description: 'A large, all-black bird with a thick bill. Extremely intelligent and adaptable, found everywhere in WNC.',
    keyMarks: ['Entirely black', 'Thick, straight bill', 'Square tail', 'Holds wings straight when soaring'],
    similarSpecies: [
      { id: 'common-raven', note: 'Raven is much larger, has a wedge-shaped tail, hunched wings in flight, and a deeper croak.' }
    ],
    song: 'Loud "caw-caw" — variable and communicative.',
    funFact: 'Crows can recognize human faces and hold grudges against people who threaten them.',
    silhouette: 'crow',
    image: '/images/birds/american-crow.jpg',
    sound: '/sounds/american-crow.mp3'
  },
  {
    id: 'red-tailed-hawk',
    name: 'Red-tailed Hawk',
    scientific: 'Buteo jamaicensis',
    size: 'large',
    sizeInches: '18–26"',
    primaryColor: 'brown',
    colors: ['brown', 'red', 'white'],
    habitats: ['forest', 'field'],
    food: ['small mammals', 'birds'],
    season: 'year-round',
    description: 'The most common hawk in North America. Adults show a distinctive rusty-red tail. The classic "movie hawk."',
    keyMarks: ['Rusty-red upper tail (adults)', 'Dark belly band across white chest', 'Broad, rounded wings', 'Pale underside with dark leading edge'],
    similarSpecies: [
      { id: 'red-shouldered-hawk', note: 'Red-shouldered has barred black-and-white wings and a more slender build.' }
    ],
    song: 'A harsh, descending scream — "keee-aaaar" — the iconic eagle sound in films.',
    funFact: 'Red-tailed Hawks have vision 8 times sharper than humans.',
    silhouette: 'red-tailed-hawk',
    image: '/images/birds/red-tailed-hawk.jpg',
    sound: '/sounds/red-tailed-hawk.mp3'
  },
  {
    id: 'coopers-hawk',
    name: "Cooper's Hawk",
    scientific: 'Accipiter cooperii',
    size: 'medium-large',
    sizeInches: '14–20"',
    primaryColor: 'gray',
    colors: ['gray', 'brown', 'white'],
    habitats: ['forest', 'suburban'],
    food: ['birds'],
    season: 'year-round',
    description: 'A sleek, long-tailed hawk adapted for hunting birds. Increasingly common at backyard feeders hunting other songbirds.',
    keyMarks: ['Long, rounded tail with dark bands', 'Blue-gray back (adult)', 'Rusty-barred chest', 'Orange-red eyes (adult)'],
    similarSpecies: [
      { id: 'sharp-shinned-hawk', note: 'Sharp-shinned is smaller (jay-sized), has a squared tail, and a smaller head.' }
    ],
    song: '"kek-kek-kek" — a rapid, sharp alarm call near the nest.',
    funFact: "Cooper's Hawks have short, rounded wings and a long tail for maneuvering through dense trees after prey.",
    silhouette: 'coopers-hawk',
    image: '/images/birds/coopers-hawk.jpg',
    sound: '/sounds/coopers-hawk.mp3'
  },
  {
    id: 'pileated-woodpecker',
    name: 'Pileated Woodpecker',
    scientific: 'Dryocopus pileatus',
    size: 'large',
    sizeInches: '16–19"',
    primaryColor: 'black',
    colors: ['black', 'red', 'white'],
    habitats: ['forest'],
    food: ['insects'],
    season: 'year-round',
    description: 'A crow-sized woodpecker with a flaming red crest. Its rectangular excavations in dead trees are unmistakable.',
    keyMarks: ['Large red crest (extends behind head)', 'Black body', 'White wing patches visible in flight', 'White stripe on neck'],
    similarSpecies: [
      { id: 'ivory-billed-woodpecker', note: 'Ivory-billed (likely extinct) had a white bill and more white in the wing.' }
    ],
    song: 'Loud, resonant "kuk-kuk-kuk" drumming series.',
    funFact: 'Pileated Woodpeckers carve rectangular holes in dead trees searching for carpenter ants.',
    silhouette: 'pileated-woodpecker',
    image: '/images/birds/pileated-woodpecker.jpg',
    sound: '/sounds/pileated-woodpecker.mp3'
  },
  {
    id: 'downy-woodpecker',
    name: 'Downy Woodpecker',
    scientific: 'Dryobates pubescens',
    size: 'small',
    sizeInches: '5.5–7"',
    primaryColor: 'black',
    colors: ['black', 'white', 'red'],
    habitats: ['forest', 'suburban'],
    food: ['insects', 'seeds'],
    season: 'year-round',
    description: 'The smallest woodpecker in North America. A frequent feeder visitor with a white back and black-and-white wings.',
    keyMarks: ['White back stripe down the center', 'Black wings with white spots', 'Small, stubby bill', 'Red patch on nape (male)'],
    similarSpecies: [
      { id: 'hairy-woodpecker', note: 'Hairy Woodpecker is larger with a longer, chisel-like bill (same length as its head).' }
    ],
    song: 'High-pitched "peek!" call and rapid, quiet drumming.',
    funFact: 'Downy Woodpeckers often forage on small branches and weed stems where larger woodpeckers cannot go.',
    silhouette: 'downy-woodpecker',
    image: '/images/birds/downy-woodpecker.jpg',
    sound: '/sounds/downy-woodpecker.mp3'
  },
  {
    id: 'carolina-wren',
    name: 'Carolina Wren',
    scientific: 'Thryothorus ludovicianus',
    size: 'small',
    sizeInches: '4.5–5.5"',
    primaryColor: 'brown',
    colors: ['brown', 'white'],
    habitats: ['forest', 'suburban'],
    food: ['insects'],
    season: 'year-round',
    description: 'A warm brown bird with a bold white eyebrow and a cocked tail. Despite its small size, it has an enormously loud voice.',
    keyMarks: ['Warm brown above, buff-orange below', 'Prominent white eyebrow stripe', 'Upright tail (often cocked upward)', 'Loud voice for its size'],
    similarSpecies: [
      { id: 'house-wren', note: 'House Wren is duller brown, has a less distinct eyebrow, and is more gray below.' }
    ],
    song: 'Extremely loud "teakettle-teakettle-teakettle" or "cherry-cherry-cherry."',
    funFact: 'Carolina Wrens often nest in unusual places like mailboxes, flowerpots, and old boots.',
    silhouette: 'carolina-wren',
    image: '/images/birds/carolina-wren.jpg',
    sound: '/sounds/carolina-wren.mp3'
  },
  {
    id: 'house-finch',
    name: 'House Finch',
    scientific: 'Haemorhous mexicanus',
    size: 'small',
    sizeInches: '5–6"',
    primaryColor: 'red',
    colors: ['red', 'brown', 'white'],
    habitats: ['suburban', 'city'],
    food: ['seeds'],
    season: 'year-round',
    description: 'A small finch with a rosy-red face and breast (males). Heavily streaked belly. Common at feeders across WNC.',
    keyMarks: ['Red face, throat, and breast (male)', 'Heavily streaked belly', 'Brown back with weak streaking', 'Thick, conical seed-cracking bill'],
    similarSpecies: [
      { id: 'purple-finch', note: 'Purple Finch is more raspberry-red overall and less heavily streaked below.' }
    ],
    song: 'A long, cheerful warble ending in a harsh note.',
    funFact: 'House Finches were originally native to the western US but were introduced to the East in 1940.',
    silhouette: 'goldfinch',
    image: '/images/birds/house-finch.jpg',
    sound: '/sounds/house-finch.mp3'
  },
  {
    id: 'eastern-towhee',
    name: 'Eastern Towhee',
    scientific: 'Pipilo erythrophthalmus',
    size: 'medium',
    sizeInches: '7–8.5"',
    primaryColor: 'black',
    colors: ['black', 'orange', 'white'],
    habitats: ['forest', 'field'],
    food: ['seeds', 'insects'],
    season: 'year-round',
    description: 'A striking bird with a black hood and back, rusty sides, and a white belly. Often seen scratching leaves on the ground.',
    keyMarks: ['Black head and back (male)', 'Rusty-orange sides', 'White belly', 'Red eyes', 'Long, rounded tail with white corners'],
    similarSpecies: [
      { id: 'american-robin', note: 'Robin has an orange-red breast (not just sides) and a gray back.' }
    ],
    song: '"drink-your-tea" — a drawn-out whistle with a buzzy middle.',
    funFact: 'Towhees forage by hopping backward with both feet to kick up leaf litter.',
    silhouette: 'towhee',
    image: '/images/birds/eastern-towhee.jpg',
    sound: '/sounds/eastern-towhee.mp3'
  },
  {
    id: 'white-breasted-nuthatch',
    name: 'White-breasted Nuthatch',
    scientific: 'Sitta carolinensis',
    size: 'small',
    sizeInches: '5–6"',
    primaryColor: 'gray',
    colors: ['gray', 'white', 'black'],
    habitats: ['forest', 'suburban'],
    food: ['insects', 'seeds'],
    season: 'year-round',
    description: 'A distinctive bird that creeps head-down on tree trunks. Gray back, white face and belly, black cap.',
    keyMarks: ['White face and underparts', 'Black cap (male, darker gray in female)', 'Climbs head-downward on trunks', 'Short, upturned tail'],
    similarSpecies: [
      { id: 'red-breasted-nuthatch', note: 'Red-breasted has a rusty belly, a black eye-stripe, and is smaller.' }
    ],
    song: 'Nasal "yank-yank" call — sounds like a tiny toy horn.',
    funFact: 'Nuthatches get their name from their habit of wedging nuts into bark and "hatching" them open.',
    silhouette: 'nuthatch',
    image: '/images/birds/white-breasted-nuthatch.jpg',
    sound: '/sounds/white-breasted-nuthatch.mp3'
  },
  {
    id: 'dark-eyed-junco',
    name: 'Dark-eyed Junco',
    scientific: 'Junco hyemalis',
    size: 'small',
    sizeInches: '5.5–6.5"',
    primaryColor: 'dark gray',
    colors: ['dark gray', 'white'],
    habitats: ['forest', 'suburban'],
    food: ['seeds'],
    season: 'winter',
    description: 'A small, dark gray bird with a white belly and flashy white outer tail feathers. Commonly called "snowbirds."',
    keyMarks: ['Dark gray hood and back', 'White belly', 'White outer tail feathers (flashing in flight)', 'Pale pink bill'],
    similarSpecies: [
      { id: 'eastern-towhee', note: 'Towhee is larger, has rusty sides, and black (not gray) upperparts.' }
    ],
    song: 'A sweet, trilling song — like a ringing bell — "tiii-tiii-tiii."',
    funFact: 'Juncos are called "snowbirds" because they appear at feeders just as winter arrives.',
    silhouette: 'junco',
    image: '/images/birds/dark-eyed-junco.jpg',
    sound: '/sounds/dark-eyed-junco.mp3'
  },
  {
    id: 'ruby-throated-hummingbird',
    name: 'Ruby-throated Hummingbird',
    scientific: 'Archilochus colubris',
    size: 'tiny',
    sizeInches: '3–3.75"',
    primaryColor: 'green',
    colors: ['green', 'red', 'white'],
    habitats: ['garden', 'forest', 'meadow'],
    food: ['nectar'],
    season: 'summer',
    description: 'The only hummingbird breeding in Eastern North America. Iridescent green with a ruby-red throat on males.',
    keyMarks: ['Iridescent green back and crown', 'Ruby-red throat (male, appears black in poor light)', 'White underparts', 'Tiny size, buzzing wings, hovering flight'],
    similarSpecies: [
      { id: 'ruby-throated-hummingbird-female', note: 'Females lack the red throat and have white speckled throats.' }
    ],
    song: 'High-pitched squeaks and chips; the wings produce a distinctive hum.',
    funFact: 'Hummingbirds beat their wings up to 80 times per second and can fly backward.',
    silhouette: 'hummingbird',
    image: '/images/birds/ruby-throated-hummingbird.jpg',
    sound: '/sounds/ruby-throated-hummingbird.mp3'
  },
  {
    id: 'mourning-dove',
    name: 'Mourning Dove',
    scientific: 'Zenaida macroura',
    size: 'medium',
    sizeInches: '9–13"',
    primaryColor: 'brown',
    colors: ['brown', 'gray', 'pink'],
    habitats: ['field', 'suburban'],
    food: ['seeds'],
    season: 'year-round',
    description: 'A plump, graceful bird with a small head and long pointed tail. Its mournful cooing is a familiar sound.',
    keyMarks: ['Plump body, small head', 'Long, pointed tail with white edges', 'Soft pinkish-brown body', 'Black spots on wings'],
    similarSpecies: [
      { id: 'eurasian-collared-dove', note: 'Collared-Dove is larger, paler, and has a black collar on the nape.' }
    ],
    song: 'Soft, mournful "coo-OO-oo-oo" — often mistaken for an owl.',
    funFact: 'Mourning Doves are one of the most prolific birds, raising up to 6 broods per year.',
    silhouette: 'dove',
    image: '/images/birds/mourning-dove.jpg',
    sound: '/sounds/mourning-dove.mp3'
  },
  {
    id: 'barred-owl',
    name: 'Barred Owl',
    scientific: 'Strix varia',
    size: 'large',
    sizeInches: '16–24"',
    primaryColor: 'brown',
    colors: ['brown', 'white'],
    habitats: ['forest'],
    food: ['small mammals', 'birds'],
    season: 'year-round',
    description: 'A large, round-headed owl with dark eyes and horizontal barring across the chest. Common in WNC forests.',
    keyMarks: ['Round head, no ear tufts', 'Dark brown eyes', 'Horizontal barring on chest, vertical streaks on belly', 'Pale face with dark rings'],
    similarSpecies: [
      { id: 'great-horned-owl', note: 'Great Horned has prominent ear tufts, yellow eyes, and a darker overall appearance.' }
    ],
    song: '"Who-cooks-for-you? Who-cooks-for-you-all?" — a classic hooting call.',
    funFact: 'Barred Owls are known to chase away Great Horned Owls from their territories.',
    silhouette: 'barred-owl',
    image: '/images/birds/barred-owl.jpg',
    sound: '/sounds/barred-owl.mp3'
  },
  {
    id: 'eastern-screech-owl',
    name: 'Eastern Screech-Owl',
    scientific: 'Megascops asio',
    size: 'small',
    sizeInches: '6.5–10"',
    primaryColor: 'gray',
    colors: ['gray', 'brown'],
    habitats: ['forest', 'suburban'],
    food: ['insects', 'small mammals'],
    season: 'year-round',
    description: 'A small, stocky owl with ear tufts and yellow eyes. Comes in gray and red-brown color morphs.',
    keyMarks: ['Small size (robin-sized)', 'Ear tufts (short, often flattened)', 'Yellow eyes', 'Gray or red-brown plumage with fine streaks'],
    similarSpecies: [
      { id: 'barred-owl', note: 'Barred Owl is much larger, lacks ear tufts, and has dark eyes.' }
    ],
    song: 'A mournful, descending whinny or a long, monotone trill.',
    funFact: 'Screech-Owls nest in tree cavities and will readily use nest boxes.',
    silhouette: 'screech-owl',
    image: '/images/birds/eastern-screech-owl.jpg',
    sound: '/sounds/eastern-screech-owl.mp3'
  },
  {
    id: 'great-blue-heron',
    name: 'Great Blue Heron',
    scientific: 'Ardea herodias',
    size: 'very large',
    sizeInches: '36–55"',
    primaryColor: 'blue-gray',
    colors: ['blue-gray', 'white', 'black'],
    habitats: ['water'],
    food: ['fish', 'amphibians'],
    season: 'year-round',
    description: 'A tall, majestic wading bird with a long neck and dagger-like bill. Often seen standing motionless in shallow water.',
    keyMarks: ['Very tall with long legs', 'Long, S-curved neck', 'Dagger-like yellow bill', 'Blue-gray body with black shoulder patch'],
    similarSpecies: [
      { id: 'little-blue-heron', note: 'Little Blue Heron is smaller, all dark, and lacks the white head.' }
    ],
    song: 'Harsh, croaking "frunk" calls when disturbed.',
    funFact: 'Great Blue Herons can swallow fish whole that are surprisingly large — up to the width of their head.',
    silhouette: 'heron',
    image: '/images/birds/great-blue-heron.jpg',
    sound: '/sounds/great-blue-heron.mp3'
  },
  {
    id: 'wild-turkey',
    name: 'Wild Turkey',
    scientific: 'Meleagris gallopavo',
    size: 'very large',
    sizeInches: '36–48"',
    primaryColor: 'brown',
    colors: ['brown', 'black'],
    habitats: ['forest', 'field'],
    food: ['seeds', 'insects', 'acorns'],
    season: 'year-round',
    description: 'A large ground bird with iridescent brown-black plumage and a bare red-and-blue head. Males fan their tails to display.',
    keyMarks: ['Very large, ground-dwelling bird', 'Bare red-and-blue head and neck', 'Iridescent bronze body', 'Long tail fan (displaying male)', 'Beard (hair-like feathers on chest of males)'],
    similarSpecies: [
      { id: 'peacock', note: 'Peacocks are introduced, have blue/green plumage, and a much longer train.' }
    ],
    song: 'The classic "gobble-gobble" of males during breeding season.',
    funFact: 'Wild Turkeys can run up to 25 mph and fly up to 55 mph.',
    silhouette: 'turkey',
    image: '/images/birds/wild-turkey.jpg',
    sound: '/sounds/wild-turkey.mp3'
  },
  {
    id: 'turkey-vulture',
    name: 'Turkey Vulture',
    scientific: 'Cathartes aura',
    size: 'large',
    sizeInches: '25–32"',
    primaryColor: 'black',
    colors: ['black', 'red'],
    habitats: ['field', 'forest'],
    food: ['carrion'],
    season: 'year-round',
    description: 'A large black bird with a featherless red head. Soars with wings held in a V-shape, rocking side to side.',
    keyMarks: ['Black body', 'Small, bare red head', 'Wings held in V-shape (dihedral) while soaring', 'Silvery flight feathers on underside'],
    similarSpecies: [
      { id: 'black-vulture', note: 'Black Vulture has a black head, shorter wings, and flies with flat wings.' }
    ],
    song: 'Hisses and grunts at nests; mostly silent in flight.',
    funFact: 'Turkey Vultures have an extraordinary sense of smell — they can detect carrion from a mile away.',
    silhouette: 'vulture',
    image: '/images/birds/turkey-vulture.jpg',
    sound: '/sounds/turkey-vulture.mp3'
  },
  {
    id: 'american-robin',
    name: 'American Robin',
    scientific: 'Turdus migratorius',
    size: 'medium',
    sizeInches: '8–11"',
    primaryColor: 'brown',
    colors: ['brown', 'orange', 'black'],
    habitats: ['suburban', 'forest', 'field'],
    food: ['insects', 'fruit'],
    season: 'year-round',
    description: 'A familiar thrush with a warm orange-red breast. Often seen running across lawns and stopping to tilt its head.',
    keyMarks: ['Orange-red breast', 'Dark gray-brown back', 'White eye arcs', 'Dark head with white throat streaks'],
    similarSpecies: [
      { id: 'eastern-bluebird', note: 'Bluebird is smaller, blue-backed, and has a rusty throat rather than full orange breast.' }
    ],
    song: 'Cheerful "cheer-up, cheerily, cheer-up" — one of the first birds to sing at dawn.',
    funFact: 'Robins eat earthworms by sight — they tilt their head to spot movement in the grass.',
    silhouette: 'robin',
    image: '/images/birds/american-robin.jpg',
    sound: '/sounds/american-robin.mp3'
  },
  {
    id: 'northern-mockingbird',
    name: 'Northern Mockingbird',
    scientific: 'Mimus polyglottos',
    size: 'medium',
    sizeInches: '8–11"',
    primaryColor: 'gray',
    colors: ['gray', 'white'],
    habitats: ['suburban', 'field'],
    food: ['insects', 'fruit'],
    season: 'year-round',
    description: 'A sleek gray bird with white wing patches and a long tail. Famous for its incredible song mimicry.',
    keyMarks: ['Gray overall', 'White wing patches (flash in flight)', 'Long, dark tail with white outer feathers', 'Thin, slightly curved bill'],
    similarSpecies: [
      { id: 'gray-catbird', note: 'Catbird is dark slate gray, has a black cap, and lacks white wing patches.' }
    ],
    song: 'A complex medley of other birds\' songs, each phrase repeated 3-6 times.',
    funFact: 'Mockingbirds can learn up to 200 different songs and sing all night during spring.',
    silhouette: 'mockingbird',
    image: '/images/birds/northern-mockingbird.jpg',
    sound: '/sounds/northern-mockingbird.mp3'
  },
  {
    id: 'gray-catbird',
    name: 'Gray Catbird',
    scientific: 'Dumetella carolinensis',
    size: 'medium',
    sizeInches: '8–9"',
    primaryColor: 'gray',
    colors: ['gray', 'black'],
    habitats: ['forest', 'field'],
    food: ['insects', 'fruit'],
    season: 'summer',
    description: 'A sleek slate-gray bird with a black cap and rusty undertail coverts. Named for its cat-like call.',
    keyMarks: ['Slate gray overall', 'Black cap', 'Rusty-red undertail coverts', 'Long, dark tail'],
    similarSpecies: [
      { id: 'northern-mockingbird', note: 'Mockingbird is paler gray, has white wing patches, and a longer tail.' }
    ],
    song: 'Cat-like "mew" call; also mimics other birds with less repetition than mockingbirds.',
    funFact: 'Catbirds are in the same family (Mimidae) as mockingbirds and thrashers.',
    silhouette: 'catbird',
    image: '/images/birds/gray-catbird.jpg',
    sound: '/sounds/gray-catbird.mp3'
  },
  {
    id: 'song-sparrow',
    name: 'Song Sparrow',
    scientific: 'Melospiza melodia',
    size: 'small',
    sizeInches: '4.5–7"',
    primaryColor: 'brown',
    colors: ['brown', 'white'],
    habitats: ['field', 'suburban', 'water'],
    food: ['seeds', 'insects'],
    season: 'year-round',
    description: 'A medium-sized sparrow with heavy streaking on the breast and a prominent central spot. Its song is sweet and memorable.',
    keyMarks: ['Heavily streaked breast with central dark spot', 'Brown back with streaks', 'Long, rounded tail', 'Gray eyebrow and stripe on crown'],
    similarSpecies: [
      { id: 'lincolns-sparrow', note: "Lincoln's Sparrow has finer, buffy streaking and a buff chest band." }
    ],
    song: '"Madge-madge-madge, put-on-the-tea-kettle" — starts with three short notes.',
    funFact: 'Song Sparrows have over 30 distinct regional dialects across North America.',
    silhouette: 'sparrow',
    image: '/images/birds/song-sparrow.jpg',
    sound: '/sounds/song-sparrow.mp3'
  },
  {
    id: 'indigo-bunting',
    name: 'Indigo Bunting',
    scientific: 'Passerina cyanea',
    size: 'small',
    sizeInches: '4.5–5.5"',
    primaryColor: 'blue',
    colors: ['blue', 'brown'],
    habitats: ['field', 'forest'],
    food: ['seeds', 'insects'],
    season: 'summer',
    description: 'A brilliant blue finch-like bird. Males glow deep blue in sunlight. Females are plain warm brown.',
    keyMarks: ['Brilliant deep blue body (male)', 'Small, thick finch bill', 'Short tail', 'Warm brown, faintly streaked (female)'],
    similarSpecies: [
      { id: 'eastern-bluebird', note: 'Bluebird has an orange breast, larger size, and is more of a thrush shape.' },
      { id: 'blue-grosbeak', note: 'Blue Grosbeak is larger with a heavy silver bill and rusty wing bars.' }
    ],
    song: 'Bright, sharp "sweet-sweet, chew-chew, sweet-sweet" — often sung from high perches.',
    funFact: 'Indigo Buntings migrate at night, navigating by the stars.',
    silhouette: 'bunting',
    image: '/images/birds/indigo-bunting.jpg',
    sound: '/sounds/indigo-bunting.mp3'
  },
  {
    id: 'red-winged-blackbird',
    name: 'Red-winged Blackbird',
    scientific: 'Agelaius phoeniceus',
    size: 'medium',
    sizeInches: '7–9.5"',
    primaryColor: 'black',
    colors: ['black', 'red', 'yellow'],
    habitats: ['water', 'field'],
    food: ['seeds', 'insects'],
    season: 'year-round',
    description: 'A common marsh bird. Males are black with bright red-and-yellow shoulder patches. Females are heavily streaked brown.',
    keyMarks: ['Black body with red-and-yellow shoulder patches (male)', 'Heavily streaked brown (female)', 'Sharp, pointed bill', 'Often seen perched on cattails'],
    similarSpecies: [
      { id: 'tricolored-blackbird', note: 'Tricolored is restricted to the West Coast.' }
    ],
    song: '"Conk-la-reeee!" — a liquid, musical call from the marsh.',
    funFact: 'Male Red-winged Blackbirds can have up to 15 females nesting in their territory.',
    silhouette: 'blackbird',
    image: '/images/birds/red-winged-blackbird.jpg',
    sound: '/sounds/red-winged-blackbird.mp3'
  },
  {
    id: 'cedar-waxwing',
    name: 'Cedar Waxwing',
    scientific: 'Bombycilla cedrorum',
    size: 'medium',
    sizeInches: '6–7.5"',
    primaryColor: 'brown',
    colors: ['brown', 'gray', 'yellow'],
    habitats: ['forest', 'suburban'],
    food: ['fruit'],
    season: 'year-round',
    description: 'A sleek, crested bird with silky brown-gray plumage. Named for the waxy red tips on its wing feathers.',
    keyMarks: ['Sleek crest', 'Smooth brown-gray body', 'Black mask outlined in white', 'Yellow belly', 'Red waxy tips on wing feathers'],
    similarSpecies: [
      { id: 'bohemian-waxwing', note: 'Bohemian Waxwing is larger, grayer, and has white and yellow wing markings.' }
    ],
    song: 'Thin, high-pitched trills — "sreee-sreee-sreee."',
    funFact: 'Waxwings sometimes become intoxicated eating overripe fermented berries.',
    silhouette: 'waxwing',
    image: '/images/birds/cedar-waxwing.jpg',
    sound: '/sounds/cedar-waxwing.mp3'
  },
  {
    id: 'eastern-phoebe',
    name: 'Eastern Phoebe',
    scientific: 'Sayornis phoebe',
    size: 'small',
    sizeInches: '5.5–7"',
    primaryColor: 'brown',
    colors: ['brown', 'gray', 'white'],
    habitats: ['forest', 'water', 'suburban'],
    food: ['insects'],
    season: 'summer',
    description: 'A plain, dark-headed flycatcher that constantly pumps its tail. Often nests on buildings and bridges.',
    keyMarks: ['Plain gray-brown body', 'Dark head with no eye-ring', 'Constantly pumps tail downward', 'Pale yellowish belly'],
    similarSpecies: [
      { id: 'eastern-wood-pewee', note: 'Wood-Pewee has wing bars and a slightly crested appearance.' }
    ],
    song: '"Fee-bee, fee-bee" — a raspy, whistled call that gives it its name.',
    funFact: 'Eastern Phoebes are one of the first migratory birds to return in spring.',
    silhouette: 'phoebe',
    image: '/images/birds/eastern-phoebe.jpg',
    sound: '/sounds/eastern-phoebe.mp3'
  },
  {
    id: 'common-grackle',
    name: 'Common Grackle',
    scientific: 'Quiscalus quiscula',
    size: 'medium',
    sizeInches: '11–13"',
    primaryColor: 'black',
    colors: ['black', 'iridescent', 'yellow'],
    habitats: ['suburban', 'field'],
    food: ['seeds', 'insects', 'omnivorous'],
    season: 'year-round',
    description: 'A large blackbird with iridescent purple-green head and a long, keeled tail. Pale yellow eyes stand out.',
    keyMarks: ['Iridescent purple-green head (contrasting with bronze body)', 'Very long, keeled (folded) tail', 'Pale yellow eye', 'Large, thick bill'],
    similarSpecies: [
      { id: 'brown-headed-cowbird', note: 'Cowbird is smaller, has a brown head, and a shorter tail.' }
    ],
    song: 'Loud "kleak" calls, whistles, and squeaks — often sounds rusty.',
    funFact: 'Grackles can recognize and remember individual humans who pose a threat.',
    silhouette: 'grackle',
    image: '/images/birds/common-grackle.jpg',
    sound: '/sounds/common-grackle.mp3'
  },
  {
    id: 'brown-thrasher',
    name: 'Brown Thrasher',
    scientific: 'Toxostoma rufum',
    size: 'medium',
    sizeInches: '9.5–12"',
    primaryColor: 'brown',
    colors: ['brown', 'white'],
    habitats: ['field', 'forest'],
    food: ['insects', 'fruit'],
    season: 'year-round',
    description: 'A large, long-tailed songbird with rich brown upperparts and a heavily streaked white breast. Has a distinctive long, curved bill.',
    keyMarks: ['Rich rufous-brown above', 'Heavily streaked white breast', 'Long, slightly downcurved bill', 'Yellow eye', 'Long tail'],
    similarSpecies: [
      { id: 'wood-thrush', note: 'Wood Thrush has a spotted (not streaked) breast, is rounder, and has a shorter tail.' }
    ],
    song: 'A rich, musical mimic with phrases typically sung in pairs.',
    funFact: 'Brown Thrashers have over 1,000 song types in their repertoire.',
    silhouette: 'thrasher',
    image: '/images/birds/brown-thrasher.jpg',
    sound: '/sounds/brown-thrasher.mp3'
  }
];

export const birdColorOptions = [
  ...new Set(birds.flatMap(b => b.colors))
].sort();

export const sizeOptions = [
  ...new Set(birds.map(b => b.size))
].sort((a, b) => {
  const order = ['tiny', 'small', 'small-medium', 'medium', 'medium-large', 'large', 'very large'];
  return order.indexOf(a) - order.indexOf(b);
});

export const habitatOptions = [
  ...new Set(birds.flatMap(b => b.habitats))
].sort();

export const foodOptions = [
  ...new Set(birds.flatMap(b => b.food))
].sort();

export const seasonOptions = [
  ...new Set(birds.map(b => b.season))
].sort();

export function getBird(id) {
  return birds.find(b => b.id === id);
}

