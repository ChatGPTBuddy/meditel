import React from 'react';
import { Puzzle, CheckCircle } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    { name: 'Curve Dental', logo: 'https://hiai.ai/wp-content/uploads/dentcall/Curve.png' },
    { name: 'Denticon', logo: 'https://hiai.ai/wp-content/uploads/dentcall/Denticon.png' },
    { name: 'EagleSoft', logo: 'https://hiai.ai/wp-content/uploads/dentcall/EagleSoft.png' },
    { name: 'Open Dental', logo: 'https://hiai.ai/wp-content/uploads/dentcall/OpenDental.png' },
    { name: 'Weave', logo: 'https://hiai.ai/wp-content/uploads/dentcall/Weave.png' },
  ];

  const additionalIntegrations = [
    'Dentrix', 'ABELDent', 'Practice-Web',
    'DentiMax', 'Ace Dental', 'ClearDent'
  ];

  return (
    <section id="integrations" className="py-20 bg-white">
      <div className="container mx-auto px-4 pt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Compatible with the Top Dental CRMs:</h2>
        <p className="text-xl text-center text-blue-600 mb-8 italic">
          Seamless Integration for Enhanced Efficiency
        </p>
        
        <div className="bg-blue-50 p-8 rounded-lg mb-12">
          <h4 className="text-xl font-semibold mb-4">Enhance Patient Communication and Efficiency</h4>
          <p className="mb-6">Our AI voice assistants seamlessly integrate with your CRM and appointment setters to enhance patient communication, reduce no-shows, and optimize scheduling. Say goodbye to missed appointments and hello to a more efficient, patient-friendly practice.</p>
          <ul className="list-none space-y-2">
            {['Integrates with top dental CRMs', 'Reduces no-shows', 'Optimizes scheduling', 'Enhances patient communication', 'Increases practice efficiency'].map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">Upgrade your dental practice with cutting-edge AI 🦷</h3>

        <div className="flex justify-center mb-12">
          <Puzzle className="h-24 w-24 text-blue-600" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center mb-12">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md w-full flex items-center justify-center">
              <img src={integration.logo} alt={integration.name} className="max-h-12 max-w-full" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {additionalIntegrations.map((integration, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
              <span className="font-semibold">{integration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;