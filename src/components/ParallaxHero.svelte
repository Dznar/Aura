<script>
  let hero;
  let bgLayer, midLayer, foreLayer;

  // Strength of the parallax effect for each layer
  const bgStrength = 15;
  const midStrength = 35;
  const foreStrength = 60;

  function handleMouseMove(event) {
    if (!hero) return;

    const { clientX, clientY } = event;
    const { offsetWidth, offsetHeight } = hero;

    // Calculate mouse position from center of the element (-0.5 to 0.5)
    const x = (clientX / offsetWidth) - 0.5;
    const y = (clientY / offsetHeight) - 0.5;

    // transformations
    bgLayer.style.transform = `translateX(${x * bgStrength}px) translateY(${y * bgStrength}px)`;
    midLayer.style.transform = `translateX(${x * midStrength}px) translateY(${y * midStrength}px)`;
    foreLayer.style.transform = `translateX(${x * foreStrength}px) translateY(${y * foreStrength}px)`;
  }
</script>

<section
  class="hero-section"
  bind:this={hero}
  on:mousemove={handleMouseMove}
  aria-label="Interactive Hero Section"
>  <div class="parallax-wrapper">
    <img src="/clouds.png" alt="Dreamy purple clouds" class="parallax-layer layer-bg" bind:this={bgLayer} />
    <img src="/mid-ground-layer.svg" alt="Abstract shapes" class="parallax-layer layer-mid" bind:this={midLayer} />
    <img src="/foreground-layer.svg" alt="Constellation patterns" class="parallax-layer layer-fore" bind:this={foreLayer} />
  </div>
  <div class="hero-content">
    <h1>Building distinctive brands that stand out and stay <strong>relevant.</strong></h1>
    <p class="subtitle">At Auralab, we craft identities that resonate with global audiences and create lasting impact.</p>
    <div class="button-group">
      <a href="#work" class="btn btn-primary">Our Work</a>
      <a href="#contact" class="btn btn-secondary">Get in Touch</a>
    </div>
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
    background-color: #2c1c4f; /* Fallback color similar to clouds */
  }

  .parallax-wrapper {
    position: absolute;
    top: -5%;
    left: -5%;
    width: 110%;
    height: 110%;
  }

  .parallax-layer {
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
    color: rgb(96 82 108);
    max-width: 500px;
    margin: 0 auto 2rem;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  :global(.hero-content .btn-secondary) {
    color: #4a1fb5;
    border-color: rgb(153 81 147 / 50%);
  }
  :global(.hero-content .btn-secondary:hover) {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: white;
  }
</style>

