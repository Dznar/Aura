<script>
  export let bg;
  export let aurora;
  export let mountainsDistant;
  export let mountainsNear;
  export let fog;
  export let fg;
</script>

<div class="hero-background">
  <div class="layer layer-bg" bind:this={bg}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="starGlowPurple" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#d6b4ff" stop-opacity="1"/>
          <stop offset="100%" stop-color="#6b2cff" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="starGlowBlue" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#9be7ff" stop-opacity="1"/>
          <stop offset="100%" stop-color="#1b4cff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <g fill="#ffffff" opacity="0.8" class="twinkle">
        <circle cx="120" cy="80" r="1"/>
        <circle cx="300" cy="150" r="1.2" style="animation-delay: 1.5s;"/>
        <circle cx="540" cy="90" r="1"/>
        <circle cx="760" cy="200" r="1.1" style="animation-delay: 2.5s;"/>
        <circle cx="980" cy="120" r="1"/>
        <circle cx="1100" cy="300" r="1.3" style="animation-delay: 0.5s;"/>
        <circle cx="200" cy="420" r="1"/>
        <circle cx="450" cy="350" r="1.2" style="animation-delay: 3.5s;"/>
        <circle cx="700" cy="460" r="1"/>
        <circle cx="1000" cy="420" r="1.1" style="animation-delay: 4.5s;"/>
      </g>
      <g fill="#cbb6ff" opacity="0.9" class="twinkle">
        <circle cx="180" cy="220" r="2" style="animation-delay: 0.2s;"/>
        <circle cx="420" cy="180" r="2.2" style="animation-delay: 2.2s;"/>
        <circle cx="680" cy="140" r="2" style="animation-delay: 1.2s;"/>
        <circle cx="860" cy="320" r="2.3" style="animation-delay: 3.2s;"/>
        <circle cx="520" cy="480" r="2" style="animation-delay: 4.2s;"/>
      </g>
            <g class="twinkle">
              <circle cx="260" cy="260" r="12" fill="url(#starGlowPurple)" style="animation-delay: 0.8s;"/>
              <circle cx="620" cy="240" r="14" fill="url(#starGlowBlue)" style="animation-delay: 1.8s;"/>
              <circle cx="880" cy="180" r="10" fill="url(#starGlowPurple)" style="animation-delay: 2.8s;"/>
              <circle cx="740" cy="420" r="13" fill="url(#starGlowBlue)" style="animation-delay: 3.8s;"/>
            </g>
            <!-- Shooting stars -->
            <g>
              <path class="shooting-star" d="M1100 50 L1150 100" />
              <path class="shooting-star" d="M200 150 L250 200" style="animation-delay: 3s;" />
              <path class="shooting-star" d="M900 80 L950 130" style="animation-delay: 5.5s;" />
            </g>
          </svg>
        </div>
      
        <div class="layer layer-aurora" bind:this={aurora}>
          <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="auroraGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stop-color="#6b2cff" stop-opacity="0.5"/>
                <stop offset="100%" stop-color="#1b4cff" stop-opacity="0"/>
              </linearGradient>
              <filter id="auroraBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
              </filter>
            </defs>
            <g filter="url(#auroraBlur)" opacity="0.6">
              <path class="aurora-path" d="M -200,600 C 400,400 800,700 1400,500 S 2200,300 2200,500" stroke="url(#auroraGradient)" stroke-width="100"/>
              <path class="aurora-path" d="M -200,500 C 300,700 700,400 1300,600 S 2100,700 2100,500" stroke="url(#auroraGradient)" stroke-width="80" style="animation-delay: 2s; animation-duration: 25s;"/>
            </g>
          </svg>
        </div>
      
        <div class="layer layer-mountains-distant" bind:this={mountainsDistant}>
          <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1080V800L300 650L600 800L900 600L1200 750L1500 550L1920 700V1080H0Z" fill="#190D2E"/>
          </svg>
        </div>
      
        <div class="layer layer-mountains-near" bind:this={mountainsNear}>
           <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1080V850L400 750L800 880L1200 720L1600 850L1920 780V1080H0Z" fill="#36215A"/>
          </svg>
        </div>
      
        <div class="layer layer-fog" bind:this={fog}>
          <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="fogBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
              </filter>
            </defs>
            <g filter="url(#fogBlur)" opacity="0.8">
              <rect class="fog-path" x="-20%" y="80%" width="80%" height="25%" fill="#b4a9c9" style="animation-duration: 60s;"/>
              <rect class="fog-path" x="40%" y="85%" width="80%" height="20%" fill="#b4a9c9" style="animation-duration: 45s; animation-delay: 1s;"/>
            </g>
          </svg>
        </div>
      
        <div class="layer layer-fg" bind:this={fg}>
          <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
             <g opacity="0.6">
              <path class="constellation-path" pathLength="1" d="M400 250 L 550 350 L 600 500" stroke="white" stroke-width="0.5" />
              <circle cx="400" cy="250" r="2" fill="white"/>
              <circle cx="550" cy="350" r="3" fill="white"/>
              <circle cx="600" cy="500" r="2" fill="white"/>
              <path class="constellation-path" pathLength="1" d="M1500 150 L 1650 220 L 1550 350 L 1400 300" stroke="white" stroke-width="0.5" style="animation-delay: 2s;"/>
              <circle cx="1500" cy="150" r="2" fill="white"/>
              <circle cx="1650" cy="220" r="1.5" fill="white"/>
              <circle cx="1550" cy="350" r="3" fill="white"/>
              <circle cx="1400" cy="300" r="2.5" fill="white"/>
              <path class="constellation-path" pathLength="1" d="M200 800 L 350 850 L 450 750" stroke="white" stroke-width="0.5" style="animation-delay: 4s;"/>
              <circle cx="200" cy="800" r="1.5" fill="white"/>
              <circle cx="350" cy="850" r="2.5" fill="white"/>
              <circle cx="450" cy="750" r="2" fill="white"/>
              <circle cx="100" cy="100" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="800" cy="200" r="1" fill="white" opacity="0.7"/>
              <circle cx="1200" cy="500" r="2" fill="white" opacity="0.9"/>
              <circle cx="1700" cy="900" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="900" cy="950" r="1" fill="white" opacity="0.6"/>
            </g>
          </svg>
        </div>
      </div>
      
      <style>
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
        }
      
        .layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      
        .layer-bg {
          z-index: 1;
        }
      
        .layer-aurora {
          z-index: 2;
        }
      
        .layer-mountains-distant {
          z-index: 3;
        }
      
        .layer-mountains-near {
          z-index: 4;
        }
      
        .layer-fog {
          z-index: 5;
        }
      
        .layer-fg {
          z-index: 6; 
        }
      
        @keyframes aurora-flow {
          0%, 100% { transform: translateX(-5%); }
          50% { transform: translateX(5%); }
        }
      
        .aurora-path {
          animation: aurora-flow 20s infinite ease-in-out;
        }
      
        @keyframes drift {
          from { transform: translateX(-20%); }
          to { transform: translateX(100%); }
        }
      
        .fog-path {
           animation: drift linear infinite;
        }
      
        @keyframes shooting-star {
          0% {
            opacity: 0;
            transform: translateX(0) translateY(0) scale(0.5);
          }
          30% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-400px) translateY(400px) scale(1);
          }
        }
      
        .shooting-star {
          stroke: white;
          stroke-width: 3px;
          stroke-linecap: round;
          opacity: 0;
          animation: shooting-star 8s ease-in-out infinite;
        }
      
        @keyframes twinkle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      
        .twinkle circle {
          animation: twinkle 10s infinite ease-in-out;
        }
      
        @keyframes draw {
          from {
            stroke-dashoffset: 1;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      
        .constellation-path {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: draw 15s ease-in-out infinite;
        }
      </style>
      