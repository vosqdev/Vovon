import { motion } from 'motion/react';
import { Lightbulb, Target, Settings, FileCheck, DollarSign, Hammer, Activity } from 'lucide-react';
import { Language, translations } from '../translations';

interface ProcessProps {
  language: Language;
}

const Process = ({ language }: ProcessProps) => {
  const t = translations[language].process;
  const icons = [Lightbulb, Target, Settings, FileCheck, DollarSign, Hammer, Activity];

  const steps = t.steps.map((step, index) => ({
    ...step,
    icon: icons[index]
  }));

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 transform -translate-y-1/2" />

          <div className="grid grid-cols-2 md:grid-cols-7 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-purple-100 flex items-center justify-center mb-4 shadow-sm group-hover:border-purple-500 transition-colors duration-300 z-10">
                  <step.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
