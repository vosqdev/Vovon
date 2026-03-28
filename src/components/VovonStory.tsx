import { motion } from 'motion/react';
import { Language, translations } from '../translations';
import { Phone } from 'lucide-react';

interface VovonStoryProps {
  language: Language;
}

const VovonStory = ({ language }: VovonStoryProps) => {
  const t = translations[language].story;

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Side (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t.title} <span className="text-vovon-600">{t.titleHighlight}</span>
            </h2>
            
            <div className="prose prose-slate prose-lg">
              <p className="text-slate-600 leading-relaxed mb-6">
                {t.description1}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t.description2}
              </p>
            </div>
          </motion.div>

          {/* Image Side (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-5/12 relative mt-12 lg:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] w-full">
              <img
                src="https://image2url.com/r2/default/images/1774706970301-eb9e8263-2b6a-407b-a700-13cdc2a1210d.jpg"
                alt={t.imageAlt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent" />
            </div>

            {/* Coffee Banner Over Image */}
            <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-white border-l-4 border-vovon-600 p-5 sm:p-6 rounded-r-xl shadow-xl flex items-start space-x-4 max-w-[90%] sm:max-w-sm z-10">
              <div className="bg-vovon-100 p-3 rounded-full flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-vovon-600" />
              </div>
              <div>
                <p className="text-slate-800 font-medium italic text-sm sm:text-base m-0 leading-snug">
                  {t.callToAction}
                </p>
                <a 
                  href="#contact" 
                  className="inline-block mt-2 text-xs sm:text-sm font-semibold text-vovon-600 hover:text-vovon-700 transition-colors"
                >
                  {language === 'nl' ? 'Neem direct contact op →' : 'Contact us directly →'}
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VovonStory;
