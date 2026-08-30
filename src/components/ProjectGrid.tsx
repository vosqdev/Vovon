import React from 'react';
import { motion } from 'motion/react';
import { FormattedProject } from '../utils/projectHelpers';
import ProjectPopupCard from './ProjectPopupCard';

interface ProjectGridProps {
  projects: FormattedProject[];
  language: 'nl' | 'en';
  onFocusOnMap: (project: FormattedProject) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, language, onFocusOnMap }) => {
  if (projects.length === 0) {
    return (
      <div className="w-full py-16 text-center bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-slate-500 text-sm font-medium">
          {language === 'nl'
            ? 'Geen projecten gevonden binnen deze selectie.'
            : 'No projects found matching this selection.'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
          className="h-full"
        >
          <ProjectPopupCard
            project={project}
            language={language}
            isGridMode={true}
            onFocusOnMap={onFocusOnMap}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;
