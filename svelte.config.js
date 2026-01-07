// svelte.config.js
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/svelte-for-vite#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),
};

export default config;
