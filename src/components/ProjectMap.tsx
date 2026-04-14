import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
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
        {projectsData.projects.map((project) => (
          <Marker 
            key={project.id} 
            position={[project.latitude, project.longitude]}
            icon={customIcon}
          >
            <Popup>
              <div className="p-1">
                <h3 className="font-bold text-slate-900 mb-1">{project.name}</h3>
                <p className="text-sm text-slate-600 mb-2">{project.project_context}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ProjectMap;
