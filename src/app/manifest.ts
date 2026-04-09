import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Crypto Profit Calculator',
    short_name: 'Crypto',
    description: 'Bitcoin & Altcoin Profit Calculator',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#F59E0B',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
