import { birds } from '$lib/data/birds.js';

export function entries() {
  return birds.map(b => ({ slug: b.id }));
}

export function load({ params }) {
  const bird = birds.find(b => b.id === params.slug);
  if (!bird) throw new Error(404);
  return { bird };
}
