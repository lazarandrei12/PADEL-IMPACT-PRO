import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// `import pic from "./shot.png?responsive"` -> { sources, img } for <Picture>:
// AVIF + WebP at 480/960/1280/1920px, so phones only download the size they need.
const RESPONSIVE = 'w=480;960;1280;1920&format=avif;webp&as=picture'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) =>
        new URLSearchParams(url.searchParams.has('responsive') ? RESPONSIVE : ''),
    }),
  ],
})
