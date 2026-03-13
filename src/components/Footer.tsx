import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-forest text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-forest">V</div>
              <span>Varsha<span className="text-gold">.</span></span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8">
              A Computer Science student and Software Developer dedicated to building scalable systems and modern web applications.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/varsha-keswani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-gold hover:text-forest transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Varsha25k"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-gold hover:text-forest transition-all"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-gold transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-gold transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <Link to="/expertise" className="text-gray-400 hover:text-gold transition-colors">
                  Expertise
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                'Web Development',
                'Backend Development',
                'Database Design',
                'UI/UX Design',
                'API Development',
                'Figma Prototyping'
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Karachi, Pakistan</li>
              <li>Varshakkeswani25@gmail.com</li>
              <li>+92 333 711 6778</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Varsha Bai. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
