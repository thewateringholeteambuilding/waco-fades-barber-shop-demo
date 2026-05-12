import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('wf-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem('wf-cookie-consent', 'accepted')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-4 md:left-4 md:right-auto md:max-w-sm bg-ink-fg text-ink-bg p-4 border-3 border-ink-accent shadow-brutal-lg" style={{ borderWidth: '3px' }}>
      <p className="text-sm mb-3 font-body">
        This site uses cookies for analytics and to improve your experience.
      </p>
      <button
        onClick={accept}
        className="bg-ink-accent text-white font-mono text-xs uppercase tracking-wider px-4 py-2 border-2 border-ink-bg hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150"
      >
        Got it
      </button>
    </div>
  )
}
