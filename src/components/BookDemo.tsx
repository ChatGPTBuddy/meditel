import React, { useEffect } from 'react';

const BookDemo: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Book a Demo</h2>
          <p className="text-xl text-center text-blue-600 mb-8 italic">
            Experience the Future of Dental Care with Our AI Solutions
          </p>
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/fhaarman/dentcall?hide_event_type_details=1&hide_gdpr_banner=1" 
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;