import React from 'react';
import { Clock, Globe, Shield, Users } from 'lucide-react';

const stats = [
  { icon: Clock, value: '24/7', label: 'Availability' },
  { icon: Globe, value: '50+', label: 'Global Cities' },
  { icon: Shield, value: '99.9%', label: 'Reliability' },
  { icon: Users, value: '10K+', label: 'Happy Members' }
];

export function ConciergeShowcase() {
  return (
    <section id="concierge" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Personal
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Concierge Team
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Our dedicated concierge professionals are available around the clock 
              to handle any request, no matter how complex or time-sensitive.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Instant Response</h3>
                  <p className="text-slate-400">Average response time under 2 minutes, 24/7/365</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Global Network</h3>
                  <p className="text-slate-400">Extensive partnerships in major cities worldwide</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Absolute Discretion</h3>
                  <p className="text-slate-400">Complete privacy and confidentiality guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Service Excellence</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
