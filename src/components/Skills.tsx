import React from 'react';
import { motion } from 'motion/react';
import { Code2, Layout, Database, Terminal, Settings, Brain, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="text-gold" />,
    skills: [
      { name: 'Java', level: 'Proficient', percentage: 90 },
      { name: 'JavaScript', level: 'Proficient', percentage: 85 },
      { name: 'Python', level: 'Intermediate', percentage: 75 },
      { name: 'PHP', level: 'Intermediate', percentage: 70 },
      { name: 'C', level: 'Intermediate', percentage: 65 },
      { name: 'SQL', level: 'Proficient', percentage: 88 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: <Layout className="text-gold" />,
    skills: [
      { name: 'HTML5', level: 'Proficient', percentage: 95 },
      { name: 'CSS3', level: 'Proficient', percentage: 90 },
      { name: 'Bootstrap', level: 'Proficient', percentage: 85 },
    ],
  },
  {
    title: 'Backend Development',
    icon: <Terminal className="text-gold" />,
    skills: [
      { name: 'Node.js', level: 'Intermediate', percentage: 75 },
      { name: 'Express.js', level: 'Intermediate', percentage: 70 },
      { name: 'Laravel', level: 'Intermediate', percentage: 65 },
    ],
  },
  {
    title: 'Databases',
    icon: <Database className="text-gold" />,
    skills: [
      { name: 'MySQL', level: 'Proficient', percentage: 88 },
      { name: 'PostgreSQL', level: 'Intermediate', percentage: 80 },
      { name: 'NeonDB', level: 'Familiar', percentage: 60 },
    ],
  },
  {
    title: 'Tools',
    icon: <Settings className="text-gold" />,
    skills: [
      { name: 'Figma', level: 'Proficient', percentage: 80 },
      { name: 'Git', level: 'Proficient', percentage: 90 },
      { name: 'GitHub', level: 'Proficient', percentage: 92 },
      { name: 'VS Code', level: 'Proficient', percentage: 95 },
    ],
  },
  {
    title: 'Core Concepts',
    icon: <Brain className="text-gold" />,
    skills: [
      { name: 'OOP', level: 'Proficient', percentage: 85 },
      { name: 'DSA', level: 'Intermediate', percentage: 70 },
      { name: 'REST APIs', level: 'Proficient', percentage: 88 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: <Users className="text-gold" />,
    skills: [
      { name: 'Problem Solving', level: 'Proficient', percentage: 90 },
      { name: 'Team Collaboration', level: 'Proficient', percentage: 95 },
      { name: 'Communication', level: 'Proficient', percentage: 88 },
      { name: 'Time Management', level: 'Proficient', percentage: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-semibold uppercase tracking-widest text-sm"
          >
            My Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-forest mt-4"
          >
            Technical & Professional Service
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-light p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-forest">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-forest">{skill.name}</span>
                      <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (skillIndex * 0.1), ease: "easeOut" }}
                        className="h-full bg-gold rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
