import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SEOHead } from '../components/SEOHead';

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function LawyersPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Who We Help', url: '/#who-we-help' },
    { name: 'Lawyers', url: '/who-we-help/lawyers' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Automation for Law Firms and Solicitors',
    provider: {
      '@type': 'Organization',
      name: 'Antek Automation',
      url: 'https://www.aiautomationagencyuk.com',
    },
    description: 'AI voice agents and chatbots for small law firms and solicitors. Client intake, appointment booking and enquiries handled automatically.',
    areaServed: 'GB',
    audience: {
      '@type': 'Audience',
      audienceType: 'Solicitors, law firms, legal consultants',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Will a voice agent handle confidential information?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Voice agents handle the administrative layer only — scheduling, initial enquiry capture, basic FAQs. Nothing involving privileged information or legal advice. That stays with you.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can it handle new client intake calls?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The agent can ask the right opening questions, collect contact details and the nature of the matter, and book a proper consultation for you to assess the case. You decide what information it collects.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if someone calls with an urgent legal matter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You configure how it handles urgency. It can transfer the call directly to you, or take a detailed message and alert you immediately. The agent doesn\'t make judgements about legal merit — it just captures what it needs to and escalates appropriately.',
        },
      },
    ],
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title="AI Automation for Law Firms & Solicitors UK"
        description="AI voice agents and chatbots for small law firms and solicitors. Client intake, appointment booking and enquiries handled automatically."
        path="/who-we-help/lawyers"
        breadcrumbs={breadcrumbs}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              Who We Help → Lawyers & Law Firms
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-8 leading-tight">
              AI Automation for Lawyers and Law Firms
            </h1>
            <p className="text-xl text-charcoal leading-normal mb-4">
              Small law firms spend a lot of time on things that aren't law.
            </p>
            <p className="text-lg text-charcoal leading-normal mb-10">
              Intake calls. Appointment rescheduling. Answering the same questions about process and fees. None of that requires a qualified solicitor. Most of it doesn't require a person at all.
            </p>
            <Button variant="secondary" className="!bg-success-green !text-off-white" onClick={() => navigate('/contact')}>
              Book a Call →
            </Button>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              What We Build for Law Firms
            </h2>
            <div className="space-y-8">
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">New Client Intake</h3>
                <p className="text-charcoal leading-normal">
                  A voice agent handles the initial call. It collects the basics — nature of the matter, contact details, preferred time for a consultation. By the time you speak to the potential client, you already know whether it's worth pursuing. Less wasted time. More prepared conversations.
                </p>
              </Card>
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Out-of-Hours Enquiry Capture</h3>
                <p className="text-charcoal leading-normal">
                  A website chatbot captures enquiries when you're in court, in a meeting, or simply not available. It collects enough information for you to decide whether to call back and prioritise accordingly. Enquiries don't go cold.
                </p>
              </Card>
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Automated Follow-Up</h3>
                <p className="text-charcoal leading-normal">
                  Appointment confirmations, reminders, and basic status updates handled automatically. Reduces no-shows and keeps clients informed without eating into your billing time.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              On Confidentiality
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                The obvious concern — and it's a fair one. Voice agents and chatbots handle the administrative layer only: scheduling, initial enquiry capture, basic FAQs about your firm. They don't handle anything requiring legal advice or privileged information.
              </p>
              <p>
                The agent collects what you tell it to collect. Nothing more. Privileged information, case details, legal advice — that stays with you, where it belongs.
              </p>
              <p>
                We also don't store conversation data beyond what's needed for the handoff to you. If you have specific data handling requirements, we talk through them before building anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Isn't */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              What This Isn't
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                Not a legal AI. Won't draft documents, review contracts, or give legal advice. That's a different category entirely — and one with significant professional and regulatory implications we don't go near.
              </p>
              <p>
                This is specifically about making sure the phone is answered, enquiries are handled professionally, and your time isn't spent on admin that a well-configured system can manage instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Works Well For */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Works Well For
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                Small firms and sole practitioners running a tight operation. Legal consultants with a public-facing enquiry flow. Any firm where the admin overhead is eating into billable time or where enquiries are going cold between first contact and first consultation.
              </p>
              <p>
                Less useful if all your work comes through referrals and you have no public-facing enquiry flow. In that case, most of this doesn't apply — and it's worth having that conversation before spending anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Common Questions
          </h2>
          <div className="max-w-3xl space-y-8">
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Will it handle confidential information?
              </h3>
              <p className="text-charcoal leading-normal">
                No. Voice agents handle the administrative layer only — scheduling, initial enquiry capture, basic FAQs. Nothing involving privileged information or legal advice. That stays with you.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Can it handle new client intake calls?
              </h3>
              <p className="text-charcoal leading-normal">
                Yes. The agent can ask opening questions, collect contact details and the nature of the matter, and book a proper consultation. You decide what information it collects.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                What if someone calls with an urgent matter?
              </h3>
              <p className="text-charcoal leading-normal">
                You configure how it handles urgency. It can transfer the call directly to you, or take a detailed message and alert you immediately. The agent captures what it needs to and escalates appropriately.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Links */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl uppercase tracking-tight-lg text-charcoal mb-10">
            What We Build
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card hover>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">AI Voice Agents</h3>
              <p className="text-charcoal leading-normal mb-6">
                Answers calls, handles intake, books consultations. Professional and consistent.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-voice-agents')}>
                Learn More
              </Button>
            </Card>
            <Card hover>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">AI Chatbots</h3>
              <p className="text-charcoal leading-normal mb-6">
                Website or WhatsApp. Captures enquiries out of hours with the right information.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-chatbots')}>
                Learn More
              </Button>
            </Card>
            <Card hover>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">Workflow Automation</h3>
              <p className="text-charcoal leading-normal mb-6">
                Confirmations, reminders, and follow-ups handled without manual effort.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/workflow-automation')}>
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-lg text-off-white leading-normal mb-8 max-w-2xl mx-auto">
            If any of this sounds relevant, book a 30-minute call. We'll tell you honestly whether AI automation makes sense for your firm right now. No deck, no demo script, just a conversation.
          </p>
          <Button variant="primary" className="text-lg px-10" onClick={() => navigate('/contact')}>
            Book a Call →
          </Button>
        </div>
      </section>
    </div>
  );
}
