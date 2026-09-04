import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Language } from '../translations';

interface AboutMegaMenuProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface MenuItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

export const AboutMegaMenu: React.FC<AboutMegaMenuProps> = ({
  language,
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) => {
  if (!isOpen) return null;

  const isNl = language === 'nl';

  const menuData = {
    title: isNl ? 'Over VOVON' : 'About VOVON',
    card1: {
      tag: isNl ? 'VOVON OPRICHTER' : 'VOVON FOUNDER',
      title: isNl ? 'Maak kennis met Patrick Vos' : 'Meet Patrick Vos & the team',
      badge: isNl ? 'Bekijk CV & Profiel' : 'View CV & Profile',
      href: '/cv',
      isExternal: true,
      image: 'https://www.image2url.com/r2/default/images/1788503359695-aefa0cc2-81e4-4916-9a4f-f341ea8f9d5f.png',
    },
    card2: {
      tag: isNl ? 'PORTFOLIO & PIPELINE' : 'PORTFOLIO & PIPELINE',
      title: isNl ? 'Onze projecten' : 'Our projects',
      description: isNl 
        ? 'Ontdek netcongestie oplossingen, BESS opslagparken en zero-emissie gebiedsontwikkeling.'
        : 'Discover grid congestion solutions, BESS storage assets and zero-emission area developments.',
      href: '/#references',
    },
    column1: [
      { name: isNl ? 'Wie we zijn & Visie' : 'Who We Are & Vision', href: '/#about' },
      { name: isNl ? 'Het VOVON Verhaal' : 'The VOVON Story', href: '/#story' },
      { name: isNl ? 'Duurzaamheid & NetZero' : 'Sustainability & NetZero', href: '/#about' },
    ] as MenuItem[],
    column2: [
      { name: isNl ? 'Onze Diensten' : 'Our Services', href: '/#services' },
      { name: isNl ? 'Werkwijze & Proces' : 'Process & Methodology', href: '/#process' },
      { name: isNl ? 'Projecten & Partners' : 'Projects & Partners', href: '/#references' },
      { name: isNl ? 'Veelgestelde vragen (FAQ)' : 'Frequently Asked Questions', href: '/faq' },
    ] as MenuItem[],
    footer: {
      cta: isNl ? 'Direct contact' : 'Get in touch',
      ctaHref: '/#contact',
    }
  };

  return (
    <div
      className="absolute top-full left-0 right-0 z-50 pt-2 px-4 sm:px-6 lg:px-8 pointer-events-auto"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.99 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto bg-[#0A111E]/98 backdrop-blur-2xl border border-slate-800/80 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] p-6 lg:p-8 text-white overflow-hidden relative"
      >
        {/* Subtle Ambient Radial Lighting in Top-Right */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-vovon-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Visual Photo Card */}
          <div className="lg:col-span-4 flex">
            <Link
              to={menuData.card1.href}
              target={menuData.card1.isExternal ? "_blank" : undefined}
              rel={menuData.card1.isExternal ? "noopener noreferrer" : undefined}
              onClick={onClose}
              className="group relative w-full min-h-[260px] lg:min-h-[290px] rounded-2xl overflow-hidden p-6 sm:p-7 flex flex-col justify-between border border-white/10 shadow-lg hover:border-vovon-500/50 transition-all duration-300"
            >
              {/* Background Photo with Cinematic Dark Gradient */}
              <div className="absolute inset-0 z-0">
                <img
                  src={menuData.card1.image}
                  alt="Patrick Vos - VOVON"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30 group-hover:via-black/45 transition-colors duration-500" />
              </div>

              {/* Card 1 Content Top */}
              <div className="relative z-10 space-y-2">
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-vovon-300">
                  {menuData.card1.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-vovon-200 transition-colors">
                  {menuData.card1.title}
                </h3>
              </div>

              {/* Card 1 Content Bottom */}
              <div className="relative z-10 flex items-center justify-between pt-4">
                <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-vovon-100 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-semibold text-white/95 shadow-sm">
                  {menuData.card1.badge}
                </div>
              </div>
            </Link>
          </div>

          {/* Card 2: High Impact Branded Asset Card */}
          <div className="lg:col-span-4 flex">
            <Link
              to={menuData.card2.href}
              onClick={onClose}
              className="group relative w-full min-h-[260px] lg:min-h-[290px] rounded-2xl overflow-hidden p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-br from-[#99336f] via-[#7d2a5b] to-[#3b1229] border border-white/15 shadow-xl hover:shadow-vovon-600/20 hover:border-white/30 transition-all duration-300"
            >
              {/* Subtle Decorative Pattern */}
              <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-white/5 blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />

              {/* Card 2 Content Top */}
              <div className="relative z-10 space-y-2.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
                  <Sparkles className="w-3.5 h-3.5 text-white/90" />
                  <span>{menuData.card2.tag}</span>
                </div>
                <h3 className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight leading-tight">
                  {menuData.card2.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal pr-2">
                  {menuData.card2.description}
                </p>
              </div>

              {/* Card 2 Content Bottom */}
              <div className="relative z-10 flex items-center justify-between pt-6">
                <div className="w-10 h-10 rounded-full bg-white text-vovon-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-vovon-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Column 3: Navigation Directory */}
          <div className="lg:col-span-4 flex flex-col justify-between py-1">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6 flex items-center gap-2">
                <span>{menuData.title}</span>
                <span className="w-2 h-2 rounded-full bg-vovon-500 animate-pulse" />
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-sm">
                {/* Column A */}
                <div className="space-y-3">
                  {menuData.column1.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      onClick={onClose}
                      className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors duration-150 py-0.5"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-150 font-normal">
                        {item.name}
                      </span>
                      {item.isExternal && (
                        <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-vovon-400 opacity-70 group-hover:opacity-100 transition-all" />
                      )}
                    </Link>
                  ))}
                </div>

                {/* Column B */}
                <div className="space-y-3">
                  {menuData.column2.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors duration-150 py-0.5"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-150 font-normal">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Sub-bar */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-end text-xs">
              <Link
                to={menuData.footer.ctaHref}
                onClick={onClose}
                className="font-bold text-vovon-400 hover:text-vovon-300 inline-flex items-center gap-1 transition-colors group"
              >
                <span>{menuData.footer.cta}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default AboutMegaMenu;
