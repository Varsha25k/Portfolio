import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">Contact Me</span>
            <h2 className="text-4xl md:text-5xl font-bold text-forest mt-4 mb-8">
              Let's Work <span className="text-gold">Together</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="mb-12">
              <p className="text-forest font-bold mb-4">I am particularly interested in:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  Full Stack Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  Collaboration & Team Projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  UI/UX Opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  Internship / Entry-Level Positions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  Open Source Contribution
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gold shadow-sm border border-gray-100">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Email Me</p>
                  <p className="text-xl font-bold text-forest">Varshakkeswani25@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gold shadow-sm border border-gray-100">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Call Me</p>
                  <p className="text-xl font-bold text-forest">+92 333 711 6778</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gold shadow-sm border border-gray-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Location</p>
                  <p className="text-xl font-bold text-forest">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <div>
                <p className="text-forest font-bold mb-4">Follow Me</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/varsha-keswani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-forest hover:bg-gold hover:text-forest transition-all shadow-sm border border-gray-100"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/Varsha25k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-forest hover:bg-gold hover:text-forest transition-all shadow-sm border border-gray-100"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="w-full sm:w-auto">
                <p className="text-forest font-bold mb-4">Resume</p>
                <a 
                  href="/Portfolio/Varsha_Bai_Resume.pdf" 
                  download="Varsha_Bai_Resume.pdf"
                  className="bg-gold text-forest px-8 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-mustard transition-all shadow-lg hover:shadow-gold/20"
                >
                  Download Resume <Download size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-100"
          >
            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');
                
                const mailtoUrl = `mailto:Varshakkeswani25@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                window.location.href = mailtoUrl;
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-forest ml-1">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-light rounded-2xl border border-transparent focus:border-gold outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-forest ml-1">Your Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-light rounded-2xl border border-transparent focus:border-gold outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-forest ml-1">Subject</label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-light rounded-2xl border border-transparent focus:border-gold outline-none transition-all placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-forest ml-1">Your Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-6 py-4 bg-light rounded-2xl border border-transparent focus:border-gold outline-none transition-all placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-forest text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-olive transition-all shadow-xl hover:shadow-forest/20"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
