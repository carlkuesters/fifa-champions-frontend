import {SeoData} from '../../../model/seo-data.model';

const SLUG_MAX_LENGTH = 50;
const SLUG_SEPARATOR = '-';

export function generateCombinedSeoId(datas: SeoData[], separator: string): string {
  return datas.map(data => generateSeoId(data)).join(separator);
}

export function generateSeoId(data: SeoData): string {
  return sluggify(data.title) + SLUG_SEPARATOR + data.id;
}

function sluggify(text: string): string {
  return text.toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .substring(0, SLUG_MAX_LENGTH)
    // Replace all non-allowed character sequences with dashes
    .replace(/[^a-z0-9]+/g, SLUG_SEPARATOR)
    // Remove eventual trailing and leading dash
    .replace(new RegExp('/^' + SLUG_SEPARATOR + '|' + SLUG_SEPARATOR + '$/g'), '');
}

export function parseCombinedSeoId(text: string, separator: string): number[] {
  return text.split(separator).map(seoId => parseSeoId(seoId));
}

export function parseSeoId(seoId: string): number {
  const lastSeparatorIndex = seoId.lastIndexOf(SLUG_SEPARATOR);
  let id: string;
  if (lastSeparatorIndex !== -1) {
    id = seoId.substring(lastSeparatorIndex + SLUG_SEPARATOR.length);
  } else {
    id = seoId;
  }
  return Number(id);
}
