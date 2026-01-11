<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let container;
  let activeSlide = 0;
  let interval;

  const slides = [
    {
      title: 'Cloud / Maintenance',
      content: 'Reliable infrastructure and ongoing support for your digital platforms.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" /></svg>`,
      bgColor: '#6A82FB',
      bgPattern: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
    },
    {
      title: 'Web & App Development',
      content: 'Designing seamless, high-performing digital platforms.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop-analytics" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="3" y="4" width="18" height="12" rx="1" /><path d="M7 20h10" /><path d="M9 16v4" /><path d="M15 16v4" /><path d="M9 12v-4" /><path d="M12 12v-1" /><path d="M15 12v-2" /><path d="M12 12v-1" /></svg>`,
      bgColor: '#FC5C7D',
      bgPattern: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
    },
    {
      title: 'Digital Marketing',
      content: 'Driving growth through data-driven campaigns and storytelling.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-speakerphone" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 8a3 3 0 0 1 0 6" /><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" /><path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" /></svg>`,
      bgColor: '#43e97b',
      bgPattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    },
    {
      title: 'Content Creation',
      content: 'Producing compelling visuals, videos, and copy that amplify brand voices.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" /><line x1="13.5" y1="6.5" x2="17.5" y2="10.5" /></svg>`,
      bgColor: '#FF8C42',
      bgPattern: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    },
    {
      title: 'UX/UI Design',
      content: 'Creating intuitive, human-centered digital experiences.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-artboard" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="8" y="8" width="8" height="8" rx="1" /><line x1="3" y1="8" x2="4" y2="8" /><line x1="3" y1="16" x2="4" y2="16" /><line x1="8" y1="3" x2="8" y2="4" /><line x1="16" y1="3" x2="16" y2="4" /><line x1="20" y1="8" x2="21" y2="8" /><line x1="20" y1="16" x2="21" y2="16" /><line x1="8" y1="20" x2="8" y2="21" /><line x1="16" y1="20" x2="16" y2="21" /></svg>`,
      bgColor: '#38A3A5',
      bgPattern: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M80 0v80H0V0h80zM20 20v40h40V20H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    },
    {
      title: 'AI & Automation Solutions',
      content: 'Leveraging emerging technologies to optimize business performance.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-robot" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z" /><path d="M10 16h4" /><circle cx="8.5" cy="11.5" r=".5" fill="currentColor" /><circle cx="15.5" cy="11.5" r=".5" fill="currentColor" /><path d="M9 7l-1 -4" /><path d="M15 7l1 -4" /></svg>`,
      bgColor: '#571089',
      bgPattern: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }
  ];

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

  function nextSlide() {
    activeSlide = (activeSlide + 1) % slides.length;
  }

  function prevSlide() {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
  }

  onMount(() => {
    interval = setInterval(nextSlide, 6000);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      if(section) observer.observe(section)
    });
    
    return () => {
      clearInterval(interval);
      if(observer) observer.disconnect();
    }
  });

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
    role="group"
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

  <section class="services-detail-section" style="background-color: {slides[activeSlide].bgColor}; background-image: {slides[activeSlide].bgPattern};">
    <div class="container">
      <h2 class="reveal-on-scroll puff-in" bind:this={sections[3]}>What We Do</h2>
      <div class="slideshow-container">
        {#key activeSlide}
          <div class="service-item-slide" in:fade={{ duration: 600, delay: 300 }} out:fade={{ duration: 300 }}>
            <div class="icon">
              {@html slides[activeSlide].icon}
            </div>
            <h3>{slides[activeSlide].title}</h3>
            <p>{slides[activeSlide].content}</p>
          </div>
        {/key}
      </div>
  
      <div class="slide-nav">
        <button on:click={prevSlide} aria-label="Previous Slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <div class="dots">
          {#each slides as _, i}
            <button class="dot" class:active={activeSlide === i} on:click={() => activeSlide = i} aria-label="Go to slide {i+1}"></button>
          {/each}
        </div>
        <button on:click={nextSlide} aria-label="Next Slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
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
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%), url('/back.png') center center / cover no-repeat;
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
    padding: 5rem 2rem;
    position: relative;
    color: white;
    text-align: center;
    overflow: hidden;
    transition: background-color 1s ease;
    background-size: auto;
    background-repeat: repeat;
  }

  .services-detail-section h2 {
    color: white;
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 2rem;
  }

  .slideshow-container {
    position: relative;
    min-height: 250px; /* prevent layout shift */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .service-item-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .service-item-slide .icon {
    margin-bottom: 1.5rem;
  }
  
  .service-item-slide .icon :global(svg) {
    width: 60px;
    height: 60px;
    stroke-width: 1.5;
  }

  .service-item-slide h3 {
    font-size: clamp(1.5rem, 4vw, 2.2rem);
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .service-item-slide p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.6;
    max-width: 500px;
  }

  .slide-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  .slide-nav button {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: white;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .slide-nav button:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  .dots {
    display: flex;
    gap: 0.75rem;
    margin: 0 1.5rem;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .dot.active {
    background: white;
    transform: scale(1.2);
  }

  @keyframes gradient-shift {
    0%, 100% {
      background-position:  50% 0%;
    }
    50% {
      background-position: 50% 100%;
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

  .content-block {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .content-block p {
    font-size: 1.1rem;
    line-height: 1.7;
  }

  .icon {
    margin-bottom: 1rem;
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