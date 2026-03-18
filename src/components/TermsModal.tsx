import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
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
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900">Algemene Voorwaarden VOVON</h2>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto prose prose-slate max-w-none">
              <h3>Artikel 1 – Definities</h3>
              <p>In deze algemene voorwaarden wordt verstaan onder:</p>
              <p>1.1 VOVON: de gebruiker van deze algemene voorwaarden, handelend onder de naam VOVON, alsmede de aan haar gelieerde ondernemingen of rechtspersonen voor zover zij van deze voorwaarden gebruik maken.</p>
              <p>1.2 Cliënt: iedere natuurlijke persoon, rechtspersoon of andere entiteit die met VOVON een overeenkomst sluit, wenst te sluiten of aan wie VOVON een aanbieding doet.</p>
              <p>1.3 Overeenkomst: iedere overeenkomst tussen VOVON en de Cliënt betreffende dienstverlening op het gebied van vastgoed, projectontwikkeling, advisering, procesbegeleiding, onderzoek, bemiddeling en aanverwante werkzaamheden.</p>
              <p>1.4 Opdracht: de door de Cliënt aan VOVON verstrekte opdracht tot het verrichten van werkzaamheden of diensten, zoals vastgelegd in een overeenkomst, opdrachtbevestiging, offerte, e-mail of anderszins.</p>
              <p>1.5 Werkzaamheden: alle door VOVON in het kader van de Overeenkomst te verrichten werkzaamheden, in de ruimste zin van het woord.</p>
              <p>1.6 Offerte: ieder aanbod, voorstel, prijsopgave of andere aanbieding van VOVON.</p>
              <p>1.7 Derden: door VOVON ingeschakelde externe partijen, adviseurs, opdrachtnemers, deskundigen of toeleveranciers.</p>
              <p>1.8 Schriftelijk: onder schriftelijk wordt tevens verstaan communicatie per e-mail of andere elektronische communicatiemiddelen.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 2 – Toepasselijkheid</h3>
              <p>2.1 Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen, opdrachten, overeenkomsten, rechtsverhoudingen en werkzaamheden van VOVON.</p>
              <p>2.2 Afwijkingen van deze algemene voorwaarden zijn slechts geldig indien deze uitdrukkelijk en schriftelijk tussen partijen zijn overeengekomen.</p>
              <p>2.3 De toepasselijkheid van eventuele algemene voorwaarden van de Cliënt wordt uitdrukkelijk van de hand gewezen.</p>
              <p>2.4 Indien één of meerdere bepalingen van deze algemene voorwaarden geheel of gedeeltelijk nietig zijn, vernietigd worden of anderszins onafdwingbaar blijken, blijven de overige bepalingen onverminderd van kracht. Partijen zullen in dat geval een vervangende bepaling overeenkomen die zoveel mogelijk aansluit bij doel en strekking van de oorspronkelijke bepaling.</p>
              <p>2.5 Deze algemene voorwaarden gelden mede ten behoeve van bestuurders, medewerkers, ingeschakelde Derden en gelieerde partijen van VOVON, die zich daarop rechtstreeks kunnen beroepen.</p>
              <p>2.6 In geval van strijdigheid tussen de Overeenkomst en deze algemene voorwaarden, prevaleert de Overeenkomst, tenzij uitdrukkelijk anders is bepaald.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 3 – Offertes en totstandkoming van de Overeenkomst</h3>
              <p>3.1 Alle offertes en aanbiedingen van VOVON zijn vrijblijvend, tenzij schriftelijk uitdrukkelijk anders is vermeld.</p>
              <p>3.2 Tenzij anders aangegeven, zijn offertes geldig gedurende dertig (30) dagen na dagtekening.</p>
              <p>3.3 Een Overeenkomst komt tot stand zodra:<br/>
              a. de Cliënt een offerte of opdrachtbevestiging van VOVON schriftelijk of elektronisch heeft aanvaard; of<br/>
              b. VOVON op verzoek van de Cliënt met de uitvoering van de werkzaamheden is begonnen; of<br/>
              c. VOVON op andere wijze redelijkerwijs mocht aannemen dat de Cliënt met de uitvoering heeft ingestemd.</p>
              <p>3.4 VOVON mag een aanvaarding of opdracht zonder opgaaf van redenen weigeren.</p>
              <p>3.5 Offertes zijn gebaseerd op de informatie die door de Cliënt is verstrekt. De Cliënt staat ervoor in dat alle voor de opzet en uitvoering relevante informatie volledig en juist is verstrekt.</p>
              <p>3.6 Een samengestelde offerte verplicht VOVON niet tot uitvoering van een gedeelte van de opdracht tegen een evenredig deel van de opgegeven prijs.</p>
              <p>3.7 Offertes en tarieven gelden niet automatisch voor toekomstige opdrachten.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 4 – Aard van de dienstverlening</h3>
              <p>4.1 VOVON verricht onder meer werkzaamheden op het gebied van vastgoed, gebiedsontwikkeling, bouw- en projectbegeleiding, haalbaarheidsonderzoeken, financiële analyses, marktanalyses, transactiebemiddeling, vendor due diligence, opstellen van verkoop- en projectdocumentatie, subsidie- en ontwikkeltrajecten en overige daarmee samenhangende diensten.</p>
              <p>4.2 De door VOVON verrichte werkzaamheden betreffen, tenzij schriftelijk anders overeengekomen, steeds een inspanningsverplichting en uitdrukkelijk geen resultaatsverplichting.</p>
              <p>4.3 VOVON geeft geen garantie ten aanzien van het behalen van een beoogd resultaat, vergunning, verkoop, verhuur, subsidie, transactiesucces, financiering, rendement of enig ander door de Cliënt beoogd doel.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 5 – Uitvoering van de Opdracht</h3>
              <p>5.1 Alle opdrachten worden geacht uitsluitend aan VOVON te zijn verstrekt, ook indien het de uitdrukkelijke of stilzwijgende bedoeling is dat de werkzaamheden door een specifieke persoon zullen worden uitgevoerd.</p>
              <p>5.2 De werking van artikel 7:404 BW en artikel 7:407 lid 2 BW wordt uitdrukkelijk uitgesloten.</p>
              <p>5.3 VOVON zal de werkzaamheden naar beste inzicht, deskundigheid en vermogen uitvoeren, overeenkomstig de eisen van goed vakmanschap.</p>
              <p>5.4 VOVON is gerechtigd de wijze van uitvoering van de opdracht zelfstandig te bepalen, met inachtneming van de overeengekomen inhoud en planning.</p>
              <p>5.5 VOVON is gerechtigd bij de uitvoering van de opdracht Derden in te schakelen. VOVON zal daarbij een redelijke mate van zorgvuldigheid betrachten bij de selectie van deze Derden.</p>
              <p>5.6 Indien VOVON voor een behoorlijke uitvoering van de Opdracht nodig acht dat bepaalde werkzaamheden door Derden worden verricht, is zij daartoe bevoegd. Eventuele kosten daarvan komen voor rekening van de Cliënt, tenzij schriftelijk anders overeengekomen.</p>
              <p>5.7 VOVON heeft het recht opdrachten te weigeren, de uitvoering op te schorten of zich tussentijds uit een opdracht terug te trekken indien zij daarvoor een redelijke grond heeft, waaronder begrepen belangenconflicten, gebrek aan medewerking, onvolledige informatie, reputatierisico’s of betalingsachterstanden.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 6 – Verplichtingen van de Cliënt</h3>
              <p>6.1 De Cliënt verstrekt tijdig alle gegevens, documenten, tekeningen, inlichtingen en overige informatie die VOVON redelijkerwijs nodig heeft voor een correcte uitvoering van de opdracht.</p>
              <p>6.2 De Cliënt staat in voor de juistheid, volledigheid en betrouwbaarheid van de door of namens hem verstrekte gegevens, ook indien deze van Derden afkomstig zijn.</p>
              <p>6.3 Indien noodzakelijke gegevens niet, niet tijdig of niet volledig aan VOVON worden verstrekt, heeft VOVON het recht de uitvoering van de Opdracht op te schorten en de daardoor ontstane extra kosten en vertragingen aan de Cliënt in rekening te brengen.</p>
              <p>6.4 De Cliënt draagt zorg voor tijdige besluitvorming, beschikbaarheid en bereikbaarheid, zodat de werkzaamheden zonder onnodige vertraging kunnen worden uitgevoerd.</p>
              <p>6.5 De Cliënt is verantwoordelijk voor het gebruik van de door VOVON verstrekte adviezen, rapportages, documenten en andere resultaten van de werkzaamheden.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 7 – DNR 2011</h3>
              <p>7.1 Voor zover de werkzaamheden van VOVON vallen onder bouwmanagement, projectmanagement, ontwerp-, advies- of ingenieurswerkzaamheden, kan naast deze algemene voorwaarden tevens De Nieuwe Regeling 2011 (DNR 2011) van toepassing zijn, indien en voor zover dat schriftelijk is overeengekomen.</p>
              <p>7.2 In geval van strijdigheid tussen de DNR 2011 en deze algemene voorwaarden, prevaleren de bepalingen van deze algemene voorwaarden, tenzij uitdrukkelijk schriftelijk anders is overeengekomen.</p>
              <p>7.3 Door aanvaarding van de opdracht verklaart de Cliënt, indien de DNR 2011 van toepassing is verklaard, bekend te zijn met de inhoud daarvan en deze te aanvaarden.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 8 – Tarieven, honorarium en kosten</h3>
              <p>8.1 Werkzaamheden worden uitgevoerd op basis van een uurtarief, dagdeeltarief, vaste prijs, abonnementsvorm, ontwikkelvergoeding, succes fee of een andere vergoeding, zoals schriftelijk overeengekomen.</p>
              <p>8.2 Indien geen vaste prijs is overeengekomen, wordt het honorarium bepaald op basis van de door VOVON bestede tijd tegen de op dat moment geldende tarieven.</p>
              <p>8.3 Alle tarieven en vergoedingen zijn exclusief btw en exclusief overige heffingen, kosten van Derden en out-of-pocketkosten, tenzij schriftelijk anders is vermeld.</p>
              <p>8.4 Tenzij schriftelijk anders overeengekomen, zijn in de tarieven in ieder geval niet inbegrepen:</p>
              <ul>
                <li>verblijf- en reiskosten;</li>
                <li>kosten van prints, tekeningen, rapporten en berekeningen;</li>
                <li>kosten van presentatiemateriaal, visualisaties, foto’s en maquettes;</li>
                <li>promotie- en advertentiekosten;</li>
                <li>telecommunicatie-, porti- en verzendkosten;</li>
                <li>kadastrale kosten, registratierechten, leges en griffierechten;</li>
                <li>aanbestedingskosten;</li>
                <li>kosten van contractvorming, deurwaarders, vertalingen en juridische of technische adviseurs;</li>
                <li>kosten van Derden.</li>
              </ul>
              <p>8.5 VOVON is gerechtigd voor aanvang van de werkzaamheden of gedurende de opdracht een voorschot te verlangen. VOVON is bevoegd de uitvoering van de werkzaamheden op te schorten zolang het voorschot niet is voldaan.</p>
              <p>8.6 VOVON is gerechtigd haar tarieven periodiek aan te passen. Indien een prijsverhoging plaatsvindt binnen drie maanden na het sluiten van de Overeenkomst en deze verhoging meer dan tien procent (10%) bedraagt, heeft de Cliënt het recht de Overeenkomst schriftelijk te beëindigen, tenzij de prijsverhoging voortvloeit uit wet- of regelgeving of kostenstijgingen van Derden.</p>
              <p>8.7 Meerwerk, aanvullende werkzaamheden of wijzigingen in de opdracht worden afzonderlijk in rekening gebracht op basis van de overeengekomen tarieven, tenzij schriftelijk anders is overeengekomen.</p>
              <p>8.8 Indien werkzaamheden op verzoek van de Cliënt worden doorgeschoven naar een volgend kalenderjaar, is VOVON gerechtigd een redelijke tariefaanpassing toe te passen.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 9 – Wijziging van de Opdracht</h3>
              <p>9.1 Indien tijdens de uitvoering van de Overeenkomst blijkt dat voor een behoorlijke uitvoering wijziging, aanvulling of uitbreiding van de werkzaamheden noodzakelijk is, zullen partijen hierover in overleg treden.</p>
              <p>9.2 Wijzigingen in de opdracht kunnen gevolgen hebben voor de planning, doorlooptijd en kosten. VOVON zal de Cliënt daarover zo spoedig mogelijk informeren.</p>
              <p>9.3 Indien de wijziging leidt tot meerwerk of extra kosten, is VOVON gerechtigd deze aanvullend in rekening te brengen.</p>
              <p>9.4 VOVON is niet verplicht met een wijzigingsverzoek in te stemmen indien dit redelijkerwijs niet van haar kan worden verlangd.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 10 – Facturatie en betaling</h3>
              <p>10.1 VOVON is gerechtigd periodiek, op basis van voortgang, voorschot, nacalculatie of na afronding van werkzaamheden te factureren.</p>
              <p>10.2 Facturen dienen te worden voldaan binnen dertig (30) dagen na factuurdatum, zonder korting, verrekening of opschorting.</p>
              <p>10.3 Indien de Cliënt bezwaar heeft tegen een factuur, dient hij dit binnen acht (8) dagen na factuurdatum schriftelijk en gemotiveerd aan VOVON kenbaar te maken. Bij gebreke daarvan wordt de factuur geacht te zijn aanvaard.</p>
              <p>10.4 Bij niet-tijdige betaling is de Cliënt van rechtswege in verzuim en is wettelijke handelsrente verschuldigd vanaf de vervaldatum tot aan de dag van volledige betaling.</p>
              <p>10.5 Alle redelijke gerechtelijke en buitengerechtelijke incassokosten komen voor rekening van de Cliënt. De buitengerechtelijke kosten bedragen vijftien procent (15%) van de openstaande hoofdsom, met een minimum van € 300,00.</p>
              <p>10.6 Door de Cliënt gedane betalingen strekken eerst in mindering op verschuldigde rente en kosten en vervolgens op de oudste openstaande facturen.</p>
              <p>10.7 Indien de Cliënt in verzuim is, heeft VOVON het recht haar werkzaamheden op te schorten totdat volledige betaling heeft plaatsgevonden.</p>
              <p>10.8 In geval van faillissement, surseance van betaling, liquidatie, bedrijfsbeëindiging, beslaglegging of andere omstandigheden waaruit blijkt dat de Cliënt zijn verplichtingen mogelijk niet kan nakomen, zijn alle vorderingen van VOVON onmiddellijk opeisbaar.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 11 – Duur, opzegging en beëindiging</h3>
              <p>11.1 De Overeenkomst wordt aangegaan voor de duur zoals opgenomen in de opdrachtbevestiging of, bij gebreke daarvan, voor de duur van de opdracht.</p>
              <p>11.2 Een Overeenkomst voor onbepaalde tijd kan door beide partijen schriftelijk worden opgezegd met inachtneming van een opzegtermijn van drie (3) maanden, tenzij schriftelijk anders is overeengekomen.</p>
              <p>11.3 Een Overeenkomst voor bepaalde tijd kan tussentijds uitsluitend schriftelijk worden opgezegd met inachtneming van een opzegtermijn van één (1) maand, tenzij schriftelijk anders is overeengekomen.</p>
              <p>11.4 In geval van tussentijdse beëindiging door de Cliënt is deze gehouden tot betaling van:<br/>
              a. de reeds verrichte werkzaamheden;<br/>
              b. reeds gemaakte en nog te maken kosten die samenhangen met aangegane verplichtingen; en<br/>
              c. redelijke vergoeding voor gereserveerde capaciteit en aantoonbare schade als gevolg van de voortijdige beëindiging.</p>
              <p>11.5 VOVON is gerechtigd de Overeenkomst met onmiddellijke ingang geheel of gedeeltelijk op te schorten of te beëindigen indien:<br/>
              a. de Cliënt zijn verplichtingen niet, niet volledig of niet tijdig nakomt;<br/>
              b. na het sluiten van de Overeenkomst omstandigheden bekend worden die goede grond geven te vrezen dat de Cliënt zijn verplichtingen niet zal nakomen;<br/>
              c. de Cliënt failliet wordt verklaard, surseance aanvraagt, zijn onderneming staakt of wordt geliquideerd;<br/>
              d. de Cliënt weigert verlangde zekerheid te stellen.</p>
              <p>11.6 Beëindiging van de Overeenkomst laat de betalingsverplichtingen van de Cliënt onverlet.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 12 – Annulering van afspraken en bijeenkomsten</h3>
              <p>12.1 Indien een afspraak, bespreking, presentatie, sessie, bijeenkomst of een deel van de Opdracht door de Cliënt wordt geannuleerd of verplaatst, geldt de volgende regeling:<br/>
              a. bij annulering of verplaatsing meer dan 48 uur voor het geplande tijdstip worden geen kosten in rekening gebracht, behoudens reeds gemaakte kosten van Derden;<br/>
              b. bij annulering of verplaatsing binnen 48 uur voor het geplande tijdstip is VOVON gerechtigd 100% van het overeengekomen bedrag voor die activiteit in rekening te brengen.</p>
              <p>12.2 Reis- en voorbereidingskosten en reeds gemaakte kosten van Derden worden steeds volledig aan de Cliënt doorbelast.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 13 – Overmacht</h3>
              <p>13.1 Onder overmacht wordt verstaan iedere omstandigheid buiten de redelijke invloedssfeer van VOVON waardoor nakoming van de Overeenkomst tijdelijk of blijvend onmogelijk is, waaronder in ieder geval begrepen storingen, ziekte, uitval van personeel, overheidsmaatregelen, netwerkaandoeningen, pandemieën, brand, stakingen, tekortkomingen van toeleveranciers en storingen in communicatie- of informatiesystemen.</p>
              <p>13.2 In geval van overmacht is VOVON gerechtigd de uitvoering van de Overeenkomst op te schorten zolang de overmacht voortduurt.</p>
              <p>13.3 Indien de overmachtssituatie langer dan zestig (60) dagen voortduurt, hebben beide partijen het recht de Overeenkomst geheel of gedeeltelijk schriftelijk te beëindigen, zonder verplichting tot schadevergoeding.</p>
              <p>13.4 Reeds verrichte werkzaamheden en gemaakte kosten mogen door VOVON in rekening worden gebracht.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 14 – Aansprakelijkheid</h3>
              <p>14.1 VOVON zal haar werkzaamheden uitvoeren met de zorgvuldigheid die van een redelijk bekwaam en redelijk handelend professioneel dienstverlener mag worden verwacht.</p>
              <p>14.2 Iedere aansprakelijkheid van VOVON, uit welke hoofde dan ook, is beperkt tot vergoeding van directe schade.</p>
              <p>14.3 De totale aansprakelijkheid van VOVON is beperkt tot het bedrag dat in het desbetreffende geval onder de aansprakelijkheidsverzekering van VOVON wordt uitgekeerd, vermeerderd met het eventueel toepasselijke eigen risico.</p>
              <p>14.4 Indien om welke reden dan ook geen uitkering krachtens verzekering plaatsvindt, is de totale aansprakelijkheid beperkt tot het door VOVON in de betreffende opdracht in rekening gebrachte en door de Cliënt betaalde honorarium over de laatste twaalf (12) maanden, met een maximum van het factuurbedrag van de betreffende opdracht.</p>
              <p>14.5 VOVON is nimmer aansprakelijk voor indirecte schade, gevolgschade, gederfde winst, gemiste besparingen, stagnatieschade, reputatieschade, verminderde goodwill, schade wegens gemiste kansen, boetes of aanspraken van Derden.</p>
              <p>14.6 VOVON is evenmin aansprakelijk voor schade die is ontstaan door:<br/>
              a. onjuiste, onvolledige of te laat aangeleverde informatie van de Cliënt;<br/>
              b. beslissingen van overheden, vergunningverleners, financiers of andere Derden;<br/>
              c. handelen of nalaten van door VOVON ingeschakelde Derden, behoudens opzet of bewuste roekeloosheid van VOVON;<br/>
              d. gebruik van adviezen, rapportages of documenten buiten het doel waarvoor deze zijn verstrekt.</p>
              <p>14.7 Iedere aanspraak op schadevergoeding vervalt indien de Cliënt VOVON niet onverwijld, en uiterlijk binnen dertig (30) dagen nadat de schade is ontdekt of redelijkerwijs had behoren te worden ontdekt, schriftelijk en deugdelijk gemotiveerd aansprakelijk stelt.</p>
              <p>14.8 Iedere rechtsvordering jegens VOVON vervalt in ieder geval twaalf (12) maanden nadat de Cliënt met de schade en de mogelijke aansprakelijkheid bekend is geworden, tenzij binnen die termijn een rechtsvordering aanhangig is gemaakt.</p>
              <p>14.9 De in dit artikel opgenomen beperkingen gelden niet in geval van opzet of bewuste roekeloosheid van de leiding van VOVON.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 15 – Vrijwaring</h3>
              <p>15.1 De Cliënt vrijwaart VOVON, haar bestuurders, medewerkers en ingeschakelde Derden tegen alle aanspraken van Derden die voortvloeien uit of verband houden met de uitvoering van de Opdracht, voor zover die aanspraken hun oorzaak vinden in door de Cliënt verstrekte gegevens, instructies, besluiten, documenten of in ander handelen of nalaten van de Cliënt.</p>
              <p>15.2 De Cliënt vergoedt VOVON alle redelijke kosten van verweer tegen dergelijke aanspraken.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 16 – Vertrouwelijkheid</h3>
              <p>16.1 VOVON zal vertrouwelijke informatie van de Cliënt die haar in het kader van de Opdracht ter kennis komt zorgvuldig behandelen en niet zonder toestemming aan Derden verstrekken, behoudens voor zover verstrekking noodzakelijk is voor de uitvoering van de Opdracht of op grond van wet- of regelgeving verplicht is.</p>
              <p>16.2 De Cliënt zal op zijn beurt vertrouwelijke informatie over VOVON, haar werkwijze, offertes, adviezen, rapportages, concepten, modellen, methodieken en documenten niet zonder voorafgaande schriftelijke toestemming aan Derden verstrekken.</p>
              <p>16.3 De geheimhoudingsverplichtingen blijven ook na beëindiging van de Overeenkomst van kracht.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 17 – Intellectueel eigendom en gebruiksrechten</h3>
              <p>17.1 Alle intellectuele eigendomsrechten op door VOVON opgestelde of verstrekte adviezen, rapporten, analyses, ontwerpen, modellen, berekeningen, presentaties, tekeningen, offertes, concepten, documenten, digitale bestanden en andere werken berusten uitsluitend bij VOVON of haar licentiegevers.</p>
              <p>17.2 De Cliënt verkrijgt uitsluitend een niet-exclusief, niet-overdraagbaar en niet-sublicentieerbaar gebruiksrecht om de door VOVON verstrekte stukken te gebruiken voor het doel waarvoor deze in het kader van de betreffende Opdracht zijn verstrekt.</p>
              <p>17.3 Zonder voorafgaande schriftelijke toestemming van VOVON is het de Cliënt niet toegestaan om de in lid 1 bedoelde werken geheel of gedeeltelijk te verveelvoudigen, openbaar te maken, te bewerken, te exploiteren of aan Derden ter beschikking te stellen, anders dan voor intern gebruik of voor het overeengekomen doel.</p>
              <p>17.4 Door de Cliënt aangeleverde stukken en gegevens blijven eigendom van de Cliënt. De Cliënt vrijwaart VOVON tegen aanspraken van Derden met betrekking tot intellectuele eigendomsrechten op door de Cliënt aangeleverde materialen.</p>
              <p>17.5 VOVON is gerechtigd om, met inachtneming van vertrouwelijkheid, in algemene zin te verwijzen naar uitgevoerde opdrachten en de naam en het logo van de Cliënt te gebruiken als referentie, tenzij de Cliënt daartegen vooraf schriftelijk bezwaar heeft gemaakt.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 18 – Eigendom, afgifte en bewaarplicht</h3>
              <p>18.1 Door VOVON vervaardigde stukken, bestanden en andere resultaten van werkzaamheden blijven eigendom van VOVON, voor zover geen dwingendrechtelijke bepaling anders voorschrijft.</p>
              <p>18.2 VOVON is niet gehouden originele stukken of bronbestanden af te geven, tenzij schriftelijk anders is overeengekomen.</p>
              <p>18.3 VOVON is niet gehouden dossiers, documenten of digitale bestanden langer te bewaren dan gedurende een redelijke termijn na afronding van de Opdracht.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 19 – Privacy en persoonsgegevens</h3>
              <p>19.1 Voor zover VOVON in het kader van de Opdracht persoonsgegevens verwerkt, zullen partijen de toepasselijke privacywetgeving, waaronder de Algemene Verordening Gegevensbescherming (AVG), naleven.</p>
              <p>19.2 Tenzij schriftelijk anders overeengekomen, is de Cliënt aan te merken als verwerkingsverantwoordelijke en VOVON, voor zover van toepassing, als verwerker.</p>
              <p>19.3 De Cliënt staat ervoor in dat persoonsgegevens die aan VOVON worden verstrekt rechtmatig zijn verkregen en mogen worden verwerkt in het kader van de Opdracht.</p>
              <p>19.4 De Cliënt vrijwaart VOVON voor aanspraken van Derden en toezichthouders wegens schending van privacywetgeving die het gevolg is van handelen of nalaten van de Cliënt.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 20 – Communicatie en elektronische verzending</h3>
              <p>20.1 Communicatie tussen partijen mag elektronisch plaatsvinden.</p>
              <p>20.2 VOVON staat niet in voor de juiste, volledige of tijdige overbrenging van de inhoud van e-mails of andere elektronische berichten, noch voor de tijdige ontvangst daarvan.</p>
              <p>20.3 De Cliënt is verantwoordelijk voor een adequate digitale beveiliging en het regelmatig controleren van ontvangen berichten, bijlagen en spamfilters.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 21 – Inschakeling van personeel en relatiebeding</h3>
              <p>21.1 Het is de Cliënt niet toegestaan om tijdens de uitvoering van de Opdracht en gedurende een periode van twaalf (12) maanden na beëindiging daarvan zonder voorafgaande schriftelijke toestemming van VOVON medewerkers of door VOVON ingeschakelde personen direct of indirect in dienst te nemen, voor zich te laten werken of daarover te onderhandelen.</p>
              <p>21.2 Bij overtreding van dit artikel verbeurt de Cliënt aan VOVON een direct opeisbare boete van € 25.000 per overtreding, vermeerderd met € 1.000 voor iedere dag dat de overtreding voortduurt, onverminderd het recht van VOVON om volledige schadevergoeding te vorderen.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 22 – Geen overdracht van rechten en verplichtingen</h3>
              <p>22.1 Het is de Cliënt niet toegestaan zijn rechten of verplichtingen uit de Overeenkomst geheel of gedeeltelijk over te dragen, te verpanden of anderszins te bezwaren zonder voorafgaande schriftelijke toestemming van VOVON.</p>
              <p>22.2 VOVON is gerechtigd haar rechtsverhouding, rechten en verplichtingen over te dragen aan een aan haar gelieerde onderneming of rechtsopvolger.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 23 – Wijziging van voorwaarden en naamswijziging</h3>
              <p>23.1 VOVON is gerechtigd deze algemene voorwaarden te wijzigen of aan te vullen.</p>
              <p>23.2 Gewijzigde voorwaarden gelden ook ten aanzien van reeds bestaande Overeenkomsten vanaf dertig (30) dagen na schriftelijke of elektronische bekendmaking, tenzij de Cliënt binnen die termijn schriftelijk bezwaar maakt en de Overeenkomst opzegt voor de datum waarop de wijziging ingaat.</p>
              <p>23.3 Deze algemene voorwaarden blijven onverkort van kracht indien VOVON geheel of gedeeltelijk van naam, rechtsvorm, aandeelhouder of eigenaar wijzigt.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 24 – Klachten</h3>
              <p>24.1 Klachten over de uitvoering van de werkzaamheden of over facturen dienen zo spoedig mogelijk, doch uiterlijk binnen veertien (14) dagen nadat de Cliënt het gebrek of de tekortkoming heeft ontdekt of redelijkerwijs had behoren te ontdekken, schriftelijk en gemotiveerd aan VOVON te worden gemeld.</p>
              <p>24.2 Het indienen van een klacht schort de betalingsverplichting van de Cliënt niet op.</p>
              <p>24.3 Indien een klacht gegrond is, zal VOVON zich inspannen het gebrek binnen redelijke termijn te herstellen, tenzij herstel inmiddels onmogelijk of zinloos is geworden.</p>
              <p>24.4 Iedere aansprakelijkheid van VOVON ter zake klachten blijft beperkt tot hetgeen in artikel 14 is bepaald.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 25 – Kwalificatie van de rechtsverhouding</h3>
              <p>25.1 Partijen beogen met de Overeenkomst uitdrukkelijk geen arbeidsovereenkomst in de zin van artikel 7:610 BW tot stand te brengen, maar een overeenkomst van opdracht.</p>
              <p>25.2 VOVON voert de werkzaamheden uit als zelfstandig opdrachtnemer voor eigen rekening en risico.</p>
              <p>25.3 VOVON is zelf verantwoordelijk voor de afdracht van belastingen en premies en voor het treffen van passende verzekeringen.</p>
              <p>25.4 VOVON bepaalt, binnen de kaders van de Opdracht, zelfstandig de wijze waarop en de momenten waarop de werkzaamheden worden uitgevoerd.</p>
              <p>25.5 VOVON is gerechtigd zich, indien zij dat noodzakelijk acht, te laten vervangen door een persoon met vergelijkbare deskundigheid, met behoud van verantwoordelijkheid voor de uitvoering van de werkzaamheden.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Artikel 26 – Toepasselijk recht en geschillen</h3>
              <p>26.1 Op alle rechtsverhoudingen tussen VOVON en de Cliënt is uitsluitend Nederlands recht van toepassing.</p>
              <p>26.2 Partijen zullen zich inspannen om geschillen eerst in onderling overleg op te lossen.</p>
              <p>26.3 Indien partijen een geschil niet minnelijk kunnen oplossen, zullen zij eerst trachten dit op te lossen door mediation.</p>
              <p>26.4 Indien mediation niet tot een oplossing leidt, zal het geschil in eerste aanleg uitsluitend worden voorgelegd aan de bevoegde rechter in het arrondissement waar VOVON statutair of feitelijk gevestigd is.</p>
              <p>26.5 Bepalingen die naar hun aard bestemd zijn om na beëindiging van de Overeenkomst voort te duren, waaronder in ieder geval bepalingen over aansprakelijkheid, vertrouwelijkheid, intellectueel eigendom, betaling, toepasselijk recht en geschillen, blijven na beëindiging van kracht.</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TermsModal;
