import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Scissors, Users, MapPin, Phone } from 'lucide-react'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Waco Fades Barber Shop</title>
        <meta
          name="description"
          content="Waco Fades Barber Shop on Franklin Ave. A neighborhood barber shop built on fades, consistency, and community. 353 Google reviews."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-ink-fg pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-accent mb-4">About us</p>
              <h1 className="font-display font-bold text-4xl md:text-5xl uppercase text-ink-bg leading-tight mb-6">
                FADES FIRST.
                <br />
                EVERYTHING ELSE SECOND.
              </h1>
              <p className="text-ink-muted text-lg leading-relaxed mb-4">
                We opened Waco Fades because this neighborhood needed a shop where the barbers actually specialize in what most people walk in asking for: a clean fade.
              </p>
              <p className="text-ink-muted leading-relaxed">
                Every barber on this floor started on fades. Skin fades, taper fades, drop fades, mid fades. We drilled the fundamentals before we moved to anything else. That is how we built this shop, and that is why 353 people left us a review.
              </p>
            </div>
            <div className="overflow-hidden border-3 border-ink-bg shadow-[6px_6px_0px_hsl(0_80%_52%)]" style={{ borderWidth: '3px' }}>
              <img
                src="https://images.unsplash.com/photo-1648221122279-5246dd0cf86c?auto=format&fit=crop&w=700&q=80"
                alt="Waco Fades barber shop interior showing barber chairs and mirrors"
                width={700}
                height={500}
                loading="eager"
                className="w-full aspect-[7/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink-bg py-16 md:py-20 border-y-3 border-ink-border" style={{ borderTopWidth: '3px', borderBottomWidth: '3px' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-accent mb-3">What drives us</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl uppercase">
              THREE THINGS WE CARE ABOUT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-ink-surface border-3 border-ink-border p-6 shadow-brutal" style={{ borderWidth: '3px' }}>
              <Scissors size={24} className="text-ink-accent mb-4" />
              <h3 className="font-display font-bold text-lg uppercase mb-2">Precision</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                A fade is measured in millimeters. We treat it that way. Every blend is checked from three angles before you leave the chair.
              </p>
            </div>
            <div className="bg-ink-surface border-3 border-ink-border p-6 shadow-brutal" style={{ borderWidth: '3px' }}>
              <Users size={24} className="text-ink-accent mb-4" />
              <h3 className="font-display font-bold text-lg uppercase mb-2">Consistency</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                You should get the same cut whether you walk in on Monday morning or Saturday afternoon. Same quality from every chair.
              </p>
            </div>
            <div className="bg-ink-surface border-3 border-ink-border p-6 shadow-brutal" style={{ borderWidth: '3px' }}>
              <MapPin size={24} className="text-ink-accent mb-4" />
              <h3 className="font-display font-bold text-lg uppercase mb-2">Neighborhood</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                We are on Franklin Ave because that is where we live, too. This is not a chain. This is a neighborhood shop for Waco, by Waco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The shop */}
      <section className="bg-ink-surface py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="overflow-hidden border-3 border-ink-border shadow-brutal" style={{ borderWidth: '3px' }}>
              <img
                src="https://images.unsplash.com/photo-1629470937872-7419a74f628c?auto=format&fit=crop&w=700&q=80"
                alt="Barber working on a client with clippers, focused detail shot"
                width={700}
                height={500}
                loading="lazy"
                className="w-full aspect-[7/5] object-cover"
              />
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl uppercase mb-4">THE SHOP</h2>
              <p className="text-ink-muted leading-relaxed mb-4">
                Six chairs. Walk-in friendly seven days a week. We keep the music up and the wait times down. Most clients are in and out in 35 minutes.
              </p>
              <p className="text-ink-muted leading-relaxed mb-4">
                We stock Andis, Wahl, and BaByliss clippers. Every station has its own sanitized set. We use Barbicide for all tools between clients, and fresh capes every time.
              </p>
              <p className="text-ink-muted leading-relaxed">
                The shop is at 3122 Franklin Ave, right next to the usual parking. Easy to find, easier to walk into.
              </p>

              <div className="mt-6">
                <a
                  href="tel:+12547320056"
                  className="inline-flex items-center gap-2 bg-ink-accent text-white px-5 py-3 font-mono text-sm uppercase tracking-wider border-3 border-ink-fg shadow-brutal hover:translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-150"
                  style={{ borderWidth: '3px' }}
                >
                  <Phone size={14} strokeWidth={2.5} />
                  (254) 732-0056
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-accent py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase text-white mb-4">
            COME SEE THE SHOP.
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Walk-ins every day. Franklin Ave, Waco.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-ink-fg text-ink-bg px-6 py-3 font-mono text-sm uppercase tracking-wider border-3 border-ink-bg shadow-[4px_4px_0px_hsl(45_20%_94%)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_hsl(45_20%_94%)] transition-all duration-150"
            style={{ borderWidth: '3px' }}
          >
            Get Directions
          </Link>
        </div>
      </section>
    </>
  )
}
