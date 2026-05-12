import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Scissors } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 | Waco Fades Barber Shop</title>
        <meta name="description" content="Page not found. Head back to Waco Fades Barber Shop." />
      </Helmet>

      <div className="bg-ink-bg min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-ink-accent text-white mb-6 border-3 border-ink-fg shadow-brutal" style={{ borderWidth: '3px' }}>
            <Scissors size={32} />
          </div>
          <h1 className="font-display font-bold text-6xl md:text-8xl uppercase text-ink-fg mb-2">404</h1>
          <p className="font-mono text-sm uppercase tracking-wider text-ink-muted mb-8">
            This page got faded a little too hard.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-ink-fg text-ink-bg px-6 py-3 font-mono text-sm uppercase tracking-wider border-3 border-ink-border shadow-brutal hover:translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-150"
            style={{ borderWidth: '3px' }}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </>
  )
}
