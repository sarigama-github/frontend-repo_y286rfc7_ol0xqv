import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const go = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500 shadow-md" />
            <span className="font-semibold tracking-tight text-gray-900">PhD Portfolio</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <button key={l.href} onClick={() => go(l.href)} className="text-gray-700 hover:text-gray-900 transition-colors">
                {l.label}
              </button>
            ))}
            <a href="#contact" onClick={(e)=>{e.preventDefault();go('#contact')}} className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30">
              Get in touch
            </a>
          </nav>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/90">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <button key={l.href} onClick={() => go(l.href)} className="block w-full text-left px-2 py-2 rounded-md hover:bg-gray-50">
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
