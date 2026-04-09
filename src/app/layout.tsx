import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Crypto Profit Calculator (Free, 2026) – Bitcoin & Altcoin ROI',
  description: 'Calculate crypto profits instantly. Free 2026 calculator for Bitcoin, Ethereum & 1000+ coins. See your ROI, gains, and investment returns in real-time.',
  metadataBase: new URL('https://bitcoin-profit-calculator.vercel.app'),
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
    url: 'https://bitcoin-profit-calculator.vercel.app',
    siteName: 'Crypto Profit Calculator',
    title: 'Crypto Profit Calculator (Free, 2026) – Bitcoin & Altcoin ROI',
    description: 'Calculate crypto profits instantly. Free 2026 calculator for Bitcoin, Ethereum & 1000+ coins. See your ROI, gains, and investment returns in real-time.',
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
    canonical: 'https://bitcoin-profit-calculator.vercel.app',
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
        <meta name="google-site-verification" content="hsjncRi9cl3tz3Otd6SJKurSt_V1bZ0AKO-bdWIGeHM" />
        <meta name="google-site-verification" content="ETO59LUETFhBHTx7GMun0GscvJgzLq2iGWdeAmh3e10" />
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous" strategy="afterInteractive" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7c5cbf" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P04TH8XJJ9" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P04TH8XJJ9');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <footer className="border-t border-gray-200 py-4 text-center text-sm text-gray-400">
          
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <span className="text-xs text-gray-400 font-semibold">Related Free Tools:</span>
                <a href="https://currency-exchange-calculator-wheat.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Currency Exchange Converter</a>
                <a href="https://gold-price-today-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Gold Price Calculator</a>
                <a href="https://inflation-rate-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Inflation Rate Calculator</a>
                <a href="https://tariff-calculator-app.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">US Tariff Cost Calculator</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">UtiliCalc All-in-One Tools</a>
            </div>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 text-xs">Privacy Policy</a>
            <a href="/terms" className="text-blue-600 hover:text-blue-800 text-xs">Terms of Service</a>
          </div>
          &copy; 2026 Bitcoin Profit Calculator. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
