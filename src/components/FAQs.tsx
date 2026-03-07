import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What industries have you worked in as a product designer?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    question: 'Can I download your resume/CV for information?',
    answer: 'Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and design achievements.',
  },
  {
    id: 3,
    question: 'Are you available for freelance design work?',
    answer: 'Yes, I am available for freelance projects. Feel free to reach out to discuss your project requirements and how I can help you achieve your design goals.',
  },
  {
    id: 4,
    question: 'What tools do you use for your design work?',
    answer: 'I primarily use Figma for UI/UX design, along with Adobe Creative Suite (Photoshop, Illustrator) for visual design. I also use various prototyping and collaboration tools.',
  },
  {
    id: 5,
    question: 'How do I navigate through your portfolio projects?',
    answer: 'You can browse my projects by category or view them all in the portfolio section. Each project includes a detailed case study explaining the design process and final outcomes.',
  },
];

export default function FAQs() {
  const [openId, setOpenId] = useState<number | null>(2);

  return (
    <section id="faqs" className="py-24 bg-forest text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-semibold uppercase tracking-widest text-sm"
          >
            FAQs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4"
          >
            Questions? <span className="text-gold">Look here.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-3xl border transition-all overflow-hidden ${
                openId === faq.id 
                  ? 'bg-gold text-forest border-gold' 
                  : 'bg-olive/20 border-white/10 hover:border-gold/30'
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left gap-4"
              >
                <span className="text-lg md:text-xl font-bold">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                  openId === faq.id ? 'border-forest/20 text-forest' : 'border-white/20 text-gold'
                }`}>
                  {openId === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-sm md:text-base leading-relaxed opacity-80">
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
