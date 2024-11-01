import React from 'react';
import { Brain, MessageSquare, PhoneForwarded, LineChart, Layout, Palette, Smartphone, Rocket, Settings } from 'lucide-react';

const BackOffice = () => {
  const features = [
    { icon: <Brain className="h-8 w-8 text-blue-500" />, title: "KB Management", description: "Regional vector databases for reliable and fast context search." },
    { icon: <MessageSquare className="h-8 w-8 text-green-500" />, title: "Conversations", description: "Monitor real-time sessions across different channels." },
    { icon: <PhoneForwarded className="h-8 w-8 text-purple-500" />, title: "Live Transfer", description: "Intercom-like system to take over conversations directly." },
    { icon: <LineChart className="h-8 w-8 text-red-500" />, title: "Analytics", description: "Monitor message counts, conversation times, and other metrics." },
    { icon: <Layout className="h-8 w-8 text-yellow-500" />, title: "UI Engine", description: "Display buttons, carousels, images, and interactive UI elements." },
    { icon: <Palette className="h-8 w-8 text-indigo-500" />, title: "Sleek Themes", description: "Choose brand colors, light/dark mode, and ready-made palettes." },
    { icon: <Smartphone className="h-8 w-8 text-pink-500" />, title: "Channels", description: "Support for Web, WhatsApp, Discord, Google Chat, and more." },
    { icon: <Rocket className="h-8 w-8 text-orange-500" />, title: "Docs & APIs", description: "Integrate with other services via REST API and helper functions." },
    { icon: <Settings className="h-8 w-8 text-teal-500" />, title: "Custom Branding", description: "Fully customize with your logo and custom domain." },
  ];

  return (
    <section id="backoffice" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Access Your Backoffice</h2>
        <p className="text-xl text-center text-blue-600 mb-12 italic">
          Manage settings, view analytics, and customize your AI assistant
        </p>
        <div className="max-w-6xl mx-auto mb-12">
          <img 
            src="https://hiai.ai/wp-content/uploads/dentcall/backoffice.png" 
            alt="DentCall Backoffice Dashboard" 
            className="w-full rounded-lg shadow-lg mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-lg font-semibold ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://dashboard.hiai.ai/app/eu/client?username=demo@dentcall.ai&password=Demo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 inline-flex items-center justify-center text-lg font-semibold transition duration-300"
          >
            Try the Dashboard!
          </a>
        </div>
      </div>
    </section>
  );
};

export default BackOffice;