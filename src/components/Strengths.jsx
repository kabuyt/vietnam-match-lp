import { useEffect, useRef } from 'react'

const strengths = [
  {
    number: '01',
    title: '現地直営',
    subtitle: '中間マージンなし、圧倒的低価格',
    description:
      'ベトナム現地に自社法人を持ち、日本の仲介業者を介さないため、余計なコストが一切かかりません。透明な料金体系で、安心してご利用いただけます。',
    // Ho Chi Minh City skyline — 現地法人・ベトナムのオフィス
    image: `url("${import.meta.env.BASE_URL}hcmc-skyline.png")`,
    highlights: ['中間マージン0円', '明瞭料金体系', '現地スタッフ常駐'],
    color: 'bg-pastel-blue/20',
    borderColor: 'border-pastel-blueMid/40',
  },
  {
    number: '02',
    title: '徹底審査',
    subtitle: '女性の身元・意思を直接確認',
    description:
      '登録女性は全員、弊社現地スタッフが直接面談を実施。身元確認書類の審査、家族構成の確認、そして本気で日本人と結婚する意思があるかを厳格に審査します。',
    // Vietnamese women in traditional áo dài — 審査・ベトナム人女性のイメージ
    image: `url("${import.meta.env.BASE_URL}interview-woman.png")`,
    highlights: ['全員対面面談', '身元書類確認', '結婚意思の確認'],
    color: 'bg-pastel-mint/20',
    borderColor: 'border-pastel-mintMid/40',
  },
  {
    number: '03',
    title: '教育サポート',
    subtitle: '成婚〜入国まで自社で完結',
    description:
      '成婚後も安心。日本語レッスン・文化・マナー講習を自社スタッフが実施。ビザ申請から入国手続きまで、一貫してサポートします。',
    // Japanese language learning / study scene — 日本語学習・サポートのイメージ
    image: `url("${import.meta.env.BASE_URL}study-scene.png")`,
    highlights: ['日本語レッスン', 'マナー講習', 'ビザ申請サポート'],
    color: 'bg-pastel-beige',
    borderColor: 'border-pastel-beigeDeep/50',
  },
]

// Simple SVG icons — no emoji
const icons = {
  '01': (
    <svg className="w-5 h-5 text-accent-teal" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  '02': (
    <svg className="w-5 h-5 text-accent-teal" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  '03': (
    <svg className="w-5 h-5 text-accent-teal" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
}

export default function Strengths() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="strengths" ref={sectionRef} className="py-24 section-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent-teal font-semibold tracking-wider text-xs uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black mt-3 mb-4 tracking-relaxed" style={{ color: '#1C2B2B' }}>
            選ばれる理由、3つの強み
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed tracking-relaxed" style={{ color: '#5A6B6B' }}>
            「怪しさ」ゼロ。現地直営だからこそ実現できる、誠実で透明なサービスをご提供します。
          </p>
          <div className="mt-5 w-14 h-1 teal-gradient mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {strengths.map((s, i) => (
            <div
              key={i}
              className={`animate-on-scroll flex flex-col ${
                i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-stretch gap-0 bg-white rounded-4xl shadow-md shadow-pastel-blueMid/20 overflow-hidden border ${s.borderColor} hover:shadow-lg hover:shadow-pastel-blueMid/30 transition-shadow duration-300`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image panel */}
              <div
                className="w-full md:w-2/5 h-56 md:h-auto flex-shrink-0 bg-cover bg-center"
                style={{ backgroundImage: s.image }}
              />

              {/* Content panel */}
              <div className={`flex-1 p-8 md:p-10 ${s.color}`}>
                <div className="flex items-center gap-4 mb-5">
                  {/* Icon box with number badge */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      {icons[s.number]}
                    </div>
                    <span
                      className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full teal-gradient flex items-center justify-center text-white font-black"
                      style={{ fontSize: '9px', lineHeight: 1 }}
                    >
                      {s.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-black tracking-relaxed leading-tight" style={{ color: '#1C2B2B' }}>
                      {s.title}
                    </h3>
                    <p className="text-accent-teal font-semibold text-sm tracking-relaxed mt-0.5">{s.subtitle}</p>
                  </div>
                </div>

                <p className="leading-relaxed mb-6 text-sm md:text-base tracking-relaxed" style={{ color: '#5A6B6B' }}>
                  {s.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {s.highlights.map((h, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/80 text-xs font-semibold rounded-full border border-white/60 shadow-sm"
                      style={{ color: '#2D3A3A' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
