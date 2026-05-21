<script>
  import { birds } from '$lib/data/birds.js';
  import { shuffle } from '$lib/utils.js';

  let questions = $state(generateQuestions());
  let currentIndex = $state(0);
  let score = $state(0);
  let answered = $state(false);
  let selected = $state(null);
  let finished = $state(false);

  function generateQuestions() {
    const allBirds = shuffle([...birds]).slice(0, 10);
    return allBirds.map(bird => {
      const type = Math.random() < 0.5 ? 'name-to-trait' : 'trait-to-name';
      const options = shuffle([
        bird.name,
        ...shuffle(birds.filter(b => b.id !== bird.id)).slice(0, 3).map(b => b.name)
      ]);
      return { bird, type, options };
    });
  }

  function startQuiz() {
    questions = generateQuestions();
    currentIndex = 0;
    score = 0;
    answered = false;
    selected = null;
    finished = false;
  }

  let current = $derived(questions[currentIndex]);

  function answer(name) {
    if (answered) return;
    selected = name;
    answered = true;
    if (name === current.bird.name) score++;
  }

  function next() {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      answered = false;
      selected = null;
    } else {
      finished = true;
    }
  }
</script>

<div class="container quiz-page">
  <h1>Bird Quiz</h1>

  {#if !finished}
    <div class="quiz-progress">Question {currentIndex + 1} of {questions.length}</div>

    <div class="quiz-card card">
      {#if current}
        {#if current.type === 'name-to-trait'}
          <div class="quiz-image">
            <img src={current.bird.image} alt="{current.bird.name}" />
          </div>
          <h2>Which bird is this?</h2>
        {:else}
          <h2>Which bird matches these traits?</h2>
          <div class="traits-list">
            <p><strong>Size:</strong> {current.bird.size} ({current.bird.sizeInches})</p>
            <p><strong>Color:</strong> {current.bird.primaryColor}</p>
            <p><strong>Habitat:</strong> {current.bird.habitats.join(', ')}</p>
            <p><strong>Key marks:</strong> {current.bird.keyMarks.slice(0, 2).join('; ')}</p>
          </div>
        {/if}

        <div class="options">
          {#each current.options as name}
            <button
              class="option-btn"
              class:correct={answered && name === current.bird.name}
              class:wrong={answered && name === selected && name !== current.bird.name}
              disabled={answered}
              onclick={() => answer(name)}
            >
              {name}
            </button>
          {/each}
        </div>

        {#if answered}
          <div class="feedback">
            {#if selected === current.bird.name}
              <p>Correct! {current.bird.name}: {current.bird.funFact}</p>
            {:else}
              <p>Incorrect. That was <strong>{current.bird.name}</strong>.</p>
              <p class="fun-fact">{current.bird.funFact}</p>
            {/if}
            <button class="btn btn-primary" onclick={next}>
              {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          </div>
        {/if}
      {/if}
    </div>
  {:else}
    <div class="results card">
      <h2>Quiz Complete!</h2>
      <p class="score">{score} / {questions.length} correct</p>
      <p class="score-label">
        {#if score === questions.length}
          Perfect score! You're a WNC bird expert!
        {:else if score >= questions.length * 0.7}
          Great job! You know your birds well.
        {:else if score >= questions.length * 0.5}
          Not bad! Keep studying.
        {:else}
          Keep practicing! Try the ID Key and bird pages to learn more.
        {/if}
      </p>
      <button class="btn btn-primary" onclick={startQuiz}>Try Again</button>
    </div>
  {/if}
</div>

<style>
  .quiz-page { max-width: 650px; margin: 0 auto; }
  h1 { text-align: center; margin-bottom: 0.5rem; }
  .quiz-progress { text-align: center; color: var(--gray-500); font-size: 0.9rem; margin-bottom: 1.5rem; }

  .quiz-card { padding: 2rem; text-align: center; }
  .quiz-image { background: var(--green-bg); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 1.25rem; display: inline-block; }
  .quiz-image img { max-height: 100px; max-width: 100px; }
  .quiz-card h2 { margin-bottom: 1rem; font-size: 1.2rem; }

  .traits-list { text-align: left; max-width: 400px; margin: 0 auto 1.25rem; font-size: 0.95rem; }
  .traits-list p { margin-bottom: 0.4rem; }

  .options { display: flex; flex-direction: column; gap: 0.5rem; max-width: 400px; margin: 0 auto; }
  .option-btn { padding: 0.65rem 1rem; border: 2px solid var(--gray-200); border-radius: var(--radius); background: #fff; font-family: inherit; font-size: 0.95rem; cursor: pointer; transition: all 0.15s; }
  .option-btn:hover:not(:disabled) { border-color: var(--green); color: var(--green); }
  .option-btn.correct { border-color: var(--green); background: var(--green-bg); color: var(--green); }
  .option-btn.wrong { border-color: var(--red); background: #fef2f2; color: var(--red); }
  .option-btn:disabled { cursor: default; opacity: 0.7; }

  .feedback { margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--gray-200); }
  .feedback p { margin-bottom: 0.5rem; font-size: 0.95rem; }
  .fun-fact { font-style: italic; color: var(--gray-500); }

  .results { padding: 3rem 2rem; text-align: center; }
  .score { font-size: 2.5rem; font-weight: 700; color: var(--green); margin: 1rem 0; }
  .score-label { color: var(--gray-600); margin-bottom: 1.5rem; }
</style>
