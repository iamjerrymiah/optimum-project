import React from 'react';
import { Zap, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-teal-400 mr-2" />
              <span className="text-2xl font-bold">ZenTouch</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your premier destination for professional massage therapy services. 
              We connect you with certified, experienced masseuses for the ultimate relaxation experience.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Massage Types</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Find Masseuses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Book Appointment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">FAQ</a></li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-teal-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+234 (0) 803 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-teal-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@zentouch.ng</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-teal-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Lagos, Abuja, Port Harcourt</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-teal-400 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">Mon - Fri: 8:00 AM - 10:00 PM</div>
                  <div className="text-gray-300">Sat - Sun: 9:00 AM - 9:00 PM</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-400">
                * Mobile services available 24/7 with advance booking
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300">
              © 2025 ZenTouch. All rights reserved.
            </div>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-300 hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-300 hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-300 hover:text-teal-400 transition-colors">Cancellation Policy</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;