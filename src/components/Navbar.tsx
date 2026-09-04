import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Language, translations } from '../translations';
import { Logo } from './Logo';
import { AboutMegaMenu } from './AboutMegaMenu';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const t = translations[language].nav;
  const location = useLocation();
  const isNavPage = 
    location.pathname === '/faq' || 
    location.pathname === '/cv';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setIsAboutMenuOpen(false);
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const handleAboutMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsAboutMenuOpen(true);
  };

  const handleAboutMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIsAboutMenuOpen(false);
    }, 220);
  };

  const navLinks = [
    { name: t.home, href: '/#home' },
    { name: t.about, href: '/#about', hasMegaMenu: true },
    { name: t.services, href: '/#services' },
    { name: t.references, href: '/#references' },
    { name: t.news, href: '/#news' },
    { name: t.faq, href: '/faq' },
    { name: t.contact, href: '/#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'nl' : 'en');
  };

  const isNavSolid = scrolled || isNavPage || isAboutMenuOpen;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isNavSolid ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsAboutMenuOpen(false)}>
              <Logo 
                className={`h-10 w-auto transition-colors ${isNavSolid ? 'text-slate-900' : 'text-white'}`} 
                variant={isNavSolid ? 'dark' : 'light'} 
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.filter(link => link.href !== '/#contact').map((link) => {
              const isAboutItem = link.hasMegaMenu;

              if (isAboutItem) {
                return (
                  <div
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={handleAboutMouseEnter}
                    onMouseLeave={handleAboutMouseLeave}
                  >
                    <Link
                      to={link.href}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                        isAboutMenuOpen
                          ? 'text-vovon-600 font-semibold'
                          : isNavSolid
                          ? 'text-slate-700 hover:text-vovon-600'
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      {/* Active indicator dot inspired by CIRCUL8 */}
                      <span 
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          isAboutMenuOpen 
                            ? 'bg-vovon-500 scale-100 opacity-100' 
                            : 'bg-transparent scale-0 opacity-0'
                        }`} 
                      />
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onMouseEnter={() => {
                    if (isAboutMenuOpen) setIsAboutMenuOpen(false);
                  }}
                  className={`text-sm font-medium transition-colors hover:text-vovon-500 ${
                    isNavSolid ? 'text-slate-700' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <Link
              to="/#contact"
              onMouseEnter={() => {
                if (isAboutMenuOpen) setIsAboutMenuOpen(false);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                isNavSolid
                  ? 'bg-vovon-600 text-white hover:bg-vovon-700'
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              {t.cta}
            </Link>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-vovon-500 ${
                isNavSolid ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              <Globe size={18} />
              <span>{language === 'nl' ? 'EN' : 'NL'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 text-sm font-medium ${
                isNavSolid ? 'text-slate-900' : 'text-white'
              }`}
            >
              <Globe size={18} />
              <span>{language === 'nl' ? 'EN' : 'NL'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                isNavSolid ? 'text-slate-900' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu for Over Ons */}
      <AnimatePresence>
        {isAboutMenuOpen && (
          <AboutMegaMenu
            language={language}
            isOpen={isAboutMenuOpen}
            onClose={() => setIsAboutMenuOpen(false)}
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl overflow-hidden border-t border-slate-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                if (link.hasMegaMenu) {
                  return (
                    <div key={link.name} className="border-b border-slate-100">
                      <div className="flex items-center justify-between">
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex-1 px-3 py-4 text-base font-medium text-slate-700 hover:text-vovon-600"
                        >
                          {link.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileAboutExpanded(!mobileAboutExpanded)}
                          className="p-3 text-slate-500 hover:text-vovon-600"
                          aria-label="Toggle Over ons submenu"
                        >
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileAboutExpanded ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                      </div>

                      {/* Mobile Accordion Submenu */}
                      {mobileAboutExpanded && (
                        <div className="pl-6 pr-3 pb-3 space-y-2 bg-slate-50/70 rounded-lg mb-2">
                          <Link
                            to="/#about"
                            onClick={() => setIsOpen(false)}
                            className="block py-1.5 text-sm text-slate-600 hover:text-vovon-600 font-medium"
                          >
                            {language === 'nl' ? '• Wie we zijn & Visie' : '• Who We Are & Vision'}
                          </Link>
                          <Link
                            to="/#story"
                            onClick={() => setIsOpen(false)}
                            className="block py-1.5 text-sm text-slate-600 hover:text-vovon-600 font-medium"
                          >
                            {language === 'nl' ? '• Het VOVON Verhaal' : '• The VOVON Story'}
                          </Link>
                          <Link
                            to="/#references"
                            onClick={() => setIsOpen(false)}
                            className="block py-1.5 text-sm text-slate-600 hover:text-vovon-600 font-medium"
                          >
                            {language === 'nl' ? '• Onze Projecten' : '• Our Projects'}
                          </Link>
                          <Link
                            to="/#process"
                            onClick={() => setIsOpen(false)}
                            className="block py-1.5 text-sm text-slate-600 hover:text-vovon-600 font-medium"
                          >
                            {language === 'nl' ? '• Werkwijze & Stappen' : '• Process & Steps'}
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-vovon-600 hover:bg-slate-50 rounded-md border-b border-slate-100 last:border-0"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
