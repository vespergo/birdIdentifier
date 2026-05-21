<script>
  import { birdColorOptions, sizeOptions, habitatOptions, foodOptions, seasonOptions } from '$lib/data/birds.js';

  let { filters } = $props();

  function set(key, value) {
    filters[key] = value;
  }

  function clearFilters() {
    filters.size = '';
    filters.primaryColor = '';
    filters.habitat = '';
    filters.food = '';
    filters.season = '';
    filters.search = '';
  }
</script>

<div class="filter-panel">
  <div class="filter-header">
    <strong>Filters</strong>
    <button class="btn btn-sm" onclick={clearFilters}>Clear</button>
  </div>

  <div class="filter-grid">
    <div class="filter-group">
      <label for="filter-search">Search</label>
      <input id="filter-search" type="text" placeholder="Bird name..." bind:value={filters.search} />
    </div>

    <div class="filter-group">
      <label for="filter-size">Size</label>
      <select id="filter-size" bind:value={filters.size}>
        <option value="">All</option>
        {#each sizeOptions as s}
          <option value={s}>{s}</option>
        {/each}
      </select>
    </div>

    <div class="filter-group">
      <label for="filter-color">Primary Color</label>
      <select id="filter-color" bind:value={filters.primaryColor}>
        <option value="">All</option>
        {#each birdColorOptions as c}
          <option value={c}>{c}</option>
        {/each}
      </select>
    </div>

    <div class="filter-group">
      <label for="filter-habitat">Habitat</label>
      <select id="filter-habitat" bind:value={filters.habitat}>
        <option value="">All</option>
        {#each habitatOptions as h}
          <option value={h}>{h}</option>
        {/each}
      </select>
    </div>

    <div class="filter-group">
      <label for="filter-food">Food</label>
      <select id="filter-food" bind:value={filters.food}>
        <option value="">All</option>
        {#each foodOptions as f}
          <option value={f}>{f}</option>
        {/each}
      </select>
    </div>

    <div class="filter-group">
      <label for="filter-season">Season</label>
      <select id="filter-season" bind:value={filters.season}>
        <option value="">All</option>
        {#each seasonOptions as s}
          <option value={s}>{s}</option>
        {/each}
      </select>
    </div>
  </div>
</div>

<style>
  .filter-panel { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: var(--radius); padding: 1rem; margin-bottom: 1.5rem; }
  .filter-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
  .filter-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 0.75rem; }
  .filter-group { display: flex; flex-direction: column; gap: 0.25rem; }
  .filter-group label { font-size: 0.8rem; font-weight: 600; color: var(--gray-600); }
  .filter-group input, .filter-group select { width: 100%; }
</style>
