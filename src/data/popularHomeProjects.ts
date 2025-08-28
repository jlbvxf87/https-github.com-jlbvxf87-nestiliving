export interface PopularHomeProject {
  readonly id: string;
  readonly title: string;
  readonly href: string;
  readonly rating: string;
  readonly reviews: string;
  readonly price: string;
  readonly image: string;
  readonly imageAlt: string;
}

export const popularHomeProjects: PopularHomeProject[] = [
  {
    id: 'handyperson-small',
    title: 'Handyperson for Small Projects',
    href: "https://request.angi.com/service-request/task/39794",
    rating: '4.6',
    reviews: '599k+',
    price: '$158',
    image: "https://c.animaapp.com/meutrjubuG3nXl/assets/handymen-angi-v2_(1).jpg",
    imageAlt: 'Handyman'
  },
  {
    id: 'one-time-cleaning',
    title: 'One-time Cleaning Service',
    href: "https://request.angi.com/service-request/task/40006",
    rating: '4.5',
    reviews: '314k+',
    price: '$102',
    image: "https://c.animaapp.com/meutrjubuG3nXl/assets/cleaning-angi-v2_(1).jpg",
    imageAlt: 'Cleeaning'
  },
  {
    id: 'ac-service-repair',
    title: 'Air Conditioning Service & Repair',
    href: "https://request.angi.com/service-request/task/40074",
    rating: '4.7',
    reviews: '306k+',
    price: '$350',
    image: "https://c.animaapp.com/meutrjubuG3nXl/assets/central-a-or-c-service-or-repair-angi-v2.jpg",
    imageAlt: 'Central AC Repair or Service'
  }
] as const;
