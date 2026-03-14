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
              <ul>
                <li><strong>VOVON:</strong> de gebruiker van deze algemene voorwaarden, handelend onder de naam VOVON.</li>
                <li><strong>Cliënt:</strong> iedere natuurlijke of rechtspersoon die met VOVON een overeenkomst sluit of voornemens is dat te doen.</li>
                <li><strong>Overeenkomst:</strong> iedere overeenkomst tussen VOVON en de cliënt betreffende dienstverlening op het gebied van vastgoed, projectontwikkeling, advisering en aanverwante werkzaamheden.</li>
              </ul>

              <hr className="my-6" />

              <h3>Artikel 2 – Toepasselijkheid</h3>
              <ol>
                <li>Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, opdrachten, overeenkomsten en werkzaamheden van VOVON.</li>
                <li>Afwijkingen van deze voorwaarden zijn slechts geldig indien deze uitdrukkelijk en schriftelijk zijn overeengekomen.</li>
                <li>Eventuele algemene voorwaarden van de cliënt worden uitdrukkelijk van de hand gewezen.</li>
                <li>Indien één of meerdere bepalingen van deze voorwaarden nietig of vernietigbaar blijken, blijven de overige bepalingen volledig van kracht.</li>
              </ol>

              <hr className="my-6" />

              <h3>Artikel 3 – Diensten en werkzaamheden</h3>
              <p>VOVON begeleidt, adviseert en bemiddelt in bouw- en vastgoedgerelateerde vraagstukken, waaronder maar niet beperkt tot:</p>
              <ul>
                <li>bouw(project)begeleiding en bouwmanagement;</li>
                <li>ondersteuning bij onderhandelingen en begeleiding van vastgoedtransacties (koop en huur);</li>
                <li>haalbaarheidsonderzoek voor nieuwbouw, verbouw en renovatie;</li>
                <li>het opstellen van financiële businesscases;</li>
                <li>marktanalyse en marktonderzoek;</li>
                <li>vendor due diligence (waaronder onderzoek naar huurgegevens, eigendomssituaties, bouwkundige staat, markt, milieu en fiscaliteit);</li>
                <li>het opstellen van verkoopdocumentatie en biedboeken;</li>
                <li>subsidieaanvragen met betrekking tot duurzaam bouwen en herbestemming.</li>
              </ul>

              <hr className="my-6" />

              <h3>Artikel 4 – DNR 2011</h3>
              <p>Voor werkzaamheden die vallen onder bouw- en projectmanagement geldt naast deze voorwaarden tevens De Nieuwe Regeling 2011 (DNR 2011).</p>
              <p>In geval van tegenstrijdigheid tussen de DNR 2011 en deze algemene voorwaarden, prevaleren de bepalingen van deze algemene voorwaarden.</p>

              <hr className="my-6" />

              <h3>Artikel 5 – Opdracht en uitvoering</h3>
              <ol>
                <li>Alle opdrachten worden geacht uitsluitend aan VOVON te zijn verstrekt, ook indien de bedoeling is dat werkzaamheden door een specifieke persoon worden uitgevoerd.</li>
                <li>De werking van artikel 7:404 BW en artikel 7:407 lid 2 BW wordt uitdrukkelijk uitgesloten.</li>
                <li>VOVON heeft het recht opdrachten te weigeren of zich tussentijds uit een opdracht terug te trekken.</li>
              </ol>

              <hr className="my-6" />

              <h3>Artikel 6 – Tarieven en kosten</h3>
              <ol>
                <li>Werkzaamheden worden uitgevoerd op basis van een uurtarief, tenzij schriftelijk anders overeengekomen.</li>
                <li>VOVON stelt de cliënt vooraf op de hoogte van het geldende uurtarief.</li>
                <li>In het uurtarief zijn niet inbegrepen:
                  <ul>
                    <li>verblijfkosten;</li>
                    <li>kosten voor het vermenigvuldigen van documenten, tekeningen, rapporten en berekeningen;</li>
                    <li>kosten voor presentatiemateriaal zoals foto's, maquettes of visualisaties;</li>
                    <li>promotie- en advertentiekosten;</li>
                    <li>telecommunicatiekosten en portokosten;</li>
                    <li>kadastrale kosten en registratierechten;</li>
                    <li>kosten bij aanbestedingen;</li>
                    <li>kosten bij contractvorming, deurwaardersexploten, leges en vertaalkosten.</li>
                  </ul>
                </li>
                <li>Deze kosten worden afzonderlijk en gespecificeerd aan de cliënt doorbelast.</li>
                <li>Alle tarieven zijn exclusief btw.</li>
              </ol>

              <hr className="my-6" />

              <h3>Artikel 7 – Voorschotten</h3>
              <p>VOVON is gerechtigd een voorschotnota te sturen voordat met werkzaamheden wordt gestart. Werkzaamheden kunnen worden opgeschort totdat het voorschot is voldaan.</p>

              <hr className="my-6" />

              <h3>Artikel 8 – Betaling</h3>
              <ol>
                <li>Facturen dienen te worden betaald binnen 30 dagen na factuurdatum, zonder korting, verrekening of opschorting.</li>
                <li>Bij niet-tijdige betaling is de cliënt de wettelijke handelsrente verschuldigd.</li>
                <li>Alle gerechtelijke en buitengerechtelijke incassokosten komen voor rekening van de cliënt.</li>
                <li>De buitengerechtelijke kosten bedragen 15% van de hoofdsom met een minimum van €200.</li>
              </ol>

              <hr className="my-6" />

              <h3>Artikel 9 – Inschakeling van derden</h3>
              <ol>
                <li>VOVON is gerechtigd bij de uitvoering van opdrachten derden in te schakelen.</li>
                <li>VOVON zal bij de selectie van derden de nodige zorgvuldigheid betrachten.</li>
              </ol>

              <hr className="my-6" />

              <h3>Artikel 10 – Verplichtingen van de cliënt</h3>
              <ol>
                <li>De cliënt verstrekt alle gegevens die noodzakelijk zijn voor de uitvoering van de opdracht.</li>
                <li>VOVON is niet aansprakelijk voor schade die ontstaat doordat onjuiste of onvolledige informatie door de cliënt is verstrekt.</li>
              </ol>

              <hr className="my-6" />

              <h3>Artikel 11 – Inspanningsverplichting</h3>
              <p>Tenzij uitdrukkelijk anders overeengekomen, geldt voor de werkzaamheden van VOVON een inspanningsverplichting en geen resultaatsverplichting.</p>

              <hr className="my-6" />

              <h3>Artikel 12 – Aansprakelijkheid</h3>
              <ol>
                <li>VOVON zal haar werkzaamheden uitvoeren met de zorgvuldigheid die van een professioneel dienstverlener mag worden verwacht.</li>
                <li>Indien aansprakelijkheid wordt vastgesteld, is deze beperkt tot het bedrag dat door de aansprakelijkheidsverzekeraar wordt uitgekeerd.</li>
                <li>Indien geen verzekeringsuitkering plaatsvindt, is de aansprakelijkheid beperkt tot het factuurbedrag van de betreffende opdracht over het laatste kalenderjaar.</li>
                <li>Deze beperking geldt niet bij opzet of grove nalatigheid.</li>
                <li>Deze aansprakelijkheidsbeperking geldt tevens voor door VOVON ingeschakelde derden.</li>
              </ol>

              <hr className="my-6" />

              <h3>Artikel 13 – Vrijwaring</h3>
              <p>De cliënt vrijwaart VOVON tegen aanspraken van derden die voortvloeien uit of verband houden met de door VOVON verrichte werkzaamheden.</p>

              <hr className="my-6" />

              <h3>Artikel 14 – Intellectueel eigendom</h3>
              <ol>
                <li>Alle intellectuele eigendomsrechten op adviezen, rapporten, ontwerpen, documenten, modellen en andere geestesproducten blijven eigendom van VOVON.</li>
                <li>Het is de cliënt niet toegestaan deze zonder voorafgaande schriftelijke toestemming te verveelvoudigen, openbaar te maken of te exploiteren.</li>
              </ol>

              <hr className="my-6" />

              <h3>Artikel 15 – Wijziging diensten</h3>
              <p>VOVON behoudt zich het recht voor diensten te wijzigen, uit te breiden of te beëindigen.</p>

              <hr className="my-6" />

              <h3>Artikel 16 – Communicatie</h3>
              <p>VOVON staat niet in voor de juiste en volledige overbrenging van de inhoud van verzonden e-mails of faxberichten, noch voor de tijdige ontvangst daarvan.</p>

              <hr className="my-6" />

              <h3>Artikel 17 – Overdracht overeenkomst</h3>
              <p>Het is de cliënt niet toegestaan rechten of verplichtingen uit de overeenkomst over te dragen aan derden zonder voorafgaande schriftelijke toestemming van VOVON.</p>

              <hr className="my-6" />

              <h3>Artikel 18 – Wijziging voorwaarden</h3>
              <p>VOVON is gerechtigd deze algemene voorwaarden te wijzigen. De gewijzigde voorwaarden worden van kracht zodra deze zijn gepubliceerd of aan de cliënt zijn medegedeeld.</p>

              <hr className="my-6" />

              <h3>Artikel 19 – Naams- of rechtsvormwijziging</h3>
              <p>Deze algemene voorwaarden blijven van kracht indien VOVON geheel of gedeeltelijk van naam, rechtsvorm of eigenaar verandert.</p>

              <hr className="my-6" />

              <h3>Artikel 20 – Toepasselijk recht</h3>
              <p>Op alle overeenkomsten en werkzaamheden van VOVON is Nederlands recht van toepassing.</p>

              <hr className="my-6" />

              <h3>Artikel 21 – Geschillen</h3>
              <ol>
                <li>Partijen zullen geschillen eerst proberen op te lossen door mediation conform het reglement van het Nederlands Mediation Instituut (NMI).</li>
                <li>Indien mediation niet tot een oplossing leidt, zal het geschil worden voorgelegd aan de bevoegde rechter in het arrondissement waar VOVON gevestigd is.</li>
              </ol>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TermsModal;
