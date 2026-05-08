import { X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = () => {
    if (!contentRef.current) return;
    
    // Create a wrapper element to make the PDF styling clean and white
    const element = document.createElement('div');
    element.innerHTML = contentRef.current.innerHTML;
    
    // Add some inline styles just for the PDF ensuring legible fonts and spacing
    element.style.padding = '40px';
    element.style.fontFamily = 'Arial, sans-serif';
    element.style.color = '#000';
    element.style.fontSize = '12px';
    element.style.lineHeight = '1.6';
    element.style.backgroundColor = '#fff';

    // IMPORTANT: Strip all classes to prevent html2canvas from trying to parse 
    // unsupported Tailwind v4 oklch() color functions from computed styles.
    // Re-apply basic typography inline.
    const allElements = element.querySelectorAll('*');
    allElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.removeAttribute('class');
        
        // Ensure standard colors instead of oklch
        el.style.color = '#000000';
        el.style.backgroundColor = 'transparent';
        el.style.borderColor = '#e5e7eb';
        
        // Re-apply necessary structural styles lost from stripping classes
        const tag = el.tagName.toLowerCase();
        if (tag === 'h1') {
          el.style.fontSize = '20px';
          el.style.fontWeight = 'bold';
          el.style.marginBottom = '24px';
          el.style.textTransform = 'uppercase';
        } else if (tag === 'h2') {
          el.style.fontSize = '16px';
          el.style.fontWeight = 'bold';
          el.style.marginTop = '24px';
          el.style.marginBottom = '12px';
          el.style.textTransform = 'uppercase';
          el.style.borderBottom = '1px solid #e5e7eb';
          el.style.paddingBottom = '8px';
        } else if (tag === 'p') {
          el.style.marginBottom = '12px';
        } else if (tag === 'ul') {
          el.style.paddingLeft = '24px';
          el.style.marginBottom = '16px';
          el.style.listStyleType = 'disc';
        } else if (tag === 'ol') {
          el.style.paddingLeft = '24px';
          el.style.marginBottom = '16px';
          el.style.listStyleType = 'decimal';
        } else if (tag === 'li') {
          el.style.marginBottom = '8px';
          el.style.display = 'list-item';
        } else if (tag === 'section') {
          el.style.marginBottom = '32px';
        }
      }
    });

    const opt: any = {
      margin:       15,
      filename:     'Algemene_Voorwaarden_VOVON_Development.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white z-10 shrink-0">
              <h2 className="text-2xl font-bold text-slate-900">Algemene Voorwaarden VOVON</h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownloadPdf}
                  className="flex items-center gap-2 px-4 py-2 bg-vovon-50 text-vovon-700 hover:bg-vovon-100 font-medium rounded-lg transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-8 overflow-y-auto bg-slate-50 relative flex-1 custom-scrollbar">
              <div 
                ref={contentRef} 
                className="bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-200 max-w-3xl mx-auto text-slate-800 text-[15px] leading-relaxed"
              >
                <h1 className="text-2xl font-bold mb-8 uppercase text-slate-900">Algemene Voorwaarden VOVON Development B.V.</h1>
                
                <div className="mb-12 text-sm text-slate-600">
                  <p>VOVON development B.V.</p>
                  <p>Leeuwerik 4</p>
                  <p>8081 ZJ Elburg</p>
                  <p>Kvk 42020414</p>
                </div>

                <div className="space-y-10">
                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 1 — Definities</h2>
                    <p className="mb-4">In deze algemene voorwaarden en de daarop gebaseerde overeenkomsten wordt verstaan onder:</p>
                    <ul className="space-y-4">
                      <li><strong>VOVON Development:</strong> de besloten vennootschap met beperkte aansprakelijkheid VOVON Development B.V., statutair gevestigd te Elburg, die diensten aanbiedt op het gebied van gebiedsontwikkeling, vastgoedontwikkeling, verduurzaming, energieconcepten, procesmanagement, projectbegeleiding en aanverwante advisering.</li>
                      <li><strong>Opdrachtgever:</strong> de natuurlijke persoon, rechtspersoon of organisatie met wie VOVON Development een overeenkomst aangaat, in onderhandeling treedt of aan wie VOVON Development een aanbieding of offerte uitbrengt.</li>
                      <li><strong>Diensten:</strong> alle werkzaamheden, producten, adviezen, rapportages, procesbegeleiding, projectmanagement, ontwikkeladviezen en overige leveringen die VOVON Development aanbiedt. Hieronder vallen onder meer, maar niet uitsluitend: gebiedsontwikkeling, vastgoedontwikkeling, haalbaarheidsstudies, verduurzamingsadviezen, energie- en netcongestievraagstukken, project- en procesmanagement, stakeholdermanagement, ruimtelijke verkenningen, begeleiding van principeverzoeken, exploitatieverkenningen en commerciële ontwikkeladviezen.</li>
                      <li><strong>Overeenkomst:</strong> de schriftelijke of digitale overeenkomst tussen VOVON Development en de Opdrachtgever, inclusief offertes, opdrachtbevestigingen, bijlagen, aanvullende afspraken en deze algemene voorwaarden.</li>
                      <li><strong>Vertrouwelijke Informatie:</strong> alle bedrijfsinformatie, projectinformatie, financiële gegevens, technische kennis, commerciële gegevens, eigendomsinformatie, ontwikkelstrategieën, plannen, adviezen en overige informatie die door één van de partijen als vertrouwelijk is aangeduid of waarvan de vertrouwelijkheid redelijkerwijs mag worden aangenomen.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 2 — Toepasselijkheid</h2>
                    <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400 marker:font-medium">
                      <li>Deze algemene voorwaarden zijn van toepassing op en maken onlosmakelijk deel uit van alle aanbiedingen, offertes, werkzaamheden, overeenkomsten en leveringen van VOVON Development.</li>
                      <li>Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien deze uitdrukkelijk, schriftelijk en door beide partijen zijn overeengekomen.</li>
                      <li>De toepasselijkheid van eventuele algemene voorwaarden van de Opdrachtgever, in welke vorm dan ook, wordt hierbij uitdrukkelijk uitgesloten.</li>
                      <li>Indien één of meerdere bepalingen in deze voorwaarden nietig zijn of vernietigd worden, blijven de overige bepalingen onverminderd van kracht. VOVON Development en de Opdrachtgever zullen de nietige of vernietigde bepalingen vervangen door nieuwe, rechtsgeldige bepalingen die zo dicht mogelijk aansluiten bij de bedoeling van de oorspronkelijke bepaling.</li>
                      <li>VOVON Development is gerechtigd deze algemene voorwaarden eenzijdig te wijzigen of aan te vullen. Wijzigingen binden de Opdrachtgever vanaf het moment dat deze schriftelijk of digitaal kenbaar zijn gemaakt, tenzij schriftelijk anders overeengekomen.</li>
                      <li>Indien de inhoud van de opdrachtbevestiging afwijkt van deze algemene voorwaarden, prevaleert de opdrachtbevestiging.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 3 — Aanbiedingen, Aanbetaling en Overeenkomsten</h2>
                    <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400 marker:font-medium">
                      <li>Alle aanbiedingen en offertes van VOVON Development zijn vrijblijvend en gelden gedurende een periode van 1 maand, tenzij schriftelijk anders vermeld.</li>
                      <li>De overeenkomst komt tot stand op het moment dat de Opdrachtgever het aanbod van VOVON Development schriftelijk, digitaal of per e-mail aanvaardt, dan wel wanneer VOVON Development met instemming van de Opdrachtgever met de uitvoering van de werkzaamheden start.</li>
                      <li>Indien een aanbetaling of voorschot is overeengekomen, is VOVON Development gerechtigd de uitvoering van de werkzaamheden op te schorten totdat deze betaling is ontvangen.</li>
                      <li>VOVON Development is gerechtigd opdrachten gefaseerd uit te voeren en per fase te factureren.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 4 — Uitvoering van de Overeenkomst en Verplichtingen van de Opdrachtgever</h2>
                    <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400 marker:font-medium">
                      <li>VOVON Development zal de diensten naar beste inzicht, vermogen en conform de eisen van goed vakmanschap uitvoeren. Daarbij geldt dat VOVON Development een inspanningsverplichting heeft en geen resultaatsverplichting, tenzij uitdrukkelijk schriftelijk anders is overeengekomen.</li>
                      <li>Door VOVON Development opgegeven termijnen voor uitvoering zijn indicatief en gelden niet als fatale termijnen, tenzij schriftelijk uitdrukkelijk anders is overeengekomen.</li>
                      <li>De Opdrachtgever draagt er zorg voor dat alle informatie, documentatie, tekeningen, eigendomsgegevens, financiële gegevens, beleidsstukken, toegang tot locaties en overige benodigde gegevens tijdig, juist en volledig worden verstrekt.</li>
                      <li>VOVON Development is niet aansprakelijk voor schade, vertraging of extra kosten die voortvloeien uit onjuiste, onvolledige of te laat verstrekte informatie door de Opdrachtgever.</li>
                      <li>Indien de uitvoering wordt vertraagd doordat de Opdrachtgever niet voldoet aan zijn verplichtingen, komen alle daaruit voortvloeiende kosten, schade, wachturen en aanvullende werkzaamheden volledig voor rekening van de Opdrachtgever.</li>
                      <li>VOVON Development is gerechtigd derden in te schakelen indien dit voor een goede uitvoering van de opdracht wenselijk of noodzakelijk is. Kosten van derden worden aan de Opdrachtgever doorberekend, tenzij schriftelijk anders overeengekomen.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 5 — Prijzen, Betaling en Incasso</h2>
                    <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400 marker:font-medium">
                      <li>Alle prijzen zijn exclusief omzetbelasting, reis- en verblijfskosten, leges, externe advieskosten en overige verschotten, tenzij schriftelijk anders vermeld.</li>
                      <li>VOVON Development is gerechtigd haar tarieven jaarlijks te indexeren op basis van het consumentenprijsindexcijfer van het CBS of een vergelijkbare maatstaf.</li>
                      <li>Facturen dienen binnen 14 dagen na factuurdatum te zijn voldaan, tenzij schriftelijk anders overeengekomen.</li>
                      <li>Bij niet-tijdige betaling is de Opdrachtgever van rechtswege in verzuim, zonder dat een nadere ingebrekestelling is vereist.</li>
                      <li>Bij verzuim is de Opdrachtgever, naast het factuurbedrag, een rente verschuldigd van 5% per maand over het openstaande bedrag, waarbij een gedeelte van een maand als volledige maand geldt.</li>
                      <li>Alle gerechtelijke en buitengerechtelijke incassokosten, met een minimum van € 350,00, komen volledig voor rekening van de Opdrachtgever.</li>
                      <li>VOVON Development is gerechtigd haar werkzaamheden op te schorten zolang openstaande facturen niet volledig zijn voldaan.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 6 — Wijziging en Meerwerk</h2>
                    <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400 marker:font-medium">
                      <li>Indien de Opdrachtgever wijzigingen wenst in de oorspronkelijke opdracht, kan VOVON Development de daaruit voortvloeiende werkzaamheden als meerwerk factureren.</li>
                      <li>Onder meerwerk wordt onder meer verstaan: aanvullende overleggen, gewijzigde uitgangspunten, extra rapportages, aanvullende berekeningen, extra projectbegeleiding, nieuwe beleids- of gemeentelijke vereisten, aanvullende afstemming met derden of werkzaamheden die buiten de oorspronkelijke opdracht vallen.</li>
                      <li>Wijzigingen en bijbehorende kosten worden bij voorkeur vooraf schriftelijk overeengekomen. Indien onmiddellijke uitvoering noodzakelijk is voor de voortgang van het project, is VOVON Development gerechtigd redelijke kosten voor meerwerk achteraf te factureren.</li>
                      <li>Mondelinge afspraken zijn uitsluitend bindend indien deze schriftelijk of per e-mail door VOVON Development zijn bevestigd.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 7 — Annulering en Schadevergoeding</h2>
                    <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400 marker:font-medium">
                      <li>De Opdrachtgever kan een overeenkomst of geplande afspraak uitsluitend schriftelijk of per e-mail annuleren.</li>
                      <li>Bij annulering door de Opdrachtgever gelden de volgende annuleringskosten als onmiddellijk opeisbare schadevergoeding:
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                          <li>Annulering meer dan 7 werkdagen voor de geplande afspraak of startdatum: reeds gemaakte kosten en bestede uren worden volledig gefactureerd.</li>
                          <li>Annulering tussen 7 en 3 werkdagen voor de geplande afspraak of startdatum: de Opdrachtgever is 50% van het overeengekomen bedrag of de betreffende fase verschuldigd.</li>
                          <li>Annulering binnen 3 werkdagen voor de geplande afspraak of startdatum, of bij no-show: de Opdrachtgever is 100% van het overeengekomen bedrag of de betreffende fase verschuldigd.</li>
                        </ul>
                      </li>
                      <li>Indien een voorschot of aanbetaling is overeengekomen, wordt deze bij annulering niet gerestitueerd, tenzij schriftelijk anders overeengekomen.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 8 — Overmacht</h2>
                    <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400 marker:font-medium">
                      <li>In geval van overmacht is VOVON Development niet gehouden tot het nakomen van enige verplichting jegens de Opdrachtgever.</li>
                      <li>Onder overmacht wordt verstaan iedere van buiten komende oorzaak, voorzien of onvoorzien, waarop VOVON Development geen invloed kan uitoefenen. Hieronder vallen onder meer, maar niet uitsluitend: ziekte, pandemieën, oorlog, terrorisme, brand, waterschade, extreme weersomstandigheden, stakingen, overheidsmaatregelen, vertragingen bij gemeenten of overheden, netbeheerders, adviseurs of andere derden, storingen in digitale systemen, internetstoringen en andere omstandigheden die de uitvoering belemmeren.</li>
                      <li>In geval van overmacht heeft VOVON Development het recht de uitvoering van de overeenkomst op te schorten of de overeenkomst geheel of gedeeltelijk te ontbinden, zonder verplichting tot schadevergoeding.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 9 — Aansprakelijkheid en Vrijwaring</h2>
                    <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400 marker:font-medium">
                      <li>De aansprakelijkheid van VOVON Development is te allen tijde beperkt tot directe schade en is gemaximeerd tot het bedrag dat voor de betreffende opdracht of opdrachtfase aan de Opdrachtgever is gefactureerd en betaald.</li>
                      <li>Indien de aansprakelijkheidsverzekering van VOVON Development in een concreet geval dekking biedt, is de aansprakelijkheid beperkt tot het bedrag dat daadwerkelijk door de verzekeraar wordt uitgekeerd.</li>
                      <li>Aansprakelijkheid voor indirecte schade is volledig uitgesloten. Hieronder valt onder meer, maar niet uitsluitend: gevolgschade, gederfde winst, gemiste besparingen, reputatieschade, waardedaling, verlies van data, bedrijfsstagnatie, vertraging in planvorming, vertraging in vergunningprocedures, misgelopen subsidies of gemiste commerciële kansen.</li>
                      <li>VOVON Development is niet aansprakelijk voor besluiten, weigeringen, vertragingen of beleidswijzigingen van gemeenten, provincies, rijksoverheid, netbeheerders, omgevingsdiensten, nutsbedrijven of andere publieke of private derden.</li>
                      <li>De Opdrachtgever vrijwaart VOVON Development voor alle aanspraken van derden die verband houden met de uitvoering van de overeenkomst, tenzij sprake is van opzet of bewuste roekeloosheid aan de zijde van VOVON Development.</li>
                      <li>Indien schade ontstaat doordat de Opdrachtgever onjuiste, onvolledige of te late informatie heeft verstrekt, is VOVON Development daarvoor niet aansprakelijk.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 10 — Garantie en Klachten</h2>
                    <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400 marker:font-medium">
                      <li>VOVON Development staat in voor een zorgvuldige uitvoering van de diensten conform de redelijkerwijs te verwachten professionele normen.</li>
                      <li>VOVON Development geeft geen garantie op het verkrijgen van vergunningen, planologische medewerking, subsidies, financiering, netcapaciteit, bestuurlijke instemming, commerciële haalbaarheid of andere resultaten die afhankelijk zijn van derden of externe omstandigheden.</li>
                      <li>Klachten over geleverde diensten dienen binnen 14 dagen na levering schriftelijk en gemotiveerd bij VOVON Development te worden ingediend. Bij gebreke daarvan worden de diensten geacht te zijn aanvaard.</li>
                      <li>Het indienen van een klacht schort de betalingsverplichting van de Opdrachtgever niet op.</li>
                      <li>Indien een klacht gegrond is, krijgt VOVON Development de gelegenheid om de tekortkoming te herstellen. Herstel geldt als enige remedie, tenzij schriftelijk anders overeengekomen.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 11 — Intellectueel Eigendom en Geheimhouding</h2>
                    <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400 marker:font-medium">
                      <li>Alle intellectuele eigendomsrechten op door VOVON Development ontwikkelde producten, rapporten, adviezen, modellen, berekeningen, formats, presentaties, strategieën, concepten, teksten, visualisaties en overige materialen blijven te allen tijde eigendom van VOVON Development, tenzij schriftelijk anders overeengekomen.</li>
                      <li>De Opdrachtgever verkrijgt uitsluitend een gebruiksrecht voor het doel waarvoor de opdracht is verstrekt.</li>
                      <li>Het is de Opdrachtgever niet toegestaan om de resultaten van de diensten te verveelvoudigen, openbaar te maken, te exploiteren, door te verkopen of aan derden ter beschikking te stellen zonder voorafgaande schriftelijke toestemming van VOVON Development.</li>
                      <li>Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar ontvangen. Deze verplichting blijft ook na beëindiging van de overeenkomst van kracht.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 12 — Privacy en Gegevensverwerking</h2>
                    <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400 marker:font-medium">
                      <li>VOVON Development verwerkt persoonsgegevens van de Opdrachtgever conform de geldende wet- en regelgeving, waaronder de Algemene Verordening Gegevensbescherming.</li>
                      <li>Persoonsgegevens worden uitsluitend verwerkt voor de uitvoering van de overeenkomst, communicatie met de Opdrachtgever, administratie, facturatie en het voldoen aan wettelijke verplichtingen.</li>
                      <li>Indien gebruik wordt gemaakt van digitale formulieren, cloudopslag, e-maildiensten of andere digitale systemen, kunnen gegevens worden verwerkt door externe dienstverleners. VOVON Development zal daarbij redelijke zorg betrachten bij de keuze van deze dienstverleners.</li>
                      <li>Meer informatie over de verwerking van persoonsgegevens is opgenomen in het privacybeleid van VOVON Development.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 13 — Niet-Werving</h2>
                    <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400 marker:font-medium">
                      <li>Gedurende de looptijd van de overeenkomst en voor een periode van 1 jaar na beëindiging daarvan is het de Opdrachtgever niet toegestaan om medewerkers, adviseurs, ingehuurde professionals of samenwerkingspartners van VOVON Development die betrokken zijn geweest bij de uitvoering van de overeenkomst rechtstreeks te benaderen, in dienst te nemen of werkzaamheden voor zich te laten verrichten, tenzij schriftelijk anders overeengekomen.</li>
                      <li>Bij overtreding van dit artikel is de Opdrachtgever een direct opeisbare boete verschuldigd van € 25.000,00 per overtreding, onverminderd het recht van VOVON Development om volledige schadevergoeding te vorderen.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 14 — Beëindiging van de Overeenkomst</h2>
                    <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400 marker:font-medium">
                      <li>VOVON Development heeft het recht de overeenkomst met onmiddellijke ingang geheel of gedeeltelijk te beëindigen indien sprake is van faillissement, surseance van betaling, beslaglegging, liquidatie, staking van onderneming of betalingsonmacht van de Opdrachtgever.</li>
                      <li>VOVON Development heeft eveneens het recht de overeenkomst te beëindigen indien de Opdrachtgever zijn verplichtingen niet nakomt, waaronder begrepen het niet tijdig betalen van facturen of het niet tijdig verstrekken van noodzakelijke informatie.</li>
                      <li>Bij beëindiging blijven alle betalingsverplichtingen voor reeds uitgevoerde werkzaamheden, gemaakte kosten en aangegane verplichtingen onverminderd van kracht.</li>
                      <li>Bepalingen die naar hun aard bestemd zijn om na beëindiging voort te duren, waaronder bepalingen over betaling, aansprakelijkheid, geheimhouding, intellectueel eigendom en geschillen, blijven na beëindiging van kracht.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Artikel 15 — Toepasselijk Recht en Geschillen</h2>
                    <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400 marker:font-medium">
                      <li>Op alle overeenkomsten, aanbiedingen, werkzaamheden en geschillen tussen VOVON Development en de Opdrachtgever is uitsluitend Nederlands recht van toepassing.</li>
                      <li>Geschillen zullen in eerste aanleg uitsluitend worden voorgelegd aan de bevoegde rechter in het arrondissement waar VOVON Development statutair is gevestigd, tenzij dwingendrechtelijke bepalingen anders voorschrijven.</li>
                      <li>Partijen zullen zich inspannen om geschillen eerst in onderling overleg op te lossen voordat zij een gerechtelijke procedure starten.</li>
                    </ol>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TermsModal;

