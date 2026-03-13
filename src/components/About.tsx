import React from 'react';
import { motion } from 'motion/react';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImg from "../profile-image/varsha.png";

const stats = [
  { label: 'Projects Completed', value: '7+' },
  { label: 'Certifications Earned', value: '5+' },
  { label: 'Languages Known', value: '8+' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-dark overflow-hidden relative">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-forest/5 shadow-2xl aspect-square max-w-md mx-auto lg:mx-0">
            <img
              src={profileImg}
              alt="About Varsha"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 lg:right-10 bg-gold text-forest p-6 rounded-2xl shadow-xl z-20 hidden md:block">
            <p className="text-4xl font-bold">3.63</p>
            <p className="text-sm font-semibold uppercase tracking-wider">Current CGPA</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold font-semibold uppercase tracking-widest text-sm">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mt-4 mb-8">
            Who is <span className="text-gold">Varsha Bai?</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Varsha Bai is a Computer Science student passionate about Full Stack Web Development and UI/UX Design. She enjoys building modern web applications, designing intuitive user experiences, and solving technical challenges.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            With experience in web development and database systems, she continuously explores new technologies and industry trends to improve her technical and creative skills. Her goal is to contribute to innovative projects that make a meaningful real-world impact while growing as a developer.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-gold mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="/Portfolio/Varsha_Bai_Resume.pdf" 
              download
              className="bg-forest text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-olive transition-all shadow-xl hover:shadow-forest/20"
            >
              Download Resume <Download size={20} />
            </a>
            <Link 
              to="/expertise" 
              className="px-8 py-4 rounded-full font-bold flex items-center gap-3 border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all"
            >
              Learn More <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
