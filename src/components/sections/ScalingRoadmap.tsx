import React from 'react';
import { MapPin, Smartphone, Globe } from 'lucide-react';

const phases = [
  {
    icon: MapPin,
    phase: 'Phase 1',
    timeline: 'Now',
    title: 'Miami Launch',
    description: 'Brickell & Coconut Grove → white-glove households',
    details: ['Manual operations + Stripe + WhatsApp', 'Direct client acquisition', 'Vendor network establishment', 'Manor Agent training program']
  },
  {
    icon: Smartphone,
    phase: 'Phase 2',
    timeline: '12-18 months',
    title: 'Tech Platform',
    description: 'App + AI Concierge automation',
    details: ['Automated scheduling system', 'Property logs & reporting', 'Vendor marketplace', 'Client mobile app']
  },
  {
    icon: Globe,
    phase: 'Phase 3',
    timeline: '24+ months',
    title: 'National Expansion',
    description: 'Franchise model across luxury markets',
    details: ['NYC, LA, Aspen, Scottsdale, Hamptons', 'White-labeled to realtors & family offices', 'Data monetization platform', 'IPO-ready infrastructure']
  }
];

export function ScalingRoadmap() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Scaling Roadmap
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A proven path from Miami luxury market to national franchise empire, 
            built on sustainable unit economics and scalable systems.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-600 to-blue-700 rounded-full hidden lg:block"></div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mr-4">
                        <phase.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">{phase.phase}</div>
                        <div className="text-lg font-bold text-slate-900">{phase.timeline}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                    <p className="text-slate-600 mb-6">{phase.description}</p>
                    
                    <ul className="space-y-2">
                      {phase.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-700">
                          <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Target Metrics</h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$50M</div>
              <div className="text-slate-300">ARR by Year 3</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-slate-300">Major Markets</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">1,000+</div>
              <div className="text-slate-300">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-slate-300">EBITDA Margin</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
