<script>
  import { onMount } from 'svelte';

  let sections = [];
  let particles = [];

  onMount(() => {
    for (let i = 0; i < 20; i++) {
      particles.push({
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        size: 4 + Math.random() * 8
      });
    }
    particles = particles;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  });
</script>

<main class="about-page">
  <section class="hero-section">
    <svg class="drip-svg top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <defs>
        <linearGradient id="drip-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:0.8" />
          <stop offset="50%" style="stop-color:#4ECDC4;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#95E1D3;stop-opacity:0.8" />
        </linearGradient>
        <linearGradient id="drip-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#F38181;stop-opacity:0.6" />
          <stop offset="100%" style="stop-color:#AA96DA;stop-opacity:0.6" />
        </linearGradient>
      </defs>
      <path class="drip-path-1" fill="url(#drip-gradient-1)" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      <path class="drip-path-2" fill="url(#drip-gradient-2)" d="M0,64L48,69.3C96,75,192,85,288,96C384,107,480,117,576,112C672,107,768,85,864,80C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>

    {#each particles as particle}
      <div class="particle" style="left: {particle.left}%; animation-delay: {particle.delay}s; animation-duration: {particle.duration}s; width: {particle.size}px; height: {particle.size}px;"></div>
    {/each}

    <div class="container">
      <h1 class="reveal-on-scroll bounce-in" bind:this={sections[0]}>Auralab – New Generation</h1>
      <p class="tagline reveal-on-scroll slide-up" bind:this={sections[1]}>
        We create powerful, innovative, fun, and memorable digital experiences.
      </p>
    </div>
  </section>

  <section class="intro-section">
    <svg class="blob blob-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blob-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FCBAD3;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#AA96DA;stop-opacity:0.3" />
        </linearGradient>
      </defs>
      <path fill="url(#blob-gradient-1)" d="M47.1,-57.3C59.9,-49.1,68.4,-33.3,71.5,-16.3C74.6,0.7,72.3,18.9,64.2,34.3C56.1,49.7,42.2,62.3,26.2,67.8C10.2,73.3,-7.9,71.7,-24.5,65.6C-41.1,59.5,-56.2,48.9,-64.8,34.3C-73.4,19.7,-75.5,1,-71.1,-15.7C-66.7,-32.4,-55.8,-47.1,-42.3,-55C-28.8,-62.9,-14.4,-64,0.6,-64.7C15.6,-65.4,34.3,-65.5,47.1,-57.3Z" transform="translate(100 100)" class="morph" />
    </svg>

    <div class="container">
      <div class="content-block reveal-on-scroll puff-in" bind:this={sections[2]}>
        <p class="lead">
          At Auralab, we believe that everything you need to bring your ideas to life is available under one roof. From creative strategy and conceptualization to design, development, and execution, we handle it all – delivering solutions that inspire, engage, and leave a lasting impact.
        </p>
      </div>
    </div>
  </section>

  <section class="identity-section">
    <svg class="blob blob-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blob-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#A8E6CF;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#FFD3B6;stop-opacity:0.3" />
        </linearGradient>
      </defs>
      <path fill="url(#blob-gradient-2)" d="M39.5,-51.9C50.9,-42.4,59.7,-30.3,63.8,-16.6C67.9,-2.9,67.3,12.4,61.2,25.4C55.1,38.4,43.5,49.1,30.1,55.8C16.7,62.5,1.5,65.2,-13.9,64.4C-29.3,63.6,-44.9,59.3,-56.3,49.5C-67.7,39.7,-74.9,24.4,-75.8,8.7C-76.7,-7,-71.3,-23.1,-61.5,-36.2C-51.7,-49.3,-37.5,-59.4,-22.8,-64.3C-8.1,-69.2,6.9,-68.9,20.5,-63.4C34.1,-57.9,28.1,-61.4,39.5,-51.9Z" transform="translate(100 100)" class="morph" />
    </svg>

    <div class="container">
      <h2 class="reveal-on-scroll scale-in" bind:this={sections[3]}>Company Profile</h2>
      <div class="content-block reveal-on-scroll slide-up" bind:this={sections[4]}>
        <h3>Identity</h3>
        <p>
          Building distinctive brands that stand out and stay relevant. A collective of designers, developers, and strategists, Auralab operates across continents, delivering culturally aware and globally scalable digital solutions.
        </p>
      </div>
    </div>
  </section>

  <section class="services-detail-section">
    <div class="container">
      <h2 class="reveal-on-scroll bounce-in" bind:this={sections[5]}>What We Do</h2>
      <div class="services-grid">
        <div class="service-item reveal-on-scroll" bind:this={sections[6]} style="--delay: 0.1s">
          <div class="bubble-icon"></div>
          <h3>Cloud / Maintenance</h3>
          <p>Reliable infrastructure and ongoing support for your digital platforms.</p>
        </div>
        <div class="service-item reveal-on-scroll" bind:this={sections[7]} style="--delay: 0.2s">
          <div class="bubble-icon"></div>
          <h3>Web & App Development</h3>
          <p>Designing seamless, high-performing digital platforms.</p>
        </div>
        <div class="service-item reveal-on-scroll" bind:this={sections[8]} style="--delay: 0.3s">
          <div class="bubble-icon"></div>
          <h3>Digital Marketing</h3>
          <p>Driving growth through data-driven campaigns and storytelling.</p>
        </div>
        <div class="service-item reveal-on-scroll" bind:this={sections[9]} style="--delay: 0.4s">
          <div class="bubble-icon"></div>
          <h3>Content Creation</h3>
          <p>Producing compelling visuals, videos, and copy that amplify brand voices.</p>
        </div>
        <div class="service-item reveal-on-scroll" bind:this={sections[10]} style="--delay: 0.5s">
          <div class="bubble-icon"></div>
          <h3>UX/UI Design</h3>
          <p>Creating intuitive, human-centered digital experiences.</p>
        </div>
        <div class="service-item reveal-on-scroll" bind:this={sections[11]} style="--delay: 0.6s">
          <div class="bubble-icon"></div>
          <h3>AI & Automation Solutions</h3>
          <p>Leveraging emerging technologies to optimize business performance.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="approach-section">
    <div class="container">
      <div class="content-block reveal-on-scroll puff-in" bind:this={sections[12]}>
        <h2>Our Approach</h2>
        <p>
          At Auralab, we believe every brand has a unique frequency. Our mission is to tune into that frequency and amplify it through design, technology, and strategy — creating digital experiences that resonate across cultures and platforms.
        </p>
      </div>
    </div>
  </section>

  <section class="values-section">
    <svg class="drip-svg bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <defs>
        <linearGradient id="drip-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#FFDEE9;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#B5FFFC;stop-opacity:0.8" />
        </linearGradient>
      </defs>
      <path class="drip-path-3" fill="url(#drip-gradient-3)" d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,144C672,149,768,171,864,165.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>

    <div class="container">
      <h2 class="reveal-on-scroll bounce-in" bind:this={sections[13]}>Our Values</h2>
      <div class="values-grid">
        {#each ['Innovation', 'Collaboration', 'Integrity', 'Excellence', 'Global Mindset'] as value, i}
          <div class="value-item reveal-on-scroll shake-hover" bind:this={sections[14 + i]} style="--delay: {0.1 * (i + 1)}s">
            <h3>{value}</h3>
          </div>
        {/each}
      </div>
    </div>
  </section>
</main>

<style>
  .about-page {
    padding-top: 0;
    position: relative;
    overflow: hidden;
  }

  .hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 8rem 0 5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .drip-svg {
    position: absolute;
    width: 100%;
    height: auto;
    pointer-events: none;
    z-index: 1;
  }

  .drip-svg.top {
    top: 0;
    left: 0;
  }

  .drip-svg.bottom {
    bottom: 0;
    left: 0;
  }

  .drip-path-1 {
    animation: drip-flow 8s ease-in-out infinite;
  }

  .drip-path-2 {
    animation: drip-flow 10s ease-in-out infinite reverse;
  }

  .drip-path-3 {
    animation: drip-flow 12s ease-in-out infinite;
  }

  @keyframes drip-flow {
    0%, 100% {
      transform: translateY(0) scaleY(1);
    }
    50% {
      transform: translateY(-10px) scaleY(1.05);
    }
  }

  .particle {
    position: absolute;
    background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%;
    animation: float-particle 8s ease-in-out infinite;
    opacity: 0;
    z-index: 1;
  }

  @keyframes float-particle {
    0% {
      transform: translateY(100vh) translateX(0) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 0.8;
    }
    90% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(-100px) translateX(20px) scale(1);
      opacity: 0;
    }
  }

  .container {
    position: relative;
    z-index: 2;
  }

  .hero-section h1 {
    color: white;
    font-size: clamp(2.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
  }

  .tagline {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    font-weight: 600;
    max-width: 900px;
    margin: 0 auto;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.95);
  }

  .intro-section, .identity-section, .approach-section {
    padding: 5rem 0;
    position: relative;
  }

  .intro-section {
    background: linear-gradient(180deg, #f8f9fa 0%, #fff 100%);
  }

  .identity-section {
    background: linear-gradient(180deg, #fff 0%, #f8f9fa 100%);
  }

  .approach-section {
    background: linear-gradient(180deg, #f8f9fa 0%, #fff 100%);
  }

  .blob {
    position: absolute;
    width: 400px;
    height: 400px;
    opacity: 0.5;
    pointer-events: none;
    z-index: 0;
  }

  .blob-1 {
    top: 10%;
    right: -100px;
  }

  .blob-2 {
    bottom: 10%;
    left: -100px;
  }

  .morph {
    animation: morph-animation 8s ease-in-out infinite;
  }

  @keyframes morph-animation {
    0%, 100% {
      transform: translate(100px, 100px) scale(1);
    }
    50% {
      transform: translate(100px, 100px) scale(1.1) rotate(10deg);
    }
  }

  .lead {
    font-size: 1.25rem;
    line-height: 1.7;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    color: var(--text-main);
  }

  .services-detail-section {
    padding: 5rem 0;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    background-size: 200% 200%;
    animation: gradient-shift 15s ease infinite;
    position: relative;
  }

  @keyframes gradient-shift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .values-section {
    padding: 5rem 0 6rem;
    background: linear-gradient(180deg, #fff 0%, #f8f9fa 100%);
    position: relative;
  }

  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }

  .services-detail-section h2 {
    color: white;
  }

  .content-block {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .content-block h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .content-block p {
    font-size: 1.1rem;
    line-height: 1.7;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .service-item {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
  }

  .bubble-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    margin-bottom: 1rem;
    animation: bubble-morph 3s ease-in-out infinite;
  }

  @keyframes bubble-morph {
    0%, 100% {
      border-radius: 50%;
      transform: scale(1);
    }
    50% {
      border-radius: 40%;
      transform: scale(1.1);
    }
  }

  .service-item:hover {
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  .service-item h3 {
    font-size: 1.2rem;
    color: #667eea;
    margin-bottom: 0.75rem;
  }

  .service-item p {
    font-size: 1rem;
    color: var(--text-secondary);
    margin: 0;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .value-item {
    padding: 2.5rem 1.5rem;
    background: white;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .value-item:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.2);
    animation: shake 0.5s ease;
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0) scale(1.05); }
    25% { transform: translateX(-5px) scale(1.05); }
    75% { transform: translateX(5px) scale(1.05); }
  }

  .value-item h3 {
    font-size: 1.3rem;
    color: var(--text-main);
    margin: 0;
  }

  .reveal-on-scroll {
    opacity: 1;
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .bounce-in {
    animation: bounce-in 1s ease both;
  }

  @keyframes bounce-in {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .slide-up {
    animation: slide-up 0.8s ease both;
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .scale-in {
    animation: scale-in 0.8s ease both;
  }

  @keyframes scale-in {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .puff-in {
    animation: puff-in 1s ease both;
  }

  @keyframes puff-in {
    0% {
      opacity: 0;
      transform: scale(2);
      filter: blur(4px);
    }
    100% {
      opacity: 1;
      transform: scale(1);
      filter: blur(0);
    }
  }

  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: 1fr;
    }

    .values-grid {
      grid-template-columns: 1fr;
    }

    .blob {
      width: 250px;
      height: 250px;
    }
  }
</style>
