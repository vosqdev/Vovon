import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { Language, translations } from '../translations';

interface NewsProps {
  language: Language;
}

const News = ({ language }: NewsProps) => {
  const t = translations[language].news;
  const [selectedArticle, setSelectedArticle] = useState<typeof t.items[0] | null>(null);

  return (
    <section id="news" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-vovon-600 font-semibold tracking-wide uppercase text-sm"
          >
            {t.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-4xl font-bold text-slate-900"
          >
            {t.title} <span className="text-vovon-600">{t.titleHighlight}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-slate-500 mb-3">{item.date}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                  {item.excerpt}
                </p>
                <button 
                  onClick={() => setSelectedArticle(item)}
                  className="flex items-center text-vovon-600 font-medium hover:text-vovon-700 transition-colors mt-auto group"
                >
                  {t.readMore}
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* News Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 bg-white/80 hover:bg-white text-slate-900 rounded-full backdrop-blur-sm transition-colors shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="w-full h-64 sm:h-80 relative flex-shrink-0">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white">
                  <div className="text-sm font-medium text-white/80 mb-2">{selectedArticle.date}</div>
                  <h3 className="text-2xl sm:text-3xl font-bold">{selectedArticle.title}</h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="prose prose-slate max-w-none">
                  {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-slate-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default News;
