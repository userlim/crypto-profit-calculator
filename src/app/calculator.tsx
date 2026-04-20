'use client';

import { useState, useEffect } from 'react';

interface CalculatorState {
  crypto: string;
  buyPrice: string;
  sellPrice: string;
  investmentAmount: string;
  quantity: string;
  feePercentage: string;
  language: string;
}

interface WhatIfScenario {
  label: string;
  percentage: number;
}

const CRYPTOCURRENCIES = [
  { name: 'Bitcoin', symbol: 'BTC' },
  { name: 'Ethereum', symbol: 'ETH' },
  { name: 'Solana', symbol: 'SOL' },
  { name: 'XRP', symbol: 'XRP' },
  { name: 'Dogecoin', symbol: 'DOGE' },
  { name: 'Cardano', symbol: 'ADA' },
  { name: 'BNB', symbol: 'BNB' },
  { name: 'Polkadot', symbol: 'DOT' },
  { name: 'Avalanche', symbol: 'AVAX' },
  { name: 'Polygon', symbol: 'MATIC' },
];

const LANGUAGES: Record<string, Record<string, string>> = {
  en: {
    title: 'Crypto Profit Calculator',
    crypto: 'Cryptocurrency',
    buyPrice: 'Buy Price',
    sellPrice: 'Sell Price',
    investmentAmount: 'Investment Amount ($)',
    quantity: 'Quantity (Optional)',
    feePercentage: 'Trading Fee %',
    calculate: 'Calculate',
    profit: 'Profit/Loss',
    profitPercent: 'Profit/Loss %',
    roi: 'ROI',
    feesPaid: 'Fees Paid',
    netProfit: 'Net Profit',
    whatIf: 'What If Scenarios',
    custom: 'Custom Cryptocurrency',
    enterCustom: 'Enter custom crypto name',
    green: '#10b981',
    red: '#ef4444',
  },
  es: {
    title: 'Calculadora de Ganancias Crypto',
    crypto: 'Criptomoneda',
    buyPrice: 'Precio de Compra',
    sellPrice: 'Precio de Venta',
    investmentAmount: 'Monto de Inversión ($)',
    quantity: 'Cantidad (Opcional)',
    feePercentage: 'Comisión de Trading %',
    calculate: 'Calcular',
    profit: 'Ganancia/Pérdida',
    profitPercent: 'Ganancia/Pérdida %',
    roi: 'ROI',
    feesPaid: 'Comisiones Pagadas',
    netProfit: 'Ganancia Neta',
    whatIf: 'Escenarios "¿Y si?"',
    custom: 'Criptomoneda Personalizada',
    enterCustom: 'Ingresa nombre personalizado',
    green: '#10b981',
    red: '#ef4444',
  },
  fr: {
    title: 'Calculateur de Profit Crypto',
    crypto: 'Crypto-monnaie',
    buyPrice: 'Prix d\'achat',
    sellPrice: 'Prix de vente',
    investmentAmount: 'Montant d\'investissement ($)',
    quantity: 'Quantité (Optionnel)',
    feePercentage: 'Frais de trading %',
    calculate: 'Calculer',
    profit: 'Profit/Perte',
    profitPercent: 'Profit/Perte %',
    roi: 'ROI',
    feesPaid: 'Frais payés',
    netProfit: 'Profit net',
    whatIf: 'Scénarios "Et si"',
    custom: 'Crypto personnalisée',
    enterCustom: 'Entrez un nom personnalisé',
    green: '#10b981',
    red: '#ef4444',
  },
  de: {
    title: 'Krypto-Gewinn-Rechner',
    crypto: 'Kryptowährung',
    buyPrice: 'Kaufpreis',
    sellPrice: 'Verkaufspreis',
    investmentAmount: 'Investitionsbetrag ($)',
    quantity: 'Menge (Optional)',
    feePercentage: 'Handelsgebühr %',
    calculate: 'Berechnen',
    profit: 'Gewinn/Verlust',
    profitPercent: 'Gewinn/Verlust %',
    roi: 'ROI',
    feesPaid: 'Gezahlte Gebühren',
    netProfit: 'Nettogewinn',
    whatIf: 'What-If-Szenarien',
    custom: 'Benutzerdefinierte Krypto',
    enterCustom: 'Geben Sie einen benutzerdefinierten Namen ein',
    green: '#10b981',
    red: '#ef4444',
  },
  it: {
    title: 'Calcolatore Profitti Crypto',
    crypto: 'Criptovaluta',
    buyPrice: 'Prezzo di acquisto',
    sellPrice: 'Prezzo di vendita',
    investmentAmount: 'Importo investito ($)',
    quantity: 'Quantità (Facoltativo)',
    feePercentage: 'Commissione trading %',
    calculate: 'Calcola',
    profit: 'Profitto/Perdita',
    profitPercent: 'Profitto/Perdita %',
    roi: 'ROI',
    feesPaid: 'Commissioni pagate',
    netProfit: 'Profitto netto',
    whatIf: 'Scenari "E se"',
    custom: 'Crypto personalizzato',
    enterCustom: 'Inserisci nome personalizzato',
    green: '#10b981',
    red: '#ef4444',
  },
  pt: {
    title: 'Calculadora de Lucros Crypto',
    crypto: 'Criptomoeda',
    buyPrice: 'Preço de Compra',
    sellPrice: 'Preço de Venda',
    investmentAmount: 'Valor do Investimento ($)',
    quantity: 'Quantidade (Opcional)',
    feePercentage: 'Taxa de Negociação %',
    calculate: 'Calcular',
    profit: 'Lucro/Perda',
    profitPercent: 'Lucro/Perda %',
    roi: 'ROI',
    feesPaid: 'Taxas Pagas',
    netProfit: 'Lucro Líquido',
    whatIf: 'Cenários "E se"',
    custom: 'Crypto Personalizado',
    enterCustom: 'Digite um nome personalizado',
    green: '#10b981',
    red: '#ef4444',
  },
  ja: {
    title: 'クリプト利益計算機',
    crypto: '暗号通貨',
    buyPrice: '買値',
    sellPrice: '売値',
    investmentAmount: '投資額 ($)',
    quantity: '数量 (オプション)',
    feePercentage: '取引手数料 %',
    calculate: '計算',
    profit: '利益/損失',
    profitPercent: '利益/損失 %',
    roi: 'ROI',
    feesPaid: '支払った手数料',
    netProfit: '純利益',
    whatIf: 'シナリオ',
    custom: 'カスタム暗号',
    enterCustom: 'カスタム名を入力',
    green: '#10b981',
    red: '#ef4444',
  },
  zh: {
    title: '加密货币利润计算器',
    crypto: '加密货币',
    buyPrice: '买入价格',
    sellPrice: '卖出价格',
    investmentAmount: '投资金额 ($)',
    quantity: '数量 (可选)',
    feePercentage: '交易费 %',
    calculate: '计算',
    profit: '利润/损失',
    profitPercent: '利润/损失 %',
    roi: 'ROI',
    feesPaid: '已支付费用',
    netProfit: '净利润',
    whatIf: '如果场景',
    custom: '自定义加密',
    enterCustom: '输入自定义名称',
    green: '#10b981',
    red: '#ef4444',
  },
  ko: {
    title: '암호화폐 수익 계산기',
    crypto: '암호화폐',
    buyPrice: '매입 가격',
    sellPrice: '매도 가격',
    investmentAmount: '투자 금액 ($)',
    quantity: '수량 (선택사항)',
    feePercentage: '거래 수수료 %',
    calculate: '계산',
    profit: '수익/손실',
    profitPercent: '수익/손실 %',
    roi: 'ROI',
    feesPaid: '지불된 수수료',
    netProfit: '순이익',
    whatIf: '만약 시나리오',
    custom: '사용자 정의 암호',
    enterCustom: '사용자 정의 이름 입력',
    green: '#10b981',
    red: '#ef4444',
  },
  ru: {
    title: 'Калькулятор прибыли крипто',
    crypto: 'Криптовалюта',
    buyPrice: 'Цена покупки',
    sellPrice: 'Цена продажи',
    investmentAmount: 'Сумма инвестиции ($)',
    quantity: 'Количество (Опционально)',
    feePercentage: 'Комиссия торговли %',
    calculate: 'Рассчитать',
    profit: 'Прибыль/Убыток',
    profitPercent: 'Прибыль/Убыток %',
    roi: 'ROI',
    feesPaid: 'Оплаченные комиссии',
    netProfit: 'Чистая прибыль',
    whatIf: 'Сценарии "Что если"',
    custom: 'Пользовательская крипто',
    enterCustom: 'Введите пользовательское имя',
    green: '#10b981',
    red: '#ef4444',
  },
  ar: {
    title: 'حاسبة الأرباح المشفرة',
    crypto: 'العملة المشفرة',
    buyPrice: 'سعر الشراء',
    sellPrice: 'سعر البيع',
    investmentAmount: 'مبلغ الاستثمار ($)',
    quantity: 'الكمية (اختياري)',
    feePercentage: 'رسوم التداول %',
    calculate: 'احسب',
    profit: 'الربح / الخسارة',
    profitPercent: 'الربح / الخسارة %',
    roi: 'العائد على الاستثمار',
    feesPaid: 'الرسوم المدفوعة',
    netProfit: 'صافي الربح',
    whatIf: 'سيناريوهات "ماذا لو"',
    custom: 'عملة مشفرة مخصصة',
    enterCustom: 'أدخل اسما مخصصا',
    green: '#10b981',
    red: '#ef4444',
  },
  hi: {
    title: 'क्रिप्टो लाभ कैलकुलेटर',
    crypto: 'क्रिप्टोकरेंसी',
    buyPrice: 'खरीद मूल्य',
    sellPrice: 'विक्रय मूल्य',
    investmentAmount: 'निवेश राशि ($)',
    quantity: 'मात्रा (वैकल्पिक)',
    feePercentage: 'ट्रेडिंग फीस %',
    calculate: 'गणना करें',
    profit: 'लाभ / हानि',
    profitPercent: 'लाभ / हानि %',
    roi: 'ROI',
    feesPaid: 'भुगतान की गई फीस',
    netProfit: 'शुद्ध लाभ',
    whatIf: '"क्या अगर" परिदृश्य',
    custom: 'कस्टम क्रिप्टो',
    enterCustom: 'कस्टम नाम दर्ज करें',
    green: '#10b981',
    red: '#ef4444',
  },
  tr: {
    title: 'Kripto Kar Hesaplayıcı',
    crypto: 'Kripto Para',
    buyPrice: 'Alış Fiyatı',
    sellPrice: 'Satış Fiyatı',
    investmentAmount: 'Yatırım Tutarı ($)',
    quantity: 'Miktar (İsteğe Bağlı)',
    feePercentage: 'İşlem Ücreti %',
    calculate: 'Hesapla',
    profit: 'Kar/Zarar',
    profitPercent: 'Kar/Zarar %',
    roi: 'ROI',
    feesPaid: 'Ödenen Ücretler',
    netProfit: 'Net Kar',
    whatIf: '"Ya da" Senaryoları',
    custom: 'Özel Kripto',
    enterCustom: 'Özel ad girin',
    green: '#10b981',
    red: '#ef4444',
  },
  nl: {
    title: 'Crypto Winstcalculator',
    crypto: 'Cryptocurrency',
    buyPrice: 'Aankoopprijs',
    sellPrice: 'Verkoopprijs',
    investmentAmount: 'Investeringsbedrag ($)',
    quantity: 'Hoeveelheid (Optioneel)',
    feePercentage: 'Handelskosten %',
    calculate: 'Berekenen',
    profit: 'Winst/Verlies',
    profitPercent: 'Winst/Verlies %',
    roi: 'ROI',
    feesPaid: 'Betaalde Kosten',
    netProfit: 'Nettowinst',
    whatIf: '"Wat als" Scenario\'s',
    custom: 'Aangepaste Crypto',
    enterCustom: 'Voer aangepaste naam in',
    green: '#10b981',
    red: '#ef4444',
  },
  pl: {
    title: 'Kalkulator Zysku Kryptowalut',
    crypto: 'Kryptowaluta',
    buyPrice: 'Cena zakupu',
    sellPrice: 'Cena sprzedaży',
    investmentAmount: 'Kwota inwestycji ($)',
    quantity: 'Ilość (Opcjonalnie)',
    feePercentage: 'Opłata handlowa %',
    calculate: 'Oblicz',
    profit: 'Zysk/Strata',
    profitPercent: 'Zysk/Strata %',
    roi: 'ROI',
    feesPaid: 'Opłacone opłaty',
    netProfit: 'Zysk netto',
    whatIf: 'Scenariusze "Co jeśli"',
    custom: 'Niestandardowa kryptowaluta',
    enterCustom: 'Wprowadź niestandardową nazwę',
    green: '#10b981',
    red: '#ef4444',
  },
};

