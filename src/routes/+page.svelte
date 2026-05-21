<script>
  import { birds } from '$lib/data/birds.js';
  import BirdCard from '$lib/components/BirdCard.svelte';

  let featured = $derived(birds.slice(0, 6));
</script>

<section class="hero">
  <div class="container">
    <h1>Western North Carolina<br />Birds</h1>
    <p class="hero-sub">Identify the birds of the Southern Blue Ridge &mdash; from chickadees to hawks, warblers to woodpeckers.</p>
    <div class="hero-links">
      <a href="/birds" class="btn btn-primary">Browse All Birds</a>
      <a href="/id-key" class="btn">Identification Key</a>
    </div>
  </div>
</section>

<section class="container">
  <div class="section-header">
    <h2>Featured Birds</h2>
    <a href="/birds" class="btn btn-sm">View All &rarr;</a>
  </div>
  <div class="grid grid-3">
    {#each featured as bird}
      <BirdCard {bird} />
    {/each}
  </div>
</section>

<section class="container quick-links">
  <div class="section-header">
    <h2>Explore</h2>
  </div>
  <div class="grid grid-3">
    <a href="/compare" class="explore-card card">
      <strong>Compare Birds</strong>
      <p>Side-by-side comparison of any two species to spot key differences.</p>
    </a>
    <a href="/id-key" class="explore-card card">
      <strong>Identification Key</strong>
      <p>Step-by-step guide to narrow down a bird by size, color, and habitat.</p>
    </a>
    <a href="/quiz" class="explore-card card">
      <strong>Bird Quiz</strong>
      <p>Test your knowledge with a bird identification quiz.</p>
    </a>
  </div>
</section>

<style>
  .hero { background: linear-gradient(135deg, var(--green-dark), var(--green)); color: #fff; padding: 4rem 0 3rem; margin-top: -2rem; margin-bottom: 2rem; }
  .hero h1 { font-size: 2.5rem; color: #fff; margin-bottom: 1rem; }
  .hero-sub { font-size: 1.1rem; opacity: 0.9; max-width: 550px; margin-bottom: 1.5rem; line-height: 1.5; }
  .hero-links { display: flex; gap: 0.75rem; }
  .hero-links .btn { background: rgba(255,255,255,0.15); color: #fff; border-color: rgba(255,255,255,0.3); }
  .hero-links .btn-primary { background: #fff; color: var(--green); border-color: #fff; }
  .hero-links .btn-primary:hover { background: var(--green-bg); }

  .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; }

  .quick-links { margin-top: 2rem; }
  .explore-card { display: block; padding: 1.5rem; text-decoration: none; color: inherit; }
  .explore-card:hover { text-decoration: none; border-color: var(--green); }
  .explore-card strong { display: block; margin-bottom: 0.4rem; color: var(--green); }
  .explore-card p { font-size: 0.9rem; color: var(--gray-600); margin: 0; }
</style>
