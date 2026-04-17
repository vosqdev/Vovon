import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin } from 'lucide-react';
import projectsData from '../data/projects.json';

// Custom marker icon in brand color (vovon-600: #99336f)
const customIcon = L.divIcon({
  className: 'custom-marker',
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#99336f" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 32px; height: 32px; filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.3));"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3" fill="white"></circle></svg>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const ProjectMap = () => {
  // Center of the Netherlands
  const center: [number, number] = [52.3702, 5.9251];

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-slate-200 mt-16 relative z-0">
      <MapContainer center={center} zoom={8} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {(projectsData.projects as any[]).map((project) => (
          <Marker 
            key={project.id} 
            position={[project.latitude, project.longitude]}
            icon={customIcon}
          >
            <Popup className="vovon-popup">
              <div className="min-w-[240px] max-w-[320px] max-h-[320px] overflow-y-auto pr-2">
                <div className="flex items-start gap-2 mb-3 sticky top-0 bg-white z-10 pt-1 pb-2 border-b border-slate-100">
                  <MapPin className="w-5 h-5 text-vovon-600 shrink-0 mt-0.5" />
                  <h3 className="font-bold text-slate-900 text-base m-0 leading-tight">{project.name}</h3>
                </div>
                <div className="text-sm text-slate-600 leading-relaxed">
                  
                  {project.project_context && (
                    <div className="mb-3">
                      <span className="font-semibold text-vovon-700 block mb-0.5 uppercase tracking-wider text-[10px]">projectinfo</span>
                      <p className="text-slate-700">{project.project_context}</p>
                    </div>
                  )}
                  
                  {project.planperiode && project.planperiode !== 'null' && (
                    <div className="mb-3">
                      <span className="font-semibold text-vovon-700 block mb-0.5 uppercase tracking-wider text-[10px]">planperiode</span>
                      <p className="text-slate-700">{project.planperiode}</p>
                    </div>
                  )}
                  
                  {project.programma_items && project.programma_items.length > 0 && (
                    <div className="mb-3">
                      <span className="font-semibold text-vovon-700 block mb-0.5 uppercase tracking-wider text-[10px]">programma</span>
                      <ul className="list-disc pl-4 mt-0.5 mb-0 text-slate-700 space-y-0.5">
                        {project.programma_items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {project.ambitie_items && project.ambitie_items.length > 0 && (
                    <div className="mb-3">
                      <span className="font-semibold text-vovon-700 block mb-0.5 uppercase tracking-wider text-[10px]">ambitie</span>
                      <ul className="list-disc pl-4 mt-0.5 mb-0 text-slate-700 space-y-0.5">
                        {project.ambitie_items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {project.partners_items && project.partners_items.length > 0 && (
                    <div className="mb-3">
                      <span className="font-semibold text-vovon-700 block mb-0.5 uppercase tracking-wider text-[10px]">partners</span>
                      <ul className="list-disc pl-4 mt-0.5 mb-0 text-slate-700 space-y-0.5">
                        {project.partners_items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ProjectMap;
