import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Layout, Feather, Smartphone } from 'lucide-react';

const Icons: { [key: string]: any } = {
  Layout,
  Feather,
  Smartphone
};

const Services: React.FC = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="mb-8 md:mb-12">
          <span className="text-accent-2 font-display font-medium tracking-widest text-[10px] mb-3 block uppercase opacity-80">WHAT I OFFER</span>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-text-primary uppercase tracking-tighter">
            Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const IconComp = Icons[service.icon];
            return (
              <motion.a
                key={service.id}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden glass border-white/5 hover:border-accent-2/30 transition-all duration-500 p-8 block"
              >
                <div className="flex flex-col items-start h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent-2/10 backdrop-blur-xl flex items-center justify-center text-accent-2 mb-6 border border-accent-2/20 group-hover:scale-110 transition-transform duration-300">
                    <IconComp size={26} />
                  </div>
                  
                  <h4 className="text-2xl font-display font-medium text-text-primary mb-3 tracking-tighter uppercase">
                    {service.title}
                  </h4>
                  <p className="text-text-secondary font-sans font-light text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="w-10 h-0.5 bg-accent-2/20 rounded-full group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;