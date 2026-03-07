import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Award } from 'lucide-react';

const certifications = [
  {
    name: 'Google AI Essentials',
    issuer: 'Google via Coursera',
    date: 'October 2025',
    icon: '🤖',
    accent: '#F5A623',
    buttonText: 'Certified ✓',
    link: '#'
  },
  {
    name: 'Google Prompting Essentials',
    issuer: 'Google via Coursera',
    date: 'October 2025',
    icon: '✨',
    accent: '#F5A623',
    buttonText: 'Certified ✓',
    link: '#'
  },
  {
    name: 'UI/UX Design with Figma',
    issuer: 'Online Certification',
    date: 'March 2025',
    icon: '🎨',
    accent: '#1F3D2B',
    buttonText: 'Certified ✓',
    link: '#'
  },
  {
    name: 'ZabeFest Competitions',
    issuer: 'SZABIST University',
    date: 'May 2024-205',
    icon: '🏆',
    accent: '#F5A623',
    buttonText: '3 Competitions',
    description: 'Participated in Speed Coding, Debugging, and Database Design competitions — demonstrating strong problem-solving under pressure.',
    link: '#'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-semibold uppercase tracking-widest text-sm"
          >
            CERTIFIED & RECOGNIZED
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-forest mt-4"
          >
            Certifications & Achievements
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border-l-4 hover:shadow-xl transition-all flex flex-col h-full"
              style={{ borderLeftColor: cert.accent }}
            >
              <div className="text-4xl mb-6">{cert.icon}</div>
              <h3 className="text-xl font-bold text-forest mb-2">{cert.name}</h3>
              <p className="text-gray-500 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gold text-xs font-semibold mb-4">{cert.date}</p>
              
              {cert.description && (
                <p className="text-gray-400 text-xs leading-relaxed mb-6">{cert.description}</p>
              )}
              
              <div className="mt-auto">
                <button className="flex items-center gap-2 text-forest font-bold text-sm hover:text-gold transition-colors group">
                  {cert.buttonText} 
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
