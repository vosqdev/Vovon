import { motion } from 'motion/react';
import { Lightbulb, Target, Settings, FileCheck, Euro, Hammer, Activity } from 'lucide-react';
import { Language, translations } from '../translations';

interface ProcessProps {
  language: Language;
}

const Process = ({ language }: ProcessProps) => {
  const t = translations[language].process;
  const isNl = language === 'nl';
  const icons = [Lightbulb, Target, Settings, FileCheck, Euro, Hammer, Activity];

  const steps = t.steps.map((step, index) => ({
    ...step,
    icon: icons[index] || Lightbulb,
  }));

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#faf9f6] via-white to-slate-50/80 overflow-hidden border-t border-slate-200/60">
      {/* Subtle Architectural Grid Texture */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-45 pointer-events-none"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 80%)',
        }}
      />

      {/* Gentle Ambient Glow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[680px] h-[320px] bg-vovon-100/35 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20"
        >
          {/* Haute-Couture Architectural Eyebrow (No Clunky Bubble Pill) */}
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-5">
            <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-vovon-400"></span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-vovon-600">
              {t.label}
            </span>
            <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-vovon-400"></span>
          </div>

          {/* Bold Editorial Headline with Strategic Emphasis */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.16] max-w-4xl mx-auto">
            {isNl ? (
              <>
                Zonder <span className="text-transparent bg-clip-text bg-gradient-to-r from-vovon-600 to-vovon-800">energie</span> geen vastgoed,{' '}
                <br className="hidden sm:inline" />
                zonder <span className="text-transparent bg-clip-text bg-gradient-to-r from-vovon-600 to-vovon-800">visie</span> geen gebied.
              </>
            ) : (
              <>
                No <span className="text-transparent bg-clip-text bg-gradient-to-r from-vovon-600 to-vovon-800">energy</span> without real estate,{' '}
                <br className="hidden sm:inline" />
                no <span className="text-transparent bg-clip-text bg-gradient-to-r from-vovon-600 to-vovon-800">vision</span> without area.
              </>
            )}
          </h2>

          {/* Subtitle with Premium Lettering */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* 7-Step Process Pipeline */}
        <div className="relative">
          {/* Subtle Continuous Guideline (Desktop) aligned with icon center */}
          <div className="hidden lg:block absolute top-[36px] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent -z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex flex-col items-center group text-center p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:shadow-slate-200/50"
              >
                {/* Node */}
                <div className="relative mb-3.5 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-vovon-500/50 group-hover:shadow-md group-hover:shadow-vovon-500/15">
                    <step.icon className="w-7 h-7 text-vovon-600 transition-colors group-hover:text-vovon-700" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 group-hover:text-vovon-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[130px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
