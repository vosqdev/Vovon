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
    id: '11',
    type: 'article',
    date: '29 juli 2026',
    title: 'Artikel: Voorrang op het stroomnet — Wat er tot 1 januari 2027 gebeurt met netcapaciteit voor woningbouw',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: true,
    content: [
      'Netcapaciteit is in korte tijd van een technisch aansluitvraagstuk veranderd in een verdelingsvraagstuk met een juridische en bestuurlijke kern. Sinds 1 januari 2026 geldt het ACM-prioriteringskader; sinds 1 juli 2026 staan groot- en kleinverbruik in gebieden met netcongestie in één gezamenlijke wachtrij en is de reservering van capaciteit voor toekomstige woningbouw vervallen. Wie voorrang wil, moet die actief aanvragen en onderbouwen.',
      'Daarmee verschuift de regie. Niet de ontwikkelaar, maar de gemeente is vanaf 1 oktober 2026 de formele indiener van transport- en prioriteringsverzoeken voor woningbouw, collectieve woonvormen en onderwijshuisvesting. De gemeente bepaalt via een volgordelijst welke projecten in welke volgorde worden ingediend.',
      'De periode tot 1 januari 2027 is een eenmalig voorrangsvenster. Projecten die in die periode niet zijn aangevraagd én geprioriteerd, concurreren daarna op een volle markt met alle overige aanvragers, in volgorde van binnenkomst. Vovon Development beschrijft in dit artikel het nieuwe stelsel, het krappe tijdpad, de juridische en financiële risico’s, en een beproefde werkwijze om tijdig tot een uitvoerbaar én juridisch houdbaar besluit te komen.'
    ]
  },
  {
    id: '10',
    type: 'news',
    date: '7 juli 2026',
    title: 'Fijne zomer! (Vakantiesluiting 2026)',
    image: 'https://www.image2url.com/r2/default/images/1783491443749-d055237e-09ab-4ce4-affb-cbda8c4f3de0.png',
    featured: true,
    content: [
      'Fijne zomer!',
      'Maandag 27 juli tot en met vrijdag 14 augustus genieten wij van onze vakantie.',
      'Gedurende deze periode is het kantoor van VOVON Development gesloten. Vanaf maandag 17 augustus staan wij weer volledig voor u klaar om samen met u te werken aan netbewuste gebiedsontwikkeling, energiesystemen en projectrealisatie.',
      'Wij wensen al onze partners, opdrachtgevers en relaties een fantastische, zonnige en ontspannen zomerperiode toe!'
    ]
  },
  {
    id: '8',
    type: 'news',
    date: '8 juni 2026',
    title: 'Quickscan Energievraag: Breng direct uw capaciteitbehoefte in kaart',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: true,
    content: [
      'Heeft u te maken met netcongestie, zoekt u naar een energieoplossing, of wilt u uw toekomstige energiebehoefte integraal in kaart brengen? VOVON helpt u graag op weg.',
      'Met een Quickscan brengen we samen de belangrijkste energie-indicatoren van uw huidige situatie of uw geplande ontwikkeling in kaart. Denk hierbij aan uw gewenste aansluitwaarde, geplande laadinfrastructuur, mogelijkheden voor lokale opwek en de mate van flexibiliteit in uw dagelijkse bedrijfsvoering.',
      'Na ontvangst van de gegevens kijken we snel waar de kansen en knelpunten liggen voor uw project of locatie. Wij nemen vervolgens zo snel mogelijk contact met u op voor meer informatie indien nog om te komen tot een concreet advies.',
      'U kunt het formulier hieronder direct invullen. Mocht u vragen hebben of uw project liever direct persoonlijk doorspreken, aarzel dan niet om contact met ons op te nemen.'
    ]
  },
  {
    id: '7',
    type: 'news',
    date: '7 juni 2026',
    title: 'Netcongestie, Gebiedsontwikkeling en Woningbouw: Een Systeembewuste Aanpak',
    image: 'https://cdn.phototourl.com/free/2026-06-07-454225b0-f75d-43bf-8b97-31c2861db649.jpg',
    content: [
      'De druk op onze fysieke ruimte en netinfrastructuur bereikt een kookpunt. Netcongestie is niet langer een theoretisch risico, maar een dagelijkse realiteit die de woningbouwopgave en de verduurzaming van Nederland op veel plekken rechtstreeks remt of zelfs stillegt.',
      'Om deze impasse te doorbreken, moeten we de manier waarop we gebieden ontwikkelen fundamenteel herontwerpen. Wonen, mobiliteit, levensonderhoud en energie kunnen niet langer onafhankelijk van elkaar worden gepland. Traditionele silo’s moeten plaatsmaken voor een geïntegreerde, systeembewuste benadering.',
      'Bij VOVON Development geloven we dat netcongestie juist de katalysator moet zijn voor slimmere gebiedsontwikkelingen. Door het lokale energiesysteem vanaf de allereerste planfase integraal mee te ontwerpen – met slimme sturing, lokale opwek, batterijopslag en flexibele energietarieven – ontstaat er weer reële ontwikkelruimte op plekken waar het net zogenaamd ‘vol’ zit.',
      'Dit vraagt om een vernieuwde en gedurfde ketensamenwerking. Gemeenten, netbeheerders, ontwikkelaars, grondeigenaren, energiecoöperaties en bewoners moeten van begin af aan met elkaar om de tafel. Alleen door data, investeringskracht en visie samen te brengen, bouwen we aan gebieden die niet alleen toekomstbestendig zijn, maar ook daadwerkelijk aangesloten kunnen worden.',
      'Deel dit bericht en discussieer mee op LinkedIn: www.linkedin.com/posts/patrick-vos-49527726_netcongestie-gebiedsontwikkeling-woningbouw-share-7465626938246742016-LdAo'
    ]
  },
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
    <section id="news" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-transparent">
          {(['all', 'news', 'article', 'insight'] as FilterType[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all relative cursor-pointer ${
                activeFilter === filter
                  ? 'bg-vovon-600 text-white shadow-md shadow-vovon-600/10 hover:bg-vovon-700'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/60 hover:text-slate-950'
              }`}
            >
              {t.filters[filter]}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch"
          >
            {/* Left Column: Featured Item */}
            {featuredItem && (
              <div 
                className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-2xl relative group cursor-pointer overflow-hidden flex flex-col h-full hover:shadow-lg hover:border-vovon-200 transition-all duration-300"
                onClick={() => setSelectedItem(featuredItem)}
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-200 border-b border-slate-100">
                  <img 
                    src={featuredItem.image} 
                    alt={featuredItem.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold tracking-wider uppercase border shadow-sm ${
                      featuredItem.type === 'news' 
                        ? 'bg-amber-50 text-amber-800 border-amber-200/70' 
                        : featuredItem.type === 'insight' 
                        ? 'bg-emerald-50 text-emerald-850 border-emerald-200/70' 
                        : 'bg-sky-50 text-sky-800 border-sky-200/70'
                    }`}>
                      {t.filters[featuredItem.type === 'news' ? 'news' : featuredItem.type === 'article' ? 'article' : 'insight']}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between bg-slate-50">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 mb-2">{featuredItem.date}</div>
                    <h3 className="text-base md:text-lg font-extrabold text-slate-900 leading-snug group-hover:text-vovon-600 transition-colors">
                      {featuredItem.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-xs font-extrabold text-vovon-600 group-hover:text-vovon-700 transition-colors">
                      <span>{t.readMore}</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Right Column: Regular Items */}
            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {regularItems.map(item => (
                <div 
                  key={item.id} 
                  className="bg-slate-50 border border-slate-200/60 rounded-2xl flex flex-col sm:flex-row cursor-pointer overflow-hidden group hover:shadow-lg hover:border-vovon-205 transition-all duration-300"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="p-4 sm:w-[70%] flex flex-col justify-between bg-slate-50">
                    <div>
                      <div className="flex items-center space-x-2.5 mb-2">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-extrabold tracking-wider uppercase border shadow-sm ${
                          item.type === 'news' 
                            ? 'bg-amber-50 text-amber-850 border-amber-200/50' 
                            : item.type === 'insight' 
                            ? 'bg-emerald-50 text-emerald-850 border-emerald-200/50' 
                            : 'bg-sky-50 text-sky-850 border-sky-200/50'
                        }`}>
                          {t.filters[item.type === 'news' ? 'news' : item.type === 'article' ? 'article' : 'insight']}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">{item.date}</span>
                      </div>
                      <h3 className="text-[10.5pt] font-extrabold text-slate-900 leading-snug group-hover:text-vovon-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <span className="inline-flex items-center gap-1 text-[10.5pt] font-extrabold text-vovon-600 group-hover:text-vovon-700 transition-colors">
                        <span>{t.readMore}</span>
                        <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="sm:w-[30%] relative overflow-hidden h-28 sm:h-auto bg-slate-200 border-l border-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>
                </div>
              ))}
              {regularItems.length === 0 && (
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center text-xs font-semibold text-slate-500">
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
