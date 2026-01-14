<script>
  import AnimatedHeroBackground from './AnimatedHeroBackground.svelte';

  let hero;
  let bgLayer, auroraLayer, midLayer, midLayer2, fogLayer, foreLayer;

  // Strength of the parallax effect for each layer
  const bgStrength = 8;
  const auroraStrength = 15;
  const midStrength = 22;
  const midStrength2 = 35;
  const fogStrength = 45;
  const foreStrength = 55;

  function handleMouseMove(event) {
    if (!hero) return;

    const { clientX, clientY } = event;
    const { offsetWidth, offsetHeight } = hero;

    // Calculate mouse position from center of the element (-0.5 to 0.5)
    const x = (clientX / offsetWidth) - 0.5;
    const y = (clientY / offsetHeight) - 0.5;

    // transformations
    if (bgLayer) bgLayer.style.transform = `translateX(${x * bgStrength}px) translateY(${y * bgStrength}px)`;
    if (auroraLayer) auroraLayer.style.transform = `translateX(${x * auroraStrength}px) translateY(${y * auroraStrength}px)`;
    if (midLayer) midLayer.style.transform = `translateX(${x * midStrength}px) translateY(${y * midStrength}px)`;
    if (midLayer2) midLayer2.style.transform = `translateX(${x * midStrength2}px) translateY(${y * midStrength2}px)`;
    if (fogLayer) fogLayer.style.transform = `translateX(${x * fogStrength}px) translateY(${y * fogStrength}px)`;
    if (foreLayer) foreLayer.style.transform = `translateX(${x * foreStrength}px) translateY(${y * foreStrength}px)`;
  }
</script>

<section
  class="hero-section"
  bind:this={hero}
  on:mousemove={handleMouseMove}
  aria-label="Interactive Hero Section"
>
  <div class="parallax-wrapper">
    <AnimatedHeroBackground
      bind:bg={bgLayer}
      bind:aurora={auroraLayer}
      bind:mountainsDistant={midLayer}
      bind:mountainsNear={midLayer2}
      bind:fog={fogLayer}
      bind:fg={foreLayer}
    />
  </div>
  <div class="hero-content">
    <h1>Building distinctive brands that stand out and stay <strong>relevant.</strong></h1>
    <p class="subtitle">At Auralab, we craft identities that resonate with global audiences and create lasting impact.</p>
  </div>
</section>

<style>
  .hero-section {
    position: relative;
    height: 70vh;
    min-height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Important for containing the layers */
    background-color: #0c001f; /* Darker fallback color */
  }

  .parallax-wrapper {
    position: absolute;
    top: -5%;
    left: -5%;
    width: 110%;
    height: 110%;
    z-index: 1;
  }

  /* This is now inside AnimatedHeroBackground, but we can keep it for reference */
  :global(.parallax-layer) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease-out;
  }

  .hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
    color: white;
    padding: 0 1rem;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: white;
    max-width: 800px;
    margin: 0 auto 1rem;
    line-height: 1.1;
    text-shadow: 0 3px 10px rgba(0,0,0,0.3);
  }

  h1 strong {
    font-weight: 900; /* Bolder weight for emphasis */
  }

  .subtitle {
    font-size: 1.1rem;
    color: rgb(160 148 172); /* Lightened for better contrast */
    max-width: 500px;
    margin: 0 auto 2rem;
  }
</style>


