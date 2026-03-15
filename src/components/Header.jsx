import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: '強み', href: '#strengths' },
    { label: '料金', href: '#pricing' },
    { label: 'ステップ', href: '#steps' },
    { label: 'FAQ', href: '#faq' },
    { label: 'お問い合わせ', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-pastel-blue/30'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      {/* Thin accent top border */}
      <div className="h-1 w-full teal-gradient" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full teal-gradient flex items-center justify-center shadow-md shadow-accent-teal/20">
              <span className="text-white font-black text-sm font-serif">縁</span>
            </div>
            <div className="leading-tight">
              <div className="text-accent-tealDark font-black text-sm tracking-wide font-serif">縁結びVietnam</div>
              <div className="text-ink-soft text-[10px] tracking-widest font-light uppercase">Trusted Match</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ink-light hover:text-accent-teal text-sm font-medium transition-colors duration-200 tracking-relaxed"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2.5 teal-gradient text-white font-bold text-sm rounded-full shadow-md shadow-accent-teal/20 hover:shadow-lg hover:shadow-accent-teal/30 hover:scale-105 transition-all duration-200"
            >
              無料カウンセリング予約
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-ink p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-ink transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-ink transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-5 border-t border-pastel-blueMid/30 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-ink-light hover:text-accent-teal font-medium text-sm transition-colors tracking-relaxed"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block text-center px-5 py-3 teal-gradient text-white font-bold text-sm rounded-full shadow-md"
            >
              無料カウンセリング予約
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
