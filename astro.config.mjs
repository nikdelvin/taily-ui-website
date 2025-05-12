import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
    site: 'https://tailyui.by.nikdelv.in',
    integrations: [tailwind()],
    devToolbar: {
        enabled: false
    }
})
