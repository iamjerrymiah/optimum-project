import React, { useState } from 'react';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { massageTypes } from '../data/massageTypes';
import { MassageType } from '../types';

interface MassageTypesPageProps {
  onPageChange?: any;
  onServiceSelect?: any;
}

const MassageTypesPage: React.FC<MassageTypesPageProps> = ({ onPageChange, onServiceSelect }) => {
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);

  const handleBookNow = (service: MassageType) => {
    onServiceSelect(service);
    onPageChange('booking');
  };

  return (
    <div className="min-h-screen pb-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Massage Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of professional massage therapies, 
            each designed to address specific wellness needs and preferences.
          </p>
        </div> */}

        {/* Duration Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setSelectedDuration(null)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                selectedDuration === null
                  ? 'bg-teal-600 text-white'
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              All Durations
            </button>
            {[60, 90, 120].map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  selectedDuration === duration
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                {duration} min
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {massageTypes.map((service: MassageType) => {
            const filteredDurations = selectedDuration 
              ? service.durations.filter(d => d === selectedDuration)
              : service.durations;
            
            if (selectedDuration && !service.durations.includes(selectedDuration)) {
              return null;
            }

            return (
              <div key={service.id} className="bg-white relative md:h-[320px] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-48 md:h-[320px] object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                      {/* <div className="flex items-center text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm font-semibold text-gray-700">4.8</span>
                      </div> */}
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-[12px] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    {/* <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, index) => (
                          <span key={index} className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div> */}

                    {/* Duration and Pricing */}
                    <div className="mb-4 md:absolute md:bottom-16 md:right-4 md:left-[150px]">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Duration & Pricing:</h4>
                      <div className="space-y-2">
                        {filteredDurations.map((duration) => (
                          <div key={duration} className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-gray-400 mr-2" />
                              <span>{duration} minutes</span>
                            </div>
                            <span className="font-semibold text-teal-600">
                              ${service.priceRanges[duration]?.min.toLocaleString()} - ${service.priceRanges[duration]?.max.toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookNow(service)}
                      className="w-full md:w-[200px] md:absolute md:bottom-4 md:right-0 md:left-[150px] bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center group"
                    >
                      Book This Service
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Not Sure Which Service is Right for You?
            </h2>
            <p className="mb-6 opacity-90">
              Our experienced masseuses can help you choose the perfect treatment based on your needs and preferences.
            </p>
            <button
              onClick={() => onPageChange('masseuses')}
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Consult with Our Experts
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MassageTypesPage;