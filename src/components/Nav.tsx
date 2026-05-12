import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        scrolled
          ? 'bg-ink-bg border-b-3 border-ink-border shadow-brutal'
          : 'bg-transparent'
      }`}
      style={{ borderBottomWidth: scrolled ? '3px' : '0' }}
    >
      <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-display font-bold text-xl tracking-tight text-ink-fg uppercase"
          >
            WACO<span className="text-ink-accent"> FADES</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 font-mono text-sm uppercase tracking-wider transition-colors duration-150 border-2 border-transparent hover:border-ink-border hover:shadow-brutal ${
                  location.pathname === link.path
                    ? 'bg-ink-fg text-ink-bg font-medium'
                    : 'text-ink-fg'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+12547320056"
              className="ml-3 flex items-center gap-2 bg-ink-accent text-white px-4 py-2 font-mono text-sm uppercase tracking-wider border-3 border-ink-fg shadow-brutal hover:translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-150"
              style={{ borderWidth: '3px' }}
            >
              <Phone size={14} strokeWidth={2.5} />
              Call Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 border-2 border-ink-border"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t-3 border-ink-border bg-ink-bg pb-4" style={{ borderTopWidth: '3px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 font-mono text-sm uppercase tracking-wider border-b-2 border-ink-surface ${
                  location.pathname === link.path
                    ? 'bg-ink-fg text-ink-bg font-medium'
                    : 'text-ink-fg'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+12547320056"
              className="flex items-center justify-center gap-2 mx-4 mt-3 bg-ink-accent text-white py-3 font-mono text-sm uppercase tracking-wider border-3 border-ink-fg shadow-brutal"
              style={{ borderWidth: '3px' }}
            >
              <Phone size={14} strokeWidth={2.5} />
              (254) 732-0056
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
