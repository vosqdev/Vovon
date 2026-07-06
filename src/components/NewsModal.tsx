import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Compass, Globe, Zap, Cpu, Battery, Users } from 'lucide-react';

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id?: string;
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

                {item.id === '8' && item.content ? (
                  <div className="text-slate-600 max-w-none">
                    {/* Full-width Lead Intro */}
                    <div className="text-[10pt] font-extrabold text-slate-800 leading-relaxed border-l-4 border-vovon-600 pl-6 mb-8 py-1">
                      {item.content[0]}
                    </div>
                    
                    {/* 2-Column Content Layout for the introduction text */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-10">
                      {/* Column 1 */}
                      <div className="space-y-6">
                        <p className="text-[10pt] leading-relaxed text-slate-600">
                          {item.content[1]}
                        </p>
                        <p className="text-[10pt] leading-relaxed text-slate-600">
                          {item.content[2]}
                        </p>
                      </div>
                      
                      {/* Column 2 */}
                      <div className="space-y-6 flex flex-col h-full justify-between">
                        <p className="text-[10pt] leading-relaxed text-slate-600 mb-2">
                          {item.content[3]}
                        </p>
                        
                        {/* Custom styled Callout Card to open form directly */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="p-2 bg-vovon-50 text-vovon-600 rounded-lg">
                              <Compass className="w-4 h-4" />
                            </span>
                            <span className="text-[10px] font-extrabold tracking-wider text-slate-500 uppercase">
                              Volledig scherm
                            </span>
                          </div>
                          <p className="text-xs font-semibold text-slate-800 mb-4 leading-normal">
                            Lukt het invullen op deze pagina niet optimaal? Open de Quickscan dan direct op smartphone- of desktopscherm.
                          </p>
                          <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdGLQcc_jwDSR1-f1cu-BMZ4_svVtFPoGKM8C8tUXe-HmqdGg/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-vovon-600 hover:bg-vovon-700 active:bg-vovon-800 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                          >
                            <span>Open in nieuw tabblad</span>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Integrated Embedded Form Container */}
                    <div className="border-t border-slate-200/60 pt-8 pb-4">
                      <div className="text-center mb-6">
                        <h3 className="text-lg font-bold text-slate-900">Quickscan Formulier</h3>
                        <p className="text-xs text-slate-500">Vul hieronder direct uw gegevens en energiewensen in</p>
                      </div>
                      
                      <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-inner p-1 sm:p-2 flex justify-center">
                        <div className="w-full max-w-[640px] bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200/50">
                          <iframe 
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdGLQcc_jwDSR1-f1cu-BMZ4_svVtFPoGKM8C8tUXe-HmqdGg/viewform?embedded=true" 
                            width="100%" 
                            height="3053" 
                            frameBorder="0" 
                            marginHeight={0} 
                            marginWidth={0}
                            className="w-full rounded-xl transition-all duration-300"
                            title="Quickscan Energievraag Formulier"
                          >
                            Laden…
                          </iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : item.id === '7' && item.content && item.content.length >= 4 ? (
                  <div className="text-slate-600 max-w-none">
                    {/* Full-width Lead Intro */}
                    <div className="text-[10pt] font-extrabold text-slate-800 leading-relaxed border-l-4 border-vovon-600 pl-6 mb-8 py-1">
                      {item.content[0]}
                    </div>
                    
                    {/* 2-Column Content Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                      {/* Column 1 */}
                      <div className="space-y-6">
                        <p className="text-[10pt] leading-relaxed text-slate-600">
                          {item.content[1]}
                        </p>
                        <p className="text-[10pt] leading-relaxed text-slate-600">
                          {item.content[2]}
                        </p>
                      </div>
                      
                      {/* Column 2 */}
                      <div className="space-y-6 flex flex-col h-full">
                        <p className="text-[10pt] leading-relaxed text-slate-600 mb-2">
                          {item.content[3]}
                        </p>
                        
                        {/* Custom styled Callout Card with LinkedIn theme */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                              </svg>
                            </span>
                            <span className="text-xs font-extrabold tracking-wider text-slate-500 uppercase">
                              Discussieer mee
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-slate-800 mb-5 leading-normal">
                            Deel dit bericht en discussieer direct mee op LinkedIn met Patrick Vos en ons netwerk.
                          </p>
                          <a
                            href="https://www.linkedin.com/posts/patrick-vos-49527726_netcongestie-gebiedsontwikkeling-woningbouw-share-7465626938246742016-LdAo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                          >
                            <span>Bekijk op LinkedIn</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : item.id === '5' && item.content && item.content.length >= 6 ? (
                  <div className="text-slate-600 max-w-none">
                    {/* Full-width Lead Intro */}
                    <div className="text-[10pt] font-extrabold text-slate-800 leading-relaxed border-l-4 border-vovon-600 pl-6 mb-8 py-1.5 bg-slate-50/50 rounded-r-xl pr-4">
                      {item.content[0]}
                    </div>
                    
                    {/* Bento Highlight Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                      <div className="bg-gradient-to-br from-vovon-50/40 to-slate-50 border border-vovon-100/55 p-5 rounded-2xl">
                        <div className="p-2 bg-vovon-50 text-vovon-600 rounded-lg w-fit mb-3">
                          <Users className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Netbewust Concept</h4>
                        <p className="text-[9.5pt] leading-relaxed text-slate-600">
                          Wonen, mobiliteit, levensonderhoud en energie integraal ontworpen om direct ontwikkelruimte te creëren.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-vovon-50/40 to-slate-50 border border-vovon-100/55 p-5 rounded-2xl">
                        <div className="p-2 bg-vovon-50 text-vovon-600 rounded-lg w-fit mb-3">
                          <Battery className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">WijkEMS Beheer</h4>
                        <p className="text-[9.5pt] leading-relaxed text-slate-600">
                          Een slim systeem verbindt woningen, warmtepompen, PV-panelen, laadpunten en opslagbatterijen live.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-vovon-50/40 to-slate-50 border border-vovon-100/55 p-5 rounded-2xl">
                        <div className="p-2 bg-vovon-50 text-vovon-600 rounded-lg w-fit mb-3">
                          <Zap className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Zonder Comfortverlies</h4>
                        <p className="text-[9.5pt] leading-relaxed text-slate-600">
                          Duurzame sturing en opslag afgestemd op de bewoner, zonder in te leveren op comfort of betaalbaarheid.
                        </p>
                      </div>
                    </div>

                    {/* 2-Column Content Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-10 border-b border-slate-100 pb-8">
                      {/* Column 1 */}
                      <div className="space-y-6">
                        <p className="text-[10pt] leading-relaxed text-slate-600">
                          {item.content[1]}
                        </p>
                        <p className="text-[10pt] leading-relaxed text-slate-600">
                          {item.content[2]}
                        </p>
                      </div>
                      
                      {/* Column 2 */}
                      <div className="space-y-6">
                        <p className="text-[10pt] leading-relaxed text-slate-600">
                          {item.content[3]}
                        </p>
                        <p className="text-[10pt] leading-relaxed text-slate-600">
                          {item.content[4]}
                        </p>
                      </div>
                    </div>

                    {/* Concluding Full-width & Card */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-2">
                      <div className="md:col-span-2 space-y-4 flex flex-col justify-center">
                        <p className="text-[10.5pt] font-extrabold text-slate-900 leading-relaxed">
                          {item.content[5]}
                        </p>
                        <p className="text-[10pt] leading-relaxed text-slate-600">
                          {item.content[6]}
                        </p>
                      </div>
                      
                      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className="p-2 bg-vovon-50 text-vovon-600 rounded-lg">
                              <Compass className="w-4 h-4" />
                            </span>
                            <span className="text-[10px] font-extrabold tracking-wider text-slate-500 uppercase">
                              Netgenoten
                            </span>
                          </div>
                          <p className="text-xs font-semibold text-slate-800 mb-4 leading-normal">
                            Lees meer over de buurtschap-aanpak en ketensamenwerking op de website van Netgenoten.
                          </p>
                        </div>
                        <a
                          href="https://www.netgenoten.nl"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-vovon-600 hover:bg-vovon-700 active:bg-vovon-800 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                        >
                          <span>Bezoek Netgenoten</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : item.id === '6' && item.content && item.content.length >= 7 ? (
                  <div className="text-slate-600 max-w-none">
                    {/* Full-width Lead Intro */}
                    <div className="text-[10pt] font-extrabold text-slate-800 leading-relaxed border-l-4 border-vovon-600 pl-6 mb-8 py-1.5 bg-slate-50/50 rounded-r-xl pr-4">
                      {item.content[0]}
                    </div>
                    
                    {/* Bento Highlight Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                      <div className="bg-gradient-to-br from-vovon-50/40 to-slate-50 border border-vovon-100/55 p-5 rounded-2xl">
                        <div className="p-2 bg-vovon-50 text-vovon-600 rounded-lg w-fit mb-3">
                          <Globe className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Systeemkoppeling</h4>
                        <p className="text-[9.5pt] leading-relaxed text-slate-600">
                          Samenhang realiseren tussen ruimte, energie, data, vastgoed en dagelijks gebruik van de leefomgeving.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-vovon-50/40 to-slate-50 border border-vovon-100/55 p-5 rounded-2xl">
                        <div className="p-2 bg-vovon-50 text-vovon-600 rounded-lg w-fit mb-3">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Digitale Innovatie</h4>
                        <p className="text-[9.5pt] leading-relaxed text-slate-600">
                          Inzetten van online quickscans, flexibiliteitsmodellen en slimme sturing vóór projecten fysiek vastlopen.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-vovon-50/40 to-slate-50 border border-vovon-100/55 p-5 rounded-2xl">
                        <div className="p-2 bg-vovon-50 text-vovon-600 rounded-lg w-fit mb-3">
                          <Users className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-bold text-slate-930 uppercase tracking-wider mb-2">Actieve Coalities</h4>
                        <p className="text-[9.5pt] leading-relaxed text-slate-600">
                          Overheid, netbeheerders, bouwers en energiepartijen vroegtijdig verbinden aan gedeelde prestaties.
                        </p>
                      </div>
                    </div>

                    {/* 2-Column Content Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-8 pb-8 border-b border-slate-100">
                      {/* Column 1 */}
                      <div className="space-y-6">
                        <p className="text-[10pt] leading-relaxed text-slate-600">
                          {item.content[1]}
                        </p>
                        <p className="text-[10pt] leading-relaxed text-slate-600">
                          {item.content[2]}
                        </p>
                      </div>
                      
                      {/* Column 2 */}
                      <div className="space-y-6">
                        <p className="text-[10pt] leading-relaxed text-slate-600">
                          {item.content[3]}
                        </p>
                        <p className="text-[10pt] leading-relaxed text-slate-600">
                          {item.content[4]}
                        </p>
                      </div>
                    </div>

                    {/* Concluding Full-width & Card */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-2">
                      <div className="md:col-span-2 space-y-4 flex flex-col justify-center">
                        <p className="text-[10.5pt] font-extrabold text-vovon-600 leading-relaxed">
                          {item.content[5]}
                        </p>
                        <p className="text-[10pt] italic text-slate-700 leading-relaxed">
                          {item.content[6]}
                        </p>
                        {item.content[7] && (
                          <p className="text-[10pt] leading-relaxed text-slate-600">
                            {item.content[7]}
                          </p>
                        )}
                      </div>
                      
                      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className="p-2 bg-vovon-50 text-vovon-600 rounded-lg">
                              <Globe className="w-4 h-4" />
                            </span>
                            <span className="text-[10px] font-extrabold tracking-wider text-slate-500 uppercase">
                              Systeembewust
                            </span>
                          </div>
                          <p className="text-xs font-semibold text-slate-800 mb-4 leading-normal">
                            Ontdek hoe Systeembewust plannen integraal ontwikkelt van abstracte transitie naar concrete gebiedsontwikkeling.
                          </p>
                        </div>
                        <a
                          href="https://www.systeembewust.nl"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-vovon-600 hover:bg-vovon-700 active:bg-vovon-800 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                        >
                          <span>Bezoek Systeembewust.nl</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-slate-600 max-w-none space-y-4">
                    {item.content ? (
                      item.content.map((paragraph, idx) => {
                        const urlRegex = /(https?:\/\/[^\s]+[^<.,:;"')\]\s]|www\.[^\s]+[^<.,:;"')\]\s])/g;
                        const parts = paragraph.split(urlRegex);
                        
                        return (
                          <p key={idx} className="text-[10pt] leading-relaxed text-slate-600">
                            {parts.map((part, i) => {
                              if (part.match(urlRegex)) {
                                const href = part.startsWith('http') ? part : `https://${part}`;
                                return (
                                  <a 
                                    key={i} 
                                    href={href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-vovon-600 hover:text-vovon-700 underline font-semibold"
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
                      <p className="text-[10pt] leading-relaxed">Geen verdere informatie beschikbaar.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
