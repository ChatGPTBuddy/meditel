import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 pt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About DentCall</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-600 mb-6 text-left">
            DentCall is the AI receptionist for dentists that answers phone calls and schedules appointments. Our mission is to revolutionize dental practice management by providing cutting-edge AI solutions.
          </p>
          <p className="text-lg text-gray-600 mb-6 text-left">
            We aim to help dental clinics and practices go from handling just a few calls a day to answering 100% of incoming calls, becoming the trusted partner for dental practices across the US and Canada.
          </p>
          <p className="text-lg text-gray-600 font-semibold text-left">
            We are making generative AI available to those who need it the most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;