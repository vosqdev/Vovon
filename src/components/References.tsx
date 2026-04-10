import { motion } from 'motion/react';
import { MapPin, Home, Briefcase, Landmark, Zap } from 'lucide-react';
import { Language, translations } from '../translations';

interface ReferencesProps {
  language: Language;
}

const References = ({ language }: ReferencesProps) => {
  const t = translations[language].references;
  const icons = [Home, Briefcase, Landmark, Zap];
  const images = [
    'https://image2url.com/r2/default/images/1773486303291-4b5d0c7c-73fc-450d-a3a6-af3d453b9801.jpg', // Woningbouw
    'https://image2url.com/r2/default/images/1773486555578-377d9761-92ba-48dd-a277-d75832d29293.jpg', // Commercieel
    'https://image2url.com/r2/default/images/1773486248281-c6331375-a2b8-4ae2-8340-1da59b26f36b.jpg', // Maatschappelijk
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop', // Energie
  ];

  const projects = t.items.map((item, index) => ({
    ...item,
    icon: icons[index],
    image: images[index],
    location: language === 'en' ? 'Various Locations' : 'Diverse Locaties' // Simple fallback for location
  }));

  return (
    <section id="references" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-vovon-500"></span>
            <span className="text-vovon-600 font-semibold tracking-wider uppercase text-sm">{t.label}</span>
            <span className="h-px w-8 bg-vovon-500"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-vovon-700 uppercase tracking-wide flex items-center gap-1">
                  <project.icon className="w-3 h-3" />
                  {project.category}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center text-slate-500 text-xs mb-2">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  {project.location}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-vovon-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <a 
             href="https://earth.google.com/earth/d/1hI_ZGbVZ9iA3BwuzB0XBQ_uUNUbEqJ7N?usp=sharing" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center text-vovon-600 font-semibold hover:text-vovon-700 transition-colors"
           >
             {t.googleEarth}
             <MapPin className="ml-2 w-4 h-4" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default References;
