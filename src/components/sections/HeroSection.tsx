import React from 'react';
import { ArrowRight, Shield, Clock, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 mr-2 text-cyan-400" />
              <span className="text-sm font-medium">Trusted by 10,000+ Members</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Your Home's
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Private COO
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              The invisible platform layer between elite homeowners and premium service providers. 
              One membership. Zero stress. Total household coverage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-700 hover:to-blue-800 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center">
                Start Your Membership
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
                Schedule Consultation
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-sm">24/7 Availability</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm">5-Star Service</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-white font-medium">Property Inspection</span>
                  <span className="text-green-400 font-bold">Complete</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-white font-medium">Emergency Dispatch</span>
                  <span className="text-cyan-400 font-bold">24/7 Ready</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-white font-medium">Manor Agent</span>
                  <span className="text-blue-400 font-bold">On-Site</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-white font-medium">Vendor Network</span>
                  <span className="text-purple-400 font-bold">Vetted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
