import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Building2,
  Zap,
  Users,
  GitMerge,
  Trees,
  ArrowRight,
  X,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { Language, translations } from '../translations';

interface ServicesProps {
  language: Language;
}

interface ServiceDetail {
  number: string;
  title: string;
  description: string;
  focusPoints: string[];
  deliverables: string[];
}

const serviceDetailsNL: Record<number, { focusPoints: string[]; deliverables: string[] }> = {
  0: {
    focusPoints: [
      'Haalbaarheids- en locatieanalyses met benchmarkdata',
      'Onafhankelijke second opinions voor besturen en directies',
      'Risico- en scenariomodellering bij complexe gebiedsopgaven',
      'Substantiëring van investerings- en ontwikkelbesluiten'
    ],
    deliverables: [
      'Strategisch adviesrapport & businesscase',
      'Locatiescan & ruimtelijke programmaschets',
      'Risico- en kansenmatrix'
    ]
  },
  1: {
    focusPoints: [
      'Van eerste ruimtelijke initiatieven tot sleutelklare oplevering',
      'Sturing op programma, budget, planning en ruimtelijke kwaliteit',
      'Selectie en contractering van architecten, adviseurs en aannemers',
      'Vergunningentrajecten en omgevingsrechtelijke procedures'
    ],
    deliverables: [
      'Integraal project- en ontwikkelplan',
      'Grond- en vastgoedexploitatie (GREX/VASTEX)',
      'Contractvorming en uitvoeringsbegeleiding'
    ]
  },
  2: {
    focusPoints: [
      'Koppeling van vastgoedontwikkeling aan NetZero 2050 doelstellingen',
      'Inpassing van batterijopslagsystemen (BESS) en smart energy hubs',
      'Aanpak van netcongestie via slimme energiesturing en lokale afstemming',
      'Implementatie van duurzame laadinfrastructuur en mobiliteitshubs'
    ],
    deliverables: [
      'Energieconcept & NetZero routekaart',
      'Netcongestie-analyse & batterijinpassing',
      'Businesscase lokale energie-uitwisseling'
    ]
  },
  3: {
    focusPoints: [
      'Tijdelijke leidinggevende slagkracht op directie- en managementniveau',
      'Vlottrekken van vastgelopen ruimtelijke dossiers of stagnerende projecten',
      'Herstructurering en coaching van ontwikkel- en vastgoedteams',
      'Begeleiding van complexe bestuurlijke en ambtelijke transitiefases'
    ],
    deliverables: [
      'Quickscan projectstatus & herstelplan',
      'Interim directievoering & programmamanagement',
      'Borging van continuïteit en voortgang'
    ]
  },
  4: {
    focusPoints: [
      'Procesregie tussen gemeenten, ontwikkelaars, corporaties en netbeheerders',
      'Smeden van publiek-private samenwerkingsovereenkomsten (PPS/Anterieur)',
      'Bestuurlijke afstemming en opbouwen van breed maatschappelijk draagvlak',
      'Sleutelpositie als onafhankelijk verbinder bij tegenstrijdige belangen'
    ],
    deliverables: [
      'Samenwerkingsagenda & besluitvormingskader',
      'Anterieure overeenkomsten & afsprakenkader',
      'Stakeholdermanagement & procesbegeleiding'
    ]
  },
  5: {
    focusPoints: [
      'Integrale visievorming voor gemengde woon- en werklocaties',
      'Harmonisatie van woningbouw, groenstructuren en maatschappelijke functies',
      'Koppeling van gebiedstransformaties aan circulaire infra en mobiliteit',
      'Borging van langdurige ruimtelijke kwaliteit en leefbaarheid'
    ],
    deliverables: [
      'Gebiedsvisie & stedenbouwkundig kader',
      'Ruimtelijk-functioneel programma van eisen',
      'Fasering- en realisatiestrategie'
    ]
  }
};

