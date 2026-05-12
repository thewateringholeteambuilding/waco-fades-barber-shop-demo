import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock } from 'lucide-react'

const serviceLinks = [
  { label: 'Skin Fades', anchor: '/services#skin-fades' },
  { label: 'Taper Fades', anchor: '/services#taper-fades' },
  { label: 'Classic Cuts', anchor: '/services#classic-cuts' },
  { label: 'Beard Trims', anchor: '/services#beard-trims' },
  { label: 'Lineups', anchor: '/services#lineups' },
  { label: 'Kids Cuts', anchor: '/services#kids-cuts' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-fg text-ink-bg border-t-4 border-ink-accent" style={{ borderTopWidth: '4px' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand + philosophy */}
          <div>
            <p className="font-display font-bold text-2xl uppercase tracking-tight mb-3">
              WACO<span className="text-ink-accent"> FADES</span>
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-4">
              Walk in. Sit down. Walk out sharp.
            </p>
            <div className="flex items-start gap-2 text-sm text-ink-muted mb-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>3122 Franklin Ave, Waco, TX 76710</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-muted mb-2">
              <Phone size={16} className="shrink-0" />
              <a href="tel:+12547320056" className="hover:text-ink-accent transition-colors duration-150">
                (254) 732-0056
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-muted">
              <Clock size={16} className="mt-0.5 shrink-0" />
              <span>Mon-Fri 9am-7pm, Sat 8am-5pm</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-ink-accent">Services</p>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.anchor}
                    className="text-sm text-ink-muted hover:text-ink-accent transition-colors duration-150 font-mono"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-ink-accent">Quick Links</p>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-ink-muted hover:text-ink-accent transition-colors duration-150 font-mono">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-ink-muted hover:text-ink-accent transition-colors duration-150 font-mono">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-ink-muted hover:text-ink-accent transition-colors duration-150 font-mono">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-sm text-ink-muted hover:text-ink-accent transition-colors duration-150 font-mono">
                  Legal
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://maps.google.com/?cid=12533853634232352227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ink-accent text-white font-mono text-xs uppercase tracking-wider px-4 py-2 border-2 border-ink-bg shadow-[3px_3px_0px_hsl(0_80%_52%)] hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500 font-mono">
          <p>&copy; {new Date().getFullYear()} Waco Fades Barber Shop. All rights reserved.</p>
          <p>3122 Franklin Ave, Waco, TX 76710</p>
        </div>
      </div>
    </footer>
  )
}
