import React, { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [
    { value: 96, suffix: '%', description: 'Routinevragen Behandeld door AI' },
    { value: 22, suffix: '%', description: 'Gemiddeld Aantal Gemiste Oproepen' },
    { value: 80, suffix: '%', description: 'Zakelijke Communicatie via Telefoon' },
    { value: 10, suffix: 'x', description: 'Snellere Responstijd' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);

      let frame = 0;
      const countUp = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCounts = stats.map((stat) => {
          return Math.round(easeOutQuad(progress) * stat.value);
        });
        setCounts(currentCounts);

        if (frame === totalFrames) {
          clearInterval(countUp);
        }
      }, frameDuration);

      return () => clearInterval(countUp);
    }
  }, [isVisible]);

  const easeOutQuad = (t: number) => t * (2 - t);

  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold mb-2 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {counts[index]}{stat.suffix}
              </div>
              <p className={`text-gray-600 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1s' }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;