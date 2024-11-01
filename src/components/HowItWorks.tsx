import React from 'react';
import { Database, PhoneForwarded, Settings, MessageSquare } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    { 
      icon: <Database className="h-12 w-12 text-blue-500" />, 
      title: "Integrate with your PMS", 
      subtitle: "Seamless connection.",
      description: "1-click integration with your practice management software." 
    },
    { 
      icon: <PhoneForwarded className="h-12 w-12 text-green-500" />, 
      title: "Forward calls to DentCall", 
      subtitle: "Efficient communication.",
      description: "Forward calls from any phone system to your DentCall number." 
    },
    { 
      icon: <Settings className="h-12 w-12 text-purple-500" />, 
      title: "Customize your calls", 
      subtitle: "Tailored to your needs.",
      description: "Easily teach your AI to handle calls just the way you like." 
    },
    { 
      icon: <MessageSquare className="h-12 w-12 text-red-500" />, 
      title: "Handle Requests and Questions", 
      subtitle: "Intelligent handling.",
      description: "Our AI assistant answers questions, schedules appointments, and gives recommendations with lightning-fast accuracy." 
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 pt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">How It Works</h2>
        <p className="text-xl text-center text-blue-600 mb-16 italic">
          Effortless Call Management, 24/7 AI Precision for Your Clinic
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                {step.icon}
                <h3 className="text-xl font-semibold ml-4">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">{step.subtitle}</p>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6">Handle Requests and Questions</h3>
          <p className="text-gray-600 mb-6">
            Our AI assistants answer calls and respond to your patients with lightning-fast accuracy. 
            This versatility allows for answering questions, booking appointments, scheduling meetings, and even giving recommendations.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Lightning-fast response times</li>
            <li>24/7 availability</li>
            <li>Human-like interaction</li>
            <li>Seamless integration with your existing systems</li>
            <li>Trained on all the details of your dental clinic</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;