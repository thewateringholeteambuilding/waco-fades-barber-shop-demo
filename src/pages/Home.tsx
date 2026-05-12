import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Star, Phone, Clock, Users, ChevronRight } from 'lucide-react'

const services = [
  {
    name: 'Skin Fades',
    desc: 'Zero-guard to seamless blend. Our signature.',
    time: '35 min',
    price: '$30',
  },
  {
    name: 'Taper Fades',
    desc: 'Low, mid, or high taper with a clean blend every time.',
    time: '30 min',
    price: '$25',
  },
  {
    name: 'Drop Fades',
    desc: 'Drops behind the ear for a curved, contoured silhouette.',
    time: '35 min',
    price: '$30',
  },
  {
    name: 'Classic Cuts',
    desc: 'Scissor cuts, crew cuts, buzz cuts. No fade needed.',
    time: '25 min',
    price: '$20',
  },
  {
    name: 'Beard Work',
    desc: 'Shape, line, trim. Hot towel finish.',
    time: '20 min',
    price: '$15',
  },
  {
    name: 'Kids Cuts',
    desc: 'Ages 12 and under. Same precision, more patience.',
    time: '20 min',
    price: '$18',
  },
]

const reviews = [
  {
    text: 'Been coming here every two weeks for over a year. My skin fade is always dialed in. Never had to explain what I want twice.',
    name: 'Marcus T.',
    date: 'March 2026',
    rating: 5,
  },
  {
    text: 'Walked in on a Saturday without an appointment. Waited maybe 15 minutes. Got the cleanest taper fade I have had in Waco. Period.',
    name: 'Darnell W.',
    date: 'January 2026',
    rating: 5,
  },
  {
    text: 'My son is 7 and hates haircuts. The barber here was patient, let him pick the clippers, and gave him a better lineup than most adults get.',
    name: 'Christina R.',
    date: 'November 2025',
    rating: 5,
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Waco Fades Barber Shop | Fades, Cuts & Lineups in Waco, TX</title>
        <meta
          name="description"
          content="Waco's fade specialists on Franklin Ave. Skin fades, taper fades, beard trims, lineups, and kids cuts. 353 Google reviews. Walk-ins welcome."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-ink-fg overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text */}
            <div className="relative z-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-accent mb-4">
                3122 Franklin Ave, Waco TX
              </p>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ink-bg uppercase leading-[1.05] mb-6">
                FADES. CUTS.
                <br />
                <span className="text-ink-accent">COMMUNITY.</span>
              </h1>
              <p className="text-ink-muted text-lg mb-8 max-w-md leading-relaxed">
                Waco's fade specialists. 353 reviews from the neighborhood. Walk-ins welcome every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+12547320056"
                  className="flex items-center justify-center gap-2 bg-ink-accent text-white px-6 py-3 font-mono text-sm uppercase tracking-wider border-3 border-ink-bg shadow-[4px_4px_0px_hsl(45_20%_94%)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_hsl(45_20%_94%)] transition-all duration-150"
                  style={{ borderWidth: '3px' }}
                >
                  <Phone size={16} strokeWidth={2.5} />
                  (254) 732-0056
                </a>
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-2 bg-ink-bg text-ink-fg px-6 py-3 font-mono text-sm uppercase tracking-wider border-3 border-ink-bg hover:bg-ink-surface transition-colors duration-150"
                  style={{ borderWidth: '3px' }}
                >
                  See Services
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="relative">
              <div className="overflow-hidden border-3 border-ink-bg shadow-[6px_6px_0px_hsl(0_80%_52%)]" style={{ borderWidth: '3px' }}>
                <img
                  src="https://images.unsplash.com/photo-1654097803253-d481b6751f29?auto=format&fit=crop&w=800&q=80"
                  alt="Barber performing a precise skin fade with clippers"
                  width={800}
                  height={600}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full aspect-[4/3] object-cover animate-ken-burns"
                />
              </div>
              {/* Trust badge */}
              <div className="absolute -bottom-4 -left-2 md:-left-4 bg-ink-accent text-white px-4 py-3 border-3 border-ink-bg shadow-brutal" style={{ borderWidth: '3px' }}>
                <div className="flex items-center gap-2">
                  <Star size={16} fill="white" strokeWidth={0} />
                  <span className="font-mono text-sm font-medium">4.0</span>
                  <span className="font-mono text-xs opacity-80">from 353 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink-bg border-y-3 border-ink-border" style={{ borderTopWidth: '3px', borderBottomWidth: '3px' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-display font-bold text-3xl text-ink-fg">353</p>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mt-1">Google Reviews</p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl text-ink-accent">6</p>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mt-1">Chairs Running</p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl text-ink-fg">7</p>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mt-1">Days Walk-Ins</p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl text-ink-fg">15</p>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mt-1">Min Avg Wait</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section id="services-preview" className="bg-ink-bg py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-accent mb-3">What we do</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl uppercase">
              THE MENU
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-ink-surface border-3 border-ink-border p-5 shadow-brutal hover:translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-150 group"
                style={{ borderWidth: '3px' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-lg uppercase">{service.name}</h3>
                  <span className="font-mono text-lg font-bold text-ink-accent">{service.price}</span>
                </div>
                <p className="text-sm text-ink-muted mb-3">{service.desc}</p>
                <div className="flex items-center gap-2 text-xs text-ink-muted font-mono">
                  <Clock size={12} />
                  <span>{service.time}</span>
                </div>
                <div className="h-1 bg-ink-accent mt-4 w-0 group-hover:w-full transition-all duration-200" />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-ink-fg border-3 border-ink-border px-6 py-3 shadow-brutal hover:translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-150"
              style={{ borderWidth: '3px' }}
            >
              Full Service Menu
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* The Waco Fades Way (process) */}
      <section className="bg-ink-fg py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl uppercase text-ink-bg">
              THE WACO FADES WAY
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'WALK IN', desc: 'No appointment needed. First come, first served. Grab a seat.' },
              { num: '02', title: 'CONSULT', desc: 'Tell your barber what you want. Show a photo or describe it. We listen.' },
              { num: '03', title: 'CUT', desc: 'Clippers, guards, straight razor. Every fade is built from the skin up.' },
              { num: '04', title: 'WALK OUT SHARP', desc: 'Lineup cleaned. Neck tapered. Hot towel. You are done in under 40 minutes.' },
            ].map((step) => (
              <div key={step.num} className="relative bg-ink-surface/10 border-2 border-ink-muted/30 p-5">
                <span className="font-mono text-4xl font-bold text-ink-accent/30 absolute top-3 right-4">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-lg text-ink-bg uppercase mt-8 mb-2">{step.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-ink-bg py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-accent mb-3">Real talk</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl uppercase">
              353 REVIEWS. HERE ARE THREE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <blockquote
                key={review.name}
                className="bg-ink-surface border-3 border-ink-border p-6 shadow-brutal"
                style={{ borderWidth: '3px' }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="hsl(0 80% 52%)" stroke="none" />
                  ))}
                </div>
                <p className="text-sm text-ink-fg leading-relaxed mb-4">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <cite className="not-italic font-mono text-xs uppercase tracking-wider text-ink-fg font-medium">
                    {review.name}
                  </cite>
                  <span className="font-mono text-xs text-ink-muted">{review.date}</span>
                </div>
              </blockquote>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://maps.google.com/?cid=12533853634232352227"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink-accent transition-colors duration-150"
            >
              Read all 353 reviews on Google
              <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-ink-surface py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl uppercase">
                FRESH FROM THE CHAIR
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-ink-fg border-3 border-ink-border px-5 py-2 shadow-brutal hover:translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-150"
              style={{ borderWidth: '3px' }}
            >
              Full Gallery
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: 'photo-1622286342621-4bd786c2447c', alt: 'Clean skin fade side profile' },
              { src: 'photo-1599351431202-1e0f0137899a', alt: 'Mid taper fade with textured top' },
              { src: 'photo-1629470937872-7419a74f628c', alt: 'Barber using straight razor on lineup' },
              { src: 'photo-1521499892833-773a6c6fd0b8', alt: 'Classic barbershop interior with leather chairs' },
            ].map((img) => (
              <div
                key={img.src}
                className="overflow-hidden border-3 border-ink-border shadow-brutal"
                style={{ borderWidth: '3px' }}
              >
                <img
                  src={`https://images.unsplash.com/${img.src}?auto=format&fit=crop&w=400&q=80`}
                  alt={img.alt}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner strip */}
      <section className="bg-ink-fg py-12 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-16 h-16 bg-ink-accent flex items-center justify-center border-3 border-ink-bg shrink-0" style={{ borderWidth: '3px' }}>
              <span className="font-display font-bold text-2xl text-white">WF</span>
            </div>
            <div className="text-center md:text-left">
              <p className="font-display font-bold text-xl text-ink-bg uppercase mb-1">
                Owner-Operated on Franklin Ave
              </p>
              <p className="text-sm text-ink-muted max-w-lg">
                Every barber in this shop was trained on fades first. We built our reputation one lineup at a time, and 353 Google reviews later, we are still walk-in friendly.
              </p>
            </div>
            <div className="md:ml-auto shrink-0">
              <a
                href="tel:+12547320056"
                className="flex items-center gap-2 bg-ink-accent text-white px-5 py-3 font-mono text-sm uppercase tracking-wider border-3 border-ink-bg shadow-[4px_4px_0px_hsl(45_20%_94%)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_hsl(45_20%_94%)] transition-all duration-150"
                style={{ borderWidth: '3px' }}
              >
                <Phone size={14} strokeWidth={2.5} />
                Call the Shop
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-accent py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase text-white mb-4">
            YOUR FADE IS WAITING.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
            Walk in any day of the week. No appointment needed. Franklin Ave, Waco.
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
              <Users size={16} />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
