import fs from 'node:fs';
import path from 'node:path';
import Papa from 'papaparse';
import type { Product, ProductRow } from '../types/product';

const DATA = path.join(process.cwd(), 'data', 'products.csv');

function toNumber(x: string) {
  const n = parseFloat(String(x || '').replace(/\$/g, '').trim());
  return Number.isFinite(n) ? n : 0;
}

let cache: { all: Product[]; byHandle: Map<string, Product> } | null = null;

export function loadProducts(): Product[] {
  if (cache) return cache.all;
  const csv = fs.readFileSync(DATA, 'utf8');
  const { data } = Papa.parse<ProductRow>(csv, { header: true, skipEmptyLines: true });
  const all = (data || []).map((r) => ({
    ...r,
    price: toNumber(r.MSRP_USD),
    weight: toNumber(r.Weight_lb),
    diameter: toNumber(r.Diameter_in),
    sizeFt: r.Size_ft ? toNumber(r.Size_ft) : undefined,
    tags: r.Tags ? r.Tags.split(',').map(t => t.trim()).filter(Boolean) : [],
  }));
  const byHandle = new Map(all.map(p => [p.Handle, p] as const));
  cache = { all, byHandle };
  return all;
}

export const getAllProducts = () => loadProducts();
export const getProductByHandle = (h: string) => (cache || (loadProducts(), cache))!.byHandle.get(h);
