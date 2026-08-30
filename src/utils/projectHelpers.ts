export interface ProjectData {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  project_context?: string;
  planperiode?: string;
  programma_items?: string[];
  ambitie_items?: string[];
  partners_items?: string[];
}

export type CategoryFilterKey = 'all' | 'wonen' | 'commercieel' | 'maatschappelijk' | 'energie' | 'gebied';
export type ProjectStatusFilterKey = 'all' | 'ongoing' | 'completed';

export interface FormattedProject {
  id: number;
  raw: ProjectData;
  name: string;
  latitude: number;
  longitude: number;
  categoryKey: CategoryFilterKey;
  tags: string[];
  iconType: 'home' | 'commercial' | 'social' | 'energy' | 'area';
  summary: string;
  fase: string;
  opgave: string;
  rol: string;
  isCompleted: boolean;
  streetViewUrl: string;
}

export function formatProject(p: ProjectData, language: 'nl' | 'en' = 'nl'): FormattedProject {
  const nameLower = (p.name || '').toLowerCase();
  const contextLower = (p.project_context || '').toLowerCase();
  const allText = [
    p.name || '',
    p.project_context || '',
    ...(p.programma_items || []),
    ...(p.ambitie_items || []),
    ...(p.partners_items || []),
  ]
    .join(' ')
    .toLowerCase();

  // Determine category & tags
  let categoryKey: CategoryFilterKey = 'wonen';
  let iconType: 'home' | 'commercial' | 'social' | 'energy' | 'area' = 'home';
  const tags: string[] = [];

  const isEnergy =
    !nameLower.includes('dijkjes') &&
    (nameLower.includes('molenbeek') ||
      nameLower.includes('hoorn') ||
      contextLower.includes('dronten') ||
      contextLower.includes('zeewolde') ||
      nameLower.includes('bioscience') ||
      nameLower.includes('ossenkampweg') ||
      nameLower.includes('zandlaan') ||
      nameLower.includes('laadplein') ||
      allText.includes('bess') ||
      allText.includes('netcongestie') ||
      (allText.includes('energie') && !allText.includes('woningbouw')) ||
      (allText.includes('gasloos') && !allText.includes('woningbouw')));

  const isSocial =
    !nameLower.includes('harde') &&
    !nameLower.includes('trefpunt') &&
    (allText.includes('zorg') ||
      allText.includes('gezondheid') ||
      allText.includes('thomashuis') ||
      allText.includes('herbergier') ||
      allText.includes('ijsvogel') ||
      allText.includes('mfa') ||
      allText.includes('fa-hoed'));

  const isCommercial =
    !nameLower.includes('sytzemalaan') &&
    (allText.includes('winkel') ||
      allText.includes('supermarkt') ||
      allText.includes('retail') ||
      allText.includes('commercieel') ||
      allText.includes('bog') ||
      allText.includes('bedrijfsruimte') ||
      allText.includes('wellness') ||
      allText.includes('welness') ||
      nameLower.includes('chez') ||
      nameLower.includes('marknesse'));

  const isArea =
    allText.includes('gebiedsontwikkeling') ||
    allText.includes('herstructurering') ||
    allText.includes('gebiedstransformatie') ||
    allText.includes('uitleg') ||
    allText.includes('mixed use');

  if (isEnergy) {
    categoryKey = 'energie';
    iconType = 'energy';
    tags.push(language === 'nl' ? 'Energie & NetZero' : 'Energy & NetZero');
    if (allText.includes('bess') || allText.includes('laadplein')) {
      tags.push(language === 'nl' ? 'BESS Opslag' : 'BESS Storage');
    } else if (allText.includes('gebied') || allText.includes('wijk')) {
      tags.push(language === 'nl' ? 'Gebiedsenergie' : 'District Energy');
    } else {
      tags.push(language === 'nl' ? 'Duurzaamheid' : 'Sustainability');
    }
  } else if (isSocial) {
    categoryKey = 'maatschappelijk';
    iconType = 'social';
    tags.push(language === 'nl' ? 'Maatschappelijk' : 'Social & Care');
    if (allText.includes('zorg') || allText.includes('thomashuis') || allText.includes('herbergier')) {
      tags.push(language === 'nl' ? 'Zorgvastgoed' : 'Healthcare');
    } else if (allText.includes('gezondheid') || allText.includes('fa-hoed')) {
      tags.push(language === 'nl' ? 'Gezondheidscentrum' : 'Health Center');
    }
  } else if (isCommercial) {
    categoryKey = 'commercieel';
    iconType = 'commercial';
    if (allText.includes('wellness') || allText.includes('welness') || nameLower.includes('chez') || nameLower.includes('marknesse')) {
      tags.push(language === 'nl' ? 'Wellness & Leisure' : 'Wellness & Leisure');
      tags.push(language === 'nl' ? 'Transformatie' : 'Transformation');
    } else {
      tags.push(language === 'nl' ? 'Commercieel' : 'Commercial');
      if (allText.includes('supermarkt') || allText.includes('winkel')) {
        tags.push(language === 'nl' ? 'Retail' : 'Retail');
      } else if (allText.includes('bedrijf')) {
        tags.push(language === 'nl' ? 'Bedrijfshuisvesting' : 'Business');
      }
    }
  } else if (isArea) {
    categoryKey = 'gebied';
    iconType = 'area';
    tags.push(language === 'nl' ? 'Gebiedsontwikkeling' : 'Area Development');
    tags.push(language === 'nl' ? 'Woningbouw' : 'Housing');
  } else {
    categoryKey = 'wonen';
    iconType = 'home';
    tags.push(language === 'nl' ? 'Woningbouw' : 'Housing');
    if (allText.includes('appartement')) {
      tags.push(language === 'nl' ? 'Appartementen' : 'Apartments');
    } else if (allText.includes('herstructurering')) {
      tags.push(language === 'nl' ? 'Transformatie' : 'Transformation');
    }
  }

  // Ensure max 2 tags
  const cleanTags = tags.slice(0, 2);

  // Concise editorial summary
  let summary = '';
  if (p.project_context) {
    // Strip village prefix if needed e.g. "t Harde – "
    summary = p.project_context.replace(/^[^–-]+[–-]\s*/, '').trim();
  }
  if (!summary && p.ambitie_items && p.ambitie_items.length > 0) {
    summary = p.ambitie_items[0];
  }
  if (!summary) {
    summary = language === 'nl' ? 'Ruimtelijke opgave en procesregie door VOVON.' : 'Spatial project and process direction by VOVON.';
  }
  // Capitalize first letter
  summary = summary.charAt(0).toUpperCase() + summary.slice(1);
  if (!summary.endsWith('.')) summary += '.';

  // 3 Key Metrics
  // 1. Fase / Periode
  const hasPlan = p.planperiode && p.planperiode !== 'null' && p.planperiode.trim() !== '';
  const fase = hasPlan ? p.planperiode! : language === 'nl' ? 'Initiatief & Regie' : 'Initiative & Direction';

  // 2. Opgave / Programma
  let opgave = '';
  if (p.programma_items && p.programma_items.length > 0) {
    const rawProg = p.programma_items
      .map(item => item.replace(/^(woningbouw|voorzieningen|\(openbaar\)gebied|zorg vastgoed):\s*/i, '').trim())
      .filter(item => item.length > 0)
      .join(' · ');
    opgave = rawProg;
  }
  if (!opgave && p.ambitie_items && p.ambitie_items.length > 0) {
    opgave = p.ambitie_items[0];
  }
  if (!opgave) {
    opgave = language === 'nl' ? 'Gebiedsontwikkeling' : 'Area development';
  }

  // 3. Rol & Partners
  let rol = '';
  if (p.partners_items && p.partners_items.length > 0) {
    const rawPartners = p.partners_items
      .map(item => item.replace(/^Opdrachtgever\s*/i, '').replace(/^marktpartij(en)?\s*/i, '').trim())
      .filter(item => item.length > 0)
      .join(' · ');
    rol = rawPartners;
  }
  if (!rol) {
    rol = language === 'nl' ? 'Projectregie VOVON' : 'Project Direction VOVON';
  }

  const isCompleted = Boolean(hasPlan);
  const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${p.latitude},${p.longitude}`;

  return {
    id: p.id,
    raw: p,
    name: p.name,
    latitude: p.latitude,
    longitude: p.longitude,
    categoryKey,
    tags: cleanTags,
    iconType,
    summary,
    fase,
    opgave,
    rol,
    isCompleted,
    streetViewUrl,
  };
}
