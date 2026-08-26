import React, { useState, useEffect } from 'react'
import { ArrowUp, Terminal, Heart, Sparkles, Shield } from 'lucide-react'

export default function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }) + ' IST')
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] bg-[#01040d] text-slate-400 font-mono text-xs relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left System Info */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-semibold">ALL SYSTEMS OPERATIONAL</span>
          </div>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="text-slate-500">SYS_TIME: {time || '17:30:00 IST'}</span>
        </div>

        {/* Center Credits */}
        <div className="text-center text-slate-500">
          <span>&copy; {new Date().getFullYear()} Ravi Gangwar. Designed with engineering precision.</span>
        </div>

        {/* Right Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all shadow-sm group"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  )
}
