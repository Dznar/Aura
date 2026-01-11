<script>
  import { onMount } from 'svelte';

  let container;

  function handleMouseMove(event) {
    if (!container) return;
    const { offsetWidth, offsetHeight } = container;
    const rect = container.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const centerX = offsetWidth / 2;
    const centerY = offsetHeight / 2;

    const deltaX = (mouseX - centerX) / centerX;
    const deltaY = (mouseY - centerY) / centerY;

    const maxTiltX = 15;
    const maxTiltY = 15;

    const rotateX = -deltaY * maxTiltX;
    const rotateY = deltaX * maxTiltY;

    container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function handleMouseLeave() {
    if (!container) return;
    container.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  }

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

  <section class="identity-section"
    role="region"
    bind:this={container}
    on:mousemove={handleMouseMove}
    on:mouseleave={handleMouseLeave}
  >
    <div class="identity-content">
      <div class="text-block">
        <h2>Company Profile</h2>
        <div>
          <h3>Identity</h3>
          <p>
            Building distinctive brands that stand out and stay relevant. A collective of designers, developers, and strategists, Auralab operates across continents, delivering culturally aware and globally scalable digital solutions.
          </p>
        </div>
      </div>

      <div class="image-block">
        <img src="/top.png" alt="Laptop frame" class="laptop-image" />
        <div class="video-wrapper">
          <video autoplay muted loop playsinline>
            <source src="https://res.cloudinary.com/dnvus1oig/video/upload/methslsp4lordavoyxji.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>

  <section class="services-detail-section">
    <div class="container">
      <h2 class="reveal-on-scroll bounce-in" bind:this={sections[5]}>What We Do</h2>
      <div class="services-grid">
        <div class="service-item" bind:this={sections[6]} style="--delay: 0.1s">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#667eea" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
          </svg>
          <h3>Cloud / Maintenance</h3>
          <p>Reliable infrastructure and ongoing support for your digital platforms.</p>
        </div>
        <div class="service-item" bind:this={sections[7]} style="--delay: 0.2s">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop-analytics" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#667eea" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="3" y="4" width="18" height="12" rx="1" />
            <path d="M7 20h10" />
            <path d="M9 16v4" />
            <path d="M15 16v4" />
            <path d="M9 12v-4" />
            <path d="M12 12v-1" />
            <path d="M15 12v-2" />
            <path d="M12 12v-1" />
          </svg>
          <h3>Web & App Development</h3>
          <p>Designing seamless, high-performing digital platforms.</p>
        </div>
        <div class="service-item" bind:this={sections[8]} style="--delay: 0.3s">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-speakerphone" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#667eea" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 8a3 3 0 0 1 0 6" />
            <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
            <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
          </svg>
          <h3>Digital Marketing</h3>
          <p>Driving growth through data-driven campaigns and storytelling.</p>
        </div>
        <div class="service-item" bind:this={sections[9]} style="--delay: 0.4s">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#667eea" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="15" y1="8" x2="15.01" y2="8" />
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
            <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
          </svg>
          <h3>Content Creation</h3>
          <p>Producing compelling visuals, videos, and copy that amplify brand voices.</p>
        </div>
        <div class="service-item" bind:this={sections[10]} style="--delay: 0.5s">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#667eea" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
          </svg>
          <h3>UX/UI Design</h3>
          <p>Creating intuitive, human-centered digital experiences.</p>
        </div>
        <div class="service-item" bind:this={sections[11]} style="--delay: 0.6s">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-robot" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#667eea" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z" />
            <path d="M10 16h4" />
            <circle cx="8.5" cy="11.5" r=".5" fill="currentColor" />
            <circle cx="15.5" cy="11.5" r=".5" fill="currentColor" />
            <path d="M9 7l-1 -4" />
            <path d="M15 7l1 -4" />
          </svg>
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
          <div class="value-item shake-hover" bind:this={sections[14 + i]} style="--delay: {0.1 * (i + 1)}s">
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

  .service-item:hover {
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  .icon {
    margin-bottom: 1rem;
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

  .identity-section {
    perspective: 1000px;
    transition: transform 0.6s ease;
    padding: 5rem 0;
    position: relative;
    background: linear-gradient(180deg, #fff 0%, #f8f9fa 100%);
  }

  .identity-content {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .text-block {
    flex: 1 1 350px;
    max-width: 500px;
  }

  .image-block {
    flex: 1 1 500px;
    max-width: 600px;
    position: relative;
  }

  .laptop-image {
    width: 100%;
    height: auto;
    display: block;
    user-select: none;
    pointer-events: none;
    border-radius: 12px;
  }

 .video-wrapper {
    position: absolute;
    top: 18%;
    left: 22%;
    width: 55%;
    height: 49%;
    overflow: hidden;
    border-radius: 8px;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    .identity-content {
      flex-direction: column;
    }
.container {
      width: 100% !important;
      height: auto !important;
      max-height: 400px;
    }
    .video-wrapper {
    top: 44px;
    left: 22%;
    width: 55%;
    height: 23%;
    }
  }
</style>