import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
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
              <h2 className="text-2xl font-bold text-slate-900">Privacy Policy & Cookie-beleid</h2>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto prose prose-slate max-w-none">
              <p>
                <strong>Privacyverklaring VOVON</strong>
              </p>

              <h3>Waarom verwerken wij persoonsgegevens?</h3>
              <p>
                Wanneer u gebruikmaakt van deze website, informatie opvraagt of een dienst afneemt, vraagt VOVON om persoonsgegevens. In deze verklaring leest u wat wij met uw gegevens doen. Wij handelen in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).
              </p>
              <p>
                Uw persoonsgegevens worden rechtstreeks aan VOVON verstrekt. Wij verwerken uitsluitend gegevens die u zelf aan ons verstrekt of waarvan duidelijk is dat deze aan ons worden verstrekt om te verwerken.
              </p>
              <p>
                In sommige gevallen verstrekken wij gegevens aan bedrijven of professionals waarmee wij samenwerken. Met deze partijen zijn verwerkersovereenkomsten gesloten conform de AVG.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Waarvoor gebruiken wij uw gegevens?</h3>
              <p>VOVON verwerkt uw persoonsgegevens voor de volgende doeleinden:</p>
              <ul>
                <li>het voeren van (kennismakings)gesprekken en het opstellen van offertes;</li>
                <li>het uitvoeren van opdrachten en overeenkomsten;</li>
                <li>het leveren van diensten;</li>
                <li>de financiële afhandeling, waaronder facturatie;</li>
                <li>het informeren over ontwikkelingen, projecten en dienstverlening van VOVON.</li>
              </ul>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Welke gegevens verwerken wij?</h3>
              <p>Wij verwerken onder andere de volgende persoonsgegevens:</p>
              <ul>
                <li>voor- en achternaam;</li>
                <li>adresgegevens;</li>
                <li>e-mailadres;</li>
                <li>telefoonnummer;</li>
                <li>IP-adres;</li>
                <li>functie- en locatiegegevens (indien van toepassing).</li>
              </ul>
              <p>
                Het verwerken van persoonsgegevens omvat onder meer het verzamelen, vastleggen, bewaren, raadplegen en gebruiken van gegevens.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Grondslagen voor verwerking</h3>
              <p>Wij verwerken persoonsgegevens op basis van één of meer van de volgende grondslagen:</p>
              <ul>
                <li>uitvoering van een overeenkomst;</li>
                <li>gerechtvaardigd belang (zoals communicatie over onze dienstverlening);</li>
                <li>wettelijke verplichting;</li>
                <li>door u gegeven toestemming.</li>
              </ul>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Verstrekking aan derden</h3>
              <p>Wij verstrekken uw persoonsgegevens uitsluitend aan derden:</p>
              <ul>
                <li>met uw toestemming; of</li>
                <li>indien dit noodzakelijk is voor de uitvoering van een overeenkomst.</li>
              </ul>
              <p>
                Wij verstrekken geen persoonsgegevens aan landen buiten de Europese Economische Ruimte (EER).
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Bewaartermijnen</h3>
              <p>
                Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor deze zijn verzameld, tenzij een wettelijke verplichting anders voorschrijft.
              </p>
              <p>
                Voor administratieve en financiële gegevens hanteren wij een wettelijke bewaartermijn van 7 jaar.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Beveiliging</h3>
              <p>
                Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies of onrechtmatige verwerking.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Gebruik van cookies</h3>
              <p>Voor het functioneren van onze website maken wij gebruik van cookies.</p>
              <ul>
                <li>Strikt noodzakelijke cookies worden zonder toestemming geplaatst;</li>
                <li>Voor overige cookies vragen wij uw toestemming.</li>
              </ul>
              <p>
                In onze cookieverklaring leest u welke cookies worden gebruikt en voor welke doeleinden. U kunt uw toestemming op ieder moment wijzigen of intrekken.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Uw rechten</h3>
              <p>U heeft het recht om:</p>
              <ul>
                <li>inzage te krijgen in uw persoonsgegevens;</li>
                <li>onjuiste gegevens te laten corrigeren;</li>
                <li>uw gegevens te laten verwijderen (recht op vergetelheid);</li>
                <li>bezwaar te maken tegen verwerking;</li>
                <li>uw gegevens over te laten dragen (dataportabiliteit).</li>
              </ul>
              <p>
                U kunt een verzoek indienen via onze contactgegevens. Wij kunnen u vragen zich te identificeren. U ontvangt uiterlijk binnen vier weken een reactie.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Wijzigingen</h3>
              <p>
                VOVON behoudt zich het recht voor deze privacyverklaring te wijzigen. Wij adviseren u deze verklaring regelmatig te raadplegen.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Klachten</h3>
              <p>
                Indien u niet tevreden bent over de verwerking van uw persoonsgegevens en wij er samen niet uitkomen, kunt u een klacht indienen bij de Autoriteit Persoonsgegevens.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Contactgegevens / verwerkingsverantwoordelijke</h3>
              <p>
                VOVON, zie gegevens op de website
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;
