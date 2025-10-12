import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Clock, User } from 'lucide-react';
import { masseuses } from '../data/masseuses';
import { Masseuse } from '../types';

interface MasseusesPageProps {
  onPageChange?: any;
  onMasseuseSelect?: any;
}

const MasseusesPage: React.FC<MasseusesPageProps> = ({ onPageChange, onMasseuseSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState<'All' | 'Male' | 'Female'>('All');
  const [availabilityFilter, setAvailabilityFilter] = useState<'All' | 'Available' | 'Busy'>('All');
  const [specialtyFilter, setSpecialtyFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const allSpecialties = Array.from(
    new Set(masseuses.flatMap(m => m.specialties))
  ).sort();

  const filteredMasseuses = masseuses.filter(masseuse => {
    const matchesSearch = masseuse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         masseuse.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesGender = genderFilter === 'All' || masseuse.gender === genderFilter;
    const matchesAvailability = availabilityFilter === 'All' || 
                               (availabilityFilter === 'Available' && masseuse.isAvailable) ||
                               (availabilityFilter === 'Busy' && !masseuse.isAvailable);
    const matchesSpecialty = specialtyFilter === 'All' || masseuse.specialties.includes(specialtyFilter);

    return matchesSearch && matchesGender && matchesAvailability && matchesSpecialty;
  });

  const handleSelectMasseuse = (masseuse: Masseuse) => {
    onMasseuseSelect(masseuse);
    onPageChange('booking');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Professional Masseuses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our team of certified, experienced massage therapists. 
            Each professional brings unique skills and expertise to ensure your perfect wellness experience.
          </p>
        </div> */}

        {/* <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>

            <div className="hidden lg:flex gap-4">
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value as 'All' | 'Male' | 'Female')}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="All">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <select
                value={specialtyFilter}
                onChange={(e) => setSpecialtyFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="All">All Specialties</option>
                {allSpecialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>

              <select
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value as 'All' | 'Available' | 'Busy')}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="All">All Status</option>
                <option value="Available">Available</option>
                <option value="Busy">Busy</option>
              </select>
            </div>
          </div>

          {isFilterOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <select
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value as 'All' | 'Male' | 'Female')}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="All">All Genders</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <select
                  value={specialtyFilter}
                  onChange={(e) => setSpecialtyFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="All">All Specialties</option>
                  {allSpecialties.map(specialty => (
                    <option key={specialty} value={specialty}>{specialty}</option>
                  ))}
                </select>

                <select
                  value={availabilityFilter}
                  onChange={(e) => setAvailabilityFilter(e.target.value as 'All' | 'Available' | 'Busy')}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="All">All Status</option>
                  <option value="Available">Available</option>
                  <option value="Busy">Busy</option>
                </select>
              </div>
            </div>
          )}
        </div> */}

        {/* <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredMasseuses.length} of {masseuses.length} masseuses
          </p>
        </div> */}

        {/* Masseuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMasseuses.map((masseuse: Masseuse) => (
            <div key={masseuse.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={masseuse.photo} 
                  alt={masseuse.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 right-4">
                  {/* <div className={`w-4 h-4 rounded-full border-2 border-white ${
                    masseuse.isAvailable ? 'bg-green-500' : 'bg-red-500'
                  }`}></div> */}
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                  {/* ${masseuse.priceRange.min.toLocaleString()} - ${masseuse.priceRange.max.toLocaleString()} */}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{masseuse.name}</h3>
                    <div className="flex items-center mt-1">
                      <User className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">{masseuse.gender}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{masseuse.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500">({masseuse.reviewCount} reviews)</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <Clock className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{masseuse.experience} years experience</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {masseuse.bio}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {masseuse.specialties.map((specialty) => (
                      <span key={specialty} className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* <div className="flex items-center mb-4">
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    masseuse.isAvailable ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className={`text-sm font-medium ${
                    masseuse.isAvailable ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {masseuse.isAvailable ? 'Available Now' : 'Currently Busy'}
                  </span>
                </div> */}

                {/* <button
                  onClick={() => handleSelectMasseuse(masseuse)}
                  disabled={!masseuse.isAvailable}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    masseuse.isAvailable
                      ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {masseuse.isAvailable ? 'Select This Masseuse' : 'Currently Unavailable'}
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* {filteredMasseuses.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No masseuses found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or filters to find more options.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setGenderFilter('All');
                  setAvailabilityFilter('All');
                  setSpecialtyFilter('All');
                }}
                className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default MasseusesPage;