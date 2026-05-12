import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
    company_website: '', // honeypot
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (formData.company_website) return // honeypot triggered
    setSubmitted(true)
  }

  const serviceHints: Record<string, string> = {
    'skin-fade': 'Helpful: mention if you want a bald fade or a 0.5 guard start.',
    'taper-fade': 'Helpful: mention low, mid, or high taper preference.',
    'drop-fade': 'Helpful: mention if you want a burst fade element.',
    'classic-cut': 'Helpful: mention desired length or reference photo.',
    'beard': 'Helpful: mention current beard length and desired shape.',
    'lineup': 'Helpful: mention if you also need a quick trim.',
    'kids': 'Helpful: mention the child\'s age and what cut they want.',
  }

  return (
    <>
      <Helmet>
        <title>Contact & Location | Waco Fades Barber Shop</title>
        <meta
          name="description"
          content="Find Waco Fades Barber Shop at 3122 Franklin Ave, Waco, TX 76710. Walk-ins welcome. Call (254) 732-0056. Mon-Fri 9-7, Sat 8-5."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-ink-fg pt-24 pb-12 md:pt-28 md:pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-accent mb-4">Contact</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl uppercase text-ink-bg leading-tight mb-4">
            FIND THE SHOP.
          </h1>
          <p className="text-ink-muted text-lg max-w-lg">
            Walk-ins welcome every day. Call ahead if you want to check wait times.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="bg-ink-bg py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Info side */}
            <div>
              <h2 className="font-display font-bold text-2xl uppercase mb-6">SHOP INFO</h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 bg-ink-surface border-3 border-ink-border p-4 shadow-brutal" style={{ borderWidth: '3px' }}>
                  <MapPin size={20} className="text-ink-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-1">Address</p>
                    <p className="text-sm font-medium">3122 Franklin Ave</p>
                    <p className="text-sm">Waco, TX 76710</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-ink-surface border-3 border-ink-border p-4 shadow-brutal" style={{ borderWidth: '3px' }}>
                  <Phone size={20} className="text-ink-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-1">Phone</p>
                    <a
                      href="tel:+12547320056"
                      className="text-sm font-medium hover:text-ink-accent transition-colors duration-150"
                    >
                      (254) 732-0056
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-ink-surface border-3 border-ink-border p-4 shadow-brutal" style={{ borderWidth: '3px' }}>
                  <Clock size={20} className="text-ink-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-1">Hours</p>
                    <div className="text-sm space-y-0.5">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 8:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="border-3 border-ink-border shadow-brutal overflow-hidden" style={{ borderWidth: '3px' }}>
                <iframe
                  title="Waco Fades Barber Shop location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.5!2d-97.1467!3d31.5493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xadfcb1c3a9e0a6e3!2sWaco%20Fades%20Barber%20Shop!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              {/* Booking placeholder */}
              <div className="mt-6 bg-ink-surface border-3 border-ink-accent p-5 shadow-brutal-accent" style={{ borderWidth: '3px' }}>
                <p className="font-display font-bold text-lg uppercase mb-2">Online Booking</p>
                <p className="text-sm text-ink-muted mb-3">
                  Online booking coming soon. For now, walk in or call to check wait times.
                </p>
                <a
                  href="tel:+12547320056"
                  className="inline-flex items-center gap-2 bg-ink-accent text-white px-4 py-2 font-mono text-xs uppercase tracking-wider border-2 border-ink-fg hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150"
                >
                  <Phone size={12} strokeWidth={2.5} />
                  Call Ahead
                </a>
              </div>
            </div>

            {/* Form side */}
            <div>
              <h2 className="font-display font-bold text-2xl uppercase mb-6">SEND A MESSAGE</h2>

              {submitted ? (
                <div className="bg-ink-surface border-3 border-ink-accent p-8 shadow-brutal-accent text-center" style={{ borderWidth: '3px' }}>
                  <p className="font-display font-bold text-xl uppercase mb-2 text-ink-accent">Message Sent</p>
                  <p className="text-sm text-ink-muted">
                    We will get back to you soon. Or just walk in.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="company_website">Company Website</label>
                    <input
                      type="text"
                      id="company_website"
                      name="company_website"
                      value={formData.company_website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-ink-muted mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-ink-surface border-3 border-ink-border px-4 py-3 text-sm focus:border-ink-accent focus:outline-none transition-colors duration-150"
                      style={{ borderWidth: '3px' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-mono text-xs uppercase tracking-wider text-ink-muted mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-ink-surface border-3 border-ink-border px-4 py-3 text-sm focus:border-ink-accent focus:outline-none transition-colors duration-150"
                      style={{ borderWidth: '3px' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block font-mono text-xs uppercase tracking-wider text-ink-muted mb-1">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-ink-surface border-3 border-ink-border px-4 py-3 text-sm focus:border-ink-accent focus:outline-none transition-colors duration-150"
                      style={{ borderWidth: '3px' }}
                    >
                      <option value="">Select a service</option>
                      <option value="skin-fade">Skin Fade</option>
                      <option value="taper-fade">Taper Fade</option>
                      <option value="drop-fade">Drop Fade</option>
                      <option value="classic-cut">Classic Cut</option>
                      <option value="beard">Beard Trim & Shape</option>
                      <option value="lineup">Lineup / Edge-Up</option>
                      <option value="kids">Kids Cut</option>
                    </select>
                    {formData.service && serviceHints[formData.service] && (
                      <p className="text-xs text-ink-accent mt-1 font-mono">
                        {serviceHints[formData.service]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-ink-muted mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-ink-surface border-3 border-ink-border px-4 py-3 text-sm focus:border-ink-accent focus:outline-none transition-colors duration-150 resize-none"
                      style={{ borderWidth: '3px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full bg-ink-accent text-white py-3 font-mono text-sm uppercase tracking-wider border-3 border-ink-fg shadow-brutal hover:translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-150"
                    style={{ borderWidth: '3px' }}
                  >
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
