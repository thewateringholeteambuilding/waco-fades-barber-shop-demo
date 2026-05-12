import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  const isContactPage = location.pathname === '/contact'

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible || isContactPage) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-ink-fg border-t-3 border-ink-accent p-3 flex gap-2" style={{ borderTopWidth: '3px' }}>
      <a
        href="tel:+12547320056"
        className="flex-1 flex items-center justify-center gap-2 bg-ink-accent text-white py-3 font-mono text-xs uppercase tracking-wider border-2 border-ink-bg"
      >
        <Phone size={14} strokeWidth={2.5} />
        Call Now
      </a>
      <a
        href="https://maps.google.com/?cid=12533853634232352227"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-ink-bg text-ink-fg py-3 font-mono text-xs uppercase tracking-wider border-2 border-ink-fg"
      >
        <MapPin size={14} strokeWidth={2.5} />
        Walk In
      </a>
    </div>
  )
}
