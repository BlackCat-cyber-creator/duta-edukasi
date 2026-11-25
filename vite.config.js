import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: false,
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        // Hanya kerangka aset inti yang diunduh di awal; HTML halaman dan paket soal dimuat sesuai rute.
        globPatterns: [
          'assets/index-*.{js,css}',
          'assets/rolldown-runtime-*.js',
          'assets/vendor-react-*.js',
          'assets/vendor-icons-*.js',
          'assets/vendor-katex-*.css'
        ],
        // Halaman dibuka dari jaringan (HTML prerender per bab); salinannya dipakai saat offline.
        navigateFallback: null,
        runtimeCaching: [
          {
            urlPattern: ({ request, url }) => request.mode === 'navigate' && !url.pathname.startsWith('/api/'),
            handler: 'NetworkFirst',
            options: { cacheName: 'halaman', networkTimeoutSeconds: 4, expiration: { maxEntries: 60 } }
          },
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/assets/'),
            handler: 'CacheFirst',
            options: { cacheName: 'aset', expiration: { maxEntries: 150, maxAgeSeconds: 60 * 60 * 24 * 60 } }
          }
        ]
      },
      includeAssets: ['brand/favicon.svg', 'brand/apple-touch-icon.png', 'brand/logo-monogram.svg'],
      manifest: {
        name: 'Duta e-dukasi',
        short_name: 'Duta e-dukasi',
        description: 'Portal Belajar & Paket Soal Matematika, IPA, Fisika, Kimia & Biologi (Kelas 4–12) serta Olimpiade',
        theme_color: '#12337A',
        icons: [
          {
            src: '/brand/favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: '/brand/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    host: true,
    port: 5173
  },
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.{test,spec}.{js,mjs,cjs,ts}']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom') || id.includes('react-dom') || id.includes('/react/')) {
              return 'vendor-react';
            }
            if (id.includes('firebase')) {
              return 'vendor-firebase';
            }
            if (id.includes('katex')) {
              return 'vendor-katex';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
          }
        }
      }
    },
    chunkSizeWarningLimit: 800
  }
})
