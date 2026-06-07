import React from 'react';
import { X, MapPin, Building2, ExternalLink } from 'lucide-react';
import projectsData from '../data/projects.json';

interface CategoryProjectsModalProps {
  category: string;
  onClose: () => void;
  language: 'nl' | 'en';
  onSelectProject: (project: any) => void;
}

const getProjectsForCategory = (category: string) => {
  const normalizedCategory = category.toLowerCase();
  
  let filtered = projectsData.projects.filter((p: any) => {
    // Collect specific fields to search through
    const searchFields = [
      p.name || '',
      p.project_context || '',
      ...(p.programma_items || []),
      ...(p.ambitie_items || [])
    ].map(text => text.toLowerCase());
    
    const hasKeyword = (keywords: string[]) => 
      searchFields.some(field => keywords.some(kw => field.includes(kw)));
      
    if (normalizedCategory === 'wonen' || normalizedCategory === 'woningbouw') {
      return hasKeyword(['woning', 'wonen', 'appartement']);
    }
    if (normalizedCategory === 'commercieel') {
      if ((p.name || '').toLowerCase().includes('sytzemalaan')) return false;
      return hasKeyword(['winkel', 'supermarkt', 'retail', 'commercieel', 'bog', 'bedrijf', 'bedrijfsruimte']);
    }
    if (normalizedCategory === 'maatschappelijk') {
      const name = (p.name || '').toLowerCase();
      if (name.includes('harde') || name.includes('trefpunt') || name.includes('koeland')) return false;
      return hasKeyword(['zorg', 'gezondheid', 'onderwijs', 'huisarts', 'thomashuis', 'apotheek', 'maatschappelijk', 'mfa', 'gezondheidscentrum']);
    }
    if (normalizedCategory === 'energie') {
      const name = (p.name || '').toLowerCase();
      const context = (p.project_context || '').toLowerCase();
      if (name.includes('trefpunt') || name.includes('viventra') || name.includes('sportfondsen') || name.includes('soesterhof')) return false;
      if (
        name.includes('molenbeek') ||
        name.includes('hoorn') ||
        context.includes('dronten') ||
        context.includes('zeewolde') ||
        name.includes('bioscience') ||
        name.includes('ossenkampweg') ||
        name.includes('zandlaan') ||
        name.includes('laadplein')
      ) return true;
      return hasKeyword(['energie', 'gasloos', 'nom', 'duurzaam', 'netcongestie', 'warmte', 'klimaatadaptief', 'laadplein', 'bess', 'laadinfra']);
    }
    return false;
  });

  if (normalizedCategory === 'wonen' || normalizedCategory === 'woningbouw') {
    const trefpunt = filtered.find((p: any) => (p.name || '').toLowerCase().includes('trefpunt'));
    const dijkjes = filtered.find((p: any) => (p.name || '').toLowerCase().includes('dijkjes'));
    const viventra = filtered.find((p: any) => (p.name || '').toLowerCase().includes('viventra'));
    const sportfondsen = filtered.find((p: any) => (p.name || '').toLowerCase().includes('sportfondsen'));
    const soesterhof = filtered.find((p: any) => (p.name || '').toLowerCase().includes('soesterhof'));
    
    filtered = filtered.filter((p: any) => {
      const name = (p.name || '').toLowerCase();
      return !name.includes('trefpunt') && !name.includes('dijkjes') && !name.includes('viventra') && !name.includes('sportfondsen') && !name.includes('soesterhof');
    });
    
    // Place them at index 1 and 2 (so they are 2nd and 3rd)
    if (trefpunt) filtered.splice(1, 0, trefpunt);
    if (dijkjes) filtered.splice(2, 0, dijkjes);
    if (viventra) filtered.splice(3, 0, viventra);
    if (sportfondsen) filtered.splice(4, 0, sportfondsen);
    if (soesterhof) filtered.splice(5, 0, soesterhof);
  }

  if (normalizedCategory === 'maatschappelijk') {
    const ijsvogel = filtered.find((p: any) => (p.name || '').toLowerCase().includes('ijsvogel'));
    const amaniet = filtered.find((p: any) => (p.name || '').toLowerCase().includes('amaniet'));
    const herbergier = filtered.find((p: any) => (p.name || '').toLowerCase().includes('herbergier'));

    filtered = filtered.filter((p: any) => {
      const name = (p.name || '').toLowerCase();
      return !name.includes('ijsvogel') && !name.includes('amaniet') && !name.includes('herbergier');
    });

    if (herbergier) filtered.unshift(herbergier);
    if (amaniet) filtered.unshift(amaniet);
    if (ijsvogel) filtered.unshift(ijsvogel);
  }

  if (normalizedCategory === 'energie') {
    // Specifically named projects to place at the top
    const hoorn = filtered.find((p: any) => (p.name || '').toLowerCase().includes('hoorn'));
    const dronten = filtered.find((p: any) => (p.project_context || '').toLowerCase().includes('dronten'));
    const zeewolde = filtered.find((p: any) => (p.project_context || '').toLowerCase().includes('zeewolde') || (p.name || '').toLowerCase().includes('ossenkampweg'));
    const bioscience = filtered.find((p: any) => (p.name || '').toLowerCase().includes('bioscience'));
    const zandlaan = filtered.find((p: any) => (p.name || '').toLowerCase().includes('zandlaan')); // has Laadplein/BESS
    const molenbeek = filtered.find((p: any) => (p.name || '').toLowerCase().includes('molenbeek'));

    filtered = filtered.filter((p: any) => {
      const name = (p.name || '').toLowerCase();
      const context = (p.project_context || '').toLowerCase();
      return !name.includes('hoorn') && 
             !context.includes('dronten') && 
             !context.includes('zeewolde') && 
             !name.includes('ossenkampweg') && 
             !name.includes('bioscience') && 
             !name.includes('zandlaan') && 
             !name.includes('molenbeek');
    });

    // unshift adds to the beginning, so we add in reverse order of how we want them to appear
    if (molenbeek) filtered.unshift(molenbeek);
    if (zandlaan) filtered.unshift(zandlaan); // Laadpleinen
    if (bioscience) filtered.unshift(bioscience);
    if (zeewolde) filtered.unshift(zeewolde);
    if (dronten) filtered.unshift(dronten);
    if (hoorn) filtered.unshift(hoorn);
  }

  return filtered.slice(0, 6); // Take up to 6 representational examples
};

