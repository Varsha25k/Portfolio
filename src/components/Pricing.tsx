import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowUpRight } from 'lucide-react';

const plans = [
  {
    name: 'Hourly',
    price: '80',
    period: 'Hour',
    features: [
      'Lorem ipsum dolor sit amet',
      'Sed ut perspiciatis',
      'At vero eos et accusamus',
      'Vitae dicta sunt explicabo',
      'Veritatis et quasi architecto',
      'Beatae vitae dicta sunt',
      'Explicabo. Nemo enim',
      'Nemo enim ipsam voluptatem',
    ],
  },
  {
    name: 'Monthly',
    price: '9600',
    period: 'Month',
    features: [
      'Lorem ipsum dolor sit amet',
      'Sed ut perspiciatis',
      'At vero eos et accusamus',
      'Vitae dicta sunt explicabo',
      'Veritatis et quasi architecto',
      'Beatae vitae dicta sunt',
      'Explicabo. Nemo enim',
      'Nemo enim ipsam voluptatem',
    ],
    highlight: true,
  },
  {
    name: 'Quarterly',
    price: '28,800',
    period: 'Quarter',
    features: [
      'Lorem ipsum dolor sit amet',
      'Sed ut perspiciatis',
      'At vero eos et accusamus',
      'Vitae dicta sunt explicabo',
      'Veritatis et quasi architecto',
      'Beatae vitae dicta sunt',
      'Explicabo. Nemo enim',
      'Nemo enim ipsam voluptatem',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-semibold uppercase tracking-widest text-sm"
            >
              Pricing Table
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4"
            >
              My <span className="text-gold">Pricing Model</span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-olive text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-mustard hover:text-forest transition-all group"
          >
            Get Started
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-forest group-hover:scale-110 transition-transform">
              <ArrowUpRight size={18} />
            </div>
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-[40px] border transition-all ${
                plan.highlight 
                  ? 'bg-gold text-forest border-gold shadow-2xl scale-105' 
                  : 'bg-olive/20 border-white/10 hover:border-gold/50'
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className={`text-sm ${plan.highlight ? 'text-forest/60' : 'text-white/60'}`}>/ {plan.period}</span>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${plan.highlight ? 'border-forest/20 text-forest' : 'border-white/20 text-gold'}`}>
                  <ArrowUpRight size={24} />
                </div>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-forest text-gold' : 'bg-gold text-forest'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={plan.highlight ? 'text-forest/80 font-medium' : 'text-white/80'}>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
