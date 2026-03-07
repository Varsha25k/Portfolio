import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone, MapPin, Instagram, Linkedin, Github, Twitter } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact-cta" className="bg-forest text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold font-black uppercase tracking-[0.3em] text-sm">— Contact Us</span>
          <h2 className="text-5xl md:text-7xl font-black mt-4 mb-8 leading-tight">
            Let's Talk for <span className="text-gold">Your Next Projects</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest transition-all duration-500">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-black uppercase tracking-widest">Phone</p>
                <p className="text-xl font-bold">+92 333 711 6778</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest transition-all duration-500">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-black uppercase tracking-widest">Email</p>
                <p className="text-xl font-bold">Varshakkeswani25@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest transition-all duration-500">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-black uppercase tracking-widest">Location</p>
                <p className="text-xl font-bold">Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 p-10 md:p-16 rounded-[3rem] border border-white/10 backdrop-blur-sm"
        >
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Your Name *</label>
                <input type="text" placeholder="Ex. John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email *</label>
                <input type="email" placeholder="example@gmail.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Phone *</label>
                <input type="text" placeholder="Enter Phone Number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">I'm Interested In *</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option className="bg-forest">Web Development</option>
                  <option className="bg-forest">Software Development</option>
                  <option className="bg-forest">UI/UX Design</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Your Message *</label>
              <textarea rows={4} placeholder="Enter here..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
            </div>
            <button className="w-full bg-gold text-forest py-5 rounded-full font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white transition-all shadow-2xl">
              Submit Now <ArrowRight size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
