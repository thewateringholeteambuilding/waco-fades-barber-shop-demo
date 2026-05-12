import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'

export default function Legal() {
  return (
    <>
      <Helmet>
        <title>Legal | Waco Fades Barber Shop</title>
        <meta name="description" content="Legal information, privacy policy, and terms of service for Waco Fades Barber Shop." />
      </Helmet>

      <div className="bg-ink-bg min-h-screen pt-12 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink-accent transition-colors duration-150 mb-8"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <h1 className="font-display font-bold text-3xl uppercase mb-8">Legal</h1>

          <div className="space-y-10">
            <section>
              <h2 className="font-display font-bold text-xl uppercase mb-3 border-b-3 border-ink-border pb-2" style={{ borderBottomWidth: '3px' }}>
                Privacy Policy
              </h2>
              <div className="prose prose-sm max-w-none text-ink-muted space-y-3">
                <p>
                  Waco Fades Barber Shop ("we", "us", "our") respects your privacy. This policy describes what information we collect when you visit our website and how we use it.
                </p>
                <p>
                  <strong className="text-ink-fg">Information We Collect:</strong> When you submit a contact form, we collect your name, phone number, and message. We use Google Analytics to collect anonymous usage data (pages visited, time on site, device type).
                </p>
                <p>
                  <strong className="text-ink-fg">How We Use It:</strong> Contact form submissions are used solely to respond to your inquiry. Analytics data helps us understand how visitors use the site so we can improve it.
                </p>
                <p>
                  <strong className="text-ink-fg">Third Parties:</strong> We do not sell your personal information. Analytics data is processed by Google Analytics under their privacy terms.
                </p>
                <p>
                  <strong className="text-ink-fg">Contact:</strong> For privacy questions, call us at (254) 732-0056 or visit us at 3122 Franklin Ave, Waco, TX 76710.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl uppercase mb-3 border-b-3 border-ink-border pb-2" style={{ borderBottomWidth: '3px' }}>
                Terms of Service
              </h2>
              <div className="prose prose-sm max-w-none text-ink-muted space-y-3">
                <p>
                  By using this website, you agree to these terms. This site is for informational purposes only. Service availability, pricing, and hours are subject to change without notice.
                </p>
                <p>
                  All content on this site (text, images, design) is the property of Waco Fades Barber Shop or used under license. You may not copy, reproduce, or distribute content without permission.
                </p>
                <p>
                  We make reasonable efforts to keep information accurate but make no warranties about completeness or accuracy. For current pricing and availability, call the shop directly.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl uppercase mb-3 border-b-3 border-ink-border pb-2" style={{ borderBottomWidth: '3px' }}>
                Accessibility
              </h2>
              <div className="prose prose-sm max-w-none text-ink-muted space-y-3">
                <p>
                  We are committed to making this website accessible to all visitors. If you experience difficulty accessing any part of this site, please call us at (254) 732-0056 and we will assist you.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
