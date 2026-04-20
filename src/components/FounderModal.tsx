import { motion, AnimatePresence } from 'motion/react';
import { X, Target, Combine, Building2, User } from 'lucide-react';
import { useEffect } from 'react';

interface FounderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FounderModal({ isOpen, onClose }: FounderModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl z-10 my-8 overflow-hidden"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="flex items-center space-x-3">
              <img 
                src="https://image2url.com/r2/default/images/1773481924466-d01e0950-66db-4902-a880-8deace030649.png" 
                alt="Patrick Vos" 
                className="w-12 h-12 rounded-full object-cover border-2 border-vovon-100"
              />
              <div>
                <h3 className="text-lg font-bold text-slate-900">Patrick Vos</h3>
                <p className="text-sm text-slate-500 font-medium">Oprichter & Regisseur VOVON</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors bg-slate-50 text-slate-500 hover:text-slate-900"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Left Column (VOVON Focus) */}
              <div className="space-y-12">
                {/* 1. WAAROM VOVON */}
                <section>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-vovon-50 flex items-center justify-center text-vovon-600">
                      <Target className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Waarom VOVON</h2>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-2">De realiteit van vandaag</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    De klassieke manier van ontwikkelen werkt niet meer.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-vovon-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">Netcongestie blokkeert woningbouw en bedrijven</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-vovon-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">Energie wordt bepalend voor ruimtelijke en maatschappelijke keuzes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-vovon-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">Beleid is versnipperd, keuzes maken</span>
                    </li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                {/* 2. ONZE AANPAK */}
                <section>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-vovon-50 flex items-center justify-center text-vovon-600">
                      <Combine className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Onze Aanpak</h2>
                  </div>
                  
                  <p className="text-slate-700 font-bold mb-4">Wij maken projecten:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {['technisch uitvoerbaar', 'kwaliteit en haalbaar', 'economisch rendabel'].map((item, i) => (
                      <li key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                        <span className="text-sm font-bold text-slate-800 block capitalize">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-vovon-50 border-l-4 border-vovon-500 p-5 rounded-r-xl">
                    <p className="text-vovon-900 font-bold flex items-center">
                      <span className="text-xl mr-3">👉</span> 
                      Door systemen te koppelen in plaats van te scheiden
                    </p>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* 3. OVER VOVON */}
                <section>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-vovon-50 flex items-center justify-center text-vovon-600">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Over VOVON</h2>
                  </div>
                  
                  <p className="text-lg font-medium text-slate-800 mb-4 leading-relaxed">
                    Een ontwikkel- en regieorganisatie op het snijvlak van vastgoed en energie.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Met meer dan 20 jaar ervaring in projectontwikkeling, projectmanagement en realisatie brengen wij plannen van idee naar uitvoering.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    De organisatie is opgebouwd rond een netwerk van specialisten en partners, waardoor wij flexibel en doelgericht kunnen opereren.
                  </p>
                </section>
              </div>

              {/* Right Column (Patrick Vos Profile & CTA) */}
              <div className="space-y-8">
                {/* OVER Patrick Vos */}
                <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100">
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <User className="w-6 h-6 text-vovon-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Over Patrick Vos</h2>
                  </div>

                  <p className="text-slate-900 font-bold mb-6 text-lg">Initiatiefnemer van VOVON.</p>
                  
                  <ul className="space-y-4 text-slate-700 mb-8">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-vovon-500 mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Achtergrond in innovatie & koop- en huur markt</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-vovon-500 mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Ervaring in volledige ontwikkelketen</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-vovon-500 mt-2 mr-3 flex-shrink-0" />
                      <span className="font-medium">Gespecialiseerd in complexe opgaven en ontwikkeling</span>
                    </li>
                  </ul>

                  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-slate-700 italic leading-relaxed font-medium">
                      "Het verbinden, vernieuwen en organiseren van markt, overheid en energie en vastgoed vraagstukken tot realiseerbare projecten."
                    </p>
                  </div>
                </div>

                {/* CALL TO ACTION */}
                <div className="bg-vovon-600 rounded-3xl p-6 md:p-8 text-center shadow-xl shadow-vovon-600/20">
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Call To Action</h2>
                  <p className="text-vovon-50 font-medium mb-2 text-lg">
                    Heeft u een locatie, initiatief of vraagstuk dat vastloopt?
                  </p>
                  <p className="text-white font-bold text-xl mb-8">
                    Wij brengen beweging.
                  </p>
                  
                  <a
                    href="#contact"
                    onClick={(e) => {
                      onClose();
                      // Let smooth scroll handle it after closing
                    }}
                    className="inline-block bg-white text-vovon-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-slate-50 hover:scale-105 transition-all w-full"
                  >
                    Neem contact op!
                  </a>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// Simple export for icons check
function CheckCircle2({ className, ...props }: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}
