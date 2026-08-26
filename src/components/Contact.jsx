import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  ArrowUpRight 
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import confetti from 'canvas-confetti'

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('ravigangwar885@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const copyPhone = () => {
    navigator.clipboard.writeText('+919027722706')
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      
      // Trigger celebrate confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      })
    }, 800)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="chapter-label text-xs text-blue-400 font-mono">05 //</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Get In Touch
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-2xl font-normal">
            Whether you want to discuss a software engineering opportunity, an automated reconciliation project, or simply connect, feel free to reach out.
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-slate-900/40 border border-white/[0.08] backdrop-blur-sm space-y-5">
              <h3 className="font-display font-bold text-lg text-white">
                Direct Channels
              </h3>

              {/* Email Item */}
              <div className="p-3.5 rounded-lg bg-slate-950/60 border border-white/[0.04] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-md bg-blue-500/10 text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-slate-400 uppercase">Email</p>
                    <a 
                      href="mailto:ravigangwar885@gmail.com" 
                      className="text-xs font-mono text-white hover:text-blue-400 truncate block transition-colors"
                    >
                      ravigangwar885@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-md bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/30 transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone Item */}
              <div className="p-3.5 rounded-lg bg-slate-950/60 border border-white/[0.04] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-md bg-indigo-500/10 text-indigo-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-slate-400 uppercase">Phone</p>
                    <a 
                      href="tel:+919027722706" 
                      className="text-xs font-mono text-white hover:text-indigo-400 truncate block transition-colors"
                    >
                      +91-9027722706
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhone}
                  className="p-2 rounded-md bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/30 transition-colors shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location Item */}
              <div className="p-3.5 rounded-lg bg-slate-950/60 border border-white/[0.04] flex items-center gap-3">
                <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Location</p>
                  <p className="text-xs font-mono text-white">
                    Phagwara, Punjab / Bareilly, UP, India
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 border-t border-white/[0.06] flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/ravigang/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-950 border border-white/[0.08] hover:border-blue-500/40 text-slate-300 hover:text-white text-xs font-mono transition-all"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href="https://github.com/ravigang"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-950 border border-white/[0.08] hover:border-blue-500/40 text-slate-300 hover:text-white text-xs font-mono transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message Form (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-slate-900/40 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-sm relative">
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-normal">
                Leave your details below and I will respond to your inquiry within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="text-white font-semibold">{formState.name}</span>. I have received your message and will reply to <span className="text-blue-400 font-mono">{formState.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormState({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-slate-300">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-slate-200 text-xs font-mono focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-slate-300">
                        Your Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-slate-200 text-xs font-mono focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-slate-300">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Internship opportunity / Project collaboration"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-slate-200 text-xs font-mono focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-slate-300">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Ravi, I'd like to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-slate-200 text-xs font-mono focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Transmission...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
