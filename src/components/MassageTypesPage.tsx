import React, { useState } from 'react';
import { Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { massageTypes } from "../data/massageTypes";
import { MassageType } from "../types";

const MassageTypesPage: React.FC = () => {
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleBookNow = (service: MassageType) => {
    // Save selected service in state (if you’re using context or global store)
    sessionStorage.setItem("selectedService", JSON.stringify(service));
    navigate("/booking");
  };

  return (
    <div className="min-h-screen pb-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Duration Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setSelectedDuration(null)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                selectedDuration === null
                  ? "bg-teal-600 text-white"
                  : "text-gray-600 hover:text-teal-600"
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
                    ? "bg-teal-600 text-white"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                {duration} min
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {massageTypes.map((service: MassageType) => {
            const filteredDurations = selectedDuration
              ? service.durations.filter((d) => d === selectedDuration)
              : service.durations;

            if (selectedDuration && !service.durations.includes(selectedDuration)) {
              return null;
            }

            return (
              <div
                key={service.id}
                className="bg-white relative md:h-[300px] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
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
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-4 text-[12px] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Duration and Pricing */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Duration & Pricing:
                      </h4>
                      <div className="space-y-2">
                        {filteredDurations.map((duration) => (
                          <div
                            key={duration}
                            className="flex items-center justify-between text-sm"
                          >
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-gray-400 mr-2" />
                              <span>{duration} minutes</span>
                            </div>
                            <span className="font-semibold text-teal-600">
                              $
                              {service.priceRanges[duration]?.min.toLocaleString()}{" "}
                              - $
                              {service.priceRanges[duration]?.max.toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookNow(service)}
                      className="w-full md:w-[200px] bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center group"
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
      </div>
    </div>
  );
};

export default MassageTypesPage;