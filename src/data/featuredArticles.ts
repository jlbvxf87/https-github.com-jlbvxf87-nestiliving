export interface FeaturedArticle {
  readonly id: string;
  readonly title: string;
  readonly href: string;
  readonly author: string;
  readonly authorHref: string;
  readonly date: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
}

export const featuredArticles: FeaturedArticle[] = [
  {
    id: 'wet-room-cost',
    title: 'How Much Does a Wet Room Cost?',
    href: "https://www.angi.com/articles/cost-wet-room.htm",
    author: 'Samantha Hawrylack',
    authorHref: "https://www.angi.com/articles/author/samantha-hawrylack",
    date: 'Jul 10, 2025',
    description: 'Looking to upgrade your bathroom to a fully waterproofed room? Learn how much a wet room costs and what factors to consider to get an accurate estimate.',
    image: "https://c.animaapp.com/meutrjubuG3nXl/assets/7.webp",
    imageAlt: 'A luxury modern bathroom'
  },
  {
    id: 'kitchen-faucet-install',
    title: 'How Much Does It Cost to Install a Kitchen Faucet? [2025 Data]',
    href: "https://www.angi.com/articles/what-does-it-cost-install-kitchen-faucet.htm",
    author: 'Mizuki Hisaka',
    authorHref: "https://www.angi.com/articles/author/mizuki-hisaka",
    date: 'Jun 2, 2025',
    description: 'Your faucet plays a major role in your kitchen\'s overall design and functionality. Learn how much it costs to install a kitchen faucet based on brand, type, and city.',
    image: "https://c.animaapp.com/meutrjubuG3nXl/assets/3.webp",
    imageAlt: 'Woman washing hands in kitchen sink'
  },
  {
    id: 'kitchen-remodel-cost',
    title: 'How Much Does a Kitchen Remodel Cost? [2025 Data]',
    href: "https://www.angi.com/articles/how-much-should-kitchen-remodel-cost.htm",
    author: 'René Bennett',
    authorHref: "https://www.angi.com/articles/author/rene-bennett",
    date: 'Jun 13, 2025',
    description: 'How much does a kitchen remodel cost? Find out the average cost and where you can save money on the path to building your ideal cooking space.',
    image: "https://c.animaapp.com/meutrjubuG3nXl/assets/4.webp",
    imageAlt: 'A kitchen with white cabinets'
  },
  {
    id: 'house-renovation-cost',
    title: 'How Much Does It Cost to Renovate a House? [2025 Data]',
    href: "https://www.angi.com/articles/complete-house-renovation-cost.htm",
    author: 'Rachel Hoffman',
    authorHref: "https://www.angi.com/articles/author/rachel-hoffman",
    date: 'Jun 12, 2025',
    description: 'Knowing how much it costs to renovate a house will help you plan and budget appropriately. Use this guide to get a rough estimate for your project.',
    image: "https://c.animaapp.com/meutrjubuG3nXl/assets/5.webp",
    imageAlt: 'A living room in a renovated 18th century barn'
  },
  {
    id: 'bathroom-remodel-cost',
    title: 'How Much Does a Bathroom Remodel Cost? [2025 Data]',
    href: "https://www.angi.com/articles/how-much-does-bathroom-remodel-cost.htm",
    author: 'Mariel Loveland',
    authorHref: "https://www.angi.com/articles/author/mariel-loveland",
    date: 'Jun 12, 2025',
    description: 'Remodeling your bathroom can add significant value to your home. Your bathroom remodel cost will depend on size, fixtures, materials, labor, and other factors.',
    image: "https://c.animaapp.com/meutrjubuG3nXl/assets/8.webp",
    imageAlt: 'white bathroom with navy details'
  },
  {
    id: 'add-bathroom-cost',
    title: 'How Much Does It Cost to Add a Bathroom? [2025 Data]',
    href: "https://www.angi.com/articles/how-much-does-it-cost-add-bathroom.htm",
    author: 'Mariel Loveland',
    authorHref: "https://www.angi.com/articles/author/mariel-loveland",
    date: 'May 23, 2025',
    description: 'The cost to add a bathroom takes into account whether it\'s a half or full bath, square footage, plumbing, electrical, and more. Read on for a cost breakdown.',
    image: "https://c.animaapp.com/meutrjubuG3nXl/assets/6.webp",
    imageAlt: 'Sleek neutral design bathroom'
  }
] as const;
