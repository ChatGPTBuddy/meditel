import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DentCallLogo from './DentelLogo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'How it works', href: 'how-it-works' },
    { name: 'Features', href: 'features' },
    { name: 'Integrations', href: 'integrations' },
    { name: 'Compliance', href: 'security' },
    { name: 'FAQ', href: 'faq' },
    { name: 'Backoffice', href: 'backoffice' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={handleLogoClick} className="flex items-center">
            <DentCallLogo />
          </Link>
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                {item.name}
              </button>
            ))}
          </nav>
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('demo')}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Book a Demo
            </button>
          </div>
          <button
            className="lg:hidden bg-white p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition duration-300"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('demo')}
              className="block w-full text-left py-2 text-blue-600 hover:text-blue-800 transition duration-300"
            >
              Book a Demo
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;