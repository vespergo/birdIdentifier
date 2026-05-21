<script>
  import { birds } from '$lib/data/birds.js';
  import BirdCard from '$lib/components/BirdCard.svelte';
  import FilterPanel from '$lib/components/FilterPanel.svelte';

  let filters = $state({ search: '', size: '', primaryColor: '', habitat: '', food: '', season: '' });

  let filtered = $derived(birds.filter(b => {
    if (filters.search) {
      const q = filters.search.toLowerCase();
      if (!b.name.toLowerCase().includes(q) && !b.scientific.toLowerCase().includes(q)) return false;
    }
    if (filters.size && b.size !== filters.size) return false;
    if (filters.primaryColor && b.primaryColor !== filters.primaryColor) return false;
    if (filters.habitat && !b.habitats.includes(filters.habitat)) return false;
    if (filters.food && !b.food.includes(filters.food)) return false;
    if (filters.season && b.season !== filters.season) return false;
    return true;
  }));
</script>

<div class="container">
  <h1>All Birds</h1>
  <p class="subtitle">{birds.length} species found in Western North Carolina</p>

  <FilterPanel {filters} />

  <p class="result-count">{filtered.length} bird{filtered.length !== 1 ? 's' : ''} match{filtered.length === 1 ? 'es' : ''} your filters</p>

  <div class="grid grid-3">
    {#each filtered as bird}
      <BirdCard {bird} />
    {/each}
  </div>

  {#if filtered.length === 0}
    <p class="no-results">No birds match your filters. Try adjusting or clearing them.</p>
  {/if}
</div>

<style>
  h1 { margin-bottom: 0.25rem; }
  .subtitle { color: var(--gray-500); margin-bottom: 1.5rem; }
  .result-count { font-size: 0.85rem; color: var(--gray-500); margin-bottom: 1rem; }
  .no-results { text-align: center; padding: 3rem; color: var(--gray-500); }
</style>
