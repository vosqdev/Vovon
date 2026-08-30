/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VovonStory from './components/VovonStory';
import Stats from './components/Stats';
import Process from './components/Process';
import ImageDivider from './components/ImageDivider';
import Services from './components/Services';
import AIData from './components/AIData';
import News from './components/News';
import References from './components/References';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import CVPage from './components/CVPage';
import { Language } from './translations';

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function HomePage({ language }: { language: Language }) {
  return (
    <>
      <Hero language={language} />
      <About language={language} />
      <VovonStory language={language} />
      <Stats language={language} />
      <Process language={language} />
      <ImageDivider />
      <Services language={language} />
      <AIData language={language} />
      <News language={language} />
      <References language={language} />
    </>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>('nl');

  return (
    <BrowserRouter>
      <ScrollHandler />
      <div className="min-h-screen bg-white">
        <Navbar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/qa" element={<Navigate to="/faq" replace />} />
          <Route path="/faq" element={<FAQ language={language} />} />
          <Route path="/netbewust" element={<Navigate to="/" replace />} />
          <Route path="/cv" element={<CVPage language={language} />} />
        </Routes>
        <Contact language={language} />
        <Footer language={language} />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}
