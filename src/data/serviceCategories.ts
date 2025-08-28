export interface ServiceCategory {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly icon: string;
}

export const serviceCategories: ServiceCategory[] = [
  { id: 'handyperson', name: 'Handyperson', href: "https://request.angi.com/service-request/task/39794", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/HandyPerson.svg" },
  { id: 'landscaping', name: 'Landscaping', href: "https://request.angi.com/service-request/category/12046", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/LandScaping.svg" },
  { id: 'plumbing', name: 'Plumbing', href: "https://request.angi.com/service-request/category/12058", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/Plumbing.svg" },
  { id: 'electrical', name: 'Electrical', href: "https://request.angi.com/service-request/category/12026", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/Electrical.svg" },
  { id: 'remodeling', name: 'Remodeling', href: "https://request.angi.com/service-request/category/12001", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/Remodeling.svg" },
  { id: 'roofing', name: 'Roofing', href: "https://request.angi.com/service-request/category/10217", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/Roof.svg" },
  { id: 'painting', name: 'Painting', href: "https://request.angi.com/service-request/category/12054", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/Painting.svg" },
  { id: 'cleaning', name: 'Cleaning', href: "https://request.angi.com/service-request/category/10205", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/Cleaning.svg" },
  { id: 'hvac', name: 'HVAC', href: "https://request.angi.com/service-request/category/10211", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/HVAC.svg" },
  { id: 'windows', name: 'Windows', href: "https://request.angi.com/service-request/category/12080", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/Windows_(1).svg" },
  { id: 'concrete', name: 'Concrete', href: "https://request.angi.com/service-request/category/12015", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/Concrete.svg" }
] as const;
