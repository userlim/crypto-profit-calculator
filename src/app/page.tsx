import type { Metadata } from 'next';
import Calculator from './calculator';

export const metadata: Metadata = {
  title: 'Crypto Profit Calculator – Free Cryptocurrency Profit/Loss Calculator',
  description: 'Calculate cryptocurrency profit and loss instantly. Free crypto profit calculator for Bitcoin, Ethereum, and 1000+ cryptocurrencies. SEO-optimized for highest visibility.',
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
      </main>
    </>
  );
}
