import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold text-2xl px-4 py-2 rounded-xl shadow-lg">
              NestiClub
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">Service Stack</a>
            <a href="#membership" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">Membership</a>
            <a href="#manor-agent" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">Manor Agent</a>
            <a href="#testimonials" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">Testimonials</a>
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-sm text-slate-600">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>24/7 Concierge</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>Premium Support</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
              Join NestiClub
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-slate-700 hover:text-cyan-600 font-medium">Service Stack</a>
              <a href="#membership" className="text-slate-700 hover:text-cyan-600 font-medium">Membership</a>
              <a href="#manor-agent" className="text-slate-700 hover:text-cyan-600 font-medium">Manor Agent</a>
              <a href="#testimonials" className="text-slate-700 hover:text-cyan-600 font-medium">Testimonials</a>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold mt-4 w-full">
                Join NestiClub
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
