import { useEffect, useRef } from 'react'

// SVG icon set — no emoji
const PlanIcon = ({ type }) => {
  const icons = {
    register: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    video: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    flight: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    ring: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  }
  return icons[type] ?? null
}

const plans = [
  {
    iconType: 'register',
    name: '入会・登録料',
    price: '55,000',
    unit: '円（税込）',
    description: '会員登録・プロフィール作成・マッチングシステムへのアクセス',
    features: ['プロフィール審査', '写真登録（最大20枚）', 'マッチングシステム利用権'],
    highlight: false,
    border: 'border-pastel-blue/40',
  },
  {
    iconType: 'video',
    name: 'オンラインお見合い料',
    price: '11,000',
    unit: '円 / 1回（税込）',
    description: 'ビデオ通話による初回お見合い。現地通訳スタッフが同席します。',
    features: ['ビデオ通話60分', '通訳スタッフ同席', 'アドバイスレポート付き'],
    highlight: false,
    border: 'border-pastel-mint/40',
  },
  {
    iconType: 'flight',
    name: 'ベトナム渡航パック',
    price: '275,000',
    unit: '円（税込）',
    description: '現地での実際のお見合い、観光案内、現地スタッフの全面サポートが含まれます。',
    features: ['現地5日間サポート', 'お見合い複数回設定', '観光・食事アテンド', 'ホテル手配サポート'],
    highlight: true,
    border: 'border-transparent',
  },
  {
    iconType: 'ring',
    name: '成婚料（成功報酬）',
    price: '770,000',
    unit: '円（税込）',
    description: '婚約成立時のみ発生する成功報酬。ビザ申請サポートまで含みます。',
    features: ['婚約成立時のみ', 'ビザ申請サポート', '入国準備サポート', '日本語教育（6ヶ月）'],
    highlight: false,
    border: 'border-pastel-beigeDeep/50',
  },
]

export default function Pricing() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible')
        })
      },
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" ref={sectionRef} className="py-24 bg-pastel-sky">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent-teal font-semibold tracking-wider text-xs uppercase">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black mt-3 mb-4 tracking-relaxed" style={{ color: '#1C2B2B' }}>
            明瞭・透明な料金体系
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed tracking-relaxed" style={{ color: '#5A6B6B' }}>
            隠れた費用は一切ありません。全ての費用を事前にご説明し、
            <br className="hidden sm:block" />
            ご納得いただいてから進めます。
          </p>
          <div className="mt-5 w-14 h-1 teal-gradient mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`animate-on-scroll relative rounded-4xl p-6 flex flex-col border shadow-md hover:-translate-y-1 transition-all duration-300 ${
                plan.highlight
                  ? 'teal-gradient shadow-accent-teal/25 hover:shadow-lg hover:shadow-accent-teal/30 ' + plan.border
                  : 'bg-white shadow-pastel-blueMid/20 hover:shadow-lg hover:shadow-pastel-blueMid/30 ' + plan.border
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-accent-teal text-[10px] font-black tracking-wider px-4 py-1 rounded-full shadow-sm uppercase border border-pastel-blueMid/30">
                  人気No.1
                </div>
              )}

              {/* Icon */}
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4 ${plan.highlight ? 'bg-white/20 text-white' : 'bg-pastel-mint text-accent-tealDark'}`}>
                <PlanIcon type={plan.iconType} />
              </div>

              <h3 className={`font-serif font-black text-sm mb-1 tracking-relaxed ${plan.highlight ? 'text-white' : ''}`}
                  style={!plan.highlight ? { color: '#1C2B2B' } : {}}>
                {plan.name}
              </h3>
              <div className="mb-3">
                <span className={`text-3xl font-black font-serif ${plan.highlight ? 'text-white' : 'text-accent-teal'}`}>
                  ¥{plan.price}
                </span>
                <span className={`text-xs ml-1 ${plan.highlight ? 'text-white/80' : ''}`}
                      style={!plan.highlight ? { color: '#8A9B9B' } : {}}>
                  {plan.unit}
                </span>
              </div>
              <p className={`text-xs leading-relaxed mb-5 tracking-relaxed ${plan.highlight ? 'text-white/85' : ''}`}
                 style={!plan.highlight ? { color: '#5A6B6B' } : {}}>
                {plan.description}
              </p>
              <ul className="mt-auto space-y-2">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${plan.highlight ? 'bg-white/20 text-white' : 'bg-pastel-mint text-accent-tealDark'}`}>
                      ✓
                    </span>
                    <span className={plan.highlight ? 'text-white/90 tracking-relaxed' : 'tracking-relaxed'}
                          style={!plan.highlight ? { color: '#5A6B6B' } : {}}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Total estimate */}
        <div className="mt-10 animate-on-scroll bg-white/80 backdrop-blur-sm border border-pastel-blueMid/40 rounded-4xl p-6 max-w-lg mx-auto text-center shadow-sm">
          <p className="text-xs mb-1 uppercase tracking-wider" style={{ color: '#8A9B9B' }}>成婚までの総額目安</p>
          <p className="text-accent-teal font-black text-4xl font-serif">¥1,111,000</p>
          <p className="text-xs mt-1 tracking-relaxed" style={{ color: '#8A9B9B' }}>（渡航費・滞在費は別途）</p>
        </div>
      </div>
    </section>
  )
}
