import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import TechStack from '../components/TechStack';
import Certifications from '../components/Certifications';
import Experience from '../components/Experience';

export default function ExpertisePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="bg-forest text-white py-20 mb-16">
          <div className="max-w-7xl mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-gold font-semibold mb-6 hover:gap-3 transition-all">
              <ArrowLeft size={20} /> Back to Home
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              My <span className="text-gold italic">Expertise</span>
            </motion.h1>
            <p className="text-gray-300 mt-4 max-w-2xl text-lg">
              A comprehensive look at my technical skills, professional background, and academic journey.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-0">
            <Skills />
            <TechStack />
            <Certifications />
            <Experience />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
