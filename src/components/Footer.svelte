<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-column brand">
        <a href="/" class="footer-logo">
          <img src="/auralab.png" alt="Auralab" />
        </a>
        <p class="tagline">Where Ideas Come Alive</p>
      </div>

      <div class="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#news">News</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Services</h4>
        <ul>
          <li><a href="#web">Web development</a></li>
          <li><a href="#ai">AI Solutions</a></li>
          <li><a href="#design">UI/UX Design</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Legal</h4>
        <ul>
          <li><a href="#terms">Terms of service</a></li>
          <li><a href="#privacy">Privacy policy</a></li>
        </ul>
      </div>

      <div class="footer-column social">
        <h4>Connect</h4>
        <div class="social-icons">
          <!-- Using text placeholders for icons -->
          <a href="https://twitter.com" aria-label="Twitter">
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
</a>
          <a href="https://facebook.com" aria-label="Facebook">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z"/>
            </svg>
</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Auralab. All Rights Reserved.</p>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    background-color: var(--background-off-white);
    padding: 4rem 0 2rem;
    border-top: 1px solid var(--border-color);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .footer-column h4 {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text-main);
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .footer-column ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer-column a {
    color: var(--text-secondary);
    font-size: 0.95rem;
  }
  .footer-column a:hover {
    color: var(--primary-purple);
  }

  .brand .footer-logo img {
    height: 35px;
    margin-bottom: 0.5rem;
  }
  .brand .tagline {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin: 0;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
  }
  .social-icons a {
    font-weight: bold;
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;
  }
  .social-icons a:hover {
    color: var(--primary-purple);
    transform: translateY(-3px);
  }

  .footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
  }
  .footer-bottom p {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  
  @media (max-width: 900px) {
    .footer-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .brand {
      grid-column: 1 / -1;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 600px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }
</style>

