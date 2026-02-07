import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-soft-dark/30 relative">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="mb-8 md:mb-12">
          <span className="text-accent-2 font-display font-medium tracking-widest text-[10px] mb-3 block uppercase opacity-80">HISTORY</span>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-text-primary uppercase tracking-tighter">
            Experience
          </h3>
        </div>

        <div className="space-y-4">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start md:items-center glass p-6 rounded-2xl hover:border-accent-2/30 transition-all group gap-8"
            >
              <div className="w-full md:w-1/4">
                <span className="text-accent-2 font-display font-medium text-xl block mb-1">
                  {exp.period}
                </span>
                <span className="text-text-secondary font-sans font-medium text-[10px] uppercase tracking-widest opacity-60">
                  {exp.company}
                </span>
              </div>
              
              <div className="w-full md:w-2/4">
                <h4 className="text-xl font-display font-medium text-text-primary mb-3">
                  {exp.role}
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-text-secondary font-sans font-light text-sm">
                      <div className="w-1 h-1 rounded-full bg-accent-2 mt-2 flex-shrink-0" />
                      <span className="line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-1/4 flex md:justify-end flex-wrap gap-2">
                {exp.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-text-primary/5 text-text-primary rounded-lg text-[9px] font-medium border border-white/5 uppercase tracking-tighter">
                    {t}
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

export default Experience;