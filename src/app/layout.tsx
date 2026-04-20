import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Crypto Profit Calculator (Free, 2026) – Bitcoin & Altcoin ROI',
  description: 'Calculate crypto profits instantly. Free 2026 calculator for Bitcoin, Ethereum & 1000+ coins. See your ROI, gains, and investment returns in real-time.',
  keywords: 'crypto profit calculator, bitcoin profit calculator, crypto tax calculator, bitcoin investment calculator, crypto roi calculator, ethereum profit calculator, crypto gains calculator, bitcoin return calculator, altcoin profit calculator, crypto loss calculator, how much is my crypto worth, bitcoin investment return, crypto portfolio calculator, bitcoin dollar cost average calculator, crypto trading profit',
  metadataBase: new URL('https://bitcoin-profit-calculator.vercel.app'),
  openGraph: {
    title: 'Crypto Profit Calculator (Free, 2026) – Bitcoin & Altcoin ROI',
    description: 'Calculate crypto profits instantly. Free 2026 calculator for Bitcoin, Ethereum & 1000+ coins. See your ROI, gains, and investment returns in real-time.',
    url: 'https://bitcoin-profit-calculator.vercel.app',
    siteName: 'Crypto Profit Calculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Profit Calculator',
    description: 'Calculate crypto profits instantly. Free 2026 calculator for Bitcoin, Ethereum & 1000+ coins. See your ROI, gains, and investment returns in real-time.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: { icon: '/favicon.svg' },
  alternates: {
    canonical: 'https://bitcoin-profit-calculator.vercel.app',
    languages: {
      'en': 'https://bitcoin-profit-calculator.vercel.app',
      'x-default': 'https://bitcoin-profit-calculator.vercel.app',
    },
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
              {/* BreadcrumbList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://bitcoin-profit-calculator.vercel.app"}, {"@type": "ListItem", "position": 2, "name": "Crypto Profit Calculator", "item": "https://bitcoin-profit-calculator.vercel.app"}]})
        }} />
        {/* Organization & WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "name": "Crypto Profit Calculator", "url": "https://bitcoin-profit-calculator.vercel.app", "publisher": {"@type": "Organization", "name": "UtiliCalc Tools", "url": "https://utilicalc.vercel.app", "logo": {"@type": "ImageObject", "url": "https://bitcoin-profit-calculator.vercel.app/favicon.svg"}}, "potentialAction": {"@type": "SearchAction", "target": "https://bitcoin-profit-calculator.vercel.app/?q={search_term_string}", "query-input": "required name=search_term_string"}})
        }} />
        {/* Preconnect & DNS-Prefetch Hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/* Speakable Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["h1", ".keyword-seo-section p"]}})
        }} />
</head>
      <body>
        {children}
        <footer className="border-t border-white/5 py-6 text-center text-sm text-[var(--text-secondary)] bg-black/20 backdrop-blur-sm">
          
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <span className="text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-wider">Related Free Tools:</span>
                <a href="https://currency-exchange-calculator-wheat.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">Currency Exchange Converter</a>
                <a href="https://gold-price-today-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">Gold Price Calculator</a>
                <a href="https://inflation-rate-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">Inflation Rate Calculator</a>
                <a href="https://tariff-calculator-app.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">US Tariff Cost Calculator</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">UtiliCalc All-in-One Tools</a>
            </div>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="/privacy-policy" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">Privacy Policy</a>
            <a href="/terms" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">Terms of Service</a>
          </div>
          &copy; 2026 Bitcoin Profit Calculator. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
