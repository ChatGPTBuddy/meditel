import React from 'react';
import { PhoneCall } from 'lucide-react';

const TryIt: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">Try It Yourself!</h2>
          <p className="text-base md:text-lg text-left text-gray-600 mb-8 max-w-3xl mx-auto">
            This phone number is of a dental receptionist named Emma. Call it and try it yourself. You can make an appointment and ask questions about procedures, the practice, or pricing.
          </p>
          <div className="flex justify-center">
            <a
              href="tel:+13322863223"
              className="bg-green-500 text-white px-8 py-4 rounded-md hover:bg-green-600 inline-flex items-center justify-center text-lg font-semibold transition duration-300 shadow-md hover:shadow-lg"
            >
              <PhoneCall className="mr-3" />
              Call +1 (332) 286 3223
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryIt;