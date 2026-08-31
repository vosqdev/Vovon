import React from 'react';
import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';
import { Language } from '../translations';

interface PartnerTickerProps {
  language: Language;
}

const partnerBannerImage = 'https://www.image2url.com/r2/default/images/1788160774157-9efbbedd-93fb-4282-b7ae-532f161c21f0.png';

export const PartnerTicker: React.FC<PartnerTickerProps> = ({ language }) => {
  return (
    <div className="mt-20 pt-12 border-t border-slate-200/80">
      {/* Header Eyebrow & Title */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <Handshake className="w-4 h-4 text-vovon-600" />
          <span className="text-xs font-bold uppercase tracking-widest text-vovon-600">
            {language === 'nl' ? 'Samenwerkingen' : 'Collaborations'}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {language === 'nl' ? 'Opdrachtgevers & Netwerk' : 'Clients & Network'}
        </h3>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mt-2 font-normal">
          {language === 'nl'
            ? 'Samen bouwen aan veerkrachtige gebiedsontwikkeling, energieoplossingen en toekomstbestendig vastgoed.'
            : 'Building resilient area developments, energy solutions, and future-proof real estate together.'}
        </p>
      </motion.div>

      {/* Dual Direction Continuous Marquee Container (Never stops on hover, zoomed in) */}
      <div className="relative w-full overflow-hidden bg-slate-50/70 border border-slate-200/80 rounded-2xl py-6 sm:py-8 shadow-xs">
        {/* Left & Right Smooth Edge Fade Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50/95 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50/95 to-transparent z-10" />

        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Row 1: Left-to-Right Loop */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-right flex items-center gap-8 sm:gap-12 shrink-0">
              {[1, 2, 3, 4].map((index) => (
                <img
                  key={`row1-${index}`}
                  src={partnerBannerImage}
                  alt={`Opdrachtgevers & Netwerk VOVON Development ${index}`}
                  className="h-16 sm:h-22 md:h-26 lg:h-28 w-auto max-w-none object-contain shrink-0 opacity-95 transition-opacity"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Row 2: Right-to-Left Loop (Opposite Direction) */}
          <div className="flex overflow-hidden border-t border-slate-200/60 pt-6 sm:pt-8">
            <div className="animate-marquee-left flex items-center gap-8 sm:gap-12 shrink-0">
              {[1, 2, 3, 4].map((index) => (
                <img
                  key={`row2-${index}`}
                  src={partnerBannerImage}
                  alt={`Opdrachtgevers & Netwerk VOVON Development ${index}`}
                  className="h-16 sm:h-22 md:h-26 lg:h-28 w-auto max-w-none object-contain shrink-0 opacity-95 transition-opacity"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerTicker;
