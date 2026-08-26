import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Copy, Check, RefreshCw, KeyRound, ShieldAlert, Sparkles } from 'lucide-react'

export default function PasswordDemoModal({ isOpen, onClose }) {
  const [length, setLength] = useState(16)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)

  const generatePassword = () => {
    let chars = ''
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz'
    if (includeNumbers) chars += '0123456789'
    if (includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?'

    if (!chars) {
      setPassword('Please select at least one option!')
      return
    }

    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setPassword(result)
    setCopied(false)
  }

  // Generate on first mount or open if empty
  React.useEffect(() => {
    if (isOpen && !password) {
      generatePassword()
    }
  }, [isOpen])

  const copyToClipboard = () => {
    if (!password || password.includes('Please select')) return
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getStrength = () => {
    let score = 0
    if (length >= 12) score++
    if (length >= 16) score++
    if (includeUppercase && includeLowercase) score++
    if (includeNumbers) score++
    if (includeSymbols) score++

    if (score <= 2) return { label: 'Weak', color: 'text-rose-400 bg-rose-500/20 border-rose-500/30' }
    if (score <= 4) return { label: 'Medium', color: 'text-amber-400 bg-amber-500/20 border-amber-500/30' }
    return { label: 'Strong (Enterprise)', color: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30' }
  }

  if (!isOpen) return null

  const strength = getStrength()

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg rounded-2xl bg-[#0b111e] border border-white/10 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  Password Generator Sandbox
                </h3>
                <p className="text-xs text-slate-400 font-mono">Live Interactive Demo</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Generated Result Output */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-between gap-3">
              <div className="font-mono text-sm sm:text-base text-blue-300 font-medium break-all select-all">
                {password || 'Click Generate'}
              </div>
              
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                  title="Copy password"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <button
                  onClick={generatePassword}
                  className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                  title="Regenerate"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Strength Badge */}
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Security Score:</span>
              <span className={`px-2.5 py-0.5 rounded-full border ${strength.color}`}>
                {strength.label}
              </span>
            </div>

            {/* Length Slider */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">Password Length</span>
                <span className="text-blue-400 font-bold">{length} characters</span>
              </div>
              <input
                type="range"
                min="6"
                max="32"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            {/* Checkbox Options */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-white/[0.05] cursor-pointer hover:bg-slate-900 transition-colors text-xs font-mono text-slate-300">
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-950 text-blue-600 accent-blue-500"
                />
                <span>Uppercase (A-Z)</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-white/[0.05] cursor-pointer hover:bg-slate-900 transition-colors text-xs font-mono text-slate-300">
                <input
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-950 text-blue-600 accent-blue-500"
                />
                <span>Lowercase (a-z)</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-white/[0.05] cursor-pointer hover:bg-slate-900 transition-colors text-xs font-mono text-slate-300">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-950 text-blue-600 accent-blue-500"
                />
                <span>Numbers (0-9)</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-white/[0.05] cursor-pointer hover:bg-slate-900 transition-colors text-xs font-mono text-slate-300">
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-950 text-blue-600 accent-blue-500"
                />
                <span>Symbols (!@#$)</span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono"
              >
                Close Sandbox
              </button>
              <button
                onClick={generatePassword}
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Generate Password
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
