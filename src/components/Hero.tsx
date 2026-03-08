import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImg from "../profile-image/varsha.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-[-1] opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#1B4332 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-gold/15 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-forest/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-gray-100">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-forest">Hello There!</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-forest leading-tight mb-2">
            I'm <span className="text-gold">Varsha Bai,</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-forest leading-snug mb-6 whitespace-nowrap">
            Full Stack Web Developer | UI/UX Designer
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            Computer Science student at SZABIST Karachi with experience in web development, database systems, and UI/UX design.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/portfolio" className="bg-forest text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-olive transition-all shadow-xl hover:shadow-forest/20 group">
              View Portfolio
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-forest group-hover:scale-110 transition-transform">
                <Play size={14} fill="currentColor" />
              </div>
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-full font-semibold border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all">
              Get in Touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl bg-white">
              <img
                src={profileImg}
                alt="Varsha Bai"
                className="w-full h-full object-cover object-center scale-105 brightness-[1.02] contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold">
                  <ArrowRight size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">CGPA</p>
                  <p className="text-sm font-bold text-forest">3.63 / 4.0</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center text-forest">
                  <span className="font-bold">7+</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Projects</p>
                  <p className="text-sm font-bold text-forest">Completed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
