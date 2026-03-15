export default function Footer() {
  const navLinks = [
    { label: '強みについて', href: '#strengths' },
    { label: '料金プラン', href: '#pricing' },
    { label: '成婚までのステップ', href: '#steps' },
    { label: 'よくあるご質問', href: '#faq' },
    { label: 'お問い合わせ', href: '#contact' },
  ]

  return (
    <footer style={{ backgroundColor: '#1C2B2B', color: '#ffffff' }}>
      {/* Teal accent top line */}
      <div className="h-1 w-full teal-gradient" />

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full teal-gradient flex items-center justify-center shadow-md">
                <span className="text-white font-black text-sm font-serif">縁</span>
              </div>
              <div>
                <div className="font-serif font-black text-sm tracking-wide" style={{ color: '#ffffff' }}>縁結びVietnam</div>
                <div className="text-[10px] tracking-widest font-light uppercase" style={{ color: '#8ED8C8' }}>Trusted Match</div>
              </div>
            </div>
            <p className="text-xs leading-relaxed mb-5 tracking-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              ベトナム現地法人が直営する、誠実で透明な国際結婚マッチングサービスです。中間マージンなしの明瞭料金で、真剣なお出会いをサポートします。
            </p>
            <div className="flex gap-3">
              {['LINE', 'Instagram', 'X'].map((sn) => (
                <button
                  key={sn}
                  className="text-[10px] border rounded-full px-3 py-1.5 transition-all duration-200 tracking-wider hover:border-teal-400"
                  style={{ color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.15)' }}
                >
                  {sn}
                </button>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-semibold text-xs tracking-widest uppercase mb-5" style={{ color: '#8ED8C8' }}>
              サービス
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs transition-colors duration-200 tracking-relaxed hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company info */}
          <div>
            <h4 className="font-semibold text-xs tracking-widest uppercase mb-5" style={{ color: '#8ED8C8' }}>
              会社情報
            </h4>
            <div className="space-y-3 text-xs tracking-relaxed">
              {[
                { label: '社名', value: '縁結びベトナム株式会社\n（ENMUSUBI VIETNAM Co., Ltd.）' },
                { label: '住所', value: '91 Pasteur, Bến Nghé, Quận 1,\nHồ Chí Minh, Vietnam' },
                { label: '電話・LINE', value: '+84-28-XXXX-XXXX' },
                { label: 'メール', value: 'info@enmusubi-vietnam.com' },
                { label: '営業時間', value: '平日 9:00〜18:00（ベトナム時間）' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="uppercase text-[10px] tracking-wider" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    {label}
                  </span>
                  <p className="mt-0.5 leading-relaxed whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs tracking-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © 2024 縁結びベトナム株式会社. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            <a href="#" className="hover:text-white transition-colors tracking-relaxed">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors tracking-relaxed">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
