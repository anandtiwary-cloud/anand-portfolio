import { useEffect, useState } from 'react'
import { FileText, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-ink-700 bg-ink-950/90 backdrop-blur'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between">
        <a href="#home" className="font-mono text-sm font-semibold tracking-wider text-white">
          <span className="text-accent">▲</span> {profile.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !py-2"
            >
              <FileText className="h-4 w-4" aria-hidden="true" /> View Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-slate-300 hover:bg-ink-800 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-ink-700 bg-ink-950 md:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-slate-300 hover:bg-ink-800 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                <FileText className="h-4 w-4" aria-hidden="true" /> View Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
