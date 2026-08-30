import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, Sparkles, BookOpen } from 'lucide-react'
import {  ExternalLink } from 'lucide-react'

const educationList = [
  {
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    timeline: 'Aug 2025 – Present',
    score: 'CGPA: 8.5',
    scoreType: 'Current CGPA',
    current: true,
    highlights: [
      'Focusing on Data Structures & Algorithms, Systems Engineering, and Database Architecture.',
      'Active developer experimenting with automated reconciliation pipelines and web architectures.',
      'Maintaining consistent academic standing with an 8.5 CGPA.'
    ]
  },
  {
    institution: 'WOODROW Senior Secondary School',
    location: 'Bareilly, Uttar Pradesh',
    degree: 'Higher Secondary Education (Class XII - CBSE)',
    timeline: 'Apr 2023 – Mar 2025',
    score: '68.4%',
    scoreType: 'Score',
    current: false,
    highlights: [
      'Completed coursework in Physics, Chemistry, Mathematics, and Computer Science fundamentals.'
    ]
  },
  {
    institution: 'Brij Bhushan Lal Public School',
    location: 'Bareilly, Uttar Pradesh',
    degree: 'Secondary Education (Class X - CBSE)',
    timeline: 'Apr 2022 – Mar 2023',
    score: '84.3%',
    scoreType: 'Score',
    current: false,
    highlights: [
      'Graduated with distinction with strong focus on mathematics and computational logic.'
    ]
  }
]

const certifications = [


  {
    title: 'Oracle Data Platform 2025 Certified Foundations Associate',
    issuer: 'Oracle Foundations',
    date: 'Issued June 2026',
    verified: true,
    link: 'https://drive.google.com/file/d/1FPH7LjaaCOe6_tjpiwR6v6DoyJe1WnAK/view?usp=sharing',

    topics: ['Relational Database Management',
    'SQL Querying',
    'Oracle Autonomous Database',
    'Data Warehousing',
    'Cloud Data Services']
  },
  

  {
    title: 'Infosys Springboard Python Certification',
    issuer: 'Infosys Springboard',
    date: 'Issued July 2026',
    verified: true,
    link: 'https://drive.google.com/file/d/1HVHk7LME94-0I_9az2Gu97jdms0cQg0r/view?usp=sharing',

    topics: ['Python Data Structures', 'Object-Oriented Design', 'Algorithmic Problem Solving', 'Exception Handling']
  },

 {
  title: 'Introduction to Artificial Intelligence',
  issuer: 'Infosys Springboard',
  date: 'Issued March 2026',
  verified: true,
  link: 'https://drive.google.com/file/d/14bX3uA2yuCDZKFtEos9KqYc2G6VRR230/view?usp=sharing',
  topics: [
    'AI Fundamentals',
    'Machine Learning Concepts',
    'Neural Networks Overview',
    'Natural Language Processing',
    'AI Ethics & Applications'
  ]
}

  
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="chapter-label text-xs text-blue-400 font-mono">04 //</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Education & Certifications
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-2xl font-normal">
            Academic milestones, technical coursework, and certified proficiencies.
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Timeline (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
                Academic Background
              </h3>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-slate-800 before:to-slate-900">
              {educationList.map((edu, idx) => (
                <motion.div 
                  key={edu.institution}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[30px] top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    edu.current 
                      ? 'bg-blue-600 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]' 
                      : 'bg-slate-900 border-slate-700'
                  }`} />

                  {/* Card Content */}
                  <div className="p-5 rounded-xl bg-slate-900/40 border border-white/[0.08] group-hover:border-blue-500/30 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-display font-bold text-base sm:text-lg text-white">
                          {edu.institution}
                        </h4>
                        <p className="text-xs text-blue-400 font-mono mt-0.5">
                          {edu.degree}
                        </p>
                      </div>

                      <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-xs font-semibold">
                        {edu.score}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 my-2">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{edu.timeline}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 font-mono">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-indigo-400" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
                Certifications & Credentials
              </h3>
            </div>

            <div className="space-y-4">
{/*               
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-xl bg-gradient-to-b from-indigo-500/10 to-slate-900/50 border border-indigo-500/20 p-6 backdrop-blur-sm relative group hover:border-indigo-500/40 transition-all shadow-md"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-semibold">
                          VERIFIED
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-base text-white mt-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-indigo-300 font-mono mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 my-3">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{cert.date}</span>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06]">
                    <p className="font-mono text-[11px] text-slate-400 mb-2 uppercase tracking-wider">
                      Core Topics Covered:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.topics.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-slate-950/70 border border-white/[0.05] text-[11px] font-mono text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))} */}

             


{certifications.map((cert) => (
  <div
    key={cert.title}
    className="rounded-xl bg-gradient-to-b from-indigo-500/10 to-slate-900/50 border border-indigo-500/20 p-6 backdrop-blur-sm relative group hover:border-indigo-500/40 transition-all shadow-md flex flex-col justify-between"
  >
    <div>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-semibold">
                VERIFIED
              </span>
            </div>
            <h4 className="font-display font-bold text-base text-white mt-1">
              {cert.title}
            </h4>
            <p className="text-xs text-indigo-300 font-mono mt-0.5">
              {cert.issuer}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 my-3">
        <Calendar className="w-3.5 h-3.5 text-slate-500" />
        <span>{cert.date}</span>
      </div>

      <div className="pt-3 border-t border-white/[0.06] mb-4">
        <p className="font-mono text-[11px] text-slate-400 mb-2 uppercase tracking-wider">
          Core Topics Covered:
        </p>
        <div className="flex flex-wrap gap-1.5">
          {cert.topics.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded bg-slate-950/70 border border-white/[0.05] text-[11px] font-mono text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* View Credential Button */}
    {cert.link && (
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-medium transition-all group-hover:border-indigo-500/50"
      >
        <span>View Certificate</span>
        <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
      </a>
    )}
  </div>
))}








              {/* Quick Academic Snapshot Card */}
              <div className="p-5 rounded-xl bg-slate-900/30 border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-mono text-xs font-semibold text-white">Current Standing</h5>
                    <p className="text-xs text-slate-400">Lovely Professional University</p>
                  </div>
                </div>
                <span className="font-mono font-bold text-sm text-emerald-400">
                   8.5CGPA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
