/*
  Top Bins prompt list.

  Each prompt has five tiers, from most common to rarest:
    tiers[0] Backpass (10 yds)   tiers[1] Through ball (25 yds)   tiers[2] Nutmeg (50 yds)
    tiers[3] Mazy run (75 yds)   tiers[4] Top bins (100 yds, a goal from anywhere)

  Inside a tier, answers are separated by commas.
  Other accepted spellings of the same answer go after a slash: "Ivory Coast/Côte d'Ivoire".
  The first spelling is the one players see.

  Optional settings:
    strip: words ignored in what the player types, e.g. ["shark"] so "tiger shark" matches "Tiger".
    loose: true lets extra words at the start count, e.g. "Claude Monet" matches "Monet".

  Tiers are estimates of how often people think of each answer. Once you have a backend,
  you can replace them with real counts from your players.

  A match uses 7 prompts, and players see every prompt before any repeats,
  so every 7 prompts you add gives regular players one more fresh match.
*/
window.TOPBINS_PROMPTS = [
  {
    id: "africa",
    text: "Name a country in Africa",
    tiers: [
      "Egypt, South Africa, Nigeria, Kenya",
      "Morocco, Ethiopia, Ghana, Madagascar, Algeria, Libya, Somalia, Sudan, Zimbabwe, Tanzania",
      "Uganda, Rwanda, Senegal, Tunisia, Cameroon, Angola, Mozambique, Namibia, Botswana, Zambia, DR Congo/Democratic Republic of the Congo/DRC/Congo Kinshasa, Mali, Ivory Coast/Côte d'Ivoire/Cote dIvoire, Sierra Leone, Liberia, Chad",
      "Niger, Malawi, Burkina Faso, Benin, Togo, Gabon, Guinea, Mauritania, Eritrea, South Sudan, Lesotho, Eswatini/Swaziland, Central African Republic/CAR, Gambia/The Gambia, Republic of the Congo/Congo/Congo Brazzaville",
      "Djibouti, Burundi, Equatorial Guinea, Guinea-Bissau/Guinea Bissau, Cape Verde/Cabo Verde, Comoros, Mauritius, Seychelles, São Tomé and Príncipe/Sao Tome and Principe/Sao Tome",
    ],
  },
  {
    id: "states",
    text: "Name a US state",
    tiers: [
      "California, Texas, Florida, New York",
      "Alaska, Hawaii, Washington, Ohio, Georgia, Arizona, Nevada, Colorado, Illinois, Michigan, Oregon, Utah",
      "Pennsylvania, Virginia, North Carolina, South Carolina, Tennessee, Louisiana, Massachusetts, New Jersey, Minnesota, Wisconsin, Kentucky, Alabama, Mississippi, Missouri, Indiana, Kansas, Oklahoma, Iowa, Maine, Montana, Idaho",
      "Arkansas, Nebraska, New Mexico, North Dakota, South Dakota, Wyoming, Vermont, New Hampshire, Connecticut, Maryland, West Virginia",
      "Delaware, Rhode Island",
    ],
  },
  {
    id: "moons",
    text: "Name a moon in our solar system (not Earth's)",
    tiers: [
      "Titan, Europa, Io, Ganymede, Phobos",
      "Callisto, Deimos, Enceladus, Triton, Charon",
      "Mimas, Oberon, Titania, Miranda, Iapetus, Rhea, Dione, Tethys",
      "Hyperion, Phoebe, Ariel, Umbriel, Proteus, Nereid, Amalthea, Janus, Epimetheus, Pan, Atlas, Prometheus, Pandora",
      "Thebe, Metis, Adrastea, Himalia, Elara, Pasiphae, Sinope, Carme, Ananke, Leda, Larissa, Galatea, Despina, Thalassa, Naiad, Puck, Sycorax, Caliban, Cordelia, Ophelia, Bianca, Cressida, Desdemona, Juliet, Portia, Rosalind, Belinda, Nix, Hydra, Kerberos, Styx, Dysnomia, Hiʻiaka/Hiiaka, Namaka",
    ],
  },
  {
    id: "elements",
    text: "Name a chemical element",
    tiers: [
      "Oxygen, Hydrogen, Carbon, Gold, Iron, Helium, Nitrogen",
      "Silver, Copper, Sodium, Calcium, Lead, Uranium, Neon, Aluminum/Aluminium, Mercury, Zinc, Chlorine, Potassium, Platinum, Lithium, Magnesium, Sulfur/Sulphur",
      "Silicon, Titanium, Nickel, Tin, Plutonium, Phosphorus, Fluorine, Argon, Iodine, Cobalt, Chromium, Radon, Radium, Tungsten, Boron, Krypton, Xenon",
      "Manganese, Arsenic, Bromine, Cesium/Caesium, Barium, Beryllium, Bismuth, Cadmium, Gallium, Germanium, Selenium, Strontium, Thorium, Palladium, Iridium, Osmium, Vanadium, Antimony, Francium, Polonium, Americium, Einsteinium, Nobelium, Zirconium, Molybdenum, Tellurium, Indium, Rubidium, Scandium, Neptunium, Curium",
      "Thallium, Rhodium, Ruthenium, Rhenium, Hafnium, Tantalum, Niobium, Technetium, Yttrium, Lanthanum, Cerium, Praseodymium, Neodymium, Promethium, Samarium, Europium, Gadolinium, Terbium, Dysprosium, Holmium, Erbium, Thulium, Ytterbium, Lutetium, Astatine, Actinium, Protactinium, Berkelium, Californium, Fermium, Mendelevium, Lawrencium, Rutherfordium, Dubnium, Seaborgium, Bohrium, Hassium, Meitnerium, Darmstadtium, Roentgenium, Copernicium, Nihonium, Flerovium, Moscovium, Livermorium, Tennessine, Oganesson",
    ],
  },
  {
    id: "fruit",
    text: "Name a fruit",
    tiers: [
      "Apple, Banana, Orange, Strawberry, Grape",
      "Mango, Pineapple, Watermelon, Peach, Pear, Cherry, Blueberry, Lemon, Kiwi/Kiwifruit, Raspberry",
      "Plum, Lime, Coconut, Papaya, Grapefruit, Apricot, Pomegranate, Cantaloupe, Blackberry, Avocado, Fig, Nectarine, Tomato, Cranberry, Honeydew, Passion fruit/Passionfruit, Tangerine, Clementine, Melon",
      "Dragon fruit/Pitaya/Dragonfruit, Lychee/Litchi, Guava, Persimmon, Date, Kumquat, Starfruit/Carambola/Star fruit, Gooseberry, Mandarin, Quince, Jackfruit, Durian, Olive, Mulberry, Elderberry, Boysenberry, Blood orange",
      "Rambutan, Mangosteen, Loquat, Salak/Snake fruit, Feijoa, Cherimoya, Soursop, Longan, Tamarind, Pawpaw, Ackee, Jabuticaba, Yuzu, Medlar, Physalis/Cape gooseberry, Sapodilla, Cloudberry, Lingonberry, Huckleberry, Kiwano/Horned melon, Breadfruit, Acerola, Pomelo, Ugli fruit",
    ],
  },
  {
    id: "dogs",
    text: "Name a dog breed",
    tiers: [
      "Labrador/Labrador Retriever/Lab, Golden Retriever, German Shepherd, Poodle, Bulldog/English Bulldog, Chihuahua, Husky/Siberian Husky",
      "Beagle, Pug, Dachshund/Wiener dog/Sausage dog, Rottweiler, Boxer, Corgi/Welsh Corgi/Pembroke Welsh Corgi, Pit Bull/Pitbull/American Pit Bull Terrier, Shih Tzu, French Bulldog/Frenchie, Great Dane, Border Collie, Doberman/Dobermann/Doberman Pinscher, Yorkshire Terrier/Yorkie, Dalmatian",
      "Pomeranian, Maltese, Collie/Rough Collie, Greyhound, Australian Shepherd/Aussie, Bernese Mountain Dog, Saint Bernard/St Bernard, Cocker Spaniel, Shiba Inu, Akita, Samoyed, Great Pyrenees, Mastiff, Labradoodle, Goldendoodle, Jack Russell/Jack Russell Terrier, Bichon Frise, Basset Hound, Bloodhound, Schnauzer",
      "Weimaraner, Vizsla, Whippet, Newfoundland, Cavalier King Charles Spaniel/Cavalier, Boston Terrier, Shar Pei, Chow Chow, Papillon, Pekingese, Afghan Hound, Irish Wolfhound, Bull Terrier, Alaskan Malamute/Malamute, Rhodesian Ridgeback, Springer Spaniel/English Springer Spaniel, Westie/West Highland White Terrier, Scottish Terrier/Scottie, Shetland Sheepdog/Sheltie, Havanese, Lhasa Apso, Cane Corso, Belgian Malinois/Malinois, Bullmastiff, Staffordshire Bull Terrier/Staffy, Old English Sheepdog, Italian Greyhound, Basenji, Airedale/Airedale Terrier",
      "Xoloitzcuintli/Xolo, Komondor, Puli, Borzoi, Saluki, Bedlington Terrier, Otterhound, Lagotto Romagnolo, Leonberger, Kooikerhondje, Azawakh, Mudi, Tibetan Mastiff, Norwegian Lundehund, Catahoula, Plott Hound, Chinook, Dandie Dinmont Terrier, Sloughi, Kuvasz, Briard, Bouvier des Flandres, Schipperke, Keeshond, Coton de Tulear, Finnish Spitz, Pharaoh Hound, Portuguese Water Dog, Brussels Griffon, Affenpinscher, Chinese Crested, Neapolitan Mastiff, Anatolian Shepherd, Dogue de Bordeaux, Spinone Italiano",
    ],
  },
  {
    id: "instruments",
    text: "Name a musical instrument",
    tiers: [
      "Piano, Guitar, Drums/Drum, Violin/Fiddle, Trumpet, Flute",
      "Saxophone/Sax, Bass/Bass guitar, Cello, Clarinet, Harp, Ukulele, Keyboard, Trombone, Tuba, Harmonica, Xylophone, Recorder",
      "Banjo, Accordion, Oboe, Viola, Organ, Tambourine, Triangle, French horn/Horn, Bagpipes, Mandolin, Double bass/Upright bass/Contrabass, Bassoon, Synthesizer/Synth, Piccolo, Cymbals, Glockenspiel, Kazoo, Maracas, Bongos, Harpsichord",
      "Sitar, Didgeridoo, Marimba, Vibraphone, Timpani, Cornet, Euphonium, Celesta, Lute, Zither, Theremin, Steel drum/Steelpan, Djembe, Cajon, Castanets, Bugle, Ocarina, Melodica, Koto, Balalaika, Shamisen, Tabla, Bodhrán/Bodhran, Dulcimer, Conga, Sousaphone, Pan flute/Pan pipes/Panpipes, Gong, Cowbell",
      "Erhu, Hurdy-gurdy/Hurdy gurdy, Oud, Kalimba/Thumb piano/Mbira, Shakuhachi, Duduk, Handpan/Hang drum, Guzheng, Pipa, Bouzouki, Charango, Sarangi, Santoor, Nyckelharpa, Glass harmonica, Ondes Martenot, Serpent, Crumhorn, Sackbut, Hammered dulcimer, Kora, Tanpura, Mridangam, Shehnai, Bandoneon, Concertina, Flugelhorn, Contrabassoon, English horn/Cor anglais, Washboard, Jaw harp/Jew's harp/Mouth harp, Viola da gamba",
    ],
  },
  {
    id: "veg",
    text: "Name a vegetable",
    tiers: [
      "Carrot, Broccoli, Potato, Lettuce, Tomato, Corn, Onion, Cucumber, Pea, Spinach",
      "Celery, Cauliflower, Cabbage, Green bean, Bell pepper/Pepper, Zucchini/Courgette, Asparagus, Sweet potato, Mushroom, Kale, Garlic, Brussels sprout/Brussel sprout/Brussels sprouts",
      "Eggplant/Aubergine, Beet/Beetroot, Radish, Squash, Pumpkin, Artichoke, Leek, Okra, Turnip, Yam, Butternut squash, Bok choy/Pak choi, Arugula/Rocket, Edamame, Parsnip, Shallot, Chili pepper/Chili/Chilli, Jalapeño/Jalapeno",
      "Rutabaga/Swede, Kohlrabi, Fennel, Endive, Chard/Swiss chard, Watercress, Collard greens/Collards, Jicama, Daikon, Bean sprouts, Snow peas, Celeriac, Radicchio, Scallion/Green onion/Spring onion, Horseradish, Ginger, Cassava/Yuca, Taro, Water chestnut, Bamboo shoots",
      "Romanesco, Salsify, Sunchoke/Jerusalem artichoke, Fiddlehead/Fiddleheads, Kalettes, Mizuna, Tatsoi, Burdock, Lotus root, Samphire, Cardoon, Chayote, Bitter melon/Bitter gourd, Purslane, Malanga, Nopales/Nopal, Sorrel, Mustard greens, Dandelion greens, Celtuce, Ramps",
    ],
  },
  {
    id: "colors",
    text: "Name a color",
    tiers: [
      "Red, Blue, Green, Yellow, Purple, Orange, Black, White, Pink",
      "Brown, Gray/Grey, Gold, Silver, Teal, Turquoise, Navy/Navy blue, Violet, Indigo, Maroon",
      "Magenta, Cyan, Beige, Lavender, Crimson, Scarlet, Burgundy, Lime, Coral, Peach, Mint, Tan, Olive, Aqua, Cream, Ivory, Salmon, Fuchsia",
      "Mauve, Taupe, Khaki, Chartreuse, Periwinkle, Ochre/Ocher, Amber, Emerald, Sapphire, Ruby, Cobalt, Mustard, Charcoal, Sepia, Vermilion, Cerulean, Plum, Lilac, Rust, Champagne, Bronze, Copper, Azure, Jade",
      "Puce, Viridian, Gamboge, Celadon, Heliotrope, Wenge, Sarcoline, Fallow, Smaragdine, Glaucous, Eburnean, Coquelicot, Falu red, Feldgrau, Zaffre, Xanadu, Mikado yellow, Caput mortuum, Phthalo blue, Prussian blue, Burnt sienna, Raw umber, Umber, Sienna, Vantablack, Cinnabar, Carmine, Alizarin, Ultramarine, Byzantium, Aureolin, Bistre",
    ],
  },
  {
    id: "olympics",
    text: "Name an Olympic sport or event",
    tiers: [
      "Swimming, Gymnastics, Track and field/Athletics/Track, Basketball, Soccer/Football, Ice hockey/Hockey, Figure skating",
      "Tennis, Volleyball, Boxing, Diving, Alpine skiing/Skiing, Snowboarding, Wrestling, Cycling, Rowing, Fencing, Golf, Archery, Weightlifting",
      "Judo, Taekwondo, Table tennis/Ping pong, Badminton, Handball, Water polo, Sailing, Equestrian/Horse riding, Speed skating, Bobsled/Bobsleigh, Luge, Curling, Triathlon, Skateboarding, Surfing, Beach volleyball, Rugby/Rugby sevens, Field hockey, Canoeing/Kayaking/Canoe, Shooting, Ski jumping, Biathlon",
      "Modern pentathlon, Skeleton, Sport climbing/Climbing, BMX, Artistic swimming/Synchronized swimming, Trampoline, Rhythmic gymnastics, Mountain biking, Nordic combined, Cross-country skiing, Freestyle skiing, Short track/Short track speed skating, Breaking/Breakdancing, Marathon swimming/Open water swimming, Race walking, Baseball, Softball, Marathon",
      "Ski mountaineering, Karate, Canoe slalom, Keirin, Moguls, Ski cross/Skicross, Snowboard cross, Halfpipe, Slopestyle, Dressage, Kitesurfing/Kiteboarding, Decathlon, Heptathlon, Steeplechase, Pole vault, Hammer throw, Javelin, Discus, Shot put, Madison, Omnium, Lacrosse, Cricket, Flag football, Squash",
    ],
  },
  {
    id: "greekgods",
    text: "Name a Greek god, goddess or Titan",
    tiers: [
      "Zeus, Poseidon, Hades, Athena, Aphrodite, Apollo",
      "Hera, Ares, Hermes, Artemis, Dionysus, Hephaestus, Demeter",
      "Persephone, Hestia, Eros, Nike, Gaia/Gaea, Kronos/Cronus, Hecate, Nemesis, Pan, Helios, Selene",
      "Eos, Iris, Hypnos, Thanatos, Morpheus, Tyche, Nyx, Uranus/Ouranos, Rhea, Hebe, Asclepius, Eris, Themis, Atlas, Prometheus, Hyperion, Oceanus, Leto, Ananke, Chaos, Aeolus, Triton",
      "Erebus, Aether, Hemera, Tartarus, Pontus, Thalassa, Phobos, Deimos, Harmonia, Enyo, Nereus, Proteus, Metis, Mnemosyne, Tethys, Phoebe, Coeus, Crius, Iapetus, Theia, Eileithyia, Hymenaeus/Hymen, Priapus, Boreas, Zephyrus, Notus, Eurus, Plutus",
    ],
  },
  {
    id: "nba",
    text: "Name an NBA team (nickname is fine)",
    loose: true,
    tiers: [
      "Lakers, Celtics, Bulls, Warriors",
      "Knicks, Heat, Spurs, Cavaliers/Cavs, Mavericks/Mavs, Nets, Rockets, Clippers, 76ers/Sixers",
      "Suns, Bucks, Nuggets, Raptors, Thunder, Trail Blazers/Blazers, Jazz, Timberwolves/Wolves, Grizzlies, Magic, Hawks, Pistons, Kings",
      "Pelicans, Hornets, Pacers, Wizards",
      "",
    ],
  },
  {
    id: "eucapitals",
    text: "Name a capital city in Europe",
    tiers: [
      "Paris, London, Rome, Berlin, Madrid",
      "Amsterdam, Athens, Vienna, Lisbon, Dublin, Moscow, Brussels, Prague, Stockholm, Oslo, Copenhagen",
      "Warsaw, Budapest, Helsinki, Bern, Reykjavik/Reykjavík, Kyiv/Kiev, Bucharest, Belgrade, Monaco, Luxembourg, Vatican City/Vatican",
      "Sofia, Zagreb, Bratislava, Ljubljana, Tallinn, Riga, Vilnius, Valletta, Minsk, Sarajevo, Tirana, Skopje, Podgorica, Chișinău/Chisinau, Andorra la Vella, San Marino, Vaduz, Nicosia, Ankara",
      "Tbilisi, Yerevan, Baku, Pristina",
    ],
  },
  {
    id: "dinos",
    text: "Name a dinosaur",
    tiers: [
      "Tyrannosaurus/T. rex/T rex/Tyrannosaurus rex/Trex, Triceratops, Velociraptor/Raptor, Stegosaurus, Brachiosaurus",
      "Spinosaurus, Ankylosaurus, Diplodocus, Apatosaurus, Brontosaurus, Allosaurus, Parasaurolophus, Iguanodon",
      "Pachycephalosaurus, Dilophosaurus, Gallimimus, Compsognathus, Carnotaurus, Giganotosaurus, Argentinosaurus, Deinonychus, Archaeopteryx, Therizinosaurus, Hadrosaurus, Maiasaura, Protoceratops, Oviraptor, Baryonyx, Utahraptor, Edmontosaurus, Styracosaurus, Microraptor",
      "Albertosaurus, Gorgosaurus, Daspletosaurus, Coelophysis, Herrerasaurus, Eoraptor, Plateosaurus, Camarasaurus, Kentrosaurus, Mamenchisaurus, Corythosaurus, Lambeosaurus, Ceratosaurus, Megalosaurus, Troodon, Suchomimus, Carcharodontosaurus, Dreadnoughtus, Patagotitan, Amargasaurus, Nodosaurus, Euoplocephalus, Psittacosaurus, Sinosauropteryx, Yutyrannus, Titanosaurus, Saltasaurus, Majungasaurus, Cryolophosaurus",
      "Nigersaurus, Pentaceratops, Kosmoceratops, Einiosaurus, Pachyrhinosaurus, Zuniceratops, Tarbosaurus, Alioramus, Guanlong, Dilong, Tianyulong, Anchiornis, Halszkaraptor, Mononykus, Shuvuuia, Masiakasaurus, Rajasaurus, Ouranosaurus, Muttaburrasaurus, Leaellynasaura, Minmi, Austroraptor, Buitreraptor, Concavenator, Irritator, Ichthyovenator, Sauroposeidon, Brachylophosaurus, Nanuqsaurus, Gryposaurus, Spinophorosaurus, Zuul, Borealopelta, Stygimoloch, Dracorex, Gigantoraptor, Deinocheirus",
    ],
  },
  {
    id: "pasta",
    text: "Name a pasta shape",
    tiers: [
      "Spaghetti, Penne, Macaroni, Fettuccine/Fettucine, Lasagna/Lasagne, Ravioli",
      "Linguine, Rigatoni, Fusilli, Farfalle/Bow tie/Bowtie, Rotini, Tortellini, Ziti, Angel hair/Capellini, Gnocchi, Orzo, Shells/Conchiglie, Elbow",
      "Tagliatelle, Pappardelle, Orecchiette, Cavatappi, Ditalini, Gemelli, Manicotti, Cannelloni, Bucatini, Vermicelli, Campanelle, Radiatori, Rotelle/Ruote/Wagon wheels, Stelline, Acini di pepe, Cavatelli, Tortelloni",
      "Paccheri, Casarecce, Strozzapreti, Trofie, Mafalde/Mafaldine, Fregola, Garganelli, Pici, Pastina, Agnolotti, Anelli, Cappelletti, Lumache, Mezzi rigatoni, Calamarata, Bigoli, Spaghettini, Perciatelli, Malloreddus, Gramigna, Sedani, Creste di gallo",
      "Busiate, Corzetti, Lorighittas, Su filindeu, Cencioni, Lagane, Testaroli, Sagne, Fileja, Scialatielli, Tajarin, Maltagliati, Stringozzi, Umbricelli, Culurgiones, Mandilli, Zitoni, Lumaconi, Fazzoletti, Quadrucci, Riccioli, Torchio, Gigli",
    ],
  },
  {
    id: "bones",
    text: "Name a bone in the human body",
    tiers: [
      "Femur, Skull/Cranium, Rib, Spine/Vertebra/Vertebrae/Backbone, Tibia, Pelvis",
      "Humerus, Fibula, Radius, Ulna, Collarbone/Clavicle, Kneecap/Patella, Jawbone/Jaw/Mandible, Sternum/Breastbone, Shoulder blade/Scapula",
      "Tailbone/Coccyx, Sacrum, Phalanges/Phalanx, Metacarpals/Metacarpal, Metatarsals/Metatarsal, Carpals/Carpal, Tarsals/Tarsal, Hip bone/Ilium, Stapes/Stirrup, Hyoid, Maxilla",
      "Ischium, Pubis, Heel bone/Calcaneus, Talus, Incus/Anvil, Malleus/Hammer, Atlas, Axis, Scaphoid, Cheekbone/Zygomatic, Nasal bone, Occipital, Parietal, Temporal, Frontal, Sphenoid, Ethmoid",
      "Lunate, Triquetrum, Pisiform, Trapezium, Trapezoid, Capitate, Hamate, Cuboid, Navicular, Cuneiform, Vomer, Lacrimal, Palatine, Inferior nasal concha, Sesamoid, Manubrium, Xiphoid",
    ],
  },
  {
    id: "gems",
    text: "Name a gemstone",
    tiers: [
      "Diamond, Ruby, Emerald, Sapphire",
      "Amethyst, Pearl, Opal, Topaz, Jade, Garnet, Turquoise",
      "Aquamarine, Onyx, Quartz/Rose quartz, Peridot, Citrine, Tanzanite, Moonstone, Amber, Jasper, Lapis lazuli/Lapis, Tourmaline, Obsidian",
      "Alexandrite, Morganite, Zircon, Spinel, Agate, Malachite, Tiger's eye/Tigers eye, Bloodstone, Carnelian, Coral, Jet, Labradorite, Kunzite, Iolite, Chrysoberyl, Beryl, Rhodochrosite, Sodalite",
      "Benitoite, Painite, Grandidierite, Musgravite, Taaffeite, Red beryl/Bixbite, Jeremejevite, Poudretteite, Serendibite, Demantoid, Tsavorite, Sphene/Titanite, Hiddenite, Larimar, Chrysoprase, Sunstone, Ammolite, Fluorite, Andalusite, Kyanite, Charoite, Sugilite",
    ],
  },
  {
    id: "birds",
    text: "Name a bird",
    tiers: [
      "Eagle, Robin, Pigeon, Parrot, Owl, Crow, Penguin, Chicken, Duck, Sparrow",
      "Hawk, Flamingo, Blue jay/Jay, Cardinal, Hummingbird, Swan, Seagull/Gull, Ostrich, Peacock/Peafowl, Turkey, Goose, Woodpecker, Falcon, Pelican, Toucan, Dove, Raven",
      "Vulture, Heron, Stork, Emu, Kiwi, Finch, Canary, Magpie, Starling, Swallow, Kingfisher, Puffin, Albatross, Crane, Parakeet/Budgie/Budgerigar, Cockatoo, Macaw, Condor, Osprey, Quail, Pheasant, Blackbird, Bluebird, Wren",
      "Kookaburra, Cormorant, Egret, Ibis, Sandpiper, Plover, Lark, Nightingale, Oriole, Warbler, Chickadee, Nuthatch, Mockingbird, Roadrunner, Cassowary, Rhea, Tern, Loon, Grouse, Kestrel, Harrier, Kite, Swift, Hornbill, Lyrebird, Bird of paradise, Shoebill, Spoonbill, Booby, Frigatebird, Gannet, Grebe, Coot, Moorhen, Thrush, Tit, Lovebird, Cuckoo, Partridge",
      "Kakapo, Hoatzin, Potoo, Frogmouth, Secretary bird, Quetzal, Oilbird, Kea, Takahe, Dodo, Moa, Hoopoe, Bee-eater/Bee eater, Wallcreeper, Dipper, Shrike, Bushtit, Tanager, Grosbeak, Bunting, Waxwing, Phalarope, Avocet, Godwit, Curlew, Dunlin, Turnstone, Skua, Jacana, Bittern, Hamerkop/Hammerkop, Weaver, Sunbird, Honeyeater, Manakin, Cotinga, Motmot, Trogon, Jabiru, Anhinga, Murrelet, Auk, Guillemot, Petrel, Shearwater, Fulmar, Nightjar, Whip-poor-will/Whippoorwill, Treecreeper, Goldfinch, Bullfinch, Chaffinch, Yellowhammer",
    ],
  },
  {
    id: "constellations",
    text: "Name a constellation",
    tiers: [
      "Orion, Ursa Major/Great Bear/Big Dipper, Ursa Minor/Little Bear/Little Dipper",
      "Cassiopeia, Leo, Scorpius/Scorpio, Taurus, Gemini, Aries, Cancer, Virgo, Libra, Sagittarius, Capricornus/Capricorn, Aquarius, Pisces",
      "Draco, Pegasus, Andromeda, Perseus, Cygnus, Lyra, Aquila, Hercules, Crux/Southern Cross, Canis Major, Centaurus",
      "Canis Minor, Boötes/Bootes, Corona Borealis, Ophiuchus, Cepheus, Auriga, Hydra, Lepus, Carina, Eridanus, Monoceros, Delphinus, Sagitta, Vulpecula, Corvus, Columba, Pavo, Phoenix, Lupus, Ara, Cetus",
      "Antlia, Apus, Caelum, Camelopardalis, Canes Venatici, Chamaeleon, Circinus, Coma Berenices, Corona Australis, Crater, Dorado, Equuleus, Fornax, Grus, Horologium, Hydrus, Indus, Lacerta, Leo Minor, Lynx, Mensa, Microscopium, Musca, Norma, Octans, Pictor, Piscis Austrinus, Puppis, Pyxis, Reticulum, Sculptor, Scutum, Serpens, Sextans, Telescopium, Triangulum, Triangulum Australe, Tucana, Vela, Volans",
    ],
  },
  {
    id: "currency",
    text: "Name a currency (current or historic)",
    tiers: [
      "Dollar/US dollar, Euro, Pound/Pound sterling/British pound, Yen",
      "Peso, Rupee, Yuan/Renminbi, Franc/Swiss franc, Ruble/Rouble, Won",
      "Real, Krona, Krone, Lira, Rand, Dirham, Shekel, Baht, Zloty/Złoty, Dinar, Riyal, Rupiah, Ringgit, Forint",
      "Koruna, Leu, Lev, Hryvnia, Dong, Naira, Shilling, Cedi, Kwacha, Birr, Taka, Kyat, Rial, Lari, Dram, Tenge, Som, Sol, Bolívar/Bolivar, Guaraní/Guarani, Quetzal, Lempira, Colón/Colon, Córdoba/Cordoba, Balboa",
      "Ngultrum, Pula, Loti, Lilangeni, Ouguiya, Dalasi, Leone, Kip, Riel, Paʻanga/Paanga, Vatu, Tala, Kina, Afghani, Manat, Somoni, Tugrik/Tögrög, Ariary, Nakfa, Dobra, Gourde, Kuna, Drachma, Deutsche Mark/Mark, Escudo, Peseta, Guilder, Rufiyaa, Denar",
    ],
  },
  {
    id: "code",
    text: "Name a programming language",
    tiers: [
      "Python, JavaScript/JS, Java, C++/Cpp/C plus plus, C",
      "C#/C sharp/Csharp, Swift, Ruby, PHP, SQL, TypeScript/TS, Go/Golang, Rust, Kotlin, R",
      "Perl, Scratch, Lua, MATLAB, Haskell, Dart, Scala, Assembly, Objective-C/Objective C, Visual Basic/VB, BASIC, Fortran, COBOL, Pascal, Bash/Shell",
      "Lisp, Elixir, Erlang, Julia, Clojure, F#/F sharp, Prolog, Groovy, Zig, Solidity, Ada, Smalltalk, OCaml, Delphi, Racket, Scheme, Crystal, Nim, PowerShell, Elm, ActionScript, CoffeeScript, Logo",
      "APL, Forth, Simula, ALGOL, Eiffel, Haxe, Mojo, Gleam, Odin, Raku, Tcl, ABAP, Modula-2, Oberon, Idris, Agda, Coq/Rocq, Chapel, Pony, Factor",
    ],
  },
  {
    id: "bread",
    text: "Name a type of bread",
    tiers: [
      "Sourdough, White bread, Whole wheat/Wheat bread, Rye, Baguette, Bagel, Pita",
      "Brioche, Ciabatta, Focaccia, Naan, Tortilla, Cornbread, Multigrain, Pumpernickel, Banana bread, Garlic bread, English muffin",
      "Challah, Soda bread, Flatbread, Roti, Chapati, Paratha, Pretzel, Bialy, Matzo/Matzah, Brown bread, Lavash, Injera, Arepa, Breadstick/Grissini, Milk bread/Shokupan, Zucchini bread, Monkey bread, Potato bread, Babka",
      "Stollen, Panettone, Pandoro, Fougasse, Pain de mie, Puri, Bhatura, Kulcha, Pão de queijo/Pao de queijo, Bolillo, Concha/Pan dulce, Johnnycake, Hardtack, Lefse, Pane carasau, Kaiser roll, Hot cross bun, Crumpet, Bannock, Damper, Simit, Khachapuri",
      "Vollkornbrot, Limpa, Barmbrack, Kalach, Borodinsky, Tiger bread/Dutch crunch, Anadama, Sally Lunn, Lángos/Langos, Mantou, Taboon, Sangak, Barbari, Markook, Laffa, Tsoureki, Pogača/Pogaca, Kifli, Stottie, Cottage loaf, Farl, Bara brith, Pan de muerto, Rosca de reyes, Chipa, Marraqueta, Pain d'épi/Pain depi",
    ],
  },
  {
    id: "sharks",
    text: "Name a kind of shark",
    strip: ["shark", "sharks"],
    tiers: [
      "Great white/White, Hammerhead, Tiger, Whale, Bull",
      "Mako/Shortfin mako, Nurse, Blue, Lemon, Basking, Megalodon, Goblin",
      "Thresher, Reef/Blacktip reef/Whitetip reef/Grey reef/Gray reef, Blacktip, Oceanic whitetip/Whitetip, Greenland, Leopard, Sand tiger, Angel, Wobbegong, Cookiecutter, Frilled, Bamboo, Sawshark/Saw",
      "Porbeagle, Dogfish/Spiny dogfish, Megamouth, Horn, Zebra, Epaulette, Salmon, Silky, Dusky, Galapagos, Sixgill/Bluntnose sixgill, Sevengill/Broadnose sevengill, Bonnethead, Lantern, Catshark, Swell, Port Jackson, Gummy, Sandbar, Copper/Bronze whaler",
      "Pocket, Kitefin, Velvet belly, Sleeper/Pacific sleeper, Crocodile, Prickly, Tope/School, Spinner, Night, Bigeye thresher, Pyjama/Pajama, Viper dogfish, Winghead, Scalloped hammerhead, Great hammerhead, Smooth hammerhead, Tasselled wobbegong",
    ],
  },
  {
    id: "ballsports",
    text: "Name a sport played with a ball",
    tiers: [
      "Soccer/Football, Basketball, Baseball, Tennis, Volleyball, American football, Golf",
      "Rugby, Cricket, Softball, Bowling, Table tennis/Ping pong, Handball, Dodgeball, Kickball, Water polo, Pool/Billiards/Snooker",
      "Lacrosse, Squash, Racquetball, Field hockey, Polo, Croquet, Netball, Pickleball, Beach volleyball, Bocce, Padel, Tetherball, Four square, Wiffle ball/Wiffleball, Australian rules football/Aussie rules/AFL, Gaelic football",
      "Hurling, Jai alai/Pelota, Sepak takraw, Korfball, Bandy, Shinty, Rounders, Stickball, Pétanque/Petanque/Boules, Skee-Ball/Skee ball, Goalball, Futsal, Canadian football, Hacky sack/Footbag, Teqball, Floorball, Underwater rugby, Kin-ball/Kinball",
      "Calcio storico, Pesäpallo/Pesapallo, Chinlone, Cuju, Fives, Real tennis, Rackets, Bossaball, Sitting volleyball, Lapta, Gateball, Woodball, Tchoukball, Knattleikr, Ulama, Harpastum, Episkyros",
    ],
  },
  {
    id: "shakespeare",
    text: "Name a Shakespeare play",
    tiers: [
      "Romeo and Juliet, Hamlet, Macbeth",
      "Othello, King Lear, A Midsummer Night's Dream/Midsummer Nights Dream, Julius Caesar, The Tempest",
      "Much Ado About Nothing, Twelfth Night, The Merchant of Venice, The Taming of the Shrew, As You Like It, Richard III/Richard 3/Richard the Third, Henry V/Henry 5/Henry the Fifth, Antony and Cleopatra",
      "Richard II/Richard 2, Henry IV/Henry 4/Henry IV Part 1/Henry IV Part 2, Henry VI/Henry 6, Henry VIII/Henry 8, King John, Coriolanus, Titus Andronicus, The Winter's Tale, Measure for Measure, All's Well That Ends Well, The Comedy of Errors, Love's Labour's Lost/Loves Labors Lost, The Two Gentlemen of Verona, The Merry Wives of Windsor, Troilus and Cressida, Cymbeline, Timon of Athens, Pericles",
      "The Two Noble Kinsmen, Edward III/Edward 3, Cardenio, Sir Thomas More",
    ],
  },
  {
    id: "cars",
    text: "Name a car brand",
    tiers: [
      "Toyota, Ford, Honda, BMW, Tesla, Chevrolet/Chevy, Mercedes/Mercedes-Benz/Benz",
      "Audi, Nissan, Volkswagen/VW, Hyundai, Kia, Ferrari, Lamborghini, Porsche, Jeep, Subaru, Mazda, Dodge",
      "Lexus, Volvo, Jaguar, Land Rover/Range Rover, Cadillac, Buick, GMC, Chrysler, Bentley, Rolls-Royce/Rolls Royce, Maserati, Bugatti, Aston Martin, McLaren, Mitsubishi, Fiat, Mini, Acura, Infiniti, Lincoln, Ram, Peugeot, Renault",
      "Alfa Romeo, Citroën/Citroen, Škoda/Skoda, SEAT, Genesis, Rivian, Lucid, Polestar, BYD, Suzuki, Opel, Vauxhall, Lotus, Pagani, Koenigsegg, Smart, Saab, Pontiac, Hummer, Lancia, Dacia, Isuzu, Daihatsu, Tata, Mahindra, Geely, Nio, Xpeng, Maybach, DeLorean, Plymouth, Oldsmobile, Saturn, Mercury, Scion",
      "Rimac, Spyker, Morgan, Caterham, TVR, Noble, Hennessey, SSC, W Motors, Lada, Proton, Perodua, Holden, Trabant, Studebaker, Packard, Hudson, Nash, AMC, Tucker, Datsun, Hispano-Suiza/Hispano Suiza, Lagonda, Zenvo, Ginetta, Fisker, VinFast, Zeekr, Lynk & Co, Chery, Great Wall, Hongqi, Cupra, Abarth, De Tomaso, Facel Vega",
    ],
  },
  {
    id: "aussie",
    text: "Name an animal that lives in Australia",
    tiers: [
      "Kangaroo, Koala, Emu, Wombat, Platypus",
      "Dingo, Crocodile/Saltwater crocodile/Saltie, Kookaburra, Wallaby, Tasmanian devil, Echidna",
      "Quokka, Possum, Cassowary, Box jellyfish, Redback spider/Redback, Funnel-web spider/Funnel-web/Funnel web, Huntsman spider/Huntsman, Taipan/Inland taipan, Eastern brown snake/Brown snake, Cockatoo, Galah, Lorikeet/Rainbow lorikeet, Frilled lizard/Frill-necked lizard, Goanna, Bilby, Sugar glider, Little penguin/Fairy penguin, Dugong, Flying fox",
      "Numbat, Quoll, Bandicoot, Thorny devil, Bearded dragon, Blue-tongued lizard/Bluetongue/Blue tongue lizard, Lyrebird, Australian magpie/Magpie, Cane toad, Wallaroo, Pademelon, Potoroo, Bettong, Tree kangaroo, Black swan, Brolga, Cuscus, Stonefish, Blue-ringed octopus/Blue ringed octopus, Tawny frogmouth, Tiger snake, Death adder, Thylacine/Tasmanian tiger, Budgerigar/Budgie, Gang-gang cockatoo",
      "Kowari, Mulgara, Dunnart, Antechinus, Planigale, Marsupial mole, Woylie, Rock wallaby, Corroboree frog, Gouldian finch, Superb fairywren/Fairywren, Satin bowerbird/Bowerbird, Leadbeater's possum, Ningaui, Pygmy possum, Water-holding frog, Bush stone-curlew/Bush stone curlew, Hairy-nosed wombat",
    ],
  },
  {
    id: "spices",
    text: "Name a herb or spice",
    tiers: [
      "Black pepper/Pepper, Basil, Cinnamon, Oregano, Garlic, Parsley",
      "Rosemary, Thyme, Cumin, Paprika, Ginger, Mint, Turmeric, Nutmeg, Cilantro/Coriander, Chili powder, Dill, Bay leaf/Bay leaves, Sage, Vanilla",
      "Cayenne, Clove/Cloves, Cardamom, Saffron, Chives, Allspice, Fennel, Tarragon, Star anise/Anise, Mustard seed/Mustard, Curry powder, Garam masala, Sesame/Sesame seed, Lemongrass, Marjoram, Poppy seed",
      "Sumac, Za'atar/Zaatar, Fenugreek, Caraway, Juniper/Juniper berry, Mace, Asafoetida/Hing, Lavender, Chervil, Lovage, Savory, Sichuan pepper/Szechuan pepper, Five spice/Chinese five spice, Ras el hanout, Smoked paprika, Celery seed, Makrut lime leaf/Kaffir lime leaf/Lime leaf, Galangal, Annatto/Achiote, Nigella/Black seed, Epazote, Borage",
      "Grains of paradise, Long pepper, Mahlab/Mahleb, Amchur/Mango powder, Ajwain/Carom, Sorrel, Hyssop, Angelica, Shiso/Perilla, Rue, Culantro, Lemon verbena, Sweet cicely, Wattleseed, Pink peppercorn, Cubeb, Kokum, Sansho, Shichimi togarashi/Togarashi, Berbere, Baharat, Dukkah, Tonka bean",
    ],
  },
  {
    id: "seas",
    text: "Name a sea",
    strip: ["sea", "of"],
    tiers: [
      "Mediterranean Sea, Caribbean Sea, Red Sea, Dead Sea, Black Sea",
      "Caspian Sea, North Sea, Baltic Sea, Arabian Sea, Adriatic Sea, Aegean Sea, South China Sea, Sea of Japan/East Sea, Bering Sea",
      "Coral Sea, Tasman Sea, Sargasso Sea, Irish Sea, Ionian Sea, Tyrrhenian Sea, Yellow Sea, East China Sea, Barents Sea, Norwegian Sea, Celtic Sea, Labrador Sea, Philippine Sea, Andaman Sea, Java Sea, Ross Sea, Weddell Sea",
      "Ligurian Sea, Alboran Sea, Sea of Marmara, Sea of Azov, Kara Sea, Laptev Sea, Beaufort Sea, Chukchi Sea, East Siberian Sea, Greenland Sea, White Sea, Sea of Okhotsk, Sulu Sea, Celebes Sea, Banda Sea, Timor Sea, Arafura Sea, Solomon Sea, Bismarck Sea, Scotia Sea, Amundsen Sea, Bellingshausen Sea, Wadden Sea, Salish Sea, Sibuyan Sea, Seto Inland Sea, Aral Sea, Sea of Galilee",
      "Lincoln Sea, Wandel Sea, Cosmonauts Sea, Cooperation Sea, Mawson Sea, Dumont d'Urville Sea, Somov Sea, Riiser-Larsen Sea/Riiser Larsen Sea, Flores Sea, Bali Sea, Savu Sea, Halmahera Sea, Molucca Sea, Seram Sea/Ceram Sea, Visayan Sea, Camotes Sea, Bohol Sea/Mindanao Sea, Sea of Crete, Thracian Sea, Myrtoan Sea, Balearic Sea, Salton Sea",
    ],
  },
  {
    id: "painters",
    text: "Name a famous painter",
    loose: true,
    tiers: [
      "Leonardo da Vinci/Da Vinci/Leonardo, Pablo Picasso/Picasso, Vincent van Gogh/Van Gogh, Michelangelo, Claude Monet/Monet",
      "Rembrandt, Frida Kahlo/Kahlo, Salvador Dalí/Dali, Andy Warhol/Warhol, Bob Ross, Raphael, Georgia O'Keeffe/OKeeffe, Jackson Pollock/Pollock, Johannes Vermeer/Vermeer, Renoir, Matisse, Klimt",
      "Cézanne/Cezanne, Degas, Manet, Botticelli, Caravaggio, Edvard Munch/Munch, Kandinsky, Hokusai, Basquiat, Rothko, Gauguin, Seurat, Magritte, Banksy, Goya, Rubens, Titian, Edward Hopper/Hopper, J. M. W. Turner/Turner, Constable, Norman Rockwell/Rockwell, Keith Haring/Haring",
      "Velázquez/Velazquez, El Greco, Bruegel/Brueghel/Breughel, Hieronymus Bosch/Bosch, Dürer/Durer, Toulouse-Lautrec/Toulouse Lautrec, Chagall, Mondrian, Miró/Miro, Modigliani, Schiele, Pissarro, Whistler, John Singer Sargent/Sargent, Delacroix, Ingres, Lichtenstein, David Hockney/Hockney, Yayoi Kusama/Kusama, Diego Rivera/Rivera, Klee, Mary Cassatt/Cassatt, Berthe Morisot/Morisot, Caillebotte, Van Eyck, Holbein, Tintoretto, Giotto, Fra Angelico, Artemisia Gentileschi/Gentileschi, Hiroshige, Caspar David Friedrich/Friedrich, Francis Bacon, Lucian Freud, Andrew Wyeth/Wyeth, Grant Wood",
      "Hilma af Klint, Sorolla, Repin, Alphonse Mucha/Mucha, Vigée Le Brun/Vigee Le Brun, Fragonard, Watteau, Boucher, Chardin, Corot, Courbet, Millet, Gérôme/Gerome, Bouguereau, Waterhouse, Rossetti, Millais, Burne-Jones/Burne Jones, Hammershøi/Hammershoi, Zorn, Kirchner, Nolde, Franz Marc, Beckmann, Otto Dix, De Chirico, Tamara de Lempicka/Lempicka, Leonora Carrington, Remedios Varo, Agnes Martin, Joan Mitchell, Lee Krasner, Helen Frankenthaler/Frankenthaler, Rauschenberg, Cy Twombly/Twombly, Gerhard Richter/Richter, Anselm Kiefer/Kiefer, Henry Ossawa Tanner, Jacob Lawrence, Romare Bearden/Bearden, Alma Thomas, Kerry James Marshall, Kehinde Wiley, Amy Sherald",
    ],
  },
  {
    id: "presidents",
    text: "Name a US president (last name is fine)",
    loose: true,
    tiers: [
      "Lincoln, Washington, Obama, Trump, Biden, Kennedy/JFK",
      "Roosevelt/FDR, Jefferson, Reagan, Bush, Clinton, Nixon, Adams",
      "Carter, Truman, Eisenhower/Ike, Jackson, Madison, Johnson/LBJ, Grant, Ford, Wilson, Monroe",
      "Hoover, Coolidge, Taft, McKinley, Polk, Harding, Van Buren, Harrison, Cleveland, Garfield, Taylor",
      "Tyler, Fillmore, Pierce, Buchanan, Hayes, Arthur",
    ],
  },
  {
    id: "southamerica",
    text: "Name a country or territory in South America",
    tiers: [
      "Brazil, Argentina, Peru, Colombia, Chile",
      "Venezuela, Ecuador, Bolivia",
      "Uruguay, Paraguay",
      "Guyana, Suriname",
      "French Guiana, Falkland Islands/Falklands",
    ],
  },
  {
    id: "trees",
    text: "Name a kind of tree",
    strip: ["tree", "trees"],
    tiers: [
      "Oak, Pine, Maple, Palm, Birch, Willow",
      "Redwood, Sequoia, Spruce, Fir, Cedar, Elm, Ash, Cherry, Apple, Baobab, Aspen, Poplar, Magnolia",
      "Beech, Cypress, Eucalyptus, Sycamore, Chestnut, Walnut, Hickory, Dogwood, Juniper, Hemlock, Larch, Yew, Olive, Lemon, Orange, Teak, Mahogany, Ginkgo, Banyan, Acacia, Mango, Fig, Alder, Hazel, Hawthorn, Holly, Linden/Lime, Cottonwood",
      "Sassafras, Tamarack, Catalpa, Jacaranda, Hornbeam, Rowan, Sweetgum, Tulip, Locust/Black locust, Mulberry, Persimmon, Pecan, Ebony, Rosewood, Balsa, Cork oak, Joshua, Kapok, Neem, Monkey puzzle, Bristlecone/Bristlecone pine, Douglas fir, Rubber, Cacao, Coconut/Coconut palm, Date/Date palm, Wollemi pine, Buckeye, Horse chestnut, Box elder, Basswood, Tupelo, Paulownia",
      "Tamarind, Dragon's blood/Dragons blood, Quiver, Ironwood, Lignum vitae, Sandalwood, Ombú/Ombu, Rainbow eucalyptus, Bunya pine/Bunya, Kauri, Totara, Pōhutukawa/Pohutukawa, Huon pine, Cryptomeria, Dawn redwood/Metasequoia, Osage orange, Hackberry, Pawpaw, Witch hazel, Serviceberry, Hophornbeam, Wingnut, Zelkova, Katsura, Medlar, Quince",
    ],
  },
];
