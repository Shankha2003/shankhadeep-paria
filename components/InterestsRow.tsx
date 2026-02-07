import React from 'react';
import { motion } from 'framer-motion';
import { INTERESTS } from '../constants';

const InterestsRow: React.FC = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-soft-dark/10 relative">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="mb-8 md:mb-12">
          <span className="text-accent-1 font-display font-medium tracking-widest text-[10px] mb-3 block uppercase opacity-80">PERSONAL CURATION</span>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-text-primary uppercase tracking-tighter">
            Vibes
          </h3>
        </div>

        <div className="space-y-4">
          {INTERESTS.map((interest, index) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col lg:flex-row items-start lg:items-center glass p-6 rounded-2xl hover:border-accent-1/30 transition-all duration-500 group gap-8"
            >
              {/* Column 1: Category Info */}
              <div className="w-full lg:w-1/4">
                <span className="text-accent-1 font-display font-medium text-2xl block mb-1 uppercase tracking-tighter">
                  {interest.title}
                </span>
                <span className="text-text-secondary font-sans font-medium text-[10px] uppercase tracking-[0.3em] opacity-60">
                  ARCHIVE // 0{index + 1}
                </span>
              </div>
              
              {/* Column 2: Image Previews with Continuous Scroll */}
              <div className="w-full lg:w-2/4 relative overflow-hidden">
                <motion.div 
                  className="flex gap-3"
                  animate={{
                    x: [0, -((interest.items.length * 108) / 2)]
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 15,
                      ease: "linear"
                    }
                  }}
                >
                  {/* Duplicate items for seamless loop */}
                  {[...interest.items, ...interest.items].map((item, i) => (
                    <div 
                      key={i} 
                      className="relative w-20 h-28 md:w-24 md:h-32 rounded-lg overflow-hidden flex-shrink-0 border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover brightness-[0.35] group-hover:brightness-[0.55] transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Column 3: Picks/Tags */}
              <div className="w-full lg:w-1/4 flex lg:justify-end flex-wrap gap-2">
                {interest.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-accent-1/5 text-accent-1 rounded-lg text-[9px] font-bold border border-accent-1/10 uppercase tracking-tighter transition-colors group-hover:bg-accent-1/10"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsRow;