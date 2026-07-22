import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sun, Globe, Calendar, Sparkles } from 'lucide-react';

interface SummerVacationModalProps {
  language?: 'nl' | 'en';
}

export default function SummerVacationModal({ language = 'nl' }: SummerVacationModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup when website opens, unless user dismissed it in current session
    const isDismissed = sessionStorage.getItem('vovon_summer_popup_dismissed');
    if (!isDismissed) {
      // Small delay for smooth entry animation after page load
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('vovon_summer_popup_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-slate-950 rounded-3xl shadow-2xl overflow-hidden border border-purple-500/30 z-10 my-auto text-white"
          >
            {/* Close Button Top Right */}
            <button
              onClick={handleClose}
              aria-label="Sluiten"
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-900/80 text-slate-200 hover:text-white hover:bg-purple-600 transition-all duration-200 backdrop-blur-md border border-white/10 shadow-lg cursor-pointer group"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Modal Body - 2 Columns on desktop, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[480px]">
              
              {/* Left Column: VOVON Message & Branding */}
              <div className="md:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-slate-950 via-[#18092a] to-[#280c42] relative overflow-hidden">
                
                {/* Background decorative ambient glow */}
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Top: Logo & Summer Badge */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <img 
                      src="https://image2url.com/r2/default/images/1773421788209-50b1f125-1292-4c2a-9751-f63b3d357d58.png" 
                      alt="VOVON Development" 
                      className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
                      referrerPolicy="no-referrer"
                    />
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-300 border border-amber-400/20 backdrop-blur-sm">
                      <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                      Zomervakantie 2026
                    </span>
                  </div>
                </div>

                {/* Middle: Announcement Text */}
                <div className="relative z-10 my-6 space-y-5">
                  <div className="space-y-3">
                    <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-100 leading-relaxed">
                      Maandag <span className="font-bold text-white underline decoration-purple-400 decoration-2 underline-offset-4">27 juli</span> tot en met vrijdag <span className="font-bold text-white underline decoration-purple-400 decoration-2 underline-offset-4">14 augustus</span> genieten wij van onze vakantie.
                    </p>
                  </div>

                  <div className="w-16 h-1 bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 rounded-full" />

                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-purple-300 via-pink-400 to-amber-300 bg-clip-text text-transparent drop-shadow-sm">
                      Fijne Zomer!
                    </h2>
                  </div>
                </div>

                {/* Bottom: Footer link & Dismiss action */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <a 
                    href="https://www.vovon.nl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-purple-200 hover:text-white transition-colors"
                  >
                    <Globe className="w-4 h-4 text-purple-400" />
                    www.vovon.nl
                  </a>

                  <button
                    onClick={handleClose}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold shadow-lg shadow-purple-900/50 hover:shadow-purple-700/60 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    Prettige vakantie!
                  </button>
                </div>

                {/* Decorative Wave accent line at bottom left */}
                <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-500/40 via-purple-600/10 to-transparent" />
              </div>

              {/* Right Column: Poolside Summer Asset Image & Graphics */}
              <div className="md:col-span-6 relative min-h-[260px] md:min-h-full bg-slate-900 overflow-hidden flex flex-col justify-end">
                {/* Background image: Luxury pool with straw hat, purple towels & sunglasses */}
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop" 
                  alt="VOVON Zomervakantie" 
                  className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Dark gradient overlay on top of image for readability and brand look */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent md:bg-gradient-to-r md:from-slate-950/80 md:via-slate-950/20 md:to-transparent" />

                {/* Floating Brand Elements on Pool Image */}
                <div className="relative z-10 p-6 sm:p-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-slate-200 shadow-xl">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>In dringende gevallen per mail bereikbaar</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                    <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Wij staan vanaf maandag 17 augustus weer vol energie voor u klaar!</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
