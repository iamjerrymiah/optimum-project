import React, { useState } from 'react';
import { Zap, Mail } from 'lucide-react';
import PrivacyModal from './PrivacyModal';

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-teal-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Zentouch.us@outlook.com</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-teal-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Zentouch.canada@outlook.com</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-teal-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Zentouch.au@outlook.com</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-400">
                * Services available 24/7 with advance booking
              </p>
            </div>
          </div>

          {/* Business Hours */}
          {/* <div>
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
                * Services available 24/7 with advance booking
              </p>
            </div>
          </div> */}

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300">
              © 2025 ZenTouch. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* <div onClick={() => setShowPrivacy(true)} className="text-sm text-gray-300 hover:text-teal-400 transition-colors">Privacy Policy</div> */}
              <div onClick={() => setShowPrivacy(true)} className="text-sm cursor-pointer text-gray-300 hover:text-teal-400 transition-colors">Terms of Service</div>
              {/* <a href="#" className="text-sm text-gray-300 hover:text-teal-400 transition-colors">Cancellation Policy</a> */}
            </div>
          </div>
        </div>
      </div>

      <PrivacyModal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        onAgree={() => setShowPrivacy(false)}
      />
    </footer>
  );
};

export default Footer;