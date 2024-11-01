import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

const AudioPlayer: React.FC = () => {
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

  return (
    <div>
      <button
        onClick={toggleAudio}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 inline-flex items-center justify-center text-lg font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        {isPlaying ? <Pause className="mr-2" /> : <Play className="mr-2" />}
        {showPlayer ? (isPlaying ? "Pause" : "Play") : "Listen to a sample call"}
      </button>

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
  );
};

export default AudioPlayer;