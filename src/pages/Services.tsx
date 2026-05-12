import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Clock, Phone, ChevronRight } from 'lucide-react'

interface ServiceItem {
  name: string
  price: string
  time: string
  desc: string
  details: string[]
}

const fadeServices: ServiceItem[] = [
  {
    name: 'Skin Fade',
    price: '$30',
    time: '35 min',
    desc: 'Our signature. Zero guard at the bottom, seamless blend to the top.',
    details: ['Bald to skin at the neckline', 'Three-stage guard progression', 'Straight razor edge-up included', 'Hot towel finish'],
  },
  {
    name: 'Taper Fade',
    price: '$25',
    time: '30 min',
    desc: 'Low, mid, or high taper. Clean blend, professional finish.',
    details: ['Choose your taper height', 'Gradual guard transition', 'Scissor blending on top if needed', 'Lineup included'],
  },
  {
    name: 'Drop Fade',
    price: '$30',
    time: '35 min',
    desc: 'Drops behind the ear for a curved, contoured silhouette.',
    details: ['Follows the natural head shape', 'Drops lower behind the ear', 'Works with curly, wavy, or straight hair', 'Edge-up and lineup included'],
  },
  {
    name: 'Mid Fade',
    price: '$25',
    time: '30 min',
    desc: 'Starts at the temple line. The middle ground between low and high.',
    details: ['Temple-line start point', 'Balanced blend ratio', 'Pairs well with textured top', 'Neckline tapered or squared'],
  },
]

const otherServices: ServiceItem[] = [
  {
    name: 'Classic Cut',
    price: '$20',
    time: '25 min',
    desc: 'Scissor cuts, crew cuts, buzz cuts. No fade required.',
    details: ['Scissor or clipper', 'Shampoo available add-on', 'Neck and sideburn cleanup', 'Style advice included'],
  },
  {
    name: 'Beard Trim & Shape',
    price: '$15',
    time: '20 min',
    desc: 'Shape, line, and trim your beard. Hot towel finish.',
    details: ['Cheek and neckline defined', 'Guard-length consistency', 'Straight razor line work', 'Hot towel and oil finish'],
  },
  {
    name: 'Lineup / Edge-Up',
    price: '$12',
    time: '15 min',
    desc: 'Hairline, temples, and beard line cleaned up with a straight razor.',
    details: ['Forehead hairline sharpened', 'Temple lines defined', 'Beard line if applicable', 'Walk-in friendly, quick service'],
  },
  {
    name: 'Kids Cut (12 & Under)',
    price: '$18',
    time: '20 min',
    desc: 'Same precision, more patience. Fades and classic cuts for kids.',
    details: ['Ages 12 and under', 'Fades or classic cuts available', 'Patient barbers, calm environment', 'Lollipop on the house'],
  },
]

function ServiceCard({ service, accentBorder }: { service: ServiceItem; accentBorder?: boolean }) {
  return (
    <div
      className={`bg-ink-surface border-3 p-6 shadow-brutal hover:translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-150 group ${
        accentBorder ? 'border-ink-accent' : 'border-ink-border'
      }`}
      style={{ borderWidth: '3px' }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-display font-bold text-xl uppercase">{service.name}</h3>
        <div className="text-right shrink-0 ml-4">
          <span className="font-mono text-xl font-bold text-ink-accent">{service.price}</span>
          <div className="flex items-center gap-1 text-xs text-ink-muted font-mono mt-1">
            <Clock size={10} />
            <span>{service.time}</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-ink-muted mb-4">{service.desc}</p>
      <ul className="space-y-1.5">
        {service.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2 text-sm text-ink-fg">
            <span className="text-ink-accent font-bold mt-0.5">+</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      <div className="h-1 bg-ink-accent mt-5 w-0 group-hover:w-full transition-all duration-200" />
    </div>
  )
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services & Prices | Waco Fades Barber Shop</title>
        <meta
          name="description"
          content="Full service menu at Waco Fades. Skin fades from $30, taper fades from $25, classic cuts from $20, beard trims, lineups, and kids cuts. Walk-ins welcome."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-ink-fg pt-24 pb-12 md:pt-28 md:pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-accent mb-4">Services & Prices</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl uppercase text-ink-bg leading-tight mb-4">
            THE FULL MENU.
          </h1>
          <p className="text-ink-muted text-lg max-w-lg">
            Fades are our specialty. Everything else we do well, too. Prices listed. No surprises.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <div className="bg-ink-bg border-y-3 border-ink-border sticky top-16 z-30" style={{ borderTopWidth: '3px', borderBottomWidth: '3px' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto">
          {[
            { label: 'Fades', id: 'fades' },
            { label: 'Cuts & More', id: 'cuts-more' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 font-mono text-xs uppercase tracking-wider px-4 py-2 border-2 border-ink-border hover:bg-ink-fg hover:text-ink-bg transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Fades */}
      <section id="fades" className="bg-ink-bg py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="font-display font-bold text-3xl uppercase mb-2">FADES</h2>
            <p className="text-ink-muted">The reason most people walk through our door.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fadeServices.map((service) => (
              <ServiceCard key={service.name} service={service} accentBorder />
            ))}
          </div>
        </div>
      </section>

      {/* Separator image */}
      <div className="bg-ink-fg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="overflow-hidden border-3 border-ink-bg shadow-[6px_6px_0px_hsl(0_80%_52%)]" style={{ borderWidth: '3px' }}>
            <img
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80"
              alt="Close-up of a fresh fade haircut showing precise gradient work"
              width={1200}
              height={400}
              loading="lazy"
              className="w-full aspect-[3/1] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Cuts & more */}
      <section id="cuts-more" className="bg-ink-bg py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="font-display font-bold text-3xl uppercase mb-2">CUTS & MORE</h2>
            <p className="text-ink-muted">Classic cuts, beard work, lineups, and kids cuts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherServices.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-ink-surface border-y-3 border-ink-border py-10 md:py-12" style={{ borderTopWidth: '3px', borderBottomWidth: '3px' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl uppercase mb-6">ADD-ONS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: 'Hot Towel Treatment', price: '$5' },
              { name: 'Hair Wash & Shampoo', price: '$8' },
              { name: 'Beard Oil & Balm', price: '$5' },
            ].map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between bg-ink-bg border-2 border-ink-border p-4"
              >
                <span className="font-body text-sm">{addon.name}</span>
                <span className="font-mono text-sm font-bold text-ink-accent">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-accent py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase text-white mb-4">
            READY FOR YOUR FADE?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Walk in or call ahead. No appointment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+12547320056"
              className="flex items-center justify-center gap-2 bg-ink-fg text-ink-bg px-6 py-3 font-mono text-sm uppercase tracking-wider border-3 border-ink-bg shadow-[4px_4px_0px_hsl(45_20%_94%)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_hsl(45_20%_94%)] transition-all duration-150"
              style={{ borderWidth: '3px' }}
            >
              <Phone size={16} strokeWidth={2.5} />
              (254) 732-0056
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-white text-ink-fg px-6 py-3 font-mono text-sm uppercase tracking-wider border-3 border-ink-fg shadow-brutal hover:translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-150"
              style={{ borderWidth: '3px' }}
            >
              Contact
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
