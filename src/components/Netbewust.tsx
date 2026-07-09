import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight, Activity, Layers, MapPin, Milestone, CheckCircle2 } from 'lucide-react';
import { Language } from '../translations';

interface NetbewustProps {
  language: Language;
}

type ModelType = 'quickscan' | 'routekaart' | 'locatie' | 'planvorming';

export default function Netbewust({ language }: NetbewustProps) {
  const [activeModel, setActiveModel] = useState<ModelType>('quickscan');

  const tabs = [
    { id: 'quickscan' as ModelType, name: language === 'nl' ? 'Quickscan Werkwijze' : 'Quickscan Method', icon: Activity },
    { id: 'routekaart' as ModelType, name: language === 'nl' ? 'De Routekaart (6 Stappen)' : 'Roadmap (6 Steps)', icon: Milestone },
    { id: 'locatie' as ModelType, name: language === 'nl' ? 'Locatie naar Systeem' : 'Location to System', icon: MapPin },
    { id: 'planvorming' as ModelType, name: language === 'nl' ? 'Voor Planvorming' : 'For Planning', icon: Layers },
  ];

  // Translations for titles and text
  const content = {
    nl: {
      title: 'Netbewuste frameworks',
      badge: 'Systeem Modellen',
      quickscan: {
        tagline: 'Van quickscan tot operationeel gebied.',
        cards: [
          {
            num: '01',
            title: 'Quickscan Grip op Locatie',
            desc: 'Analyse van de omgeving, lokale energie dragers en vragers, ruimtelijke randvoorwaarden. Energieprofilering en reststromen. Output: haalbaarheidsmatrix.',
            duration: '2-4 weken'
          },
          {
            num: '02',
            title: 'Netintegratieplan',
            desc: 'Ruimtelijke ontwerp van het systeem: opwek, opslag, distributie en fasering afgestemd op transportcapaciteit. Inclusief energiesysteem.',
            duration: '6-10 weken'
          },
          {
            num: '03',
            title: 'Stakeholderregie',
            desc: 'Begeleiding bij overleg, gemeente-ontwikkelaars-netbeheerders, besluitvorming en structuur. Waar nodig documenteren en vastleggen.',
            duration: 'Parallel'
          },
          {
            num: '04',
            title: 'Procesregie',
            desc: 'Projectbegeleiding tot operationele fase. Ook tijdens EMS-configuraties, integratie van energiesystemen en Netzero2050 strategieën.',
            duration: 'Doorlopend'
          }
        ]
      },
      routekaart: {
        tagline: 'Stapsgewijze aanpak voor een betrouwbaar lokaal energiesysteem.',
        steps: [
          {
            num: '1',
            title: 'Initiatief',
            desc: 'Start met net impact quickscan + aansluiting, doelgroep, energieprofiel',
            color: 'border-emerald-500',
            bgNum: 'bg-emerald-500'
          },
          {
            num: '2',
            title: 'Concept',
            desc: 'Energiesysteem incl. opslag + mobiliteit haalbaarheid',
            color: 'border-rose-500',
            bgNum: 'bg-rose-500'
          },
          {
            num: '3',
            title: 'Planvorming',
            desc: 'Leiding-routes (smart grid) + trafo&opslag in stedenbouwk. plan',
            color: 'border-pink-500',
            bgNum: 'bg-pink-500'
          },
          {
            num: '4',
            title: 'Ontwerp',
            desc: 'Capaciteitsaanvraag + congestie verzachtende maatregelen',
            color: 'border-amber-500',
            bgNum: 'bg-amber-500'
          },
          {
            num: '5',
            title: 'Realisatie',
            desc: 'Tijdig aansluiting op basis van energiebehoefte vanuit profiel OVG + huisnummerbesluit',
            color: 'border-blue-500',
            bgNum: 'bg-blue-500'
          },
          {
            num: '6',
            title: 'Beheer',
            desc: 'Flex-contract + CO₂-balans 2050',
            color: 'border-cyan-500',
            bgNum: 'bg-cyan-500'
          }
        ]
      },
      locatie: {
        tagline: 'Hoe we een locatie omvormen tot een betrouwbaar en werkend lokaal energiesysteem met optimale balans.',
        cols: [
          {
            title: '1 Voorbereiden',
            color: 'text-emerald-400',
            borderColor: 'border-emerald-500/20',
            bullets: [
              'Data dragers & vragers inventariseren',
              'Inzicht in huidige en toekomstige energieopgaven',
              'Technische, financiële en ruimtelijke haalbaarheid',
              'Netimpact quickscan (Grip op Locatie)'
            ]
          },
          {
            title: '2 Organiseren',
            color: 'text-pink-400',
            borderColor: 'border-pink-500/20',
            bullets: [
              'Uitgangspunten energiegemeenschap bepalen',
              'Principe-ontwerp (ruimte voor groei)',
              'Plan efficiënte energiesystemen',
              'Afstemming capaciteit met netbeheerder'
            ]
          },
          {
            title: '3 Realiseren',
            color: 'text-cyan-400',
            borderColor: 'border-cyan-500/20',
            bullets: [
              'Technische eisen en programma uitwerken',
              'Energiegemeenschap oprichten (CEC/REC)',
              'Aansluiting + GDS/smart grid realiseren',
              'Flex-contracten + EMS in beheer nemen'
            ]
          }
        ]
      },
      planvorming: {
        tagline: 'Integratie van energie-eisen in de vroege ruimtelijke fasen om risico\'s en faalkosten te elimineren.',
        phases: [
          {
            label: 'Pre-initiatieffase',
            title: 'Quickscan energieprofiel + Grip op Locatie check bij verwerving',
            outcome: 'Voorkomt financieel verlies op locaties met netcongestie',
            badgeBg: 'bg-amber-500/10 text-amber-400 border border-amber-500/30',
            arrowColor: 'text-amber-400'
          },
          {
            label: 'SO/VO-fase',
            title: 'Energieconcept laten doorrekenen (MW totaal/piek, teruglevering, BESS, EV-mobiliteit)',
            outcome: 'Lagere infrastructuurkosten door slim ontwerp',
            badgeBg: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30',
            arrowColor: 'text-cyan-400'
          },
          {
            label: 'Omgevingsplan',
            title: 'Trafo-locatie + LS/MS-route vastleggen, netbeheerder aanhaken',
            outcome: 'Minder planrisico, snellere vergunning',
            badgeBg: 'bg-pink-500/10 text-pink-400 border border-pink-500/30',
            arrowColor: 'text-pink-400'
          },
          {
            label: 'Bouwvoorbereiding',
            title: 'Aansluiting aanvraag zodra VO gereed (BAG, huisnummerbesluit)',
            outcome: 'Sluitende bouwplanning — gecontracteerd vermogen is de bottleneck, niet de aansluiting',
            badgeBg: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
            arrowColor: 'text-emerald-400'
          }
        ]
      },
      outroTitle: 'Meer grip op uw energiesysteem?',
      outroText: 'Met onze netbewuste frameworks realiseren we betrouwbare, toekomstbestendige energiesystemen voor elk type gebiedsontwikkeling. Neem vandaag nog contact met ons op om te kijken welk systeemmodel aansluit bij uw project.',
      cta: 'Neem contact op'
    },
    en: {
      title: 'Grid-aware frameworks',
      badge: 'System Models',
      quickscan: {
        tagline: 'From quickscan to operational area.',
        cards: [
          {
            num: '01',
            title: 'Quickscan Grip on Location',
            desc: 'Analysis of the environment, local energy carriers and consumers, spatial constraints. Energy profiling and waste heat. Output: feasibility matrix.',
            duration: '2-4 weeks'
          },
          {
            num: '02',
            title: 'Grid Integration Plan',
            desc: 'Spatial design of the system: generation, storage, distribution and phasing aligned with transport capacity. Including local energy system.',
            duration: '6-10 weeks'
          },
          {
            num: '03',
            title: 'Stakeholder Direction',
            desc: 'Guidance during consultations, municipality-developers-grid operators, decision-making and structuring. Documenting and defining where required.',
            duration: 'Parallel'
          },
          {
            num: '04',
            title: 'Process Direction',
            desc: 'Project management up to the operational phase. Also during EMS configurations, energy system integration and NetZero 2050 strategies.',
            duration: 'Ongoing'
          }
        ]
      },
      routekaart: {
        tagline: 'Step-by-step approach for a reliable local energy system.',
        steps: [
          {
            num: '1',
            title: 'Initiative',
            desc: 'Start with grid impact quickscan + connection, target group, energy profile',
            color: 'border-emerald-500',
            bgNum: 'bg-emerald-500'
          },
          {
            num: '2',
            title: 'Concept',
            desc: 'Energy system incl. storage + mobility feasibility study',
            color: 'border-rose-500',
            bgNum: 'bg-rose-500'
          },
          {
            num: '3',
            title: 'Planning',
            desc: 'Cable routing (smart grid) + transformer & storage in urban design plan',
            color: 'border-pink-500',
            bgNum: 'bg-pink-500'
          },
          {
            num: '4',
            title: 'Design',
            desc: 'Capacity request + congestion mitigating measures',
            color: 'border-amber-500',
            bgNum: 'bg-amber-500'
          },
          {
            num: '5',
            title: 'Realization',
            desc: 'Timely grid connection based on energy profile demand, OVG agreement + house number decision',
            color: 'border-blue-500',
            bgNum: 'bg-blue-500'
          },
          {
            num: '6',
            title: 'Management',
            desc: 'Flex-contract + CO₂ balance 2050',
            color: 'border-cyan-500',
            bgNum: 'bg-cyan-500'
          }
        ]
      },
      locatie: {
        tagline: 'How we transform a location into a reliable and active local energy system with optimal balance.',
        cols: [
          {
            title: '1 Preparation',
            color: 'text-emerald-400',
            borderColor: 'border-emerald-500/20',
            bullets: [
              'Inventory of data sources & energy consumers',
              'Insights into current and future energy targets',
              'Technical, financial, and spatial feasibility analyses',
              'Grid impact quickscan (Grip on Location)'
            ]
          },
          {
            title: '2 Organization',
            color: 'text-pink-400',
            borderColor: 'border-pink-500/20',
            bullets: [
              'Determine baseline principles of energy community',
              'Principal system draft (room for scalability)',
              'Design of efficient local energy networks',
              'Grid capacity alignment and negotiations with grid operator'
            ]
          },
          {
            title: '3 Realization',
            color: 'text-cyan-400',
            borderColor: 'border-cyan-500/20',
            bullets: [
              'Develop technical guidelines and specifications',
              'Establish the actual energy community (CEC/REC)',
              'Implement connection + GDS/smart grid layout',
              'Deploy flex-contracts + live EMS system management'
            ]
          }
        ]
      },
      planvorming: {
        tagline: 'Integration of energy requirements in early spatial phases to fully eliminate risks and failure costs.',
        phases: [
          {
            label: 'Pre-initiative Phase',
            title: 'Quickscan energy profile + Grip on Location check during acquisition',
            outcome: 'Prevents critical financial loss on locations with active grid congestion',
            badgeBg: 'bg-amber-500/10 text-amber-400 border border-amber-500/30',
            arrowColor: 'text-amber-400'
          },
          {
            label: 'Draft/Final Design Phase',
            title: 'Full simulation of energy concept (MW total/peak, feed-in, BESS battery, EV mobility)',
            outcome: 'Ensures lower infrastructure costs through smart upfront design',
            badgeBg: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30',
            arrowColor: 'text-cyan-400'
          },
          {
            label: 'Spatial Plan',
            title: 'Transformer location + LV/MV layout layout, grid operator onboarding',
            outcome: 'Substantially reduces planning risks and speeds up permits',
            badgeBg: 'bg-pink-500/10 text-pink-400 border border-pink-500/30',
            arrowColor: 'text-pink-400'
          },
          {
            label: 'Construction Prep',
            title: 'Connection application launched immediately when design is complete (BAG, house numbers)',
            outcome: 'Airtight build scheduling — contracted grid capacity is the main bottleneck, not physical connection',
            badgeBg: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
            arrowColor: 'text-emerald-400'
          }
        ]
      },
      outroTitle: 'Need a grip on your local energy system?',
      outroText: 'With our grid-aware frameworks, we build resilient, future-proof energy systems matching any area development scenario. Contact us today to evaluate which system model is best suited.',
      cta: 'Get in Touch'
    }
  };

  const currentData = content[language];

  return (
    <section id="netbewust" className="pt-32 pb-24 bg-[#090214] text-white min-h-screen relative overflow-hidden">
      {/* Decorative background effects matching VOVON brand */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#14141d_1px,transparent_1px),linear-gradient(to_bottom,#14141d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-vovon-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-cyan-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vovon-950/80 border border-vovon-800/60 text-vovon-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-vovon-500 animate-pulse" />
              {currentData.badge}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white">
              {currentData.title}
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl font-medium">
              {activeModel === 'quickscan' && currentData.quickscan.tagline}
              {activeModel === 'routekaart' && currentData.routekaart.tagline}
              {activeModel === 'locatie' && currentData.locatie.tagline}
              {activeModel === 'planvorming' && currentData.planvorming.tagline}
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap gap-2.5 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80 max-w-full backdrop-blur-sm self-start md:self-end">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeModel === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveModel(tab.id)}
                  id={`tab-btn-${tab.id}`}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 select-none ${
                    isActive
                      ? 'bg-vovon-600 text-white shadow-[0_4px_20px_rgba(153,51,111,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Multi-pager Views using AnimatePresence */}
        <div className="min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModel}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {/* PAGE 1: Quickscan Werkwijze */}
              {activeModel === 'quickscan' && (
                <div id="model-view-quickscan" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentData.quickscan.cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="group relative bg-[#0f0a1c] border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-vovon-500/50 hover:shadow-[0_8px_30px_rgba(153,51,111,0.12)] hover:-translate-y-1"
                    >
                      <div>
                        <div className="text-4xl sm:text-5xl font-black text-slate-800/60 mb-6 font-mono group-hover:text-vovon-500/20 transition-colors">
                          {card.num}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-vovon-400 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                          {card.desc}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-vovon-500" />
                        {card.duration}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* PAGE 2: De Routekaart (6 Stappen) */}
              {activeModel === 'routekaart' && (
                <div id="model-view-routekaart" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentData.routekaart.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`relative bg-[#0f0a1c] border-t-4 ${step.color} border-l border-r border-b border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] hover:-translate-y-1`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="text-lg sm:text-xl font-extrabold text-white">
                          {step.title}
                        </h3>
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full ${step.bgNum} text-white font-black text-sm`}>
                          {step.num}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* PAGE 3: Locatie naar Systeem */}
              {activeModel === 'locatie' && (
                <div id="model-view-locatie" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {currentData.locatie.cols.map((col, idx) => (
                    <div
                      key={idx}
                      className={`bg-[#0f0a1c] border border-slate-800/80 ${col.borderColor} rounded-2xl p-8 flex flex-col`}
                    >
                      <h3 className={`text-xl font-extrabold mb-6 flex items-center gap-3 ${col.color}`}>
                        <span className="w-2.5 h-2.5 rounded-full bg-current" />
                        {col.title}
                      </h3>
                      <ul className="space-y-4 flex-1">
                        {col.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${col.color} opacity-80`} />
                            <span className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* PAGE 4: Voor Planvorming */}
              {activeModel === 'planvorming' && (
                <div id="model-view-planvorming" className="space-y-4">
                  {currentData.planvorming.phases.map((phase, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0f0a1c] border border-slate-800/60 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-slate-700/80 transition-all duration-300"
                    >
                      <div className="flex-1">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold tracking-wide mb-3 ${phase.badgeBg}`}>
                          {phase.label}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                          {phase.title}
                        </h4>
                      </div>
                      
                      {/* Arrow indication to make it clear what the benefit/outcome is */}
                      <div className="flex items-start gap-3 bg-slate-950/65 border border-slate-800/80 rounded-xl px-5 py-4 max-w-full md:max-w-md">
                        <div className={`mt-1 shrink-0 ${phase.arrowColor}`}>
                          <ArrowRight className="w-5 h-5 hidden md:block" />
                          <ChevronRight className="w-5 h-5 md:hidden" />
                        </div>
                        <p className="text-slate-300 text-xs sm:text-sm font-semibold leading-relaxed">
                          {phase.outcome}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contact/CTA section inside Netbewust */}
        <div className="mt-20 text-center bg-gradient-to-br from-[#120422] to-[#0c001c] rounded-3xl shadow-xl border border-vovon-800/45 p-8 sm:p-12 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-vovon-600/5 to-transparent pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 relative z-10">
            {currentData.outroTitle}
          </h3>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed relative z-10">
            {currentData.outroText}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-vovon-600 hover:bg-vovon-500 transition-all shadow-[0_4px_20px_0_rgba(153,51,111,0.45)] hover:shadow-[0_6px_25px_rgba(153,51,111,0.35)] hover:-translate-y-0.5 relative z-10"
          >
            {currentData.cta}
          </a>
        </div>

      </div>
    </section>
  );
}
