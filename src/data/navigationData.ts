export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const navigationData = {
  mainCategories: [
    { id: 'interior', label: 'Interior', href: '#Interior' },
    { id: 'exterior', label: 'Exterior', href: '#Exterior' },
    { id: 'lawn-garden', label: 'Lawn & Garden', href: '#Lawn & Garden' },
    { id: 'more', label: 'More', href: '#More' },
    { id: 'articles-advice', label: 'Articles & Advice', href: '#Articles & Advice' }
  ] as const,

  userMenuItems: [
    { id: 'my-projects', label: 'My Projects', href: "https://my.angi.com/myprojects" },
    { id: 'inbox', label: 'Inbox', href: "https://my.angi.com/inbox" },
    { id: 'my-reviews', label: 'My Reviews', href: "https://my.angi.com/account/reviews" },
    { id: 'manage-account', label: 'Manage Account', href: "https://my.angi.com/account/settings" }
  ] as const
} as const;
