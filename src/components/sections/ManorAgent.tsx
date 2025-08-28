import React from 'react';
import { User, Shield, Award, CheckCircle } from 'lucide-react';

const agentQualities = [
  {
    icon: User,
    title: 'Estate Manager-Lite',
    description: 'Clean-cut, discreet, trained professionals who represent NestiClub in your property'
  },
  {
    icon: Shield,
    title: 'Trust Layer',
    description: 'Coordinate all vendors, ensure consistency, and provide the accountability you need'
  },
  {
    icon: Award,
    title: 'Franchise-Ready',
    description: 'Certifiable, brand-protectable system that scales across markets'
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Think Uber Black for estate managers - premium service, every time'
  }
];

export function ManorAgent() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full px-4 py-2 mb-6">
              <span className="text-cyan-700 font-semibold text-sm">Your Differentiator</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              The Manor Agent
              <span className="block text-3xl lg:text-4xl text-slate-600 mt-2">
                Your Property's Dedicated Professional
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Your differentiator is people. A Manor Agent isn't just a coordinator—they're your 
              property's dedicated advocate, ensuring every service meets our exacting standards.
            </p>

            <div className="space-y-6">
              {agentQualities.map((quality, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <quality.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{quality.title}</h3>
                    <p className="text-slate-600">{quality.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Sarah Chen</h3>
                <p className="text-slate-600">Manor Agent - Brickell District</p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-900">Property Inspections</span>
                    <span className="text-green-600 font-semibold">12 Completed</span>
                  </div>
                  <div className="text-sm text-slate-600">This month</div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-900">Vendor Coordination</span>
                    <span className="text-blue-600 font-semibold">98% Rating</span>
                  </div>
                  <div className="text-sm text-slate-600">Client satisfaction</div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-900">Response Time</span>
                    <span className="text-purple-600 font-semibold">&lt; 2 hours</span>
                  </div>
                  <div className="text-sm text-slate-600">Average response</div>
                </div>
              </div>
            </div>

            {/* Floating certification badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              NestiClub Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
