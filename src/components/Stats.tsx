import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface StatsProps {
  language: Language;
}

const Stats = ({ language }: StatsProps) => {
  const t = translations[language].stats;

  const stats = [
    { label: t.years, value: '15+' },
    { label: t.projects, value: '50+' },
    { label: t.energy, value: '120' },
    { label: t.hectares, value: '500+' },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6"
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-400 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