const serviceDetailsEN: Record<number, { focusPoints: string[]; deliverables: string[] }> = {
  0: {
    focusPoints: [
      'Feasibility and spatial site analyses backed by benchmark intelligence',
      'Independent second opinions for executive boards and investors',
      'Risk and scenario modeling for complex spatial challenges',
      'Robust substantiation of development and capital decisions'
    ],
    deliverables: [
      'Strategic advisory dossier & business case',
      'Site feasibility scan & spatial program draft',
      'Risk & opportunity matrix'
    ]
  },
  1: {
    focusPoints: [
      'End-to-end steering from spatial initiative to turnkey completion',
      'Control over program, budget, timeline, and architectural quality',
      'Procurement and contracting of architects, consultants, and contractors',
      'Zoning plan modifications and statutory permitting procedures'
    ],
    deliverables: [
      'Integral development plan & roadmap',
      'Financial model & estate balance sheet',
      'Contractual frameworks and execution oversight'
    ]
  },
  2: {
    focusPoints: [
      'Aligning property portfolios with NetZero 2050 ambitions',
      'Integration of battery energy storage (BESS) and private energy hubs',
      'Overcoming grid congestion via smart load balancing and microgrids',
      'Rollout of sustainable EV charging infrastructure and mobility hubs'
    ],
    deliverables: [
      'Energy masterplan & NetZero roadmap',
      'Grid congestion assessment & BESS integration',
      'Local energy sharing business case'
    ]
  },
  3: {
    focusPoints: [
      'Immediate leadership reinforcement at director and management levels',
      'Unlocking stalled spatial negotiations and revitalizing dormant projects',
      'Structuring and coaching multidisciplinary development teams',
      'Managing intricate political and administrative transition phases'
    ],
    deliverables: [
      'Project turnaround assessment & action plan',
      'Interim management & program direction',
      'Secured continuity and operational momentum'
    ]
  },
  4: {
    focusPoints: [
      'Multi-party alignment across municipalities, developers, and grid operators',
      'Structuring public-private partnership (PPP) and anterior agreements',
      'Building public and political consensus for high-impact schemes',
      'Acting as a trusted, impartial broker in multi-stakeholder tensions'
    ],
    deliverables: [
      'Strategic alignment charter & governance model',
      'Anterior agreements & partnership blueprints',
      'Stakeholder mediation and process management'
    ]
  },
  5: {
    focusPoints: [
      'Holistic masterplanning for mixed-use residential and commercial zones',
      'Harmonizing housing volume, public greenery, and social infrastructure',
      'Connecting area transformations with circular energy systems',
      'Securing enduring spatial value and high livability benchmarks'
    ],
    deliverables: [
      'Spatial area masterplan & urban framework',
      'Functional program requirements',
      'Phased realization and infrastructure roadmap'
    ]
  }
};

const icons = [Compass, Building2, Zap, Users, GitMerge, Trees];

