import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const HERO_IMAGES = [
  "public/images/me2.jpg"
];

const PHRASES = [
  "Crafted with Care",
  "Designed with Purpose",
  "Where Art Meets UX",
  "Human-Centered Design",
  "Thoughtfully Creative"
];

const ThanosSnapText: React.FC<{ text: string }> = ({ text }) => {
  const characters = text.split("");

  return (
    <div className="flex justify-center flex-wrap overflow-hidden p-0 m-0">
      {characters.map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            x: (Math.random() - 0.5) * 40,
            y: (Math.random() - 1) * 40,
            scale: 0,
            rotate: (Math.random() - 0.5) * 45,
            filter: "blur(2px)",
            transition: { duration: 0.6, ease: "easeIn" }
          }}
          transition={{
            duration: 0.05,
            delay: i * 0.03,
            ease: "easeOut"
          }}
          className="inline-block whitespace-pre font-display font-medium text-xs md:text-sm text-accent-1 uppercase tracking-[0.15em] p-0 m-0"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-12 md:pt-48 md:pb-24 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent-1/5 blur-[120px] rounded-full -z-10 animate-pulse" />
      
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-12 w-full flex flex-col md:flex-row items-center gap-12 mb-4">
        <div className="w-full md:w-3/5 flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-display italic font-thin text-text-primary leading-[1.1] tracking-tighter mb-6 capitalize max-w-[720px]">
              UI/UX Designer <br />
              Shaping Intuitive <br />
              Experiences
            </h1>
            <p className="max-w-[520px] text-text-secondary font-sans font-light text-base md:text-lg leading-relaxed mb-4 mt-4">
              Hi, I am Shankha!
            </p>
            <p className="max-w-[520px] text-text-secondary font-sans font-light text-base md:text-lg leading-relaxed mb-8">
              Passionate about crafting user-friendly interfaces that blend art, creativity, and thoughtful design. I transform complex problems into beautiful, functional experiences that resonate with users and create lasting brand impact.
            </p>
          <motion.a
            href="https://www.behance.net/shankhaparia"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-accent-1 text-charcoal font-display font-medium rounded-full transition-all overflow-hidden shadow-xl shadow-accent-1/10"
          >
            <span className="z-10 text-xs tracking-widest">BEHANCE PORTFOLIO</span>
            {/* <ArrowDownRight size={18} className="z-10 group-hover:-rotate-90 transition-transform" /> */}
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.a>
          </motion.div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full max-w-[340px] aspect-[4/5] cursor-crosshair"
          >
            {/* Floating 'Open to work' Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-6 -left-6 z-30 glass px-4 py-2 rounded-full flex items-center space-x-2 border-accent-2/20 shadow-lg shadow-accent-2/5"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-1 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-1 shadow-[0_0_8px_#FEB05D]"></span>
              </div>
              <span className="text-[10px] font-display font-bold text-text-primary tracking-widest uppercase">
                Open to work
              </span>
            </motion.div>

            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/5 shadow-2xl z-10 bg-charcoal">
              <motion.img
                src={HERO_IMAGES[0]}
                alt="Creative UI/UX Design Work"
                className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'saturate-150 brightness-110 scale-105' : 'saturate-100 opacity-90 scale-100'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />
              
              {isHovered && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"
                />
              )}
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 w-14 h-14 glass rounded-xl flex items-center justify-center z-20 shadow-xl border-accent-1/20"
            >
              <div className="text-accent-1 font-display font-medium text-xl">23</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Integrated Mini Transition Element */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-col items-center justify-center p-0 m-0 mt-2 md:mt-4"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="m-0 p-0 mb-3"
        >
          <img 
            src="public/gif/cat.gif" 
            alt="Creative Sparkle"
            className="w-16 h-16 object-contain opacity-80 filter brightness-110 drop-shadow-[0_0_12px_rgba(254,176,93,0.4)]"
          />
        </motion.div>

        <div className="glass px-6 py-2 rounded-full border-accent-1/10 min-w-[220px] text-center shadow-lg shadow-accent-1/5">
          <AnimatePresence mode="wait">
            <ThanosSnapText key={PHRASES[phraseIndex]} text={PHRASES[phraseIndex]} />
          </AnimatePresence>
        </div>
        
        {/* Subtle connector dot - tightly coupled */}
        <div className="w-1 h-1 bg-accent-1/20 rounded-full p-0 m-0 animate-bounce mt-2" />
      </motion.div>
    </section>
  );
};

export default Hero;