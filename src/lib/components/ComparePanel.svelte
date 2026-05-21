<script>
  import { birds } from '$lib/data/birds.js';
  import { asset } from '$lib/utils.js';

  let { bird1, bird2 } = $props();

  function format(val) {
    return val ? val : '—';
  }

  function listTags(items) {
    if (!items || items.length === 0) return '—';
    return items.map(i => `<span class="tag">${i}</span>`).join(' ');
  }

  $effect(() => {});
</script>

{#if bird1 && bird2}
  <div class="compare-table card">
    <table>
      <thead>
        <tr>
          <th>Trait</th>
          <th class="bird-col">
            <div class="compare-bird-header">
              <img src={asset(bird1.image)} alt="{bird1.name}" class="compare-silhouette" />
              <strong>{bird1.name}</strong>
            </div>
          </th>
          <th class="bird-col">
            <div class="compare-bird-header">
              <img src={asset(bird2.image)} alt="{bird2.name}" class="compare-silhouette" />
              <strong>{bird2.name}</strong>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Size</td>
          <td>{bird1.size} ({bird1.sizeInches})</td>
          <td>{bird2.size} ({bird2.sizeInches})</td>
        </tr>
        <tr>
          <td>Primary Color</td>
          <td>{bird1.primaryColor}</td>
          <td>{bird2.primaryColor}</td>
        </tr>
        <tr>
          <td>Colors</td>
          <td>{@html listTags(bird1.colors)}</td>
          <td>{@html listTags(bird2.colors)}</td>
        </tr>
        <tr>
          <td>Habitat</td>
          <td>{@html listTags(bird1.habitats)}</td>
          <td>{@html listTags(bird2.habitats)}</td>
        </tr>
        <tr>
          <td>Food</td>
          <td>{@html listTags(bird1.food)}</td>
          <td>{@html listTags(bird2.food)}</td>
        </tr>
        <tr>
          <td>Season</td>
          <td>{bird1.season}</td>
          <td>{bird2.season}</td>
        </tr>
        <tr>
          <td>Song</td>
          <td>{bird1.song}</td>
          <td>{bird2.song}</td>
        </tr>
        <tr>
          <td>Key Marks</td>
          <td><ul class="marks-list">{#each bird1.keyMarks as m}<li>{m}</li>{/each}</ul></td>
          <td><ul class="marks-list">{#each bird2.keyMarks as m}<li>{m}</li>{/each}</ul></td>
        </tr>
      </tbody>
    </table>
  </div>
{/if}

<style>
  .compare-table { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
  th, td { padding: 0.75rem; text-align: left; border-bottom: 1px solid var(--gray-200); vertical-align: top; }
  th { background: var(--gray-50); font-weight: 600; }
  .bird-col { min-width: 200px; }
  .compare-bird-header { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; text-align: center; }
  .compare-silhouette { max-height: 60px; max-width: 60px; }
  .marks-list { margin: 0; padding-left: 1.25rem; }
  .marks-list li { margin-bottom: 0.25rem; }
  :global(.compare-table .tag) { margin: 0.1rem; }
</style>
