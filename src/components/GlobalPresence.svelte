<script>
  let gridContainer;
  let hovered = false;

  function handleMouseMove(event) {
    if (!gridContainer) return;
    const rect = gridContainer.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const { width, height } = rect;

    const rotateY = (mouseX / width - 0.5) * -15;
    const rotateX = (mouseY / height - 0.5) * 15;

    gridContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function handleMouseLeave() {
    if (!gridContainer) return;
    gridContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  }
</script>

<section id="presence" class="presence-section">
  <div class="container">
    <div
      class="grid-container"
      class:hovered
      bind:this={gridContainer}
      role="region"
      on:mousemove={handleMouseMove}
      on:mouseleave={() => { handleMouseLeave(); hovered = false; }}
      on:mouseenter={() => { hovered = true; }}
    >
      <div class="text-content">
        <h2>Accessible Everywhere.</h2>
        <p>
          From mobile to desktop, our digital solutions are crafted for a seamless experience on any device. Auralab's global team ensures your project is always moving forward, no matter where you are.
        </p>
      </div>
      <div
        class="image-stack-container"
      >
        <div class="image-stack">
          <img src="/pc.png" alt="Desktop" class="stack-image pc" />
          <img src="/tablet.png" alt="Tablet" class="stack-image tablet" />
          <img src="/phone.png" alt="Phone" class="stack-image phone" />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .presence-section {
    background: linear-gradient(180deg, #f8f9fa 0%, #fff 100%);
    padding: 6rem 0;
    overflow: hidden;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    transition: all 0.3s ease-out;
    transform-style: preserve-3d;
  }

  .text-content {
    max-width: 500px;
    transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  h2 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.7;
    color: var(--text-secondary);
  }

  .image-stack-container {
    perspective: 1500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-stack {
    position: relative;
    width: 80%;
    height: 450px; 
    transform-style: preserve-3d;
  }

  .stack-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 12px;
    //box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  @keyframes shuffle {
    0%, 100% {
      transform: translateZ(0) scale(1);
      z-index: 3;
    }
    33% {
      transform: translateZ(-50px) scale(0.95);
      z-index: 2;
    }
    66% {
      transform: translateZ(-100px) scale(0.9);
      z-index: 1;
    }
    95% {
    opacity: 0;
  }
  }

  @media (max-width: 900px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
    .text-content {
      margin-bottom: 3rem;
    }

    .pc {
      animation: shuffle 9s infinite;
    }
    
    .tablet {
      animation: shuffle 9s infinite 3s;
    }
    
    .phone {
      animation: shuffle 9s infinite 6s;
    }
  }

  @media (min-width: 901px) {

  .tablet, .pc {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
  }

  .phone {
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.5s ease;
    transform: none;
    z-index: auto;
  }


  .grid-container.hovered .pc,
  .grid-container.hovered .tablet {
    opacity: 1;
    pointer-events: auto;
  }

  .grid-container.hovered .phone {
    transform: translateX(-60%) rotate(-15deg) scale(0.6);
    z-index: 1;
  }

  .grid-container.hovered .tablet {
    transform: translateX(0) rotate(0) scale(0.9);
    z-index: 3;
  }

  .grid-container.hovered .pc {
    transform: translateX(60%) rotate(15deg) scale(0.6);
    z-index: 2;
  }
}

</style>

