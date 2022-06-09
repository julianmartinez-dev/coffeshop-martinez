import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: [
        'favicon.png',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: 'CoffeShop Tienda de Café',
        short_name: 'CoffeShop',
        description: 'Tienda de venta de café y accesorios cafeteros',
        theme_color: '#0d0d0f',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      registerType: 'autoUpdate',
      sourcemap: true,
    }),
  ],
});
