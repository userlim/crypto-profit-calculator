import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Crypto Profit Calculator – Free Cryptocurrency Profit/Loss Calculator',
  description: 'Calculate cryptocurrency profit and loss instantly. Free crypto profit calculator for Bitcoin, Ethereum, and 1000+ cryptocurrencies.',
  metadataBase: new URL('https://crypto-profit-calculator.vercel.app'),
  keywords: [
    'crypto profit calculator',
    'bitcoin profit calculator',
    'cryptocurrency calculator',
    'crypto ROI calculator',
    'btc calculator',
    'ethereum profit calculator',
    'crypto loss calculator',
  ],
  authors: [{ name: 'Crypto Profit Calculator' }],
  creator: 'Crypto Profit Calculator',
  publisher: 'Crypto Profit Calculator',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://crypto-profit-calculator.vercel.app',
    siteName: 'Crypto Profit Calculator',
    title: 'Crypto Profit Calculator – Free Cryptocurrency Profit/Loss Calculator',
    description: 'Calculate cryptocurrency profit and loss instantly. Free crypto profit calculator for Bitcoin, Ethereum, and 1000+ cryptocurrencies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Crypto Profit Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Profit Calculator',
    description: 'Calculate cryptocurrency profit and loss instantly.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: 'https://crypto-profit-calculator.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7c5cbf" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P08T3SZDQH"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P08T3SZDQH');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
