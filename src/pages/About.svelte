<script>
  import { onMount } from 'svelte';

  let sections = [];

  onMount(() => {
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
    <div class="container">
      <h1 class="reveal-on-scroll" bind:this={sections[0]}>Auralab – New Generation</h1>
      <p class="tagline reveal-on-scroll" bind:this={sections[1]}>
        We create powerful, innovative, fun, and memorable digital experiences.
      </p>
    </div>
  </section>

  <section class="intro-section">
    <div class="container">
      <div class="content-block reveal-on-scroll" bind:this={sections[2]}>
        <p class="lead">
          At Auralab, we believe that everything you need to bring your ideas to life is available under one roof. From creative strategy and conceptualization to design, development, and execution, we handle it all – delivering solutions that inspire, engage, and leave a lasting impact.
        </p>
      </div>
    </div>
  </section>

  <section class="identity-section">
    <div class="container">
      <h2 class="reveal-on-scroll" bind:this={sections[3]}>Company Profile</h2>
      <div class="content-block reveal-on-scroll" bind:this={sections[4]}>
        <h3>Identity</h3>
        <p>
          Building distinctive brands that stand out and stay relevant. A collective of designers, developers, and strategists, Auralab operates across continents, delivering culturally aware and globally scalable digital solutions.
        </p>
      </div>
    </div>
  </section>

  <section class="services-detail-section">
    <div class="container">
      <h2 class="reveal-on-scroll" bind:this={sections[5]}>What We Do</h2>
      <div class="services-grid">
        <div class="service-item reveal-on-scroll" bind:this={sections[6]} style="--delay: 0.1s">
          <h3>Cloud / Maintenance</h3>
          <p>Reliable infrastructure and ongoing support for your digital platforms.</p>
        </div>
        <div class="service-item reveal-on-scroll" bind:this={sections[7]} style="--delay: 0.2s">
          <h3>Web & App Development</h3>
          <p>Designing seamless, high-performing digital platforms.</p>
        </div>
        <div class="service-item reveal-on-scroll" bind:this={sections[8]} style="--delay: 0.3s">
          <h3>Digital Marketing</h3>
          <p>Driving growth through data-driven campaigns and storytelling.</p>
        </div>
        <div class="service-item reveal-on-scroll" bind:this={sections[9]} style="--delay: 0.4s">
          <h3>Content Creation</h3>
          <p>Producing compelling visuals, videos, and copy that amplify brand voices.</p>
        </div>
        <div class="service-item reveal-on-scroll" bind:this={sections[10]} style="--delay: 0.5s">
          <h3>UX/UI Design</h3>
          <p>Creating intuitive, human-centered digital experiences.</p>
        </div>
        <div class="service-item reveal-on-scroll" bind:this={sections[11]} style="--delay: 0.6s">
          <h3>AI & Automation Solutions</h3>
          <p>Leveraging emerging technologies to optimize business performance.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="approach-section">
    <div class="container">
      <div class="content-block reveal-on-scroll" bind:this={sections[12]}>
        <h2>Our Approach</h2>
        <p>
          At Auralab, we believe every brand has a unique frequency. Our mission is to tune into that frequency and amplify it through design, technology, and strategy — creating digital experiences that resonate across cultures and platforms.
        </p>
      </div>
    </div>
  </section>

  <section class="values-section">
    <div class="container">
      <h2 class="reveal-on-scroll" bind:this={sections[13]}>Our Values</h2>
      <div class="values-grid">
        {#each ['Innovation', 'Collaboration', 'Integrity', 'Excellence', 'Global Mindset'] as value, i}
          <div class="value-item reveal-on-scroll" bind:this={sections[14 + i]} style="--delay: {0.1 * (i + 1)}s">
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
  }

  .hero-section {
    background: linear-gradient(135deg, #5622d2 0%, #4a1fb5 100%);
    color: white;
    padding: 8rem 0 5rem;
    text-align: center;
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

  .intro-section {
    padding: 5rem 0;
    background-color: var(--background-light);
  }

  .lead {
    font-size: 1.25rem;
    line-height: 1.7;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    color: var(--text-main);
  }

  .identity-section, .approach-section {
    padding: 5rem 0;
    background-color: var(--background-off-white);
  }

  .services-detail-section {
    padding: 5rem 0;
    background-color: var(--background-light);
  }

  .values-section {
    padding: 5rem 0 6rem;
    background-color: var(--background-off-white);
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

  .content-block h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--primary-purple);
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
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .service-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  .service-item h3 {
    font-size: 1.2rem;
    color: var(--primary-purple);
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
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
  }

  .value-item:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(86, 34, 210, 0.15);
  }

  .value-item h3 {
    font-size: 1.3rem;
    color: var(--text-main);
    margin: 0;
  }


  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: 1fr;
    }

    .values-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
