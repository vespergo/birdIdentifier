<script>
  import { base } from '$app/paths';
  import { asset } from '$lib/utils.js';
  let { bird, showLink = true } = $props();
</script>

<div class="card bird-card">
  <div class="card-image">
    <img src={asset(bird.image)} alt="{bird.name}" />
  </div>
  <div class="card-body">
    <h3>{bird.name}</h3>
    <p class="scientific"><em>{bird.scientific}</em></p>
    <div class="tags">
      <span class="tag">{bird.size}</span>
      <span class="tag">{bird.primaryColor}</span>
      <span class="tag">{bird.season}</span>
    </div>
    <div class="habitats">
      {#each bird.habitats as h}
        <span class="tag habitat">{h}</span>
      {/each}
    </div>
    {#if showLink}
      <a href="{base}/birds/{bird.id}" class="btn btn-sm" style="margin-top:0.75rem">View Details</a>
    {/if}
  </div>
</div>

<style>
  .bird-card { display: flex; flex-direction: column; }
  .card-image { background: var(--green-bg); display: flex; align-items: center; justify-content: center; padding: 1.5rem; height: 160px; }
  .card-image img { max-height: 120px; max-width: 120px; object-fit: contain; }
  .card-body { padding: 1rem; flex: 1; display: flex; flex-direction: column; gap: 0.5rem; }
  .card-body h3 { font-size: 1rem; }
  .scientific { font-size: 0.8rem; color: var(--gray-500); }
  .tags { display: flex; flex-wrap: wrap; gap: 0.3rem; }
  .habitats { display: flex; flex-wrap: wrap; gap: 0.3rem; }
  .habitat { background: var(--green-bg); color: var(--green); }
</style>
