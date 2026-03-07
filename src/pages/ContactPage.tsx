import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const featuredProjects = [
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
    id: 5,
    title: 'Internship Management System',
    category: 'Web',
    image: 'https://i.ibb.co/xp96CZf/Capture3.png',
    description: 'Built a PHP‑based system to manage internships, applications, and student progress.',
    technologies: 'PHP, MySQL, HTML/CSS',
    github: 'https://github.com/Varsha25k/Internship_Management_System',
  },
];

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <Link to="/" className="inline-flex items-center gap-2 text-gold font-semibold mb-6 hover:gap-3 transition-all">
              <ArrowLeft size={20} /> Back to Home
            </Link>
          </div>

          <Contact />

          {/* "Where all my work shown there" - Featured Projects Section */}
          <div className="mt-32">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-forest">Featured <span className="text-gold">Projects</span></h2>
                <p className="text-gray-500 mt-2">A glimpse of my recent work</p>
              </div>
              <Link to="/portfolio" className="text-gold font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View All Projects <ExternalLink size={18} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {featuredProjects.map((project) => (
                <div key={project.id} className="group relative bg-light rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100">
                  <div className="aspect-[16/9] overflow-hidden">
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
                    <p className="text-gray-300 text-[11px] mb-4 leading-relaxed line-clamp-2 px-4">{project.description}</p>
                    <div className="flex gap-3">
                      <Link to="/portfolio" className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-gold hover:text-forest hover:border-gold transition-all shadow-lg">
                        <Search size={18} />
                      </Link>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
