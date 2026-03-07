import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Leslie Alexander',
    role: 'Founder, EV Charger Station',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=leslie',
  },
  {
    id: 2,
    name: 'Albert Flores',
    role: 'CTO, Software Agency',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=albert',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-semibold uppercase tracking-widest text-sm"
          >
            Clients Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-forest mt-4"
          >
            The Impact of My Work: <br />
            <span className="text-gold">Client Testimonials</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-light rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
                <span className="ml-2 font-bold text-forest">{testimonial.rating}.0</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-forest">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button className="w-12 h-12 rounded-full border border-forest/10 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-all">
            <ArrowLeft size={20} />
          </button>
          <button className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-forest hover:scale-110 transition-transform shadow-lg">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
