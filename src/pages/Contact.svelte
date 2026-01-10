<script>
<<<<<<< HEAD
=======
  import { onMount } from 'svelte';

>>>>>>> recovery-branch
  let formData = {
    name: '',
    email: '',
    company: '',
    message: ''
  };

  let formStatus = null;
  let isSubmitting = false;
<<<<<<< HEAD
=======
  let particles = [];

  onMount(() => {
    for (let i = 0; i < 15; i++) {
      particles.push({
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 12 + Math.random() * 6,
        size: 4 + Math.random() * 10
      });
    }
    particles = particles;
  });
>>>>>>> recovery-branch

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
<<<<<<< HEAD
    <div class="container">
      <h1 class="fade-in">Get In Touch</h1>
      <p class="subtitle fade-in-delay">Let's bring your ideas to life</p>
=======
    <svg class="drip-contact" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <defs>
        <linearGradient id="contact-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#84FAB0;stop-opacity:0.8" />
          <stop offset="50%" style="stop-color:#8FD3F4;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#D299C2;stop-opacity:0.8" />
        </linearGradient>
        <linearGradient id="contact-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#FEE140;stop-opacity:0.6" />
          <stop offset="100%" style="stop-color:#FA709A;stop-opacity:0.6" />
        </linearGradient>
      </defs>
      <path class="drip-contact-1" fill="url(#contact-gradient-1)" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      <path class="drip-contact-2" fill="url(#contact-gradient-2)" d="M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,128C672,117,768,107,864,117.3C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>

    {#each particles as particle}
      <div class="contact-particle" style="left: {particle.left}%; animation-delay: {particle.delay}s; animation-duration: {particle.duration}s; width: {particle.size}px; height: {particle.size}px;"></div>
    {/each}

    <div class="container">
      <h1 class="explode-in">Get In Touch</h1>
      <p class="subtitle drop-in">Let's bring your ideas to life</p>
>>>>>>> recovery-branch
    </div>
  </section>

  <section class="contact-content">
<<<<<<< HEAD
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info slide-in-left">
=======
    <svg class="liquid-blob-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="contact-blob-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FFECD2;stop-opacity:0.5" />
          <stop offset="100%" style="stop-color:#FCB69F;stop-opacity:0.5" />
        </linearGradient>
      </defs>
      <path fill="url(#contact-blob-1)" d="M37.3,-65.5C48.9,-58.8,59.3,-50,67.2,-38.9C75.1,-27.8,80.5,-13.9,81.7,0.5C82.9,14.9,79.9,29.8,72.5,42.8C65.1,55.8,53.3,66.9,39.8,73.3C26.3,79.7,11.1,81.4,-3.5,79.2C-18.1,77,-36.2,70.9,-50.8,61.4C-65.4,51.9,-76.5,38.9,-81.3,24.1C-86.1,9.3,-84.6,-7.3,-78.8,-21.5C-73,-35.7,-62.9,-47.5,-50.7,-53.9C-38.5,-60.3,-24.2,-61.3,-11.4,-62.4C1.4,-63.5,25.7,-72.2,37.3,-65.5Z" transform="translate(100 100)" class="liquid-morph" />
    </svg>

    <svg class="liquid-blob-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="contact-blob-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#A1C4FD;stop-opacity:0.5" />
          <stop offset="100%" style="stop-color:#C2E9FB;stop-opacity:0.5" />
        </linearGradient>
      </defs>
      <path fill="url(#contact-blob-2)" d="M43.3,-73.8C55.5,-66.3,64.8,-54.3,71.4,-40.8C78,-27.3,82,-12.3,82.1,2.9C82.2,18.1,78.4,33.5,70.4,46.3C62.4,59.1,50.2,69.3,36.5,75.2C22.8,81.1,7.6,82.7,-7.2,80.5C-22,78.3,-36.5,72.3,-49.8,63.7C-63.1,55.1,-75.2,44,-81.5,30.3C-87.8,16.6,-88.3,0.3,-84.6,-14.5C-80.9,-29.3,-73,-42.6,-62.2,-51.4C-51.4,-60.2,-37.7,-64.5,-24.3,-71.5C-10.9,-78.5,2.2,-88.2,16.8,-88.3C31.4,-88.4,31.1,-81.3,43.3,-73.8Z" transform="translate(100 100)" class="liquid-morph" />
    </svg>

    <div class="container">
      <div class="contact-grid">
        <div class="contact-info slide-left">
>>>>>>> recovery-branch
          <h2>Let's Connect</h2>
          <p class="intro">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div class="info-items">
<<<<<<< HEAD
            <div class="info-item">
              <div class="icon">
=======
            <div class="info-item scale-item" style="--delay: 0.1s">
              <div class="icon icon-pulse">
>>>>>>> recovery-branch
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

<<<<<<< HEAD
            <div class="info-item">
              <div class="icon">
=======
            <div class="info-item scale-item" style="--delay: 0.2s">
              <div class="icon icon-pulse">
>>>>>>> recovery-branch
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

<<<<<<< HEAD
            <div class="info-item">
              <div class="icon">
=======
            <div class="info-item scale-item" style="--delay: 0.3s">
              <div class="icon icon-pulse">
>>>>>>> recovery-branch
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

<<<<<<< HEAD
        <div class="contact-form-wrapper slide-in-right">
=======
        <div class="contact-form-wrapper slide-right">
>>>>>>> recovery-branch
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
<<<<<<< HEAD
=======
                class="input-focus"
>>>>>>> recovery-branch
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
<<<<<<< HEAD
=======
                class="input-focus"
>>>>>>> recovery-branch
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
<<<<<<< HEAD
=======
                class="input-focus"
>>>>>>> recovery-branch
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
<<<<<<< HEAD
=======
                class="input-focus"
>>>>>>> recovery-branch
              ></textarea>
            </div>

            {#if formStatus === 'success'}
<<<<<<< HEAD
              <div class="alert alert-success">
=======
              <div class="alert alert-success slide-down-alert">
>>>>>>> recovery-branch
                Thank you for reaching out! We'll get back to you soon.
              </div>
            {/if}

            {#if formStatus === 'error'}
<<<<<<< HEAD
              <div class="alert alert-error">
=======
              <div class="alert alert-error shake-alert">
>>>>>>> recovery-branch
                Something went wrong. Please try again.
              </div>
            {/if}

            <button type="submit" class="btn btn-primary btn-submit" disabled={isSubmitting}>
              {#if isSubmitting}
<<<<<<< HEAD
                <span class="spinner"></span>
=======
                <span class="spinner-pulse"></span>
>>>>>>> recovery-branch
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
<<<<<<< HEAD
  }

  .contact-hero {
    background: linear-gradient(135deg, #5622d2 0%, #4a1fb5 100%);
    color: white;
    padding: 6rem 0 4rem;
    text-align: center;
=======
    position: relative;
    overflow: hidden;
  }

  .contact-hero {
    background: linear-gradient(135deg, #0BA360 0%, #3CBA92 50%, #30DD8A 100%);
    color: white;
    padding: 6rem 0 4rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .drip-contact {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .drip-contact-1 {
    animation: drip-oscillate 10s ease-in-out infinite;
  }

  .drip-contact-2 {
    animation: drip-oscillate 14s ease-in-out infinite reverse;
  }

  @keyframes drip-oscillate {
    0%, 100% {
      transform: translateY(0) scaleY(1);
      opacity: 1;
    }
    50% {
      transform: translateY(-20px) scaleY(1.1);
      opacity: 0.8;
    }
  }

  .contact-particle {
    position: absolute;
    background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%;
    animation: particle-drift 12s ease-in-out infinite;
    opacity: 0;
    z-index: 1;
  }

  @keyframes particle-drift {
    0% {
      transform: translateY(120vh) translateX(0) scale(0) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 0.9;
    }
    90% {
      opacity: 0.9;
    }
    100% {
      transform: translateY(-100px) translateX(50px) scale(1.5) rotate(720deg);
      opacity: 0;
    }
  }

  .container {
    position: relative;
    z-index: 2;
>>>>>>> recovery-branch
  }

  .contact-hero h1 {
    color: white;
    font-size: clamp(2.5rem, 6vw, 4rem);
    margin-bottom: 1rem;
  }

<<<<<<< HEAD
  .subtitle {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
  }

  .contact-content {
    padding: 5rem 0;
=======
  .explode-in {
    animation: explode-in 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  }

  @keyframes explode-in {
    0% {
      opacity: 0;
      transform: scale(0) rotate(-180deg);
      filter: blur(10px);
    }
    60% {
      transform: scale(1.2) rotate(20deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
      filter: blur(0);
    }
  }

  .subtitle {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.95);
    margin: 0;
  }

  .drop-in {
    animation: drop-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
  }

  @keyframes drop-in {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .contact-content {
    padding: 5rem 0;
    background: linear-gradient(180deg, #FFF9F0 0%, #F0FFF9 100%);
    position: relative;
  }

  .liquid-blob-1, .liquid-blob-2 {
    position: absolute;
    width: 450px;
    height: 450px;
    opacity: 0.6;
    pointer-events: none;
    z-index: 0;
  }

  .liquid-blob-1 {
    top: 10%;
    left: -150px;
  }

  .liquid-blob-2 {
    bottom: 10%;
    right: -150px;
  }

  .liquid-morph {
    animation: liquid-morph 12s ease-in-out infinite;
  }

  @keyframes liquid-morph {
    0%, 100% {
      transform: translate(100px, 100px) scale(1);
      d: path("M37.3,-65.5C48.9,-58.8,59.3,-50,67.2,-38.9C75.1,-27.8,80.5,-13.9,81.7,0.5C82.9,14.9,79.9,29.8,72.5,42.8C65.1,55.8,53.3,66.9,39.8,73.3C26.3,79.7,11.1,81.4,-3.5,79.2C-18.1,77,-36.2,70.9,-50.8,61.4C-65.4,51.9,-76.5,38.9,-81.3,24.1C-86.1,9.3,-84.6,-7.3,-78.8,-21.5C-73,-35.7,-62.9,-47.5,-50.7,-53.9C-38.5,-60.3,-24.2,-61.3,-11.4,-62.4C1.4,-63.5,25.7,-72.2,37.3,-65.5Z");
    }
    50% {
      transform: translate(100px, 100px) scale(1.2) rotate(15deg);
    }
>>>>>>> recovery-branch
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
<<<<<<< HEAD
=======
    position: relative;
    z-index: 1;
>>>>>>> recovery-branch
  }

  .contact-info h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: left;
<<<<<<< HEAD
=======
    background: linear-gradient(135deg, #0BA360 0%, #3CBA92 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
>>>>>>> recovery-branch
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

<<<<<<< HEAD
  .icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #5622d2 0%, #4a1fb5 100%);
    border-radius: 12px;
=======
  .scale-item {
    animation: scale-in-item 0.6s ease both;
    animation-delay: var(--delay);
  }

  @keyframes scale-in-item {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .icon {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, #0BA360 0%, #3CBA92 100%);
    border-radius: 16px;
>>>>>>> recovery-branch
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
<<<<<<< HEAD
=======
    box-shadow: 0 8px 24px rgba(11, 163, 96, 0.3);
    transition: all 0.3s ease;
  }

  .icon-pulse {
    animation: icon-pulse 2s ease-in-out infinite;
  }

  @keyframes icon-pulse {
    0%, 100% {
      box-shadow: 0 8px 24px rgba(11, 163, 96, 0.3);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 8px 32px rgba(11, 163, 96, 0.5);
      transform: scale(1.05);
    }
>>>>>>> recovery-branch
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
<<<<<<< HEAD
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
=======
    padding: 3rem;
    border-radius: 24px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    border: 2px solid transparent;
    background-clip: padding-box;
    position: relative;
  }

  .contact-form-wrapper::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(135deg, #84FAB0, #8FD3F4, #D299C2);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.3;
>>>>>>> recovery-branch
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
<<<<<<< HEAD
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
=======
    font-size: 1rem;
  }

  input, textarea {
    padding: 1rem 1.25rem;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background: #f9fafb;
  }

  .input-focus:focus {
    outline: none;
    border-color: #0BA360;
    background: white;
    box-shadow: 0 0 0 4px rgba(11, 163, 96, 0.1);
    transform: translateY(-2px);
>>>>>>> recovery-branch
  }

  input:disabled, textarea:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  textarea {
    resize: vertical;
<<<<<<< HEAD
    min-height: 120px;
=======
    min-height: 140px;
>>>>>>> recovery-branch
  }

  .btn-submit {
    width: 100%;
<<<<<<< HEAD
    padding: 1rem;
    font-size: 1.05rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: relative;
=======
    padding: 1.25rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    position: relative;
    background: linear-gradient(135deg, #0BA360 0%, #3CBA92 100%);
    border: none;
    border-radius: 12px;
    color: white;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-submit:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(11, 163, 96, 0.4);
  }

  .btn-submit:active:not(:disabled) {
    transform: translateY(-1px);
>>>>>>> recovery-branch
  }

  .btn-submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

<<<<<<< HEAD
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
=======
  .spinner-pulse {
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spinner-pulse 0.8s linear infinite;
  }

  @keyframes spinner-pulse {
    to {
      transform: rotate(360deg);
    }
  }

  .alert {
    padding: 1.25rem;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 500;
  }

  .alert-success {
    background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
    color: #155724;
    border: 2px solid #c3e6cb;
  }

  .slide-down-alert {
    animation: slide-down-alert 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @keyframes slide-down-alert {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .alert-error {
    background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
    color: #721c24;
    border: 2px solid #f5c6cb;
  }

  .shake-alert {
    animation: shake-alert 0.5s ease;
  }

  @keyframes shake-alert {
    0%, 100% {
      transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translateX(-10px);
    }
    20%, 40%, 60%, 80% {
      transform: translateX(10px);
    }
  }

  .slide-left {
    animation: slide-left 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @keyframes slide-left {
    from {
      opacity: 0;
      transform: translateX(-60px);
>>>>>>> recovery-branch
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

<<<<<<< HEAD
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
=======
  .slide-right {
    animation: slide-right 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @keyframes slide-right {
    from {
      opacity: 0;
      transform: translateX(60px);
>>>>>>> recovery-branch
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
<<<<<<< HEAD
=======

    .liquid-blob-1, .liquid-blob-2 {
      width: 300px;
      height: 300px;
    }

    .contact-form-wrapper {
      padding: 2rem;
    }
>>>>>>> recovery-branch
  }
</style>
