# Instructions for Implementing an Audio Player with Toggle Button

Follow these steps to add an audio player that appears when a button is clicked, similar to the DentCall site:

1. **Set up the component state:**
   In your main component (e.g., `Hero.tsx` or `HomePage.tsx`), import the necessary hooks and set up the initial state:

   ```typescript
   import React, { useState, useRef, useEffect } from 'react';
   import { Play, Pause } from 'lucide-react'; // or your preferred icon library

   const YourComponent: React.FC = () => {
     const [isPlaying, setIsPlaying] = useState(false);
     const [showPlayer, setShowPlayer] = useState(false);
     const audioRef = useRef<HTMLAudioElement>(null);

     // ... rest of the component
   };
   ```

2. **Create the toggle function:**
   Implement a function to handle the button click:

   ```typescript
   const toggleAudio = () => {
     if (!showPlayer) {
       setShowPlayer(true);
       setIsPlaying(true);
     } else {
       setIsPlaying(!isPlaying);
     }
   };
   ```

3. **Add the toggle button:**
   Create a button that will show the player and control playback:

   ```jsx
   <button
     onClick={toggleAudio}
     className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark inline-flex items-center justify-center text-lg font-semibold transition-all duration-300"
   >
     {isPlaying ? <Pause className="mr-2" /> : <Play className="mr-2" />}
     {showPlayer ? (isPlaying ? "Pause" : "Play") : "Listen to Audio"}
   </button>
   ```

4. **Implement the audio player:**
   Add the audio player component, which will be conditionally rendered:

   ```jsx
   {showPlayer && (
     <div className="mt-8">
       <audio
         ref={audioRef}
         src="/path/to/your/audio/file.mp3"
         className="w-full max-w-md mx-auto"
         controls
       />
     </div>
   )}
   ```

5. **Control audio playback:**
   Use an effect to control the audio playback based on the `isPlaying` state:

   ```typescript
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
   ```

6. **Style the component:**
   Adjust the CSS classes to match your site's design. You may need to create custom classes or use a CSS-in-JS solution depending on your project setup.

7. **Accessibility considerations:**
   - Ensure the button has an appropriate `aria-label` for screen readers.
   - Consider adding keyboard controls for the audio player.

8. **Testing:**
   - Test the functionality on various devices and browsers.
   - Ensure the audio file is properly loaded and plays correctly.

9. **Optional enhancements:**
   - Add a loading state while the audio is being fetched.
   - Implement error handling for cases where the audio fails to load.
   - Consider adding a progress bar or time display for the audio playback.

Remember to replace placeholder values (like CSS class names and audio file paths) with the appropriate values for your project. Also, ensure that you have the necessary audio file in your project's assets and that the path to it is correct.