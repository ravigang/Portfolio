import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, ShieldCheck, Zap, Sparkles, Brain, Cpu, Database } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="chapter-label text-xs text-blue-400 font-mono">01 //</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              About Me
            </h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed">
            <p>
              I am a Computer Science & Engineering undergraduate at <strong className="text-white font-semibold">Lovely Professional University</strong> with an academic CGPA of <span className="text-blue-400 font-mono font-semibold">8.5</span>. I focus on full-stack web development, backend logic, and IoT integrations.

            </p>
            
            <p>
              I enjoy building clean, functional applications—from writing database queries and automated data pipelines with Pandas to creating interactive UIs using React and Tailwind CSS. 
            </p>

            <p>
             Always keen on solving algorithmic problems on various coding platforms and exploring modern web techniques.
            </p>

            {/* Core Values / Engineering Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-semibold text-white uppercase">Full-Stack Development</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Building end-to-end web applications with modern frontend and backend tools.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-semibold text-white uppercase">ALGORITHMS & DATA STRUCTURES</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Solving core computational problems with strong analytical and algorithmic thinking.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-semibold text-white uppercase">DATABASES</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Writing SQL queries, managing MongoDB, and processing data with Python..</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-semibold text-white uppercase">Modern UI-UX</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Crafting clean, responsive dark-mode interfaces using React and Tailwind CSS.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Terminal Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#090d16] border border-white/10 overflow-hidden shadow-2xl">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-xs text-slate-400 ml-2">ravi@engineer:~</span>
                </div>
                <span className="font-mono text-[11px] text-slate-500">profile.json</span>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300">
                <p className="text-slate-500">{"// Developer Profile Snapshot"}</p>
                <p><span className="text-blue-400">const</span> developer = &#123;</p>
                <p className="pl-4"><span className="text-indigo-300">name</span>: <span className="text-emerald-300">"Ravi Gangwar"</span>,</p>
                <p className="pl-4"><span className="text-indigo-300">university</span>: <span className="text-emerald-300">"Lovely Professional University"</span>,</p>
                <p className="pl-4"><span className="text-indigo-300">degree</span>: <span className="text-emerald-300">"B.Tech Computer Science & Engg."</span>,</p>
                <p className="pl-4"><span className="text-indigo-300">cgpa</span>: <span className="text-amber-300">8.5</span>,</p>
                <p className="pl-4"><span className="text-indigo-300">status</span>: <span className="text-emerald-400 font-semibold">"Ready for Internships"</span>,</p>
                <p className="pl-4"><span className="text-indigo-300">locations</span>: [</p>
                <p className="pl-8"><span className="text-emerald-300">"Phagwara, Punjab"</span>,</p>
                <p className="pl-8"><span className="text-emerald-300">"Bareilly, UP"</span>,</p>
                <p className="pl-8"><span className="text-emerald-300">"Remote / Relocate"</span></p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-indigo-300">interests</span>: [</p>
                <p className="pl-8"><span className="text-emerald-300">"Full Stack Development"</span>,</p>
                <p className="pl-8"><span className="text-emerald-300">"Solving Algorithmic Problems"</span>,</p>
                <p className="pl-8"><span className="text-emerald-300">"Working with data"</span></p>
                <p className="pl-4">]</p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
