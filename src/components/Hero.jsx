import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  ArrowDown,
  ArrowUpRight,
  Copy,
  Check,
  Terminal,
  Sparkles,
  Code2,
  Cpu,
  Layers
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('ravigangwar885@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[24rem] h-[24rem] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6"
        >
          {/* Top Status & Location Banner */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
              </span>
              <span className="font-mono text-xs font-medium text-emerald-400">
                  Currently Learning
              </span>
              <span className="text-slate-600 font-mono text-xs">•</span>
              <span className="font-mono text-xs text-slate-400">
                B.Tech CSE @ LPU
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/40 border border-white/5 font-mono text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Phagwara, Punjab</span>
            </div>
          </div>

          {/* Main Title & Hero Statement */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1]">
              Hi, I'm <span className="gradient-text">Ravi Gangwar</span>.
              <br />
              <span className="text-slate-300 font-bold">
                Software Engineer & Builder.
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl">
              Computer Science undergraduate passionate about building automated reconciliation engines, AI-integrated workflows, high-performance web systems, and clean interfaces with engineering discipline.
            </p>
          </div>

          {/* Quick Stats & Engineering Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full my-2">
            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/[0.07] backdrop-blur-sm">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-mono mb-1">
                <Code2 className="w-4 h-4" />
                <span>FOCUS</span>
              </div>
              <p className="font-semibold text-sm text-slate-200">Full-Stack & Systems</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/[0.07] backdrop-blur-sm">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-1">
                <Cpu className="w-4 h-4" />
                <span>AUTOMATION</span>
              </div>
              <p className="font-semibold text-sm text-slate-200">AI Ledgers & Audits</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/[0.07] backdrop-blur-sm">
              <div className="flex items-center gap-2 text-violet-400 text-xs font-mono mb-1">
                <Layers className="w-4 h-4" />
                <span>ACADEMICS</span>
              </div>
              <p className="font-semibold text-sm text-slate-200">8.5 CGPA @ LPU</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/[0.07] backdrop-blur-sm">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
                <Sparkles className="w-4 h-4" />
                <span>LOCATION</span>
              </div>
              <p className="font-semibold text-sm text-slate-200">India</p>
            </div>
          </div>

          {/* CTA Buttons & Direct Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-slate-200 font-mono text-sm transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* Social Buttons */}
            <div className="flex items-center gap-2 ml-auto sm:ml-2">
              <a
                href="https://github.com/ravigang"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800/80 transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/ravigang/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800/80 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="tel:+919027722706"
                className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800/80 transition-all shadow-sm"
                aria-label="Call Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
