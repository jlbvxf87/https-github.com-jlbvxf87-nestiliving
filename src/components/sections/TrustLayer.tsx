import React from 'react';
import { DollarSign, TrendingUp, Users, Building } from 'lucide-react';

const monetizationStreams = [
  {
    icon: DollarSign,
    title: 'Recurring Subscriptions',
    amount: '$1.5K - $7.5K+',
    description: 'Monthly membership fees providing predictable revenue'
  },
  {
    icon: TrendingUp,
    title: 'Vendor Markup',
    amount: '10-20%',
    description: 'Commission on all coordinated services and repairs'
  },
  {
    icon: Building,
    title: 'Corporate Plans',
    amount: 'Custom',
    description: 'Family offices, Airbnb portfolios, HOA management'
  },
  {
    icon: Users,
    title: 'Franchise Model',
    amount: 'Scalable',
    description: 'Train & certify Manor Agents in other cities'
  }
];

export function TrustLayer() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Beyond Membership
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Multiple revenue streams create a sustainable, scalable business model 
            that benefits everyone in the ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {monetizationStreams.map((stream, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400 transition-all duration-300">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <stream.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{stream.title}</h3>
              <div className="text-2xl font-bold text-cyan-400 mb-3">{stream.amount}</div>
              <p className="text-slate-300 text-sm">{stream.description}</p>
            </div>
          ))}
        </div>

        {/* Why This Hits */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-3xl p-12 border border-cyan-500/20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why This Market Wins</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Supply Side</h4>
              <p className="text-slate-300">Blue-collar labor is fragmented, aging, and unbranded. We unify and elevate it.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Demand Side</h4>
              <p className="text-slate-300">Wealthy clients happily pay $20-90K/year to remove chaos from their lives.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Competitive Edge</h4>
              <p className="text-slate-300">Angi/HomeAdvisor = low-trust commodity. NestiClub = luxury trust brand + subscription engine.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
