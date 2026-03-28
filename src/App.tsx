/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VovonStory from './components/VovonStory';
import Stats from './components/Stats';
import Process from './components/Process';
import ImageDivider from './components/ImageDivider';
import Services from './components/Services';
import AIData from './components/AIData';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { Language } from './translations';

export default function App() {
  const [language, setLanguage] = useState<Language>('nl');

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <VovonStory language={language} />
      <Stats language={language} />
      <Process language={language} />
      <ImageDivider />
      <Services language={language} />
      <AIData language={language} />
      <References language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <CookieBanner />
    </div>
  );
}
