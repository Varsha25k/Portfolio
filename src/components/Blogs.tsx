import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'Minimalist UI Design: Benefits and Best Practices',
    category: 'App UI/UX Design',
    date: '21 May 2024',
    image: 'https://picsum.photos/seed/blog1/800/600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
  },
  {
    id: 2,
    title: 'Improving User Experience: Best Practices for Web Desig...',
    category: 'Website UI/UX Design',
    date: '20 May 2024',
    image: 'https://picsum.photos/seed/blog2/800/600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
  },
  {
    id: 3,
    title: 'Understanding the Color Wheel: Basics Every Designe...',
    category: 'Color Theory',
    date: '19 May 2024',
    image: 'https://picsum.photos/seed/blog3/800/600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-semibold uppercase tracking-widest text-sm"
            >
              News & Blogs
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-forest mt-4"
            >
              Our Latest <br />
              <span className="text-gold">News & Blogs</span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-forest text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-olive transition-all group shadow-xl"
          >
            View All Blogs
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-forest group-hover:scale-110 transition-transform">
              <ArrowUpRight size={18} />
            </div>
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-light rounded-[40px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-gold text-forest text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  {blog.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-gold text-sm font-semibold mb-4">
                  <Calendar size={16} />
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-forest mb-4 group-hover:text-gold transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {blog.description}
                </p>
                <button className="text-forest font-bold text-sm hover:text-gold transition-colors flex items-center gap-2">
                  Read More <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
