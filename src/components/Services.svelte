<script>
  const services = [
    {
      title: 'CREATIVITY',
      description: 'At Auralab we believe creativity is the currency of the future and we are committed to delivering it.'
    },
    {
      title: 'DRIVE',
      description: 'Our team is driven by a passion for innovation and a commitment to delivering excellence in everything we do.'
    },
    {
      title: 'INNOVATION',
      description: 'Innovation is in our DNA. We are constantly pushing the boundaries of what is possible.'
    },
    {
      title: 'PROVEN',
      description: 'We have a proven track record of delivering results for our clients across a wide range of industries.'
    }
  ];
</script>

<section id="services" class="services-section">
  <div class="container">
    <div class="services-grid">
      {#each services as service (service.title)}
        <div class="service-card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .services-section {
    padding: 5rem 0;
    background-color: var(--background-off-white);
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem; /* Reduce gap to bring cards closer */
  }

  .service-card {
    padding: 2.5rem;
    border-top: 2px solid var(--border-color);
    transition: transform 0.4s cubic-bezier(.22,.61,.36,1), box-shadow 0.4s cubic-bezier(.22,.61,.36,1);
    //overflow: hidden;
  }

  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  }

  .service-card p {
    opacity: 10;
    transform: translateY(25px);
    transition: opacity 0.4s cubic-bezier(.22,.61,.36,1), transform 0.4s cubic-bezier(.22,.61,.36,1);
    transition-delay: 0.1s; /* Slight delay so the card lifts first */
  }
  
  .service-card:hover p {
    opacity: 1;
    transform: translateY(0);
  }

  h3 {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
    color: var(--primary-purple);
  }

  p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin: 0;
  }

  @media (max-width: 900px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .services-grid {
      grid-template-columns: 1fr;
    }
    .service-card {
      padding: 2rem;
    }
  }
</style>


