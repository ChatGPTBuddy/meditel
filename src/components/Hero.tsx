import React, { useState, useRef, useEffect } from 'react';
import { PhoneCall, ArrowRight, Play, Pause } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioLink = "https://jtuyprjjgxbgmtjiykoa.supabase.co/storage/v1/object/public/recordings/68835053-ddaf-452d-9c6a-07dd880b8079-1728671023209-8a6229b6-fc10-4b85-a787-98adf5169c73-mono.wav";

  const toggleAudio = () => {
    if (!showPlayer) {
      setShowPlayer(true);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { value: 96, suffix: '%', description: 'Routine Questions Handled by AI' },
    { value: 22, suffix: '%', description: 'Average Missed Calls' },
    { value: 80, suffix: '%', description: 'Business Communication via Phone' },
    { value: 10, suffix: 'x', description: 'Faster Response Time' },
  ];

  return (
    <section className="bg-white pt-16">
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 gradient-text">
            The AI Receptionist for Medical Practices
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 mb-8">
            Streamline your medical practice with our intelligent AI solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={toggleAudio}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 inline-flex items-center justify-center text-lg font-semibold w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {isPlaying ? <Pause className="mr-2" /> : <Play className="mr-2" />}
              {showPlayer ? (isPlaying ? "Pause" : "Play") : "Listen to a sample call"}
            </button>
            <a
              href="tel:+13322863223"
              className="bg-blue-400 text-white px-6 py-3 rounded-md hover:bg-blue-500 inline-flex items-center justify-center text-lg font-semibold w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <PhoneCall className="mr-2" />
              Call the AI yourself
            </a>
            <a
              href="https://dashboard.hiai.ai/app/eu/client?username=demo@meditel.ai&password=Demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-400 inline-flex items-center justify-center text-lg font-semibold w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              Try the Dashboard <ArrowRight className="ml-2" />
            </a>
          </div>
          {showPlayer && (
            <div className="mt-8">
              <audio
                ref={audioRef}
                src={audioLink}
                className="w-full max-w-md mx-auto"
                controls
              />
            </div>
          )}
        </div>
      </div>
      <div className="bg-blue-50 py-16" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold mb-2 text-blue-600">
                  {inView ? (
                    <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
