import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Compass, Globe, Zap, Cpu, Battery, Users, Clock, CheckCircle2, Building2, ShieldAlert, FileText, ArrowRight, Scale, ListOrdered, AlertTriangle } from 'lucide-react';

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

                {item.id === '11' ? (
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
