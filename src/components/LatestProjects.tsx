import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 6,
    title: 'Pet Adoption Portal',
    category: 'Web',
    image: 'https://i.ibb.co/C3WLkxPn/image3.png',
    description: 'Developed a Laravel‑based portal to manage pet adoption requests and profiles efficiently.',
    technologies: 'Laravel, PHP, MySQL',
  },
  {
    id: 7,
    title: 'My Portfolio (Figma Design Project)',
    category: 'UI/UX',
    image: 'https://i.ibb.co/FbMXtDXM/portfolio.png',
    description: 'Designed and developed my personal portfolio layout using Figma, focusing on responsive UI, modern design principles.',
    technologies: 'Figma, UI/UX Design',
  },
  {
    id: 3,
    title: 'Social Media Post Analyzer',
    category: 'Software',
    image: 'https://i.ibb.co/xp96CZf/Capture3.png',
    description: 'Developed a Web API to analyze social media posts and extract user engagement insights.',
    technologies: 'Web API, Database Concepts',
  },
];

export default function LatestProjects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-semibold uppercase tracking-widest text-sm"
            >
              My Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-forest mt-4"
            >
              My Latest <span className="text-gold italic">Projects</span>
            </motion.h2>
          </div>
          <Link to="/portfolio" className="mt-6 md:mt-0 bg-forest text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-olive transition-all group">
            View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-light rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute inset-0 bg-forest/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gold text-[10px] font-bold mb-3 uppercase tracking-[0.2em]">{project.category}</p>
                <p className="text-gray-300 text-[11px] mb-6 leading-relaxed line-clamp-2 px-4">{project.description}</p>
                <div className="flex gap-3">
                  <Link to="/portfolio" className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-gold hover:text-forest hover:border-gold transition-all shadow-lg">
                    <Search size={18} />
                  </Link>
                  <Link to="/portfolio" className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center text-forest hover:scale-110 hover:rotate-6 transition-all shadow-lg">
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
