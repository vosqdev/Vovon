import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translations } from '../translations';
import NewsModal from './NewsModal';

interface NewsProps {
  language: Language;
}

type FilterType = 'all' | 'news' | 'article' | 'insight';

interface NewsItem {
  id: string;
  type: 'news' | 'article' | 'insight';
  date: string;
  title: string;
  image: string;
  featured?: boolean;
  content?: string[];
}

const dummyItems: NewsItem[] = [
  {
    id: '6',
    type: 'insight',
    date: '15 mei 2026',
    title: 'Samenwerken aan de transities — Systeembewust',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: [
      'De energietransitie, woningbouwopgave en digitale transformatie komen steeds nadrukkelijker samen. Netcongestie, verduurzaming, elektrificatie, mobiliteit en gebiedsontwikkeling zijn geen losse dossiers meer. Ze vormen één systeem.',
      'Met Systeembewust werkt VOVON aan nieuwe manieren om deze opgaven integraal te benaderen. Niet vanuit één techniek, één beleidsveld of één belang, maar vanuit de samenhang tussen ruimte, energie, data, vastgoed en gebruik.',
      'Of je nu gemeente, netbeheerder, ontwikkelaar, vastgoedeigenaar, energiepartij, fabrikant, startup of kennisorganisatie bent: de volgende stap vraagt om samenwerking. Alleen door vroegtijdig data, ontwerp, beleid, infrastructuur en investeringskracht bij elkaar te brengen, kunnen we plannen ontwikkelen die technisch haalbaar, maatschappelijk waardevol en toekomstbestendig zijn.',
      'Digitale innovatie speelt daarin een sleutelrol. Denk aan gebiedsdata, energieprofielen, flexibiliteitsmodellen, digitale quickscans, slimme sturing en scenario-ontwikkeling. Niet als doel op zich, maar als middel om betere keuzes te maken vóórdat projecten vastlopen.',
      'Systeembewust geeft een beeld van de transitie die er zijn en aan zitten te komen. Van abstracte transitie naar concrete gebiedsontwikkeling.',
      'Want de opgaven van morgen vragen om samenwerking vandaag.',
      'Systeembewust ontwikkelen is niet harder duwen op één oplossing, maar slimmer sturen op het geheel.',
      'Kijk voor meer informatie: www.systeembewust.nl'
    ]
  },
  {
    id: '5',
    type: 'news',
    date: '13 mei 2026',
    title: 'Slimme buurtenergie, Lelystad',
    image: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: true,
    content: [
      'Binnen Netgenoten een buurtschap aanpak, werken diverse partijen aan gebiedsontwikkelingen waarin wonen, mobiliteit, levensonderhoud en energie niet langer los van elkaar worden bekeken. Namens Circul8 Development B.V. is een integrale benadering en ontwikkelconcept uitgewerkt voor netbewuste nieuwbouw en lokale energie-flexibiliteit.',
      'De uitdaging is duidelijk: op steeds meer plekken vormt netcongestie een directe belemmering voor woningbouw, bedrijvigheid en voorzieningen. Door al in de planvorming rekening te houden met lokale opwek, opslag, slimme laadinfrastructuur, gebouwgebonden energiesturing en collectieve flexibiliteit, ontstaat er weer ontwikkelruimte.',
      'Een wijkenergiemanagementsysteem, ook wel WijkEMS, kan hierin een sleutelrol spelen. Zo’n systeem verbindt woningen, laadpunten, batterijen, warmtepompen, zonnepanelen en eventueel deelmobiliteit tot één slim lokaal energiesysteem. Daarmee kan energie tijdelijk worden opgeslagen, verbruikt of teruggeleverd op momenten dat dit technisch en economisch het beste past.',
      'Netgenoten ziet dit niet alleen als een technische oplossing, maar vooral als een nieuwe manier van samenwerken. Gemeenten, ontwikkelaars-bouwers, leveranciers, supermarkt, netbeheerders, energiebedrijven, vastgoedeigenaren en bewoners moeten eerder in het proces met elkaar bepalen welke prestatie, flexibiliteit en leveringszekerheid haalbaar en wenselijk zijn.',
      'Daarbij blijft één uitgangspunt belangrijk: slimme sturing mag niet ten koste gaan van comfort, betaalbaarheid of gebruiksgemak. Maar ook leveringszekerheid en energiegemeenschap met de juiste dragers en vragers is belangrijk. Bewoners en gebruikers moeten kunnen profiteren van een toekomstbestendig energiesysteem, zonder dat zij het gevoel krijgen onderdeel te worden van een technisch experiment.',
      'Zo ontstaat een nieuwe standaard voor gebiedsontwikkeling: niet bouwen ondanks netcongestie, maar ontwikkelen mét het energiesysteem als volwaardig onderdeel van het plan.',
      'Netgenoten: samen bouwen aan gebieden die wél aangesloten kunnen worden. Daarvoor is ketensamenwerking essentieel kijk voor meer in formatie www.netgenoten.nl.'
    ]
  },
  {
    id: '4',
    type: 'insight',
    date: '1 mei 2026',
    title: 'Oprichting van VOVON: We zijn live!',
    image: 'https://www.image2url.com/r2/default/images/1778854063934-d1d9a761-16ad-4b8c-a9da-70fd5fb942fd.jpg',
    content: [
      'Met VOVON Development zetten wij sinds 1 mei 2026 een volgende stap in het verder vormgeven van integrale ontwikkeling en strategische projectrealisatie. Vanuit een scherpe visie op ruimte, vastgoed, energie en innovatie richt VOVON Development zich op projecten waarin ontwikkeling, uitvoering en toekomstbestendigheid samenkomen.',
      'De oprichting markeert niet alleen een formeel moment, maar vooral ook de start van een nieuwe fase. Een fase waarin wij samen met partners zoals bouwbedrijf Kreeft uit Ede en Bramer uit Vriezenveen maar ook grondeigenaren en eindgebruikers werken aan haalbare, onderscheidende en duurzame ontwikkelingen. Projecten waarin niet alleen wordt gebouwd aan vastgoed, maar ook aan sterke concepten, slimme samenwerking en blijvende meerwaarde voor omgeving en maatschappij.',
      'We staan voor een pragmatische en ondernemende aanpak. Dicht op het proces, scherp op kansen, met oog voor complexiteit én uitvoerbaarheid. Juist in een tijd waarin ruimte, energie, mobiliteit en leefkwaliteit steeds sterker met elkaar verbonden zijn, geloven wij in ontwikkelkracht die verder kijkt dan de traditionele opgave.',
      'Wij kijken uit naar de samenwerking met bestaande en nieuwe relaties en houden u de komende periode graag op de hoogte van de eerste projecten en ontwikkelingen.'
    ]
  }
];

