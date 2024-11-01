import React from 'react';
import { BookOpen, Calendar, Headphones } from 'lucide-react';

const CallCustomization = () => {
  const features = [
    { icon: <BookOpen className="h-8 w-8 text-blue-600" />, text: "Teach the AI about your practice and protocols." },
    { icon: <Calendar className="h-8 w-8 text-blue-600" />, text: "Handles even the most complex scheduling logic." },
    { icon: <Headphones className="h-8 w-8 text-blue-600" />, text: "Listen to calls as they come in." },
  ];

  return (
    <section className="py-24 md:py-32 bg-white"> {/* Increased padding */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Customize and monitor your calls</h2> {/* Increased margin-bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> {/* Increased gap */}
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mr-6">{feature.icon}</div> {/* Increased margin-right */}
              <p className="text-gray-600 text-lg">{feature.text}</p> {/* Increased font size */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallCustomization;