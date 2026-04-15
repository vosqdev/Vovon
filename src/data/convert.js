import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, 'projects.csv');
const jsonPath = path.join(__dirname, 'projects.json');

const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Simple CSV parser that handles quotes
function parseCSV(text) {
  const result = [];
  let row = [];
  let inQuotes = false;
  let currentValue = '';
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];
    
    if (char === '"' && inQuotes && nextChar === '"') {
      currentValue += '"';
      i++; // Skip next quote
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ';' && !inQuotes) {
      row.push(currentValue);
      currentValue = '';
    } else if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') i++; // Skip \n
      row.push(currentValue);
      result.push(row);
      row = [];
      currentValue = '';
    } else {
      currentValue += char;
    }
  }
  
  if (currentValue || row.length > 0) {
    row.push(currentValue);
    result.push(row);
  }
  
  return result;
}

const rows = parseCSV(csvContent);
const headers = rows[0];
const data = rows.slice(1).filter(row => row.length > 1);

const projects = data.map(row => {
  const project = {};
  headers.forEach((header, index) => {
    project[header] = row[index];
  });
  
  return {
    id: parseInt(project.id, 10),
    name: project.name,
    latitude: parseFloat(project.latitude),
    longitude: parseFloat(project.longitude),
    project_context: project.project_context,
    planperiode: project.planperiode,
    programma_items: project.programma_items ? project.programma_items.split(' | ').filter(Boolean) : [],
    ambitie_items: project.ambitie_items ? project.ambitie_items.split(' | ').filter(Boolean) : [],
    partners_items: project.partners_items ? project.partners_items.split(' | ').filter(Boolean) : []
  };
});

const output = {
  dataset_name: "VOVON Projects",
  source_file: "Projects VOVON.kml",
  coordinate_system: "WGS84 (latitude/longitude)",
  project_count: projects.length,
  projects: projects
};

fs.writeFileSync(jsonPath, JSON.stringify(output, null, 2));
console.log('Successfully converted CSV to JSON');
