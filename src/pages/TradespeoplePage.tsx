import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SEOHead } from '../components/SEOHead';

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function TradespeoplePage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Who We Help', url: '/#who-we-help' },
    { name: 'Tradespeople', url: '/who-we-help/tradespeople' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Automation for Tradespeople',
    provider: {
      '@type': 'Organization',
      name: 'Antek Automation',
      url: 'https://www.aiautomationagencyuk.com',
    },
    description: 'AI voice agents and chatbots for UK tradespeople — answers calls, books jobs, handles enquiries while you work.',
    areaServed: 'GB',
    audience: {
      '@type': 'Audience',
      audienceType: 'Tradespeople, plumbers, electricians, HVAC engineers',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can a voice agent book jobs into my existing calendar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We connect it to whatever you already use — Google Calendar, Outlook, or a booking system. When a caller wants to book a job, the agent checks availability and confirms the slot.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will it work with my existing phone number?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Nothing changes on your end. Calls come in as normal — the AI picks up instead of voicemail when you can\'t answer.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens with emergency calls?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You set the rules. The agent can be configured to transfer urgent calls straight through to you, or to take a detailed message and send it to you immediately.',
        },
      },
    ],
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title="AI Automation for Tradespeople UK | Voice Agents & Chatbots"
        description="You can't answer your phone mid-job. AI voice agents and chatbots built for UK tradespeople — plumbers, electricians, HVAC and more."
        path="/who-we-help/tradespeople"
        breadcrumbs={breadcrumbs}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              Who We Help → Tradespeople
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-8 leading-tight">
              AI Automation for Tradespeople
            </h1>
            <p className="text-xl text-charcoal leading-normal mb-4">
              You're on a job. Your phone rings. You can't answer it. By the time you're done, they've called someone else.
            </p>
            <p className="text-lg text-charcoal leading-normal mb-10">
              That's not a sales problem. It's a timing problem.
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
              What We Typically Build for Trades Businesses
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                A voice agent that answers inbound calls, captures the job details, and books it into your calendar. The caller gets an immediate, professional response. You get a notification with everything you need to know.
              </p>
              <p>
                A chatbot on your website or WhatsApp for people who'd rather message than call. Same result — enquiry captured, details logged, follow-up ready.
              </p>
              <p>
                Automated follow-up so you're not chasing enquiries at the end of a long day. The system sends a confirmation, reminds the customer before the job, and flags anything that needs your attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day to Day */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              What It's Like Day to Day
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                You're on a boiler replacement in the morning. Phone rings twice. You can't answer. In the old version of events, those callers ring someone else. In this version, your voice agent picks up, gets their name, what's needed, where they are, and offers them a slot later in the week. By the time you've packed up, you've got two booked jobs you didn't have before.
              </p>
              <p>
                Same thing with messages. Someone sees your website at 10pm and sends a message asking about a bathroom refit. The chatbot collects the details, confirms you'll be in touch, and sends you a summary. No-one's waiting until morning wondering if you got it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Won't Fix */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              What It Won't Fix
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                It won't win you jobs you're not right for. If a customer has a specific budget or skill requirement you can't meet, the system just captures the enquiry — it's still on you to assess it.
              </p>
              <p>
                It won't replace word of mouth. If you're relying on referrals and your diary's already full, most of this won't change much for you. It works best when the problem is missing calls and slow responses — not when the problem is pricing or reputation.
              </p>
              <p>
                If you're getting fewer than five or six enquiries a week, the economics might not stack up. Worth a conversation before committing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Works Well For */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-10">
            Works Well For
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Plumbers',
              'Electricians',
              'HVAC & Gas Engineers',
              'Builders & Renovators',
              'Pest Control',
              'Landscapers & Gardeners',
              'Cleaning Companies',
              'Roofers & Glaziers',
            ].map((trade) => (
              <div key={trade} className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-terracotta border-3 border-charcoal shrink-0" />
                <span className="font-bold text-charcoal text-lg">{trade}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-charcoal leading-normal mt-8">
            Anyone who does the work themselves and can't be on the phone at the same time — that's the common thread.
          </p>
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
                Can it book jobs into my existing calendar?
              </h3>
              <p className="text-charcoal leading-normal">
                Yes. We connect it to whatever you already use — Google Calendar, Outlook, or a booking system. When a caller wants to book, the agent checks availability and confirms the slot.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Will it work with my existing phone number?
              </h3>
              <p className="text-charcoal leading-normal">
                Yes. Nothing changes on your end. Calls come in as normal — the AI picks up instead of voicemail when you can't answer.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                What happens with emergency calls?
              </h3>
              <p className="text-charcoal leading-normal">
                You set the rules. The agent can be configured to transfer urgent calls straight through to you, or to take a detailed message and send it to you immediately. Your call.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Links */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl uppercase tracking-tight-lg text-charcoal mb-10">
            How We Build It
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card hover>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">AI Voice Agents</h3>
              <p className="text-charcoal leading-normal mb-6">
                Answers your phone 24/7. Books jobs, captures details, transfers urgent calls.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-voice-agents')}>
                Learn More
              </Button>
            </Card>
            <Card hover>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">AI Chatbots</h3>
              <p className="text-charcoal leading-normal mb-6">
                Website or WhatsApp. Captures enquiries and qualifies leads while you work.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-chatbots')}>
                Learn More
              </Button>
            </Card>
            <Card hover>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">Workflow Automation</h3>
              <p className="text-charcoal leading-normal mb-6">
                Automated follow-ups, reminders, and job confirmations without lifting a finger.
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
            If any of this sounds relevant, book a 30-minute call. We'll tell you honestly whether AI automation makes sense for your business right now. No deck, no demo script, just a conversation.
          </p>
          <Button variant="primary" className="text-lg px-10" onClick={() => navigate('/contact')}>
            Book a Call →
          </Button>
        </div>
      </section>
    </div>
  );
}
