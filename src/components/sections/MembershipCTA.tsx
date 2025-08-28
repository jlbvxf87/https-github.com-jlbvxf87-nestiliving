import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export function MembershipCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-800">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Your Home Deserves a Private COO
        </h2>
        
        <p className="text-xl text-cyan-100 mb-12 leading-relaxed">
          Join the platform that bridges elite homeowners with premium service providers. 
          Invisible staff. Instant peace of mind. Total household coverage.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center">
            Start Your Membership
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
            Schedule Consultation
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-cyan-100">
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            <span>+1 (555) 123-NESTI</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            <span>concierge@nesticlub.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
