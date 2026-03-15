export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: Vietnamese woman in áo dài & nón lá */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}hero-woman.png")`,
        }}
      />
      {/* Soft pastel overlay */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-white/20" />

      {/* Decorative soft circles */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-pastel-blue/25 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-pastel-mint/25 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-16">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/75 backdrop-blur-sm border border-pastel-blueMid rounded-full px-5 py-2 mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
          <span className="text-accent-tealDark text-xs font-semibold tracking-wider">
            ベトナム現地法人・直営運営
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-serif font-black leading-tight mb-6">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 tracking-relaxed drop-shadow-sm" style={{ color: '#1C2B2B' }}>
            ベトナム現地法人、直営だからできる
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-sm tracking-relaxed text-accent-teal">
            「誠実な縁」と「透明な価格」。
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-light tracking-relaxed" style={{ color: '#2D3A3A' }}>
          中間マージン・ゼロ。現地スタッフによる徹底サポートで、
          <br className="hidden sm:block" />
          安心・誠実な国際結婚を実現します。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 teal-gradient text-white font-bold text-base rounded-full shadow-lg shadow-accent-teal/25 hover:shadow-xl hover:shadow-accent-teal/35 hover:scale-105 transition-all duration-300 tracking-relaxed"
          >
            無料カウンセリングを予約する
          </a>
          <a
            href="#steps"
            className="w-full sm:w-auto px-8 py-4 bg-white/75 backdrop-blur-sm border border-pastel-blueMid text-base rounded-full hover:bg-white/90 hover:border-accent-teal/50 transition-all duration-300 font-medium tracking-relaxed"
            style={{ color: '#2D3A3A' }}
          >
            成婚までのステップを見る
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
          {[
            { num: '98%', label: '顧客満足度' },
            { num: '200+', label: '成婚実績' },
            { num: '5年+', label: '運営実績' },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-sm border border-pastel-blueMid/50 rounded-3xl py-4 px-2 shadow-sm"
            >
              <div className="text-accent-teal font-black text-2xl sm:text-3xl font-serif">{s.num}</div>
              <div className="text-xs sm:text-sm mt-1 tracking-relaxed" style={{ color: '#5A6B6B' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1" style={{ color: '#5A6B6B' }}>
        <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent-teal/50 to-transparent" />
      </div>
    </section>
  )
}
