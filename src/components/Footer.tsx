import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleCareersClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate('/careers');
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">DentCall is an innovative AI-powered assistant for dental practices, designed to streamline operations and improve patient communication.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: contact@dentcall.ai</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin /></a>
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Link to="/careers" onClick={handleCareersClick} className="hover:text-blue-400">Careers</Link>
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Use</a>
            <a href="#" className="hover:text-blue-400">Security</a>
          </div>
          <p>&copy; 2024 DentCall, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;