import React from 'react';
import { motion } from 'motion/react';

const technologies = [
  { name: 'Java', icon: 'JV' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'Python', icon: 'PY' },
  { name: 'Node.js', icon: 'ND' },
  { name: 'MySQL', icon: 'SQL' },
  { name: 'PostgreSQL', icon: 'PS' },
  { name: 'HTML', icon: 'H5' },
  { name: 'CSS', icon: 'C3' },
  { name: 'Bootstrap', icon: 'BS' },
  { name: 'Git', icon: 'GT' },
  { name: 'GitHub', icon: 'GH' },
  { name: 'Figma', icon: 'FG' },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 bg-forest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-semibold uppercase tracking-widest text-sm"
          >
            Tech Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-4"
          >
            Technologies I Use
          </motion.h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 20px 25px -5px rgba(245, 166, 35, 0.1), 0 10px 10px -5px rgba(245, 166, 35, 0.04)'
              }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center mb-4 transition-colors group-hover:bg-gold/20 border border-white/10 group-hover:border-gold/30">
                <span className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                  {tech.icon}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
