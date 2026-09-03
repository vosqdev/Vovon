import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Clock, Sparkles, Plus, X, UploadCloud, FileText } from 'lucide-react';
import { collection, getDocs, setDoc, doc, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Language, translations } from '../translations';
import NewsModal from './NewsModal';
import ImageUploader from './media/ImageUploader';
import ResponsiveImage from './media/ResponsiveImage';

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
  thumbnailUrl?: string;
  mediumUrl?: string;
  fullUrl?: string;
  featured?: boolean;
  content?: string[];
  readTime?: string;
  lead?: string;
}

const dummyItems: NewsItem[] = [
  {
    id: '12',
    type: 'article',
    date: '30 augustus 2026',
    readTime: '5 min leestijd',
    title: 'Werkwijze Eerder Aanvragen oktober 2026 — Tijdsblokkenschema & Procedure',
    image: 'https://www.image2url.com/r2/default/images/1788094970320-07a4e3d3-2c50-4df1-9f24-c0fdef7a72da.jpg',
    featured: true,
    lead: 'Vanaf 1 oktober 2026 start de landelijke werkwijze Eerder Aanvragen voor gemeenten. Lees hoe het tijdsblokkenschema per startbouwjaar werkt, hoe aanvragen via Mijnaansluiting.nl verlopen en wat de vervolgstappen zijn.',
    content: [
      'De werkwijze Eerder Aanvragen start op 1 oktober 2026. Omdat veel gemeenten tegelijkertijd aanvragen willen indienen, worden de aanvragen bij de start eenmalig gecoördineerd ingediend. Hiervoor zijn in oktober verschillende tijdsblokken afgesproken.',
      'Het tijdsblokkenschema geldt alleen voor de start van Eerder Aanvragen. Eerder Aanvragen zelf is een blijvende werkwijze. Na afloop van het tijdsblokkenschema kunnen gemeenten vanaf 23 oktober doorlopend transportcapaciteit aanvragen voor nieuwe projecten, zodra voldoende projectinformatie beschikbaar is.',
      'De tijdsblokken zijn bedoeld om te voorkomen dat alle gemeenten hun aanvragen op hetzelfde moment bij de netbeheerder indienen. Projecten die eerder tot uitvoering komen, kunnen eerder worden ingediend. Daarna volgen projecten die verder in de toekomst liggen. De planning loopt van 1 tot en met 22 oktober (startbouw 2028 t/m 2035).',
      'Aanvragen verlopen via Mijnaansluiting.nl. Gemeenten moeten vóór 1 oktober een zakelijk account en gebruikersgroep met de juiste rechten hebben ingericht.',
      'Let op: Eerder Aanvragen is géén garantie op transportcapaciteit. Ook met een tijdige en complete aanvraag is niet gegarandeerd dat het project op de gewenste datum capaciteit krijgt.',
      'Bronvermelding: VNG.nl (Vereniging van Nederlandse Gemeenten).'
    ]
  },
  {
    id: '11',
    type: 'article',
    date: '29 juli 2026',
    readTime: '6 min leestijd',
    title: 'Voorrang op het stroomnet — Wat er tot 1 januari 2027 gebeurt met netcapaciteit voor woningbouw',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=85',
    featured: true,
    lead: 'Netcapaciteit is verschoven van een technisch aansluitvraagstuk naar een prioritair verdelingsvraagstuk met stevige juridische en bestuurlijke consequenties voor gemeenten en ontwikkelaars.',
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
    readTime: '1 min',
    title: 'Fijne zomer! (Vakantiesluiting 2026)',
    image: 'https://www.image2url.com/r2/default/images/1783491443749-d055237e-09ab-4ce4-affb-cbda8c4f3de0.png',
    featured: true,
    lead: 'Gedurende de zomerperiode is ons kantoor tijdelijk gesloten van 27 juli t/m 14 augustus. Vanaf 17 augustus staan we weer vol energie voor u klaar.',
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
    readTime: '3 min',
    title: 'Quickscan Energievraag: Breng direct uw capaciteitbehoefte in kaart',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: true,
    lead: 'Samen de belangrijkste energie-indicatoren van uw geplande vastgoedontwikkeling of huidige portefeuille inzichtelijk maken met een gestructureerde quickscan.',
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
    readTime: '4 min',
    title: 'Netcongestie, Gebiedsontwikkeling en Woningbouw: Een Systeembewuste Aanpak',
    image: 'https://cdn.phototourl.com/free/2026-06-07-454225b0-f75d-43bf-8b97-31c2861db649.jpg',
    lead: 'Waarom netcongestie geen theoretisch risico meer is maar de katalysator moet zijn voor slimmere gebiedsinrichting en ketensamenwerking.',
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
    readTime: '4 min',
    title: 'Samenwerken aan de transities — Systeembewust',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    lead: 'Van abstracte transitie naar tastbare gebiedsontwikkeling: hoe integrale data, flexibiliteitsmodellen en ontwerp samenkomen.',
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
    readTime: '5 min',
    title: 'Slimme buurtenergie, Lelystad',
    image: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: true,
    lead: 'Een integrale buurtschapaanpak waarin wonen, mobiliteit en energie worden gekoppeld via een innovatief wijkenergiemanagementsysteem (WijkEMS).',
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
    readTime: '3 min',
    title: 'Oprichting van VOVON: We zijn live!',
    image: 'https://www.image2url.com/r2/default/images/1778854063934-d1d9a761-16ad-4b8c-a9da-70fd5fb942fd.jpg',
    lead: 'Vanuit een scherpe visie op ruimte, vastgoed, energie en innovatie richten wij ons op projecten waarin ontwikkeling, uitvoering en toekomstbestendigheid samenkomen.',
    content: [
      'Met VOVON Development zetten wij sinds 1 mei 2026 een volgende stap in het verder vormgeven van integrale ontwikkeling en strategische projectrealisatie. Vanuit een scherpe visie op ruimte, vastgoed, energie en innovatie richt VOVON Development zich op projecten waarin ontwikkeling, uitvoering en toekomstbestendigheid samenkomen.',
      'De oprichting markeert niet alleen een formeel moment, maar vooral ook de start van een nieuwe fase. Een fase waarin wij samen met partners zoals bouwbedrijf Kreeft uit Ede en Bramer uit Vriezenveen maar ook grondeigenaren en eindgebruikers werken aan haalbare, onderscheidende en duurzame ontwikkelingen. Projecten waarin niet alleen wordt gebouwd aan vastgoed, maar ook aan sterke concepten, slimme samenwerking en blijvende meerwaarde voor omgeving en maatschappij.',
      'We staan voor een pragmatische en ondernemende aanpak. Dicht op het proces, scherp op kansen, met oog voor complexiteit én uitvoerbaarheid. Juist in een tijd waarin ruimte, energie, mobiliteit en leefkwaliteit steeds sterker met elkaar verbonden zijn, geloven wij in ontwikkelkracht die verder kijkt dan de traditionele opgave.',
      'Wij kijken uit naar de samenwerking met bestaande en nieuwe relaties en houden u de komende periode graag op de hoogte van de eerste projecten en ontwikkelingen.'
    ]
  }
];

