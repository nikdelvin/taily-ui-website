import type { Config } from 'tailwindcss'
import { tailyUI } from 'taily-ui'

const config: Config = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {}
    },
    plugins: [tailyUI]
}
export default config
