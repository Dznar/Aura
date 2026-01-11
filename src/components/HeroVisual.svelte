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
  <div class="parallax-svg" style="transform: translateY({scrollY * 0.2}px);">
    <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:rgba(138, 43, 226, 0.3); stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(138, 43, 226, 0); stop-opacity:0" />
        </radialGradient>
        <radialGradient id="grad2" cx="20%" cy="80%" r="40%" fx="20%" fy="80%">
          <stop offset="0%" style="stop-color:rgba(75, 0, 130, 0.4); stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(75, 0, 130, 0); stop-opacity:0" />
        </radialGradient>
        <radialGradient id="grad3" cx="80%" cy="20%" r="30%" fx="80%" fy="20%">
          <stop offset="0%" style="stop-color:rgba(255, 20, 147, 0.3); stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(255, 20, 147, 0); stop-opacity:0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#grad1)">
        <animate attributeName="r" from="50%" to="60%" dur="8s" repeatCount="indefinite" />
      </rect>
      <rect width="1200" height="800" fill="url(#grad2)">
        <animate attributeName="r" from="40%" to="50%" dur="10s" repeatCount="indefinite" />
      </rect>
      <rect width="1200" height="800" fill="url(#grad3)">
        <animate attributeName="r" from="30%" to="40%" dur="12s" repeatCount="indefinite" />
      </rect>
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
    margin: 0 auto;
    padding: 2rem;
    background: rgba(0,0,0,0.5);
    border-radius: 12px;
  }

  .logo {
    margin-bottom: 2rem;
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
    margin: 1rem auto 0;
  }
</style>