const WHAT_IF_SCENARIOS: WhatIfScenario[] = [
  { label: '+10%', percentage: 10 },
  { label: '+25%', percentage: 25 },
  { label: '+50%', percentage: 50 },
  { label: '+100%', percentage: 100 },
  { label: '-10%', percentage: -10 },
  { label: '-25%', percentage: -25 },
  { label: '-50%', percentage: -50 },
];

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>({
    crypto: 'BTC',
    buyPrice: '',
    sellPrice: '',
    investmentAmount: '',
    quantity: '',
    feePercentage: '0.1',
    language: 'en',
  });

  const [customCrypto, setCustomCrypto] = useState('');
  const [results, setResults] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  const t = LANGUAGES[state.language] || LANGUAGES.en;

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('cryptoCalcState');
    if (saved) {
      try {
        setState(JSON.parse(saved));
      } catch {}
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('cryptoCalcState', JSON.stringify(state));
    }
  }, [state, mounted]);

  const handleInputChange = (field: keyof CalculatorState, value: string) => {
    setState({ ...state, [field]: value });
    setResults(null);
  };

  const calculate = () => {
    const buyPrice = parseFloat(state.buyPrice);
    const sellPrice = parseFloat(state.sellPrice);
    const investmentAmount = parseFloat(state.investmentAmount);
    const qty = parseFloat(state.quantity);
    const feePercent = parseFloat(state.feePercentage) || 0;

    if (!buyPrice || !sellPrice || (!investmentAmount && !qty)) {
      alert('Please fill in all required fields');
      return;
    }

    let quantity = qty || investmentAmount / buyPrice;
    const buyFee = (investmentAmount || buyPrice * quantity) * (feePercent / 100);
    const totalBuyCost = (investmentAmount || buyPrice * quantity) + buyFee;

    const grossProceeds = sellPrice * quantity;
    const sellFee = grossProceeds * (feePercent / 100);
    const netProceeds = grossProceeds - sellFee;

    const totalFees = buyFee + sellFee;
    const profit = netProceeds - totalBuyCost;
    const profitPercent = (profit / totalBuyCost) * 100;
    const roi = profitPercent;

    setResults({
      quantity: quantity.toFixed(8),
      profit: profit.toFixed(2),
      profitPercent: profitPercent.toFixed(2),
      roi: roi.toFixed(2),
      feesPaid: totalFees.toFixed(2),
      netProfit: (netProceeds - totalFees).toFixed(2),
    });
  };

  const calculateWhatIf = (sellPriceModifier: number) => {
    const buyPrice = parseFloat(state.buyPrice);
    const sellPrice = parseFloat(state.sellPrice);
    const investmentAmount = parseFloat(state.investmentAmount);
    const qty = parseFloat(state.quantity);
    const feePercent = parseFloat(state.feePercentage) || 0;

    if (!buyPrice || !sellPrice || (!investmentAmount && !qty)) return 0;

    let quantity = qty || investmentAmount / buyPrice;
    const modifiedSellPrice = sellPrice * (1 + sellPriceModifier / 100);

    const buyFee = (investmentAmount || buyPrice * quantity) * (feePercent / 100);
    const totalBuyCost = (investmentAmount || buyPrice * quantity) + buyFee;

    const grossProceeds = modifiedSellPrice * quantity;
    const sellFee = grossProceeds * (feePercent / 100);
    const netProceeds = grossProceeds - sellFee;

    return netProceeds - totalBuyCost;
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefcff] via-[#f5e6ff] to-[#fefcff] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2d2640] mb-2">
            {t.title}
          </h1>
          <p className="text-lg text-[#807894]">
            Calculate your cryptocurrency profits instantly
          </p>
        </div>

        <div className="card mb-8">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-[#2d2640]">Calculator</h2>
            <select
              value={state.language}
              onChange={(e) =>
                handleInputChange('language', e.target.value)
              }
              className="input"
              style={{ width: '200px' }}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="it">Italiano</option>
              <option value="pt">Português</option>
              <option value="ja">日本語</option>
              <option value="zh">中文</option>
              <option value="ko">한국어</option>
              <option value="ru">Русский</option>
              <option value="ar">العربية</option>
              <option value="hi">हिन्दी</option>
              <option value="tr">Türkçe</option>
              <option value="nl">Nederlands</option>
              <option value="pl">Polski</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-[#2d2640] mb-2">
                {t.crypto}
              </label>
              <select
                value={state.crypto}
                onChange={(e) => {
                  handleInputChange('crypto', e.target.value);
                  setCustomCrypto('');
                }}
                className="input"
              >
                {CRYPTOCURRENCIES.map((c) => (
                  <option key={c.symbol} value={c.symbol}>
                    {c.name} ({c.symbol})
                  </option>
                ))}
                <option value="CUSTOM">Custom</option>
              </select>
              {state.crypto === 'CUSTOM' && (
                <input
                  type="text"
                  placeholder={t.enterCustom}
                  value={customCrypto}
                  onChange={(e) => setCustomCrypto(e.target.value)}
                  className="input mt-2"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2d2640] mb-2">
                {t.buyPrice} ($)
              </label>
              <input
                type="number"
                placeholder="0.00"
                value={state.buyPrice}
                onChange={(e) =>
                  handleInputChange('buyPrice', e.target.value)
                }
                className="input"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2d2640] mb-2">
                {t.sellPrice} ($)
              </label>
              <input
                type="number"
                placeholder="0.00"
                value={state.sellPrice}
                onChange={(e) =>
                  handleInputChange('sellPrice', e.target.value)
                }
                className="input"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2d2640] mb-2">
                {t.investmentAmount}
              </label>
              <input
                type="number"
                placeholder="0.00"
                value={state.investmentAmount}
                onChange={(e) =>
                  handleInputChange('investmentAmount', e.target.value)
                }
                className="input"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2d2640] mb-2">
                {t.quantity}
              </label>
              <input
                type="number"
                placeholder="0.00000000"
                value={state.quantity}
                onChange={(e) =>
                  handleInputChange('quantity', e.target.value)
                }
                className="input"
                step="0.00000001"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2d2640] mb-2">
                {t.feePercentage}
              </label>
              <input
                type="number"
                placeholder="0.1"
                value={state.feePercentage}
                onChange={(e) =>
                  handleInputChange('feePercentage', e.target.value)
                }
                className="input"
                step="0.01"
              />
            </div>
          </div>

          <button onClick={calculate} className="btn-primary w-full text-lg">
            {t.calculate}
          </button>
        </div>

        {results && (
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-[#2d2640] mb-6">
              Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6">
                <p className="text-sm text-[#807894] mb-2">
                  {t.profit}
                </p>
                <p
                  className="text-3xl font-extrabold"
                  style={{
                    color:
                      parseFloat(results.profit) >= 0 ? '#10b981' : '#ef4444',
                  }}
                >
                  ${results.profit}
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6">
                <p className="text-sm text-[#807894] mb-2">
                  {t.profitPercent}
                </p>
                <p
                  className="text-3xl font-extrabold"
                  style={{
                    color:
                      parseFloat(results.profitPercent) >= 0
                        ? '#10b981'
                        : '#ef4444',
                  }}
                >
                  {results.profitPercent}%
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6">
                <p className="text-sm text-[#807894] mb-2">{t.roi}</p>
                <p className="text-3xl font-extrabold text-blue-600">
                  {results.roi}%
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl p-6">
                <p className="text-sm text-[#807894] mb-2">
                  {t.feesPaid}
                </p>
                <p className="text-3xl font-extrabold text-amber-600">
                  ${results.feesPaid}
                </p>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-[#7c5cbf] to-[#b49ee8] rounded-xl p-6 text-white">
              <p className="text-sm opacity-90 mb-2">{t.netProfit}</p>
              <p className="text-4xl font-extrabold">${results.netProfit}</p>
            </div>
          </div>
        )}

        {results && (
          <div className="card">
            <h2 className="text-2xl font-bold text-[#2d2640] mb-6">
              {t.whatIf}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {WHAT_IF_SCENARIOS.map((scenario) => {
                const profit = calculateWhatIf(scenario.percentage);
                const isProfit = profit >= 0;
                return (
                  <div
                    key={scenario.label}
                    className="bg-gradient-to-br rounded-xl p-4 text-center"
                    style={{
                      background: isProfit
                        ? 'rgba(16, 185, 129, 0.1)'
                        : 'rgba(239, 68, 68, 0.1)',
                    }}
                  >
                    <p className="text-sm font-semibold text-[#807894] mb-2">
                      {scenario.label}
                    </p>
                    <p
                      style={{
                        color: isProfit ? '#10b981' : '#ef4444',
                      }}
                      className="font-bold text-lg"
                    >
                      ${profit.toFixed(2)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
