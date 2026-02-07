import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col mb-8 md:mb-12">
          <span className="text-accent-1 font-display font-medium tracking-widest text-[10px] mb-3 block uppercase opacity-80">SELECTED WORK</span>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-text-primary uppercase tracking-tighter max-w-[600px]">
            Showcase
          </h3>
          <p className="text-text-secondary font-sans font-light text-sm md:text-base max-w-[520px] mt-4">
            A collection of design projects focused on creating meaningful user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass mb-4 border-white/5 group-hover:border-accent-1/30 transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-[9px] font-medium tracking-widest text-text-primary z-20">
                  {project.id}
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-white/5 backdrop-blur-md rounded-full text-[8px] font-medium text-white uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl font-display font-medium text-white mb-2">{project.title}</h4>
                  <div className="flex items-center space-x-2 text-[10px] font-medium text-accent-1 group-hover:translate-x-1 transition-transform tracking-widest">
                    <span>CASE STUDY</span>
                    <ExternalLink size={12} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;