<script>
  import './app.css';

  import Header from './components/Header.svelte';
  import Approach from './components/Approach.svelte';
  import GlobalPresence from './components/GlobalPresence.svelte';
  import ParallaxHero from './components/ParallaxHero.svelte';
  import Services from './components/Services.svelte';
  import HeroVisual from './components/HeroVisual.svelte';
  import Footer from './components/Footer.svelte';
</script>

<Header />

<main>
  <ParallaxHero />
  <Approach />
  <GlobalPresence />
  <HeroVisual />
  <Services />
</main>

<Footer />

