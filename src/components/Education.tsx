import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    year: '2023 - Expected 2027',
    title: 'SZABIST University Karachi',
    degree: 'Bachelor of Science in Computer Science',
    description: 'Currently maintaining a CGPA of 3.63. Focused on core software engineering and database systems.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-semibold uppercase tracking-widest text-sm"
          >
            Academic Background
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-forest mt-4"
          >
            My <span className="text-gold">Education</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group hover:shadow-xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-forest">{item.title}</h4>
                    <p className="text-olive font-medium">{item.degree}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gold font-semibold bg-gold/5 px-4 py-2 rounded-full text-sm">
                  <Calendar size={16} />
                  <span>{item.year}</span>
                </div>
              </div>
              <p className="text-gray-500 leading-relaxed pl-16">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
