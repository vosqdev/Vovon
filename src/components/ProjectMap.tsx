import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Layers, Globe, Compass, LayoutGrid, Map as MapIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import projectsData from '../data/projects.json';
import { FormattedProject, formatProject, ProjectData, ProjectStatusFilterKey } from '../utils/projectHelpers';
import ProjectPopupCard from './ProjectPopupCard';
import ProjectGrid from './ProjectGrid';

interface ProjectMapProps {
  selectedProject?: any;
  language: 'nl' | 'en';
}

// Minimalist ongoing marker: Slate-900 with crisp white border and VOVON magenta center dot
const ongoingMarkerIcon = L.divIcon({
  className: 'vovon-custom-marker-icon',
  html: `
    <div class="relative flex items-center justify-center cursor-pointer group" style="width: 24px; height: 24px;">
      <div class="w-6 h-6 rounded-full bg-slate-900 border-2 border-white shadow-md flex items-center justify-center transition-all duration-200 group-hover:scale-125 group-hover:shadow-xl">
        <span class="w-2 h-2 rounded-full bg-[#99336f]"></span>
      </div>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -14],
});

// Minimalist completed marker: White disc with VOVON magenta border and dark slate center dot
const completedMarkerIcon = L.divIcon({
  className: 'vovon-custom-marker-icon',
  html: `
    <div class="relative flex items-center justify-center cursor-pointer group" style="width: 24px; height: 24px;">
      <div class="w-6 h-6 rounded-full bg-white border-2 border-[#99336f] shadow-md flex items-center justify-center transition-all duration-200 group-hover:scale-125 group-hover:shadow-xl">
        <span class="w-2 h-2 rounded-full bg-slate-900"></span>
      </div>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -14],
});

