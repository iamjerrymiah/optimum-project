import React from 'react';
import { Star, ArrowRight, Heart, Shield, Clock, Users } from 'lucide-react';
import { massageTypes } from '../data/massageTypes';
import { masseuses } from '../data/masseuses';
import MasseusesPage from './MasseusesPage';
import FAQPage from './FAQPage';
import AboutPage from './AboutPage';
import MassageTypesPage from './MassageTypesPage';

interface HomePageProps {
  onPageChange: (page: string) => void;
  handlePageChange?: any;
  handleServiceSelect?: any;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange, handlePageChange, handleServiceSelect }) => {
  const featuredServices = massageTypes.slice(0, 4);
  const topMasseuses = masseuses.filter(m => m.isAvailable && m.rating >= 4.8).slice(0, 3);
  

  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium Massage
                <span className="text-teal-600 block">Therapy Services</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Connect with certified professional masseuses for personalized relaxation and wellness treatments. 
                Book your perfect massage experience today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onPageChange('booking')}
                  className="bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 flex items-center justify-center group"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onPageChange('services')}
                  className="border-2 border-teal-600 text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-200"
                >
                  View Services
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional massage therapy" 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-900">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">500+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-teal-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">Licensed Professionals</h3>
              <p className="text-gray-600 text-sm">All masseuses are certified and licensed</p>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-purple-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm">Book at your preferred time and location</p>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-yellow-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">Personalized Care</h3>
              <p className="text-gray-600 text-sm">Customized treatments for your needs</p>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">Mobile Services</h3>
              <p className="text-gray-600 text-sm">We come to your home or office</p>
            </div>
          </div>
        </div>
      </section>

      
      <AboutPage />


      {/* Featured Services Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Massage Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              Discover our most requested massage services, each designed to address specific wellness needs
            </p>
          </div>
          
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredServices.map((service: MassageType) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold text-teal-600">
                    From ${service.priceRanges[60]?.min.toLocaleString() || 'N/A'}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm text-gray-500">
                      {service.durations.join(', ')} min sessions
                    </span>
                    <button
                      onClick={() => onPageChange('services')}
                      className="text-teal-600 text-sm font-semibold hover:text-teal-700 transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          
          {/* <div className="text-center mt-10 sm:mt-12">
            <button
              onClick={() => onPageChange('services')}
              className="bg-teal-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
            >
              View All Services
            </button>
          </div> */}

          <MassageTypesPage  />
        </div>
      </section>


      {/* Top Masseuses Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Top-Rated Masseuses
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              Meet our highly-rated massage therapists who are ready to provide exceptional service
            </p>
          </div>

          <MasseusesPage />
          
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {topMasseuses.map((masseuse: Masseuse) => (
              <div key={masseuse.id} className="bg-gray-50 rounded-xl p-5 sm:p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="relative inline-block mb-4">
                  <img 
                    src={masseuse.photo} 
                    alt={masseuse.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{masseuse.name}</h3>
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{masseuse.rating}</span>
                  <span className="text-gray-500 text-xs sm:text-sm ml-1">({masseuse.reviewCount} reviews)</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">{masseuse.experience} years experience</p>
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {masseuse.specialties.slice(0, 2).map((specialty) => (
                    <span key={specialty} className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">
                      {specialty}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => onPageChange('masseuses')}
                  className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div> */}
          
          {/* <div className="text-center mt-10 sm:mt-12">
            <button
              onClick={() => onPageChange('masseuses')}
              className="bg-teal-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
            >
              View All Masseuses
            </button>
          </div> */}
        </div>
      </section>

      <FAQPage />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-purple-600 text-white">
        <div className="max-w-3xl sm:max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            {/* Ready to Experience Ultimate Relaxation? */}
            Still Have Questions?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90">
            {/* Book your massage session today and let our professional therapists help you unwind and rejuvenate. */}
            Our customer support team is here to help with any questions or concerns you may have.
          </p>
          <button
            // onClick={() => onPageChange('booking')}
            onClick={() => {window.Tawk_API.maximize()}}
            className="bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
          >
            {/* Start Booking Process */}
            Contact Support
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;