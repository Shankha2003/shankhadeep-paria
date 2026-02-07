import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-1 font-display font-medium tracking-widest text-[10px] mb-4 block uppercase opacity-80">
            GET IN TOUCH
          </span>
          
          <p className="text-text-secondary font-sans font-light text-base md:text-lg leading-relaxed mb-12 max-w-[520px] mx-auto">
            Got a project, idea, or opportunity? My inbox is always open.
          </p>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Mail, href: 'mailto:pariashankhadeep@gmail.com', label: 'Email' },
              { icon: Github, href: 'https://github.com/Shankha2003', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/shankhadeepparia/', label: 'LinkedIn' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                whileHover={{ y: -3, scale: 1.05 }}
                className="w-12 h-12 glass flex items-center justify-center rounded-xl text-text-secondary hover:text-accent-1 hover:border-accent-1/50 transition-all"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;