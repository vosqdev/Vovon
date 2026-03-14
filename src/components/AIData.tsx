import { motion } from 'motion/react';
import { Cpu, Database, Layout, BarChart3 } from 'lucide-react';
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
            <div className="aspect-square rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800/50 backdrop-blur-sm">
              <img 
                src="https://picsum.photos/seed/digital_data/800/800" 
                alt="Data Visualization" 
                className="w-full h-full object-cover opacity-60 mix-blend-overlay"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-sm bg-slate-900/80 backdrop-blur-md rounded-xl p-6 border border-slate-700 shadow-2xl">
                   <div className="flex items-center justify-between mb-4">
                     <div className="h-3 w-24 bg-slate-700 rounded"></div>
                     <div className="h-3 w-8 bg-vovon-500 rounded"></div>
                   </div>
                   <div className="space-y-2">
                     <div className="h-2 w-full bg-slate-700/50 rounded"></div>
                     <div className="h-2 w-5/6 bg-slate-700/50 rounded"></div>
                     <div className="h-2 w-4/6 bg-slate-700/50 rounded"></div>
                   </div>
                   <div className="mt-6 grid grid-cols-3 gap-2">
                      <div className="h-16 bg-slate-800 rounded border border-slate-700"></div>
                      <div className="h-16 bg-slate-800 rounded border border-slate-700"></div>
                      <div className="h-16 bg-slate-800 rounded border border-slate-700"></div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIData;
