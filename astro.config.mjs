import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

export default defineConfig({
    site: 'https://nikdelvin.github.io',
    base: '/astroui',
    integrations: [tailwind()]
})
