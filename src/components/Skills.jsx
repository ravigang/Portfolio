import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Layers, 
  Database, 
  Users2, 
  CheckCircle2, 
  Cpu, 
  Boxes, 
  GitBranch, 
  Terminal, 
  Sparkles 
} from 'lucide-react'

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    description: 'Core programming languages used for systems, data analysis, and web engineering.',
    skills: [
      { name: 'JavaScript', level: 'Advanced', note: 'ES6+, DOM, Asynchronous JS, React ecosystem' },
      { name: 'Python', level: 'Advanced', note: 'Pandas, Data Pipelines, Gemini API, Streamlit' },
      { name: 'C', level: 'Proficient', note: 'Data structures, Memory management, Algorithms' },
    ]
  },
  {
    id: 'frameworks',
    title: 'Technologies & Frameworks',
    icon: Layers,
    description: 'Modern libraries and frameworks used to craft reactive frontends and automated apps.',
    skills: [
      { name: 'React', level: 'Advanced', note: 'Components, Hooks, State Management, Framer Motion' },
      { name: 'Streamlit', level: 'Advanced', note: 'Data Dashboards, AI audit interfaces, Ledger apps' },
      { name: 'HTML5', level: 'Expert', note: 'Semantic markup, SEO optimization, Accessibility' },
      { name: 'CSS3 / Tailwind', level: 'Expert', note: 'Flexbox, Grid, Responsive UI, Glassmorphism' },
    ]
  },
  {
    id: 'tools',
    title: 'Databases & Tools',
    icon: Database,
    description: 'Storage engines, version control systems, deployment platforms, and developer toolchains.',
    skills: [
      { name: 'PostgreSQL', level: 'Proficient', note: 'Relational schema design, SQL queries, indexing' },
      { name: 'Git & GitHub', level: 'Advanced', note: 'Branching, PRs, Versioning, CI/CD integrations' },
      { name: 'Vercel', level: 'Advanced', note: 'Edge deployments, Serverless setups, Preview stages' },
      { name: 'VS Code', level: 'Power User', note: 'Custom toolchains, Debuggers, Linters, Extensions' },
    ]
  },
  {
    id: 'soft',
    title: 'Soft Skills & Workflows',
    icon: Users2,
    description: 'Engineering mindset and interpersonal capabilities enabling effective teamwork.',
    skills: [
      { name: 'Problem Solving', level: 'Strong', note: 'Algorithmic breakdown and context-aware debugging' },
      { name: 'Team Collaboration', level: 'Strong', note: 'Agile sprints, code reviews, constructive feedback' },
      { name: 'Time Management', level: 'Strong', note: 'Milestone tracking, prioritisation, timely delivery' },
      { name: 'Adaptability', level: 'Strong', note: 'Fast learner of emerging frameworks and AI SDKs' },
    ]
  }
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab)

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="chapter-label text-xs text-blue-400 font-mono">02 //</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Skills & Tech Stack
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-2xl font-normal">
            Technologies, frameworks, and developer workflows I use to engineer robust software solutions.
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent mt-3" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/[0.06] hover:bg-slate-800'
            }`}
          >
            All Categories (4)
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === cat.id
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/[0.06] hover:bg-slate-800'
              }`}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl bg-slate-900/40 border border-white/[0.08] p-6 backdrop-blur-sm relative group hover:border-blue-500/30 transition-all shadow-sm hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-normal">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3 mt-4 pt-3 border-t border-white/[0.06]">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="p-3 rounded-lg bg-slate-950/50 border border-white/[0.04] hover:border-blue-500/20 hover:bg-slate-900/80 transition-all flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/20 text-blue-300">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-sans">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
