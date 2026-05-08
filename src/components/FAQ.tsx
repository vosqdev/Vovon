import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Language } from '../translations';
import { faqData } from '../data/faq';

interface FAQProps {
  language: Language;
}

export default function FAQ({ language }: FAQProps) {
  const data = faqData[language];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            {data.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {data.qas.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-vovon-500 focus:ring-inset"
              >
                <span className="font-semibold text-slate-900 text-lg pr-8">
                  {item.q}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-slate-400 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180 text-vovon-600' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-slate-600">
                      <div className="prose prose-slate max-w-none pt-2 border-t border-slate-100 whitespace-pre-wrap">
                        {item.a}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-2xl shadow-sm border border-slate-200 p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">{data.outroTitle}</h3>
          <p className="text-slate-600 text-lg mb-6 max-w-2xl mx-auto">
            {data.outroText}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-full text-white bg-vovon-600 hover:bg-vovon-500 transition-all shadow-[0_4px_14px_0_rgba(30,64,175,0.39)] hover:shadow-[0_6px_20px_rgba(30,64,175,0.23)] hover:-translate-y-0.5"
          >
            {language === 'nl' ? 'Neem contact op' : 'Get in Touch'}
          </a>
        </div>
      </div>
    </section>
  );
}
