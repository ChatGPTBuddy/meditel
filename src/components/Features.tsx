import React from 'react';
import { Clock, DollarSign, Calendar, PhoneCall, BookOpen, Sliders, Headphones, Star, MessageSquare, Globe, CalendarCheck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { 
      icon: <Clock className="h-12 w-12 text-blue-500" />, 
      title: "24/7 Availability", 
      subtitle: "Always reachable, every day.",
      description: "Always available for patients, even outside regular office hours, for better service and customer satisfaction." 
    },
    { 
      icon: <DollarSign className="h-12 w-12 text-green-500" />, 
      title: "Cost-Effective Solution", 
      subtitle: "Maximize your profit and efficiency.",
      description: "Reduce costs by increasing efficiency and saving staff time with automated processes." 
    },
    { 
      icon: <Calendar className="h-12 w-12 text-purple-500" />, 
      title: "Smart Appointment Scheduling", 
      subtitle: "Prevent double bookings.",
      description: "Optimize your practice's schedule with automatic, conflict-free appointment scheduling, ensuring you never miss a patient." 
    },
    { 
      icon: <PhoneCall className="h-12 w-12 text-red-500" />, 
      title: "Intelligent Call Handling", 
      subtitle: "Fast and smart handling.",
      description: "AI efficiently handles incoming calls, connects directly with the right information, or automatically schedules appointments." 
    },
  ];

  const customization = [
    { icon: <BookOpen className="h-8 w-8 text-blue-600" />, text: "Teach the AI about your practice and protocols." },
    { icon: <Sliders className="h-8 w-8 text-blue-600" />, text: "Handles even the most complex scheduling logic." },
    { icon: <Headphones className="h-8 w-8 text-blue-600" />, text: "Listen to calls as they come in." },
  ];

  const capabilities = [
    { icon: <Star className="h-8 w-8 text-blue-600" />, title: "Human-like conversation", description: "Get 5-star patient experience out of the box." },
    { icon: <MessageSquare className="h-8 w-8 text-blue-600" />, title: "SMS", description: "Keep the conversation going after the phone call." },
    { icon: <Globe className="h-8 w-8 text-blue-600" />, title: "Multilingual", description: "Connect with patients in their preferred language." },
    { icon: <CalendarCheck className="h-8 w-8 text-blue-600" />, title: "Effortlessly fill your calendar", description: "Seamless scheduling for your practice." },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 pt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Key Features</h2>
        <p className="text-xl text-center text-blue-600 mb-16 italic">
          DentCall is the new way dentists handle phone calls
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col items-center mb-6">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 text-center">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">{feature.subtitle}</p>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Customize and monitor your calls</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customization.map((item, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 mr-4">{item.icon}</div>
                <p className="text-gray-600 text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Powerful Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 mr-4">{capability.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{capability.title}</h4>
                  <p className="text-gray-600 text-lg">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;