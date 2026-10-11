export type CategoryId =
  | 'vegetable-seeds'
  | 'fruit-seeds'
  | 'herb-seeds'
  | 'flower-seeds'
  | 'specialty-seeds';

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  image: string;
  icon: string;
}

export interface GrowingInfo {
  sowing: string;
  spacing: string;
  germination: string;
  maturity: string;
  watering: string;
  sunlight: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  cropType: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  season: string;
  growingType: string;
  seedType: string;
  suitableConditions: string;
  availableFormats: string[];
  characteristics: string[];
  growingInfo: GrowingInfo;
  featured: boolean;
}

export const categories: Category[] = [
  {
    id: 'vegetable-seeds',
    name: 'Vegetable Seeds',
    shortName: 'Vegetables',
    description: 'Dependable vegetable varieties for kitchen gardens and commercial cultivation alike.',
    longDescription:
      'From root crops to fruiting vegetables, our vegetable seed range covers the staples and the specialty. Each variety is selected for germination reliability, disease tolerance, and yield consistency across Indian growing conditions.',
    image: 'https://images.pexels.com/photos/2255925/pexels-photo-2255925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Carrot',
  },
  {
    id: 'fruit-seeds',
    name: 'Fruit Seeds',
    shortName: 'Fruits',
    description: 'Fruiting crop seeds chosen for flavour, vigour, and adaptability to warm-climate cultivation.',
    longDescription:
      'Our fruit seed catalogue includes melons, papaya, and other fruiting crops suited to Indian climate zones. Varieties are evaluated for fruit quality, plant vigour, and performance under both open-field and protected cultivation.',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Apple',
  },
  {
    id: 'herb-seeds',
    name: 'Herb Seeds',
    shortName: 'Herbs',
    description: 'Aromatic and culinary herb seeds for continuous harvest and kitchen-garden use.',
    longDescription:
      'Herbs add value to any garden or commercial operation. Our herb seed selection focuses on flavour intensity, bolt resistance, and cut-and-come-again productivity — ideal for home gardeners, kitchen gardens, and small-scale commercial growers.',
    image: 'https://images.pexels.com/photos/606540/pexels-photo-606540.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Leaf',
  },
  {
    id: 'flower-seeds',
    name: 'Flower Seeds',
    shortName: 'Flowers',
    description: 'Ornamental and pollinator-friendly flower seeds for landscapes, borders, and commercial blooms.',
    longDescription:
      'Our flower seed range includes marigolds, sunflowers, and other ornamental varieties suited to Indian gardens and landscapes. Selected for bloom size, colour vibrancy, and flowering duration, these varieties support pollinators and beautify any space.',
    image: 'https://images.pexels.com/photos/14304140/pexels-photo-14304140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Flower2',
  },
  {
    id: 'specialty-seeds',
    name: 'Specialty Seeds',
    shortName: 'Specialty',
    description: 'Pseudocereal and specialty grain seeds for nutritional diversification and niche cultivation.',
    longDescription:
      'Our specialty seed range includes pseudocereals like quinoa and buckwheat — crops gaining recognition for their nutritional density and adaptability to marginal lands. These varieties offer growers an opportunity to diversify into high-value niche markets.',
    image: 'https://images.pexels.com/photos/28396511/pexels-photo-28396511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Wheat',
  },
];

