
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import InterestsRow from './components/InterestsRow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundRays from './components/BackgroundRays';
import GridBackground from './components/GridBackground';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      if (!isMuted) {
        audioRef.current.play().catch(err => console.log("Audio play blocked by browser."));
      }
    }
  }, [isMuted]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSound = () => setIsMuted(!isMuted);

  return (
    <div className="min-h-screen font-sans selection:bg-accent-1 selection:text-charcoal transition-colors duration-500 bg-background text-text-primary overflow-x-hidden">
      <BackgroundRays />
      <GridBackground />
      
      {/* Background Music Element */}
      <audio 
        ref={audioRef} 
        loop 
        src="public/music/calm.mp3" 
      />

      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        isMuted={isMuted} 
        toggleSound={toggleSound} 
      />
      
      <main className="relative z-10 space-y-0">
        <Hero />
        <Projects />
        <div className="space-y-2 md:space-y-4">
          <Experience />
          <Services />
          <InterestsRow />
          <Contact />
        </div>
      </main>

      <Footer />
      
      {/* Visual background noise/texture */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[var(--noise-opacity)]" />
    </div>
  );
};

export default App;
