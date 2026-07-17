import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, Globe, MapPin, Calendar, Award, ArrowLeft, Printer, Briefcase, 
  GraduationCap, TrendingUp, Heart, Compass, Linkedin, CheckCircle2,
  ChevronDown, Phone, FileText, Download
} from 'lucide-react';
import { Language } from '../translations';
import { Link } from 'react-router-dom';

interface CVPageProps {
  language: Language;
}

export default function CVPage({ language }: CVPageProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'experience' | 'education' | 'skills'>('profile');

  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  // Translations
  const t = {
    nl: {
      back: 'Terug naar Home',
      print: 'Afdrukken / Opslaan als PDF',
      availability: 'Beschikbaarheid',
      inConsultation: 'in overleg',
      location: 'Locatie',
      email: 'E-mail',
      website: 'Website',
      linkedin: 'LinkedIn',
      profileTitle: 'Profiel',
      execSummary: 'Executive Summary',
      selectedResults: 'Geselecteerde Resultaten',
      workExperience: 'Werkervaring',
      education: 'Opleidingen',
      skills: 'Expertise & Vaardigheden',
      leadershipStyle: 'Leiderschapsstijl',
      coreValues: 'Persoonlijke Kernwaarden',
      motto: 'Motto',
      present: 'heden',
      responsibilities: 'Verantwoordelijk voor:',
      activities: 'Werkzaamheden:',
      sectors: {
        public: 'Publieke & Corporatie Sector',
        private: 'Private Sector'
      }
    },
    en: {
      back: 'Back to Home',
      print: 'Print / Save as PDF',
      availability: 'Availability',
      inConsultation: 'in consultation',
      location: 'Location',
      email: 'Email',
      website: 'Website',
      linkedin: 'LinkedIn',
      profileTitle: 'Profile',
      execSummary: 'Executive Summary',
      selectedResults: 'Selected Results',
      workExperience: 'Work Experience',
      education: 'Education',
      skills: 'Expertise & Skills',
      leadershipStyle: 'Leadership Style',
      coreValues: 'Personal Core Values',
      motto: 'Motto',
      present: 'present',
      responsibilities: 'Responsible for:',
      activities: 'Activities:',
      sectors: {
        public: 'Public & Housing Corporation Sector',
        private: 'Private Sector'
      }
    }
  }[language];

  // CV Data
  const cvData = {
    nl: {
      profileText1: "Senior ontwikkelaar/manager met ruim 20 jaar ervaring in complexe ruimtelijke ontwikkelingen, transformatie opgaven en integrale ontwikkeling. Waar ik energie van krijg in het verbinden van publieke en private belangen waarbij wonen, werken, economie, mobiliteit, energie en duurzaamheid samenkomen in toekomstbestendige gebieden.",
      profileText2: "Ik beweeg mij gemakkelijk tussen bestuurders, ambtelijke organisaties, marktpartijen, beleggers en maatschappelijke organisaties en door de jaren heen complexe vraagstukken weten te vertalen naar uitvoerbare ontwikkelstrategieën en gedragen besluitvorming.",
      profileText3: "Door mijn ondernemende aanpak combineer ik strategisch inzicht met uitvoeringskracht en een scherp gevoel voor bestuurlijke verhoudingen.",
      execSummary: [
        "Meer dan 20 jaar ervaring in vastgoed (ontwikkeling-voorbereiding-realisatie)",
        "10 jaar senior/management functies bij BEMOG, VolkerWessels, Omnia wonen en UWOON",
        "Eigenaar van VOVON development",
        "Co-founder van Circul8 Development B.V.",
        "Oprichter van Vastgoed Netwerk Veluwe (VNV)",
        "Focus op woningbouw, netcongestie, binnenstedelijke transformatie en gebiedsontwikkeling.",
        "Ruime ervaring met publiek-private samenwerking.",
        "Sterk netwerk binnen FGU regio, overheid, vastgoedmarkt en energiesector.",
        "Expertise op het gebied van energietransitie en netbewuste gebiedsontwikkeling.",
        "Aantoonbare ervaring met bestuurlijke besluitvorming en complexe stakeholderprocessen.",
        "Interesse in innovatie, vernieuwing en inzet van AI"
      ],
      results: [
        {
          title: "Integrale aanpak",
          desc: "Initiatiefnemer en ontwikkelaar van diverse gebiedsontwikkelingen waarin woningbouw, voorzieningen, landschap, mobiliteit en energie integraal worden ontwikkeld."
        },
        {
          title: "Innovatie",
          desc: "Ontwikkelde vernieuwende concepten waarbij netcongestie, energiegemeenschappen, batterijopslag en duurzame mobiliteit onderdeel worden van de ruimtelijke ontwikkeling."
        },
        {
          title: "Strategische samenwerkingen",
          desc: "Opgebouwd en geleid samenwerkingen tussen gemeenten, provincies, ontwikkelaars, beleggers, netbeheerders, retailers en maatschappelijke organisaties."
        },
        {
          title: "Bestuurlijke advisering",
          desc: "Adviseur van overheden en marktpartijen bij complexe ruimtelijke vraagstukken, principeverzoeken, gebiedsvisies, businesscases en strategische ontwikkelprogramma's."
        }
      ],
      experience: [
        {
          role: "Directeur / eigenaar",
          company: "VOVON Development B.V.",
          period: "2026 – heden",
          responsibilities: [
            "strategische gebiedsontwikkeling; activeren van ruimte, vastgoed en energie",
            "locatieontwikkeling; begeleiden van initiatieven van verkenning tot realisatie",
            "woningbouwontwikkeling, energie- en mobiliteitsconcepten",
            "procesregie",
            "publiek-private samenwerking",
            "acquisitie en onderhouden van bestuurlijke en regionale netwerken."
          ],
          context: "Werkzaam op het snijvlak van ruimtelijke ontwikkeling en maatschappelijke opgaven."
        },
        {
          role: "Co-founder",
          company: "Circul8 Development B.V. (deeltijd ma-di)",
          period: "2024 – heden",
          context: "Verantwoordelijk voor de ontwikkeling van innovatieve gebiedsconcepten waarin energie en duurzaamheid integraal worden verbonden. Projecten omvatten onder andere:",
          responsibilities: [
            "Green Smart Economy Hub Lelystad",
            "Project HyDeer Waterstofontwikkeling",
            "Netgenoten.nl: gebiedsontwikkeling concept met Lidl supermarkt",
            "Energiehubs en netbewuste woningbouwconcepten, Dronten en Zeewolde"
          ]
        },
        {
          role: "Founder",
          company: "Vastgoed Netwerk Veluwe (VNV)",
          period: "2022 - heden",
          responsibilities: [
            "Voorzitter en dagelijks bestuur vereniging",
            "Oprichting en ontwikkeling van regionaal vastgoednetwerk",
            "Verbinden van circa 50 aangesloten bedrijven",
            "Stimuleren van kennisdeling en samenwerking"
          ]
        },
        {
          role: "Senior ontwikkelmanager",
          company: "BEMOG Projectontwikkeling",
          period: "2020 – 2024",
          context: "Verantwoordelijk voor de acquisitie en ontwikkeling van woningbouw- en gebiedsontwikkelingen in Midden- en Oost-Nederland.",
          activities: [
            "Gebiedstransformatie en strategieontwikkeling",
            "Grondverwerving en strategische positionering grondportefeuille",
            "Planontwikkeling haalbaarheidsstudies onderhandelingen voorbereiden van tenders"
          ]
        },
        {
          role: "Senior Ontwikkelmanager",
          company: "Omnia Wonen",
          period: "2017 – 2020",
          activities: [
            "Gebiedsontwikkeling en ontwikkelmanagement",
            "Realisatie nieuwbouw woningportefeuille",
            "Strategische vastgoedsturing en commerciële trajecten; dispositie en acquisitie",
            "Actief binnen regionale samenwerkingen op bestuurlijk niveau OPA Amersfoort en MT"
          ]
        },
        {
          role: "Senior Procesmanager",
          company: "Archiment",
          period: "2016 – 2018",
          activities: [
            "Betrokken bij projecten voor o.a. Tesla Motors Europe in Duitsland",
            "Integrale gebieds- en programmamanagement – VolkerWessels",
            "Programmamanagement aardbevingsprojecten (NAM / VIIA) CC2 & CC3 projecten",
            "Met afronding projecten en doorloop naar Omnia Wonen"
          ]
        },
        {
          role: "Senior Projectmanager",
          company: "UWOON Woningcorporatie",
          period: "2006 – 2016",
          activities: [
            "Commercieel en maatschappelijk vastgoed; ontwikkelen, voorbereiden en realiseren",
            "Planontwikkeling, verkoop, verhuur en realisatie vastgoedprojecten",
            "Gebiedsontwikkeling van woonwijken, winkelcentra en woon-zorg vastgoed",
            "OR-lid 2008 – 2015 commissie financiën en bedrijfsvoering",
            "Projectleider 2007 – 2009: directievoering en realisatie vastgoedprojecten",
            "Medewerker Projecten – De Groene Zoom 2006 – 2007 | Ermelo met ondersteuning bij projectontwikkeling"
          ]
        },
        {
          role: "Afstudeeropdracht",
          company: "Gemeente Elburg",
          period: "2005",
          context: "Optimalisatie ontwikkeling VMBO-campus (ca. 11.000 m²)"
        },
        {
          role: "Trainee Projectontwikkeling",
          company: "Koopmans Bouwgroep",
          period: "2004 | Enschede"
        }
      ],
      education: [
        {
          degree: "gebieds- en vastgoedontwikkeling",
          school: "Amsterdam School of Real Estate",
          year: "2014 – 2015"
        },
        {
          degree: "Master Bedrijfskunde",
          school: "University College Utrecht",
          year: "2009 – 2011"
        },
        {
          degree: "Ing. Bouwmanagement",
          school: "Windesheim Zwolle",
          year: "2002 – 2006"
        },
        {
          degree: "Green Belt Lean Management",
          school: "Leanent",
          year: "2013 – 2014"
        },
        {
          degree: "Bouw- en vastgoedrecht",
          school: "NEPROM",
          year: "2012"
        }
      ],
      skills: [
        "Operations Management",
        "Project- en gebiedsontwikkeling",
        "Procesmanagement",
        "Programmamanagement",
        "Innovatie en AI"
      ],
      leadershipStyle: "Verbindend, ondernemend en resultaatgericht. Ik geloof dat succesvolle projecten ontstaan door samenwerking, wederzijds vertrouwen en een integrale benadering waarin maatschappelijke waarde centraal staat. Ik ben analytisch sterk, bestuurlijk sensitief en weet verschillende belangen samen te brengen tot gedragen oplossingen.",
      coreValues: [
        "Integriteit", "Verbinding", "Vernieuwen", "Ondernemerschap", 
        "Innovatie", "Maatschappelijke betrokkenheid", "Kwaliteit", "Samenwerking"
      ],
      motto: "Zonder energie geen vastgoed en zonder visie geen gebied."
    },
    en: {
      profileText1: "Senior developer/manager with over 20 years of experience in complex spatial developments, transformation challenges, and integrated development. I get energized by connecting public and private interests where living, working, economy, mobility, energy, and sustainability converge in future-proof areas.",
      profileText2: "I navigate easily between executives, governmental bodies, market players, investors, and social organizations, translating complex issues over the years into viable development strategies and well-supported decision-making processes.",
      profileText3: "Through my entrepreneurial approach, I combine strategic insight with operational execution and a sharp sense for administrative and political relations.",
      execSummary: [
        "More than 20 years of experience in real estate (development-preparation-realization)",
        "10 years in senior/management roles at BEMOG, VolkerWessels, Omnia Wonen, and UWOON",
        "Owner of VOVON development",
        "Co-founder of Circul8 Development B.V.",
        "Founder of Vastgoed Netwerk Veluwe (VNV)",
        "Focused on housing construction, grid congestion, inner-city transformation, and area development.",
        "Extensive experience with public-private partnerships.",
        "Strong network within the FGU region, government, real estate market, and energy sector.",
        "Expertise in energy transition and grid-aware area development.",
        "Proven experience with administrative decision-making and complex stakeholder processes.",
        "Interested in innovation, renewal, and the application of AI"
      ],
      results: [
        {
          title: "Integrated approach",
          desc: "Initiated and developed various area developments where housing, facilities, landscape, mobility, and energy are developed in an integrated manner."
        },
        {
          title: "Innovation",
          desc: "Developed innovative concepts where grid congestion, energy communities, battery storage, and sustainable mobility become part of spatial development."
        },
        {
          title: "Strategic Partnerships",
          desc: "Built and led partnerships between municipalities, provinces, developers, investors, grid operators, retailers, and social organizations."
        },
        {
          title: "Administrative Advisory",
          desc: "Advisor to governments and market players on complex spatial issues, principle requests, area visions, business cases, and strategic development programs."
        }
      ],
      experience: [
        {
          role: "Director / Owner",
          company: "VOVON Development B.V.",
          period: "2026 – present",
          responsibilities: [
            "strategic area development; activating space, real estate, and energy",
            "site development; guiding initiatives from exploration to realization",
            "housing development, energy, and mobility concepts",
            "process management / direction",
            "public-private partnerships",
            "acquisition and maintenance of administrative and regional networks."
          ],
          context: "Working at the intersection of spatial development and societal challenges."
        },
        {
          role: "Co-founder",
          company: "Circul8 Development B.V. (part-time Mon-Tue)",
          period: "2024 – present",
          context: "Responsible for the development of innovative area concepts where energy and sustainability are integrally connected. Projects include:",
          responsibilities: [
            "Green Smart Economy Hub Lelystad",
            "Project HyDeer Hydrogen development",
            "Netgenoten.nl: area development concept with Lidl supermarket",
            "Energy hubs and grid-aware housing concepts, Dronten and Zeewolde"
          ]
        },
        {
          role: "Founder",
          company: "Vastgoed Netwerk Veluwe (VNV)",
          period: "2022 - present",
          responsibilities: [
            "Chairman and daily board of the association",
            "Establishment and development of regional real estate network",
            "Connecting approximately 50 affiliated companies",
            "Stimulating knowledge sharing and cooperation"
          ]
        },
        {
          role: "Senior Development Manager",
          company: "BEMOG Project Development",
          period: "2020 – 2024",
          context: "Responsible for the acquisition and development of housing and area developments in Central and Eastern Netherlands.",
          activities: [
            "Area transformation and strategy development",
            "Land acquisition and strategic positioning of land portfolio",
            "Plan development, feasibility studies, preparing negotiations for tenders"
          ]
        },
        {
          role: "Senior Development Manager",
          company: "Omnia Wonen",
          period: "2017 – 2020",
          activities: [
            "Area development and development management",
            "Realization of new construction housing portfolio",
            "Strategic real estate management and commercial transactions; disposition and acquisition",
            "Active in regional collaborations at administrative level OPA Amersfoort and MT"
          ]
        },
        {
          role: "Senior Process Manager",
          company: "Archiment",
          period: "2016 – 2018",
          activities: [
            "Involved in projects for Tesla Motors Europe in Germany, among others",
            "Integrated area and program management – VolkerWessels",
            "Program management earthquake projects (NAM / VIIA) CC2 & CC3 projects",
            "Completed projects and transitioned to Omnia Wonen"
          ]
        },
        {
          role: "Senior Project Manager",
          company: "UWOON Housing Corporation",
          period: "2006 – 2016",
          activities: [
            "Commercial and social real estate; developing, preparing, and realizing",
            "Plan development, sales, leasing, and realization of real estate projects",
            "Area development of residential areas, shopping centers, and residential care real estate",
            "Works Council member (OR) 2008 – 2015 finance & business operations committee",
            "Project Leader 2007 – 2009: construction management and realization of real estate projects",
            "Project staff – De Groene Zoom 2006 – 2007 | Ermelo with support in project development"
          ]
        },
        {
          role: "Graduation Project",
          company: "Municipality of Elburg",
          period: "2005",
          context: "Optimizing development of VMBO campus (approx. 11,000 m²)"
        },
        {
          role: "Trainee Project Development",
          company: "Koopmans Construction Group",
          period: "2004 | Enschede"
        }
      ],
      education: [
        {
          degree: "Area & Real Estate Development",
          school: "Amsterdam School of Real Estate",
          year: "2014 – 2015"
        },
        {
          degree: "Master of Business Administration (MBA)",
          school: "University College Utrecht",
          year: "2009 – 2011"
        },
        {
          degree: "BEng Construction Management",
          school: "Windesheim Zwolle",
          year: "2002 – 2006"
        },
        {
          degree: "Green Belt Lean Management",
          school: "Leanent",
          year: "2013 – 2014"
        },
        {
          degree: "Construction & Real Estate Law",
          school: "NEPROM",
          year: "2012"
        }
      ],
      skills: [
        "Operations Management",
        "Project & Area Development",
        "Process Management",
        "Program Management",
        "Innovation and AI"
      ],
      leadershipStyle: "Connecting, entrepreneurial, and result-oriented. I believe that successful projects are born from cooperation, mutual trust, and an integrated approach in which societal value is central. I am analytically strong, politically sensitive, and know how to bring diverse interests together to achieve supported solutions.",
      coreValues: [
        "Integrity", "Connection", "Renewal", "Entrepreneurship", 
        "Innovation", "Societal Engagement", "Quality", "Collaboration"
      ],
      motto: "No real estate without energy, and no area without vision."
    }
  }[language];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16 print:bg-white print:p-0 print:pt-0">
      {/* Action Bar (Hidden when printing) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex justify-between items-center print:hidden">
        <Link 
          to="/"
          className="inline-flex items-center text-sm font-bold text-slate-600 hover:text-vovon-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          {t.back}
        </Link>
        <button 
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 bg-vovon-600 text-white rounded-xl shadow-md hover:bg-vovon-700 font-bold text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          {t.print}
        </button>
      </div>

      {/* Main CV Container */}
      <div 
        id="cv-main-card"
        className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-200/60 print:shadow-none print:border-none print:rounded-none print:m-0"
      >
        {/* Header Ribbon / Banner */}
        <div className="relative bg-vovon-950 py-8 px-8 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden">
          {/* Angled background blocks matching corporate style */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-vovon-600/30 to-transparent skew-x-12 transform origin-top-right" />
          <div className="absolute right-10 top-0 bottom-0 w-20 bg-vovon-500/20 -skew-x-12 transform" />
          
          <div className="flex items-center gap-4 z-10">
            <img 
              src="https://image2url.com/r2/default/images/1773421788209-50b1f125-1292-4c2a-9751-f63b3d357d58.png" 
              alt="VOVON Logo" 
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </div>
          <div className="text-right z-10 text-vovon-300 text-xs font-mono tracking-widest uppercase">
            Curriculum Vitae
          </div>
        </div>

        {/* Header Block with photo & info */}
        <div className="p-8 sm:p-12 border-b border-slate-100 bg-slate-50/50">
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">H.J. (Patrick) Vos</h1>
                <p className="text-lg font-bold text-vovon-600 mt-1 uppercase tracking-wide">
                  Senior Ontwikkelaar / Regisseur
                </p>
              </div>

              {/* Personal Details Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2 text-sm text-slate-600">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                    <Heart className="w-4 h-4 text-vovon-500" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-slate-400 uppercase tracking-wider">Roepnaam</span>
                    <span className="font-bold text-slate-800">Patrick Vos</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                    <Calendar className="w-4 h-4 text-vovon-500" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-slate-400 uppercase tracking-wider">{t.availability}</span>
                    <span className="font-bold text-slate-800">{t.inConsultation}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                    <MapPin className="w-4 h-4 text-vovon-500" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-slate-400 uppercase tracking-wider">{t.location}</span>
                    <span className="font-bold text-slate-800">Elburg</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                    <Mail className="w-4 h-4 text-vovon-500" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-slate-400 uppercase tracking-wider">{t.email}</span>
                    <a href="mailto:info@vovon.nl" className="font-bold text-vovon-600 hover:underline">info@vovon.nl</a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                    <Globe className="w-4 h-4 text-vovon-500" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-slate-400 uppercase tracking-wider">{t.website}</span>
                    <a href="https://www.vovon.nl" target="_blank" rel="noopener noreferrer" className="font-bold text-vovon-600 hover:underline">www.vovon.nl</a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                    <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-slate-400 uppercase tracking-wider">{t.linkedin}</span>
                    <a href="https://www.linkedin.com/in/patrick-vos-49527726/" target="_blank" rel="noopener noreferrer" className="font-bold text-vovon-600 hover:underline">LinkedIn Profiel</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="relative shrink-0 mx-auto md:mx-0">
              <div className="w-36 h-36 rounded-2xl overflow-hidden shadow-md border-4 border-white relative z-10">
                <img 
                  src="https://www.image2url.com/r2/default/images/1778272409083-db33f987-0a94-45f6-9667-4d00551c6598.png" 
                  alt="Patrick Vos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-36 h-36 bg-vovon-100 rounded-2xl -z-0" />
            </div>
          </div>
        </div>

        {/* Interactive / Grid CV content */}
        <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main content column (Left/Center 2-cols) */}
          <div className="lg:col-span-2 space-y-10">
            {/* PROFILE / PROFIEL */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-1.5 h-5 bg-vovon-600 rounded-full" />
                {t.profileTitle}
              </h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                {cvData.profileText1}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                {cvData.profileText2}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                {cvData.profileText3}
              </p>
            </section>

            {/* SELECTED RESULTS */}
            <section className="space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-1.5 h-5 bg-vovon-600 rounded-full" />
                {t.selectedResults}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cvData.results.map((result, i) => (
                  <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/40 relative overflow-hidden group hover:border-vovon-100 hover:bg-vovon-50/10 transition-all duration-300">
                    <h3 className="font-bold text-slate-800 text-sm mb-1.5 flex items-center gap-2">
                      <span className="w-1 h-3 bg-vovon-500 rounded-full" />
                      {result.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {result.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* WORK EXPERIENCE */}
            <section className="space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-1.5 h-5 bg-vovon-600 rounded-full" />
                {t.workExperience}
              </h2>

              <div className="relative border-l-2 border-slate-100 pl-6 ml-3 space-y-8">
                {cvData.experience.map((exp, i) => (
                  <div key={i} className="relative group">
                    {/* Timeline bullet */}
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-2 border-vovon-500 group-hover:bg-vovon-500 transition-colors" />
                    
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <h3 className="font-extrabold text-slate-800 text-base">{exp.role}</h3>
                          <span className="text-sm font-bold text-vovon-600">{exp.company}</span>
                        </div>
                        <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold shrink-0 self-start sm:self-center">
                          {exp.period}
                        </span>
                      </div>

                      {exp.context && (
                        <p className="text-slate-600 text-xs leading-relaxed italic">
                          {exp.context}
                        </p>
                      )}

                      {exp.responsibilities && (
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
                            {t.responsibilities}
                          </span>
                          <ul className="space-y-1">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="text-slate-600 text-xs flex items-start">
                                <span className="text-vovon-500 mr-2 shrink-0">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {exp.activities && (
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
                            {t.activities}
                          </span>
                          <ul className="space-y-1">
                            {exp.activities.map((act, idx) => (
                              <li key={idx} className="text-slate-600 text-xs flex items-start">
                                <span className="text-vovon-500 mr-2 shrink-0">•</span>
                                <span>{act}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar column (Right 1-col) */}
          <div className="space-y-8">
            
            {/* EXECUTIVE SUMMARY */}
            <section className="bg-slate-50/60 rounded-3xl p-6 border border-slate-100 space-y-4">
              <h2 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-vovon-600" />
                {t.execSummary}
              </h2>
              <ul className="space-y-3">
                {cvData.execSummary.map((item, i) => (
                  <li key={i} className="text-slate-600 text-xs flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-vovon-500 mr-2.5 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* EDUCATION */}
            <section className="bg-slate-50/60 rounded-3xl p-6 border border-slate-100 space-y-4">
              <h2 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-vovon-600" />
                {t.education}
              </h2>
              <div className="space-y-4">
                {cvData.education.map((edu, i) => (
                  <div key={i} className="relative pl-3 border-l-2 border-vovon-200">
                    <h3 className="font-bold text-slate-800 text-xs leading-snug">{edu.degree}</h3>
                    <p className="text-vovon-700 text-xs font-semibold">{edu.school}</p>
                    <span className="text-slate-400 text-[10px] block mt-0.5 font-bold">{edu.year}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* EXPERTISE & SKILLS */}
            <section className="bg-slate-50/60 rounded-3xl p-6 border border-slate-100 space-y-4">
              <h2 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight flex items-center gap-2">
                <Compass className="w-5 h-5 text-vovon-600" />
                {t.skills}
              </h2>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white border border-slate-150 text-slate-700 rounded-full text-xs font-bold shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* LEADERSHIP STYLE */}
            <section className="bg-slate-50/60 rounded-3xl p-6 border border-slate-100 space-y-3">
              <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-vovon-600" />
                {t.leadershipStyle}
              </h2>
              <p className="text-slate-600 text-xs leading-relaxed italic">
                "{cvData.leadershipStyle}"
              </p>
            </section>

            {/* CORE VALUES */}
            <section className="bg-slate-50/60 rounded-3xl p-6 border border-slate-100 space-y-3">
              <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Heart className="w-4 h-4 text-vovon-500" />
                {t.coreValues}
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {cvData.coreValues.map((value, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 bg-vovon-50 text-vovon-700 rounded-lg text-xs font-semibold border border-vovon-100"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </section>

            {/* MOTTO */}
            <section className="bg-gradient-to-br from-vovon-950 to-slate-900 rounded-3xl p-6 text-white text-center relative overflow-hidden shadow-md">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-vovon-600/20 rounded-full blur-2xl" />
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-vovon-400 mb-2">
                {t.motto}
              </h2>
              <p className="font-bold text-sm leading-relaxed italic text-slate-100">
                "{cvData.motto}"
              </p>
            </section>
          </div>
        </div>

        {/* Footer Ribbon */}
        <div className="bg-vovon-950 py-4 px-8 text-center text-[10px] font-mono text-slate-400 border-t border-slate-800">
          H.J. (Patrick) Vos • VOVON Development • Elburg • www.vovon.nl
        </div>
      </div>
    </div>
  );
}
