export interface ServiceProCategory {
  readonly id: string;
  readonly title: string;
  readonly services: readonly ServiceProItem[];
  readonly viewAllHref: string;
}

export interface ServiceProItem {
  readonly id: string;
  readonly title: string;
  readonly href: string;
}

export const serviceProData = {
  categories: [
    {
      id: 'interior',
      title: 'Find a pro',
      viewAllHref: "https://www.angi.com/nearme/",
      services: [
        { id: 'appliance-repair', title: 'Appliance Repair', href: "https://www.angi.com/nearme/appliance-repair" },
        { id: 'carpet-cleaning', title: 'Carpet Cleaning', href: "https://www.angi.com/nearme/carpet-cleaning" },
        { id: 'contractors', title: 'Contractors', href: "https://www.angi.com/nearme/contractor" },
        { id: 'drywall', title: 'Drywall', href: "https://www.angi.com/nearme/drywall" },
        { id: 'electrical', title: 'Electrical', href: "https://www.angi.com/nearme/electrical" },
        { id: 'flooring', title: 'Flooring', href: "https://www.angi.com/nearme/flooring" },
        { id: 'hvac', title: 'HVAC', href: "https://www.angi.com/nearme/hvac" },
        { id: 'house-cleaning', title: 'House Cleaning', href: "https://www.angi.com/nearme/house-cleaning" },
        { id: 'interior-painting', title: 'Interior Painting', href: "https://www.angi.com/nearme/interior-painting" },
        { id: 'plumbing', title: 'Plumbing', href: "https://www.angi.com/nearme/plumbing" },
        { id: 'remodeling', title: 'Remodeling', href: "https://www.angi.com/nearme/kitchen-and-bath-remodeling" }
      ]
    },
    {
      id: 'exterior',
      title: 'Find a pro',
      viewAllHref: "https://www.angi.com/nearme/",
      services: [
        { id: 'concrete-repair', title: 'Concrete Repair', href: "https://www.angi.com/nearme/concrete-repair" },
        { id: 'doors', title: 'Doors', href: "https://www.angi.com/nearme/doors" },
        { id: 'driveways', title: 'Driveways', href: "https://www.angi.com/nearme/driveways" },
        { id: 'exterior-painting', title: 'Exterior Painting', href: "https://www.angi.com/nearme/exterior-painting" },
        { id: 'garage-doors', title: 'Garage Doors', href: "https://www.angi.com/nearme/garage-doors" },
        { id: 'gutter-cleaning', title: 'Gutter Cleaning', href: "https://www.angi.com/nearme/gutter-cleaning" },
        { id: 'gutter-repair', title: 'Gutter Repair', href: "https://www.angi.com/nearme/gutter-repair-replacement" },
        { id: 'home-builders', title: 'Home Builders', href: "https://www.angi.com/nearme/home-builders" },
        { id: 'masonry', title: 'Masonry', href: "https://www.angi.com/nearme/masonry" },
        { id: 'roofing', title: 'Roofing', href: "https://www.angi.com/nearme/roofing" },
        { id: 'siding', title: 'Siding', href: "https://www.angi.com/nearme/siding" },
        { id: 'windows', title: 'Windows', href: "https://www.angi.com/nearme/windows" }
      ]
    },
    {
      id: 'lawn-garden',
      title: 'Find a pro',
      viewAllHref: "https://www.angi.com/nearme/",
      services: [
        { id: 'decks', title: 'Decks', href: "https://www.angi.com/nearme/decks-and-porches" },
        { id: 'fencing', title: 'Fencing', href: "https://www.angi.com/nearme/fencing" },
        { id: 'land-surveying', title: 'Land Surveying', href: "https://www.angi.com/nearme/land-surveying" },
        { id: 'landscaping', title: 'Landscaping', href: "https://www.angi.com/nearme/landscaping" },
        { id: 'lawn-yard-work', title: 'Lawn & Yard Work', href: "https://www.angi.com/nearme/lawn-and-yard-work" },
        { id: 'leaf-removal', title: 'Leaf Removal', href: "https://www.angi.com/nearme/leaf-removal" },
        { id: 'patios', title: 'Patios', href: "https://www.angi.com/nearme/sunroom-and-patio-remodeling" },
        { id: 'pool-installation', title: 'Pool Installation', href: "https://www.angi.com/nearme/swimming-pools" },
        { id: 'sprinkler-systems', title: 'Sprinkler Systems', href: "https://www.angi.com/nearme/lawn-irrigation" },
        { id: 'sunrooms', title: 'Sunrooms', href: "https://www.angi.com/nearme/sunroom-contractors/" },
        { id: 'tree-service', title: 'Tree Service', href: "https://www.angi.com/nearme/tree-service" }
      ]
    },
    {
      id: 'more',
      title: 'Find a pro',
      viewAllHref: "https://www.angi.com/nearme/",
      services: [
        { id: 'basement-waterproofing', title: 'Basement Waterproofing', href: "https://www.angi.com/nearme/basement-waterproofing" },
        { id: 'handymen', title: 'Handymen', href: "https://www.angi.com/nearme/handyman-service" },
        { id: 'junk-hauling', title: 'Junk Hauling', href: "https://www.angi.com/nearme/hauling" },
        { id: 'locksmiths', title: 'Locksmiths', href: "https://www.angi.com/nearme/locksmiths" },
        { id: 'moving-companies', title: 'Moving Companies', href: "https://www.angi.com/nearme/moving" },
        { id: 'pest-control', title: 'Pest Control', href: "https://www.angi.com/nearme/pest-control" },
        { id: 'pressure-washing', title: 'Pressure Washing', href: "https://www.angi.com/nearme/pressure-washing" },
        { id: 'septic-tanks', title: 'Septic Tanks', href: "https://www.angi.com/nearme/septic-tank" }
      ]
    }
  ]
} as const;
