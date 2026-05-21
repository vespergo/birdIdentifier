<script>
  import IDKey from '$lib/components/IDKey.svelte';
</script>

<div class="container">
  <h1>Identification Key</h1>
  <p class="subtitle">Answer a few questions to narrow down which bird you saw.</p>

  <IDKey />
</div>

<style>
  .subtitle { color: var(--gray-500); margin-bottom: 2rem; text-align: center; }
  h1 { text-align: center; }
</style>
