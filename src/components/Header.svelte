<script>
  import { link, location } from 'svelte-spa-router';

  let menuOpen = false;
  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }

  let lastScrollY = 0;
  let scrollingUp = false;
  let atTop = true;

  function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      scrollingUp = false;
    } else {
      scrollingUp = true;
    }

    lastScrollY = currentScrollY;
    atTop = currentScrollY < 50;
  }

  function isActive(path) {
    return $location === path || ($location === '/' && path === '/');
  }
</script>

<svelte:window on:scroll={handleScroll} />

<header 
  class="site-header"
  class:hidden={!scrollingUp && !atTop && !menuOpen}
  class:scrolled={!atTop}
>
  <div class="container">
    <div class="header-inner">
      <div class="logo">
        <a href="/" use:link>
          <img src="/auralab.png" alt="AuraLAB" />
        </a>
      </div>

      <nav class="main-nav {menuOpen ? 'active' : ''}">
        <ul>
          <li><a href="/" use:link class:active={isActive('/')} on:click={closeMenu}>Home</a></li>
          <li><a href="/about" use:link class:active={isActive('/about')} on:click={closeMenu}>About us</a></li>
          <li><a href="/news" use:link class:active={isActive('/news')} on:click={closeMenu}>News</a></li>
          <li><a href="/contact" use:link class:active={isActive('/contact')} on:click={closeMenu}>Contact us</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <a href="/contact" use:link class="btn btn-primary">Get Started</a>
        <a href="/about" use:link class="btn btn-secondary">Our Story</a>
      </div>

      <button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle Menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
  </div>
</header>

<style>
  .site-header {
    background: var(--background-light);
    border-bottom: 1px solid var(--border-color);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: transform 0.4s cubic-bezier(.22,.61,.36,1), background-color 0.4s ease;
    transform: translateY(0);
  }

  .site-header.scrolled {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
  }

  .site-header.hidden {
    transform: translateY(-100%);
  }

  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo img {
    height: 35px;
    display: block;
  }

 .main-nav a {
  position: relative;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.3s;
}

.main-nav a.active {
  color: var(--primary-purple);
}

.main-nav a::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #5622d2, #4a1fb5);
  transition: width 0.3s ease;
}

.main-nav a:hover::after, .main-nav a.active::after {
  width: 80%;
}
.main-nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

  .header-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1001;
  }

  .menu-toggle .bar {
    display: block;
    width: 25px;
    height: 2px;
    background-color: var(--text-main);
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 850px) {
    .main-nav {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: white;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    
    .main-nav.active {
      display: flex;
    }

    .main-nav ul {
      flex-direction: column;
      gap: 2.5rem;
    }

    .main-nav a {
      font-size: 1.5rem;
    }

    .header-actions {
      display: none; /* Hiding buttons on mobile for simplicity, as per many modern designs */
    }

    .menu-toggle {
      display: block;
    }
  }
</style>

