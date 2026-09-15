window.PRODUCTS = [
  {
    id: "vector-ff", name: "Motorip Vector FF", category: "helmet", price: 8999, oldPrice: 10499,
    rating: 4.7, reviews: 286, inStock: true,
    image: "images/vector-ff.jpg",
    imageAlt: "White full-face motorcycle helmet with the clear visor raised",
    shortDesc: "Full-face road helmet with ISI and ECE 22.06 certification.",
    fullDesc: "A balanced full-face helmet for daily commutes and weekend highway runs. Its aerodynamic shell, wide visor and channelled ventilation deliver comfort without compromising certified protection.",
    features: ["ISI and ECE 22.06 certified", "Pinlock-ready clear visor", "Removable washable liner", "Double-D ring closure"],
    sizes: ["S", "M", "L", "XL"], colors: [{ name: "Matte Black", hex: "#252525" }, { name: "Pearl White", hex: "#E8E8E3" }, { name: "Racing Red", hex: "#B92732" }]
  },
  {
    id: "drift-open", name: "Motorip Drift Open", category: "helmet", price: 2499, oldPrice: null,
    rating: 4.3, reviews: 174, inStock: true,
    image: "images/drift-open.jpg",
    imageAlt: "Silver open-face motorcycle helmet with a long clear visor",
    shortDesc: "Light open-face helmet built for everyday city riding.",
    fullDesc: "The Drift Open keeps urban rides light, cool and convenient. A long clear visor handles dust and wind while the plush liner stays comfortable through stop-and-go traffic.",
    features: ["ISI certified shell", "Full-length clear visor", "Quick-release buckle", "Washable comfort liner"],
    sizes: ["S", "M", "L", "XL"], colors: [{ name: "Gloss Black", hex: "#171717" }, { name: "Slate Grey", hex: "#62666B" }, { name: "Ivory", hex: "#E9E2D2" }]
  },
  {
    id: "apex-carbon", name: "Motorip Apex Carbon", category: "helmet", price: 18499, oldPrice: null,
    rating: 4.8, reviews: 91, inStock: true,
    image: "images/apex-carbon.jpg",
    imageAlt: "Glossy black full-face motorcycle helmet with the visor open",
    shortDesc: "Lightweight carbon full-face helmet for performance riding.",
    fullDesc: "Built around a genuine carbon-composite shell, the Apex Carbon cuts weight while retaining serious impact protection. Its stable high-speed profile and emergency-release cheek pads suit focused road riders.",
    features: ["ECE 22.06 certified", "Carbon-composite shell", "Emergency cheek-pad release", "Included Pinlock insert"],
    sizes: ["S", "M", "L", "XL"], colors: [{ name: "Carbon Black", hex: "#202124" }, { name: "Carbon Red", hex: "#6E2029" }]
  },
  {
    id: "monsoon-mesh", name: "Motorip Monsoon Mesh", category: "jacket", price: 8999, oldPrice: null,
    rating: 4.6, reviews: 238, inStock: true,
    image: "images/monsoon-mesh.jpg",
    imageAlt: "Rider wearing a black and white armoured motorcycle jacket, front view",
    shortDesc: "All-weather mesh jacket with CE Level 2 armour.",
    fullDesc: "The Monsoon Mesh combines generous airflow with removable rain and thermal liners. CE Level 2 armour at key impact zones makes it ready for changing Indian riding conditions.",
    features: ["CE Level 2 shoulder and elbow armour", "CE Level 2 back protector", "Removable rain liner", "Reflective night detailing"],
    sizes: ["S", "M", "L", "XL", "2XL"], colors: [{ name: "Black", hex: "#202124" }, { name: "Stone", hex: "#77756E" }, { name: "Black Red", hex: "#7D252E" }]
  },
  {
    id: "streetline", name: "Motorip Streetline", category: "jacket", price: 4999, oldPrice: null,
    rating: 4.2, reviews: 193, inStock: true,
    image: "images/streetline.jpg",
    imageAlt: "Close-up of a dark leather riding jacket with a raised collar and centre zip",
    shortDesc: "Clean urban textile jacket with CE Level 1 protection.",
    fullDesc: "A low-profile riding jacket that fits naturally into city life. Abrasion-resistant textile panels and discreet CE armour add protection without bulky touring styling.",
    features: ["CE Level 1 shoulder and elbow armour", "Abrasion-resistant 600D shell", "Airflow chest vents", "Trouser connection loop"],
    sizes: ["S", "M", "L", "XL", "2XL"], colors: [{ name: "Midnight", hex: "#20242A" }, { name: "Olive", hex: "#525744" }]
  },
  {
    id: "expedition", name: "Motorip Expedition", category: "jacket", price: 13999, oldPrice: 15999,
    rating: 4.8, reviews: 127, inStock: true,
    image: "images/expedition.jpg",
    imageAlt: "Rider in a black armoured touring jacket seen from the side and back",
    shortDesc: "Three-layer, four-season jacket for serious touring.",
    fullDesc: "The Expedition adapts from summer highways to wet mountain passes with independent waterproof and thermal liners. Multiple adjustment points keep the protective shell secure on long-distance rides.",
    features: ["Three-layer modular construction", "CE Level 2 armour package", "Large direct-air vents", "Eight waterproof storage pockets"],
    sizes: ["M", "L", "XL", "2XL", "3XL"], colors: [{ name: "Black Sand", hex: "#514C43" }, { name: "Graphite", hex: "#3F4448" }]
  },
  {
    id: "grip-pro", name: "Motorip Grip Pro", category: "gloves", price: 2799, oldPrice: null,
    rating: 4.5, reviews: 312, inStock: true,
    image: "images/grip-pro.jpg",
    imageAlt: "Pair of red and white leather riding gloves with metal knuckle armour",
    shortDesc: "Ventilated summer gloves with hard knuckle armour.",
    fullDesc: "Grip Pro gloves use perforated leather and mesh to keep hands cool in summer. A hard knuckle shell and reinforced palm protect common impact and slide zones.",
    features: ["Hard knuckle protector", "Leather palm reinforcement", "Touchscreen fingertips", "Hook-and-loop wrist closure"],
    sizes: ["S", "M", "L", "XL"], colors: [{ name: "Black", hex: "#191919" }, { name: "Black Red", hex: "#8D2631" }]
  },
  {
    id: "tundra-wp", name: "Motorip Tundra WP", category: "gloves", price: 3999, oldPrice: null,
    rating: 4.4, reviews: 118, inStock: true,
    image: "images/tundra-wp.jpg",
    imageAlt: "Pair of long-cuff gauntlet motorcycle gloves with hard knuckle protection",
    shortDesc: "Waterproof winter gauntlets with a warm insulated lining.",
    fullDesc: "The Tundra WP seals over jacket cuffs to keep rain and cold wind out. A waterproof membrane and light insulation retain feel at the controls on winter tours.",
    features: ["Waterproof breathable membrane", "Insulated thermal lining", "TPU knuckle protection", "Dual gauntlet closure"],
    sizes: ["S", "M", "L", "XL"], colors: [{ name: "Black", hex: "#1F2022" }, { name: "Charcoal", hex: "#47494D" }]
  },
  {
    id: "urban-short", name: "Motorip Urban Short", category: "gloves", price: 1899, oldPrice: null,
    rating: 4.1, reviews: 226, inStock: true,
    image: "images/urban-short.jpg",
    imageAlt: "Two pairs of short-cuff leather gloves in tan and black",
    shortDesc: "Short-cuff commuter glove with everyday flexibility.",
    fullDesc: "Easy to wear and quick to secure, the Urban Short is tuned for daily traffic. Stretch panels preserve control feel while padded impact zones cover the essentials.",
    features: ["Flexible knuckle armour", "Amara reinforced palm", "Touchscreen compatible", "Reflective finger detail"],
    sizes: ["S", "M", "L", "XL"], colors: [{ name: "Black", hex: "#202020" }, { name: "Tan", hex: "#8A644A" }]
  },
  {
    id: "tourer-mid", name: "Motorip Tourer Mid", category: "boots", price: 5999, oldPrice: null,
    rating: 4.5, reviews: 149, inStock: true,
    image: "images/tourer-mid.jpg",
    imageAlt: "Pair of black mid-calf motorcycle boots with moulded ankle protection",
    shortDesc: "Mid-height touring boot with reinforced ankle protection.",
    fullDesc: "Tourer Mid boots balance walking comfort with secure motorcycle protection. Reinforced ankles, heel and toe are paired with a weather-resistant upper for dependable road trips.",
    features: ["Moulded ankle protectors", "Reinforced heel and toe", "Anti-slip touring sole", "Reflective heel insert"],
    sizes: ["7", "8", "9", "10", "11"], colors: [{ name: "Black", hex: "#222222" }, { name: "Dark Brown", hex: "#49382D" }]
  },
  {
    id: "trail-adv", name: "Motorip Trail ADV", category: "boots", price: 8499, oldPrice: null,
    rating: 4.7, reviews: 84, inStock: false,
    image: "images/trail-adv.jpg",
    imageAlt: "Pair of tall black and blue adventure motorcycle boots",
    shortDesc: "High-cut adventure boot made for mixed-terrain rides.",
    fullDesc: "The Trail ADV uses a tall supportive chassis for standing on the pegs and tackling broken roads. Buckle closures, a shin plate and a lugged sole offer dependable adventure-riding control.",
    features: ["Rigid shin and ankle protection", "Three replaceable buckles", "Lugged anti-slip sole", "Water-resistant lining"],
    sizes: ["7", "8", "9", "10", "11"], colors: [{ name: "Black", hex: "#202020" }, { name: "Dirt Brown", hex: "#695040" }]
  },
  {
    id: "nomad-60l", name: "Motorip Nomad 60L", category: "luggage", price: 7450, oldPrice: null,
    rating: 4.6, reviews: 167, inStock: true,
    image: "images/nomad-60l.jpg",
    imageAlt: "Black soft saddlebags mounted on the rear of a motorcycle",
    shortDesc: "Stormproof 60-litre saddlebags for long-distance travel.",
    fullDesc: "The Nomad pair provides 60 litres of flexible, stormproof storage without hard-case weight. Roll-top closures and universal webbing mounts fit a wide range of touring motorcycles.",
    features: ["60-litre combined capacity", "Welded stormproof liners", "Reflective outer panels", "Universal mounting straps"],
    sizes: ["60L"], colors: [{ name: "Black", hex: "#242424" }, { name: "Sand", hex: "#98866E" }]
  },
  {
    id: "cargo-18l", name: "Motorip Cargo 18L", category: "luggage", price: 4199, oldPrice: null,
    rating: 4.3, reviews: 205, inStock: true,
    image: "images/cargo-18l.jpg",
    imageAlt: "Black tank bag with a clear map pocket fitted to a motorcycle fuel tank",
    shortDesc: "Expandable magnetic tank bag with quick-access storage.",
    fullDesc: "Cargo 18L keeps essentials visible and within reach on the tank. Strong covered magnets, a transparent document sleeve and backpack straps make it useful on and off the bike.",
    features: ["12-to-18-litre expansion", "Covered high-strength magnets", "Touch-compatible map pocket", "Convertible backpack straps"],
    sizes: ["18L"], colors: [{ name: "Black", hex: "#202124" }, { name: "Grey", hex: "#5A5D60" }]
  },
  {
    id: "guard-knee", name: "Motorip Guard Knee", category: "accessories", price: 2299, oldPrice: null,
    rating: 3.9, reviews: 142, inStock: true,
    image: "images/guard-knee.jpg",
    imageAlt: "Pair of black strap-on knee guards with hard moulded shells",
    shortDesc: "Strap-on CE knee armour for everyday riding.",
    fullDesc: "Guard Knee protectors add certified coverage over riding jeans or trousers. The articulated shell follows knee movement while broad straps keep each guard comfortably in place.",
    features: ["CE EN 1621-1 certified", "Articulated impact shell", "Breathable comfort lining", "Three adjustable straps"],
    sizes: ["One Size"], colors: [{ name: "Black", hex: "#242424" }]
  }
];
