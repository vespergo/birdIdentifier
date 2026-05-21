<script>
  import '../app.css';
  let { children } = $props();
</script>

<nav class="nav">
  <div class="container nav-inner">
    <a href="/" class="logo">Bird Identifier</a>
    <div class="nav-links">
      <a href="/birds">All Birds</a>
      <a href="/compare">Compare</a>
      <a href="/id-key">ID Key</a>
      <a href="/quiz">Quiz</a>
    </div>
  </div>
</nav>

<main>
  {@render children()}
</main>

<footer class="footer">
  <div class="container">
    <p>Bird Identifier &mdash; Western North Carolina Birds</p>
  </div>
</footer>

<style>
  .nav { background: var(--green); color: #fff; position: sticky; top: 0; z-index: 100; }
  .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 3.5rem; }
  .logo { font-weight: 700; font-size: 1.1rem; color: #fff; letter-spacing: -0.02em; }
  .logo:hover { text-decoration: none; }
  .nav-links { display: flex; gap: 1.5rem; }
  .nav-links a { color: rgba(255,255,255,0.85); font-size: 0.9rem; font-weight: 500; }
  .nav-links a:hover { color: #fff; text-decoration: none; }

  main { min-height: calc(100vh - 7.5rem); padding: 2rem 0; }

  .footer { background: var(--gray-50); border-top: 1px solid var(--gray-200); padding: 1.5rem 0; text-align: center; font-size: 0.85rem; color: var(--gray-500); }
</style>
