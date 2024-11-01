import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import TryIt from '../components/TryIt';
import Integrations from '../components/Integrations';
import SecurityCompliance from '../components/SecurityCompliance';
import FAQ from '../components/FAQ';
import BackOffice from '../components/BackOffice';
import BookDemo from '../components/BookDemo';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <main>
        <Hero />
        <HowItWorks />
        <TryIt />
        <Features />
        <Integrations />
        <SecurityCompliance />
        <BackOffice />
        <FAQ />
        <BookDemo />
        <About />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}

export default Home;