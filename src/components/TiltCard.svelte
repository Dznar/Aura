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
    width: 1000px;
    height: 325px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 12px;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none; /* so hover passes through */
    border-radius: 12px;
  }

  .container:hover img {
    opacity: 1;
  }
</style>

<div
  bind:this={container}
  class="container"
  role="region"
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
>
  <video autoplay muted loop playsinline>
    <source src="/smoke.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <img src="/foreground-layer.svg" alt="Hover Image" />
</div>
