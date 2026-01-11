<script>
  import './app.css';
  import Router from 'svelte-spa-router';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Contact from './pages/Contact.svelte';
  import News from './pages/News.svelte';

  const routes = {
    '/': Home,
    '/about': About,
    '/contact': Contact,
    '/news': News
  };
</script>

<Header />

<main>
  <Router {routes} />
</main>

<Footer />

