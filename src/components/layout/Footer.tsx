import React from 'react';
import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  services: [
    'Home Management',
    'Luxury Travel',
    'Personal Concierge',
    'Transportation',
    'Dining & Events',
    'Security Services'
  ],
  membership: [
    'Essential Tier',
    'Elite Tier',
    'Platinum Tier',
    'Corporate Memberships',
    'Gift Memberships'
  ],
  company: [
    'About NestiClub',
    'Our Team',
    'Careers',
    'Press',
    'Contact Us'
  ],
  legal: [
    'Privacy Policy',
    'Terms of Service',
    'Member Agreement',
    'Cookie Policy'
  ]
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold text-2xl px-4 py-2 rounded-xl shadow-lg inline-block mb-6">
              NestiClub
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Premium hospitality and concierge services for discerning clients. 
              Experience luxury, convenience, and exceptional service.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                <span>+1 (555) 123-NESTI</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                <span>concierge@nesticlub.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                <span>Miami, FL | New York, NY | Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Membership</h3>
            <ul className="space-y-2">
              {footerLinks.membership.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 NestiClub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link, index) => (
                <a key={index} href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
