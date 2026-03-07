import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What industries have you worked in as a product designer?",
    answer: "I have worked across various sectors including Fintech, E-commerce, Healthcare, and SaaS startups, bringing a user-centered approach to every project."
  },
  {
    question: "Can I download your resume/CV for information?",
    answer: "Yes! You can download my resume directly from the About section or the footer of this website. It provides a comprehensive overview of my education and work experience."
  },
  {
    question: "Are you available for freelance design work?",
    answer: "Absolutely! I'm always open to discussing new projects and collaborations. Feel free to reach out via the contact form."
  },
  {
    question: "What tools do you use for your design work?",
    answer: "My primary tools include Figma for UI/UX design, Adobe Creative Suite for branding, and various prototyping tools like ProtoPie and Framer."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-forest relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold uppercase tracking-[0.3em] text-xs"
          >
            FAQs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mt-4"
          >
            Questions? <span className="text-gold italic">Look here.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`w-full p-8 flex items-center justify-between text-left transition-all ${activeIndex === index ? 'bg-gold text-forest' : 'bg-white/5 text-white hover:bg-white/10'}`}
              >
                <span className="text-lg font-bold">{faq.question}</span>
                {activeIndex === index ? <Minus size={24} /> : <Plus size={24} />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-8 bg-white/5 text-gray-300 font-light leading-relaxed border-t border-white/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
