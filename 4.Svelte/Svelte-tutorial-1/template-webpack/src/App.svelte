<script>
  // props 데이터
  export let name;
  // state 데이터
  let age = 12;

  function onClick() {
    age = 24;
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hey {name}!</h1>
  <h3>Age {age}</h3>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <div class="flex-col">
    <!-- event binding -->
    <button on:click={onClick}> Change Age</button>
    <!-- 단방향 바인딩 -->
    <input type="text" value={age} />
    <!-- 양방향 바인딩 -->
    <input type="text" bind:value={age} />
  </div>
</main>
