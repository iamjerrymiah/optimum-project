import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';
import { faqItems } from '../data/faq';
import { FAQItem } from '../types';
import { useNavigate } from 'react-router';

interface FAQPageProps {
  onPageChange?: any;
}

const FAQPage: React.FC<FAQPageProps> = ({ }) => {

  const navigate = useNavigate()
  
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // First item open by default
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our massage services, booking process, 
            and policies. Can't find what you're looking for? Feel free to contact us.
          </p>
        </div>

        {/* Search Bar */}
        {/* <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search frequently asked questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent shadow-sm"
          />
        </div> */}

        {/* FAQ List */}
        <div className="space-y-4 mb-12">
          {filteredFAQs.map((item: FAQItem, index: number) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                {openItems.has(index) ? (
                  <ChevronUp className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems.has(index) && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any FAQs matching your search. Try different keywords or browse all questions.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200"
              >
                Clear Search
              </button>
            </div>
          </div>
        )}

        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Start Booking</h3>
              <p className="text-gray-600 text-sm mb-4">Ready to book your massage? Start the booking process now.</p>
              <button
                onClick={() => navigate('/booking')}
                className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors duration-200"
              >
                Book Now
              </button>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Browse Services</h3>
              <p className="text-gray-600 text-sm mb-4">Explore our comprehensive massage service offerings.</p>
              <button
                onClick={() => navigate('/book-xxx')}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200"
              >
                View Services
              </button>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm mb-4">Have questions? Get in touch with our support team.</p>
              <button
                onClick={() => {window.Tawk_API.maximize()}}
                className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="bg-gradient-to-br from-yellow-50 to-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <h3 className="font-semibold text-gray-900 mb-2">Booking Process</h3>
              <p className="text-gray-600 text-sm">Learn how to book, reschedule, and manage your appointments.</p>
            </div>
            <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <h3 className="font-semibold text-gray-900 mb-2">Payment & Pricing</h3>
              <p className="text-gray-600 text-sm">Understand our pricing structure and payment options.</p>
            </div>
            <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <h3 className="font-semibold text-gray-900 mb-2">Safety & Certification</h3>
              <p className="text-gray-600 text-sm">Information about our safety protocols and therapist credentials.</p>
            </div>
            <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <h3 className="font-semibold text-gray-900 mb-2">Service Areas</h3>
              <p className="text-gray-600 text-sm">Coverage areas and mobile service availability.</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        {/* <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-yellow-600 to-gray-600 rounded-xl text-white p-8">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-6 opacity-90">
              Our customer support team is here to help with any questions or concerns you may have.
            </p>
            <button
              onClick={() => onPageChange('contact')}
              className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Support
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FAQPage;