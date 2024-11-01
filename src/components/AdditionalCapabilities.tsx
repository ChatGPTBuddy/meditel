import React from 'react';
import { MessageSquare, Globe, Star, CalendarCheck } from 'lucide-react';

const AdditionalCapabilities = () => {
  const capabilities = [
    { icon: <Star className="h-8 w-8 text-blue-600" />, title: "Human-like conversation", description: "Get 5-star patient experience out of the box." },
    { icon: <MessageSquare className="h-8 w-8 text-blue-600" />, title: "SMS", description: "Keep the conversation going after the phone call." },
    { icon: <Globe className="h-8 w-8 text-blue-600" />, title: "Multilingual", description: "Connect with patients in their preferred language." },
    { icon: <CalendarCheck className="h-8 w-8 text-blue-600" />, title: "Effortlessly fill your calendar", description: "Seamless scheduling for your practice." },
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50"> {/* Increased padding */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Powerful Capabilities</h2> {/* Increased margin-bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Increased gap */}
          {capabilities.map((capability, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mr-6">{capability.icon}</div> {/* Increased margin-right */}
              <div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3> {/* Increased margin-bottom */}
                <p className="text-gray-600 text-lg">{capability.description}</p> {/* Increased font size */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalCapabilities;