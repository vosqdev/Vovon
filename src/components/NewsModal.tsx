import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    type: string;
    date: string;
    title: string;
    image: string;
    content?: string[];
  } | null;
}

export default function NewsModal({ isOpen, onClose, item }: NewsModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto flex flex-col relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full h-64 sm:h-80 md:h-[400px] relative shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="p-8 sm:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-slate-100 px-3 py-1 text-sm font-bold text-slate-900 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-sm font-bold text-slate-500">{item.date}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                  {item.title}
                </h2>

                <div className="prose prose-lg text-slate-600 max-w-none">
                  {item.content ? (
                    item.content.map((paragraph, idx) => {
                      const urlRegex = /(https?:\/\/[^\s]+[^<.,:;"')\]\s]|www\.[^\s]+[^<.,:;"')\]\s])/g;
                      const parts = paragraph.split(urlRegex);
                      
                      return (
                        <p key={idx} className="mb-4">
                          {parts.map((part, i) => {
                            if (part.match(urlRegex)) {
                              const href = part.startsWith('http') ? part : `https://${part}`;
                              return (
                                <a 
                                  key={i} 
                                  href={href} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-vovon-600 hover:text-vovon-700 underline"
                                >
                                  {part}
                                </a>
                              );
                            }
                            return part;
                          })}
                        </p>
                      );
                    })
                  ) : (
                    <p>Geen verdere informatie beschikbaar.</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
