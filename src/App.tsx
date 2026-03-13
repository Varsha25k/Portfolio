import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ExpertisePage from './pages/ExpertisePage';
import LatestProjects from './components/LatestProjects';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <LatestProjects />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router basename="/Portfolio/">
      <div className="min-h-screen bg-white selection:bg-gold/30 selection:text-forest">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
        </Routes>
      </div>
    </Router>
  );
}
