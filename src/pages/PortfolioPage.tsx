import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = ['All', 'Web', 'Software', 'UI/UX'];

const projects = [
  {
    id: 1,
    title: 'Shopping Center System',
    category: 'Software',
    image: 'https://i.ibb.co/LdgY44Yj/image2.png',
    description: 'Developed a shopping center management system using the C programming language, focusing on core logic and data handling for store operations.',
    technologies: 'C, Console-based system design',
  },
  {
    id: 2,
    title: 'Car Rental System',
    category: 'Software',
    image: 'http://i.ibb.co/nMC8sQ0v/Capture2.png',
    description: 'Built an object‑oriented car rental system that models vehicles, customers, and rental processes using OOP principles for cleaner, modular code.',
    technologies: 'OOP concepts, classes/objects, structured software design',
  },
  {
    id: 3,
    title: 'Social Media Post Analyzer & User Insights',
    category: 'Software',
    image: 'https://i.ibb.co/twd8vQCW/image.png',
    description: 'Developed a Web API to analyze social media posts and extract user engagement insights while learning database concepts.',
    technologies: 'Web API, Database Concepts, Programming Logic',
    github: 'https://github.com/Varsha25k/SocialMediaPostAnalyzerAndUserInsights',
  },
  {
    id: 4,
    title: 'Social Media Feed Management System',
    category: 'Software',
    image: 'https://i.ibb.co/WvSgVFKN/Capture4.png',
    description: 'Developed a collaborative system to manage and organize social media feeds, applying object-oriented programming and data structures for efficient post handling and interaction.',
    technologies: 'Java, OOP, Data Structures & Algorithms (Collaborative Project)',
  },
  {
    id: 5,
    title: 'Internship Management System',
    category: 'Web',
    image: 'https://i.ibb.co/xp96CZf/Capture3.png',
    description: 'Built a PHP‑based system to manage internships, applications, and student progress.',
    technologies: 'PHP, MySQL, HTML/CSS',
    github: 'https://github.com/Varsha25k/Internship_Management_System',
  },
  {
    id: 6,
    title: 'Pet Adoption Portal',
    category: 'Web',
    image: 'https://i.ibb.co/C3WLkxPn/image3.png',
    description: 'Developed a Laravel‑based portal to manage pet adoption requests and profiles efficiently.',
    technologies: 'Laravel, PHP, MySQL',
    github: 'https://github.com/Varsha25k/Pet-Adoption-Portal',
  },
  {
    id: 7,
    title: 'My Portfolio (Figma Design Project)',
    category: 'UI/UX',
    image: 'https://i.ibb.co/FbMXtDXM/portfolio.png',
    description: 'Designed and developed my personal portfolio layout using Figma, focusing on responsive UI, modern design principles, and showcasing projects effectively.',
    technologies: 'Figma, UI/UX Design, Responsive Layout',
    github: 'https://github.com/Varsha25k/MyPortfolio',
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <Link to="/" className="inline-flex items-center gap-2 text-gold font-semibold mb-6 hover:gap-3 transition-all">
                <ArrowLeft size={20} /> Back to Home
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold text-forest"
              >
                Project <span className="text-gold italic">Gallery</span>
              </motion.h1>
              <p className="text-gray-500 mt-6 max-w-2xl text-lg">
                Explore my complete collection of work, ranging from complex software systems to intuitive user interfaces and web applications.
              </p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-forest text-white shadow-xl scale-105' 
                    : 'bg-light text-forest hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
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
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-forest/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="flex flex-col items-center w-full"
                    >
                      <h3 className="text-xl font-bold text-white mb-2 px-2">{project.title}</h3>
                      <p className="text-gold text-[10px] font-bold mb-3 uppercase tracking-[0.2em]">{project.category}</p>
                      <p className="text-gray-300 text-[11px] mb-4 leading-relaxed line-clamp-2 px-4">{project.description}</p>
                      <div className="mb-4">
                        <p className="text-white/50 text-[9px] uppercase tracking-widest mb-1">Technologies</p>
                        <p className="text-gold text-[10px] font-medium px-4">{project.technologies}</p>
                      </div>
                      <div className="flex gap-3">
                        <button className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-gold hover:text-forest hover:border-gold transition-all shadow-lg">
                          <Search size={18} />
                        </button>
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center text-forest hover:scale-110 hover:rotate-6 transition-all shadow-lg"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
