import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Award, Briefcase, Zap, Building2 } from 'lucide-react';
import { Language, translations } from '../translations';

interface StatsProps {
  language: Language;
}

const AnimatedCounter = ({ value, duration = 2.5 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numMatch = value.match(/(\d+)/);
  const suffixMatch = value.match(/([^\d]+)$/);

  const targetNumber = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = suffixMatch ? suffixMatch[0] : '';

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = targetNumber;
      if (start === end) return;

      const totalMilSecDur = duration * 1000;
      const incrementTime = Math.max(16, (totalMilSecDur / end) * 0.9);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [targetNumber, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Stats = ({ language }: StatsProps) => {
  const t = translations[language].stats;

  const stats = [
    { label: t.years, value: '20+', icon: Award },
    { label: t.projects, value: '50+', icon: Briefcase },
    { label: t.energy, value: '120', icon: Zap },
    { label: t.objects, value: '989', icon: Building2 },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-vovon-600/20 text-vovon-400 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
