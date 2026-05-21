<script>
  import { base } from '$app/paths';
  import { asset } from '$lib/utils.js';
  import { birds } from '$lib/data/birds.js';

  let step = $state(0);
  let selectedSize = $state('');
  let selectedColor = $state('');
  let selectedHabitat = $state('');

  let results = $derived(birds.filter(b => {
    if (selectedSize && b.size !== selectedSize) return false;
    if (selectedColor && !b.colors.includes(selectedColor)) return false;
    if (selectedHabitat && !b.habitats.includes(selectedHabitat)) return false;
    return true;
  }));

  const sizeOptions = [...new Set(birds.map(b => b.size))].sort((a, b) => {
    const order = ['tiny', 'small', 'small-medium', 'medium', 'medium-large', 'large', 'very large'];
    return order.indexOf(a) - order.indexOf(b);
  });

  const colorOptions = [...new Set(birds.flatMap(b => b.colors))].sort();

  const habitatOptions = [...new Set(birds.flatMap(b => b.habitats))].sort();

  function handleSize(s) {
    selectedSize = s;
    step = 1;
  }

  function handleColor(c) {
    selectedColor = c;
    step = 2;
  }

  function handleHabitat(h) {
    selectedHabitat = h;
    step = 3;
  }

  function reset() {
    step = 0;
    selectedSize = '';
    selectedColor = '';
    selectedHabitat = '';
  }
</script>

<div class="id-key">
  <div class="id-key-progress">
    <button class="step-btn" class:active={step >= 0} onclick={() => { step = 0; selectedSize = ''; selectedColor = ''; selectedHabitat = ''; }}>
      1. Size
    </button>
    <span class="step-arrow">&rarr;</span>
    <button class="step-btn" class:active={step >= 1} disabled={step < 1} onclick={() => { step = 1; selectedColor = ''; selectedHabitat = ''; }}>
      2. Color
    </button>
    <span class="step-arrow">&rarr;</span>
    <button class="step-btn" class:active={step >= 2} disabled={step < 2} onclick={() => { step = 2; selectedHabitat = ''; }}>
      3. Habitat
    </button>
    <span class="step-arrow">&rarr;</span>
    <button class="step-btn" class:active={step >= 3} disabled={step < 3}>
      4. Results
    </button>
  </div>

  <div class="id-key-content">
    {#if step === 0}
      <h3>What size is the bird?</h3>
      <div class="option-grid">
        {#each sizeOptions as s}
          <button class="option-btn" onclick={() => handleSize(s)}>
            <strong>{s}</strong>
          </button>
        {/each}
      </div>

    {:else if step === 1}
      <h3>What color is the bird?</h3>
      <p class="hint">Selected size: <strong>{selectedSize}</strong></p>
      <div class="option-grid">
        {#each colorOptions as c}
          <button class="option-btn" onclick={() => handleColor(c)}>
            <span class="color-swatch" style="background:{c}"></span>
            {c}
          </button>
        {/each}
      </div>

    {:else if step === 2}
      <h3>What habitat did you see it in?</h3>
      <p class="hint">Selected: <strong>{selectedSize}</strong>, <strong>{selectedColor}</strong></p>
      <div class="option-grid">
        {#each habitatOptions as h}
          <button class="option-btn" onclick={() => handleHabitat(h)}>
            {h}
          </button>
        {/each}
      </div>

    {:else if step === 3}
      <h3>Matching Birds ({results.length})</h3>
      <p class="hint">
        Size: <strong>{selectedSize}</strong> &middot;
        Color: <strong>{selectedColor}</strong> &middot;
        Habitat: <strong>{selectedHabitat}</strong>
      </p>

      {#if results.length === 0}
        <p class="no-results">No birds match your criteria. <button class="btn btn-sm" onclick={reset}>Try again</button></p>
      {:else}
        <div class="results-grid">
          {#each results as bird}
            <a href="{base}/birds/{bird.id}" class="result-card card">
              <img src={asset(bird.image)} alt="{bird.name}" class="result-img" />
              <div>
                <strong>{bird.name}</strong>
                <p class="result-detail">{bird.size} &middot; {bird.primaryColor}</p>
              </div>
            </a>
          {/each}
        </div>
        <div style="margin-top:1rem">
          <button class="btn" onclick={reset}>Start Over</button>
        </div>
      {/if}
    {/if}
  </div>
</div>

<style>
  .id-key { max-width: 700px; margin: 0 auto; }
  .id-key-progress { display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap; }
  .step-btn { background: none; border: 2px solid var(--gray-300); border-radius: 999px; padding: 0.4rem 1rem; font-size: 0.85rem; font-weight: 500; cursor: pointer; color: var(--gray-500); transition: all 0.15s; font-family: inherit; }
  .step-btn.active { border-color: var(--green); background: var(--green-bg); color: var(--green); }
  .step-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .step-arrow { color: var(--gray-400); font-size: 1.2rem; }
  .id-key-content { text-align: center; }
  .id-key-content h3 { margin-bottom: 1rem; font-size: 1.25rem; }
  .hint { margin-bottom: 1.25rem; color: var(--gray-500); font-size: 0.9rem; }
  .option-grid { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; margin: 1rem 0; }
  .option-btn { padding: 0.75rem 1.25rem; border: 2px solid var(--gray-200); background: #fff; border-radius: var(--radius); cursor: pointer; font-family: inherit; font-size: 0.95rem; transition: all 0.15s; display: flex; align-items: center; gap: 0.5rem; }
  .option-btn:hover { border-color: var(--green); color: var(--green); }
  .color-swatch { display: inline-block; width: 16px; height: 16px; border-radius: 50%; border: 1px solid var(--gray-300); }
  .results-grid { display: grid; gap: 0.75rem; }
  .result-card { display: flex; align-items: center; gap: 1rem; padding: 1rem; text-decoration: none; color: inherit; }
  .result-card:hover { text-decoration: none; border-color: var(--green); }
  .result-img { max-height: 50px; max-width: 50px; }
  .result-detail { font-size: 0.8rem; color: var(--gray-500); margin-top: 0.2rem; }
  .no-results { color: var(--gray-500); padding: 2rem 0; }
</style>
