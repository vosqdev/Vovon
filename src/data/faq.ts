export interface QAItem {
  q: string;
  a: string;
  category: 'development' | 'organisation';
}

export interface FAQDataLanguage {
  label: string;
  title: string;
  headline: string;
  subtitle: string;
  categories: {
    all: string;
    development: string;
    organisation: string;
  };
  qas: QAItem[];
  outroTitle: string;
  outroText: string;
  contactBtn: string;
}

export const faqData: Record<'nl' | 'en', FAQDataLanguage> = {
  nl: {
    label: "Veelgestelde vragen",
    title: "Veelgestelde vragen",
    headline: "Goed om te weten.",
    subtitle: "Antwoorden op veelvoorkomende vragen over onze integrale aanpak, gebieds- en vastgoedontwikkeling, energiesystemen en procesregie.",
    categories: {
      all: "Alle vragen",
      development: "Vastgoed, Gebied & Energie",
      organisation: "VOVON & Samenwerken"
    },
    qas: [
      {
        category: 'organisation',
        q: "Wat doet VOVON Development?",
        a: "VOVON Development helpt bij het ontwikkelen, versnellen en haalbaar maken van vastgoed- en gebiedsontwikkelingen. Wij verbinden ruimtelijke plannen, energie, mobiliteit, financiële haalbaarheid en bestuurlijke besluitvorming tot één uitvoerbare aanpak.\n\nVan een eerste idee of grondpositie tot een principeverzoek, haalbaarheidsstudie, businesscase, samenwerkingsovereenkomst of ontwikkelstrategie: VOVON brengt structuur in complexe opgaven."
      },
      {
        category: 'organisation',
        q: "Waarin onderscheidt VOVON zich?",
        a: "Veel vastgoedprojecten lopen vast omdat ruimte, energie, beleid, eigendom en financiën los van elkaar worden bekeken. VOVON kijkt juist integraal.\n\nWij combineren kennis van vastgoedontwikkeling met inzicht in netcongestie, energie-infrastructuur, gemeentelijke processen en gebiedsstrategie. Daardoor ontstaat niet alleen een mooi plan, maar vooral een plan dat bestuurlijk, technisch en financieel verder kan komen."
      },
      {
        category: 'organisation',
        q: "Voor wie werkt VOVON Development?",
        a: "VOVON werkt onder meer voor:\n\n* grondeigenaren;\n* ontwikkelaars/bouwers;\n* gemeenten;\n* beleggers;\n* ondernemers;\n* energiepartijen;\n* vastgoedeigenaren;\n* samenwerkingsverbanden in ontwikkelingen.\n\nDe gemene deler is vaak hetzelfde: er ligt een kans, maar de route naar realisatie is nog complex of onduidelijk."
      },
      {
        category: 'development',
        q: "Kan VOVON helpen bij een grondpositie of locatie?",
        a: "Ja. VOVON kan helpen om de ontwikkelmogelijkheden van een locatie scherp te krijgen. Denk aan een quickscan, marktanalyse, ruimtelijke verkenning, financiële verkenning, eigendomsstrategie of eerste overleg met de gemeente, ook bij onderhandelingen.\n\nDaarbij kijken we niet alleen naar wat er planologisch mogelijk lijkt, maar ook naar energie, ontsluiting, fasering, woningprogramma, risico’s en de belangen van betrokken eigenaren."
      },
      {
        category: 'development',
        q: "Wat is netbewuste gebiedsontwikkeling?",
        a: "Netbewuste gebiedsontwikkeling betekent dat energie vanaf het begin onderdeel is van het ruimtelijk plan. Dus niet pas aan het einde vragen: “Is er nog een aansluiting beschikbaar?”, maar vooraf nadenken over elektriciteitsvraag, opwek, opslag, laadinfra, warmte, pieken en slimme sturing.\n\nDat is steeds belangrijker, omdat woningbouw, bedrijven, mobiliteit en verduurzaming in veel gebieden worden geraakt door netcongestie."
      },
      {
        category: 'development',
        q: "Helpt VOVON ook bij netcongestie?",
        a: "Ja. VOVON helpt om netcongestie niet alleen als technisch probleem te bekijken, maar als ontwikkelvraagstuk. Wat betekent beperkte netcapaciteit voor woningbouw, bedrijvigheid, laadinfrastructuur, fasering en exploitatie?\n\nWij denken mee over alternatieven zoals lokale energiesystemen, batterijen, energiegemeenschappen, slimme laadconcepten, pieksturing, warmtenetten, WKO, collectieve oplossingen en samenwerking met netbeheerders."
      },
      {
        category: 'development',
        q: "Kan VOVON een principeverzoek of ruimtelijke onderbouwing voorbereiden?",
        a: "Ja. VOVON kan helpen bij het voorbereiden van een principeverzoek, initiatiefdocument, visieboekje of bestuurlijke notitie richting gemeente of provincie.\n\nWij zorgen dat een initiatief niet alleen ruimtelijk wordt toegelicht, maar ook wordt onderbouwd vanuit maatschappelijke meerwaarde, energie, haalbaarheid, eigendom, programma en uitvoerbaarheid."
      },
      {
        category: 'development',
        q: "Werkt VOVON alleen aan woningbouwprojecten?",
        a: "Nee. Woningbouw is een belangrijk werkveld, maar VOVON werkt breder. Ook gemengde gebiedsontwikkelingen, maatschappelijk vastgoed, energiehubs, bedrijventerreinen, transformatielocaties en integrale ontwikkelconcepten passen binnen onze aanpak.\n\nJuist op plekken waar functies samenkomen, ontstaat vaak de meeste waarde."
      },
      {
        category: 'development',
        q: "Wat bedoelt VOVON met “zonder energie geen vastgoed”?",
        a: "Nieuwe vastgoedontwikkeling kan niet meer los worden gezien van energie. Een woning, bedrijfspand, laadplein of gebied heeft elektriciteit, warmte, mobiliteit en digitale infrastructuur nodig.\n\nAls de energievoorziening niet klopt, komt de ontwikkeling onder druk te staan. Daarom kijkt VOVON vanaf het begin naar de samenhang tussen vastgoed, energie en gebied."
      },
      {
        category: 'development',
        q: "Kan VOVON helpen bij samenwerking tussen meerdere grondeigenaren?",
        a: "Ja. Veel gebiedsontwikkelingen vragen om samenwerking tussen meerdere eigenaren. VOVON kan helpen om belangen, posities, ontwikkelruimte en financiële uitgangspunten helder te maken.\n\nDat kan leiden tot een intentieovereenkomst, samenwerkingsovereenkomst, gezamenlijke ontwikkelstrategie of een model waarin eigenaren onder duidelijke voorwaarden samen optrekken."
      },
      {
        category: 'development',
        q: "Maakt VOVON ook financiële quickscans?",
        a: "Ja. VOVON kan financiële quickscans maken voor gebiedsontwikkelingen en vastgoedinitiatieven. Denk aan een eerste grondexploitatie, residuele grondwaarde, stichtingskostenraming, opbrengstenanalyse, fasering, risicoreservering en scenariovergelijking.\n\nHet doel is niet om direct een definitieve exploitatie te maken, maar om vroeg inzicht te krijgen in haalbaarheid, knelpunten en onderhandelingsruimte."
      },
      {
        category: 'organisation',
        q: "Wat is de rol van VOVON in een project?",
        a: "Dat verschilt per opgave. VOVON kan optreden als adviseur, ontwikkelmanager, procesregisseur, initiatiefnemer of strategisch partner.\n\nSoms gaat het om een korte haalbaarheidstoets. Soms om langdurige begeleiding van initiatief tot besluitvorming. De rol wordt vooraf helder vastgelegd."
      },
      {
        category: 'organisation',
        q: "Werkt VOVON ook voor gemeenten?",
        a: "Ja. VOVON kan gemeenten ondersteunen bij complexe ontwikkelvraagstukken waar vastgoed, energie, grondposities, marktpartijen en maatschappelijke opgaven samenkomen.\n\nDaarbij ligt de nadruk op uitvoerbaarheid: hoe breng je ambities terug naar een realistisch proces, duidelijke keuzes en concrete vervolgstappen?"
      },
      {
        category: 'development',
        q: "Kan VOVON helpen bij tenders of marktinitiatieven?",
        a: "Ja. VOVON kan ondersteunen bij tenderstrategieën, ontwikkelvisies, gebiedsconcepten, energieparagrafen, financiële haalbaarheid, stakeholderanalyse en onderscheidende proposities.\n\nVooral bij tenders waarin duurzaamheid, energie, mobiliteit en maatschappelijke waarde zwaar meewegen, kan VOVON helpen om een krachtig en geloofwaardig plan te maken."
      },
      {
        category: 'organisation',
        q: "Wat levert een eerste verkenning met VOVON op?",
        a: "Een eerste verkenning geeft meestal antwoord op drie hoofdvragen:\n\n1. Wat is de ontwikkelkans?\n2. Waar zitten de belangrijkste risico’s?\n3. Welke vervolgstap is logisch en haalbaar?\n\nAfhankelijk van de situatie kan dat worden uitgewerkt in een memo, quickscan, ontwikkelstrategie, financiële opzet, presentatie of conceptverzoek richting gemeente."
      },
      {
        category: 'organisation',
        q: "Is VOVON een ontwikkelaar of adviseur?",
        a: "VOVON kan beide rollen vervullen. Soms adviseert VOVON een eigenaar, gemeente of ontwikkelaar. In andere gevallen denkt VOVON actief mee als ontwikkelende partij of partner in een initiatief.\n\nBelangrijk is dat de rol vooraf duidelijk is: onafhankelijk advies waar dat nodig is, ondernemende ontwikkelkracht waar dat gewenst is."
      },
      {
        category: 'organisation',
        q: "In welke regio werkt VOVON?",
        a: "VOVON werkt voornamelijk in Nederland, met een sterke focus op gebiedsontwikkeling, woningbouw, energie en ruimtelijke vraagstukken in gemeenten waar groei, netcongestie en ruimtedruk samenkomen.\n\nDe aanpak is toepasbaar in zowel stedelijke als kleinere gemeentelijke contexten."
      },
      {
        category: 'organisation',
        q: "Hoe begint een samenwerking met VOVON?",
        a: "Een samenwerking begint meestal met een gesprek over de locatie, de vraag, de betrokken partijen en de gewenste uitkomst. Daarna kan VOVON een voorstel doen voor een afgebakende eerste stap.\n\nDat kan bijvoorbeeld een quickscan, memo, ontwikkelstrategie, procesaanpak of financiële verkenning zijn."
      },
      {
        category: 'organisation',
        q: "Wat heeft VOVON nodig om een locatie te beoordelen?",
        a: "Voor een eerste beoordeling zijn meestal de volgende gegevens handig:\n\n* adres of kadastrale aanduiding;\n* huidige bestemming of functie;\n* eigendomssituatie;\n* oppervlakte van de locatie;\n* bestaande bebouwing;\n* gewenste ontwikkeling;\n* bekende gemeentelijke beleidskaders;\n* eventuele energie- of aansluitproblematiek;\n* kwartierdata energie en gegevens van de huidige stroomaansluiting;\n* beschikbare tekeningen, kaarten of eerdere onderzoeken.\n\nOok als nog niet alles beschikbaar is, kan VOVON vaak al een eerste richting geven."
      },
      {
        category: 'organisation',
        q: "Hoe neem ik contact op met VOVON?",
        a: "Neem contact op via de contactgegevens op deze website. Beschrijf kort de locatie, de vraag en de gewenste vervolgstap. VOVON kijkt graag mee hoe een idee, grondpositie of gebiedsopgave verder kan worden gebracht."
      }
    ],
    outroTitle: "Staat uw vraag er niet tussen?",
    outroText: "VOVON Development denkt graag mee over vastgoedontwikkeling, gebiedsontwikkeling, energie, netcongestie en haalbaarheid. Neem contact op voor een eerste verkenning van uw locatie, initiatief of ontwikkelvraag.",
    contactBtn: "Direct contact opnemen"
  },
  en: {
    label: "Frequently Asked Questions",
    title: "Frequently Asked Questions",
    headline: "Good to know.",
    subtitle: "Answers to common questions about our integrated approach, area and real estate development, energy systems, and process steering.",
    categories: {
      all: "All questions",
      development: "Real Estate, Area & Energy",
      organisation: "VOVON & Collaboration"
    },
    qas: [
      {
        category: 'organisation',
        q: "What does VOVON Development do?",
        a: "VOVON Development helps to develop, accelerate and make real estate and area developments feasible. We connect spatial plans, energy, mobility, financial feasibility and administrative decision-making into one executable approach.\n\nFrom a first idea or land position to a feasibility study, business case, collaboration agreement or development strategy: VOVON brings structure to complex challenges."
      },
      {
        category: 'organisation',
        q: "How does VOVON stand out?",
        a: "Many real estate projects get stuck because space, energy, policy, ownership and finances are considered separately. VOVON takes an integral approach.\n\nWe combine knowledge of real estate development with insight into grid congestion, energy infrastructure, municipal processes and area strategy. This results not just in a beautiful plan, but a plan that can progress administratively, technically and financially."
      },
      {
        category: 'organisation',
        q: "Who does VOVON Development work for?",
        a: "VOVON works for among others:\n\n* land owners;\n* developers/builders;\n* municipalities;\n* investors;\n* entrepreneurs;\n* energy parties;\n* real estate owners;\n* collaboration partnerships in developments.\n\nThe common thread is often the same: there is an opportunity, but the route to realization is still complex or unclear."
      },
      {
        category: 'development',
        q: "Can VOVON help with a land position or location?",
        a: "Yes. VOVON can help to clarify the development possibilities of a location. Think of a quick scan, market analysis, spatial exploration, financial exploration, ownership strategy or initial consultation with the municipality, including negotiations.\n\nWe don't just look at what seems possible from a planning perspective, but also at energy, access, phasing, housing program, risks and the interests of involved owners."
      },
      {
        category: 'development',
        q: "What is grid-aware area development?",
        a: "Grid-aware area development means that energy is part of the spatial plan from the beginning. So not asking at the end: \"Is there still a connection available?\", but thinking ahead about electricity demand, generation, storage, charging infrastructure, heat, peaks and smart control.\n\nThis is becoming increasingly important, as housing, businesses, mobility and sustainability are affected by grid congestion in many areas."
      },
      {
        category: 'development',
        q: "Does VOVON also help with grid congestion?",
        a: "Yes. VOVON helps to look at grid congestion not just as a technical problem, but as a development issue. What does limited grid capacity mean for housing, business, charging infrastructure, phasing and exploitation?\n\nWe think along about alternatives such as local energy systems, batteries, energy communities, smart charging concepts, peak shaving, heat networks, ATES, collective solutions and cooperation with grid operators."
      },
      {
        category: 'development',
        q: "Can VOVON prepare a principle request or spatial justification?",
        a: "Yes. VOVON can help prepare a principle request, initiative document, vision book or administrative memo towards the municipality or province.\n\nWe ensure that an initiative is not only spatially explained, but also substantiated from the perspective of societal added value, energy, feasibility, ownership, program and executability."
      },
      {
        category: 'development',
        q: "Does VOVON only work on housing projects?",
        a: "No. Housing is an important field of work, but VOVON works broader. Mixed area developments, social real estate, energy hubs, business parks, transformation locations and integral development concepts also fit within our approach.\n\nExactly in places where functions come together, the most value is often created."
      },
      {
        category: 'development',
        q: "What does VOVON mean by \"no real estate without energy\"?",
        a: "New real estate development can no longer be seen separately from energy. A home, commercial building, charging plaza or area needs electricity, heat, mobility and digital infrastructure.\n\nIf the energy supply is not right, the development comes under pressure. That is why VOVON looks at the coherence between real estate, energy and area right from the start."
      },
      {
        category: 'development',
        q: "Can VOVON help with cooperation between multiple land owners?",
        a: "Yes. Many area developments require cooperation between multiple owners. VOVON can help to clarify interests, positions, development space and financial starting points.\n\nThis can lead to a letter of intent, cooperation agreement, joint development strategy or a model in which owners act together under clear conditions."
      },
      {
        category: 'development',
        q: "Does VOVON also make financial quick scans?",
        a: "Yes. VOVON can make financial quick scans for area developments and real estate initiatives. Think of an initial land exploitation, residual land value, construction cost estimate, revenue analysis, phasing, risk reservation and scenario comparison.\n\nThe goal is not to immediately make a final exploitation, but to gain early insight into feasibility, bottlenecks and negotiation space."
      },
      {
        category: 'organisation',
        q: "What is the role of VOVON in a project?",
        a: "That differs per assignment. VOVON can act as an advisor, development manager, process director, initiator or strategic partner.\n\nSometimes it involves a short feasibility test. Sometimes it involves long-term guidance from initiative to decision-making. The role is clearly defined in advance."
      },
      {
        category: 'organisation',
        q: "Does VOVON also work for municipalities?",
        a: "Yes. VOVON can support municipalities with complex development issues where real estate, energy, land positions, market parties and societal tasks come together.\n\nThe focus is on executability: how do you bring ambitions back to a realistic process, clear choices and concrete next steps?"
      },
      {
        category: 'development',
        q: "Can VOVON help with tenders or market initiatives?",
        a: "Yes. VOVON can support with tender strategies, development visions, area concepts, energy paragraphs, financial feasibility, stakeholder analysis and distinctive propositions.\n\nEspecially in tenders where sustainability, energy, mobility and societal value weigh heavily, VOVON can help to create a powerful and credible plan."
      },
      {
        category: 'organisation',
        q: "What does a first exploration with VOVON yield?",
        a: "A first exploration usually answers three main questions:\n\n1. What is the development opportunity?\n2. Where are the main risks?\n3. What is a logical and feasible next step?\n\nDepending on the situation, this can be elaborated in a memo, quick scan, development strategy, financial outline, presentation or concept request towards the municipality."
      },
      {
        category: 'organisation',
        q: "Is VOVON a developer or advisor?",
        a: "VOVON can fulfill both roles. Sometimes VOVON advises an owner, municipality or developer. In other cases, VOVON actively thinks along as a developing party or partner in an initiative.\n\nIt is important that the role is clear in advance: independent advice where necessary, entrepreneurial development power where desired."
      },
      {
        category: 'organisation',
        q: "In which region does VOVON work?",
        a: "VOVON works mainly in the Netherlands, with a strong focus on area development, housing, energy and spatial issues in municipalities where growth, grid congestion and space pressure come together.\n\nThe approach is applicable in both urban and smaller municipal contexts."
      },
      {
        category: 'organisation',
        q: "How does a collaboration with VOVON start?",
        a: "A collaboration usually starts with a conversation about the location, the question, the involved parties and the desired outcome. After that, VOVON can make a proposal for a defined first step.\n\nThis can be, for example, a quick scan, memo, development strategy, process approach or financial exploration."
      },
      {
        category: 'organisation',
        q: "What does VOVON need to assess a location?",
        a: "For an initial assessment, the following data are usually useful:\n\n* address or cadastral designation;\n* current destination or function;\n* ownership situation;\n* surface area of the location;\n* existing buildings;\n* desired development;\n* known municipal policy frameworks;\n* possible energy or connection problems;\n* energy quarter-hourly data and current power connection details;\n* available drawings, maps or previous studies.\n\nEven if not everything is available yet, VOVON can often already give an initial direction."
      },
      {
        category: 'organisation',
        q: "How do I contact VOVON?",
        a: "Contact us via the contact details on this website. Briefly describe the location, the question and the desired next step. VOVON is happy to look at how an idea, land position or area task can be brought further."
      }
    ],
    outroTitle: "Is your question not listed?",
    outroText: "VOVON Development is happy to think along about real estate development, area development, energy, grid congestion and feasibility. Contact us for a first exploration of your location, initiative or development question.",
    contactBtn: "Get in touch directly"
  }
};
