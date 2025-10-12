import React, { useState } from 'react';
import { DollarSign, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { pornstars } from '../data/masseuses';
import { useNavigate } from 'react-router';
import PrivacyModal from './PrivacyModal';

interface MasseusesPageProps {
  onPageChange?: any;
  onMasseuseSelect?: any;
}

const BookModel: React.FC<MasseusesPageProps> = ({ }) => {
  const navigate = useNavigate()
    const [data, setData] = useState({
      name: '',
      modelName: '',
      number: '',
      customOffer: 0,
    });
    const [errors, setErrors] = useState<{[key: string]: string}>({});
      const [isSubmitted, setIsSubmitted] = useState(false);
      const [showPrivacy, setShowPrivacy] = useState(false);
    const [bookingMessage, setBookingMessage] = useState<string | null>(null);

    const updateBookingData = (updates: Partial<any>) => {
      setData((prev:any) => ({ ...prev, ...updates }));
      // Clear related errors
      const newErrors = { ...errors };
      Object.keys(updates).forEach(key => {
        delete newErrors[key];
      });
      setErrors(newErrors);
    };

  const handleSubmit = () => {

  if (window?.Tawk_API) {
    // Attach customer info
    window.Tawk_API.setAttributes(
      {
        name: data.name,
        phone: data.number,
      },
      (err: any) => {
        if (err) console.error("Tawk.to attributes error:", err);
      }
    );

    // Build booking summary (user will send manually)
    const message = `
    New Booking Request:
    - Full Name: ${data?.name}
    - Model Name: ${data?.modelName}
    - Phone: ${data.number}
    - Offer: ${data.customOffer}
    `.trim();

    setBookingMessage(message); // show summary in UI
    // setShowPrivacy(true)
    
    // Open chat window
    window.Tawk_API.maximize();
  }

  // Reset form
  setIsSubmitted(true);
};

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 px-4 bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center bg-white rounded-xl shadow-lg p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your booking request. Zentouch will contact you in the soonest on our live chat to confirm the appointment details.
          </p>
          
          <pre style={{ whiteSpace: "pre-wrap", fontSize: "14px", marginBottom: '30px' }}>{bookingMessage}</pre>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200"
            >
              Back to Home
            </button>
            <button
              className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors duration-200"
              onClick={() => {
                navigator.clipboard.writeText(bookingMessage);
                alert("Booking details copied! Paste it into the live chat to get instant reply.");
              }}
            >
              Copy & Send to Chat
            </button>
          </div>
        </div>
        
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <PrivacyModal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        onAgree={() => handleSubmit()}
      />
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Book Session
          </h1>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our team of certified, experienced massage therapists. 
            Each professional brings unique skills and expertise to ensure your perfect wellness experience.
          </p> */}
        </div>

        <div className="space-y-6 mb-14">
          <h2 className="text-2xl font-bold text-gray-900">Book a Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  value={data.name}
                  onChange={(e) => updateBookingData({ name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>
                <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Model Name
                </label>
                <input
                  value={data.modelName}
                  onChange={(e) => updateBookingData({ modelName: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                {errors.modelName && <p className="text-red-600 text-sm mt-1">{errors.modelName}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                    type='number'
                  value={data.number}
                  onChange={(e) => updateBookingData({ number: e.target.value })}
                  placeholder="Enter your number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                {errors.number && <p className="text-red-600 text-sm mt-1">{errors.number}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <DollarSign className="inline h-4 w-4 mr-1" />
                  Your Offer Amount ($)
                </label>
                <input
                  type="number"
                  value={data.customOffer}
                  onChange={(e) => updateBookingData({ customOffer: parseInt(e.target.value) || 0 })}
                  placeholder="Enter your offer amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                {errors.customOffer && <p className="text-red-600 text-sm mt-1">{errors.customOffer}</p>}
              </div>

          </div>

          <div className="flex gap-4 pt-8 border-t border-gray-200">
            <button
              onClick={()=>navigate('/')}
              className="flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {'Back'}
            </button>
            
            <button
              onClick={()=> {setShowPrivacy(true)}}
              disabled={!data.name || !data.modelName || !data.number || !data.customOffer}
              className="flex items-center px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold disabled:bg-yellow-200 hover:bg-yellow-700 transition-colors duration-200"
            >
              {'Confirm Book'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Masseuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pornstars.map((masseuse: any) => (
            <div key={masseuse.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={masseuse.photo} 
                  alt={masseuse.name}
                  className="w-full h-64 object-cover"
                />

              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{masseuse.name}</h3>
                  </div>
                </div>
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

export default BookModel;