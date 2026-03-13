import { motion } from 'motion/react';
import { Building2, Zap, Briefcase, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { Language, translations } from '../translations';

interface ServicesProps {
  language: Language;
}

const Services = ({ language }: ServicesProps) => {
  const t = translations[language].services;
  const icons = [ShieldCheck, Briefcase, Zap, Users, TrendingUp, Building2];

  const services = t.items.map((item, index) => ({
    ...item,
    icon: icons[index]
  }));

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-purple-500"></span>
            <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">{t.label}</span>
            <span className="h-px w-8 bg-purple-500"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
