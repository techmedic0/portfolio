import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-neon">Tech MEDICS</h3>
            <p className="text-gray-300">
              Building modern, responsive healthcare websites that improve patient experience.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-neon">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-brand-neon" />
                <span className="text-gray-300">hafidhyusha001@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-brand-neon" />
                <span className="text-gray-300">09048639234</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-brand-neon" />
                <span className="text-gray-300">Ikeja, Lagos</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-neon">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-gray-300 hover:text-brand-neon transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-300 hover:text-brand-neon transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-brand-neon transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Tech MEDICS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}