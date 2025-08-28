export interface FooterCity {
  readonly id: string;
  readonly name: string;
  readonly href: string;
}

export interface FooterLink {
  readonly id: string;
  readonly text: string;
  readonly href: string;
  readonly title?: string;
}

export interface FooterLinkSection {
  readonly id: string;
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export interface SocialLink {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly icon: string;
}

export const footerData = {
  topCities: [
    { id: 'new-york', name: 'New York', href: "https://www.angi.com/companylist/us/ny/new-york-tristate-area/" },
    { id: 'los-angeles', name: 'Los Angeles', href: "https://www.angi.com/companylist/us/ca/los-angeles/" },
    { id: 'houston', name: 'Houston', href: "https://www.angi.com/companylist/us/tx/houston/" },
    { id: 'dallas', name: 'Dallas', href: "https://www.angi.com/companylist/us/tx/dallas/" },
    { id: 'chicago', name: 'Chicago', href: "https://www.angi.com/companylist/us/il/chicago/" },
    { id: 'pittsburgh', name: 'Pittsburgh', href: "https://www.angi.com/companylist/us/pa/pittsburgh/" },
    { id: 'indianapolis', name: 'Indianapolis', href: "https://www.angi.com/companylist/us/in/indianapolis/" },
    { id: 'minneapolis', name: 'Minneapolis', href: "https://www.angi.com/companylist/us/mn/minneapolis/" },
    { id: 'boston', name: 'Boston', href: "https://www.angi.com/companylist/us/ma/boston/" },
    { id: 'las-vegas', name: 'Las Vegas', href: "https://www.angi.com/companylist/us/nv/las-vegas/" },
    { id: 'atlanta', name: 'Atlanta', href: "https://www.angi.com/companylist/us/ga/atlanta/" },
    { id: 'san-antonio', name: 'San Antonio', href: "https://www.angi.com/companylist/us/tx/san-antonio/" },
    { id: 'cincinnati', name: 'Cincinnati', href: "https://www.angi.com/companylist/us/oh/cincinnati/" },
    { id: 'tampa', name: 'Tampa', href: "https://www.angi.com/companylist/us/fl/tampa-bay/" }
  ] as const,

  linkSections: [
    {
      id: 'homeowner-services',
      title: 'Homeowner services',
      links: [
        { id: 'find-local', text: 'Find local businesses', href: "https://www.angi.com/companylist/" },
        { id: 'services-near-me', text: 'Services near me', href: '/nearme/' }
      ]
    },
    {
      id: 'service-pros',
      title: 'For service pros',
      links: [
        { id: 'register-business', text: 'Register your business', href: "https://signup.angi.com/pro" },
        { id: 'business-center', text: 'Business center', href: "https://signup.angi.com/pro" }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      links: [
        { id: 'solution-center', text: 'Solution center', href: "https://www.angi.com/articles" },
        { id: 'project-cost-center', text: 'Project cost center', href: "https://www.angi.com/articles/cost" },
        { id: 'faqs', text: 'FAQs', href: "https://www.angi.com/faq" },
        { id: 'financing', text: 'Financing', href: "https://em.angi.com/affirm/" }
      ]
    },
    {
      id: 'about-us',
      title: 'About us',
      links: [
        { id: 'how-it-works', text: 'How it works', href: "https://www.angi.com/how-it-works.htm" },
        { id: 'who-we-are', text: 'Who we are', href: "https://www.angi.com/aboutus.htm", title: 'About us' },
        { id: 'careers', text: 'Careers', href: "https://www.angi.com/careers", title: 'Start your career at Angi' },
        { id: 'press', text: 'Press', href: "https://www.angi.com/in-the-press.htm" },
        { id: 'investor-relations', text: 'Investor relations', href: 'https://ir.angi.com/' },
        { id: 'contact-us', text: 'Contact us', href: "https://www.angi.com/contact-us" },
        { id: 'happiness-guarantee', text: 'Happiness guarantee', href: "https://www.angi.com/happiness-guarantee.htm" },
        { id: 'affiliate-partners', text: 'Affiliate partners', href: "https://www.angi.com/landing/affiliatepartners" }
      ]
    }
  ] as const,

  legalLinks: [
    { id: 'terms-of-use', text: 'Terms of Use', href: "https://legal.angi.com/#contract-skmav5s0l" },
    { id: 'privacy-policy', text: 'Privacy Policy', href: "https://legal.angi.com/#privacy-policy" },
    { id: 'sitemap', text: 'Sitemap', href: "https://www.angi.com/sitemap-index" }
  ] as const,

  socialLinks: [
    { id: 'twitter', name: 'Twitter', href: "https://x.com/angi_home", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/footer-twitterv2-black.png" },
    { id: 'facebook', name: 'Facebook', href: "https://www.facebook.com/Angi/", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/footer-facebookv2-black.png" },
    { id: 'pinterest', name: 'Pinterest', href: "https://www.pinterest.com/angi/", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/footer-pinterestv2-black.png" },
    { id: 'youtube', name: 'YouTube', href: "https://www.youtube.com/channel/UCzcJolZXhDi6VU77VI2cNDg", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/footer-youtubev2-black.png" },
    { id: 'instagram', name: 'Instagram', href: "https://www.instagram.com/angi/", icon: "https://c.animaapp.com/meutrjubuG3nXl/assets/footer-instagramv2-black.png" }
  ] as const
} as const;
