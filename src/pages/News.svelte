<script>
  import { onMount } from 'svelte';

  const newsItems = [
    {
      id: 1,
      title: 'Auralab Launches AI-Powered Design Tools',
      date: '2026-01-05',
      category: 'Product Launch',
      excerpt: 'We are excited to announce our new suite of AI-powered design tools that help streamline the creative process.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Expanding Our Global Presence',
      date: '2025-12-20',
      category: 'Company News',
      excerpt: 'Auralab continues to grow with new team members joining from across the globe, strengthening our international footprint.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Case Study: Transforming Digital Experiences',
      date: '2025-12-10',
      category: 'Case Study',
      excerpt: 'Learn how we helped a Fortune 500 company reimagine their digital presence and achieve a 300% increase in user engagement.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'The Future of Web Development',
      date: '2025-11-28',
      category: 'Insights',
      excerpt: 'Our team shares insights on emerging trends in web development and what to expect in 2026.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Award-Winning UX Design',
      date: '2025-11-15',
      category: 'Awards',
      excerpt: 'Auralab wins prestigious UX Design Award for our innovative approach to user-centered design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'New Partnership Announcement',
      date: '2025-11-01',
      category: 'Partnership',
      excerpt: 'We are thrilled to announce our strategic partnership with leading technology innovators.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  let particles = [];

  onMount(() => {
    for (let i = 0; i < 25; i++) {
      particles.push({
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 5,
        size: 3 + Math.random() * 6
      });
    }
    particles = particles;
  });

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
</script>

<main class="news-page">
  <section class="news-hero">
    <svg class="liquid-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <defs>
        <linearGradient id="liquid-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FA709A;stop-opacity:0.8" />
          <stop offset="50%" style="stop-color:#FEE140;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#30CFD0;stop-opacity:0.8" />
        </linearGradient>
        <linearGradient id="liquid-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#A8EDEA;stop-opacity:0.6" />
          <stop offset="100%" style="stop-color:#FED6E3;stop-opacity:0.6" />
        </linearGradient>
      </defs>
      <path class="liquid-path-1" fill="url(#liquid-gradient-1)" d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,133.3C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      <path class="liquid-path-2" fill="url(#liquid-gradient-2)" d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,117.3C672,107,768,117,864,133.3C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>

    {#each particles as particle}
      <div class="floating-particle" style="left: {particle.left}%; animation-delay: {particle.delay}s; animation-duration: {particle.duration}s; width: {particle.size}px; height: {particle.size}px;"></div>
    {/each}

    <div class="container">
      <h1 class="clip-reveal">News & Insights</h1>
      <p class="subtitle slide-in-down">Stay updated with the latest from Auralab</p>
    </div>
  </section>

  <section class="news-content">
    <svg class="blob-accent" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="news-blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FFD3A5;stop-opacity:0.4" />
          <stop offset="100%" style="stop-color:#FD6585;stop-opacity:0.4" />
        </linearGradient>
      </defs>
      <path fill="url(#news-blob-gradient)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.3C64.8,55.4,53.8,67,40.4,73.8C27,80.6,11.2,82.6,-4.3,79.2C-19.8,75.8,-35.1,66.9,-47.8,55.4C-60.5,43.9,-70.6,29.8,-76.1,13.9C-81.6,-2,-82.5,-19.7,-77.3,-35.9C-72.1,-52.1,-60.8,-66.8,-46.3,-73.8C-31.8,-80.8,-15.9,-80.1,-0.2,-79.8C15.5,-79.5,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" class="pulse-morph" />
    </svg>

    <div class="container">
      <div class="news-grid">
        {#each newsItems as item, i (item.id)}
          <article class="news-card pop-in" style="animation-delay: {i * 0.15}s">
            <div class="news-image">
              <div class="image-overlay"></div>
              <img src={item.image} alt={item.title} />
              <span class="category-badge bubble-badge">{item.category}</span>
            </div>
            <div class="news-body">
              <time class="news-date fade-in-text">{formatDate(item.date)}</time>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
              <a href="#news/{item.id}" class="read-more arrow-slide">
                Read More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 12l4-4-4-4"/>
                </svg>
              </a>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>
</main>

<style>
  .news-page {
    padding-top: 0;
    position: relative;
    overflow: hidden;
  }

  .news-hero {
    background: linear-gradient(135deg, #FF6B9D 0%, #C06C84 50%, #6C5B7B 100%);
    color: white;
    padding: 6rem 0 4rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .liquid-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .liquid-path-1 {
    animation: liquid-wave 12s ease-in-out infinite;
  }

  .liquid-path-2 {
    animation: liquid-wave 15s ease-in-out infinite reverse;
  }

  @keyframes liquid-wave {
    0%, 100% {
      d: path("M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,133.3C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z");
      transform: translateY(0) scaleY(1);
    }
    50% {
      transform: translateY(-15px) scaleY(1.08);
    }
  }

  .floating-particle {
    position: absolute;
    background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%;
    animation: float-up 10s ease-in-out infinite;
    opacity: 0;
    z-index: 1;
  }

  @keyframes float-up {
    0% {
      transform: translateY(100vh) translateX(0) rotate(0deg);
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    100% {
      transform: translateY(-150px) translateX(30px) rotate(360deg);
      opacity: 0;
    }
  }

  .container {
    position: relative;
    z-index: 2;
  }

  .news-hero h1 {
    color: white;
    font-size: clamp(2.5rem, 6vw, 4rem);
    margin-bottom: 1rem;
  }

  .clip-reveal {
    animation: clip-reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) both;
  }

  @keyframes clip-reveal {
    0% {
      clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

  .subtitle {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.95);
    margin: 0;
  }

  .slide-in-down {
    animation: slide-in-down 0.8s ease 0.3s both;
  }

  @keyframes slide-in-down {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .news-content {
    padding: 5rem 0;
    background: linear-gradient(180deg, #FFF5F7 0%, #F0F8FF 100%);
    position: relative;
  }

  .blob-accent {
    position: absolute;
    width: 500px;
    height: 500px;
    top: 20%;
    right: -150px;
    opacity: 0.6;
    pointer-events: none;
    z-index: 0;
  }

  .pulse-morph {
    animation: pulse-morph 10s ease-in-out infinite;
  }

  @keyframes pulse-morph {
    0%, 100% {
      transform: translate(100px, 100px) scale(1) rotate(0deg);
    }
    33% {
      transform: translate(100px, 100px) scale(1.15) rotate(120deg);
    }
    66% {
      transform: translate(100px, 100px) scale(0.9) rotate(240deg);
    }
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2.5rem;
    position: relative;
    z-index: 1;
  }

  .news-card {
    background: white;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
  }

  .pop-in {
    animation: pop-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  }

  @keyframes pop-in {
    0% {
      opacity: 0;
      transform: scale(0.5) translateY(50px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  .news-card:hover {
    transform: translateY(-12px) rotate(-1deg);
    box-shadow: 0 20px 40px rgba(255, 107, 157, 0.3);
  }

  .news-image {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .news-card:hover .image-overlay {
    opacity: 1;
  }

  .news-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .news-card:hover .news-image img {
    transform: scale(1.15) rotate(2deg);
  }

  .category-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(255, 255, 255, 0.95);
    color: #FF6B9D;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    z-index: 2;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .bubble-badge {
    animation: bubble-float 3s ease-in-out infinite;
  }

  @keyframes bubble-float {
    0%, 100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-5px) scale(1.05);
    }
  }

  .news-body {
    padding: 2rem;
  }

  .news-date {
    display: block;
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
    font-weight: 500;
  }

  .fade-in-text {
    animation: fade-in-text 0.6s ease both;
  }

  @keyframes fade-in-text {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .news-card h2 {
    font-size: 1.4rem;
    margin: 0 0 1rem;
    line-height: 1.3;
    color: var(--text-main);
    text-align: left;
    background: linear-gradient(135deg, #FF6B9D 0%, #6C5B7B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .news-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  .read-more {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #FF6B9D;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
  }

  .arrow-slide:hover {
    gap: 0.75rem;
    transform: translateX(5px);
  }

  .read-more svg {
    transition: transform 0.3s ease;
  }

  .read-more:hover svg {
    transform: translateX(5px);
    animation: arrow-bounce 0.6s ease infinite;
  }

  @keyframes arrow-bounce {
    0%, 100% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(10px);
    }
  }

  @media (max-width: 768px) {
    .news-grid {
      grid-template-columns: 1fr;
    }

    .blob-accent {
      width: 300px;
      height: 300px;
      right: -100px;
    }
  }
</style>
