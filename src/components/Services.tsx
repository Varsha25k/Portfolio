import React from 'react';
import { motion } from 'motion/react';
import { Globe, Terminal, Database, Layout, Cpu, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Globe className="text-gold" size={32} />,
    title: 'Web Development',
    description: 'Build responsive and interactive websites using HTML, CSS, JS, Bootstrap, and React with a focus on performance and accessibility.',
  },
  {
    icon: <Terminal className="text-gold" size={32} />,
    title: 'Software Development',
    description: 'Desktop applications and robust backend systems developed using Java, PHP, and Node.js to solve complex business problems.',
  },
  {
    icon: <Database className="text-gold" size={32} />,
    title: 'Database Design',
    description: 'Relational database design, complex queries, and optimization using MySQL and PostgreSQL for data-driven applications.',
  },
  {
    icon: <Layout className="text-gold" size={32} />,
    title: 'UI/UX Design',
    description: 'Figma prototypes, personal design systems, and user-centered interfaces that provide an intuitive and engaging user experience.',
  },
  {
    icon: <Cpu className="text-gold" size={32} />,
    title: 'REST APIs & Integrations',
    description: 'Backend logic, secure API design, and seamless data flow integration between various services and frontend applications.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-semibold uppercase tracking-widest text-sm"
          >
            What I Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-4"
          >
            My Services
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-white/5 rounded-3xl border border-white/10 shadow-sm hover:shadow-xl transition-all group backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-gold transition-colors">
                <div className="group-hover:text-forest text-gold transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link to="/expertise" className="inline-flex items-center gap-2 text-gold font-semibold hover:text-white transition-colors">
                Learn more <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
