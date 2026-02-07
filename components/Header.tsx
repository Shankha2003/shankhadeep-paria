
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, MapPin, Volume2, VolumeX } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isMuted: boolean;
  toggleSound: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, isMuted, toggleSound }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 right-0 h-[70px] z-50 pointer-events-none"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-12 h-full flex items-center justify-start gap-3">
        {/* Personal Logo */}
        <div className="glass h-12 flex items-center px-4 rounded-full pointer-events-auto">
          <div className="w-8 h-8 rounded-full accent-1-gradient flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(254,176,93,0.3)]">
            <img 
              src="/images/me.jpeg" 
              alt="Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sound Toggle - Positioned before dark mode toggle */}
        <button
          onClick={toggleSound}
          className="glass w-12 h-12 flex items-center justify-center rounded-full hover:border-accent-1 transition-colors group pointer-events-auto"
          aria-label="Toggle Sound"
        >
          {isMuted ? (
            <VolumeX size={18} className="text-text-primary group-hover:text-accent-1 transition-colors" />
          ) : (
            <Volume2 size={18} className="text-text-primary group-hover:text-accent-1 transition-colors" />
          )}
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="glass w-12 h-12 flex items-center justify-center rounded-full hover:border-accent-1 transition-colors group pointer-events-auto"
          aria-label="Toggle Theme"
        >
          {darkMode ? (
            <Sun size={18} className="text-text-primary group-hover:text-accent-1 transition-colors" />
          ) : (
            <Moon size={18} className="text-text-primary group-hover:text-accent-1 transition-colors" />
          )}
        </button>

        {/* Location Text - Grouped left */}
        <div className="hidden sm:flex glass h-12 items-center px-6 rounded-full space-x-2 text-sm font-medium pointer-events-auto">
          <div className="relative flex items-center justify-center">
            <MapPin 
              size={16} 
              className="text-accent-1 drop-shadow-[0_0_8px_rgba(254,176,93,0.8)]" 
            />
            {/* Subtle pulse glow behind icon */}
            <span className="absolute inset-0 bg-accent-1/20 blur-md rounded-full animate-pulse -z-10"></span>
          </div>
          <span className="text-text-primary uppercase tracking-wider text-[10px]"> Kol / Ind </span>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
