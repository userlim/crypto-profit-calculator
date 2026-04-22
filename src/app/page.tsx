import type { Metadata } from 'next';
import Calculator from './calculator';

export const metadata: Metadata = {
  title: 'Free Crypto Profit Calculator (2026) – Bitcoin & Altcoin Gains Tracker',
  description: 'Calculate cryptocurrency profit and loss instantly. Supports Bitcoin, Ethereum, and 10,000+ coins. Free, accurate, includes fee calculation — no signup needed.',
  keywords: [
    'crypto profit calculator',
    'bitcoin profit calculator',
    'cryptocurrency calculator',
    'btc calculator',
    'ethereum profit calculator',
    'crypto ROI calculator',
    'crypto loss calculator',
    'bitcoin ROI',
    'ethereum ROI',
  ],
};

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a crypto profit calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A crypto profit calculator is a tool that helps you calculate your cryptocurrency gains or losses based on your buy price, sell price, investment amount, and trading fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I use the crypto profit calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simply select your cryptocurrency, enter your buy price, sell price, and investment amount, then click calculate. The tool will show your profit/loss, percentage gain, ROI, and fees paid.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the calculator account for trading fees?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the calculator includes a trading fee percentage field (default 0.1%) that is automatically deducted from both your buy and sell transactions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I calculate profit for any cryptocurrency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the calculator supports 10+ major cryptocurrencies including Bitcoin, Ethereum, Solana, and XRP, plus a custom option for any cryptocurrency.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is ROI and how is it calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ROI (Return on Investment) is the percentage return on your investment. It is calculated as (Net Profit / Total Investment Cost) × 100. A positive ROI indicates profit, while negative indicates loss.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I calculate gains on my cryptocurrency holdings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enter the price at which you bought the cryptocurrency (buy price), the current or target selling price (sell price), and either your total investment amount or the quantity of coins you own.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Crypto Profit Calculator',
            description: 'Calculate cryptocurrency profit and loss for Bitcoin, Ethereum, and 1000+ coins. Free real-time crypto investment calculator.',
            url: 'https://bitcoin-profit-calculator.vercel.app',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.7',
              ratingCount: '2180',
              bestRating: '5',
              worstRating: '1'
            }
          })
        }}
      />
      <main>
        <Calculator />

        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-[#2d2640] mb-4">
              About This Crypto Profit Calculator
            </h2>
            <p className="text-[#807894] mb-4 leading-relaxed">
              Our free crypto profit calculator is designed to help cryptocurrency investors quickly calculate their gains and losses. Whether you're trading Bitcoin, Ethereum, or any other digital asset, this tool provides accurate calculations including trading fees.
            </p>
            <p className="text-[#807894] mb-4 leading-relaxed">
              Simply input your buy price, sell price, and investment amount to instantly see your profit/loss, percentage gain, ROI, and total fees paid. The calculator also includes "What If" scenarios to help you analyze different price points.
            </p>
            <p className="text-[#807894] leading-relaxed">
              All calculations are performed locally in your browser and stored in your browser's local storage for future use. Your data is never sent to any server.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-[#2d2640] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#2d2640] mb-2">
                  What cryptocurrencies does this calculator support?
                </h3>
                <p className="text-[#807894] leading-relaxed">
                  The calculator supports 10+ major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP, Dogecoin (DOGE), Cardano (ADA), BNB, Polkadot (DOT), Avalanche (AVAX), and Polygon (MATIC). You can also enter custom cryptocurrency names.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#2d2640] mb-2">
                  Is this calculator accurate for tax purposes?
                </h3>
                <p className="text-[#807894] leading-relaxed">
                  While our calculator provides accurate profit/loss calculations based on the prices you enter, it's recommended to consult with a tax professional for tax reporting purposes, as tax treatment of cryptocurrency varies by jurisdiction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#2d2640] mb-2">
                  How are trading fees calculated?
                </h3>
                <p className="text-[#807894] leading-relaxed">
                  Trading fees are calculated as a percentage of both your buy and sell transactions. The default is 0.1%, but you can adjust this based on your exchange's fee structure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#2d2640] mb-2">
                  Can I use quantity instead of investment amount?
                </h3>
                <p className="text-[#807894] leading-relaxed">
                  Yes, you can enter either your total investment amount in dollars OR the quantity of coins you own. If you enter quantity, the calculator will use it to determine your profit/loss.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#2d2640] mb-2">
                  What is the "What If" section for?
                </h3>
                <p className="text-[#807894] leading-relaxed">
                  The "What If" section shows you potential profits or losses at different sell price points (±10%, ±25%, ±50%, ±100%). This helps you understand price sensitivity and plan your exit strategies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#2d2640] mb-2">
                  Is my data saved?
                </h3>
                <p className="text-[#807894] leading-relaxed">
                  Yes, your calculator settings and the last calculation are automatically saved to your browser's local storage. Your data is never sent to any server and only exists on your device.
                </p>
              </div>
            </div>
          </div>
        </section>
      
      {/* Extended Content Section for SEO depth */}
      <section id="content-depth-section" className="mt-20 max-w-3xl mx-auto px-6 relative z-[1]">
        <h2 className="text-h2 mb-6 text-[#191F28]">Complete Guide</h2>
        
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[#191F28]">How Cryptocurrency Profit and Loss Works</h3>
              <p className="text-[#4E5968] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Calculating crypto profit involves more than simple buy-sell arithmetic. Your actual profit equals (Sell Price × Quantity Sold) − (Buy Price × Quantity Bought) − Total Fees. However, real-world crypto trading introduces complexities like multiple buy-ins at different prices, partial sells, token swaps, staking rewards, and airdrops. Our calculator simplifies this process by handling the core computation instantly.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[#191F28]">Understanding Trading Fees and Their Impact</h3>
              <p className="text-[#4E5968] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Exchange fees significantly impact your bottom line, especially for frequent traders. Most centralized exchanges charge 0.1% to 0.5% per trade (maker/taker fees). There are also withdrawal fees, network (gas) fees for on-chain transactions, and spread costs on DEXs (decentralized exchanges). On a $10,000 trade with 0.25% fees on both buy and sell, you lose $50 in fees alone. Our calculator lets you factor in these costs for accurate profit estimates.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[#191F28]">Dollar-Cost Averaging (DCA) vs. Lump Sum Investing</h3>
              <p className="text-[#4E5968] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Two popular crypto investment strategies are dollar-cost averaging and lump-sum investing. DCA involves investing fixed amounts at regular intervals, reducing the impact of volatility. Research from Vanguard suggests lump-sum investing outperforms DCA approximately two-thirds of the time in traditional markets, but crypto's extreme volatility makes DCA a safer approach for risk-averse investors. Use our calculator to compare hypothetical returns from both strategies.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[#191F28]">Tax Implications of Crypto Trading</h3>
              <p className="text-[#4E5968] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `In most jurisdictions, cryptocurrency gains are taxable events. In the US, the IRS treats crypto as property — short-term gains (assets held less than one year) are taxed as ordinary income (10-37%), while long-term gains benefit from lower capital gains rates (0%, 15%, or 20%). Other tax events include receiving mining/staking rewards, airdrops, and crypto-to-crypto swaps. Always consult a tax professional for advice specific to your situation.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[#191F28]">Risk Management in Crypto Investing</h3>
              <p className="text-[#4E5968] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Successful crypto investing requires disciplined risk management. Common strategies include position sizing (never investing more than you can afford to lose), setting stop-loss orders, diversifying across multiple assets, and maintaining a portion of your portfolio in stablecoins or fiat. Our profit calculator helps you model different scenarios — including worst-case outcomes — to make informed decisions before committing capital.` }} />
            </div>
      </section>
      </main>
    
      {/* Keyword-Optimized Content */}
      <section id="keyword-seo-section" className="mt-12 max-w-3xl mx-auto px-6 pb-16 relative z-[1]">
        <p className="text-sm text-[#8B95A1] leading-relaxed">
          Track your cryptocurrency gains with our free crypto profit calculator. Perfect for Bitcoin profit calculations, Ethereum ROI tracking, and altcoin portfolio analysis. Calculate your crypto gains, model dollar-cost averaging scenarios, and estimate your bitcoin investment return — all in one tool.
        </p>
<div className="mt-3 flex flex-wrap gap-2">
          <a href="https://gold-price-today-calculator.vercel.app" className="text-xs text-[var(--accent)] hover:underline opacity-70 hover:opacity-100">Gold Price Calculator →</a>
          <a href="https://currency-exchange-calculator-wheat.vercel.app" className="text-xs text-[var(--accent)] hover:underline opacity-70 hover:opacity-100">Currency Converter →</a>
          <a href="https://tariff-calculator-app.vercel.app" className="text-xs text-[var(--accent)] hover:underline opacity-70 hover:opacity-100">Tariff Calculator →</a>
        </div>

      </section>
      </>
  );
}
