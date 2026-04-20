import { motion } from 'motion/react';
import { CheckCircle, Info } from 'lucide-react';
import { useState } from 'react';
import { Language, translations } from '../translations';
import FounderModal from './FounderModal';

interface AboutProps {
  language: Language;
}

const About = ({ language }: AboutProps) => {
  const t = translations[language].about;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://image2url.com/r2/default/images/1773422002697-cfa20699-a82f-4782-a119-fbd45eb805a7.png"
                alt="Patrick Vos"
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-700"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-slate-100 rounded-2xl -z-10" />
            
            {/* Founder Card */}
            <div 
              onClick={() => setIsModalOpen(true)}
              className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs cursor-pointer hover:bg-white transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <img 
                  src="https://image2url.com/r2/default/images/1773481924466-d01e0950-66db-4902-a880-8deace030649.png" 
                  alt="Patrick Vos" 
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 group-hover:text-vovon-600 transition-colors">Patrick Vos</p>
                  <p className="text-xs text-slate-500">{t.founderRole}</p>
                </div>
                <div className="bg-vovon-50 p-1.5 rounded-full text-vovon-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Info className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="h-px w-8 bg-vovon-500"></span>
              <span className="text-vovon-600 font-semibold tracking-wider uppercase text-sm">{t.label}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              {t.title} <span className="text-vovon-600">{t.titleHighlight}</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {t.description1}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t.description2}
            </p>
            
            <ul className="space-y-4">
              {t.expertise.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-vovon-600 w-5 h-5 flex-shrink-0" />
                  <span className="text-base text-slate-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      
      {/* Founder Modal Overlay */}
      <FounderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default About;
