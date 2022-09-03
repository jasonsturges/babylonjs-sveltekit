<main>
	<slot />
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

  :global(canvas) {
    width: 100vw;
    height: 100vh;
    display: block;
  }
</style>
