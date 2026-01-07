<section class="hero-visual">
  <div class="background-overlay"></div>
  <div class="container">
    <div class="content-wrapper">
      <div class="logo">
        <img src="/auralab.png" alt="Auralab Logo" />
      </div>
      <h1>Auralab Intelligence You Can Feel</h1>
      <p class="subtitle">At Auralab - Where Ideas Come Alive</p>
    </div>
  </div>
</section>

<style>
  .hero-visual {
    position: relative;
    padding: 8rem 0;
    background-color: var(--dark-bg);
    color: var(--text-light);
    text-align: center;
    overflow: hidden;
  }

  .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/bg.png') center center / cover no-repeat;
    opacity: 0.8;
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 2;
  }

  .content-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }

  .logo {
    margin-bottom: 2rem;
  }

  .logo img {
    height: 60px;
    filter: brightness(0) invert(1); /* Make the logo white */
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
