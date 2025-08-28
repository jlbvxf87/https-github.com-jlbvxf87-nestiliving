import React from 'react';
import { Home, Shield, Wrench, Users, Camera, Smartphone } from 'lucide-react';

const servicePhases = [
  {
    phase: "Phase One",
    title: "Foundation Layer",
    description: "Essential estate management services that form the backbone of your property care",
    services: [
      {
        icon: Home,
        title: 'Property Walkthroughs',
        description: 'Weekly/bi-weekly inspections with digital reports & photos',
        features: ['Digital Documentation', 'Photo Reports', 'Issue Tracking']
      },
      {
        icon: Wrench,
        title: 'Emergency Dispatch',
        description: 'AC, plumbing, electrical within 24-72 hours depending on tier',
        features: ['24/7 Response', 'Vetted Contractors', 'Quality Guarantee']
      },
      {
        icon: Users,
        title: 'Vendor Coordination',
        description: 'Pool, landscaping, pest control, HVAC management',
        features: ['Scheduling', 'Quality Control', 'Payment Processing']
      }
    ]
  },
  {
    phase: "Phase Two",
    title: "Technology Layer",
    description: "Advanced monitoring and automation that elevates your property management",
    services: [
      {
        icon: Camera,
        title: 'Security & Monitoring',
        description: '24/7 monitoring with AI-powered home logs and reporting',
        features: ['Camera Integration', 'Smart Alerts', 'Digital Logs']
      },
      {
        icon: Shield,
        title: 'QR Service Tracking',
        description: 'Transparent service logs for every vendor interaction',
        features: ['Digital Accountability', 'Service History', 'Quality Metrics']
      },
      {
        icon: Smartphone,
        title: 'Voice Integration',
        description: 'Smart home integration for seamless service requests',
        features: ['Alexa Integration', 'Voice Commands', 'Instant Dispatch']
      }
    ]
  }
];

export function ServiceStack() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            The Service Stack
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive platform that bridges the gap between luxury demand and premium service supply. 
            Built in phases to scale with your needs.
          </p>
        </div>

        {servicePhases.map((phase, phaseIndex) => (
          <div key={phaseIndex} className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full px-6 py-2 mb-4">
                <span className="text-cyan-700 font-semibold">{phase.phase}</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{phase.title}</h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">{phase.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {phase.services.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
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
        ))}

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">The Platform Advantage</h3>
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-cyan-400">For Clients</h4>
              <p className="text-slate-300">Zero stress. One call, one app, one membership = total household coverage.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-400">For Tradespeople</h4>
              <p className="text-slate-300">Constant stream of elite clients who pay on time, at premium rates.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-purple-400">For NestiClub</h4>
              <p className="text-slate-300">Subscription engine with recurring cash flow and SaaS-adjacent margins.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
