import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Language, translations } from '../translations';

interface AboutProps {
  language: Language;
}

const About = ({ language }: AboutProps) => {
  const t = translations[language].about;

  return (
    <section id="about">
      {/* 1. Open Editorial Statement: Witte Achtergrond */}
      <div className="bg-white text-slate-900 pt-24 pb-20 md:pt-32 md:pb-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-vovon-600"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              VOVON · {t.insightEyebrow}
            </span>
          </motion.div>

          {/* Statement Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight leading-[1.18] max-w-5xl mb-12"
          >
            {language === 'nl' ? (
              <>
                Anders kijken naar <span className="font-semibold text-slate-900">vastgoed</span> en{' '}
                <span className="font-semibold text-slate-900">energie</span>.
              </>
            ) : (
              <>
                Looking at <span className="font-semibold text-slate-900">real estate</span> and{' '}
                <span className="font-semibold text-slate-900">energy</span> differently.
              </>
            )}
          </motion.h2>

          {/* Editorial Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
                {t.insightText1}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-6 border-l-2 border-vovon-600 pl-6 lg:pl-8 py-1"
            >
              <p className="text-lg md:text-xl text-slate-900 font-medium leading-relaxed">
                {t.insightText2}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. De weg naar NetZero: Met achtergrondafbeelding en 30% filter */}
      <div className="relative py-24 md:py-32 bg-slate-950 text-white overflow-hidden">
        {/* Achtergrondafbeelding */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://image2url.com/r2/default/images/1774706970301-eb9e8263-2b6a-407b-a700-13cdc2a1210d.jpg"
            alt="VOVON NetZero Achtergrond"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* 30% Filter Overlay */}
          <div className="absolute inset-0 bg-slate-950/30 backdrop-brightness-[0.45] backdrop-contrast-125" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Photography Column with Compact Sizing */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 max-w-md mx-auto lg:max-w-none w-full"
            >
              <div className="relative">
                <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
                  <img
                    src="https://www.image2url.com/r2/default/images/1788086485348-dd731234-bfd7-4db2-b4d3-97b0f1df214d.jpg"
                    alt="Over VOVON - De weg naar NetZero"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Refined Image Caption / Profile Link */}
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-2.5 border-t border-white/15">
                  <div>
                    <span className="font-semibold text-white">Patrick Vos</span>
                    <span className="mx-1.5 text-slate-600">·</span>
                    <span>{t.founderRole}</span>
                  </div>
                  <Link
                    to="/cv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-vovon-400 font-semibold hover:text-vovon-300 transition-colors group"
                  >
                    <span>{t.viewProfile}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Narrative & 3 Expertise Areas Column */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8 flex flex-col justify-between"
            >
              {/* Eyebrow & Title */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-px bg-vovon-400"></span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-vovon-400">
                    {t.label}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mb-8">
                  {t.title}{' '}
                  <span className="font-semibold text-white border-b-2 border-vovon-500 pb-0.5">
                    {t.titleHighlight}
                  </span>
                </h3>

                <div className="space-y-4 text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl mb-12 font-light">
                  <p>{t.description1}</p>
                  <p>{t.description2}</p>
                </div>
              </div>

              {/* 3 Clear Architectural Expertise Pillars */}
              <div className="border-t border-white/20 divide-y divide-white/10">
                {t.expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline group"
                  >
                    <div className="sm:col-span-1 text-xs font-mono font-bold text-vovon-400">
                      0{index + 1}
                    </div>
                    <div className="sm:col-span-5 font-semibold text-white text-base sm:text-lg tracking-tight group-hover:text-vovon-300 transition-colors">
                      {item.title}
                    </div>
                    <div className="sm:col-span-6 text-sm text-slate-200 leading-relaxed font-light">
                      {item.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
