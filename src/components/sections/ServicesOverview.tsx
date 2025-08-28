import React from 'react';
import { Home, Plane, Car, Utensils, Calendar, Shield } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Home Management',
    description: 'Complete property care, maintenance, and household staff coordination',
    features: ['Property Maintenance', 'Staff Management', 'Security Oversight']
  },
  {
    icon: Plane,
    title: 'Luxury Travel',
    description: 'Bespoke travel planning with exclusive access and VIP treatment',
    features: ['Private Jet Booking', 'Luxury Accommodations', 'Exclusive Experiences']
  },
  {
    icon: Car,
    title: 'Transportation',
    description: 'Premium transportation solutions for all your mobility needs',
    features: ['Chauffeur Services', 'Luxury Fleet', 'Airport Transfers']
  },
  {
    icon: Utensils,
    title: 'Dining & Events',
    description: 'Exclusive restaurant access and private event coordination',
    features: ['Private Chef Services', 'Event Planning', 'Restaurant Reservations']
  },
  {
    icon: Calendar,
    title: 'Personal Assistant',
    description: 'Dedicated personal assistance for all your daily needs',
    features: ['Schedule Management', 'Personal Shopping', 'Appointment Booking']
  },
  {
    icon: Shield,
    title: 'Security & Privacy',
    description: 'Comprehensive security solutions and privacy protection',
    features: ['Personal Security', 'Privacy Consulting', 'Risk Assessment']
  }
];

export function ServicesOverview() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Lifestyle Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From home management to luxury travel, we provide seamless, premium services 
            tailored to your sophisticated lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
