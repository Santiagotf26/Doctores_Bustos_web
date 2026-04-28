import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import FeatureTreatment from './components/sections/FeatureTreatment';
import Doctors from './components/sections/Doctors';
import Location from './components/sections/Location';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FeatureTreatment />
        <Doctors />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
