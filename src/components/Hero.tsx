import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroProps {
  language: Language;
}

const Hero = ({ language }: HeroProps) => {
  const t = translations[language].hero;

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://image2url.com/r2/default/images/1773422002697-cfa20699-a82f-4782-a119-fbd45eb805a7.png"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-slate-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            {t.title} <br className="hidden md:block" />
            <span className="text-purple-400">{t.subtitle}</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/30"
          >
            {t.ctaPrimary}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 backdrop-blur-sm text-base font-medium rounded-full text-white hover:bg-white/10 transition-all"
          >
            {t.ctaSecondary}
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
