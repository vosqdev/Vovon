import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Language, translations } from '../translations';

interface StatsProps {
  language: Language;
}

const AnimatedCounter = ({ value, duration = 3 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number and suffix from string like "20+" or "120"
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
      const incrementTime = (totalMilSecDur / end) * 1.5; // Slightly adjust for smoother animation

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
      {count}{suffix}
    </span>
  );
};

const Stats = ({ language }: StatsProps) => {
  const t = translations[language].stats;

  const stats = [
    { label: t.years, value: '20+' },
    { label: t.projects, value: '50+' },
    { label: t.energy, value: '120' },
    { label: t.objects, value: '989' },
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
                <AnimatedCounter value={stat.value} />
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
