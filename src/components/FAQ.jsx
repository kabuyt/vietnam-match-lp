import { useEffect, useRef, useState } from 'react'

const faqs = [
  {
    q: 'なぜこの価格でサービスを提供できるのですか？',
    a: '弊社はベトナムに自社法人を持ち、現地スタッフが直接運営しています。日本国内の仲介業者を一切介さないため、その分のコストがかかりません。また、大規模な広告宣伝費をかけず、口コミと紹介を中心に運営しているため、業界最安水準の透明な価格を実現しています。',
  },
  {
    q: '言葉の壁はどう解決しますか？',
    a: 'お見合いの場面では日越バイリンガルの通訳スタッフが必ず同席します。成婚後は日本語レッスンを6ヶ月間実施しており、入国時には日常会話ができるレベルまでサポートします。また、弊社の日本人スタッフが継続的にフォローアップしますので、安心してコミュニケーションが取れる環境を整えています。',
  },
  {
    q: '偽装結婚のリスクが心配です。どのような対策をしていますか？',
    a: '登録女性は全員、弊社スタッフが対面でインタビューを実施しています。身分証明書・戸籍・家族構成の書類審査に加え、日本の文化や生活についての理解度テストも行っています。また、入国後6ヶ月間のフォローアップ期間を設け、双方の関係構築をサポート。異常を感じた場合には迅速に対処する体制を整えています。',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)
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
    <section id="faq" ref={sectionRef} className="py-24 bg-pastel-sky">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="text-accent-teal font-semibold tracking-wider text-xs uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-ink mt-3 mb-4 tracking-relaxed">
            よくあるご質問
          </h2>
          <p className="text-ink-soft text-sm tracking-relaxed">
            ご不安やご疑問に、誠実にお答えします。
          </p>
          <div className="mt-5 w-14 h-1 teal-gradient mx-auto rounded-full" />
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-white rounded-4xl overflow-hidden shadow-sm shadow-pastel-blueMid/20 border border-pastel-blue/30"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <button
                className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 hover:bg-pastel-blue/10 transition-colors duration-200"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-pastel-mint text-accent-tealDark text-xs font-black flex items-center justify-center flex-shrink-0">
                    Q
                  </span>
                  <span className="text-ink font-serif font-bold text-sm sm:text-base leading-snug tracking-relaxed">
                    {faq.q}
                  </span>
                </div>
                <span
                  className={`text-accent-teal font-black text-xl transition-transform duration-300 flex-shrink-0 ${
                    openIdx === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIdx === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 flex items-start gap-3 border-t border-pastel-blue/20 pt-4">
                  <span className="w-7 h-7 rounded-full bg-pastel-beige text-accent-warm text-xs font-black flex items-center justify-center flex-shrink-0">
                    A
                  </span>
                  <p className="text-ink-light text-sm leading-relaxed tracking-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
