import { motion } from 'motion/react';
import { Cpu, Database, Layout, BarChart3, Zap, CheckCircle2 } from 'lucide-react';
import { Language, translations } from '../translations';

interface AIDataProps {
  language: Language;
}

const AIData = ({ language }: AIDataProps) => {
  const t = translations[language].aiData;
  const icons = [Layout, Cpu, Database, BarChart3];

  const features = t.features.map((feature, index) => ({
    ...feature,
    icon: icons[index]
  }));

  return (
    <section id="ai-data" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-vovon-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="h-px w-8 bg-vovon-400"></span>
              <span className="text-vovon-400 font-semibold tracking-wider uppercase text-sm">{t.label}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              {t.title} <br />
              <span className="text-vovon-400">{t.titleHighlight}</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {t.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                    <feature.icon className="w-6 h-6 text-vovon-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800/50 backdrop-blur-sm relative">
              <img 
                src="https://image2url.com/r2/default/images/1773485568786-ad452fe3-b05c-4b38-86b4-4d7cb83df5e0.png" 
                alt="VOVON Innovation" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            </div>

            {/* Floating Highlight Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 sm:-right-12 sm:bottom-12 bg-slate-800/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-vovon-500/30 max-w-sm z-20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-vovon-500/20 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-vovon-400" />
                </div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wider">{t.newTools.title}</h4>
              </div>
              <ul className="space-y-4">
                {t.newTools.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-vovon-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIData;
