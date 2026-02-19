import { useState, lazy, Suspense } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SEOHead } from '../components/SEOHead';
import { VoiceAgentDemoButton } from '../components/VoiceAgentDemoButton';

// Lazy load voice chat component (only needed when user clicks demo)
const VoiceChat = lazy(() => import('../components/VoiceChat').then(m => ({ default: m.VoiceChat })));

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function AIVoiceAgentsPage() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: 'AI Voice Agents', url: '/services/ai-voice-agents' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Voice Agents for UK Businesses',
    provider: {
      '@type': 'Organization',
      name: 'Antek Automation',
      url: 'https://www.aiautomationagencyuk.com',
    },
    description: 'AI voice agents that answer your calls 24/7. Books appointments, handles enquiries, sounds human. Certified Retell AI Gold Partner. Built for UK service businesses.',
    areaServed: 'GB',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does a voice agent actually do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It answers your phone and has a real conversation with the caller. It can take messages, book appointments, answer questions about your services, and escalate anything urgent directly to your mobile. It works the same at 2am as it does at 2pm.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will callers know they\'re speaking to AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'That depends on your preference. We can build it to be transparent or to sound like a member of your team — whichever fits your business. Most clients are surprised at how natural it sounds either way.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens with calls that are too complex to handle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Calls that fall outside what the agent is trained to handle can be escalated straight to you, or the agent takes a message and flags it for follow-up. You define the boundaries — we build to them.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can we be up and running?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Usually 5–10 working days from the discovery call to going live. Depends on how complex the brief is and how quickly we can get the information we need from you.',
        },
      },
      {
        '@type': 'Question',
        name: 'What platform do you build on?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use Retell AI — one of the better platforms available for natural-sounding voice agents. We are a certified Gold Partner, one of a small number in the UK.',
        },
      },
    ],
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title="AI Voice Agents for UK Businesses | Antek Automation"
        description="AI voice agents that answer your calls 24/7. Books appointments, handles enquiries, sounds human. Certified Retell AI Gold Partner. UK businesses."
        path="/services/ai-voice-agents"
        breadcrumbs={breadcrumbs}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              Services → AI Voice Agents
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-8 leading-tight">
              AI Voice Agents for UK Businesses
            </h1>
            <p className="text-lg text-charcoal leading-normal mb-10">
              A voice agent answers your phone. Not a menu system — an actual conversation. It asks what the caller needs, handles it if it can, books an appointment if that's appropriate, and takes a message if not. It works at 2am the same as it does at 2pm.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <VoiceAgentDemoButton onClick={() => setIsVoiceChatOpen(true)} />
              <Button variant="secondary" onClick={() => navigate('/contact')}>Book a Call</Button>
            </div>
          </div>
        </div>
      </section>

      {/* What It Handles */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              What It Handles
            </h2>
            <div className="space-y-8">
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Taking Enquiries</h3>
                <p className="text-charcoal leading-normal">
                  Caller says what they need. Agent asks the right follow-up questions — location, job type, urgency, contact details. You get a summary. Nothing gets lost.
                </p>
              </Card>
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Booking Appointments</h3>
                <p className="text-charcoal leading-normal">
                  Integrates with your calendar. Checks availability and books on the spot. Caller gets a confirmation. No back-and-forth.
                </p>
              </Card>
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Answering Common Questions</h3>
                <p className="text-charcoal leading-normal">
                  Pricing, service areas, opening times, what you do and don't cover — the questions you answer ten times a day. The agent handles those so you don't have to.
                </p>
              </Card>
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Escalating Urgent Calls</h3>
                <p className="text-charcoal leading-normal">
                  If a call needs immediate attention — an emergency, a high-value client — the agent can put it through to you directly. Everything else gets handled or logged.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What It Won't Do */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              What It Won't Do
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                It won't handle calls that require judgement or expertise. If a caller has a complex legal question, a medical concern, or needs you specifically — the agent won't pretend otherwise. It'll take a message or escalate.
              </p>
              <p>
                It's not a replacement for human relationships with existing clients. It's a first-contact tool. The call gets handled; the relationship is still yours.
              </p>
              <p>
                It won't suit every business. If most of your work comes through referrals and you rarely miss a relevant call, you probably don't need this. Worth a conversation to find out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Build It */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              How We Build It
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                We start with a call to understand your business. What kinds of calls do you get? What do you want the agent to handle, and what should it pass through? What's the right voice and tone?
              </p>
              <p>
                We build and test the agent, then run it past you before it goes live. Once you're happy with how it sounds and how it handles your typical calls, we connect it to your phone number. Usually live within 5–10 working days.
              </p>
              <p>
                After that we monitor it, refine it based on real calls, and keep it updated as your business changes. Monthly rolling — cancel any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-16 md:py-20">
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
              <p className="font-black text-xl uppercase text-charcoal mb-2">Built on Retell AI</p>
              <p className="text-charcoal leading-normal max-w-2xl">
                We build voice agents on Retell AI — among the better platforms available for natural-sounding conversation. As a certified Gold Partner, we're trained to build production-quality agents, not just demos. One of a small number of certified partners in the UK.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses This */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Who Uses This
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Tradespeople', desc: 'On site, can\'t answer. Losing jobs to whoever picks up first.', href: '/who-we-help/tradespeople' },
              { label: 'Lawyers', desc: 'In a meeting, can\'t take every call. Enquiries go cold.', href: '/who-we-help/lawyers' },
              { label: 'Dental Practices', desc: 'Front desk handling patients and phones at the same time.', href: '/who-we-help/dentists' },
              { label: 'Consultants', desc: 'Billing by the hour. Can\'t be on the phone when delivering.', href: '/who-we-help/consultants' },
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

      {/* FAQ */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Common Questions
          </h2>
          <div className="max-w-3xl space-y-8">
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                What does a voice agent actually do?
              </h3>
              <p className="text-charcoal leading-normal">
                It answers your phone and has a real conversation with the caller. It can take messages, book appointments, answer questions about your services, and escalate anything urgent directly to your mobile. It works the same at 2am as it does at 2pm.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Will callers know they're speaking to AI?
              </h3>
              <p className="text-charcoal leading-normal">
                That depends on your preference. We can build it to be transparent or to sound like a member of your team — whichever fits your business. Most clients are surprised at how natural it sounds either way.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                What happens with calls that are too complex?
              </h3>
              <p className="text-charcoal leading-normal">
                Calls that fall outside what the agent is trained to handle can be escalated straight to you, or the agent takes a message and flags it for follow-up. You define the boundaries — we build to them.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                How quickly can we be up and running?
              </h3>
              <p className="text-charcoal leading-normal">
                Usually 5–10 working days from the discovery call to going live. Depends on how complex the brief is and how quickly we can get the information we need from you.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                What platform do you build on?
              </h3>
              <p className="text-charcoal leading-normal">
                We use Retell AI — one of the better platforms available for natural-sounding voice agents. We are a certified Gold Partner, one of a small number in the UK.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-lg text-off-white leading-normal mb-8 max-w-2xl mx-auto">
            If you're losing calls you should be winning, book a 30-minute call. We'll tell you honestly whether a voice agent makes sense for your business.
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
