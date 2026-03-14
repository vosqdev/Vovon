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

              <h3>Persoonsgegevens</h3>
              <p>Uw persoonsgegevens worden door ons verwerkt voor de volgende doeleinden:</p>
              <ul>
                <li>Administratieve doeleinden of overeenkomsten;</li>
                <li>Communicatie over inschrijvingen en uitnodigingen;</li>
                <li>Het versturen van nieuwsbrieven;</li>
              </ul>

              <h3>Welke gegevens verwerken wij</h3>
              <p>
                Uw voor- en achternaam, adres, e-mailadres, telefoonnummer, IP-adres en eventueel functie en locatiegegevens. Het verwerken van persoonsgegevens houdt onder meer in het registreren, bewaren, gebruiken en inzien van persoonsgegevens.
              </p>

              <h3>Grondslagen om gegevens rechtmatig te verwerken</h3>
              <ul>
                <li>Dit is nodig voor de uitvoering van de opdracht of overeenkomst;</li>
                <li>Er is een gerechtvaardigd belang, zoals het informeren over actualiteiten of wijzigingen in onze dienstverlening;</li>
                <li>Er is een wettelijke verplichting;</li>
                <li>U geeft zelf toestemming.</li>
              </ul>

              <h3>Verstrekking van uw persoonsgegevens aan derden</h3>
              <p>
                Wij verstrekken uw persoonsgegevens in beginsel alleen aan derde partijen als u daar zelf toestemming voor heeft gegeven. Gegevensverstrekking zonder uw toestemming vindt plaats als dat nodig is om de opdracht of overeenkomst tussen u en ons uit te kunnen voeren. Wij geven geen persoonsgegevens door aan landen buiten de Europese Economische Ruimte (EER).
              </p>

              <h3>Bewaartermijnen</h3>
              <p>
                Wij bewaren uw gegevens niet langer dan nodig is voor de in deze privacyverklaring beschreven doeleinden, tenzij dat moet op grond van een wettelijke verplichting. Voor het bewaren van uw gegevens en financiële gegevens geldt de wettelijke bewaartermijn van 7 jaar.
              </p>

              <h3>Beveiliging</h3>
              <p>
                Om uw gegevens zo goed mogelijk te beschermen, hebben wij passende organisatorische en technische beveiligingsmaatregelen getroffen.
              </p>

              <h3>Gebruik van cookies</h3>
              <p>
                Voor het functioneren van onze website maken wij gebruik van cookies. Volgens de wet mogen wij cookies op uw mobiele telefoon of laptop opslaan als ze strikt noodzakelijk zijn voor het gebruik van de website. Voor alle andere soorten cookies hebben we uw toestemming nodig. In onze cookieverklaring leest u welke soort cookies worden gebruikt en voor welke doeleinden. U kunt uw toestemming op elk moment wijzigen of intrekken.
              </p>

              <h3>Bezoekgegevens</h3>
              <p>
                Op de website worden ook algemene bezoekgegevens bijgehouden, zoals onder meer de meest gevraagde pagina's. Het doel hiervan is om de inrichting van de website te verbeteren, zodat wij onze dienstverlening verder kan optimaliseren.
              </p>

              <h3>Ongevraagd toegestuurde informatie</h3>
              <p>
                In geval u ongevraagd ideeën en/of materialen, waaronder begrepen, maar niet beperkt tot, teksten, beelden, geluiden, software of andere informatie (de "Materialen") op deze website plaatst of deze toestuurt via e-mail of anderszins, zullen wij gerechtigd zijn deze materialen te gebruiken, te kopiëren en/of commercieel in de ruimste zin te exploiteren, zonder daarvoor enige vergoeding verschuldigd te zijn en zijn wij niet gehouden zijn de betreffende Materialen geheim te houden. U vrijwaart ons hierbij terzake van alle schade en kosten die wij lijden of maakt terzake van aanspraken van derden dat het gebruik en/of de exploitatie van de Materialen inbreuk maakt op (intellectuele) (eigendoms)rechten van derden of anderszins onrechtmatig is jegens een derde.
              </p>

              <h3>Nietigheid</h3>
              <p>
                Is of worden deze voorwaarden gedeeltelijk ongeldig, dan blijven partijen aan het overblijvende gedeelte gebonden. Partijen zullen het ongeldige gedeelte vervangen door bedingen die wel geldig zijn en waarvan de rechtsgevolgen, gelet op de inhoud en de strekking van deze Voorwaarden, zoveel mogelijk overeenstemmen met die van het ongeldige gedeelte.
              </p>

              <h3>Cookie-beleid</h3>
              <p>
                Wij maken bij het aanbieden van haar elektronische diensten gebruik van 'cookies'. Een cookie is een klein bestand dat op de harde schijf van uw computer wordt opgeslagen om u te kunnen herkennen als u de site opnieuw bezoekt. Deze cookies worden enkel gebruikt om het gebruik van de website gemakkelijker te maken alsook het toesturen van informatie over ons bedrijf en over onze (nieuwe) producten en diensten. U kunt uw browser zo instellen dat u bericht krijgt dat een cookie wordt geplaatst of dat het verzamelen van cookies niet mogelijk is. U kunt dan echter niet van alle mogelijkheden van de site gebruikmaken. Wij gebruiken alleen functionele en analytische cookies die geen inbreuk maken op uw privacy. Door gebruik te maken van onze website, stemt u in met het gebruik van cookies.
              </p>
              <p>
                De domeinnaam waaronder de cookies worden opgeslagen is www.VOSQ.nl. De geldigheidsduur van de cookies varieert van de lengte van uw bezoek tot ongelimiteerd. De opslag en doorgifte van uw gegevens via het internet zijn beveiligd. U heeft het recht van toegang tot de van u door middel van cookies verzamelde persoonsgegevens en op rectificatie en/of verwijdering van deze gegevens via versturing van een e-mail. Wij verzamelen geen persoonsgegevens via cookies.
              </p>

              <h3>Hoe wordt Google Analytics gebruikt?</h3>
              <p>
                De onderneming maakt ook gebruik van Google Analytics om bij te houden hoe gebruikers de website gebruiken en hoe effectief de Adwords-advertenties van de onderneming bij Google zoekresultaatpagina's zijn. De aldus verkregen informatie wordt, met inbegrip van het geanonimiseerde adres van uw computer (IP-adres), overgebracht naar en door Google opgeslagen op servers in de Verenigde Staten. Voor meer informatie verwijst de onderneming naar het privacybeleid van Google.
              </p>
              <p>
                Google gebruikt deze informatie om bij te houden hoe onze website gebruikt wordt, om rapporten over de Website aan de onderneming te kunnen verstrekken en om haar adverteerders informatie over de effectiviteit van hun campagnes te kunnen bieden. Google kan deze informatie aan derden verschaffen indien Google hiertoe wettelijk wordt verplicht, of voor zover deze derden de informatie namens Google verwerken. De onderneming heeft hier geen invloed op. De onderneming heeft Google geen toestemming gegeven om via de onderneming verkregen Analytics-informatie te gebruiken voor andere Google-diensten.
              </p>

              <h3>Wijzigingen</h3>
              <p>
                Wij behouden ons het recht voor om wijzigingen aan te brengen in deze Privacy Policy. Controleer daarom regelmatig de Privacy Policy. Als u nog vragen heeft over deze Privacy Policy, neemt u dan contact met ons op.
              </p>
              <p>
                U kunt te allen tijde bezwaar maken tegen het gebruik van uw persoonsgegevens voor direct marketing doeleinden door ons een bericht / e-mail toe te sturen.
              </p>

              <h3>Klacht indienen</h3>
              <p>
                Mocht u onverhoopt niet tevreden zijn over de wijze waarop wij met uw gegevens omgaan en komen wij er samen niet uit, dan kunt u een klacht hierover indienen bij de Autoriteit Persoonsgegevens. Dit kan via haar website. Onze contactgegevens/verwerkingsverantwoordelijke zie onze contact gegevens.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;
