export interface HomeCareProject {
  readonly id: string;
  readonly title: string;
  readonly href: string;
  readonly rating: string;
  readonly reviews: string;
  readonly price: string;
  readonly image: string;
  readonly imageAlt: string;
}

export const homeCareProjects: HomeCareProject[] = [
  {
    id: 'faucet-plumbing-repair',
    title: 'Faucet & Plumbing Repair Services',
    href: "https://request.angi.com/service-request/task/40113",
    rating: '4.6',
    reviews: '568k+',
    price: '$226',
    image: "https://c.animaapp.com/meutrjubuG3nXl/assets/faucets-fixtures-and-pipes-repair-or-replace-angi-v2_(1).jpg",
    imageAlt: 'Faucets, fixtures & pipes'
  },
  {
    id: 'roof-installation-repair',
    title: 'Roof Installation & Repair',
    href: "https://request.angi.com/service-request/task/40133",
    rating: '4.7',
    reviews: '325k+',
    price: '$471',
    image: "https://c.animaapp.com/meutrjubuG3nXl/assets/roofing-angi-v2_(1).jpg",
    imageAlt: 'Roofing'
  },
  {
    id: 'bathroom-remodel',
    title: 'Bathroom Remodel',
    href: "https://request.angi.com/service-request/task/40129",
    rating: '4.4',
    reviews: '180k+',
    price: '$2,500',
    image: "https://c.animaapp.com/meutrjubuG3nXl/assets/bathroom-remodel-angi-v2_(1).jpg",
    imageAlt: 'Bathroom Remodel'
  }
] as const;
