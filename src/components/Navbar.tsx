import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translations } from '../translations';
import { Logo } from './Logo';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.services, href: '#services' },
    { name: t.aiData, href: '#ai-data' },
    { name: t.news, href: '#news' },
    { name: t.references, href: '#references' },
    { name: t.contact, href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'nl' : 'en');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <Logo 
                className={`h-10 w-auto transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`} 
                variant={scrolled ? 'dark' : 'light'} 
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-vovon-500 ${
                  scrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-vovon-500 ${
                scrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              <Globe size={18} />
              <span>{language.toUpperCase()}</span>
            </button>

            <a
              href="#contact"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                scrolled
                  ? 'bg-vovon-600 text-white hover:bg-vovon-700'
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              {t.cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 text-sm font-medium ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              <Globe size={18} />
              <span>{language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-vovon-600 hover:bg-slate-50 rounded-md border-b border-slate-100 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
