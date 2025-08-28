import React from 'react';
import { ArrowRight } from 'lucide-react';

const exclusiveServices = [
  {
    title: 'Private Jet & Yacht Access',
    description: 'Exclusive access to luxury aircraft and yachts worldwide',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Global Fleet Access', 'Instant Booking', 'Concierge Onboard']
  },
  {
    title: 'Michelin Star Dining',
    description: 'Reserved tables at the world\'s most exclusive restaurants',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Priority Reservations', 'Private Dining', 'Chef Collaborations']
  },
  {
    title: 'Luxury Real Estate',
    description: 'Access to exclusive properties and luxury accommodations',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Private Villas', 'Penthouse Suites', 'Historic Properties']
  }
];

export function ExclusiveServices() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Exclusive Access
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Unlock doors to experiences money can't typically buy. 
            Our exclusive partnerships provide unparalleled access to luxury.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {exclusiveServices.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-all duration-200">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
