import React from 'react';
import './App.css';
import Hero from './components/home/Hero';
import CommonLayout from './components/layouts/CommonLayout';
import Posts from './components/home/Posts';
import CTA from './components/layouts/CTA';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div className="App">
      <div className="flex h-full flex-col justify-center gap-4 p-3 md:px-16">
        <CommonLayout />
        <Hero />
        <Posts />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
