<script>
  let container;

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

    const maxTiltX = 30;
    const maxTiltY = 30;

    // Inverted tilt for "escaping" effect
    const rotateX = -deltaY * maxTiltX;
    const rotateY = deltaX * maxTiltY;

    container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function handleMouseLeave() {
    if (!container) return;
    container.style.transform = `rotateX(0deg) rotateY(0deg)`;
  }
</script>

<style>
  .container {
    perspective: 1000px;
    transition: transform 0.6s ease;
    width: 800px; /* adjust as needed */
    height: 300px; /* adjust as needed */
    position: relative;
    cursor: pointer;
  }

  /* Laptop image fills the container */
  .laptop-image {
    width: 100%;
    height: 100%;
    display: block;
    user-select: none;
    pointer-events: none; /* so mouse events go to container */
  }

  /* Video positioned absolutely inside the laptop screen */
  .video-wrapper {
    position: absolute;
    top: 18%;    
    left: 22%;   
    width: 55%;  
    height: 54%; 
    overflow: hidden;
    border-radius: 8px; 
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none; 
  }
</style>

<div
  bind:this={container}
  class="container"
  role="region"
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
>
  <!-- Laptop frame image -->
  <img src="/top.png" alt="Laptop frame" class="laptop-image" />

  <!-- Video inside the laptop screen -->
  <div class="video-wrapper">
    <video autoplay muted loop playsinline>
      <source src="/smoke.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
