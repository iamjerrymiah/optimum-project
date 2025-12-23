import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, Calendar, Clock, MapPin, DollarSign, User, Phone, Mail } from 'lucide-react';
import { BookingData, MassageType, Masseuse } from '../types';
import { massageTypes } from '../data/massageTypes';
import { useNavigate } from 'react-router';
import PrivacyModal from './PrivacyModal';

interface BookingPageProps {
  initialMasseuse?: Masseuse;
  initialService?: MassageType;
  onPageChange: (page: string) => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ 
  initialMasseuse, 
  initialService, 
  onPageChange 
}) => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    // masseuse: initialMasseuse,
    massageType: initialService,
    duration: initialService?.durations[0],
    location: '',
    preferredDate: '',
    preferredTime: '',
    customOffer: 0,
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    specialRequests: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService && !bookingData.customOffer) {
      const duration = bookingData.duration || initialService.durations[0];
      const priceRange = initialService.priceRanges[duration];
      if (priceRange) {
        setBookingData(prev => ({
          ...prev,
          customOffer: Math.round((priceRange.min + priceRange.max) / 2)
        }));
      }
    }
  }, [initialService, bookingData.duration, bookingData.customOffer]);

  const validateStep = (step: number): boolean => {
    const newErrors: {[key: string]: string} = {};

    switch (step) {
      case 1:
        // if (!bookingData.masseuse) newErrors.masseuse = 'Please select a masseuse';
        if (!bookingData.massageType) newErrors.massageType = 'Please select a massage type';
        if (!bookingData.duration) newErrors.duration = 'Please select duration';
        break;
      case 2:
        if (!bookingData.location.trim()) newErrors.location = 'Location is required';
        if (!bookingData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
        if (!bookingData.preferredTime) newErrors.preferredTime = 'Preferred time is required';
        if (!bookingData.customOffer || bookingData.customOffer <= 0) newErrors.customOffer = 'Please enter your offer amount';
        break;
      case 3:
        if (!bookingData.customerName.trim()) newErrors.customerName = 'Name is required';
        if (!bookingData.customerPhone.trim()) newErrors.customerPhone = 'Phone number is required';
        if (!bookingData.customerEmail.trim()) newErrors.customerEmail = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(bookingData.customerEmail)) newErrors.customerEmail = 'Please enter a valid email';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else if(currentStep === 3){
        setShowPrivacy(true)
      } 
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/");
    }
  };

  const [showPrivacy, setShowPrivacy] = useState(false);
const [bookingMessage, setBookingMessage] = useState<string | null>(null);

