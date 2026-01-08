<script>
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

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
</script>

<main class="news-page">
  <section class="news-hero">
    <div class="container">
      <h1 class="fade-in">News & Insights</h1>
      <p class="subtitle fade-in-delay">Stay updated with the latest from Auralab</p>
    </div>
  </section>

  <section class="news-content">
    <div class="container">
      <div class="news-grid">
        {#each newsItems as item, i (item.id)}
          <article class="news-card" style="animation-delay: {i * 0.1}s">
            <div class="news-image">
              <img src={item.image} alt={item.title} />
              <span class="category-badge">{item.category}</span>
            </div>
            <div class="news-body">
              <time class="news-date">{formatDate(item.date)}</time>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
              <a href="#news/{item.id}" class="read-more">
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
  }

  .news-hero {
    background: linear-gradient(135deg, #5622d2 0%, #4a1fb5 100%);
    color: white;
    padding: 6rem 0 4rem;
    text-align: center;
  }

  .news-hero h1 {
    color: white;
    font-size: clamp(2.5rem, 6vw, 4rem);
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
  }

  .news-content {
    padding: 5rem 0;
    background-color: var(--background-off-white);
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2.5rem;
  }

  .news-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeInUp 0.6s ease both;
  }

  .news-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }

  .news-image {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
  }

  .news-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .news-card:hover .news-image img {
    transform: scale(1.1);
  }

  .category-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(255, 255, 255, 0.95);
    color: var(--primary-purple);
    padding: 0.375rem 0.875rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .news-body {
    padding: 1.75rem;
  }

  .news-date {
    display: block;
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
  }

  .news-card h2 {
    font-size: 1.4rem;
    margin: 0 0 1rem;
    line-height: 1.3;
    color: var(--text-main);
    text-align: left;
  }

  .news-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 1.25rem;
  }

  .read-more {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    color: var(--primary-purple);
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    transition: gap 0.2s ease;
  }

  .read-more:hover {
    gap: 0.625rem;
  }

  .read-more svg {
    transition: transform 0.2s ease;
  }

  .read-more:hover svg {
    transform: translateX(3px);
  }

  .fade-in {
    animation: fadeInUp 0.8s ease;
  }

  .fade-in-delay {
    animation: fadeInUp 0.8s ease 0.2s both;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .news-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
