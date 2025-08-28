export interface PopularProject {
  readonly id: string;
  readonly title: string;
  readonly href: string;
  readonly icon: string;
  readonly iconAlt: string;
  readonly rating: string;
  readonly reviews: string;
  readonly price: string;
}

export const popularProjects: PopularProject[] = [
  {
    id: 'decks-porches',
    title: 'Decks & Porches',
    href: "https://request.angi.com/service-request/category/12017",
    icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/decks-&-porches-icon.svg",
    iconAlt: 'Decks & Porches icon',
    rating: '3.7',
    reviews: '1k+',
    price: '$1,890'
  },
  {
    id: 'home-cleaning',
    title: 'Home Cleaning',
    href: "https://request.angi.com/service-request/category/12014",
    icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/Cleaning.svg",
    iconAlt: 'Cleaning',
    rating: '4.5',
    reviews: '314k+',
    price: '$85'
  },
  {
    id: 'roof-repair',
    title: 'Roof Repair',
    href: "https://request.angi.com/service-request/category/10217",
    icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/Roof.svg",
    iconAlt: 'Roof',
    rating: '4.7',
    reviews: '613k+',
    price: '$594'
  },
  {
    id: 'fence-repair',
    title: 'Fence Repair',
    href: "https://request.angi.com/service-request/task/61740?null&f_flg=MPLCJ-4396-scale-next-sr-traffic&f_trt=next-sr-path&entry_point_id=33797112",
    icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/fence-repair-icon.svg",
    iconAlt: 'fence repair icon',
    rating: '4.2',
    reviews: '4.8k+',
    price: '$380'
  },
  {
    id: 'appliance-repair',
    title: 'Appliance Repair',
    href: "https://request.angi.com/service-request/task/39773",
    icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/appliance-repair-icon.svg",
    iconAlt: 'appliance repair icon',
    rating: '4.7',
    reviews: '274k+',
    price: '$264'
  },
  {
    id: 'pest-control',
    title: 'Pest Control',
    href: "https://request.angi.com/service-request/category/10375",
    icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/pest-control-icon.svg",
    iconAlt: 'pest control icon',
    rating: '4.8',
    reviews: '317k+',
    price: '$186'
  },
  {
    id: 'gutter-services',
    title: 'Gutter Services',
    href: "https://request.angi.com/service-request/task/40271",
    icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/gutter-services-icon.svg",
    iconAlt: 'gutter service icon',
    rating: '4.0',
    reviews: '427k+',
    price: '$575'
  },
  {
    id: 'plumbing-services',
    title: 'Plumbing Services',
    href: "https://request.angi.com/service-request/category/12058",
    icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/Plumbing.svg",
    iconAlt: 'Plumbing',
    rating: '4.4',
    reviews: '26.7k+',
    price: '$210'
  }
] as const;
