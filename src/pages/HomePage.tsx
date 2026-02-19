import { useState, useEffect, lazy, Suspense } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SEOHead } from '../components/SEOHead';
import { VoiceDemoButton } from '../components/VoiceDemoButton';

// Lazy load VoiceChat (only needed when user clicks demo button)
const VoiceChat = lazy(() => import('../components/VoiceChat').then(m => ({ default: m.VoiceChat })));

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function HomePage() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  useEffect(() => {
    const handleOpenVoiceChat = () => {
      setIsVoiceChatOpen(true);
    };

    window.addEventListener('openVoiceChat', handleOpenVoiceChat);
    return () => window.removeEventListener('openVoiceChat', handleOpenVoiceChat);
  }, []);

  const organisationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: 'Antek Automation',
    alternateName: 'AI Automation Agency UK',
    description: 'UK AI automation agency specialising in voice agents, chatbots and n8n workflow automation for service businesses and professionals',
    url: 'https://www.aiautomationagencyuk.com',
    logo: 'https://www.aiautomationagencyuk.com/logo.svg',
    telephone: '+443330389960',
    email: 'hello@antekautomation.com',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    knowsAbout: ['AI voice agents', 'AI chatbots', 'n8n workflow automation', 'business process automation'],
    serviceType: ['AI Voice Agents', 'AI Chatbots', 'Workflow Automation'],
    priceRange: '£500+',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chantry House, 38 Chantry Way',
      addressLocality: 'Andover',
      postalCode: 'SP10 1LZ',
      addressCountry: 'GB',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Antek Automation',
    url: 'https://www.aiautomationagencyuk.com',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an AI automation agency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An AI automation agency builds systems that handle repetitive business tasks automatically — answering calls, responding to enquiries, booking appointments, processing information. We handle the technical build so you get the results without the complexity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will customers know they\'re talking to AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Depends on your preference. Some clients want it fully transparent. Others prefer it to sound like a member of staff. We build it however works for your business.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does setup take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Voice agents and chatbots are usually live in 5–10 working days. Workflow automation takes 1–3 weeks depending on complexity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a contract?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Monthly rolling. We\'d rather you stay because it\'s working than because you\'re locked in.',
        },
      },
    ],
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title="AI Automation Agency UK | Antek Automation"
        description="We build AI voice agents, chatbots and automated workflows for UK service businesses and professionals. Less admin. More of the work you're actually good at."
        path="/"
        schema={[organisationSchema, websiteSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-8 leading-tight">
              You're Good at Your Job. The Admin Is the Problem.
            </h1>
            <p className="text-lg text-charcoal leading-normal mb-10">
              We're an AI automation agency based in the UK. Most of our clients aren't looking for a tech upgrade. They're looking for a way to stop answering the same questions twice, stop losing jobs to whoever picks up the phone first, and stop spending evenings doing things that should happen automatically. That's what we build.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
              <Button variant="secondary" onClick={() => navigate('/contact')}>Book a Call</Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28" id="services">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                AI Voice Agents
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Your phone answered 24/7. Books appointments, captures enquiries, handles the basics. Sounds human. Doesn't take sick days.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-voice-agents')}>
                How It Works →
              </Button>
            </Card>

            <Card hover>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                AI Chatbots
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Website or WhatsApp. Answers questions, qualifies leads, collects contact details — while you're actually working.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-chatbots')}>
                How It Works →
              </Button>
            </Card>

            <Card hover>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                Workflow Automation
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                The repetitive stuff between your tools — emails, CRM updates, reports, notifications — handled automatically using n8n.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/workflow-automation')}>
                How It Works →
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28" id="who-we-help">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Who This Is For
          </h2>
          <p className="text-lg text-charcoal leading-normal mb-12 max-w-3xl">
            This works well for businesses where the phone is how most work comes in, where one missed call is a lost client, and where there's no dedicated admin support. We work mainly with tradespeople, lawyers, dental practices and independent consultants — small teams, high value per client, not enough hours in the day.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Tradespeople', desc: 'Can\'t answer on site. Lose jobs to whoever picks up first.', href: '/who-we-help/tradespeople' },
              { label: 'Lawyers', desc: 'Intake calls and rescheduling eating into billable time.', href: '/who-we-help/lawyers' },
              { label: 'Dental Practices', desc: 'Front desk handling patients and phones at the same time.', href: '/who-we-help/dentists' },
              { label: 'Consultants', desc: 'Billing by the hour. Admin doesn\'t go on the invoice.', href: '/who-we-help/consultants' },
            ].map((item) => (
              <button
                key={item.href}
                onClick={() => navigate(item.href)}
                className="bg-white border-3 border-charcoal shadow-brutal p-8 text-left hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg transition-all duration-200 cursor-pointer w-full"
              >
                <h3 className="font-black text-xl uppercase text-charcoal mb-2">{item.label}</h3>
                <p className="text-sm text-charcoal leading-normal">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              How We Work
            </h2>
            <p className="text-lg text-charcoal leading-normal mb-6">
              We're not a software company selling you a subscription to figure out yourself. We build the thing, set it up, make sure it works, and keep it running. You tell us what's falling through the cracks. We build something specific to that.
            </p>
            <p className="text-lg text-charcoal leading-normal">
              Most clients are live within a week or two. Monthly rolling after that — no lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <a
              href="https://www.retellai.com/partner/antek-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="border-3 border-charcoal bg-off-white px-8 py-6 shadow-brutal shrink-0 hover:shadow-brutal-lg hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200"
            >
              <p className="text-xs font-black uppercase text-charcoal tracking-wide mb-1">Certified Partner</p>
              <p className="text-xl font-black uppercase text-terracotta">Retell AI — Gold</p>
              <p className="text-sm text-charcoal mt-1">Voice Agent Platform</p>
            </a>
            <div>
              <p className="font-black text-xl uppercase text-charcoal mb-2">Certified Retell AI Gold Partner</p>
              <p className="text-charcoal leading-normal max-w-2xl">
                Retell AI is the platform we build voice agents on — among the best available for natural-sounding conversation. As a certified Gold Partner, we're trained to build production-quality voice agents, not just demos. One of a small number of certified partners in the UK.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Common Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                What is an AI automation agency?
              </h3>
              <p className="text-charcoal leading-normal">
                A business that builds systems to handle repetitive tasks automatically — answering calls, responding to enquiries, booking appointments, processing information. We handle the technical build so you get the results without the complexity.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Will customers know they're talking to AI?
              </h3>
              <p className="text-charcoal leading-normal">
                Depends on your preference. Some clients want it fully transparent. Others prefer it to sound like a member of staff. We build it however works for your business.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                How long does setup take?
              </h3>
              <p className="text-charcoal leading-normal">
                Voice agents and chatbots are usually live in 5–10 working days. Workflow automation takes 1–3 weeks depending on complexity.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Is there a contract?
              </h3>
              <p className="text-charcoal leading-normal">
                Monthly rolling. We'd rather you stay because it's working than because you're locked in.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28" id="locations">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Across the UK
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'London', slug: 'london' },
              { name: 'Birmingham', slug: 'birmingham' },
              { name: 'Manchester', slug: 'manchester' },
              { name: 'Leeds', slug: 'leeds' },
              { name: 'Glasgow', slug: 'glasgow' },
              { name: 'Newcastle', slug: 'newcastle' },
            ].map((city) => (
              <button
                key={city.slug}
                onClick={() => navigate(`/locations/${city.slug}`)}
                className="bg-white border-3 border-charcoal shadow-brutal p-6 text-center hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg transition-all duration-200 cursor-pointer font-black uppercase text-charcoal text-sm"
              >
                {city.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-lg text-off-white leading-normal mb-8 max-w-2xl mx-auto">
            If any of this sounds relevant, book a 30-minute call. We'll tell you honestly whether AI automation makes sense for your business right now. No deck, no demo script, just a conversation.
          </p>
          <Button variant="primary" className="text-lg px-10" onClick={() => navigate('/contact')}>
            Book a Call →
          </Button>
        </div>
      </section>

      <Suspense fallback={null}>
        <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
      </Suspense>
    </div>
  );
}