const categoryConfig = {
  news: {
    nl: 'Nieuws',
    en: 'News'
  },
  article: {
    nl: 'Artikel',
    en: 'Article'
  },
  insight: {
    nl: 'Insight',
    en: 'Insight'
  }
};

const News = ({ language }: NewsProps) => {
  const t = translations[language].news;
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null);
  const [items, setItems] = useState<NewsItem[]>(dummyItems);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Article Form State
  const [newTitle, setNewTitle] = useState('');
  const [newType, setNewType] = useState<'news' | 'article' | 'insight'>('article');
  const [newReadTime, setNewReadTime] = useState('4 min leestijd');
  const [newDate, setNewDate] = useState(
    new Date().toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })
  );
  const [newLead, setNewLead] = useState('');
  const [newContent, setNewContent] = useState('');
  const [uploadedImage, setUploadedImage] = useState<{
    url: string;
    thumbnailUrl?: string;
    mediumUrl?: string;
    fullUrl?: string;
  } | null>(null);
  const [isSavingArticle, setIsSavingArticle] = useState(false);

  // Load any newly added articles from Firestore
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const q = query(collection(db, 'news'), orderBy('date', 'desc'));
        const snap = await getDocs(q);
        if (!snap.empty) {
          const fetched: NewsItem[] = [];
          snap.forEach((docSnap) => {
            fetched.push({ id: docSnap.id, ...docSnap.data() } as NewsItem);
          });
          // Merge avoiding duplicates
          setItems((prev) => {
            const existingIds = new Set(fetched.map((f) => f.id));
            const filteredPrev = prev.filter((p) => !existingIds.has(p.id));
            return [...fetched, ...filteredPrev];
          });
        }
      } catch (err) {
        console.warn('Could not load extra news from firestore:', err);
      }
    };
    fetchArticles();
  }, []);

  const handleSaveArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !uploadedImage?.url) {
      alert('Vul a.u.b. minimaal een titel in en upload een afbeelding.');
      return;
    }

    setIsSavingArticle(true);
    const newId = `news-${Date.now()}`;
    const paragraphs = newContent
      .split('\n\n')
      .map((p) => p.trim())
      .filter(Boolean);

    const articleItem: NewsItem = {
      id: newId,
      type: newType,
      date: newDate,
      readTime: newReadTime,
      title: newTitle.trim(),
      image: uploadedImage.fullUrl || uploadedImage.url,
      thumbnailUrl: uploadedImage.thumbnailUrl,
      mediumUrl: uploadedImage.mediumUrl,
      fullUrl: uploadedImage.fullUrl,
      featured: true,
      lead: newLead.trim(),
      content: paragraphs.length > 0 ? paragraphs : [newLead.trim()]
    };

    try {
      await setDoc(doc(db, 'news', newId), articleItem);
      setItems((prev) => [articleItem, ...prev]);
      setIsAddModalOpen(false);
      // Reset form
      setNewTitle('');
      setNewLead('');
      setNewContent('');
      setUploadedImage(null);
    } catch (err) {
      console.error('Error saving news article:', err);
      // Still add locally
      setItems((prev) => [articleItem, ...prev]);
      setIsAddModalOpen(false);
    } finally {
      setIsSavingArticle(false);
    }
  };

  const filterOptions: { id: FilterType; label: string }[] = [
    { id: 'all', label: t.filters.all },
    { id: 'news', label: t.filters.news },
    { id: 'article', label: t.filters.article },
    { id: 'insight', label: t.filters.insight }
  ];

  const filteredItems = activeFilter === 'all'
    ? items
    : items.filter(item => item.type === activeFilter);

  const featuredItem = filteredItems.length > 0 ? filteredItems[0] : null;
  const leftSubItems = filteredItems.length > 1 ? filteredItems.slice(1, 3) : [];
  const rightListItems = filteredItems.length > 3 ? filteredItems.slice(3) : [];

  return (
    <section id="news" className="py-24 sm:py-32 bg-[#faf9f6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-slate-200/80 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-vovon-600"></span>
              <span className="text-vovon-600 font-bold uppercase tracking-widest text-xs">
                {t.label || (language === 'nl' ? 'KENNIS & INZICHT' : 'KNOWLEDGE & INSIGHTS')}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              {t.title}
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Minimalist Editorial Navigation Tabs: Alles · Nieuws · Artikelen · Insights */}
            <nav 
              className="flex items-center gap-6 sm:gap-8 overflow-x-auto pb-1 text-sm font-medium shrink-0 scrollbar-none"
              aria-label="Filter categorieën"
            >
              {filterOptions.map((filter) => {
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`group relative pb-2 transition-colors duration-200 text-sm whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-slate-950 font-bold'
                        : 'text-slate-500 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>{filter.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNewsFilterUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-vovon-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Editorial Architecture Layout: Left Heroic Story + Right Clean List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start"
          >
            {/* Left Column: Featured Hero Card + 2 Sub-Articles directly underneath */}
            {featuredItem ? (
              <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-6">
                {/* Main Hero Card */}
                <article
                  onClick={() => setSelectedItem(featuredItem)}
                  className="group cursor-pointer flex flex-col bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-slate-300 transition-all duration-300"
                >
                  {/* Visual Imagery */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <ResponsiveImage
                      src={featuredItem.mediumUrl || featuredItem.image}
                      thumbnailUrl={featuredItem.thumbnailUrl}
                      mediumUrl={featuredItem.mediumUrl}
                      fullUrl={featuredItem.fullUrl || featuredItem.image}
                      alt={featuredItem.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Editorial Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      {/* Meta: Category · Date · ReadTime */}
                      <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium mb-3.5">
                        <span className="font-bold tracking-wider uppercase text-slate-900 text-[11px]">
                          {categoryConfig[featuredItem.type]?.[language] || featuredItem.type}
                        </span>
                        <span className="text-slate-300">/</span>
                        <span>{featuredItem.date}</span>
                        {featuredItem.readTime && (
                          <>
                            <span className="text-slate-300">·</span>
                            <span className="text-slate-400">{featuredItem.readTime}</span>
                          </>
                        )}
                      </div>

                      {/* Headline */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-3.5 group-hover:text-vovon-700 transition-colors duration-200">
                        {featuredItem.title}
                      </h3>

                      {/* Lead Paragraph */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal line-clamp-3 mb-5">
                        {featuredItem.lead || (featuredItem.content && featuredItem.content[0])}
                      </p>
                    </div>

                    {/* Editorial Link Accent */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-vovon-600 transition-colors">
                        <span>{t.readArticle || (language === 'nl' ? 'Lees volledig artikel' : 'Read full story')}</span>
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </span>
                    </div>
                  </div>
                </article>

                {/* 2 Sub-Articles Underneath the Main Hero Story */}
                {leftSubItems.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {leftSubItems.map((subItem) => (
                      <article
                        key={subItem.id}
                        onClick={() => setSelectedItem(subItem)}
                        className="group cursor-pointer flex flex-col bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-slate-300 transition-all duration-300"
                      >
                        {/* Sub-Article Thumbnail */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                          <ResponsiveImage
                            src={subItem.thumbnailUrl || subItem.image}
                            thumbnailUrl={subItem.thumbnailUrl}
                            mediumUrl={subItem.mediumUrl}
                            fullUrl={subItem.fullUrl || subItem.image}
                            alt={subItem.title}
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-colors duration-300" />
                        </div>

                        {/* Sub-Article Text Content */}
                        <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                          <div>
                            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium mb-2.5">
                              <span className="font-bold tracking-wider uppercase text-slate-900 text-[10px]">
                                {categoryConfig[subItem.type]?.[language] || subItem.type}
                              </span>
                              <span className="text-slate-300">/</span>
                              <span>{subItem.date}</span>
                            </div>

                            <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug group-hover:text-vovon-700 transition-colors duration-200 line-clamp-2 mb-2">
                              {subItem.title}
                            </h4>

                            {subItem.lead && (
                              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal mb-3">
                                {subItem.lead}
                              </p>
                            )}
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-vovon-600 transition-colors">
                              <span>{t.readMore || (language === 'nl' ? 'Lees meer' : 'Read more')}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="lg:col-span-7 bg-white p-12 rounded-2xl border border-slate-200 text-center text-sm text-slate-500 font-medium">
                {language === 'nl' ? 'Geen publicaties gevonden in deze categorie.' : 'No articles found in this category.'}
              </div>
            )}

            {/* Right Column: Editorial Vertical Feed with Remaining Articles */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col divide-y divide-slate-200/80 bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-2xs">
              <div className="pb-3 px-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                {language === 'nl' ? 'Meer publicaties & archief' : 'More publications & archive'}
              </div>
              
              {rightListItems.map((item, index) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`group cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5 py-5 ${
                    index === 0 ? 'pt-4' : ''
                  } ${index === rightListItems.length - 1 ? 'pb-2' : ''}`}
                >
                  {/* Text Details */}
                  <div className="flex-1 order-2 sm:order-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1.5">
                      <span className="font-bold tracking-wider uppercase text-slate-900 text-[10px]">
                        {categoryConfig[item.type]?.[language] || item.type}
                      </span>
                      <span className="text-slate-300">/</span>
                      <span>{item.date}</span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug group-hover:text-vovon-700 transition-colors duration-200 line-clamp-2 mb-1.5">
                      {item.title}
                    </h4>

                    {item.lead && (
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal mb-2.5">
                        {item.lead}
                      </p>
                    )}

                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-vovon-600 transition-colors">
                      <span>{t.readMore}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </div>
                  </div>

                  {/* High Quality Photography Thumbnail */}
                  <div className="w-full sm:w-28 md:w-32 lg:w-28 xl:w-32 h-28 sm:h-22 shrink-0 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 order-1 sm:order-2">
                    <ResponsiveImage
                      src={item.thumbnailUrl || item.image}
                      thumbnailUrl={item.thumbnailUrl}
                      mediumUrl={item.mediumUrl}
                      fullUrl={item.fullUrl || item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </article>
              ))}

              {rightListItems.length === 0 && (
                <div className="py-8 text-center text-xs text-slate-400 font-medium">
                  {language === 'nl' 
                    ? 'Geen verdere publicaties in dit filter.' 
                    : 'No further items in this category.'}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Add New Article Modal using ImageUploader */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 sm:p-8 my-8 border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-vovon-50 text-vovon-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {language === 'nl' ? 'Nieuw Artikel Toevoegen' : 'Add New Article'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {language === 'nl'
                      ? 'Met centrale WebP upload en Media Library koppeling'
                      : 'With central WebP upload & Media Library integration'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveArticle} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Titel *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="bijv. Strategische Netcongestie Oplossingen voor 2027"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-vovon-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Type
                  </label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none"
                  >
                    <option value="article">Artikel</option>
                    <option value="news">Nieuws</option>
                    <option value="insight">Insight</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Datum
                  </label>
                  <input
                    type="text"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Leestijd
                  </label>
                  <input
                    type="text"
                    value={newReadTime}
                    onChange={(e) => setNewReadTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Reusable ImageUploader Integration */}
              <div className="pt-2">
                <ImageUploader
                  label="Hoofdafbeelding van artikel *"
                  sublabel="Sleep bestand, plak met Ctrl+V, blader of kies uit Media Library. Automatisch WebP & max 2 MB."
                  defaultCategory="Nieuws"
                  aspectRatio="16/9"
                  onChange={(res) => {
                    setUploadedImage({
                      url: res.url,
                      thumbnailUrl: res.thumbnailUrl,
                      mediumUrl: res.mediumUrl,
                      fullUrl: res.fullUrl
                    });
                  }}
                  onRemove={() => setUploadedImage(null)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Introductie / Lead *
                </label>
                <textarea
                  rows={2}
                  required
                  value={newLead}
                  onChange={(e) => setNewLead(e.target.value)}
                  placeholder="Korte samenvatting van de publicatie..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-vovon-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Volledige tekst (alinea's gescheiden door dubbele Enter)
                </label>
                <textarea
                  rows={4}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Schrijf hier de volledige inhoud van het artikel..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-vovon-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Annuleren
                </button>
                <button
                  type="submit"
                  disabled={isSavingArticle || !uploadedImage?.url}
                  className="px-6 py-2 bg-vovon-600 hover:bg-vovon-700 text-white font-bold text-xs rounded-xl shadow-xs disabled:opacity-50 flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>{isSavingArticle ? 'Opslaan...' : 'Artikel Publiceren'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Full Content Modal */}
      <NewsModal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        item={selectedItem ? {
          ...selectedItem,
          type: categoryConfig[selectedItem.type]?.[language] || selectedItem.type
        } : null}
      />
    </section>
  );
};

export default News;
