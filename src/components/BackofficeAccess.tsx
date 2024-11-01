import React from 'react';
import { ArrowRight } from 'lucide-react';

const BackofficeAccess = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Access Your DentCall Dashboard
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Manage your AI receptionist, view call logs, and customize your settings in one place.
          </p>
          <a
            href="https://dashboard.hiai.ai/app/eu/client?username=demo@dentcall.ai&password=Demo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 text-gray-800 px-8 py-4 rounded-md hover:bg-gray-400 inline-flex items-center justify-center text-lg font-semibold transition duration-300"
          >
            Try the Dashboard <ArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BackofficeAccess;