const Services = ({ language }: ServicesProps) => {
  const t = translations[language].services;
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);

  const services = t.items.map((item, index) => ({
    ...item,
    icon: icons[index] || Building2
  }));

  const handleOpenDetail = (index: number) => {
    setSelectedServiceIndex(index);
  };

  const handleCloseDetail = () => {
    setSelectedServiceIndex(null);
  };

  const handleDiscussService = (serviceTitle: string) => {
    handleCloseDetail();
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const activeDetails =
    selectedServiceIndex !== null
      ? language === 'nl'
        ? serviceDetailsNL[selectedServiceIndex]
        : serviceDetailsEN[selectedServiceIndex]
      : null;

  return (
    <section id="services" className="relative bg-[#faf9f6] border-y border-slate-200/60 overflow-hidden">
      {/* Background Billboard Hero Banner (Image 2 as background for text from Image 1) */}
      <div className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 lg:py-32 border-b border-slate-800">
        {/* Background Image with Dark Vignette & Color Grading */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.image2url.com/r2/default/images/1788463202989-92b16808-dc29-4225-8d51-61c6ca688e6b.png"
            alt="VOVON - Onze Diensten"
            className="w-full h-full object-cover object-center scale-102"
          />
          {/* Subtle Gradient Overlay for Balanced Visibility and Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-slate-950/20" />
          <div className="absolute inset-0 bg-slate-950/25" />
        </div>

        {/* Text Content Overlay (from Image 1) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Small Category Eyebrow with Line */}
            <div className="inline-flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-6 h-0.5 bg-vovon-400"></span>
              <span className="text-vovon-400 font-bold uppercase tracking-widest text-xs sm:text-sm drop-shadow-sm">
                {t.label}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-5 sm:mb-6 drop-shadow-md">
              {t.title}
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-100 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Editorial Grid: 3 columns x 2 rows with fine architectural divider lines */}
        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x lg:divide-x divide-slate-200/80">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                language={language}
                exploreText={t.explore || (language === 'nl' ? 'Ontdek dienst' : 'Explore service')}
                onOpen={() => handleOpenDetail(index)}
              />
            ))}
          </div>

          {/* Horizontal Mid Divider for Desktop */}
          <div className="hidden lg:block w-full h-px bg-slate-200/80"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x lg:divide-x divide-slate-200/80 border-t border-slate-200/80 lg:border-t-0">
            {services.slice(3, 6).map((service, idx) => {
              const index = idx + 3;
              return (
                <ServiceCard
                  key={index}
                  service={service}
                  index={index}
                  language={language}
                  exploreText={t.explore || (language === 'nl' ? 'Ontdek dienst' : 'Explore service')}
                  onOpen={() => handleOpenDetail(index)}
                />
              );
            })}
          </div>
        </div>

        {/* Subtle Bottom Trust Note */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500 font-medium px-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>
              {language === 'nl'
                ? 'Actief in heel Nederland voor gemeenten, ontwikkelaars en zorgorganisaties'
                : 'Active throughout the Netherlands for municipalities, developers, and healthcare'}
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-slate-800 hover:text-vovon-600 transition-colors"
          >
            <span>{language === 'nl' ? 'Direct vrijblijvend overleggen' : 'Inquire without obligation'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedServiceIndex !== null && activeDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseDetail}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-vovon-50 border border-vovon-100 text-vovon-600 flex items-center justify-center shrink-0">
                    {(() => {
                      const IconComponent = services[selectedServiceIndex].icon;
                      return <IconComponent className="w-5 h-5" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-vovon-600 block">
                      {language === 'nl' ? 'Dienst' : 'Service'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {services[selectedServiceIndex].title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={handleCloseDetail}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                  aria-label="Sluit dialoog"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="px-6 sm:px-8 py-6 overflow-y-auto space-y-6 text-sm text-slate-600">
                <p className="text-base text-slate-700 leading-relaxed font-medium">
                  {services[selectedServiceIndex].description}
                </p>

                {/* Focus Points */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vovon-600" />
                    <span>{language === 'nl' ? 'Kernactiviteiten & Aanpak' : 'Key Activities & Focus'}</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {activeDetails.focusPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-vovon-600 mt-2 shrink-0"></span>
                        <span className="text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    {language === 'nl' ? 'Typische Resultaten & Deliverables' : 'Typical Deliverables'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {activeDetails.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="bg-white p-3 rounded-lg border border-slate-200/70 text-xs font-medium text-slate-800 shadow-2xs"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-500 text-center sm:text-left">
                  {language === 'nl'
                    ? 'Benieuwd wat VOVON voor uw organisatie kan betekenen?'
                    : 'Curious what VOVON can achieve for your organization?'}
                </div>
                <button
                  onClick={() => handleDiscussService(services[selectedServiceIndex].title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-vovon-600 text-white rounded-xl text-xs font-bold tracking-tight transition-colors shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{language === 'nl' ? 'Bespreek deze opgave' : 'Discuss this service'}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: any;
  };
  index: number;
  language: Language;
  exploreText: string;
  onOpen: () => void;
}

function ServiceCard({ service, index, language, exploreText, onOpen }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      onClick={onOpen}
      className="group relative p-7 sm:p-8 lg:p-10 flex flex-col justify-between bg-white hover:bg-[#fffcfd] transition-colors duration-200 cursor-pointer"
    >
      <div>
        {/* Top bar: Icon */}
        <div className="w-11 h-11 rounded-xl bg-vovon-50 border border-vovon-100/80 flex items-center justify-center text-vovon-600 group-hover:bg-vovon-600 group-hover:text-white transition-all duration-200 shadow-2xs mb-6">
          <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-vovon-700 transition-colors">
          {service.title}
        </h3>

        {/* Shortened Editorial Description */}
        <p className="text-sm text-slate-600 leading-relaxed font-normal line-clamp-4">
          {service.description}
        </p>
      </div>

      {/* Subtle "Ontdek →" Interaction */}
      <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 group-hover:text-vovon-600 transition-colors">
          <span>{exploreText}</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </div>
    </motion.div>
  );
}

export default Services;
