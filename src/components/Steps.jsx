import { useEffect, useRef } from 'react'

const steps = [
  {
    step: '01',
    title: '無料相談',
    desc: 'LINEまたはオンラインにてお気軽に。サービス説明やご不安点を丁寧にご説明します。',
    duration: '所要時間：約60分',
    iconBg: '#D0EEFF',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#3AAFA9" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: '入会手続き',
    desc: '入会申込書の記入と審査書類のご提出。通過後、会員システムへのアクセスが開始されます。',
    duration: '審査期間：約3〜5営業日',
    iconBg: '#C8F0E8',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#3AAFA9" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'オンラインお見合い',
    desc: '通訳スタッフ同席のビデオ通話で初回お見合い。ご自宅から気軽に参加できます。',
    duration: '1回あたり60分',
    iconBg: '#D0EEFF',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#3AAFA9" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: '現地渡航',
    desc: 'ベトナムへ渡航し、現地スタッフのサポートのもと複数回のお見合いを行います。',
    duration: '渡航期間：約5日間',
    iconBg: '#C8F0E8',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#3AAFA9" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    step: '05',
    title: '婚約・ビザ申請',
    desc: '婚約成立後、ビザ申請の手続きを当社スタッフが全面サポート。入国まで安心です。',
    duration: 'ビザ審査：約3〜6ヶ月',
    iconBg: '#FAF5EE',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#3AAFA9" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export default function Steps() {
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
    <section id="steps" ref={sectionRef} className="py-24 section-bg">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent-teal font-semibold tracking-wider text-xs uppercase">
            Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black mt-3 mb-4 tracking-relaxed" style={{ color: '#1C2B2B' }}>
            成婚までのステップ
          </h2>
          <p className="text-base max-w-xl mx-auto tracking-relaxed" style={{ color: '#5A6B6B' }}>
            無料相談から入国まで、すべてのステップを丁寧にサポートします。
          </p>
          <div className="mt-5 w-14 h-1 teal-gradient mx-auto rounded-full" />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector */}
          <div
            className="hidden md:block absolute left-[2.25rem] top-8 bottom-8 w-0.5 rounded-full"
            style={{ background: 'linear-gradient(to bottom, #A8D8F0, #8ED8C8, #EDE4D4)' }}
          />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className="animate-on-scroll flex items-start gap-5"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step circle — number only, centered */}
                <div
                  className="flex-shrink-0 w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center shadow-sm border border-white/80 z-10"
                  style={{ backgroundColor: s.iconBg }}
                >
                  <span
                    className="font-black font-serif"
                    style={{ color: '#2C9090', fontSize: '1.1rem', lineHeight: 1 }}
                  >
                    {s.step}
                  </span>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white rounded-4xl p-6 shadow-sm border border-white/80 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="flex-shrink-0 text-accent-teal">{s.icon}</span>
                    <h3 className="font-serif font-black text-lg tracking-relaxed leading-tight" style={{ color: '#1C2B2B' }}>
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed tracking-relaxed" style={{ color: '#5A6B6B' }}>{s.desc}</p>
                  <p className="text-xs font-semibold mt-3 tracking-relaxed text-accent-teal">{s.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14 animate-on-scroll">
          <a
            href="#contact"
            className="inline-block px-10 py-4 teal-gradient text-white font-bold rounded-full shadow-md shadow-accent-teal/25 hover:scale-105 hover:shadow-lg hover:shadow-accent-teal/35 transition-all duration-300 tracking-relaxed"
          >
            まずは無料相談から始める
          </a>
        </div>
      </div>
    </section>
  )
}
