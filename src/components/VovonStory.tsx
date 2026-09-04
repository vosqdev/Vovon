import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Language, translations } from '../translations';

interface VovonStoryProps {
  language: Language;
}

const VovonStory = ({ language }: VovonStoryProps) => {
  const t = translations[language].story;

  const acronymPillars = [
    {
      letters: 'VO',
      word: language === 'nl' ? 'Vos' : 'Vos',
      sub: language === 'nl' ? 'Identiteit & Leiderschap' : 'Identity & Leadership',
    },
    {
      letters: 'V',
      word: language === 'nl' ? 'Vastgoed' : 'Real Estate',
      sub: language === 'nl' ? 'Strategisch & Waardevast' : 'Strategic & Resilient',
    },
    {
      letters: 'O',
      word: language === 'nl' ? 'Ontwikkeling' : 'Development',
      sub: language === 'nl' ? 'Van Initiatief tot Exploitatie' : 'From Concept to Operation',
    },
    {
      letters: 'N',
      word: language === 'nl' ? 'Nieuwbouw' : 'New Construction',
      sub: language === 'nl' ? 'Duurzaam & Netbewust' : 'Sustainable & Grid-Aware',
    },
  ];

  return (
    <section id="story" className="py-24 md:py-32 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-6 h-px bg-vovon-600"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              VOVON · {t.label}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight mb-4"
          >
            {t.title}{' '}
            <span className="font-semibold text-slate-900 border-b-2 border-vovon-600 pb-0.5">
              {t.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* 1. Architectural Acronym Breakdown (VO · V · O · N) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-16 mb-16 border-b border-slate-200"
        >
          {acronymPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="pt-4 border-t-2 border-slate-300 hover:border-vovon-600 transition-colors duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-vovon-600 transition-colors">
                {pillar.letters}
              </div>
              <div className="text-base sm:text-lg font-semibold text-slate-800 mt-1">
                {pillar.word}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                {pillar.sub}
              </div>
            </div>
          ))}
        </motion.div>

        {/* 2. Brand Story & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text & Premium CTA Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              <p className="text-slate-900 font-medium text-lg md:text-xl leading-relaxed">
                {t.description1}
              </p>
              <p>{t.description2}</p>
              <p className="text-slate-700 font-normal">
                {t.description3}
              </p>
            </div>

            {/* Calm, High-Grade CTA Area */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm font-semibold text-slate-900 mb-1">
                {t.ctaText}
              </p>
              <p className="text-xs text-slate-500 mb-5">
                {language === 'nl'
                  ? 'Vrijblijvend sparren over kansen, netcongestie of projectontwikkeling.'
                  : 'Open discussion on opportunities, grid congestion, or project development.'}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white bg-slate-900 hover:bg-vovon-600 rounded-lg transition-all duration-300 shadow-sm group"
                >
                  <span>{t.ctaButton}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+31611692001"
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-700 hover:text-vovon-600 border border-slate-300 hover:border-vovon-300 bg-white rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-vovon-600" />
                  <span>+31 (0)6 116 92 001</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Large Architectural Photography Column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200">
              <img
                src="https://image2url.com/r2/default/images/1774706970301-eb9e8263-2b6a-407b-a700-13cdc2a1210d.jpg"
                alt={t.imageAlt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 text-xs text-white/90 font-medium tracking-wider uppercase">
                VOVON Development · Projectregie & Gebiedsontwikkeling
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VovonStory;
