import { useState, lazy, Suspense } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SEOHead } from '../components/SEOHead';
import { getCityData } from '../data/cities';

// Lazy load voice chat component (only needed when user clicks demo)
const VoiceChat = lazy(() => import('../components/VoiceChat').then(m => ({ default: m.VoiceChat })));

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

interface LocationPageProps {
  citySlug: string;
}

export function LocationPage({ citySlug }: LocationPageProps) {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);
  const city = getCityData(citySlug);

  if (!city) {
    return (
      <div className="bg-off-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-black text-4xl uppercase text-charcoal mb-4">
            Location Not Found
          </h1>
          <p className="text-charcoal mb-8">
            We couldn't find information for this location.
          </p>
          <Button variant="primary" onClick={() => navigate('/')}>
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/#locations' },
    { name: city.name, url: `/locations/${city.slug}` },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Antek Automation',
    description: `AI automation agency serving businesses in ${city.name} — voice agents, chatbots and workflow automation.`,
    url: 'https://www.aiautomationagencyuk.com',
    telephone: '+443330389960',
    email: 'hello@antekautomation.com',
    areaServed: [city.name, city.region],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
    },
    serviceType: ['AI Voice Agents', 'AI Chatbots', 'Workflow Automation'],
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title={`AI Automation Agency Serving ${city.name} | Antek Automation`}
        description={`We work with businesses in ${city.name} — voice agents, chatbots and workflow automation. UK-wide agency. Book a call.`}
        path={`/locations/${city.slug}`}
        breadcrumbs={breadcrumbs}
        schema={localBusinessSchema}
      />

      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              Serving {city.name} | {city.region}
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation Agency Serving {city.name}
            </h1>
            <p className="text-lg text-charcoal leading-normal mb-4">
              {city.localContext}
            </p>
            <p className="text-lg text-charcoal leading-normal mb-10">
              {city.heroDescription}
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button variant="secondary" onClick={() => navigate('/contact')}>
                Book a Call →
              </Button>
              <Button variant="primary" onClick={() => setIsVoiceChatOpen(true)}>
                Try the Voice Agent
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            What We Build for {city.name} Businesses
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                AI Voice Agents
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Your phone answered 24/7. Books appointments, captures enquiries, handles the basics. Sounds human. Doesn't take sick days.
              </p>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => navigate('/services/ai-voice-agents')}
              >
                How It Works
              </Button>
            </Card>

            <Card hover>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                AI Chatbots
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Website or WhatsApp. Answers questions, qualifies leads, collects contact details — while you're actually working.
              </p>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => navigate('/services/ai-chatbots')}
              >
                How It Works
              </Button>
            </Card>

            <Card hover>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                Workflow Automation
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                The repetitive stuff between your tools — emails, CRM updates, reports, notifications — handled automatically using n8n.
              </p>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => navigate('/services/workflow-automation')}
              >
                How It Works
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Why {city.name} Businesses Work With Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {city.whyChooseUs.map((reason, index) => (
              <Card key={index} hover>
                <div className="w-12 h-12 bg-terracotta text-off-white flex items-center justify-center font-black text-2xl border-3 border-charcoal shadow-brutal mb-6">
                  {index + 1}
                </div>
                <h3 className="font-black text-xl uppercase text-charcoal mb-4">
                  {reason.title}
                </h3>
                <p className="text-charcoal leading-normal">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Who This Is For
          </h2>
          <p className="text-lg text-charcoal leading-normal mb-12 max-w-3xl">
            This works well for businesses where the phone is how most work comes in, where one missed call is a lost client, and where there's no dedicated admin support.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Tradespeople', desc: 'Plumbers, electricians, builders', href: '/who-we-help/tradespeople' },
              { label: 'Lawyers', desc: 'Small firms and sole practitioners', href: '/who-we-help/lawyers' },
              { label: 'Dental Practices', desc: 'Bookings, reminders, new patients', href: '/who-we-help/dentists' },
              { label: 'Consultants', desc: 'Independent professionals', href: '/who-we-help/consultants' },
            ].map((item) => (
              <button
                key={item.href}
                onClick={() => navigate(item.href)}
                className="bg-white border-3 border-charcoal shadow-brutal p-10 text-left hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg transition-all duration-200 cursor-pointer w-full"
              >
                <h3 className="font-black text-xl uppercase text-charcoal mb-2">{item.label}</h3>
                <p className="text-sm text-charcoal leading-normal">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
            Areas We Cover in {city.name}
          </h2>
          <p className="text-lg text-charcoal leading-normal mb-12">
            {city.region} and surrounding areas
          </p>

          <Card>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {city.coverageAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-terracotta font-black">✓</span>
                  <span className="text-charcoal font-bold">{area}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            How We Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-terracotta text-off-white flex items-center justify-center font-black text-4xl border-3 border-charcoal shadow-brutal mx-auto mb-6">
                1
              </div>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                30-Minute Call
              </h3>
              <p className="text-charcoal leading-normal">
                We find out what's falling through the cracks. No deck. No pitch. Just a conversation about whether this makes sense for your business.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-terracotta text-off-white flex items-center justify-center font-black text-4xl border-3 border-charcoal shadow-brutal mx-auto mb-6">
                2
              </div>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                We Build It
              </h3>
              <p className="text-charcoal leading-normal">
                We build the thing, train it on your business, test it properly, and connect it to your existing number or website. Usually live in 1–2 weeks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-terracotta text-off-white flex items-center justify-center font-black text-4xl border-3 border-charcoal shadow-brutal mx-auto mb-6">
                3
              </div>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                We Keep It Running
              </h3>
              <p className="text-charcoal leading-normal">
                Monthly rolling. We monitor, fix anything that needs fixing, and update it as your business changes. You don't manage it. We do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {city.testimonial && (
        <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <Card>
              <div className="border-l-4 border-charcoal pl-6">
                <p className="text-lg text-charcoal leading-normal mb-4 italic">
                  "{city.testimonial.quote}"
                </p>
                <p className="font-black text-charcoal uppercase text-sm">
                  — {city.testimonial.author}, {city.testimonial.business}
                </p>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-lg text-off-white leading-normal mb-8 max-w-2xl mx-auto">
            If any of this sounds relevant, book a 30-minute call. We'll tell you honestly whether AI automation makes sense for your business right now.
          </p>
          <Button
            variant="primary"
            className="text-lg px-10"
            onClick={() => navigate('/contact')}
          >
            Book a Call →
          </Button>
        </div>
      </section>

      {/* UK-wide note with anchor link */}
      <section className="py-12 border-t-3 border-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-charcoal leading-normal">
            We're a UK-wide{' '}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navigate('/'); }}
              className="font-bold underline hover:text-terracotta transition-colors"
            >
              AI automation agency UK
            </a>{' '}
            — location doesn't affect how we work. Everything is handled remotely.
          </p>
        </div>
      </section>

      {/* Voice Chat Modal */}
      {isVoiceChatOpen && (
        <Suspense fallback={null}>
          <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
