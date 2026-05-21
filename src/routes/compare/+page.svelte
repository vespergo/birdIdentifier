<script>
  import { birds, getBird } from '$lib/data/birds.js';
  import ComparePanel from '$lib/components/ComparePanel.svelte';

  let { data } = $props();

  let bird1Id = $state(data.a || 'carolina-chickadee');
  let bird2Id = $state(data.b || 'tufted-titmouse');

  let bird1 = $derived(getBird(bird1Id));
  let bird2 = $derived(getBird(bird2Id));

  let remaining = $derived(birds.filter(b => b.id !== bird1Id));

  function select1(id) {
    bird1Id = id;
    if (bird2Id === id) {
      bird2Id = birds.filter(b => b.id !== id)[0]?.id || '';
    }
  }

  function select2(id) {
    bird2Id = id;
    if (bird1Id === id) {
      bird1Id = birds.filter(b => b.id !== id)[0]?.id || '';
    }
  }

  function swap() {
    const t = bird1Id;
    bird1Id = bird2Id;
    bird2Id = t;
  }
</script>

<script module>
  export function load({ url }) {
    return { a: url.searchParams.get('a'), b: url.searchParams.get('b') };
  }
</script>

<div class="container">
  <h1>Compare Birds</h1>
  <p class="subtitle">Select two species to compare their characteristics side-by-side.</p>

  <div class="selectors">
    <div class="selector">
      <label for="bird1-select">Bird 1</label>
      <select id="bird1-select" bind:value={bird1Id} onchange={(e) => select1(e.target.value)}>
        {#each birds as b}
          <option value={b.id}>{b.name}</option>
        {/each}
      </select>
    </div>

    <button class="btn swap-btn" onclick={swap} title="Swap">&harr;</button>

    <div class="selector">
      <label for="bird2-select">Bird 2</label>
      <select id="bird2-select" bind:value={bird2Id} onchange={(e) => select2(e.target.value)}>
        {#each remaining as b}
          <option value={b.id}>{b.name}</option>
        {/each}
      </select>
    </div>
  </div>

  <ComparePanel bird1={getBird(bird1Id)} bird2={getBird(bird2Id)} />
</div>

<style>
  .subtitle { color: var(--gray-500); margin-bottom: 1.5rem; }

  .selectors { display: flex; align-items: flex-end; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; }
  .selector { flex: 1; min-width: 200px; }
  .selector label { display: block; font-size: 0.8rem; font-weight: 600; color: var(--gray-600); margin-bottom: 0.3rem; }
  .selector select { width: 100%; }
  .swap-btn { height: 34px; font-size: 1.2rem; }
</style>
