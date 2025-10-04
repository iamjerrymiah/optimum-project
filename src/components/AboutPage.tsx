import React from 'react';
import { Heart, Shield, Users, Award, Clock, MapPin } from 'lucide-react';

interface AboutPageProps {
  onPageChange?: any;
}

const AboutPage: React.FC<AboutPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About ZenTouch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about connecting you with exceptional massage therapists 
            who bring wellness, relaxation, and healing directly to your doorstep.
          </p>
        </div> */}

        
        {/* <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Massage therapy session"
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, ZenTouch emerged from a simple yet powerful vision: 
                  making professional massage therapy accessible to everyone, anywhere, anytime.
                </p>
                <p>
                  We recognized that in today's fast-paced world, people need convenient access 
                  to wellness services that fit their busy schedules. Traditional spa visits, 
                  while wonderful, aren't always practical for everyone.
                </p>
                <p>
                  That's why we created a platform that brings certified, experienced massage 
                  therapists directly to you - whether at home, in your office, or at your hotel. 
                  Our mission is to make wellness convenient, personalized, and professionally delivered.
                </p>
              </div>
            </div>
          </div>
        </div> */}


        {/* Key Features */}
        <div className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-2xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose ZenTouch?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-teal-600 p-2 rounded-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Certified Professionals</h3>
                <p className="text-gray-600 text-sm">All our massage therapists are licensed, insured, and continuously trained in the latest techniques.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 p-2 rounded-lg">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600 text-sm">Book appointments at your convenience, including evenings and weekends. Same-day bookings often available.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-600 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mobile Service</h3>
                <p className="text-gray-600 text-sm">Our therapists come to you with professional equipment, creating a spa experience in your space.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Personalized Care</h3>
                <p className="text-gray-600 text-sm">Each session is tailored to your specific needs, preferences, and health considerations.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Safety First</h3>
                <p className="text-gray-600 text-sm">Background-checked therapists with comprehensive insurance coverage for your peace of mind.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Diverse Expertise</h3>
                <p className="text-gray-600 text-sm">Choose from specialists in Swedish, deep tissue, Thai, sports, aromatherapy, and more.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-900 rounded-2xl text-white p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact by the Numbers</h2>
            <p className="text-gray-300 text-lg">
              Trusted by thousands of clients globally
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">5000+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Professional Therapists</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">15000+</div>
              <div className="text-gray-300">Sessions Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">4.9</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To democratize wellness by making professional massage therapy accessible. To safe keep client $donation and masseuses safety.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Promise</h3>
            <p className="text-gray-600 leading-relaxed">
              Every masseuse in our network is thoroughly vetted, licensed, and committed 
              to providing exceptional service with the highest standards of professionalism.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Community</h3>
            <p className="text-gray-600 leading-relaxed">
              We've built a trusted community of wellness professionals and satisfied clients 
              who value quality, convenience, and personalized care.
            </p>
          </div>
        </div>


        {/* <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="CEO"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Adebayo Johnson</h3>
              <p className="text-teal-600 font-semibold mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Former wellness center director with 15+ years experience in healthcare and massage therapy administration.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <img 
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="COO"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Okafor</h3>
              <p className="text-purple-600 font-semibold mb-3">Chief Operations Officer</p>
              <p className="text-gray-600 text-sm">
                Licensed massage therapist and operations expert, ensuring quality standards across all our services.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <img 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="CTO"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Eze</h3>
              <p className="text-yellow-600 font-semibold mb-3">Head of Technology</p>
              <p className="text-gray-600 text-sm">
                Technology innovator focused on creating seamless booking experiences and platform reliability.
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="bg-gradient-to-r from-teal-600 to-purple-600 rounded-2xl text-white text-center p-8 lg:p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience ZenTouch?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have discovered the convenience and quality of our massage services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange('booking')}
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Book Your First Session
            </button>
            <button
              onClick={() => onPageChange('masseuses')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-200"
            >
              Meet Our Therapists
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutPage;