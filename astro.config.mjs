import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';

export default defineConfig({
  site: 'https://astro-frontend-masters-edenofjinx.netlify.app',
  integrations: [
    react({
      include: ['**/react/*']
    }),
    solid({
      include: ['**/solid/*'],
    }),
  ]
});