const handleSubmit = () => {

  if (window?.Tawk_API) {
    // Attach customer info
    window.Tawk_API.setAttributes(
      {
        name: bookingData.customerName,
        email: bookingData.customerEmail,
        phone: bookingData.customerPhone,
      },
      (err: any) => {
        if (err) console.error("Tawk.to attributes error:", err);
      }
    );

    // Build booking summary (user will send manually)
    const message = `
    New Booking Request:
    - Service: ${bookingData.massageType?.name}
    - Duration: ${bookingData.duration} minutes
    - Date: ${bookingData.preferredDate} at ${bookingData.preferredTime}
    - Location: ${bookingData.location}
    - Offer: $${bookingData.customOffer}
    - Special Requests: ${bookingData.specialRequests || "None"}
    - Name: ${bookingData.customerName}
    - Phone: ${bookingData.customerPhone}
    - Email: ${bookingData.customerEmail}
    `.trim();

    setBookingMessage(message); // show summary in UI
    // setShowPrivacy(true)
    
    // Open chat window
    window.Tawk_API.maximize();
  }

  // Reset form
  setIsSubmitted(true);
};


  const updateBookingData = (updates: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...updates }));
    // Clear related errors
    const newErrors = { ...errors };
    Object.keys(updates).forEach(key => {
      delete newErrors[key];
    });
    setErrors(newErrors);
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
            Thank you for your booking request. SensationalMeet will contact you in the soonest on our live chat to confirm the appointment details.
          </p>
          
          {/* <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-4">Booking Summary:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Service:</span>
                <span className="font-medium">{bookingData.massageType?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration:</span>
                <span className="font-medium">{bookingData.duration} minutes</span>
              </div>
              <div className="flex justify-between">
                <span>Date & Time:</span>
                <span className="font-medium">{bookingData.preferredDate} at {bookingData.preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="font-medium">{bookingData.location}</span>
              </div>
              <div className="flex justify-between font-semibold text-yellow-600">
                <span>Your Offer:</span>
                <span>${bookingData.customOffer.toLocaleString()}</span>
              </div>
            </div>
          </div> */}
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
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <PrivacyModal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        onAgree={() => handleSubmit()}
      />
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step <= currentStep ? 'bg-yellow-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {step < currentStep ? <Check className="h-5 w-5" /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-yellow-600' : 'bg-gray-300'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-center space-x-8 text-sm">
            <span className={currentStep >= 1 ? 'text-yellow-600 font-semibold' : 'text-gray-500'}>
              Service & Masseuse
            </span>
            <span className={currentStep >= 2 ? 'text-yellow-600 font-semibold' : 'text-gray-500'}>
              Details & Pricing
            </span>
            <span className={currentStep >= 3 ? 'text-yellow-600 font-semibold' : 'text-gray-500'}>
              Contact Info
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 text-center">Select Service & Masseuse</h2>
              
              {/* Massage Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Choose Massage Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {massageTypes.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => {
                        updateBookingData({ 
                          massageType: service, 
                          duration: service.durations[0] 
                        });
                      }}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                        bookingData.massageType?.id === service.id
                          ? 'border-yellow-600 bg-yellow-50'
                          : 'border-gray-200 hover:border-yellow-300'
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{service.description.slice(0, 100)}...</p>
                    </div>
                  ))}
                </div>
                {errors.massageType && <p className="text-red-600 text-sm mt-1">{errors.massageType}</p>}
              </div>

              {/* Duration Selection */}
              {bookingData.massageType && (
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Select Duration</label>
                  <div className="flex gap-4">
                    {bookingData.massageType.durations.map((duration) => (
                      <button
                        key={duration}
                        onClick={() => updateBookingData({ duration })}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          bookingData.duration === duration
                            ? 'bg-yellow-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {duration} minutes
                      </button>
                    ))}
                  </div>
                  {errors.duration && <p className="text-red-600 text-sm mt-1">{errors.duration}</p>}
                </div>
              )}

              {/* Masseuse Selection */}
              {/* <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Choose Your Masseuse</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {masseuses.filter(m => m.isAvailable).map((masseuse) => (
                    <div
                      key={masseuse.id}
                      onClick={() => updateBookingData({ masseuse })}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                        bookingData.masseuse?.id === masseuse.id
                          ? 'border-yellow-600 bg-yellow-50'
                          : 'border-gray-200 hover:border-yellow-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <img src={masseuse.photo} alt={masseuse.name} className="w-12 h-12 object-cover rounded-full" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{masseuse.name}</h3>
                          <div className="flex items-center text-sm text-gray-600">
                            <span>{masseuse.experience} years exp.</span>
                            <span className="mx-2">•</span>
                            <span>{masseuse.rating} ⭐</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {errors.masseuse && <p className="text-red-600 text-sm mt-1">{errors.masseuse}</p>}
              </div> */}
            </div>
          )}

          {/* Step 2: Booking Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 text-center">Booking Details & Pricing</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Location/Address
                  </label>
                  <textarea
                    value={bookingData.location}
                    onChange={(e) => updateBookingData({ location: e.target.value })}
                    placeholder="Enter your address or preferred location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    rows={3}
                  />
                  {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={bookingData.preferredDate}
                    onChange={(e) => updateBookingData({ preferredDate: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  {errors.preferredDate && <p className="text-red-600 text-sm mt-1">{errors.preferredDate}</p>}
                  
                  <label className="block text-sm font-semibold text-gray-900 mb-2 mt-4">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Preferred Time
                  </label>
                  <select
                    value={bookingData.preferredTime}
                    onChange={(e) => updateBookingData({ preferredTime: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Select time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                  </select>
                  {errors.preferredTime && <p className="text-red-600 text-sm mt-1">{errors.preferredTime}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <DollarSign className="inline h-4 w-4 mr-1" />
                  Your Offer Amount ($)
                </label>
                <input
                  type="number"
                  value={bookingData.customOffer}
                  onChange={(e) => updateBookingData({ customOffer: parseInt(e.target.value) })}
                  placeholder="Enter your offer amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                {bookingData.massageType && bookingData.duration && (
                  <p className="text-sm text-gray-600 mt-1">Typical range: $120 - $2000 </p>
                )}
                {errors.customOffer && <p className="text-red-600 text-sm mt-1">{errors.customOffer}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  value={bookingData.specialRequests}
                  onChange={(e) => updateBookingData({ specialRequests: e.target.value })}
                  placeholder="Any special requests or preferences?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* Step 3: Contact Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 text-center">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={bookingData.customerName}
                    onChange={(e) => updateBookingData({ customerName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  {errors.customerName && <p className="text-red-600 text-sm mt-1">{errors.customerName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={bookingData.customerPhone}
                    onChange={(e) => updateBookingData({ customerPhone: e.target.value })}
                    placeholder="+1 800 000 0000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  {errors.customerPhone && <p className="text-red-600 text-sm mt-1">{errors.customerPhone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={bookingData.customerEmail}
                  onChange={(e) => updateBookingData({ customerEmail: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                {errors.customerEmail && <p className="text-red-600 text-sm mt-1">{errors.customerEmail}</p>}
              </div>

              {/* Booking Summary */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Masseuse:</span>
                    <span className="font-medium">{bookingData.masseuse?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="font-medium">{bookingData.massageType?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{bookingData.duration} minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date & Time:</span>
                    <span className="font-medium">{bookingData.preferredDate} at {bookingData.preferredTime}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-yellow-600">
                    <span>Your Offer:</span>
                    <span>${bookingData.customOffer.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8 border-t border-gray-200">
            <button
              onClick={handleBack}
              className="flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {currentStep === 1 ? 'Back to Home' : 'Back'}
            </button>
            
            <button
              onClick={handleNext}
              className="flex items-center px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200"
            >
              {currentStep === 3 ? 'Confirm Booking' : 'Next'}
              {currentStep < 3 && <ArrowRight className="h-4 w-4 ml-2" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;