// Minimalist Cluster marker: Sleek slate capsule with number and subtle magenta ring
const createClusterIcon = (count: number) =>
  L.divIcon({
    className: 'vovon-custom-marker-icon',
    html: `
      <div class="relative flex items-center justify-center cursor-pointer group" style="width: 34px; height: 34px;">
        <div class="w-[34px] h-[34px] rounded-full bg-slate-900 text-white font-bold text-xs border-2 border-white shadow-lg flex items-center justify-center ring-2 ring-[#99336f]/40 transition-all duration-200 group-hover:scale-115 group-hover:ring-[#99336f]/90">
          ${count}
        </div>
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -18],
  });

interface ClusterItem {
  id: string;
  isCluster: boolean;
  center: [number, number];
  projects: FormattedProject[];
}

// Map Controller for smooth fly-to on selectedProject
const MapController = ({
  selectedProject,
  markerRefs,
}: {
  selectedProject: any;
  markerRefs: React.MutableRefObject<{ [key: string]: any }>;
}) => {
  const map = useMap();

  useEffect(() => {
    if (selectedProject) {
      map.flyTo([selectedProject.latitude, selectedProject.longitude], 14, {
        animate: true,
        duration: 1.2,
      });

      const timer = setTimeout(() => {
        const marker = markerRefs.current[selectedProject.id];
        if (marker) {
          marker.openPopup();
        }
      }, 900);

      return () => clearTimeout(timer);
    }
  }, [selectedProject, map, markerRefs]);

  return null;
};

// Dynamic Cluster Manager inside Leaflet context
const ClusteredMarkers = ({
  projects,
  language,
  markerRefs,
}: {
  projects: FormattedProject[];
  language: 'nl' | 'en';
  markerRefs: React.MutableRefObject<{ [key: string]: any }>;
}) => {
  const map = useMap();
  const [zoom, setZoom] = useState(map.getZoom());
  const [activeClusterIndex, setActiveClusterIndex] = useState<{ [clusterId: string]: number }>({});

  useMapEvents({
    zoomend: () => {
      setZoom(map.getZoom());
    },
    moveend: () => {
      setZoom(map.getZoom());
    },
  });

  // Calculate clustering based on screen pixel distance at current zoom
  const clusterItems = useMemo<ClusterItem[]>(() => {
    if (projects.length === 0) return [];
    if (zoom >= 13) {
      // Show all as individual points at high zoom
      return projects.map((p) => ({
        id: `single-${p.id}`,
        isCluster: false,
        center: [p.latitude, p.longitude],
        projects: [p],
      }));
    }

    const clusters: ClusterItem[] = [];
    const threshold = 40; // pixel threshold for grouping

    projects.forEach((p) => {
      const pPoint = map.latLngToLayerPoint([p.latitude, p.longitude]);
      let added = false;

      for (const cluster of clusters) {
        const clusterPoint = map.latLngToLayerPoint(cluster.center);
        const dist = Math.hypot(pPoint.x - clusterPoint.x, pPoint.y - clusterPoint.y);

        if (dist < threshold) {
          cluster.projects.push(p);
          cluster.isCluster = true;
          // Recalculate average center
          const totalLat = cluster.projects.reduce((acc, curr) => acc + curr.latitude, 0);
          const totalLng = cluster.projects.reduce((acc, curr) => acc + curr.longitude, 0);
          cluster.center = [totalLat / cluster.projects.length, totalLng / cluster.projects.length];
          added = true;
          break;
        }
      }

      if (!added) {
        clusters.push({
          id: `cluster-${p.id}`,
          isCluster: false,
          center: [p.latitude, p.longitude],
          projects: [p],
        });
      }
    });

    return clusters;
  }, [projects, zoom, map]);

  return (
    <>
      {clusterItems.map((item) => {
        if (item.isCluster && item.projects.length > 1) {
          const currentIndex = activeClusterIndex[item.id] || 0;
          const currentProject = item.projects[currentIndex] || item.projects[0];

          return (
            <Marker
              key={item.id}
              position={item.center}
              icon={createClusterIcon(item.projects.length)}
              eventHandlers={{
                click: () => {
                  if (zoom < 12) {
                    map.flyTo(item.center, Math.min(zoom + 3, 14), { animate: true, duration: 0.8 });
                  }
                },
              }}
            >
              <Popup className="vovon-popup">
                <div>
                  {/* Cluster Pagination Header */}
                  <div className="bg-slate-900 text-white px-4 py-2 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-300">
                      {language === 'nl' ? 'Cluster' : 'Cluster'} · {currentIndex + 1} / {item.projects.length} {language === 'nl' ? 'projecten' : 'projects'}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveClusterIndex((prev) => ({
                            ...prev,
                            [item.id]: (currentIndex - 1 + item.projects.length) % item.projects.length,
                          }));
                        }}
                        className="p-1 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title={language === 'nl' ? 'Vorig project' : 'Previous project'}
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveClusterIndex((prev) => ({
                            ...prev,
                            [item.id]: (currentIndex + 1) % item.projects.length,
                          }));
                        }}
                        className="p-1 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title={language === 'nl' ? 'Volgend project' : 'Next project'}
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <ProjectPopupCard project={currentProject} language={language} />
                </div>
              </Popup>
            </Marker>
          );
        }

        const project = item.projects[0];
        return (
          <Marker
            key={project.id}
            position={[project.latitude, project.longitude]}
            icon={project.isCompleted ? completedMarkerIcon : ongoingMarkerIcon}
            ref={(ref) => {
              if (ref) {
                markerRefs.current[project.id] = ref;
              } else {
                delete markerRefs.current[project.id];
              }
            }}
          >
            <Popup className="vovon-popup">
              <ProjectPopupCard project={project} language={language} />
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};

const ProjectMap: React.FC<ProjectMapProps> = ({ selectedProject, language }) => {
  const center: [number, number] = [52.3702, 5.9251];
  const markerRefs = useRef<{ [key: string]: any }>({});
  const [mapType, setMapType] = useState<'streets' | 'satellite'>('streets');
  const [viewMode, setViewMode] = useState<'map' | 'grid'>('map');
  const [activeFilter, setActiveFilter] = useState<ProjectStatusFilterKey>('all');

  // Switch to map view if a selected project is passed
  useEffect(() => {
    if (selectedProject) {
      setViewMode('map');
      setActiveFilter('all');
    }
  }, [selectedProject]);

  // Format all projects from data
  const allFormattedProjects = useMemo(() => {
    return (projectsData.projects as ProjectData[]).map((p) => formatProject(p, language));
  }, [language]);

  // Filter projects by status (all, ongoing, completed)
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'ongoing') {
      return allFormattedProjects.filter((p) => !p.isCompleted);
    }
    if (activeFilter === 'completed') {
      return allFormattedProjects.filter((p) => p.isCompleted);
    }
    return allFormattedProjects;
  }, [allFormattedProjects, activeFilter]);

  // Counts per filter status
  const counts = useMemo(() => {
    let ongoingCount = 0;
    let completedCount = 0;
    allFormattedProjects.forEach((p) => {
      if (p.isCompleted) {
        completedCount++;
      } else {
        ongoingCount++;
      }
    });
    return {
      all: allFormattedProjects.length,
      ongoing: ongoingCount,
      completed: completedCount,
    };
  }, [allFormattedProjects]);

  const filterOptions: {
    key: ProjectStatusFilterKey;
    label: string;
    icon?: React.ReactNode;
  }[] = [
    {
      key: 'all',
      label: language === 'nl' ? 'Alle projecten' : 'All projects',
    },
    {
      key: 'ongoing',
      label: language === 'nl' ? 'Lopend / zoekgebied' : 'Ongoing / search area',
      icon: (
        <span className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-white shadow-xs inline-flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#99336f]"></span>
        </span>
      ),
    },
    {
      key: 'completed',
      label: language === 'nl' ? 'Met planperiode' : 'With planning period',
      icon: (
        <span className="w-3.5 h-3.5 rounded-full bg-white border border-[#99336f] shadow-xs inline-flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
        </span>
      ),
    },
  ];

  const handleFocusOnMap = (project: FormattedProject) => {
    setViewMode('map');
    setActiveFilter('all');
    setTimeout(() => {
      const element = document.getElementById('vovon-map-wrapper');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      const marker = markerRefs.current[project.id];
      if (marker) {
        marker.openPopup();
      }
    }, 200);
  };

  return (
    <div className="w-full flex flex-col gap-6 mt-12">
      {/* 1. Minimalist Top Control Bar: Status Filters (Alle projecten, Lopend/zoekgebied, Met planperiode) & View Switch */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-100">
        
        {/* Status Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {filterOptions.map((opt) => {
            const count = counts[opt.key];
            const isActive = activeFilter === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => setActiveFilter(opt.key)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100/90 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {opt.icon && <span className="shrink-0">{opt.icon}</span>}
                <span>{opt.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* View Mode Switch: Kaart | Projecten */}
        <div className="flex items-center self-start sm:self-auto bg-slate-100 p-1 rounded-xl border border-slate-200/60 shadow-xs shrink-0">
          <button
            onClick={() => setViewMode('map')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
              viewMode === 'map'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <MapIcon className="w-3.5 h-3.5 text-vovon-600" />
            <span>{language === 'nl' ? 'Kaart' : 'Map'}</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5 text-vovon-600" />
            <span>{language === 'nl' ? 'Projecten' : 'Projects'}</span>
          </button>
        </div>
      </div>

      {/* 2. Content Display: Map or Grid */}
      {viewMode === 'map' ? (
        <div
          id="vovon-map-wrapper"
          className="w-full h-[580px] rounded-[24px] overflow-hidden shadow-xl border border-slate-200/80 relative z-0"
        >
          {/* Floating Map Style Switcher Widget */}
          <div className="absolute top-4 right-4 z-[1000] bg-white/95 backdrop-blur-md rounded-xl shadow-md border border-slate-200/80 p-1 flex gap-1 transition-all duration-200">
            <button
              onClick={() => setMapType('streets')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                mapType === 'streets'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title={language === 'nl' ? 'Rustige kaartweergave' : 'Calm map view'}
            >
              <Layers className="w-3.5 h-3.5 text-vovon-400" />
              <span>{language === 'nl' ? 'Kaart' : 'Map'}</span>
            </button>
            <button
              onClick={() => setMapType('satellite')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                mapType === 'satellite'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title={language === 'nl' ? 'Satellietbeeld' : 'Satellite imagery'}
            >
              <Globe className="w-3.5 h-3.5 text-vovon-400" />
              <span>{language === 'nl' ? 'Satelliet' : 'Satellite'}</span>
            </button>
          </div>

          {/* Floating Interactive Legend Widget */}
          <div className="absolute bottom-4 left-4 z-[1000] bg-white/95 backdrop-blur-md rounded-xl shadow-md border border-slate-200/80 p-1.5 flex items-center gap-1 text-xs text-slate-700 font-medium">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {language === 'nl' ? 'Alle projecten' : 'All'} ({counts.all})
            </button>

            <div className="w-px h-3.5 bg-slate-200 mx-0.5"></div>

            <button
              onClick={() => setActiveFilter(activeFilter === 'ongoing' ? 'all' : 'ongoing')}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                activeFilter === 'ongoing'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-white shadow-xs flex items-center justify-center shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#99336f]"></span>
              </div>
              <span className="text-[11px] font-semibold">
                {language === 'nl' ? 'Lopend / zoekgebied' : 'Ongoing / Search Area'}
              </span>
              <span className={`text-[10px] font-mono px-1 rounded ${activeFilter === 'ongoing' ? 'bg-slate-700 text-white' : 'text-slate-400'}`}>
                {counts.ongoing}
              </span>
            </button>

            <div className="w-px h-3.5 bg-slate-200 mx-0.5"></div>

            <button
              onClick={() => setActiveFilter(activeFilter === 'completed' ? 'all' : 'completed')}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                activeFilter === 'completed'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-white border border-[#99336f] shadow-xs flex items-center justify-center shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
              </div>
              <span className="text-[11px] font-semibold">
                {language === 'nl' ? 'Met planperiode' : 'With Planning Period'}
              </span>
              <span className={`text-[10px] font-mono px-1 rounded ${activeFilter === 'completed' ? 'bg-slate-700 text-white' : 'text-slate-400'}`}>
                {counts.completed}
              </span>
            </button>
          </div>

          <MapContainer
            center={center}
            zoom={8}
            scrollWheelZoom={false}
            className={`w-full h-full vovon-subdued-map ${mapType === 'satellite' ? 'satellite-mode' : ''}`}
          >
            {mapType === 'streets' ? (
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            ) : (
              <TileLayer
                attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
            )}
            <MapController selectedProject={selectedProject} markerRefs={markerRefs} />
            <ClusteredMarkers
              projects={filteredProjects}
              language={language}
              markerRefs={markerRefs}
            />
          </MapContainer>
        </div>
      ) : (
        <div className="w-full">
          <ProjectGrid
            projects={filteredProjects}
            language={language}
            onFocusOnMap={handleFocusOnMap}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectMap;
