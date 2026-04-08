// Search data for the website
export interface SearchResult {
  title: string;
  content: string;
  url: string;
  type: 'page' | 'section';
}

export const searchData: SearchResult[] = [
  {
    title: 'Home',
    content: 'Welcome to the Gardening Website. Explore tips and resources for pest management, companion gardening, and plant selection.',
    url: '/',
    type: 'page'
  },
  {
    title: 'Companion Gardening',
    content: 'Companion planting helps plants thrive by improving growth, deterring pests, and attracting helpful pollinators. Examples: Tomatoes + basil, Carrots + onions, Corn + beans + squash (Three Sisters).',
    url: '/companion-gardening',
    type: 'page'
  },
  {
    title: 'Pest Management',
    content: 'Learn integrated pest management (IPM) strategies, organic controls, and prevention tips to keep your garden healthy. Monitor and identify pests early, use physical barriers and traps, encourage beneficial insects, apply targeted organic treatments as a last resort.',
    url: '/pest-management',
    type: 'page'
  },
  {
    title: 'Plants',
    content: 'Find plant suggestions for different garden types and climates. Popular plants include Pepper, Tomato, Beans, Cucumber, Aster, and Lily. Pepper plants are warm-season vegetables that thrive in full sun. Tomatoes are popular home garden crops. Beans fix nitrogen in the soil. Cucumbers are fast-growing vines for warm weather. Asters are hardy flowering perennials.',
    url: '/plants',
    type: 'page'
  },
  {
    title: 'Resources',
    content: 'Curated gardening resources to help you plan, plant, and maintain your garden. Guides and websites: Dave\'s Garden, Gardening Know How, National Gardening Association. Books: Square Foot Gardening, The Vegetable Gardener\'s Bible. Videos: YouTube channel.',
    url: '/resources',
    type: 'page'
  },
  {
    title: 'What\'s My Zone?',
    content: 'Find your USDA Hardiness Zone using your ZIP code, then choose plants that match your winter temperatures. Lower zone numbers are colder, higher numbers are warmer.',
    url: '/whats-my-zone',
    type: 'page'
  },
  {
    title: 'Pepper',
    content: 'Pepper plants are warm-season vegetables that thrive in full sun and well-drained soil. They prefer consistent moisture and benefit from staking for larger varieties.',
    url: '/plants',
    type: 'section'
  },
  {
    title: 'Tomato',
    content: 'Tomatoes are among the most popular home garden crops. They need plenty of sun, regular watering, and good airflow to reduce disease. Support with cages or stakes.',
    url: '/plants',
    type: 'section'
  },
  {
    title: 'Beans',
    content: 'Beans (bush and pole types) are easy to grow and fix nitrogen in the soil. Pole beans benefit from a trellis, while bush beans are great for quick harvests in small spaces.',
    url: '/plants',
    type: 'section'
  },
  {
    title: 'Cucumber',
    content: 'Cucumbers are fast-growing warm-season vines that love heat and sun. Give them rich soil, steady water, and a trellis or support to keep fruit clean and easy to pick.',
    url: '/plants',
    type: 'section'
  },
  {
    title: 'Aster',
    content: 'Asters are hardy flowering perennials that attract pollinators. They bloom in late summer to fall and add bright color to garden borders and containers.',
    url: '/plants',
    type: 'section'
  },
  {
    title: 'Lily',
    content: 'Lilies are elegant flowering plants that add beauty and fragrance to gardens. They prefer well-drained soil and partial to full sun. Different varieties bloom in spring, summer, or fall, providing year-round interest.',
    url: '/plants',
    type: 'section'
  }
];

export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();
  return searchData.filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.content.toLowerCase().includes(lowerQuery)
  );
}