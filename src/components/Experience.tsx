import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const education = [
  {
    year: '2023 - Expected 2027',
    title: 'SZABIST University Karachi',
    degree: 'Bachelor of Science in Computer Science',
    description: 'Currently maintaining a CGPA of 3.63. Focused on core software engineering and database systems.',
  },
];

const experience = [
  {
    year: '2024 - 2025',
    title: 'Student Society – SZABIST Karachi',
    role: 'Director of Marketing',
    description: 'Leading marketing strategies and managing promotional activities for university events.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-semibold uppercase tracking-widest text-sm"
          >
            Education & Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-forest mt-4"
          >
            My Academic and Professional Journey
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2"></div>

          {/* Education Column */}
          <div id="education" className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-forest shadow-lg">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-forest">Education</h3>
            </div>
            
            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-light p-8 rounded-3xl shadow-sm border border-gray-100 relative"
              >
                <div className="flex items-center gap-2 text-gold font-semibold mb-2">
                  <Calendar size={16} />
                  <span>{item.year}</span>
                </div>
                <h4 className="text-xl font-bold text-forest mb-1">{item.title}</h4>
                <p className="text-gold font-medium mb-4">{item.degree}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8 lg:justify-end">
              <h3 className="text-2xl font-bold text-forest order-2 lg:order-1">Work Experience</h3>
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-forest shadow-lg order-1 lg:order-2">
                <Briefcase size={24} />
              </div>
            </div>

            {experience.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-light p-8 rounded-3xl shadow-sm border border-gray-100 relative"
              >
                <div className="flex items-center gap-2 text-gold font-semibold mb-2">
                  <Calendar size={16} />
                  <span>{item.year}</span>
                </div>
                <h4 className="text-xl font-bold text-forest mb-1">{item.title}</h4>
                <p className="text-gold font-medium mb-4">{item.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