export default function CategoryProjectsModal({ category, onClose, language, onSelectProject }: CategoryProjectsModalProps) {
  const categoryProjects = getProjectsForCategory(category);
  
  const title = language === 'nl' 
    ? `Referenties: ${category}` 
    : `References: ${category}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer transition-opacity duration-300"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col z-10 animate-in fade-in zoom-in-95 duration-300 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:px-8 sm:py-6 border-b border-slate-100 bg-white shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-vovon-50 text-vovon-600 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h3>
              <p className="text-sm font-medium text-slate-500 mt-1">
                {language === 'nl' ? 'Selectie van gerealiseerde projecten uit onze portfolio' : 'Selection of realized projects from our portfolio'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors group"
          >
            <X className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 bg-slate-50/50 flex-1 custom-scrollbar">
          {categoryProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProjects.map((project: any) => (
                <div 
                  key={project.id} 
                  onClick={() => onSelectProject(project)}
                  className="bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-lg hover:border-vovon-200 transition-all duration-300 group flex flex-col overflow-hidden cursor-pointer"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-bold text-slate-900 leading-tight group-hover:text-vovon-600 transition-colors">
                        {project.name}
                      </h4>
                      <MapPin className="w-5 h-5 text-vovon-400 shrink-0 ml-3" />
                    </div>
                    
                    {project.project_context && (
                      <p className="text-[13px] text-slate-600 mb-5 leading-relaxed line-clamp-3">
                        {project.project_context}
                      </p>
                    )}

                    <div className="mt-auto space-y-4">
                      {project.programma_items && project.programma_items.length > 0 && (
                        <div className="bg-slate-50 rounded-lg p-3">
                          <span className="text-[10px] font-bold text-vovon-700 uppercase tracking-wider block mb-2">
                            Programma
                          </span>
                          <ul className="text-[13px] text-slate-700 space-y-1.5">
                            {project.programma_items.slice(0, 3).map((item: string, i: number) => (
                              <li key={i} className="flex">
                                <span className="mr-2 text-vovon-500">•</span>
                                <span className="line-clamp-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-slate-300" />
              </div>
              <p className="text-slate-500 font-medium text-lg">
                {language === 'nl' 
                  ? 'Geen specifieke projecten gevonden voor deze categorie.' 
                  : 'No specific projects found for this category.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
