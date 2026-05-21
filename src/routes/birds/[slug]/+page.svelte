<script>
  import { base } from '$app/paths';
  import { getBird } from '$lib/data/birds.js';

  let { data } = $props();

  let bird = $derived(data.bird);

  let similar = $derived(bird.similarSpecies.map(s => ({ ...s, species: getBird(s.id) })).filter(s => s.species));
</script>

<div class="container">
  <a href="{base}/birds" class="back-link">&larr; All Birds</a>

  <div class="bird-detail">
    <div class="detail-image">
      <img src={bird.image} alt={bird.name} />
    </div>

    <div class="detail-info">
      <h1>{bird.name}</h1>
      <p class="scientific"><em>{bird.scientific}</em></p>

      <div class="tags">
        <span class="tag size-tag">{bird.size} ({bird.sizeInches})</span>
        <span class="tag season-tag">{bird.season}</span>
      </div>

      <p class="description">{bird.description}</p>
    </div>
  </div>

  <div class="detail-sections">
    <div class="card detail-card">
      <h3>Identification</h3>
      <ul class="marks">
        {#each bird.keyMarks as mark}
          <li>{mark}</li>
        {/each}
      </ul>
    </div>

    <div class="card detail-card">
      <h3>Characteristics</h3>
      <table class="char-table">
        <tbody>
          <tr><td>Size</td><td>{bird.size} ({bird.sizeInches})</td></tr>
          <tr><td>Colors</td><td>{bird.colors.join(', ')}</td></tr>
          <tr><td>Primary Color</td><td>{bird.primaryColor}</td></tr>
          <tr><td>Habitat</td><td>{bird.habitats.join(', ')}</td></tr>
          <tr><td>Food</td><td>{bird.food.join(', ')}</td></tr>
          <tr><td>Season</td><td>{bird.season}</td></tr>
          <tr><td>Song</td><td><em>{bird.song}</em></td></tr>
          {#if bird.sound}
            <tr><td>Audio</td><td><audio controls preload="none"><source src={bird.sound} type="audio/mpeg" /></audio></td></tr>
          {/if}
        </tbody>
      </table>
    </div>

    <div class="card detail-card">
      <h3>Fun Fact</h3>
      <p>{bird.funFact}</p>
    </div>

    {#if similar.length > 0}
      <div class="card detail-card">
        <h3>Similar Species</h3>
        {#each similar as s}
          <div class="similar-item">
            <a href="{base}/birds/{s.id}" class="similar-link">
              <img src={s.species.image} alt={s.species.name} class="similar-img" />
              <div>
                <strong>{s.species.name}</strong>
                <p>{s.note}</p>
              </div>
            </a>
          </div>
        {/each}
      </div>
    {/if}

    <div class="card detail-card">
      <h3>Compare</h3>
      <p>Compare this bird side-by-side with another species.</p>
      <a href="{base}/compare?a={bird.id}" class="btn btn-sm">Compare Now</a>
    </div>
  </div>
</div>

<style>
  .back-link { display: inline-block; margin-bottom: 1rem; font-size: 0.9rem; color: var(--gray-500); }
  .back-link:hover { color: var(--green); }

  .bird-detail { display: flex; gap: 2rem; margin-bottom: 2rem; align-items: center; }
  .detail-image { flex-shrink: 0; background: var(--green-bg); border-radius: var(--radius); padding: 2rem; width: 220px; height: 220px; display: flex; align-items: center; justify-content: center; }
  .detail-image img { max-width: 160px; max-height: 160px; }
  .detail-info h1 { margin-bottom: 0.25rem; }
  .scientific { color: var(--gray-500); margin-bottom: 0.75rem; }
  .tags { display: flex; gap: 0.4rem; margin-bottom: 1rem; }
  .description { line-height: 1.6; color: var(--gray-700); }

  .detail-sections { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
  .detail-card { padding: 1.25rem; }
  .detail-card h3 { margin-bottom: 0.75rem; color: var(--green); font-size: 1rem; }
  .marks { margin: 0; padding-left: 1.25rem; }
  .marks li { margin-bottom: 0.4rem; font-size: 0.95rem; }

  .char-table { width: 100%; font-size: 0.9rem; }
  .char-table td { padding: 0.3rem 0; border-bottom: 1px solid var(--gray-100); }
  .char-table td:first-child { font-weight: 600; width: 120px; color: var(--gray-600); }

  .similar-item { margin-bottom: 0.75rem; }
  .similar-item:last-child { margin-bottom: 0; }
  .similar-link { display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem; border-radius: var(--radius); text-decoration: none; color: inherit; }
  .similar-link:hover { background: var(--gray-50); text-decoration: none; }
  .similar-img { max-height: 40px; max-width: 40px; }
  .similar-link p { font-size: 0.85rem; color: var(--gray-500); margin-top: 0.15rem; }

  @media (max-width: 600px) {
    .bird-detail { flex-direction: column; }
    .detail-image { width: 100%; height: auto; }
    .detail-sections { grid-template-columns: 1fr; }
  }
</style>
