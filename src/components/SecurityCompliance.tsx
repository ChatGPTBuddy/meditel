import React from 'react';
import { Shield, Activity, Lock } from 'lucide-react';

const SecurityCompliance = () => {
  const securityFeatures = [
    { 
      icon: <Shield className="h-12 w-12 text-green-500" />, 
      title: "HIPAA Compliant", 
      subtitle: "Secure data processing.",
      description: "We adhere to HIPAA standards, ensuring that your patients' data is processed and stored securely according to healthcare regulations." 
    },
    { 
      icon: <Activity className="h-12 w-12 text-blue-500" />, 
      title: "24/7 Monitoring", 
      subtitle: "Continuous security.",
      description: "Our systems are continuously monitored to ensure maximum security and availability." 
    },
    { 
      icon: <Lock className="h-12 w-12 text-purple-500" />, 
      title: "Data Protection", 
      subtitle: "Advanced encryption.",
      description: "We use advanced encryption protocols and multi-factor authentication to ensure the confidentiality and integrity of patient data." 
    },
  ];

  return (
    <section id="security" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 pt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Security & Compliance</h2>
        <p className="text-xl text-center text-blue-600 mb-16 italic">
          Your Data's Safety is Our Top Priority
        </p>
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 mb-6">
            At DentCall, we understand the critical importance of safeguarding sensitive patient data and maintaining the highest standards of compliance. Our advanced security infrastructure ensures your dental practice operates with complete peace of mind, knowing that every piece of data is protected with cutting-edge technology and best practices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">{feature.subtitle}</p>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-left max-w-4xl mx-auto">
          <p className="text-lg text-gray-700">
            By partnering with us, you're not only choosing superior AI solutions but also ensuring your clinic meets the highest security and compliance standards. Trust us to protect what matters most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;