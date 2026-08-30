import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight, MessageSquare } from 'lucide-react';
import { Language } from '../translations';
import { faqData, QAItem } from '../data/faq';

interface FAQProps {
  language: Language;
}

type CategoryFilter = 'all' | 'development' | 'organisation';

export default function FAQ({ language }: FAQProps) {
  const data = faqData[language] || faqData.nl;
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for immediate engagement

  // Filter items
  const filteredQAs = useMemo(() => {
    if (activeCategory === 'all') return data.qas;
    return data.qas.filter((item) => item.category === activeCategory);
  }, [data.qas, activeCategory]);

  const counts = useMemo(() => {
    return {
      all: data.qas.length,
      development: data.qas.filter((item) => item.category === 'development').length,
      organisation: data.qas.filter((item) => item.category === 'organisation').length,
    };
  }, [data.qas]);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (category: CategoryFilter) => {
    setActiveCategory(category);
    setOpenIndex(0); // Open first item in new category
  };

  return (
    <section id="faq" className="pt-28 pb-24 sm:pb-32 bg-[#faf9f6] min-h-screen border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Introduction & Category Navigation */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28 space-y-8">
            <div>
              {/* Small Category Label */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-px bg-vovon-600"></span>
                <span className="text-vovon-600 font-bold uppercase tracking-widest text-xs">
                  {data.label}
                </span>
              </div>

              {/* Large Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
                {data.headline}
              </h1>

              {/* Short Editorial Intro */}
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {data.subtitle}
              </p>
            </div>

            {/* Minimalist Editorial Category Filter */}
            <div className="space-y-2 pt-2 border-t border-slate-200/80">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                {language === 'nl' ? 'Filter op onderwerp' : 'Filter by topic'}
              </span>
              
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-white hover:bg-slate-100/80 text-slate-700 border border-slate-200/70'
                  }`}
                >
                  <span className="truncate">{data.categories.all}</span>
                  <span
                    className={`ml-2 px-2 py-0.5 rounded-full text-[10px] font-mono ${
                      activeCategory === 'all'
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}
                  >
                    {counts.all}
                  </span>
                </button>

                <button
                  onClick={() => handleCategoryChange('development')}
                  className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                    activeCategory === 'development'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-white hover:bg-slate-100/80 text-slate-700 border border-slate-200/70'
                  }`}
                >
                  <span className="truncate">{data.categories.development}</span>
                  <span
                    className={`ml-2 px-2 py-0.5 rounded-full text-[10px] font-mono ${
                      activeCategory === 'development'
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}
                  >
                    {counts.development}
                  </span>
                </button>

                <button
                  onClick={() => handleCategoryChange('organisation')}
                  className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                    activeCategory === 'organisation'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-white hover:bg-slate-100/80 text-slate-700 border border-slate-200/70'
                  }`}
                >
                  <span className="truncate">{data.categories.organisation}</span>
                  <span
                    className={`ml-2 px-2 py-0.5 rounded-full text-[10px] font-mono ${
                      activeCategory === 'organisation'
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}
                  >
                    {counts.organisation}
                  </span>
                </button>
              </div>
            </div>

            {/* Sticky Outro / Contact Card */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {data.outroTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {data.outroText}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-slate-900 hover:bg-vovon-600 text-white rounded-xl text-xs font-bold tracking-tight transition-colors shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{data.contactBtn}</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Minimalist Accordion List with Fine Horizontal Lines */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="bg-white border border-slate-200/90 rounded-2xl shadow-2xs overflow-hidden">
              <div className="divide-y divide-slate-200/80">
                {filteredQAs.map((item, index) => {
                  const isOpen = openIndex === index;
                  const itemNumber = (index + 1).toString().padStart(2, '0');

                  return (
                    <div
                      key={`${activeCategory}-${index}`}
                      className={`transition-colors duration-200 ${
                        isOpen ? 'bg-[#fffcfd]/80' : 'hover:bg-slate-50/60'
                      }`}
                    >
                      {/* Accordion Trigger Header */}
                      <button
                        onClick={() => toggleOpen(index)}
                        aria-expanded={isOpen}
                        className="w-full py-5 sm:py-6 px-6 sm:px-8 text-left flex items-start justify-between gap-4 group cursor-pointer focus:outline-none"
                      >
                        {/* Number + Question */}
                        <div className="flex items-start gap-4 sm:gap-5 flex-1 pr-2">
                          <span className="font-mono text-xs sm:text-sm font-bold text-vovon-600 shrink-0 pt-0.5 select-none w-6 sm:w-7">
                            {itemNumber}
                          </span>
                          <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-vovon-700 transition-colors duration-200 leading-snug tracking-tight">
                            {item.q}
                          </span>
                        </div>

                        {/* Minimalist + / − Icon */}
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5 ${
                            isOpen
                              ? 'bg-vovon-600 text-white shadow-2xs'
                              : 'bg-slate-100 text-slate-500 group-hover:bg-vovon-50 group-hover:text-vovon-600'
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-4 h-4 stroke-[2.2]" />
                          ) : (
                            <Plus className="w-4 h-4 stroke-[2.2]" />
                          )}
                        </div>
                      </button>

                      {/* Accordion Content Body */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pl-16 sm:pl-20 pr-6 sm:pr-8 pb-6 sm:pb-8 pt-0">
                              <div className="max-w-2xl text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal space-y-3">
                                {renderAnswerContent(item.a)}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Subtle Footer Note */}
            <div className="mt-8 flex items-center justify-between px-2 text-xs text-slate-500">
              <span className="font-medium">
                {language === 'nl' 
                  ? `Totaal ${filteredQAs.length} antwoorden in deze selectie` 
                  : `Total of ${filteredQAs.length} answers in this selection`}
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 font-semibold text-slate-800 hover:text-vovon-600 transition-colors"
              >
                <span>{language === 'nl' ? 'Stel uw vraag direct' : 'Ask a question'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/**
 * Helper to render formatted editorial answer text with clean paragraphs and styled bullet points
 */
function renderAnswerContent(rawText: string) {
  const paragraphs = rawText.split('\n\n');

  return paragraphs.map((para, pIdx) => {
    // Check if this paragraph is a list of bullet points starting with *
    if (para.includes('\n* ') || para.startsWith('* ')) {
      const listItems = para
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.startsWith('* '))
        .map((line) => line.replace(/^\*\s*/, ''));

      return (
        <ul key={pIdx} className="space-y-1.5 my-2">
          {listItems.map((item, lIdx) => (
            <li key={lIdx} className="flex items-start gap-2.5 text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-vovon-600 mt-2 shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    // Check if this paragraph is a numbered list
    if (para.match(/^\d+\.\s/m)) {
      const listItems = para
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => Boolean(line));

      return (
        <div key={pIdx} className="space-y-1.5 my-2">
          {listItems.map((item, lIdx) => (
            <div key={lIdx} className="flex items-start gap-2.5 text-slate-700">
              <span className="font-mono text-xs font-bold text-vovon-600 mt-0.5 shrink-0">
                {(lIdx + 1).toString().padStart(2, '0')}.
              </span>
              <span>{item.replace(/^\d+\.\s*/, '')}</span>
            </div>
          ))}
        </div>
      );
    }

    // Regular paragraph
    return (
      <p key={pIdx} className="text-slate-600 leading-relaxed font-normal">
        {para}
      </p>
    );
  });
}
