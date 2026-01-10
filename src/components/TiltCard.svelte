<script>
  import { onMount } from 'svelte';

  export let width = '800px';
  export let height = '300px';

  let container;

  // Tilt effect on mouse move
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

  // Reset tilt on mouse leave
  function handleMouseLeave() {
    if (!container) return;
    container.style.transform = `rotateX(0deg) rotateY(0deg)`;
  }
</script>

<style>
  .container {
    perspective: 1000px;
    transition: transform 0.6s ease;
    width: var(--width);
    height: var(--height);
    position: relative;
    cursor: pointer;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  }

  /* Laptop frame image fills the container */
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
    height: 50%;
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

  /* Overlay SVG hidden by default */
  .foreground-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 10;
  }

  /* Show SVG on hover */
  .container:hover .foreground-svg {
    opacity: 1;
  }

  /* Mobile friendly tweaks */
  @media (max-width: 768px) {
    .container {
      width: 100% !important;
      height: auto !important;
      max-height: 400px;
    }

    .video-wrapper {
      top: 19%;
    left: 22%;
    width: 55%;
    height: 49%;
    }
  }
</style>

<div
  bind:this={container}
  class="container"
  style="--width: {width}; --height: {height};"
  role="region"
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
  tabindex="-1"
>
  <!-- Laptop frame image -->
  <img src="/top.png" alt="Laptop frame" class="laptop-image" />

  <!-- Overlay SVG shown on hover -->
  <img
    src="/foreground-layer.svg"
    alt=""
    aria-hidden="true"
    class="foreground-svg"
  />

  <!-- Video inside the laptop screen -->
  <div class="video-wrapper">
    <video autoplay muted loop playsinline>
      <source
        src="https://res.cloudinary.com/dnvus1oig/video/upload/methslsp4lordavoyxji.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
