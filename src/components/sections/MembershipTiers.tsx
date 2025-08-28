import React from 'react';
import { Check, Crown, Diamond, Star } from 'lucide-react';

const tiers = [
  {
    name: 'White Glove',
    icon: Star,
    price: '$1,500',
    period: 'per month',
    description: 'Essential estate management for discerning homeowners',
    features: [
      'Monthly deep clean',
      '1 inspection walkthrough (digital report)',
      '3-day emergency repair guarantee',
      'Access to vetted vendor network',
      'Concierge line (WhatsApp/call)',
      'Vendor markup transparency'
    ],
    popular: false
  },
  {
    name: 'Executive',
    icon: Crown,
    price: '$3,500',
    period: 'per month',
    description: 'Comprehensive household COO management',
    features: [
      'Bi-weekly inspections & reports',
      'Weekly housekeeping + monthly deep clean',
      '24-48 hr emergency repair response',
      'Lifestyle concierge (restaurants, errands, VIP bookings)',
      'Dedicated "Manor Agent"',
      'Seasonal prep services'
    ],
    popular: true
  },
  {
    name: 'Private Client',
    icon: Diamond,
    price: '$7,500+',
    period: 'per month',
    description: 'Full household COO with white-glove estate management',
    features: [
      'Full household COO management',
      'Unlimited vendor coordination',
      '24/7 guaranteed response',
      'Security + seasonal prep',
      'Staff oversight + discreet in-residence management',
      'Access to exclusive events + perks',
      'Corporate/Fleet plan options'
    ],
    popular: false
  }
];

export function MembershipTiers() {
  return (
    <section id="membership" className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Membership Tiers
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the level of service that matches your lifestyle. 
            Each tier is designed to provide exceptional value and convenience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={index} className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl ${
              tier.popular 
                ? 'border-cyan-500 shadow-xl scale-105' 
                : 'border-slate-200 hover:border-cyan-300'
            }`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-700' 
                    : 'bg-gradient-to-r from-slate-600 to-slate-700'
                }`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                  <span className="text-slate-600 ml-2">{tier.period}</span>
                </div>
                <p className="text-slate-600">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                tier.popular
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white hover:from-cyan-700 hover:to-blue-800 shadow-lg hover:shadow-xl'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                {tier.price === 'Custom' ? 'Contact Us' : 'Start Membership'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
