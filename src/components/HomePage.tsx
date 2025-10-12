import React from 'react';
import { Star, ArrowRight, Heart, Shield, Clock, Users } from 'lucide-react';
import { massageTypes } from '../data/massageTypes';
import { masseuses, pornstars } from '../data/masseuses';
import MasseusesPage from './MasseusesPage';
import FAQPage from './FAQPage';
import AboutPage from './AboutPage';
import MassageTypesPage from './MassageTypesPage';
import { useNavigate } from 'react-router';

interface HomePageProps {
  onPageChange: (page: string) => void;
  handlePageChange?: any;
  handleServiceSelect?: any;
}

const HomePage: React.FC<HomePageProps> = ({  }) => {
  // const featuredServices = massageTypes.slice(0, 4);
  // const topMasseuses = masseuses.filter(m => m.isAvailable && m.rating >= 4.8).slice(0, 3);

  const navigate = useNavigate()
  

  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-200 to-black py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium Massage
                <span className="text-white block">Therapy Services</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Connect with certified professional masseuses for personalized relaxation and wellness treatments. 
                Book your perfect massage experience today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => navigate('/booking')}
                  className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate('/book-xxx')}
                  className="border-2 border-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-all duration-200"
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
              <div className="bg-yellow-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">Licensed Professionals</h3>
              <p className="text-gray-600 text-sm">All masseuses are certified and licensed</p>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-gray-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600" />
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
          
          <MassageTypesPage  />
        </div>
      </section>


      <div className='text-center mt-6'>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          XXX-Rated Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {pornstars.slice(0,3).map((masseuse: any) => (
          <div key={masseuse.id} className="bg-gray-50 rounded-xl p-5 sm:p-6 text-center hover:bg-gray-100 transition-colors duration-200">
            <div className="relative inline-block mb-4">
              <img 
                src={masseuse.photo} 
                alt={masseuse.name}
                className="w-40 h-40 sm:w-40 sm:h-40 object-cover rounded-full mx-auto"
              />
              {/* <div className="absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white"></div> */}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{masseuse.name}</h3>
          </div>
        ))}
      </div>
    </div>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 to-gray-600 text-white">
        <div className="max-w-3xl sm:max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            {/* Ready to Experience Ultimate Relaxation? */}
            Get XXX-clusive treatment?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90">
            {/* Book your massage session today and let our professional therapists help you unwind and rejuvenate. */}
            Book your favorite model. We provide the best spicy and hot treatments to satisfy your needs😉.
          </p>
          <button
            // onClick={() => onPageChange('booking')}
            onClick={() => {navigate('/book-xxx')}}
            className="bg-white text-yellow-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
          >
            {/* Start Booking Process */}
            Book Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

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
          
        </div>
      </section>

      
      <AboutPage />

      <FAQPage />

    </div>
  );
};

export default HomePage;