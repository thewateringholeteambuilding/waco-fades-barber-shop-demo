import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Phone, X } from 'lucide-react'

const galleryImages = [
  { src: 'photo-1622286342621-4bd786c2447c', alt: 'Skin fade with sharp lineup, side profile', category: 'fades' },
  { src: 'photo-1599351431202-1e0f0137899a', alt: 'Mid taper fade with textured crop on top', category: 'fades' },
  { src: 'photo-1654097803253-d481b6751f29', alt: 'Barber performing a precise skin fade with clippers', category: 'fades' },
  { src: 'photo-1596728325488-58c87691e9af', alt: 'Fresh drop fade from the back, clean blend', category: 'fades' },
  { src: 'photo-1629470937872-7419a74f628c', alt: 'Straight razor work on a beard lineup', category: 'beard' },
  { src: 'photo-1648221122279-5246dd0cf86c', alt: 'Barbershop interior with leather chairs and mirrors', category: 'shop' },
  { src: 'photo-1521499892833-773a6c6fd0b8', alt: 'Classic barbershop aesthetic, warm lighting', category: 'shop' },
  { src: 'photo-1640301133543-41fe25ad6450', alt: 'Barber tools laid out: clippers, guards, straight razor', category: 'shop' },
  { src: 'photo-1605497788044-5a32c7078486', alt: 'Low taper fade on curly hair, clean edges', category: 'fades' },
  { src: 'photo-1654097800183-574ba7368f74', alt: 'Young client getting a fresh fade, smiling', category: 'fades' },
  { src: 'photo-1735150950233-d8d10d5926a8', alt: 'Detailed beard shaping with precision clippers', category: 'beard' },
  { src: 'photo-1493256338651-d82f7acb2b38', alt: 'Barber and client in conversation during a cut', category: 'shop' },
]

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Fades', value: 'fades' },
  { label: 'Beard', value: 'beard' },
  { label: 'The Shop', value: 'shop' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState<string | null>(null)

  const filtered = filter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter)

  return (
    <>
      <Helmet>
        <title>Gallery | Waco Fades Barber Shop</title>
        <meta
          name="description"
          content="See our work. Skin fades, taper fades, drop fades, beard trims, and lineups from Waco Fades Barber Shop on Franklin Ave."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-ink-fg pt-24 pb-12 md:pt-28 md:pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-accent mb-4">Gallery</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl uppercase text-ink-bg leading-tight mb-4">
            THE WORK SPEAKS.
          </h1>
          <p className="text-ink-muted text-lg max-w-lg">
            Every fade, every lineup, every beard shape. Real cuts from real clients at the shop.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="bg-ink-bg border-y-3 border-ink-border sticky top-16 z-30" style={{ borderTopWidth: '3px', borderBottomWidth: '3px' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`shrink-0 font-mono text-xs uppercase tracking-wider px-4 py-2 border-2 transition-colors duration-150 ${
                filter === cat.value
                  ? 'bg-ink-fg text-ink-bg border-ink-fg'
                  : 'border-ink-border text-ink-fg hover:bg-ink-surface'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="bg-ink-bg py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((img) => (
              <button
                key={img.src}
                onClick={() => setLightbox(img.src)}
                className="overflow-hidden border-3 border-ink-border shadow-brutal hover:translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-150 group"
                style={{ borderWidth: '3px' }}
              >
                <img
                  src={`https://images.unsplash.com/${img.src}?auto=format&fit=crop&w=400&q=80`}
                  alt={img.alt}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-ink-muted font-mono text-sm uppercase tracking-wider py-16">
              No images in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-accent py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase text-white mb-4">
            WANT YOUR FADE IN THE GALLERY?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Walk in. Sit down. Walk out sharp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+12547320056"
              className="flex items-center justify-center gap-2 bg-ink-fg text-ink-bg px-6 py-3 font-mono text-sm uppercase tracking-wider border-3 border-ink-bg shadow-[4px_4px_0px_hsl(45_20%_94%)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_hsl(45_20%_94%)] transition-all duration-150"
              style={{ borderWidth: '3px' }}
            >
              <Phone size={16} strokeWidth={2.5} />
              Call the Shop
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-white text-ink-fg px-6 py-3 font-mono text-sm uppercase tracking-wider border-3 border-ink-fg shadow-brutal hover:translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-150"
              style={{ borderWidth: '3px' }}
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-ink-fg/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-ink-bg hover:text-ink-accent transition-colors duration-150"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={`https://images.unsplash.com/${lightbox}?auto=format&fit=crop&w=1200&q=90`}
            alt="Enlarged gallery view"
            className="max-w-full max-h-[85vh] object-contain border-3 border-ink-bg"
            style={{ borderWidth: '3px' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
