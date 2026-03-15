import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', age: '', job: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

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

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'お名前を入力してください'
    if (!form.age || isNaN(form.age) || form.age < 18 || form.age > 99)
      errs.age = '有効な年齢を入力してください（18-99）'
    if (!form.job.trim()) errs.job = 'ご職業を入力してください'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = '有効なメールアドレスを入力してください'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const fields = [
    { key: 'name', label: 'お名前', type: 'text', placeholder: '山田 太郎' },
    { key: 'age',  label: '年齢',   type: 'number', placeholder: '35' },
    { key: 'job',  label: 'ご職業', type: 'text', placeholder: '会社員' },
    { key: 'email',label: 'メールアドレス', type: 'email', placeholder: 'example@email.com' },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden section-bg">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-pastel-blue/40 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-pastel-mint/40 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-lg mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <span className="text-accent-teal font-semibold tracking-wider text-xs uppercase">
            Free Consultation
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-ink mt-3 mb-4 tracking-relaxed">
            無料カウンセリングの予約
          </h2>
          <p className="text-ink-soft text-sm leading-relaxed tracking-relaxed">
            まずはお気軽にご相談ください。
            <br />
            専任スタッフが丁寧にご説明します。
          </p>
          <div className="mt-5 w-14 h-1 teal-gradient mx-auto rounded-full" />
        </div>

        {/* Form card */}
        <div className="animate-on-scroll bg-white/90 backdrop-blur-sm border border-pastel-blue/40 rounded-4xl p-8 shadow-xl shadow-pastel-blueMid/20">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#C8F0E8' }}>
                <svg className="w-8 h-8" fill="none" stroke="#3AAFA9" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-ink font-serif font-black text-xl mb-3 tracking-relaxed">ご送信ありがとうございます</h3>
              <p className="text-ink-light text-sm leading-relaxed tracking-relaxed">
                担当スタッフより2営業日以内にご連絡いたします。
                <br />
                しばらくお待ちください。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {fields.map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label className="block text-ink text-xs font-semibold mb-1.5 tracking-wider">
                    {label}
                    <span className="text-accent-teal ml-1">*</span>
                  </label>
                  <input
                    id={`contact-${key}`}
                    type={type}
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className={`w-full bg-pastel-sky border rounded-2xl px-4 py-3 text-ink placeholder-ink-soft/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent-teal/30 focus:border-accent-teal/50 transition-all duration-200 tracking-relaxed ${
                      errors[key] ? 'border-red-400' : 'border-pastel-blue/40'
                    }`}
                  />
                  {errors[key] && (
                    <p className="text-red-400 text-xs mt-1 tracking-relaxed">{errors[key]}</p>
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full mt-2 py-4 teal-gradient text-white font-bold rounded-full shadow-md shadow-accent-teal/25 hover:shadow-lg hover:shadow-accent-teal/35 hover:scale-[1.02] transition-all duration-300 tracking-relaxed"
              >
                無料カウンセリングを申し込む →
              </button>

              <p className="text-ink-soft text-xs text-center leading-relaxed tracking-relaxed">
                ご入力いただいた個人情報は、お問い合わせへの対応にのみ使用し、
                <br />
                第三者への提供は一切行いません。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