const News = ({ language }: NewsProps) => {
  const t = translations[language].news;
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null);

  const filteredItems = activeFilter === 'all' 
    ? dummyItems 
    : dummyItems.filter(item => item.type === activeFilter);

  // In this demo, we'll try to keep the featured layout if there's at least one item, 
  // treating the first item conceptually as "featured" (large vertical), and the rest as standard horizontal.
  
  const featuredItem = filteredItems.length > 0 ? filteredItems[0] : null;
  const regularItems = filteredItems.length > 1 ? filteredItems.slice(1) : [];

  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
        </div>

        {/* Filters */}
        <div className="flex justify-center space-x-6 mb-16 border-b border-transparent">
          {(['all', 'news', 'article', 'insight'] as FilterType[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`pb-2 px-1 text-lg font-bold transition-colors border-b-2 ${
                activeFilter === filter
                  ? 'border-vovon-600 text-vovon-600'
                  : 'border-transparent text-vovon-600 hover:text-vovon-700'
              }`}
            >
              {t.filters[filter]}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Left Column: Featured Item */}
            {featuredItem && (
              <div 
                className="bg-slate-50 relative group cursor-pointer overflow-hidden flex flex-col h-full"
                onClick={() => setSelectedItem(featuredItem)}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img 
                    src={featuredItem.image} 
                    alt={featuredItem.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col bg-slate-50">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-white px-3 py-1 text-sm font-bold text-slate-900">
                      {t.filters[featuredItem.type === 'news' ? 'news' : featuredItem.type === 'article' ? 'article' : 'insight']}
                    </span>
                    <span className="text-sm font-bold text-slate-900">{featuredItem.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                    {featuredItem.title}
                  </h3>
                </div>
              </div>
            )}

             {/* Right Column: Regular Items */}
             <div className="flex flex-col space-y-8">
              {regularItems.map(item => (
                <div 
                  key={item.id} 
                  className="bg-slate-50 flex flex-col sm:flex-row cursor-pointer group h-full"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="p-8 sm:w-1/2 flex flex-col bg-slate-50">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-white px-3 py-1 text-sm font-bold text-slate-900">
                        {t.filters[item.type === 'news' ? 'news' : item.type === 'article' ? 'article' : 'insight']}
                      </span>
                      <span className="text-sm font-bold text-slate-900">{item.date}</span>
                    </div>
                    <h3 className="text-2xl sm:text-xl md:text-2xl font-extrabold text-slate-900 leading-tight mb-8">
                      {item.title}
                    </h3>
                    <div className="mt-auto">
                      <span className="inline-block bg-vovon-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-vovon-700 transition-colors">
                        {t.readMore}
                      </span>
                    </div>
                  </div>
                  <div className="sm:w-1/2 relative overflow-hidden h-64 sm:h-auto">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
              {regularItems.length === 0 && (
                <div className="bg-slate-50 p-8 flex items-center justify-center text-slate-500">
                   Geen items gevonden voor dit filter.
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <NewsModal 
        isOpen={selectedItem !== null} 
        onClose={() => setSelectedItem(null)} 
        item={selectedItem ? {
          ...selectedItem,
          type: t.filters[selectedItem.type === 'news' ? 'news' : selectedItem.type === 'article' ? 'article' : 'insight'] as string
        } : null}
      />
    </section>
  );
};

export default News;
