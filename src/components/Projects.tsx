import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Search } from 'lucide-react';

const categories = ['All', 'Web', 'Tech', 'UI/UX'];

const projects = [
  {
    id: 1,
    title: 'Social Media Post Analyzer',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    description: 'A tool for analyzing social media posts and providing user insights.',
  },
  {
    id: 2,
    title: 'Internship Management System',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=800&auto=format&fit=crop',
    description: 'A comprehensive platform for managing student internships.',
  },
  {
    id: 3,
    title: 'Pet Adoption Portal',
    category: 'Web',
    image: 'https://i.ibb.co/C3WLkxPn/image3.png',
    description: 'A user-friendly portal for adopting pets and managing listings.',
  },
  {
    id: 4,
    title: 'Car Rental Management',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
    description: 'An efficient system for managing car rentals and bookings.',
  },
  {
    id: 5,
    title: 'Fraud Detection System',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    description: 'A console-based fraud detection system built in Java using core data structures including Linked List, Max Heap, HashMap, Graph, and Sliding Window Queue to detect suspicious financial transactions in real time.',
  },
  {
    id: 6,
    title: 'My Portfolio (Figma Design Project)',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop',
    description: 'A modern and interactive portfolio design focusing on user experience.',
  },
  {
    id: 7,
    title: 'CPU Scheduling Visualizer',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1581091215369-1e9f4a872b0f?q=80&w=800&auto=format&fit=crop',
    description: 'An interactive tool to visualize various CPU scheduling algorithms like FCFS, SJF, Priority, and Round Robin in Operating Systems.',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-semibold uppercase tracking-widest text-sm"
          >
            My Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-forest mt-4"
          >
            My Latest <span className="text-gold">Work</span>
          </motion.h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat 
                  ? 'bg-forest text-white shadow-lg' 
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-light rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-forest/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gold text-sm font-medium mb-4 uppercase tracking-wider">{project.category}</p>
                  <p className="text-gray-300 text-sm mb-6">{project.description}</p>
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-forest hover:scale-110 transition-transform">
                      <Search size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-forest hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
