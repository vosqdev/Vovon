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
              <h2 className="text-xl font-bold mb-4">Verkorte Algemene Voorwaarden – VOVON (commerciële webversie)</h2>

              <h3>1. Toepasselijkheid</h3>
              <p>
                Deze algemene voorwaarden zijn van toepassing op alle offertes, opdrachten en overeenkomsten van VOVON. Toepasselijkheid van voorwaarden van de cliënt wordt uitgesloten.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>2. Overeenkomst</h3>
              <p>Een overeenkomst komt tot stand door:</p>
              <ul>
                <li>schriftelijke of mondelinge aanvaarding, of</li>
                <li>aanvang van de werkzaamheden door VOVON.</li>
              </ul>
              <p>Offertes zijn vrijblijvend en 30 dagen geldig, tenzij anders vermeld.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>3. Dienstverlening</h3>
              <p>
                VOVON levert diensten op het gebied van vastgoed, ontwikkeling, advisering en projectbegeleiding.
              </p>
              <p>
                Alle werkzaamheden worden uitgevoerd op basis van een inspanningsverplichting. Resultaten kunnen niet worden gegarandeerd.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>4. Uitvoering</h3>
              <p>VOVON voert opdrachten uit naar beste inzicht en deskundigheid en is gerechtigd:</p>
              <ul>
                <li>de uitvoering zelfstandig in te richten</li>
                <li>derden in te schakelen</li>
              </ul>
              <p>
                VOVON is niet aansprakelijk voor tekortkomingen van ingeschakelde derden, behoudens opzet of bewuste roekeloosheid.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>5. Verplichtingen van de cliënt</h3>
              <p>De cliënt zorgt voor:</p>
              <ul>
                <li>tijdige en juiste informatie</li>
                <li>medewerking en besluitvorming</li>
              </ul>
              <p>
                De cliënt blijft verantwoordelijk voor het gebruik van adviezen en resultaten.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>6. Tarieven en kosten</h3>
              <p>Werkzaamheden worden uitgevoerd op basis van:</p>
              <ul>
                <li>uurtarief, vaste prijs of andere afgesproken vergoeding</li>
              </ul>
              <p>
                Alle bedragen zijn exclusief btw en kosten van derden.<br />
                Meerwerk wordt afzonderlijk in rekening gebracht.<br />
                VOVON kan een voorschot verlangen.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>7. Betaling</h3>
              <p>Facturen dienen binnen 30 dagen te worden voldaan.</p>
              <p>Bij te late betaling:</p>
              <ul>
                <li>is wettelijke handelsrente verschuldigd</li>
                <li>kunnen incassokosten in rekening worden gebracht</li>
                <li>mag VOVON werkzaamheden opschorten</li>
              </ul>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>8. Wijzigingen en meerwerk</h3>
              <p>Wijzigingen in de opdracht kunnen leiden tot:</p>
              <ul>
                <li>aangepaste planning</li>
                <li>extra kosten</li>
              </ul>
              <p>Meerwerk wordt aanvullend gefactureerd.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>9. Duur en beëindiging</h3>
              <p>Opdrachten lopen voor de afgesproken duur of tot afronding.</p>
              <p>Bij tussentijdse beëindiging door de cliënt:</p>
              <ul>
                <li>worden reeds verrichte werkzaamheden en kosten in rekening gebracht</li>
              </ul>
              <p>VOVON kan de overeenkomst opschorten of beëindigen bij o.a.:</p>
              <ul>
                <li>wanbetaling</li>
                <li>onvoldoende medewerking</li>
              </ul>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>10. Aansprakelijkheid</h3>
              <p>De aansprakelijkheid van VOVON is beperkt tot:</p>
              <ul>
                <li>directe schade</li>
                <li>maximaal het bedrag dat door de verzekering wordt uitgekeerd</li>
              </ul>
              <p>
                Indien geen uitkering plaatsvindt, is aansprakelijkheid beperkt tot het betaalde honorarium voor de betreffende opdracht.
              </p>
              <p>VOVON is niet aansprakelijk voor:</p>
              <ul>
                <li>indirecte schade</li>
                <li>gevolgschade</li>
                <li>gederfde winst</li>
                <li>beslissingen van derden</li>
              </ul>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>11. Overmacht</h3>
              <p>Bij overmacht (zoals ziekte, storingen of overheidsmaatregelen) mag VOVON:</p>
              <ul>
                <li>werkzaamheden opschorten</li>
                <li>of de overeenkomst beëindigen</li>
              </ul>
              <p>Reeds verrichte werkzaamheden worden gefactureerd.</p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>12. Vertrouwelijkheid</h3>
              <p>
                Partijen behandelen vertrouwelijke informatie strikt vertrouwelijk, ook na beëindiging van de opdracht.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>13. Intellectueel eigendom</h3>
              <p>
                Alle rechten op door VOVON gemaakte documenten en adviezen blijven eigendom van VOVON.<br />
                Gebruik is alleen toegestaan voor het doel van de opdracht.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>14. Privacy</h3>
              <p>
                Partijen handelen conform de geldende privacywetgeving. De cliënt staat in voor rechtmatige verstrekking van persoonsgegevens.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>15. Relatiebeding</h3>
              <p>
                Het is niet toegestaan om medewerkers of ingeschakelde derden van VOVON gedurende en tot 12 maanden na de opdracht direct in te schakelen zonder toestemming.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>16. Toepasselijk recht en geschillen</h3>
              <p>
                Op alle rechtsverhoudingen is Nederlands recht van toepassing.<br />
                Geschillen worden bij voorkeur in overleg opgelost, en anders voorgelegd aan de bevoegde rechter.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TermsModal;
