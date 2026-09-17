import { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, FileText, ArrowRight, Mail, Globe, MapPin, 
  Linkedin, Award, Briefcase, GraduationCap, CheckCircle2,
  Sparkles, Compass, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Language } from '../translations';

interface AboutMePageProps {
  language: Language;
}

export default function AboutMePage({ language }: AboutMePageProps) {
  // Smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const isNl = language === 'nl';

  return (
    <main className="min-h-screen bg-slate-50 pt-24 sm:pt-28 pb-16">
      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-vovon-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{isNl ? 'Terug naar Home' : 'Back to Home'}</span>
          </Link>

          <Link
            to="/cv"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:border-vovon-500 hover:text-vovon-600 shadow-sm transition-all group"
          >
            <FileText className="w-3.5 h-3.5 text-vovon-500" />
            <span>{isNl ? 'Bekijk direct CV' : 'View CV directly'}</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
          
          {/* Hero Header Banner */}
          <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-vovon-600/20 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-vovon-300 text-[11px] font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3 h-3" />
                <span>{isNl ? 'VOVON Oprichter & Regisseur' : 'VOVON Founder & Director'}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                {isNl ? 'Maak kennis met Patrick Vos' : 'Meet Patrick Vos'}
              </h1>
              <p className="mt-2.5 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                {isNl
                  ? 'Senior ontwikkelaar en procesregisseur met ruim 20 jaar ervaring in complexe ruimtelijke opgaven, transformaties en netbewuste gebiedsontwikkeling.'
                  : 'Senior developer and process director with over 20 years of experience in complex spatial challenges, transformations, and grid-conscious area development.'}
              </p>
            </div>
          </div>

          {/* Grid Layout: Profile Sidebar (Left) & Personal Narrative (Right) */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            
            {/* Left Sidebar: Photo & Key Facts */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Compact Passport/Portrait Card */}
              <div className="bg-slate-50/90 rounded-2xl p-5 border border-slate-200/80 text-center flex flex-col items-center">
                <div className="relative w-36 h-44 rounded-xl overflow-hidden shadow-md border-2 border-white ring-1 ring-slate-200/80 bg-slate-900 mb-3.5 group">
                  <img
                    src="https://www.image2url.com/r2/default/images/1788503359695-aefa0cc2-81e4-4916-9a4f-f341ea8f9d5f.png"
                    alt="Patrick Vos - VOVON"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h2 className="text-base font-bold text-slate-900">H.J. (Patrick) Vos</h2>
                <p className="text-xs font-semibold text-vovon-600 mt-0.5">
                  {isNl ? 'Oprichter & Eigenaar VOVON' : 'Founder & Owner VOVON'}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-200/70 w-full flex items-center justify-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-vovon-500 shrink-0" />
                  <span>Elburg • Actief landelijk</span>
                </div>
              </div>

              {/* Quick Credentials Badge */}
              <div className="bg-slate-50/90 rounded-2xl p-4.5 border border-slate-200/80 space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-vovon-50 text-vovon-600 flex items-center justify-center shrink-0 border border-vovon-100">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">20+ {isNl ? 'jaar ervaring' : 'years experience'}</span>
                    <span className="text-[11px] text-slate-500">{isNl ? 'Vastgoed- & gebiedsontwikkeling' : 'Real estate & area development'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-vovon-50 text-vovon-600 flex items-center justify-center shrink-0 border border-vovon-100">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">{isNl ? 'Opleiding & Specialisatie' : 'Education & Specialization'}</span>
                    <span className="text-[11px] text-slate-500">Bedrijfskunde • ASRE • Ing.</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-vovon-50 text-vovon-600 flex items-center justify-center shrink-0 border border-vovon-100">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">{isNl ? 'Netwerk & Bestuur' : 'Network & Governance'}</span>
                    <span className="text-[11px] text-slate-500">{isNl ? 'Voorzitter Vastgoed Netwerk Veluwe' : 'Chair Real Estate Network Veluwe'}</span>
                  </div>
                </div>
              </div>

              {/* Contact Information & LinkedIn */}
              <div className="bg-white rounded-2xl p-4.5 border border-slate-200/80 shadow-sm space-y-2.5 text-xs">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {isNl ? 'Direct contact' : 'Direct contact'}
                </h4>
                
                <a
                  href="mailto:info@vovon.nl"
                  className="flex items-center gap-2 text-slate-700 hover:text-vovon-600 transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-vovon-500 shrink-0" />
                  <span className="font-medium truncate">info@vovon.nl</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/patrick-vos-49527726/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-700 hover:text-[#0a66c2] transition-colors group"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0a66c2] shrink-0" />
                  <span className="font-medium">LinkedIn Profiel</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform ml-auto" />
                </a>
              </div>

            </div>

            {/* Right Column: Narrative & CV Button */}
            <div className="lg:col-span-8 space-y-5">
              
              {/* Personal Narrative Lead & Paragraphs */}
              <div className="space-y-3.5 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                
                <p className="font-semibold text-slate-900 text-base sm:text-[17px] border-l-4 border-vovon-500 pl-3.5 py-0.5 leading-snug">
                  {isNl
                    ? '„Ik ken de ontwikkelpraktijk én het beleggers- en corporatieperspectief van binnenuit.”'
                    : '“I know both the development practice and the investor and housing corporation perspectives from within.”'}
                </p>

                <p>
                  {isNl ? (
                    <>
                      Nadat ik mijn ingenieursdiploma aan Windesheim behaalde en tijdens mijn OR periode bij UWOON ook mijn Bedrijfskunde afrondde, heb ik mij aan de <strong>Amsterdam School of Real Estate (ASRE)</strong> verder gespecialiseerd in gebieds- en vastgoedontwikkeling en exploitatie.
                    </>
                  ) : (
                    <>
                      After obtaining my engineering degree at Windesheim and completing Business Administration during my Works Council (OR) tenure at UWOON, I further specialized in area and real estate development and exploitation at the <strong>Amsterdam School of Real Estate (ASRE)</strong>.
                    </>
                  )}
                </p>

                <p>
                  {isNl ? (
                    <>
                      De afgelopen twintig jaar ben ik actief geweest in senior ontwikkel- en managementfuncties bij onder meer <strong>BEMOG Projektontwikkeling (nu BPD)</strong>, <strong>VolkerWessels (Archiment)</strong>, <strong>Omnia Wonen</strong> en <strong>woningcorporatie UWOON</strong>. Hier werkte ik vooral aan grootschalige woningbouw-, binnenstedelijke transformaties en maatschappelijke gebiedsontwikkelingen. In die jaren leerde ik de ontwikkelpraktijk én het perspectief van institutionele beleggers, aannemers, corporaties en gemeenten – van binnenuit – grondig kennen.
                    </>
                  ) : (
                    <>
                      Over the past twenty years, I have been active in senior development and management roles at organizations including <strong>BEMOG Projektontwikkeling (now BPD)</strong>, <strong>VolkerWessels (Archiment)</strong>, <strong>Omnia Wonen</strong>, and <strong>housing corporation UWOON</strong>. I worked extensively on residential developments, urban transformations, and area initiatives, understanding the operational mechanics and perspectives of institutional investors, contractors, housing associations, and municipalities thoroughly from within.
                    </>
                  )}
                </p>

                <p>
                  {isNl ? (
                    <>
                      Ik ben gewend aan de opdrachtgever en opdrachtnemers rollen in complexe, stedelijke en regionale ontwikkelingen met veel stakeholders en aan de voortdurende afweging tussen ambitie, haalbaarheid en markt. Die ervaring helpt mij om snel te zien waar kansen en risico&apos;s liggen en wat er concreet nodig is om een ontwikkeling verder te brengen.
                    </>
                  ) : (
                    <>
                      I am accustomed to both client and contractor roles in complex urban and regional developments with multiple stakeholders, and the continuous balance between ambition, feasibility, and market realities. That experience helps me quickly pinpoint opportunities and risks and determine what is needed to advance a project.
                    </>
                  )}
                </p>

                <p>
                  {isNl ? (
                    <>
                      Vandaag de dag vraagt gebiedsontwikkeling bovendien om een integrale koppeling met de energietransitie. Als oprichter van <strong>VOVON Development</strong> en medeoprichter van <strong>Circul8 Development</strong> focus ik mij op netbewust ontwikkelen, het oplossen van netcongestie en het realiseren van toekomstbestendige woon- en werkgebieden.
                    </>
                  ) : (
                    <>
                      Today, area development demands an integral connection with the energy transition. As founder of VOVON Development and co-founder of Circul8 Development, I focus on grid-aware development, resolving grid congestion, and realizing resilient living and working environments.
                    </>
                  )}
                </p>

                <p>
                  {isNl ? (
                    <>
                      Mijn manier van werken is <strong>nuchter en betrokken</strong>. Ik luister, verbind mensen en belangen en neem verantwoordelijkheid. Want uiteindelijk ontstaat een succesvolle ontwikkeling niet alleen op papier. Je creëert het samen.
                    </>
                  ) : (
                    <>
                      My way of working is down-to-earth and committed. I listen, align people and interests, and take responsibility. Because ultimately, a successful development is not just created on paper. You build it together.
                    </>
                  )}
                </p>

              </div>

              {/* Motto Box */}
              <div className="bg-gradient-to-r from-vovon-50 to-slate-50 border border-vovon-200/70 rounded-xl p-4 sm:p-5 text-slate-800">
                <p className="text-[11px] font-bold uppercase tracking-widest text-vovon-600 mb-1">
                  {isNl ? 'Motto & Visie' : 'Motto & Vision'}
                </p>
                <blockquote className="text-base sm:text-[17px] font-bold text-slate-900 italic">
                  {isNl
                    ? '„Zonder energie geen vastgoed en zonder visie geen gebied.”'
                    : '“Without energy no real estate, and without vision no area.”'}
                </blockquote>
                <p className="text-xs text-slate-500 mt-1.5 font-medium">
                  — Patrick Vos • VOVON Development
                </p>
              </div>

              {/* HIGH PRIORITY CTA BUTTON FOR CV */}
              <div className="pt-1">
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-800 relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-vovon-600/20 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-vovon-300 uppercase tracking-wider">
                        <FileText className="w-3 h-3" />
                        <span>Curriculum Vitae</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {isNl ? 'Bekijk het volledige CV van Patrick' : 'View Patrick’s complete CV'}
                      </h3>
                      <p className="text-xs text-slate-300 max-w-md">
                        {isNl
                          ? 'Inclusief alle gerealiseerde projecten, loopbaan, diploma’s en PDF download.'
                          : 'Includes all completed projects, career timeline, degrees, and PDF download.'}
                      </p>
                    </div>

                    <Link
                      to="/cv"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-vovon-600 hover:bg-vovon-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all group shrink-0 w-full sm:w-auto"
                    >
                      <FileText className="w-3.5 h-3.5 text-white" />
                      <span>{isNl ? 'Mijn CV bekijken' : 'View my CV'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Secondary CTA / Connect */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-200/80 text-xs">
                <span className="text-slate-600 font-medium text-center sm:text-left">
                  {isNl
                    ? 'Benieuwd wat we voor uw locatie, project of opgave kunnen betekenen?'
                    : 'Curious what we can achieve for your location, project, or challenge?'}
                </span>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors shrink-0"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-600" />
                  <span>{isNl ? 'Neem contact op' : 'Get in touch'}</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
