<script>
  import { onMount } from 'svelte';

  let scrollY = 0;

  function handleScroll() {
    scrollY = window.scrollY;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<section class="hero-visual">
  <div class="parallax-bg" style="background-image: url('/bg.png'); "></div>
  <div class="parallax-svg" style="transform: translateY({scrollY * 0.02}px);">

    <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.6">
    <!-- Constellation 1 -->
    <path d="M400 250 L 550 350 L 600 500" stroke="white" stroke-width="0.5" />
    <circle cx="400" cy="250" r="2" fill="white"/>
    <circle cx="550" cy="350" r="3" fill="white"/>
    <circle cx="600" cy="500" r="2" fill="white"/>

    <!-- Constellation 2 -->
    <path d="M1500 150 L 1650 220 L 1550 350 L 1400 300" stroke="white" stroke-width="0.5" />
    <circle cx="1500" cy="150" r="2" fill="white"/>
    <circle cx="1650" cy="220" r="1.5" fill="white"/>
    <circle cx="1550" cy="350" r="3" fill="white"/>
    <circle cx="1400" cy="300" r="2.5" fill="white"/>

    <!-- Constellation 3 -->
    <path d="M200 800 L 350 850 L 450 750" stroke="white" stroke-width="0.5" />
    <circle cx="200" cy="800" r="1.5" fill="white"/>
    <circle cx="350" cy="850" r="2.5" fill="white"/>
    <circle cx="450" cy="750" r="2" fill="white"/>
    
   <!-- Constellation 5 -->

<circle cx="100" cy="200" r="2.5" fill="white"/>
<circle cx="200" cy="450" r="2" fill="white"/>
<circle cx="300" cy="250" r="3" fill="white"/>
<circle cx="400" cy="300" r="1.5" fill="white"/>

<!-- Constellation 6 -->

<circle cx="800" cy="100" r="3" fill="white"/>
<circle cx="700" cy="300" r="2" fill="white"/>
<circle cx="600" cy="400" r="1.5" fill="white"/>
<circle cx="500" cy="150" r="2.5" fill="white"/>

<!-- Constellation 7 -->
<path d="M400 600 L 500 550 L 600 700 L 700 400" stroke="white" stroke-width="0.5" />
<circle cx="400" cy="600" r="2" fill="white"/>
<circle cx="500" cy="550" r="2.5" fill="white"/>
<circle cx="600" cy="700" r="1.5" fill="white"/>
<circle cx="700" cy="400" r="3" fill="white"/>


    <!-- Random stars -->
    <circle cx="100" cy="100" r="1.5" fill="white" opacity="0.8"/>
    <circle cx="800" cy="200" r="1" fill="white" opacity="0.7"/>
    <circle cx="1200" cy="500" r="2" fill="white" opacity="0.9"/>
    <circle cx="1700" cy="900" r="1.5" fill="white" opacity="0.8"/>
    <circle cx="900" cy="950" r="1" fill="white" opacity="0.6"/>
  </g>
</svg>

  </div>
  <div class="parallax-spaceman" style="transform: translateY({scrollY * 0.1}px);">
    <img src="/fallin.png" alt="Falling Spaceman" />
  </div>
  <div class="container">
    <div class="content-wrapper">
      <div class="logo">
        <img src="/auralab.png" alt="Auralab" />
      </div>
      <h1>Auralab Intelligence You Can Feel</h1>
      <p class="subtitle">At Auralab - Where Ideas Come Alive</p>
    </div>
  </div>
</section>

<style>
  .hero-visual {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--text-light);
    overflow: hidden;
  }

  .parallax-bg, .parallax-svg, .parallax-spaceman {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
  
  .parallax-bg {
    z-index: 1;
  }

  .parallax-svg {
    z-index: 2;
  }

  .parallax-spaceman {
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .parallax-spaceman img {
    width: 50%;
    max-width: 600px;
  }

  .container {
    position: relative;
    z-index: 4;
  }

  .content-wrapper {
    max-width: 800px;
    margin: -2rem auto 0;
    padding: 1rem 1rem 7rem;
    //background: rgba(0,0,0,0.5);
    border-radius: 12px;
  }

  .logo {
    margin-bottom: -2rem;
  }

  .logo img {
    height: 60px;
    filter: brightness(0) invert(1);
  }

  h1 {
    color: var(--text-light);
    font-size: clamp(2.5rem, 6vw, 4rem);
    text-shadow: 0 2px 15px rgba(0,0,0,0.3);
  }

  .subtitle {
    color: rgba(255, 255, 255, 0.85);
    font-size: 1.25rem;
    max-width: 500px;
    margin: -2rem auto 0;
  }
</style>
