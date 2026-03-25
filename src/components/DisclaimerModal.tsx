import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerModal = ({ isOpen, onClose }: DisclaimerModalProps) => {
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
              <h2 className="text-2xl font-bold text-slate-900">Disclaimer</h2>
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
                Wij hebben de informatie op deze website met de grootste zorgvuldigheid samengesteld. Op onze dienstverlening, projecten en het gebruik van deze website zijn onze algemene voorwaarden van toepassing. Daarin is een beperking van onze aansprakelijkheid opgenomen.
              </p>
              
              <div className="text-center text-slate-400 my-4">⸻</div>

              <p>
                Gebruik van enige informatie verkregen middels deze website gebeurt voor risico van de gebruiker. Wij aanvaarden geen enkele aansprakelijkheid voor schade ontstaan uit het bezoeken van deze site of voor enige schade ontstaan uit verleende diensten, aangeboden of verwezen content.
              </p>
              
              <div className="text-center text-slate-400 my-4">⸻</div>
              
              <p>
                De website bevat de mogelijkheid om zowel door ons uitgegeven publicaties als door derden uitgegeven publicaties te downloaden. Wij geven geen enkele garantie met betrekking tot de geschiktheid voor een specifiek gebruiksdoel, de functionaliteit of bruikbaarheid van deze bestanden. Ook aanvaarden wij geen aansprakelijkheid voor schade ontstaan door het downloaden, openen of het gebruik van deze bestanden, behoudens bepalingen van dwingend recht inzake aansprakelijkheid.
              </p>
              
              <div className="text-center text-slate-400 my-4">⸻</div>
              
              <p>
                Onze site bevat verwijzingen of hyperlinks naar andere sites die buiten ons domein liggen. Deze zijn opgenomen ter informatie van de gebruikers en te goeder trouw geselecteerd voor onze doelgroepen. Wij zijn niet verantwoordelijk voor de inhoud of beschikbaarheid van deze sites of bronnen. Ook geven wij geen garantie noch aanvaarden wij enigerlei aansprakelijkheid met betrekking tot de inhoud, data, adviezen, verklaringen, software, producten of ander materiaal op dergelijke sites of bronnen.
              </p>
              
              <div className="text-center text-slate-400 my-4">⸻</div>
              
              <p>
                Het technisch functioneren van internetverbindingen valt onder het risico van de exploitant van de internetverbinding. Wij aanvaarden op geen enkele wijze aansprakelijkheid voor schade die voortvloeit uit het (niet) nakomen van verplichtingen door de internetleverancier. Wij vrijwaren ons van iedere vorm van aansprakelijkheid die samenhangt met een niet-onbelemmerde toegang tot onze diensten en geven geen garantie met betrekking tot het functioneren van onze website. Tevens aanvaarden wij geen aansprakelijkheid voor eventuele virussen op de website of op de server die de informatie toegankelijk maakt.
              </p>
              
              <div className="text-center text-slate-400 my-4">⸻</div>
              
              <p>
                Behalve in geval van aantoonbare grove nalatigheid of opzet zijn wij in geen geval aansprakelijk voor winstderving of voor bijzondere, incidentele, indirecte, bijkomende of enige andere schade die voortvloeit uit of verband houdt met het functioneren van onze website of met onze diensten, ongeacht op welke wijze deze schade ontstaat.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;
