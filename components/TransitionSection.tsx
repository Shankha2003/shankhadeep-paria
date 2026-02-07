
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHRASES = [
  "Coded with Soul",
  "Designed for Tomorrow",
  "Pixel Perfect Aesthetics",
  "Anime Inspired UI",
  "Futuristic Solutions"
];

const ThanosSnapText: React.FC<{ text: string }> = ({ text }) => {
  const characters = text.split("");

  return (
    <div className="flex justify-center flex-wrap overflow-hidden py-4">
      {characters.map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            x: (Math.random() - 0.5) * 100, // Disperse sideways
            y: (Math.random() - 1) * 100, // Disperse upwards
            scale: 0,
            rotate: (Math.random() - 0.5) * 90,
            filter: "blur(4px)",
            transition: { duration: 0.8, ease: "easeIn" }
          }}
          transition={{
            duration: 0.05,
            delay: i * 0.04,
            ease: "easeOut"
          }}
          className="inline-block whitespace-pre font-display font-medium text-lg md:text-2xl text-accent-1 uppercase tracking-[0.2em]"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

const TransitionSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-12 md:py-20 z-20">
      {/* Anime GIF Element - Floating slightly above the text */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="mb-6 relative"
      >
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3ZueXQ4Z2NxeGtyN2l3ZG9ueXFzZ3ZueXQ4Z2NxeGtyN2l3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/vHIdE02h8W2Lz9WpI7/giphy.gif" 
          alt="Anime Sparkle"
          className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-80 filter brightness-110 drop-shadow-[0_0_20px_rgba(254,176,93,0.4)]"
        />
      </motion.div>

      <div className="glass px-12 py-5 rounded-full border-accent-1/20 min-w-[320px] text-center shadow-xl shadow-accent-1/5">
        <AnimatePresence mode="wait">
          <ThanosSnapText key={PHRASES[index]} text={PHRASES[index]} />
        </AnimatePresence>
      </div>

      {/* Decorative lines connecting the sections */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-gradient-to-b from-transparent to-accent-1/30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-gradient-to-t from-transparent to-accent-1/30" />
    </div>
  );
};

export default TransitionSection;
