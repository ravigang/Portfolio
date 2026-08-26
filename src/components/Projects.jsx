import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Bot, 
  KeyRound, 
  ExternalLink, 
  ShieldCheck, 
  Layers, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  Play
} from 'lucide-react'
import { GithubIcon } from './Icons'
import PasswordDemoModal from './PasswordDemoModal'

const projects = [
  {
    id: 'ai-reconciliation',
    title: 'AI Reconciliation Engine',
    timeline: 'Aug 2026',
    featured: true,
    tagline: 'Automated Multi-Way Ledger Reconciliation & LLM Diagnostic Auditor',
    description: 'An enterprise-grade reconciliation pipeline architected to cross-verify multi-party payment logs against bank settlement feeds with automated LLM diagnostics.',
    icon: Bot,
    highlights: [
      'Architected an automated multi-way ledger reconciliation engine using Streamlit and Pandas, processing and cross-verifying payment gateway logs against bank settlement feeds.',
      'Integrated Gemini API with custom exception-handling pipelines to perform context-aware diagnostic audits on flagged transaction mismatches and missing entries.',
      'Secured 20+ learning-content resources using role-based access control enforcing permissions across 2 user roles (students and instructors).',
      'Implemented secure environment configuration and role-safe API key isolation to prevent sensitive credential exposure.'
    ],
    techStack: ['Python', 'Streamlit', 'Google Gemini API', 'Pandas', 'CSS', 'Git'],
    githubUrl: 'https://github.com/ravigang',
    hasDemo: false,
    color: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    accentBorder: 'border-blue-500/30'
  },
  {
    id: 'password-generator',
    title: 'Customizable Password Generator',
    timeline: 'Jul 2026',
    featured: true,
    tagline: 'Dynamic Criteria-Based Cryptographic Generator with Real-time Strength Score',
    description: 'A responsive and interactive security utility that generates cryptographic randomized strings based on user-defined length and character combinations.',
    icon: KeyRound,
    highlights: [
      'Developed a customizable password generator with adjustable length and selectable character types (uppercase, lowercase, numbers, symbols).',
      'Implemented dynamic password generation using JavaScript, ensuring randomized criteria-based passwords.',
      'Added interactive DOM-based functionality to update settings and generate passwords instantly.',
      'Integrated live clipboard copying and visual entropy evaluation indicators.'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/ravigang',
    hasDemo: true,
    color: 'from-emerald-500/20 via-cyan-500/10 to-transparent',
    accentBorder: 'border-emerald-500/30'
  }
]

export default function Projects() {
  const [demoModalOpen, setDemoModalOpen] = useState(false)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-[28rem] h-[28rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="chapter-label text-xs text-blue-400 font-mono">03 //</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-2xl font-normal">
            Highlighted software engineering projects demonstrating data engineering, AI integration, security systems, and frontend reactivity.
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent mt-3" />
        </div>

        {/* Project Cards List */}
        <div className="space-y-10">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl bg-gradient-to-b ${project.color} bg-[#0b111e] border ${project.accentBorder} p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group shadow-xl hover:shadow-[0_0_35px_rgba(59,130,246,0.12)] transition-all`}
              >
                {/* Tech Corner Accent Ticks */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-blue-400 border-l-2" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-blue-400 border-r-2" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-blue-400 border-l-2" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-blue-400 border-r-2" />

                {/* Top Bar: Icon, Date, Status */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-blue-400 shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-blue-400 font-semibold tracking-wider uppercase">
                          PROJECT 0{index + 1}
                        </span>
                        <span className="text-slate-600 font-mono text-xs">•</span>
                        <span className="font-mono text-xs text-slate-400">
                          {project.timeline}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Actions (Live Demo & Github) */}
                  <div className="flex items-center gap-2">
                    {project.hasDemo && (
                      <button
                        onClick={() => setDemoModalOpen(true)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-semibold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Try Live Demo</span>
                      </button>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-mono text-xs transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-500" />
                    </a>
                  </div>
                </div>

                {/* Tagline & Bullet Points */}
                <div className="my-5 space-y-4">
                  <p className="text-slate-200 font-mono text-xs sm:text-sm font-medium text-indigo-300">
                    {project.tagline}
                  </p>

                  <ul className="space-y-2.5">
                    {project.highlights.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0 shadow-[0_0_6px_rgba(96,165,250,0.8)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-slate-400 mr-2 uppercase tracking-wider">
                    Stack:
                  </span>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-white/[0.08] text-slate-300 font-mono text-xs hover:border-blue-500/40 hover:text-blue-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* Interactive Modal for Password Generator */}
      <PasswordDemoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)} 
      />
    </section>
  )
}
