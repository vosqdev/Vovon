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
                Onze Cookie Policy en Privacy Policy zijn niet van toepassing op persoonsgegevens die van u op of via andere websites worden verzameld en verwerkt. Heeft u na het lezen van deze Privacy Policy vragen, neem dan gerust contact met ons op.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Persoonsgegevens</h3>
              <p>Uw persoonsgegevens worden door ons verwerkt voor de volgende doeleinden:</p>
              <ul>
                <li>administratieve doeleinden of overeenkomsten;</li>
                <li>communicatie over inschrijvingen en uitnodigingen;</li>
                <li>het versturen van nieuwsbrieven.</li>
              </ul>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Welke gegevens verwerken wij</h3>
              <p>
                Uw voor- en achternaam, adres, e-mailadres, telefoonnummer, IP-adres en eventueel functie- en locatiegegevens. Het verwerken van persoonsgegevens houdt onder meer in het registreren, bewaren, gebruiken en inzien van persoonsgegevens.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Grondslagen om gegevens rechtmatig te verwerken</h3>
              <ul>
                <li>dit is nodig voor de uitvoering van de opdracht of overeenkomst;</li>
                <li>er is een gerechtvaardigd belang, zoals het informeren over actualiteiten of wijzigingen in onze dienstverlening;</li>
                <li>er is een wettelijke verplichting;</li>
                <li>u geeft zelf toestemming.</li>
              </ul>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Verstrekking van uw persoonsgegevens aan derden</h3>
              <p>
                Wij verstrekken uw persoonsgegevens in beginsel alleen aan derde partijen als u daar zelf toestemming voor heeft gegeven. Gegevensverstrekking zonder uw toestemming vindt plaats als dat nodig is om de opdracht of overeenkomst tussen u en ons uit te kunnen voeren. Wij geven geen persoonsgegevens door aan landen buiten de Europese Economische Ruimte (EER).
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Bewaartermijnen</h3>
              <p>
                Wij bewaren uw gegevens niet langer dan nodig is voor de in deze privacyverklaring beschreven doeleinden, tenzij dat moet op grond van een wettelijke verplichting. Voor het bewaren van uw gegevens en financiële gegevens geldt de wettelijke bewaartermijn van 7 jaar.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Beveiliging</h3>
              <p>
                Om uw gegevens zo goed mogelijk te beschermen, hebben wij passende organisatorische en technische beveiligingsmaatregelen getroffen.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Gebruik van cookies</h3>
              <p>
                Voor het functioneren van onze website maken wij gebruik van cookies. Volgens de wet mogen wij cookies op uw mobiele telefoon of laptop opslaan als ze strikt noodzakelijk zijn voor het gebruik van de website. Voor alle andere soorten cookies hebben we uw toestemming nodig.
              </p>
              <p>
                In onze cookieverklaring leest u welke soorten cookies worden gebruikt en voor welke doeleinden. U kunt uw toestemming op elk moment wijzigen of intrekken.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Bezoekgegevens</h3>
              <p>
                Op de website worden ook algemene bezoekgegevens bijgehouden, zoals onder meer de meest gevraagde pagina’s. Het doel hiervan is om de inrichting van de website te verbeteren, zodat wij onze dienstverlening verder kunnen optimaliseren.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Ongevraagd toegestuurde informatie</h3>
              <p>
                In geval u ongevraagd ideeën en/of materialen, waaronder begrepen maar niet beperkt tot teksten, beelden, geluiden, software of andere informatie (de “Materialen”) op deze website plaatst of deze toestuurt via e-mail of anderszins, zijn wij gerechtigd deze materialen te gebruiken, te kopiëren en/of commercieel in de ruimste zin te exploiteren, zonder daarvoor enige vergoeding verschuldigd te zijn. Tevens zijn wij niet gehouden de betreffende Materialen geheim te houden.
              </p>
              <p>
                U vrijwaart ons hierbij voor alle schade en kosten die voortvloeien uit aanspraken van derden dat het gebruik en/of de exploitatie van de Materialen inbreuk maakt op (intellectuele) eigendomsrechten van derden of anderszins onrechtmatig is.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Nietigheid</h3>
              <p>
                Is of worden deze voorwaarden gedeeltelijk ongeldig, dan blijven partijen aan het overblijvende gedeelte gebonden. Partijen zullen het ongeldige gedeelte vervangen door bepalingen die wel geldig zijn en waarvan de rechtsgevolgen zoveel mogelijk overeenkomen met die van het ongeldige gedeelte.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Cookie-beleid</h3>
              <p>
                Wij maken bij het aanbieden van onze elektronische diensten gebruik van cookies. Een cookie is een klein bestand dat op de harde schijf van uw computer wordt opgeslagen om u te herkennen als u de website opnieuw bezoekt.
              </p>
              <p>
                Deze cookies worden enkel gebruikt om het gebruik van de website gemakkelijker te maken en om informatie over ons bedrijf en onze (nieuwe) producten en diensten te kunnen versturen.
              </p>
              <p>
                U kunt uw browser zo instellen dat u bericht krijgt wanneer een cookie wordt geplaatst of dat het verzamelen van cookies niet mogelijk is. In dat geval kunt u mogelijk niet alle functionaliteiten van de website gebruiken.
              </p>
              <p>
                Wij gebruiken uitsluitend functionele en analytische cookies die geen inbreuk maken op uw privacy. Door gebruik te maken van onze website stemt u in met het gebruik van cookies.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <p>
                De domeinnaam waaronder de cookies worden opgeslagen is www.VOSQ.nl. De geldigheidsduur van cookies varieert van de lengte van uw bezoek tot ongelimiteerd.
              </p>
              <p>
                De opslag en doorgifte van gegevens via internet zijn beveiligd. U heeft het recht op toegang tot de van u via cookies verzamelde persoonsgegevens en op rectificatie en/of verwijdering van deze gegevens via het versturen van een e-mail.
              </p>
              <p>
                Wij verzamelen geen persoonsgegevens via cookies.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Hoe wordt Google Analytics gebruikt?</h3>
              <p>
                De onderneming maakt gebruik van Google Analytics om bij te houden hoe gebruikers de website gebruiken en hoe effectief Adwords-advertenties van de onderneming zijn.
              </p>
              <p>
                De verkregen informatie, inclusief het geanonimiseerde IP-adres van uw computer, wordt overgebracht naar en door Google opgeslagen op servers in de Verenigde Staten.
              </p>
              <p>
                Voor meer informatie verwijzen wij naar het privacybeleid van Google.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <p>
                Google gebruikt deze informatie om bij te houden hoe de website gebruikt wordt, om rapporten over websitegebruik te verstrekken en om adverteerders informatie te bieden over de effectiviteit van campagnes.
              </p>
              <p>
                Google kan deze informatie aan derden verstrekken indien zij daartoe wettelijk wordt verplicht of voor zover deze derden de informatie namens Google verwerken. De onderneming heeft hier geen invloed op.
              </p>
              <p>
                De onderneming heeft Google geen toestemming gegeven om via de onderneming verkregen Analytics-informatie te gebruiken voor andere Google-diensten.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Wijzigingen</h3>
              <p>
                Wij behouden ons het recht voor wijzigingen aan te brengen in deze Privacy Policy. Controleer daarom regelmatig deze Privacy Policy.
              </p>
              <p>
                Indien u vragen heeft over deze Privacy Policy, kunt u contact met ons opnemen.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <p>
                U kunt te allen tijde bezwaar maken tegen het gebruik van uw persoonsgegevens voor direct marketing doeleinden door ons een bericht of e-mail te sturen.
              </p>

              <div className="text-center text-slate-400 my-4">⸻</div>

              <h3>Klacht indienen</h3>
              <p>
                Mocht u onverhoopt niet tevreden zijn over de wijze waarop wij met uw gegevens omgaan en komen wij er samen niet uit, dan kunt u een klacht indienen bij de Autoriteit Persoonsgegevens. Dit kan via de website van de Autoriteit Persoonsgegevens.
              </p>
              <p>
                Onze contactgegevens en de verwerkingsverantwoordelijke vindt u bij onze contactgegevens.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;
