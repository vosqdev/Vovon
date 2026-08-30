import React from 'react';
import { Home, Briefcase, Landmark, Zap, Building2, ArrowUpRight, Compass, MapPin } from 'lucide-react';
import { FormattedProject } from '../utils/projectHelpers';

interface ProjectPopupCardProps {
  project: FormattedProject;
  language: 'nl' | 'en';
  isGridMode?: boolean;
  onFocusOnMap?: (project: FormattedProject) => void;
}

const ProjectPopupCard: React.FC<ProjectPopupCardProps> = ({
  project,
  language,
  isGridMode = false,
  onFocusOnMap,
}) => {
  const getIcon = () => {
    switch (project.iconType) {
      case 'energy':
        return <Zap className="w-4 h-4 text-amber-600" />;
      case 'social':
        return <Landmark className="w-4 h-4 text-emerald-600" />;
      case 'commercial':
        return <Briefcase className="w-4 h-4 text-blue-600" />;
      case 'area':
        return <Building2 className="w-4 h-4 text-vovon-600" />;
      case 'home':
      default:
        return <Home className="w-4 h-4 text-slate-700" />;
    }
  };

  const getIconBg = () => {
    switch (project.iconType) {
      case 'energy':
        return 'bg-amber-50 border-amber-200/80';
      case 'social':
        return 'bg-emerald-50 border-emerald-200/80';
      case 'commercial':
        return 'bg-blue-50 border-blue-200/80';
      case 'area':
        return 'bg-vovon-50 border-vovon-200/80';
      case 'home':
      default:
        return 'bg-slate-100 border-slate-200/80';
    }
  };

  return (
    <div
      className={`bg-white text-slate-800 transition-all ${
        isGridMode
          ? 'h-full flex flex-col justify-between rounded-[22px] p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300'
          : 'w-[320px] sm:w-[360px] p-5.5'
      }`}
    >
      {/* Top Header: Icon & Category Tags */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div
            className={`w-9 h-9 rounded-xl border flex items-center justify-center shadow-xs shrink-0 ${getIconBg()}`}
          >
            {getIcon()}
          </div>

          <div className="flex flex-wrap items-center justify-end gap-1.5 overflow-hidden">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border ${
                  idx === 0
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-vovon-50 text-vovon-800 border-vovon-200/80'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug mb-2">
          {project.name}
        </h3>

        {/* Project Summary */}
        <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4 line-clamp-3">
          {project.summary}
        </p>

        {/* Key Metrics: 3 Clean Architectural Tiles */}
        <div className="grid grid-cols-3 gap-2 py-3 px-3.5 mb-4 bg-slate-50/90 rounded-xl border border-slate-100 text-left">
          <div className="space-y-0.5">
            <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
              {language === 'nl' ? 'Fase' : 'Phase'}
            </span>
            <span className="block text-[11px] font-semibold text-slate-900 truncate" title={project.fase}>
              {project.fase}
            </span>
          </div>

          <div className="space-y-0.5 border-l border-slate-200/80 pl-2">
            <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
              {language === 'nl' ? 'Opgave' : 'Scope'}
            </span>
            <span className="block text-[11px] font-semibold text-slate-900 truncate" title={project.opgave}>
              {project.opgave}
            </span>
          </div>

          <div className="space-y-0.5 border-l border-slate-200/80 pl-2">
            <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
              {language === 'nl' ? 'Regie / Rol' : 'Role'}
            </span>
            <span className="block text-[11px] font-semibold text-slate-900 truncate" title={project.rol}>
              {project.rol}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom CTA Row */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
        {isGridMode && onFocusOnMap && (
          <button
            onClick={() => onFocusOnMap(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 py-1.5 px-3 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-vovon-600" />
            <span>{language === 'nl' ? 'Toon op kaart' : 'View on map'}</span>
          </button>
        )}

        <a
          href={project.streetViewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-vovon-600 group py-1.5 ml-auto transition-colors"
        >
          <Compass className="w-3.5 h-3.5 text-vovon-600 group-hover:rotate-45 transition-transform duration-300" />
          <span>{language === 'nl' ? 'Bekijk project' : 'View project'}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-vovon-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </div>
    </div>
  );
};

export default ProjectPopupCard;
