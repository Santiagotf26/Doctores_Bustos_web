import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import ServicesTicker from './components/sections/ServicesTicker';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServicesTicker />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
