import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Features from './components/Features';
import VideoIntro from './components/VideoIntro';
import HappyClients from './components/HappyClients';
import DigitalTransformation from './components/DigitalTransformation';
import Testimonials from './components/Testimonials';
import MobileApp from './components/MobileApp';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <VideoIntro />
        <HappyClients />
        <DigitalTransformation />
        <Testimonials />
        <MobileApp />
        <Stats />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;