export const products: Product[] = [
  {
    id: 'tomato-seeds',
    name: 'Tomato Seeds',
    category: 'vegetable-seeds',
    cropType: 'Fruiting Vegetable',
    image: 'https://images.pexels.com/photos/2858259/pexels-photo-2858259.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'High-yielding determinate variety with excellent fruit set and disease tolerance.',
    longDescription:
      'Our tomato seeds produce vigorous determinate plants with uniform, medium-large fruit. Selected for adaptability across Indian climate zones, this variety offers reliable germination, strong disease tolerance, and consistent fruit quality suitable for both fresh market and processing use.',
    season: 'Kharif & Rabi',
    growingType: 'Open Field / Protected',
    seedType: 'Open-pollinated',
    suitableConditions: 'Well-drained loamy soil, pH 6.0–6.8, warm temperatures 20–30°C',
    availableFormats: ['10g packet', '50g packet', '250g tin', '1kg bulk'],
    characteristics: ['Determinate growth', 'Medium-large fruit', 'High fruit set', 'Heat tolerant', 'Fusarium resistant'],
    growingInfo: {
      sowing: 'Jun–Jul (Kharif), Oct–Nov (Rabi)',
      spacing: '60 × 45 cm',
      germination: '6–8 days',
      maturity: '70–80 days',
      watering: 'Regular, keep soil evenly moist',
      sunlight: 'Full sun (6–8 hours)',
    },
    featured: true,
  },
  {
    id: 'carrot-seeds',
    name: 'Carrot Seeds',
    category: 'vegetable-seeds',
    cropType: 'Root Vegetable',
    image: 'https://images.pexels.com/photos/9039999/pexels-photo-9039999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Long, straight roots with deep orange colour and sweet flavour.',
    longDescription:
      'These carrot seeds produce long, cylindrical roots with deep orange interior colour and excellent sweetness. Selected for uniform root development and smooth skin finish, this variety performs well in sandy loam soils and is suitable for both fresh market and processing.',
    season: 'Rabi',
    growingType: 'Open Field',
    seedType: 'Open-pollinated',
    suitableConditions: 'Deep sandy loam, pH 6.0–7.0, cool season 15–25°C',
    availableFormats: ['10g packet', '50g packet', '250g tin', '1kg bulk'],
    characteristics: ['Long cylindrical roots', 'Deep orange colour', 'Sweet flavour', 'Uniform development', 'Smooth skin'],
    growingInfo: {
      sowing: 'Sep–Nov',
      spacing: '30 × 10 cm',
      germination: '10–14 days',
      maturity: '90–110 days',
      watering: 'Moderate, avoid waterlogging',
      sunlight: 'Full sun to partial shade',
    },
    featured: false,
  },
  {
    id: 'watermelon-seeds',
    name: 'Watermelon Seeds',
    category: 'fruit-seeds',
    cropType: 'Fruiting Crop',
    image: 'https://images.pexels.com/photos/17745168/pexels-photo-17745168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Large oblong fruit with bright red flesh and high sugar content.',
    longDescription:
      'Our watermelon seeds produce vigorous vines bearing large, oblong fruit with bright red, crisp flesh and high sugar content. This variety is selected for heat tolerance, uniform fruit size, and excellent transport quality, making it ideal for commercial cultivation in warm-climate regions.',
    season: 'Summer (Kharif)',
    growingType: 'Open Field',
    seedType: 'Hybrid',
    suitableConditions: 'Sandy loam, pH 6.0–7.5, warm climate 25–35°C',
    availableFormats: ['10g packet', '50g packet', '100g tin', '500g bulk'],
    characteristics: ['Large oblong fruit', 'Bright red flesh', 'High sugar content', 'Heat tolerant', 'Good transport quality'],
    growingInfo: {
      sowing: 'Feb–Mar, Jun–Jul',
      spacing: '200 × 100 cm',
      germination: '7–10 days',
      maturity: '80–90 days',
      watering: 'Deep, infrequent; reduce before harvest',
      sunlight: 'Full sun (8+ hours)',
    },
    featured: true,
  },
  {
    id: 'papaya-seeds',
    name: 'Papaya Seeds',
    category: 'fruit-seeds',
    cropType: 'Fruiting Crop',
    image: 'https://images.pexels.com/photos/3187104/pexels-photo-3187104.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Dwarf prolific variety with medium-sized fruit and high papain yield.',
    longDescription:
      'These papaya seeds produce a dwarf, prolific variety bearing medium-sized fruit with yellow-orange flesh and sweet flavour. Selected for early bearing, high fruit count per plant, and compact growth habit, this variety is well-suited to both home gardens and commercial orchards in tropical and subtropical regions.',
    season: 'Year-round (best: Feb–Mar)',
    growingType: 'Open Field',
    seedType: 'Open-pollinated',
    suitableConditions: 'Well-drained loamy soil, pH 6.0–7.0, tropical climate 25–35°C',
    availableFormats: ['5g packet', '25g packet', '100g tin', '500g bulk'],
    characteristics: ['Dwarf growth habit', 'Medium fruit size', 'Early bearing', 'High fruit count', 'Sweet yellow-orange flesh'],
    growingInfo: {
      sowing: 'Feb–Mar, Sep–Oct',
      spacing: '180 × 180 cm',
      germination: '10–15 days',
      maturity: '9–10 months',
      watering: 'Regular, well-drained soil',
      sunlight: 'Full sun (6–8 hours)',
    },
    featured: false,
  },
  {
    id: 'coriander-seeds',
    name: 'Coriander Seeds',
    category: 'herb-seeds',
    cropType: 'Culinary Herb',
    image: 'https://images.pexels.com/photos/10329642/pexels-photo-10329642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Bolt-resistant variety with abundant foliage and extended harvest window.',
    longDescription:
      'Our coriander seeds produce a slow-bolting variety with lush, dark green leaves and an extended harvest window. Selected for cut-and-come-again productivity and strong flavour, this variety is ideal for both culinary use and spice seed production, performing well in cooler growing seasons.',
    season: 'Rabi',
    growingType: 'Open Field / Container',
    seedType: 'Open-pollinated',
    suitableConditions: 'Well-drained loamy soil, pH 6.5–7.5, cool season 15–25°C',
    availableFormats: ['25g packet', '100g packet', '500g tin', '1kg bulk'],
    characteristics: ['Bolt resistant', 'Abundant foliage', 'Dark green leaves', 'Extended harvest', 'Strong flavour'],
    growingInfo: {
      sowing: 'Oct–Nov, Feb–Mar',
      spacing: '20 × 10 cm',
      germination: '7–12 days',
      maturity: '40–50 days (leaves), 90–100 days (seed)',
      watering: 'Regular, keep soil moist',
      sunlight: 'Partial shade to full sun',
    },
    featured: true,
  },
  {
    id: 'chilli-seeds',
    name: 'Chilli Seeds',
    category: 'vegetable-seeds',
    cropType: 'Fruiting Vegetable',
    image: 'https://images.pexels.com/photos/6342150/pexels-photo-6342150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Medium-hot red chilli with high pungency and excellent drying quality.',
    longDescription:
      'These chilli seeds produce compact plants bearing medium-hot, slender red chillies with high pungency and excellent drying quality. Selected for disease resistance, continuous fruiting, and uniform colour development, this variety is widely cultivated across India for both fresh market and dry chilli production.',
    season: 'Kharif & Rabi',
    growingType: 'Open Field / Protected',
    seedType: 'Open-pollinated',
    suitableConditions: 'Well-drained sandy loam, pH 5.5–7.0, warm climate 20–30°C',
    availableFormats: ['10g packet', '50g packet', '100g tin', '500g bulk'],
    characteristics: ['Medium-hot pungency', 'Slender red fruit', 'Excellent drying quality', 'Continuous fruiting', 'Disease resistant'],
    growingInfo: {
      sowing: 'May–Jun, Sep–Oct',
      spacing: '45 × 45 cm',
      germination: '7–12 days',
      maturity: '90–110 days',
      watering: 'Moderate, avoid waterlogging',
      sunlight: 'Full sun (6–8 hours)',
    },
    featured: false,
  },
  {
    id: 'spinach-seeds',
    name: 'Spinach Seeds',
    category: 'vegetable-seeds',
    cropType: 'Leafy Vegetable',
    image: 'https://images.pexels.com/photos/35252799/pexels-photo-35252799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Fast-growing leafy spinach with dark green, tender leaves for multiple harvests.',
    longDescription:
      'Our spinach seeds produce fast-growing plants with large, dark green, tender leaves. Selected for bolt resistance, rapid regrowth after cutting, and high nutritional value, this variety is ideal for continuous harvest in kitchen gardens and commercial leafy-green operations.',
    season: 'Rabi (Cool season)',
    growingType: 'Open Field / Container',
    seedType: 'Open-pollinated',
    suitableConditions: 'Moist, well-drained loamy soil, pH 6.5–7.5, cool season 10–25°C',
    availableFormats: ['10g packet', '50g packet', '250g tin', '1kg bulk'],
    characteristics: ['Fast growing', 'Dark green tender leaves', 'Bolt resistant', 'Multiple harvests', 'High nutritional value'],
    growingInfo: {
      sowing: 'Sep–Feb',
      spacing: '20 × 10 cm',
      germination: '5–7 days',
      maturity: '30–40 days',
      watering: 'Frequent, keep soil consistently moist',
      sunlight: 'Partial shade to full sun',
    },
    featured: false,
  },
  {
    id: 'cucumber-seeds',
    name: 'Cucumber Seeds',
    category: 'vegetable-seeds',
    cropType: 'Fruiting Vegetable',
    image: 'https://images.pexels.com/photos/31737291/pexels-photo-31737291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Parthenocarpic variety with straight, dark green fruit and no bitterness.',
    longDescription:
      'These cucumber seeds produce vigorous, parthenocarpic plants bearing straight, uniform, dark green fruit with no bitterness. Selected for early maturity, multiple fruit set per node, and resistance to common cucurbit diseases, this variety excels in both open-field and protected cultivation.',
    season: 'Summer & Kharif',
    growingType: 'Open Field / Protected',
    seedType: 'Hybrid',
    suitableConditions: 'Well-drained sandy loam, pH 6.0–7.0, warm climate 20–30°C',
    availableFormats: ['10g packet', '50g packet', '100g tin', '500g bulk'],
    characteristics: ['Parthenocarpic', 'Straight dark green fruit', 'No bitterness', 'Early maturity', 'Multiple fruit per node'],
    growingInfo: {
      sowing: 'Feb–Mar, Jun–Jul',
      spacing: '120 × 60 cm',
      germination: '5–8 days',
      maturity: '50–60 days',
      watering: 'Regular, keep soil evenly moist',
      sunlight: 'Full sun (6–8 hours)',
    },
    featured: false,
  },
  {
    id: 'pumpkin-seeds',
    name: 'Pumpkin Seeds',
    category: 'vegetable-seeds',
    cropType: 'Fruiting Vegetable',
    image: 'https://images.pexels.com/photos/18748109/pexels-photo-18748109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Large-fruited variety with thick orange flesh and excellent storage life.',
    longDescription:
      'Our pumpkin seeds produce vigorous, spreading vines bearing large, round fruit with thick, deep orange flesh and excellent storage life. Selected for uniform fruit size, high flesh-to-seed ratio, and adaptability to diverse soil types, this variety is valued for both culinary and stock-feed applications.',
    season: 'Kharif & Summer',
    growingType: 'Open Field',
    seedType: 'Open-pollinated',
    suitableConditions: 'Well-drained sandy loam, pH 6.0–7.0, warm climate 20–30°C',
    availableFormats: ['10g packet', '50g packet', '250g tin', '1kg bulk'],
    characteristics: ['Large round fruit', 'Thick orange flesh', 'Excellent storage life', 'High flesh-to-seed ratio', 'Adaptable to diverse soils'],
    growingInfo: {
      sowing: 'Feb–Mar, Jun–Jul',
      spacing: '250 × 150 cm',
      germination: '6–10 days',
      maturity: '100–120 days',
      watering: 'Moderate, deep watering at intervals',
      sunlight: 'Full sun (8+ hours)',
    },
    featured: false,
  },
  {
    id: 'marigold-seeds',
    name: 'Marigold Seeds',
    category: 'flower-seeds',
    cropType: 'Ornamental Flower',
    image: 'https://images.pexels.com/photos/14304115/pexels-photo-14304115.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'African marigold with large double blooms in vibrant orange and gold.',
    longDescription:
      'These marigold seeds produce compact, well-branched plants bearing large, double blooms in vibrant shades of orange and gold. Selected for long flowering duration, uniform bloom size, and pest-repellent properties, this variety is ideal for garden borders, landscaping, and garland production.',
    season: 'Year-round',
    growingType: 'Open Field / Container',
    seedType: 'Open-pollinated',
    suitableConditions: 'Well-drained loamy soil, pH 6.0–7.5, warm climate 20–30°C',
    availableFormats: ['2g packet', '10g packet', '50g tin', '250g bulk'],
    characteristics: ['Large double blooms', 'Vibrant orange-gold colour', 'Long flowering duration', 'Pest repellent', 'Compact branching'],
    growingInfo: {
      sowing: 'Year-round (best: Jun–Jul, Sep–Oct)',
      spacing: '30 × 30 cm',
      germination: '5–8 days',
      maturity: '50–60 days to first bloom',
      watering: 'Moderate, avoid overhead irrigation',
      sunlight: 'Full sun (6+ hours)',
    },
    featured: true,
  },
  {
    id: 'sunflower-seeds',
    name: 'Sunflower Seeds',
    category: 'flower-seeds',
    cropType: 'Ornamental / Oilseed',
    image: 'https://images.pexels.com/photos/39732798/pexels-photo-39732798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Tall single-stem variety with large golden-yellow blooms and high pollen production.',
    longDescription:
      'Our sunflower seeds produce tall, single-stem plants with large, golden-yellow blooms and high pollen production. Selected for stem strength, bloom size, and uniform flowering, this variety serves dual purposes as an ornamental cut flower and a pollinator-supporting field crop.',
    season: 'Kharif & Rabi',
    growingType: 'Open Field',
    seedType: 'Open-pollinated',
    suitableConditions: 'Well-drained loamy soil, pH 6.0–7.5, warm climate 20–30°C',
    availableFormats: ['10g packet', '50g packet', '250g tin', '1kg bulk'],
    characteristics: ['Tall single stem', 'Large golden-yellow blooms', 'High pollen production', 'Strong stems', 'Uniform flowering'],
    growingInfo: {
      sowing: 'Jun–Jul, Oct–Nov',
      spacing: '60 × 30 cm',
      germination: '7–10 days',
      maturity: '75–90 days',
      watering: 'Moderate, drought tolerant once established',
      sunlight: 'Full sun (8+ hours)',
    },
    featured: false,
  },
  {
    id: 'basil-seeds',
    name: 'Basil Seeds',
    category: 'herb-seeds',
    cropType: 'Culinary Herb',
    image: 'https://images.pexels.com/photos/5864225/pexels-photo-5864225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Genovese-type basil with large aromatic leaves and compact bushy growth.',
    longDescription:
      'These basil seeds produce Genovese-type plants with large, glossy, aromatic leaves and a compact, bushy growth habit. Selected for intense flavour, slow bolting, and continuous leaf production, this variety is ideal for culinary use, pesto production, and kitchen-garden cultivation.',
    season: 'Summer & Rabi',
    growingType: 'Open Field / Container',
    seedType: 'Open-pollinated',
    suitableConditions: 'Well-drained fertile loam, pH 6.0–7.5, warm climate 20–30°C',
    availableFormats: ['5g packet', '25g packet', '100g tin', '500g bulk'],
    characteristics: ['Genovese-type', 'Large aromatic leaves', 'Compact bushy growth', 'Slow bolting', 'Intense flavour'],
    growingInfo: {
      sowing: 'Feb–Mar, Sep–Oct',
      spacing: '30 × 25 cm',
      germination: '5–10 days',
      maturity: '60–75 days',
      watering: 'Regular, keep soil moist but not soggy',
      sunlight: 'Full sun to partial shade (4–6 hours)',
    },
    featured: false,
  },
  {
    id: 'mint-seeds',
    name: 'Mint Seeds',
    category: 'herb-seeds',
    cropType: 'Culinary Herb',
    image: 'https://images.pexels.com/photos/9893128/pexels-photo-9893128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Spearmint variety with refreshing flavour and vigorous spreading habit.',
    longDescription:
      'Our mint seeds produce a spearmint variety with bright, serrated leaves and a refreshing, sweet-mint flavour. Selected for vigorous growth, leaf density, and prolonged harvest season, this variety thrives in moist conditions and is ideal for culinary, beverage, and medicinal herb gardens.',
    season: 'Year-round (best: Spring & Autumn)',
    growingType: 'Container / Open Field',
    seedType: 'Open-pollinated',
    suitableConditions: 'Moist, rich loamy soil, pH 6.0–7.5, temperate to warm climate 15–25°C',
    availableFormats: ['0.5g packet', '2g packet', '10g tin', '100g bulk'],
    characteristics: ['Spearmint flavour', 'Bright serrated leaves', 'Vigorous spreading', 'High leaf density', 'Prolonged harvest'],
    growingInfo: {
      sowing: 'Feb–Mar, Sep–Oct',
      spacing: '40 × 30 cm',
      germination: '10–14 days',
      maturity: '60–70 days',
      watering: 'Frequent, keep soil consistently moist',
      sunlight: 'Partial shade (3–5 hours)',
    },
    featured: false,
  },
  {
    id: 'beetroot-seeds',
    name: 'Beetroot Seeds',
    category: 'vegetable-seeds',
    cropType: 'Root Vegetable',
    image: 'https://images.pexels.com/photos/5758605/pexels-photo-5758605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Globe-shaped roots with deep red flesh and sweet, earthy flavour.',
    longDescription:
      'These beetroot seeds produce uniform, globe-shaped roots with deep red flesh, minimal zoning, and a sweet, earthy flavour. Selected for rapid bulb formation, tender texture, and high nutritional content, this variety is excellent for fresh market, juicing, and processing applications.',
    season: 'Rabi (Cool season)',
    growingType: 'Open Field',
    seedType: 'Open-pollinated',
    suitableConditions: 'Deep, loose loamy soil, pH 6.0–7.0, cool season 15–25°C',
    availableFormats: ['10g packet', '50g packet', '250g tin', '1kg bulk'],
    characteristics: ['Globe-shaped roots', 'Deep red flesh', 'Minimal zoning', 'Sweet earthy flavour', 'High nutritional content'],
    growingInfo: {
      sowing: 'Sep–Nov',
      spacing: '30 × 10 cm',
      germination: '7–12 days',
      maturity: '60–80 days',
      watering: 'Regular, even moisture',
      sunlight: 'Full sun to partial shade',
    },
    featured: false,
  },
  {
    id: 'radish-seeds',
    name: 'Radish Seeds',
    category: 'vegetable-seeds',
    cropType: 'Root Vegetable',
    image: 'https://images.pexels.com/photos/33653559/pexels-photo-33653559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Quick-maturing red radish with crisp white flesh and mild pungency.',
    longDescription:
      'Our radish seeds produce quick-maturing, round red roots with crisp white flesh and mild pungency. Selected for rapid bulb development, uniform root size, and excellent skin finish, this variety is one of the fastest-growing root crops available, ideal for successive sowings and continuous supply.',
    season: 'Rabi (Cool season)',
    growingType: 'Open Field / Container',
    seedType: 'Open-pollinated',
    suitableConditions: 'Light, well-drained loamy soil, pH 6.0–7.0, cool season 15–25°C',
    availableFormats: ['10g packet', '50g packet', '250g tin', '1kg bulk'],
    characteristics: ['Quick maturity', 'Round red roots', 'Crisp white flesh', 'Mild pungency', 'Uniform root size'],
    growingInfo: {
      sowing: 'Sep–Feb',
      spacing: '15 × 5 cm',
      germination: '4–7 days',
      maturity: '25–30 days',
      watering: 'Regular, keep soil evenly moist',
      sunlight: 'Full sun to partial shade',
    },
    featured: false,
  },
  {
    id: 'okra-seeds',
    name: 'Okra Seeds',
    category: 'vegetable-seeds',
    cropType: 'Fruiting Vegetable',
    image: 'https://images.pexels.com/photos/38944780/pexels-photo-38944780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'High-yielding okra with tender green pods and extended picking period.',
    longDescription:
      'These okra seeds produce tall, vigorous plants bearing tender, dark green pods with excellent keeping quality. Selected for pod tenderness, extended harvest period, and resistance to yellow vein mosaic virus, this variety is a staple in Indian warm-season cultivation for both domestic and export markets.',
    season: 'Summer & Kharif',
    growingType: 'Open Field',
    seedType: 'Open-pollinated',
    suitableConditions: 'Well-drained sandy loam, pH 6.0–7.0, warm climate 25–35°C',
    availableFormats: ['25g packet', '100g packet', '500g tin', '1kg bulk'],
    characteristics: ['Tender dark green pods', 'Extended picking period', 'YVMV resistant', 'High yielding', 'Good keeping quality'],
    growingInfo: {
      sowing: 'Feb–Mar, Jun–Jul',
      spacing: '60 × 30 cm',
      germination: '7–12 days',
      maturity: '45–55 days',
      watering: 'Regular, moderate moisture',
      sunlight: 'Full sun (8+ hours)',
    },
    featured: false,
  },
  {
    id: 'eggplant-seeds',
    name: 'Eggplant Seeds',
    category: 'vegetable-seeds',
    cropType: 'Fruiting Vegetable',
    image: 'https://images.pexels.com/photos/19390533/pexels-photo-19390533.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Long purple-brinjal variety with glossy skin and minimal seed content.',
    longDescription:
      'Our eggplant seeds produce tall, upright plants bearing long, slender, deep purple fruit with glossy skin and minimal seed content. Selected for fruit length uniformity, bacterial wilt tolerance, and continuous fruiting, this variety is widely adapted to Indian growing conditions and highly preferred in regional markets.',
    season: 'Kharif & Rabi',
    growingType: 'Open Field / Protected',
    seedType: 'Hybrid',
    suitableConditions: 'Well-drained sandy loam, pH 5.5–7.0, warm climate 20–30°C',
    availableFormats: ['5g packet', '25g packet', '100g tin', '500g bulk'],
    characteristics: ['Long slender fruit', 'Glossy deep purple skin', 'Minimal seed content', 'Bacterial wilt tolerant', 'Continuous fruiting'],
    growingInfo: {
      sowing: 'May–Jun, Oct–Nov',
      spacing: '75 × 60 cm',
      germination: '7–12 days',
      maturity: '70–85 days',
      watering: 'Regular, avoid waterlogging',
      sunlight: 'Full sun (6–8 hours)',
    },
    featured: false,
  },
  {
    id: 'quinoa-seeds',
    name: 'Quinoa Seeds',
    category: 'specialty-seeds',
    cropType: 'Pseudocereal',
    image: 'https://images.pexels.com/photos/26256448/pexels-photo-26256448.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Drought-tolerant pseudocereal with high protein content and adaptability to marginal lands.',
    longDescription:
      'These quinoa seeds produce a drought-tolerant pseudocereal with high protein content, balanced amino acid profile, and excellent adaptability to marginal and water-limited lands. Selected for seed uniformity, low saponin content, and performance under Indian conditions, this variety offers growers a high-value niche crop opportunity.',
    season: 'Rabi',
    growingType: 'Open Field',
    seedType: 'Open-pollinated',
    suitableConditions: 'Well-drained sandy loam, pH 6.0–7.5, temperate climate 15–25°C',
    availableFormats: ['50g packet', '250g packet', '1kg tin', '5kg bulk'],
    characteristics: ['Drought tolerant', 'High protein content', 'Balanced amino acids', 'Low saponin', 'Marginal land adaptable'],
    growingInfo: {
      sowing: 'Oct–Nov',
      spacing: '45 × 20 cm',
      germination: '4–8 days',
      maturity: '120–150 days',
      watering: 'Minimal, drought tolerant',
      sunlight: 'Full sun (6+ hours)',
    },
    featured: true,
  },
  {
    id: 'buckwheat-seeds',
    name: 'Buckwheat Seeds',
    category: 'specialty-seeds',
    cropType: 'Pseudocereal',
    image: 'https://images.pexels.com/photos/28396511/pexels-photo-28396511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Fast-growing pseudocereal ideal for cover cropping and grain harvest.',
    longDescription:
      'Our buckwheat seeds produce a fast-growing pseudocereal valued for both grain harvest and cover cropping. Selected for rapid biomass production, soil-conditioning properties, and nutrient-dense grain, this variety matures in under 90 days and is an excellent rotation crop for improving soil health and diversifying farm income.',
    season: 'Kharif & Spring',
    growingType: 'Open Field',
    seedType: 'Open-pollinated',
    suitableConditions: 'Well-drained loamy soil, pH 5.0–7.0, temperate climate 15–25°C',
    availableFormats: ['50g packet', '250g packet', '1kg tin', '5kg bulk'],
    characteristics: ['Fast growing', 'Cover crop suitable', 'Soil conditioning', 'Nutrient-dense grain', 'Short cycle'],
    growingInfo: {
      sowing: 'Mar–Apr, Jul–Aug',
      spacing: '30 × 10 cm',
      germination: '4–6 days',
      maturity: '70–90 days',
      watering: 'Minimal, avoid excess moisture',
      sunlight: 'Full sun to partial shade',
    },
    featured: false,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategoryById(id: CategoryId): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getProductsByCategory(categoryId: CategoryId): Product[] {
  return products.filter((p) => p.category === categoryId);
}

export function getCategoryProductCount(categoryId: CategoryId): number {
  return products.filter((p) => p.category === categoryId).length;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(productId: string, limit: number = 3): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter((p) => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}

export const allSeasons = ['Kharif & Rabi', 'Kharif & Summer', 'Rabi', 'Summer (Kharif)', 'Summer & Kharif', 'Rabi (Cool season)', 'Year-round', 'Year-round (best: Feb–Mar)', 'Kharif & Rabi', 'Summer & Rabi', 'Kharif & Spring'];

export const allGrowingTypes = ['Open Field', 'Open Field / Protected', 'Open Field / Container', 'Open Field / Container', 'Container / Open Field', 'Protected'];

export const uniqueSeasons = Array.from(new Set(products.map((p) => p.season)));
export const uniqueGrowingTypes = Array.from(new Set(products.map((p) => p.growingType)));
