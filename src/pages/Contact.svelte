<script>
  let formData = {
    name: '',
    email: '',
    company: '',
    message: ''
  };

  let formStatus = null;
  let isSubmitting = false;

  async function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    formStatus = null;

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);

      formStatus = 'success';
      formData = { name: '', email: '', company: '', message: '' };
    } catch (error) {
      formStatus = 'error';
    } finally {
      isSubmitting = false;
    }
  }

  function handleInput(field, value) {
    formData[field] = value;
  }
</script>

<main class="contact-page">
  <section class="contact-hero">
    <div class="container">
      <h1 class="fade-in">Get In Touch</h1>
      <p class="subtitle fade-in-delay">Let's bring your ideas to life</p>
    </div>
  </section>

  <section class="contact-content">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info slide-in-left">
          <h2>Let's Connect</h2>
          <p class="intro">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div class="info-items">
            <div class="info-item">
              <div class="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3>Location</h3>
                <p>Global - Remote First</p>
              </div>
            </div>

            <div class="info-item">
              <div class="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <p>hello@auralab.com</p>
              </div>
            </div>

            <div class="info-item">
              <div class="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h3>Phone</h3>
                <p>Available upon request</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-wrapper slide-in-right">
          <form class="contact-form" on:submit={handleSubmit}>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                on:input={(e) => handleInput('name', e.target.value)}
                required
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                on:input={(e) => handleInput('email', e.target.value)}
                required
                placeholder="your@email.com"
                disabled={isSubmitting}
              />
            </div>

            <div class="form-group">
              <label for="company">Company</label>
              <input
                type="text"
                id="company"
                value={formData.company}
                on:input={(e) => handleInput('company', e.target.value)}
                placeholder="Your company (optional)"
                disabled={isSubmitting}
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                on:input={(e) => handleInput('message', e.target.value)}
                required
                placeholder="Tell us about your project..."
                rows="5"
                disabled={isSubmitting}
              ></textarea>
            </div>

            {#if formStatus === 'success'}
              <div class="alert alert-success">
                Thank you for reaching out! We'll get back to you soon.
              </div>
            {/if}

            {#if formStatus === 'error'}
              <div class="alert alert-error">
                Something went wrong. Please try again.
              </div>
            {/if}

            <button type="submit" class="btn btn-primary btn-submit" disabled={isSubmitting}>
              {#if isSubmitting}
                <span class="spinner"></span>
                Sending...
              {:else}
                Send Message
              {/if}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .contact-page {
    padding-top: 0;
  }

  .contact-hero {
    background: linear-gradient(135deg, #5622d2 0%, #4a1fb5 100%);
    color: white;
    padding: 6rem 0 4rem;
    text-align: center;
  }

  .contact-hero h1 {
    color: white;
    font-size: clamp(2.5rem, 6vw, 4rem);
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
  }

  .contact-content {
    padding: 5rem 0;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .contact-info h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  .intro {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 3rem;
  }

  .info-items {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .info-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
  }

  .icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #5622d2 0%, #4a1fb5 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .info-item h3 {
    font-size: 1.1rem;
    margin: 0 0 0.25rem;
    color: var(--text-main);
  }

  .info-item p {
    margin: 0;
    color: var(--text-secondary);
  }

  .contact-form-wrapper {
    background: white;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-weight: 600;
    color: var(--text-main);
    font-size: 0.95rem;
  }

  input, textarea {
    padding: 0.875rem 1rem;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.2s ease;
    background: var(--background-light);
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: var(--primary-purple);
    background: white;
    box-shadow: 0 0 0 3px rgba(86, 34, 210, 0.1);
  }

  input:disabled, textarea:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  .btn-submit {
    width: 100%;
    padding: 1rem;
    font-size: 1.05rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: relative;
  }

  .btn-submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .alert {
    padding: 1rem;
    border-radius: 8px;
    font-size: 0.95rem;
    animation: slideDown 0.3s ease;
  }

  .alert-success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .alert-error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in {
    animation: fadeInUp 0.8s ease;
  }

  .fade-in-delay {
    animation: fadeInUp 0.8s ease 0.2s both;
  }

  .slide-in-left {
    animation: slideInLeft 0.8s ease;
  }

  .slide-in-right {
    animation: slideInRight 0.8s ease;
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

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 900px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .contact-info h2 {
      text-align: center;
    }

    .intro {
      text-align: center;
    }
  }
</style>
