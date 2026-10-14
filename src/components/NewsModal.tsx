import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Compass, Globe, Zap, Cpu, Battery, Users, Clock, CheckCircle2, Building2, ShieldAlert, FileText, ArrowRight, Scale, ListOrdered, AlertTriangle, Calendar, ExternalLink, Info, CheckCircle, AlertCircle, Sparkles, Flame, ThermometerSnowflake, Layers, Network, ArrowUpRight } from 'lucide-react';

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

                {item.id === '13' ? (
                  <div className="space-y-12 text-slate-700">
                    
                    {/* Header Badges & Source info */}
                    <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-900 text-white rounded-2xl shadow-md border border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                          VOVON development | Nieuws &amp; inzichten | 11 oktober 2026
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                          7 min leestijd
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          Warmtetransitie &amp; Energie
                        </span>
                      </div>
                    </div>

                    {/* Executive Intro Lead Callout */}
                    <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl shadow-xl space-y-4 border border-slate-800/80 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-80 h-80 bg-vovon-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                      <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest relative z-10">
                        <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>Kerninzicht &amp; Beleidskader</span>
                      </div>
                      <p className="text-base sm:text-lg leading-relaxed text-slate-100 font-medium relative z-10 italic">
                        &ldquo;De toekomst van onze warmtevoorziening verandert. Nieuwe inzichten van het Planbureau voor de Leefomgeving (PBL) en recente voorstellen van de Autoriteit Consument &amp; Markt (ACM) maken duidelijk dat niet alleen de warmtebron, maar vooral de samenhang tussen verwarmen, koelen, elektriciteitsverbruik en netcapaciteit bepalend wordt voor een toekomstbestendige gebiedsontwikkeling.&rdquo;
                      </p>
                      <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-medium relative z-10">
                        <span>Auteur: Ing. Henk Jan Vos — VOVON development</span>
                        <span className="text-slate-500">Gepubliceerd: 11 oktober 2026</span>
                      </div>
                    </div>

                    {/* Section 1: Van aardgasvrij naar toekomstbestendig */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-vovon-100 text-vovon-700 flex items-center justify-center font-bold text-lg">
                          01
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                          Van aardgasvrij naar toekomstbestendig
                        </h3>
                      </div>
                      <div className="space-y-4 text-base leading-relaxed text-slate-700 pl-0 sm:pl-13">
                        <p>
                          Het PBL heeft op 7 oktober 2026 de geactualiseerde Startanalyse Aardgasvrije Buurten gepubliceerd. Een belangrijke verandering is dat klimaatneutraal gas, waaronder groen gas, in het eindbeeld van de gebouwde omgeving een veel beperktere rol krijgt.
                        </p>
                        <p>
                          Daarmee komt een fundamentele vraag nadrukkelijker op tafel: welke warmte-infrastructuur is op de lange termijn technisch, economisch én maatschappelijk houdbaar?
                        </p>
                        <p>
                          De discussie gaat daarbij niet uitsluitend over de keuze tussen een warmtenet of een individuele warmtepomp. Het gaat over de ontwikkeling van een energiesysteem dat ook over twintig of dertig jaar betaalbaar, flexibel en betrouwbaar functioneert.
                        </p>
                      </div>
                    </div>

                    {/* Section 2: Warmtenetten: een investering voor decennia */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-vovon-100 text-vovon-700 flex items-center justify-center font-bold text-lg">
                          02
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                          Warmtenetten: een investering voor decennia
                        </h3>
                      </div>
                      <div className="space-y-4 text-base leading-relaxed text-slate-700 pl-0 sm:pl-13">
                        <p>
                          Hoge- en middentemperatuurwarmtenetten (HT/MT) kunnen onder de juiste omstandigheden een efficiënte oplossing zijn, met name in dichtbebouwde gebieden met voldoende warmtevraag en een betrouwbare, betaalbare warmtebron.
                        </p>
                        <p>
                          Tegelijkertijd kennen deze systemen een structurele kwetsbaarheid: de businesscase is sterk afhankelijk van voldoende en langdurige warmteafname.
                        </p>
                        <p>
                          Naarmate gebouwen beter worden geïsoleerd, neemt de warmtevraag af. Bovendien groeit de behoefte aan actieve koeling. Bewoners kunnen daardoor besluiten een eigen airco of lucht-luchtwarmtepomp te installeren.
                        </p>
                        <p>
                          Dat heeft een interessant neveneffect. Een installatie die aanvankelijk uitsluitend voor koeling wordt aangeschaft, kan in het voor- en najaar ook efficiënt verwarmen.
                        </p>
                        <p>
                          Wanneer een steeds groter deel van de warmtevraag buiten het collectieve warmtenet wordt ingevuld, kunnen de vaste infrastructuurkosten over minder geleverde gigajoules worden verdeeld. Daarmee ontstaat het risico op een negatieve economische spiraal: minder warmteafname, hogere kosten per eenheid en een verdere afname van de aantrekkelijkheid.
                        </p>
                        <p className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-slate-800 font-medium">
                          Dit is geen onvermijdelijk scenario voor ieder warmtenet, maar wel een risico dat bij investeringsbeslissingen expliciet moet worden doorgerekend.
                        </p>
                      </div>
                    </div>

                    {/* Afbeelding boven het vergelijkingsoverzicht met donker filter */}
                    <div className="my-8">
                      <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950 relative group">
                        <img 
                          src="https://www.image2url.com/r2/default/images/1791987482180-eff74d7a-6957-48fe-8d04-659b41c6a327.png" 
                          alt="Integraal energiesysteem gebiedsontwikkeling" 
                          className="w-full h-72 sm:h-96 object-cover object-center brightness-[0.80] contrast-[1.05] group-hover:scale-102 transition-transform duration-700" 
                        />
                        {/* Subtiel donker overlay filter voor premium contrast */}
                        <div className="absolute inset-0 bg-slate-950/25 pointer-events-none"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white pointer-events-none">
                          <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900/90 text-amber-300 backdrop-blur-md mb-2 inline-block border border-slate-700/80 shadow-sm">
                            Integraal Energiesysteem &amp; Gebiedsontwikkeling
                          </span>
                          <p className="text-xs sm:text-sm text-slate-200 font-medium drop-shadow-md">
                            Samenhang tussen warmtebronnen, koudevraag, gebouwisolatie en netcapaciteit in de praktijk.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Visual System Comparison Grid */}
                    <div className="my-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                          <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                            <Flame className="w-4 h-4" />
                            <span>HT / MT Warmtenetten</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Collectief leidingnet. Gevoelig voor vraaguitval bij vergaande isolatie; levert doorgaans géén actieve seizoenskoeling.
                          </p>
                        </div>
                        <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200/80 space-y-2">
                          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                            <ThermometerSnowflake className="w-4 h-4" />
                            <span>ZLT &amp; WKO Netten</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Zeer lage temperatuur met warmte- en koudeopslag. Ideaal voor uitwisseling tussen wonen, werken en seizoensbuffering.
                          </p>
                        </div>
                        <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-200/80 space-y-2">
                          <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                            <Zap className="w-4 h-4" />
                            <span>All-Electric &amp; Flexibiliteit</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Warmtepompen met slimme sturing, batterij-opslag en dynamische respons op nieuwe tijdsafhankelijke ACM-nettarieven.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Koeling verandert de businesscase */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-vovon-100 text-vovon-700 flex items-center justify-center font-bold text-lg">
                          03
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                          Koeling verandert de businesscase
                        </h3>
                      </div>
                      <div className="space-y-4 text-base leading-relaxed text-slate-700 pl-0 sm:pl-13">
                        <p>
                          De warmtetransitie wordt nog te vaak uitsluitend benaderd als een verwarmingsvraagstuk. Maar door beter geïsoleerde gebouwen, warmere zomers en toenemende comforteisen wordt koeling een steeds belangrijker onderdeel van de energievoorziening.
                        </p>
                        <p>
                          Daarmee verandert ook de vergelijking tussen collectieve en individuele oplossingen.
                        </p>
                        <p>
                          Een warmtepomp kan, afhankelijk van het gekozen afgiftesysteem, zowel verwarmen als koelen. Zeerlagetemperatuurnetten (ZLT), bijvoorbeeld in combinatie met warmte-koudeopslag (WKO), bieden daarnaast mogelijkheden om warmte en koude tussen gebouwen en seizoenen uit te wisselen.
                        </p>
                        <p>
                          Voor nieuwe gebiedsontwikkelingen is daarom de vraag niet alleen hoeveel warmte een wijk nodig heeft, maar vooral hoe de totale energiebehoefte zich gedurende het jaar ontwikkelt.
                        </p>
                      </div>
                    </div>

                    {/* Section 4: ACM verandert de spelregels: vanaf 2028 en 2029 */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
                          04
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                          ACM verandert de spelregels: vanaf 2028 en 2029
                        </h3>
                      </div>
                      <div className="space-y-4 text-base leading-relaxed text-slate-700 pl-0 sm:pl-13">
                        <p>
                          Op 8 oktober 2026 publiceerde de ACM twee ontwerpbesluiten voor nieuwe tijdsafhankelijke transporttarieven voor elektriciteit.
                        </p>
                        <p>
                          Deze voorstellen zijn bijzonder relevant voor vastgoedontwikkeling, collectieve energiesystemen en de exploitatie van warmte- en koudevoorzieningen.
                        </p>
                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                          <p className="font-bold text-slate-900">
                            Voor grootverbruikers op regionale elektriciteitsnetten is invoering voorzien per 1 januari 2028.
                          </p>
                          <p className="text-sm text-slate-600">
                            Het transporttarief wordt daarbij afhankelijk van het moment waarop het elektriciteitsnet wordt gebruikt. Elektriciteitsafname op drukke momenten wordt relatief duurder dan op rustige momenten.
                          </p>
                        </div>
                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                          <p className="font-bold text-slate-900">
                            Voor kleinverbruikers, waaronder huishoudens en kleine bedrijven met een aansluiting tot en met 3×80 ampère, is invoering voorzien per 1 januari 2029.
                          </p>
                          <p className="text-sm text-slate-600">
                            Volgens het voorstel blijft gemiddeld een derde van het transporttarief vast en wordt twee derde afhankelijk van het elektriciteitsverbruik en het tijdstip daarvan.
                          </p>
                        </div>
                        <p>
                          Hiermee verandert de economische logica van elektrificatie.
                        </p>
                        <p>
                          Niet uitsluitend het jaarlijkse elektriciteitsverbruik bepaalt straks de netkosten, maar ook het moment waarop elektriciteit wordt afgenomen.
                        </p>
                        <p>
                          Een warmtepomp die slim wordt aangestuurd, een elektrische auto die buiten de piekuren wordt geladen of een collectief energiesysteem dat pieken kan beperken, krijgt daarmee een andere economische positie dan een installatie zonder flexibiliteit.
                        </p>
                        <p>
                          De ACM verwacht op basis van berekeningen van netbeheerders dat de nieuwe kleinverbruikerstarieven de huishoudelijke piekbelasting met circa 10% kunnen verlagen. Dat zou ruimte kunnen creëren voor ongeveer 700.000 extra woningaansluitingen zonder directe netuitbreiding.
                        </p>
                        <p className="text-xs text-slate-500 italic">
                          De ontwerpbesluiten zijn nog niet definitief.
                        </p>
                      </div>
                    </div>

                    {/* DEDICATED IMAGE SPACE 2: Modern Urban Grid & Timeline Infographic */}
                    <div className="my-8 space-y-4">
                      {/* ACM Key Timeline Card */}
                      <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl shadow-xl border border-slate-700/80 space-y-5">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest">
                            <Clock className="w-4 h-4" />
                            <span>Tijdlijn &amp; Capaciteitswinst ACM</span>
                          </div>
                          <span className="text-xs px-3 py-1 bg-amber-500/20 text-amber-300 font-semibold rounded-full border border-amber-500/30">
                            Ontwerpbesluiten 8 okt 2026
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="p-4 bg-slate-800/90 rounded-2xl border border-slate-700">
                            <span className="text-xs text-amber-400 font-bold block mb-1">1 januari 2028</span>
                            <h4 className="text-sm font-bold text-white mb-1">Grootverbruikers</h4>
                            <p className="text-xs text-slate-300">Tijdsafhankelijke transporttarieven op regionale netten; piek vs. dal prikkels.</p>
                          </div>
                          <div className="p-4 bg-slate-800/90 rounded-2xl border border-slate-700">
                            <span className="text-xs text-amber-400 font-bold block mb-1">1 januari 2029</span>
                            <h4 className="text-sm font-bold text-white mb-1">Kleinverbruikers (&le; 3&times;80A)</h4>
                            <p className="text-xs text-slate-300">1/3 vast, 2/3 tijds- en verbruiksafhankelijk. Stimulans voor slimme laadpalen en warmtepompen.</p>
                          </div>
                          <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/30">
                            <span className="text-xs text-amber-300 font-bold block mb-1">+700.000 Woningen</span>
                            <h4 className="text-sm font-bold text-white mb-1">Netwinst door 10% Piekverlaging</h4>
                            <p className="text-xs text-slate-300">Netruimte voor honderdduizenden extra aansluitingen zonder onmiddellijke netverzwaring.</p>
                          </div>
                        </div>
                      </div>

                      {/* Photo 2 */}
                      <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 relative group">
                        <img 
                          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=85" 
                          alt="Elektriciteitsinfrastructuur en netcapaciteit" 
                          className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-102 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white pointer-events-none">
                          <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-800/90 text-amber-300 backdrop-blur-md mb-2 inline-block border border-slate-700">
                            Netcapaciteit &amp; Stuurbaar Vermogen
                          </span>
                          <p className="text-xs sm:text-sm text-slate-200 font-medium drop-shadow-md">
                            Het transporttarief wordt afhankelijk van het tijdstip van gebruik. Flexibiliteit in het ontwerp voorkomt onnodige netcongestie.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Section 5: Wat betekent dit voor warmtenetten? */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-vovon-100 text-vovon-700 flex items-center justify-center font-bold text-lg">
                          05
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                          Wat betekent dit voor warmtenetten?
                        </h3>
                      </div>
                      <div className="space-y-4 text-base leading-relaxed text-slate-700 pl-0 sm:pl-13">
                        <p>
                          De nieuwe nettarieven maken de afweging tussen warmtenetten en warmtepompen complexer, maar ook interessanter.
                        </p>
                        <p>
                          Een collectief warmtesysteem met grote elektrische warmtepompen kan profiteren van slim gestuurde productie, thermische buffers en warmteopslag. Daarmee kan de elektriciteitsvraag deels worden verschoven naar momenten waarop het net minder zwaar wordt belast.
                        </p>
                        <p>
                          Anderzijds kunnen individuele warmtepompen, in combinatie met woningisolatie, thermische massa, slimme sturing en eventueel opslag, eveneens bijdragen aan flexibel netgebruik.
                        </p>
                        <p>
                          Het is daarom te eenvoudig om te stellen dat collectieve warmte altijd netvriendelijker is dan individuele elektrificatie, of andersom.
                        </p>
                        <p className="font-semibold text-slate-900">
                          De werkelijke vergelijking moet plaatsvinden op basis van gelijktijdigheid, piekvermogen, lokale netcapaciteit, flexibiliteit, investeringskosten, exploitatiekosten en de uiteindelijke woonlasten.
                        </p>
                      </div>
                    </div>

                    {/* Section 6: Van warmteoplossing naar gebiedsenergiesysteem */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-vovon-100 text-vovon-700 flex items-center justify-center font-bold text-lg">
                          06
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                          Van warmteoplossing naar gebiedsenergiesysteem
                        </h3>
                      </div>
                      <div className="space-y-4 text-base leading-relaxed text-slate-700 pl-0 sm:pl-13">
                        <p>
                          Bij VOVON development zien wij de warmtetransitie nadrukkelijk als onderdeel van een bredere ruimtelijke en energetische opgave.
                        </p>
                        <p>
                          De ontwikkeling van een nieuwe woonwijk, de herstructurering van een bestaande buurt of de verduurzaming van een bedrijventerrein vraagt om een integrale benadering.
                        </p>
                        <p>
                          Daarin worden warmte, koude, elektriciteit, mobiliteit, opslag en netcapaciteit vanaf de eerste planfase met elkaar verbonden.
                        </p>
                        <p>
                          Dat betekent dat bij gebiedsontwikkeling niet alleen de energieprestatie van individuele gebouwen wordt beoordeeld, maar ook de gezamenlijke impact op het energiesysteem.
                        </p>
                        <p>
                          Denk aan de combinatie van warmtepompen, collectieve warmte-koudeopslag, laadinfrastructuur, zonnepanelen, batterijen en slimme energiesturing.
                        </p>
                        <p>
                          Juist de onderlinge samenhang kan bepalend zijn voor de benodigde aansluitcapaciteit, de haalbaarheid bij netcongestie en de totale maatschappelijke kosten.
                        </p>
                      </div>
                    </div>

                    {/* Section 7: De laagste energierekening begint bij het ontwerp */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-vovon-100 text-vovon-700 flex items-center justify-center font-bold text-lg">
                          07
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                          De laagste energierekening begint bij het ontwerp
                        </h3>
                      </div>
                      <div className="space-y-4 text-base leading-relaxed text-slate-700 pl-0 sm:pl-13">
                        <p>
                          Voor gemeenten, woningcorporaties, ontwikkelaars en beleggers ligt hier een belangrijke verantwoordelijkheid.
                        </p>
                        <p>
                          Een energiesysteem dat vandaag aantrekkelijk lijkt vanwege beperkte initiële investeringen, kan op termijn duur blijken door hoge vaste lasten, beperkte flexibiliteit of onvoldoende mogelijkheden voor koeling.
                        </p>
                        <p>
                          Omgekeerd kan een hogere initiële investering in een flexibel energiesysteem zich terugverdienen door lagere exploitatiekosten, betere benutting van netcapaciteit en toekomstbestendigheid.
                        </p>
                        <p>
                          Daarom zouden alternatieven voor warmtevoorziening niet alleen op basis van investeringskosten of kosten per gigajoule moeten worden beoordeeld, maar op de integrale kosten over de levensduur van het systeem.
                        </p>
                        <p className="font-semibold text-slate-900">
                          Daarbij horen nadrukkelijk ook de woonlasten van bewoners.
                        </p>
                      </div>
                    </div>

                    {/* Section 8: Onze conclusie: niet de warmtetechniek, maar het energiesysteem moet centraal staan */}
                    <div className="space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                          08
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                          Onze conclusie: niet de warmtetechniek, maar het energiesysteem moet centraal staan
                        </h3>
                      </div>
                      <div className="space-y-4 text-base leading-relaxed text-slate-700 pl-0 sm:pl-13">
                        <p>
                          De toekomst van de warmtevoorziening is geen keuze tussen uitsluitend warmtenetten of individuele warmtepompen.
                        </p>
                        <p>
                          Beide kunnen onderdeel zijn van een toekomstbestendig energiesysteem. De vraag is welke combinatie op een specifieke locatie de beste prestaties levert op betaalbaarheid, leveringszekerheid, duurzaamheid, comfort en netbelasting.
                        </p>
                        <p>
                          De nieuwe ACM-tarieven versterken het belang van flexibiliteit en maken het noodzakelijk om verder te kijken dan de traditionele warmtebusinesscase.
                        </p>
                        <p>
                          Wie vandaag een gebied ontwikkelt zonder rekening te houden met koeling, elektrische mobiliteit, piekbelasting en toekomstige nettarieven, loopt het risico een energiesysteem voor gisteren te bouwen.
                        </p>
                        <p className="font-medium text-slate-900">
                          Bij VOVON development geloven wij daarom in netbewuste gebiedsontwikkeling, waarbij ruimte, energie en uitvoering vanaf het begin integraal worden ontworpen.
                        </p>
                      </div>
                    </div>

                    {/* Core Motto & Quote Banner */}
                    <div className="p-8 sm:p-10 bg-slate-900 text-white rounded-3xl shadow-xl text-center space-y-4 border border-slate-800 relative overflow-hidden">
                      <div className="absolute inset-0 bg-radial-gradient from-vovon-500/10 via-transparent to-transparent pointer-events-none"></div>
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
                        Kernvisie VOVON Development
                      </span>
                      <blockquote className="text-xl sm:text-2xl font-bold text-slate-100 italic tracking-tight">
                        &ldquo;Zonder energie geen vastgoed en zonder visie geen gebied.&rdquo;
                      </blockquote>
                      <p className="text-xs text-slate-400 pt-2">
                        Integraal regisseurschap in gebiedsontwikkeling, vastgoed en energietransitie
                      </p>
                    </div>

                    {/* Signature & Advisory CTA Block */}
                    <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="space-y-2 text-center sm:text-left">
                        <div className="inline-block px-3 py-1 bg-vovon-100 text-vovon-800 text-xs font-bold rounded-lg uppercase tracking-wider">
                          Deskundig advies &amp; haalbaarheid
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">
                          VOVON development
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium">
                          Gebiedsontwikkeling | Vastgoed | Energie
                        </p>
                        <p className="text-xs text-slate-500">
                          Adviseert en ondersteunt gemeenten, woningcorporaties en ontwikkelende partijen bij de integrale koppeling tussen gebiedsontwikkeling, energie-infrastructuur en netcapaciteit.
                        </p>
                        <p className="text-xs font-bold text-vovon-700">
                          www.vovon.nl
                        </p>
                      </div>
                      <div className="shrink-0 flex flex-col items-center sm:items-end gap-3">
                        <a
                          href="#contact"
                          onClick={onClose}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-vovon-600 hover:bg-vovon-700 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                        >
                          <span>Neem direct contact op</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                  </div>
                ) : item.id === '12' ? (
                  <div className="space-y-12 text-slate-700">
                    
                    {/* Header Badges & Source info */}
                    <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-amber-50/80 border border-amber-200/80 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-amber-700 shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                          Onderdeel van Netcongestie — Werkwijze Eerder Aanvragen
                        </span>
                      </div>
                      <a 
                        href="https://vng.nl" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-vovon-700 hover:text-vovon-800 bg-white px-3 py-1.5 rounded-xl border border-amber-200 shadow-2xs hover:shadow-xs transition-all"
                      >
                        <span>Bron: VNG.nl</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Executive Summary Lead Callout */}
                    <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white rounded-2xl shadow-xl space-y-4">
                      <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest">
                        <Zap className="w-4 h-4 fill-amber-400" />
                        <span>Kerninzicht & Tijdsblokken</span>
                      </div>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-medium">
                        De werkwijze <strong>Eerder Aanvragen</strong> start officieel op <strong>1 oktober 2026</strong>. Om overbelasting te voorkomen en alle gemeenten gelijke kansen te bieden, worden de aanvragen bij de start eenmalig gecoördineerd ingediend via vaste <strong>tijdsblokken</strong> op basis van het geplande startbouwjaar. Vanaf <strong>23 oktober 2026</strong> kunnen gemeenten doorlopend transportcapaciteit aanvragen.
                      </p>
                      <div className="pt-2 border-t border-slate-700/80 text-xs text-slate-300 font-semibold flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Gefaseerd tijdpad van 1 t/m 22 oktober 2026 (startbouw t/m 2028 tot t/m 2035)</span>
                      </div>
                    </div>

                    {/* Section 1: Hoe verloopt het indienen vanaf 1 oktober? */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <span className="p-2 bg-vovon-100 text-vovon-600 rounded-xl text-base font-extrabold">1</span>
                        Hoe verloopt het indienen vanaf 1 oktober?
                      </h3>

                      <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                        De werkwijze <strong>Eerder Aanvragen</strong> start op <strong>1 oktober 2026</strong>. Omdat veel gemeenten tegelijkertijd aanvragen willen indienen, worden de aanvragen bij de start eenmalig gecoördineerd ingediend. Hiervoor zijn in oktober verschillende tijdsblokken afgesproken.
                      </p>

                      <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                        Het tijdsblokkenschema geldt <em>alleen voor de start</em> van Eerder Aanvragen. Eerder Aanvragen zelf is een <strong>blijvende werkwijze</strong>. Na afloop van het tijdsblokkenschema kunnen gemeenten vanaf <strong>23 oktober</strong> doorlopend transportcapaciteit aanvragen voor nieuwe projecten, zodra voldoende projectinformatie beschikbaar is.
                      </p>
                    </div>

                    {/* Section 2: Waarom wordt gewerkt met tijdsblokken? */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <span className="p-2 bg-vovon-100 text-vovon-600 rounded-xl text-base font-extrabold">2</span>
                        Waarom wordt gewerkt met tijdsblokken?
                      </h3>

                      <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                        De tijdsblokken zijn bedoeld om te voorkomen dat alle gemeenten hun aanvragen op exact hetzelfde moment bij de netbeheerder indienen.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Vroegtijdige Realisatie</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            Projecten die eerder tot uitvoering komen, kunnen eerder worden ingediend.
                          </p>
                        </div>
                        <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase">
                            <Clock className="w-4 h-4 text-vovon-600" />
                            <span>Lange Termijn Plannen</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            Daarna volgen projecten waarvan de realisatie verder in de toekomst ligt.
                          </p>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                        De planning in de tijdsblokken loopt van <strong>1 tot en met 22 oktober</strong>, waarbij telkens een volgend startbouwjaar wordt toegevoegd: van projecten met start bouw tot en met 2028 op 1 oktober tot projecten met start bouw tot en met 2035 op 22 oktober.
                      </p>
                    </div>

                    {/* Section 3: Tijdsblokkenschema Tabel */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-vovon-600" />
                          <span>Tijdsblokkenschema Eerder Aanvragen (Oktober 2026)</span>
                        </h4>
                        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                          Start om 09.00 uur
                        </span>
                      </div>

                      <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-xs">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs sm:text-sm">
                            <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider font-bold">
                              <tr>
                                <th className="py-3.5 px-4 sm:px-6">Datum & Tijdstip</th>
                                <th className="py-3.5 px-4 sm:px-6">Indienen projecten met start bouwjaar</th>
                                <th className="py-3.5 px-4 sm:px-6">Gepland opleverjaar</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                              <tr className="hover:bg-slate-50 transition-colors">
                                <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 whitespace-nowrap">
                                  Per 1 oktober om 09.00 uur
                                </td>
                                <td className="py-3.5 px-4 sm:px-6 font-semibold text-vovon-700">
                                  Startbouw t/m 2028
                                </td>
                                <td className="py-3.5 px-4 sm:px-6 text-slate-600 rowspan-8" rowSpan={8}>
                                  <div className="font-semibold text-slate-900 bg-amber-50/90 border border-amber-200/80 rounded-xl p-3 text-center sm:text-left">
                                    <div className="text-amber-800 font-bold text-xs uppercase tracking-wide mb-1">Geldende Opleverhorizon</div>
                                    <div className="text-slate-800 text-sm font-extrabold">Uiterlijk oplevering in 2036</div>
                                    <p className="text-[11px] text-slate-500 mt-1 font-normal">
                                      Voor alle tijdsblokken geldt een maximale oplevering tot en met 2036.
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr className="hover:bg-slate-50 transition-colors">
                                <td className="py-3 px-4 sm:px-6 font-medium text-slate-900 whitespace-nowrap">
                                  Per 6 oktober om 09.00 uur
                                </td>
                                <td className="py-3 px-4 sm:px-6 font-semibold text-slate-700">
                                  Startbouw t/m 2029
                                </td>
                              </tr>
                              <tr className="hover:bg-slate-50 transition-colors">
                                <td className="py-3 px-4 sm:px-6 font-medium text-slate-900 whitespace-nowrap">
                                  Per 8 oktober om 09.00 uur
                                </td>
                                <td className="py-3 px-4 sm:px-6 font-semibold text-slate-700">
                                  Startbouw t/m 2030
                                </td>
                              </tr>
                              <tr className="hover:bg-slate-50 transition-colors">
                                <td className="py-3 px-4 sm:px-6 font-medium text-slate-900 whitespace-nowrap">
                                  Per 12 oktober om 09.00 uur
                                </td>
                                <td className="py-3 px-4 sm:px-6 font-semibold text-slate-700">
                                  Startbouw t/m 2031
                                </td>
                              </tr>
                              <tr className="hover:bg-slate-50 transition-colors">
                                <td className="py-3 px-4 sm:px-6 font-medium text-slate-900 whitespace-nowrap">
                                  Per 14 oktober om 09.00 uur
                                </td>
                                <td className="py-3 px-4 sm:px-6 font-semibold text-slate-700">
                                  Startbouw t/m 2032
                                </td>
                              </tr>
                              <tr className="hover:bg-slate-50 transition-colors">
                                <td className="py-3 px-4 sm:px-6 font-medium text-slate-900 whitespace-nowrap">
                                  Per 16 oktober om 09.00 uur
                                </td>
                                <td className="py-3 px-4 sm:px-6 font-semibold text-slate-700">
                                  Startbouw t/m 2033
                                </td>
                              </tr>
                              <tr className="hover:bg-slate-50 transition-colors">
                                <td className="py-3 px-4 sm:px-6 font-medium text-slate-900 whitespace-nowrap">
                                  Per 20 oktober om 09.00 uur
                                </td>
                                <td className="py-3 px-4 sm:px-6 font-semibold text-slate-700">
                                  Startbouw t/m 2034
                                </td>
                              </tr>
                              <tr className="hover:bg-slate-50 transition-colors">
                                <td className="py-3 px-4 sm:px-6 font-medium text-slate-900 whitespace-nowrap">
                                  Per 22 oktober om 09.00 uur
                                </td>
                                <td className="py-3 px-4 sm:px-6 font-semibold text-slate-700">
                                  Startbouw t/m 2035
                                </td>
                              </tr>
                              <tr className="bg-emerald-50/70 hover:bg-emerald-50 transition-colors border-t-2 border-emerald-200">
                                <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-950 whitespace-nowrap">
                                  Per 23 oktober
                                </td>
                                <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-900" colSpan={2}>
                                  Einde tijdsblokkenschema — Vanaf heden doorlopend aanvragen indienen
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Aanvragen indienen via Mijnaansluiting.nl */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <span className="p-2 bg-vovon-100 text-vovon-600 rounded-xl text-base font-extrabold">3</span>
                        Aanvragen indienen via Mijnaansluiting.nl
                      </h3>

                      <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                        Gemeenten dienen hun capaciteitsverzoeken in via <strong>Mijnaansluiting.nl</strong>. Hiervoor moet binnen de gemeente vooraf een gebruikersgroep zijn ingericht en moeten de juiste rechten om capaciteitsverzoeken te doen zijn toegekend.
                      </p>

                      <div className="p-5 bg-slate-50 border border-slate-200/90 rounded-2xl space-y-3">
                        <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                          Nog niet geregeld binnen uw gemeente?
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Bekijk de werkinstructie van Mijnaansluiting.nl voor gemeenten. Hierin leest u hoe u een zakelijk account en gebruikersgroep inricht, collega's toegang geeft en de benodigde rechten aanvraagt.
                        </p>
                      </div>

                      {/* Important Warning Callout */}
                      <div className="p-5 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-2xl space-y-1">
                        <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm">
                          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>Let op: Handel vóór 1 oktober!</span>
                        </div>
                        <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                          Regel de inrichting van het zakelijk account en de gebruikersgroep ruim vóór 1 oktober, zodat uw gemeente vanaf het juiste tijdsblok direct aanvragen kan indienen zonder vertraging.
                        </p>
                      </div>
                    </div>

                    {/* Section 5: Wat gebeurt er na indiening? */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <span className="p-2 bg-vovon-100 text-vovon-600 rounded-xl text-base font-extrabold">4</span>
                        Wat gebeurt er na indiening?
                      </h3>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                          <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            A
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-slate-900 mb-1">Compleetheidscontrole</h5>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              De netbeheerder controleert als eerste stap of de ingediende aanvraag inhoudelijk en administratief compleet is.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                          <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            B
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-slate-900 mb-1">Plaatsing op de wachtlijst</h5>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              Een complete aanvraag voor transportcapaciteit kan vervolgens op de formele wachtlijst van de netbeheerder worden geplaatst.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-purple-50/80 border border-purple-200 rounded-2xl">
                          <div className="w-6 h-6 rounded-full bg-purple-200 text-purple-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            C
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-purple-950 mb-1">Toetsing Maatschappelijke Prioriteit & Bewijslast</h5>
                            <p className="text-xs sm:text-sm text-purple-900 leading-relaxed">
                              Wanneer voor het project ook maatschappelijke prioriteit wordt aangevraagd, beoordeelt de netbeheerder daarnaast of aan de daarvoor geldende wettelijke voorwaarden en strenge bewijslast wordt voldaan.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                          <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            D
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-slate-900 mb-1">Capaciteitsverdeling conform Prioriteringskader</h5>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              Zodra er transportcapaciteit beschikbaar komt, verdeelt de netbeheerder deze volgens de geldende regels en de positie van aanvragen op de wachtlijst. Het prioriteringskader bepaalt daarbij welke aanvragen voorrang kunnen krijgen.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 6: Let op: Eerder Aanvragen is geen garantie */}
                    <div className="p-6 bg-red-50 border border-red-200 rounded-2xl space-y-3">
                      <div className="flex items-center gap-2 text-red-700 font-extrabold text-sm uppercase tracking-wide">
                        <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                        <span>Cruciaal Uitgangspunt: Eerder Aanvragen is geen garantie op transportcapaciteit</span>
                      </div>
                      <p className="text-xs sm:text-sm text-red-950 leading-relaxed font-medium">
                        Ook met een tijdige en complete aanvraag is <strong>niet gegarandeerd</strong> dat het project op de gewenste datum transportcapaciteit krijgt. Hoeveel capaciteit beschikbaar is en wanneer uitbreiding van het elektriciteitsnet gereed is, verschilt sterk per regio en per station.
                      </p>
                    </div>

                    {/* Section 7: Hoe VOVON helpt */}
                    <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-xl space-y-4">
                      <div className="flex items-center gap-2 text-vovon-400 font-bold text-xs uppercase tracking-widest">
                        <Building2 className="w-4 h-4 text-vovon-400" />
                        <span>Klaar om aanvragen voor te bereiden?</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-white">
                        Ondersteuning voor gemeenten en ontwikkelpartners door VOVON Development
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        VOVON Development ondersteunt gemeenten en marktpartijen bij het tijdig gereedmaken van complete projectdossiers, prioriteringstoetsen, netbewuste quickscans en lokale flexibiliteitsconcepten. Zo zorgt u dat uw aanvragen niet stranden op ontbrekende bewijslast of vormfouten.
                      </p>
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <a
                          href="#contact"
                          onClick={onClose}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-vovon-600 hover:bg-vovon-700 text-white rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
                        >
                          <span>Neem contact op voor projectbegeleiding</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Source citation footer */}
                    <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
                      <div>
                        <strong>Bronvermelding:</strong> VNG (Vereniging van Nederlandse Gemeenten) — <em>Onderdeel van Netcongestie & Werkwijze Eerder Aanvragen</em>.
                      </div>
                      <a 
                        href="https://vng.nl" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-vovon-600 hover:text-vovon-700 font-bold underline"
                      >
                        <span>vng.nl raadplegen</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                ) : item.id === '11' ? (
                  <div className="space-y-12 text-slate-700">
                    
                    {/* Subtitle / Header Badge */}
                    <div className="flex flex-wrap items-center gap-3 p-4 bg-purple-50 border border-purple-200/80 rounded-2xl">
                      <FileText className="w-5 h-5 text-purple-600 shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-900">
                        Artikel — Vovon Development | Versie 1.0 (juli 2026)
                      </span>
                    </div>

                    {/* Executive Summary Lead Callout */}
                    <div className="p-6 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white rounded-2xl shadow-xl space-y-4">
                      <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest">
                        <Zap className="w-4 h-4 fill-amber-400" />
                        <span>Managementsamenvatting</span>
                      </div>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-medium">
                        Netcapaciteit is in korte tijd van een technisch aansluitvraagstuk veranderd in een verdelingsvraagstuk met een juridische en bestuurlijke kern. Sinds 1 januari 2026 geldt het ACM-prioriteringskader; sinds 1 juli 2026 staan groot- en kleinverbruik in gebieden met netcongestie in één gezamenlijke wachtrij en is de reservering van capaciteit voor toekomstige woningbouw vervallen. Wie voorrang wil, moet die actief aanvragen en onderbouwen.
                      </p>
                      <div className="pt-2 border-t border-purple-500/30 text-xs text-purple-200 font-semibold">
                        Kernboodschap: De periode tot 1 januari 2027 is een eenmalig voorrangsvenster voor woningbouw.
                      </div>
                    </div>

                    {/* Section 1: Wat er precies is veranderd */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <span className="p-2 bg-vovon-100 text-vovon-600 rounded-xl text-base">1</span>
                        Wat er precies is veranderd: van 'First Come, First Served' naar Maatschappelijk Prioriteren
                      </h3>

                      <p className="text-sm leading-relaxed text-slate-600">
                        Netbeheerders wezen transportcapaciteit tot voor kort toe op volgorde van binnenkomst. Dat principe hield geen rekening met maatschappelijke urgentie: een datacenter en een sociaal woningbouwproject stonden in dezelfde rij. De ACM heeft daarom met het Codebesluit prioriteringsruimte transportverzoeken landelijke voorrangsregels ingesteld.
                      </p>

                      {/* ACM Categories Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-purple-700 uppercase">
                            <Battery className="w-4 h-4 text-purple-600" />
                            <span>Cat. 1: Netverzachers</span>
                          </div>
                          <p className="text-xs text-slate-600 font-medium">
                            Partijen die direct bijdragen aan het vergroten van beschikbare netcapaciteit (opslag, flexibiliteit, netverzwarende functies).
                          </p>
                        </div>

                        <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase">
                            <ShieldAlert className="w-4 h-4 text-red-600" />
                            <span>Cat. 2: Veiligheid</span>
                          </div>
                          <p className="text-xs text-slate-600 font-medium">
                            Partijen waarvan het niet-aansluiten de nationale veiligheid of volksgezondheid bedreigt (defensie, ziekenhuizen, drinkwater, hulpdiensten).
                          </p>
                        </div>

                        <div className="p-5 bg-purple-50 border border-purple-200 rounded-2xl space-y-2 relative overflow-hidden">
                          <div className="absolute top-2 right-2 px-2 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded-full">
                            Woningbouw
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold text-purple-900 uppercase">
                            <Building2 className="w-4 h-4 text-purple-600" />
                            <span>Cat. 3: Basisbehoeften</span>
                          </div>
                          <p className="text-xs text-purple-900 font-medium">
                            Partijen die voorzien in eerste levensbehoeften (woonbehoefte, onderwijshuisvesting). Woningbouw valt in categorie 3.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Article Inline Image 1 */}
                    <div className="space-y-2">
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-64 sm:h-80 relative">
                        <img 
                          src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                          alt="Woningbouw en netcapaciteit" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                          <p className="text-white text-xs sm:text-sm font-medium">
                            Netcapaciteit is niet langer een nagedachte, maar de bepalende randvoorwaarde voor de haalbaarheid van woningbouw- en gebiedsontwikkelingen.
                          </p>
                        </div>
                      </div>
                      <p className="text-center text-xs text-slate-400 italic">
                        Afbeelding: Woningbouwprojecten moeten vóór 1 oktober 2026 door de gemeente zijn geprioriteerd.
                      </p>
                    </div>

                    {/* Section 2: Rol van de gemeente */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <span className="p-2 bg-vovon-100 text-vovon-600 rounded-xl text-base">2</span>
                        De Nieuwe Rol van de Gemeente: 'Eerder Aanvragen in het Planproces'
                      </h3>

                      <p className="text-sm leading-relaxed text-slate-600">
                        Omdat woningbouw lange doorlooptijden kent, is per 1 oktober 2026 de werkwijze 'Eerder aanvragen in het planproces' ingericht. De gemeente neemt de regie over en wordt de officiële intermediair tussen netbeheerder en markt:
                      </p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-800">
                        <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Gemeenten kunnen tot <strong>10 jaar vooruit</strong> transportcapaciteit aanvragen, per bouwfase.</span>
                        </li>
                        <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>De aanvraag kan al ingediend worden <strong>vóórdat een ontwikkelaar definitief gecontracteerd is</strong>.</span>
                        </li>
                        <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>De <strong>gemeente is de formele indiener</strong> via mijnaansluiting.nl met bestuursverklaring.</span>
                        </li>
                        <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Onvolledige aanvragen of ontbrekende bewijsstukken worden <strong>niet in behandeling genomen</strong>.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Section 3: Tijdpad Roadmap */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <span className="p-2 bg-vovon-100 text-vovon-600 rounded-xl text-base">3</span>
                        Het Tijdpad van 1 juli 2026 tot 1 januari 2027 (Het Eenmalige Voorrangsvenster)
                      </h3>

                      <p className="text-sm leading-relaxed text-slate-600">
                        De periode van <strong>1 juli 2026 tot 1 januari 2027</strong> vormt een strikt, eenmalig voorrangsvenster. Wie te laat is, sluit achteraan aan in de reguliere markt.
                      </p>

                      <div className="relative border-l-2 border-purple-200 ml-3 pl-6 space-y-6 my-4">
                        
                        {/* Step 1 */}
                        <div className="relative">
                          <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-vovon-600 ring-4 ring-purple-100" />
                          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <span className="px-2.5 py-0.5 rounded-full bg-vovon-100 text-vovon-700 text-xs font-bold uppercase">
                                1 juli 2026
                              </span>
                              <span className="text-[11px] font-semibold text-slate-400">Inwerkingtreding</span>
                            </div>
                            <p className="text-xs font-medium text-slate-800 pt-1">
                              <strong>Eén gezamenlijke wachtrij</strong> voor klein- en grootverbruik. De automatische reservering van netcapaciteit voor toekomstige woningbouw vervalt definitief.
                            </p>
                          </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                          <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-purple-100" />
                          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase">
                                Juli – September 2026
                              </span>
                              <span className="text-[11px] font-semibold text-purple-600">Voorbereiding</span>
                            </div>
                            <p className="text-xs font-medium text-slate-800 pt-1">
                              <strong>Voorbereidingsvenster:</strong> Inventarisatie van alle woningbouwprojecten, opstellen van beleidsregels en consultatie van de concept-volgordelijst met de markt.
                            </p>
                          </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                          <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-100" />
                          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl space-y-1">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold uppercase">
                                Vóór 1 oktober 2026
                              </span>
                              <span className="text-[11px] font-bold text-amber-800">Harde Deadline</span>
                            </div>
                            <p className="text-xs font-medium text-amber-950 pt-1">
                              <strong>Vaststelling & Publicatie:</strong> Beleidsregels moeten door het college zijn vastgesteld en gepubliceerd. De gemeentelijke volgordelijst is definitief.
                            </p>
                          </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative">
                          <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-900 ring-4 ring-purple-200" />
                          <div className="p-4 bg-purple-900 text-white rounded-2xl shadow-lg space-y-1">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase">
                                1 – 23 oktober 2026
                              </span>
                              <span className="text-[11px] font-bold text-purple-200">Landelijke Indiening</span>
                            </div>
                            <p className="text-xs font-medium text-purple-100 pt-1">
                              <strong>Eenmalige gecoördineerde indiening:</strong> Gemeenten dienen dossiers in tijdsblokken in via mijnaansluiting.nl, ingedeeld naar geplande startbouwjaar.
                            </p>
                          </div>
                        </div>

                        {/* Step 5 */}
                        <div className="relative">
                          <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase">
                                Tot 1 januari 2027
                              </span>
                              <span className="text-[11px] font-semibold text-emerald-700">Exclusieve Toewijzing</span>
                            </div>
                            <p className="text-xs font-medium text-emerald-950 pt-1">
                              Vrijgekomen en gereserveerde capaciteit wordt door netbeheerders <strong>uitsluitend</strong> toegewezen aan goedgekeurde prioritaire aanvragen.
                            </p>
                          </div>
                        </div>

                        {/* Step 6 */}
                        <div className="relative">
                          <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-red-500 ring-4 ring-red-100" />
                          <div className="p-4 bg-red-50 border border-red-200 rounded-2xl space-y-1">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase">
                                Vanaf 1 januari 2027
                              </span>
                              <span className="text-[11px] font-semibold text-red-700">Venster Gesloten</span>
                            </div>
                            <p className="text-xs font-medium text-red-950 pt-1">
                              <strong>Einde exclusiviteit:</strong> Resterende netcapaciteit komt weer beschikbaar voor álle marktpartijen op basis van binnenkomst. Correctie achteraf is vrijwel onmogelijk.
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Article Inline Image 2 */}
                    <div className="space-y-2">
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-64 sm:h-80 relative">
                        <img 
                          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                          alt="Gebiedsontwikkeling en slimme energie" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                          <p className="text-white text-xs sm:text-sm font-medium">
                            Netbewuste gebiedsontwikkeling combineert slimme sturing, lokale energieopslag en doordachte fasering om binnen het voorrangsvenster te kunnen bouwen.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Section 4: De Volgordelijst */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <span className="p-2 bg-vovon-100 text-vovon-600 rounded-xl text-base">4</span>
                        De Volgordelijst: Hoe prioritering feitelijk werkt
                      </h3>

                      <p className="text-sm leading-relaxed text-slate-600">
                        De gemeente bepaalt welke projecten zij indient en in welke volgorde volgens de VNG-modelbeleidsregels:
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                          <div className="text-xs font-bold text-vovon-600 uppercase">Stap 1: Start Bouw</div>
                          <p className="text-xs text-slate-600">Rangschikking op de maand van start bouw: eerder is hoger. Moet concreet onderbouwd zijn met planning of overeenkomst.</p>
                        </div>

                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                          <div className="text-xs font-bold text-vovon-600 uppercase">Stap 2: Projectrijpheid</div>
                          <p className="text-xs text-slate-600">Onderrangorde op basis van planologische zekerheid en civielrechtelijke overeenkomsten (Rang 1 t/m 7).</p>
                        </div>

                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                          <div className="text-xs font-bold text-vovon-600 uppercase">Stap 3: Maatschappelijk Belang & Netimpact</div>
                          <p className="text-xs text-slate-600">Optionele criteria: transformatie, aandeel sociaal/middenhuur, of netbewuste maatregelen (batterijopslag, smart charging, sturing warmtepompen).</p>
                        </div>

                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                          <div className="text-xs font-bold text-vovon-600 uppercase">Stap 4: Oplevering & Loting</div>
                          <p className="text-xs text-slate-600">Eerdere oplevering rangschikt hoger. Blijven projecten exact gelijk, dan volgt openbare loting onder onafhankelijk toezicht.</p>
                        </div>
                      </div>
                    </div>

                    {/* Section 5: Juridische Positie & Didam */}
                    <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                      <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-vovon-600" />
                        <span>Juridische Positie: Privaatrechtelijk Handelen & Didam-Normen</span>
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                        Het aanvragen van transportcapaciteit is een privaatrechtelijke rechtshandeling van de gemeente (art. 160 Gemeentewet). De volgordebeslissing is een voorbereidingshandeling — bestuursrechtelijk bezwaar en beroep staan niet open. Echter, op grond van art. 3:14 BW en de <strong>Didam-arresten</strong> gelden het gelijkheidsbeginsel, zorgvuldigheidsbeginsel en motiveringsbeginsel onverkort.
                      </p>
                    </div>

                    {/* Section 6: Action Checklist */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <ListOrdered className="w-6 h-6 text-vovon-600" />
                        <span>Actielijst: Wat u nu moet doen</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Municipalities */}
                        <div className="p-5 bg-purple-50/60 border border-purple-200 rounded-2xl space-y-3">
                          <h4 className="text-sm font-bold text-purple-900 uppercase tracking-wider">
                            Voor Gemeenten — Vóór 1 oktober 2026
                          </h4>
                          <ul className="space-y-2 text-xs text-slate-700">
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-purple-600">•</span>
                              <span>Bring congestiegebieden in kaart en stel per gebied een volgordelijst op.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-purple-600">•</span>
                              <span>Inventariseer alle woningbouwprojecten met realisatie binnen 10 jaar.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-purple-600">•</span>
                              <span>Stel beleidsregels vast met collegebesluit en expliciet mandaat.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-purple-600">•</span>
                              <span>Publiceer de volgordelijst uiterlijk 2 weken vóór indiening.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Developers */}
                        <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                            Voor Ontwikkelaars & Corporaties — Nu
                          </h4>
                          <ul className="space-y-2 text-xs text-slate-700">
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-vovon-600">•</span>
                              <span>Breng per project uw bewijspositie in kaart (rang 1 t/m 7).</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-vovon-600">•</span>
                              <span>Onderbouw de startbouwmaand met harde planning of vergunning.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-vovon-600">•</span>
                              <span>Herijk lopende anterieure overeenkomsten op aanvraagrol en kosten.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-vovon-600">•</span>
                              <span>Overweeg netbewuste maatregelen (batterijopslag, slimme warmtepompsturing).</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Advisory & Contact Box */}
                    <div className="p-8 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="space-y-2 text-center md:text-left">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
                          Over VOVON Development
                        </span>
                        <h4 className="text-xl font-bold">
                          Ondersteuning van aanvraag tot onderbouwde prioritering
                        </h4>
                        <p className="text-xs text-slate-300 max-w-xl">
                          Vovon Development kan gemeenten, ontwikkelaars en corporaties ondersteunen om maatschappelijke prioritering niet alleen correct uit te voeren, maar vooral goed en overzichtelijk te organiseren.
                        </p>
                      </div>

                      <a
                        href="#contact"
                        onClick={onClose}
                        className="shrink-0 px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
                      >
                        Neem contact op voor advies
                      </a>
                    </div>

                  </div>
                ) : item.id === '10' ? (
                  <div className="space-y-8">
                    {/* The Poster Block - actual uploaded image */}
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg bg-slate-50">
                      <img
                        src="https://www.image2url.com/r2/default/images/1783491443749-d055237e-09ab-4ce4-affb-cbda8c4f3de0.png"
                        alt="Fijne zomer! - VOVON Development"
                        className="w-full h-auto object-contain max-h-[520px] mx-auto block"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Explanatory text */}
                    <div className="text-slate-600 max-w-none space-y-4">
                      <p className="text-[10pt] leading-relaxed">
                        Tijdens deze zomervakantie is het kantoor van VOVON Development tijdelijk gesloten van <strong>maandag 27 juli tot en met vrijdag 14 augustus</strong>. 
                        In deze periode laden wij de batterij op om daarna weer vol energie en met een frisse blik aan de slag te gaan.
                      </p>
                      <p className="text-[10pt] leading-relaxed">
                        Vanaf <strong>maandag 17 augustus</strong> zijn wij weer volledig bereikbaar en pakken we lopende en nieuwe projecten met veel enthousiasme op. 
                        Heeft u voor of tijdens onze vakantie een dringende vraag? Stuur dan gerust een e-mail naar ons algemene e-mailadres via ons contactformulier; wij reageren dan zo spoedig mogelijk bij terugkomst.
                      </p>
                      <p className="text-[10pt] leading-relaxed font-semibold text-slate-800">
                        Wij wensen al onze relaties, opdrachtgevers en partners een hele fijne, ontspannen en zonnige zomer toe!
                      </p>
                    </div>
                  </div>
                ) : item.id === '8' && item.content ? (
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
