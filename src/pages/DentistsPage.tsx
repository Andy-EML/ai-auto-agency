import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SEOHead } from '../components/SEOHead';

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function DentistsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Who We Help', url: '/#who-we-help' },
    { name: 'Dentists', url: '/who-we-help/dentists' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Automation for Dental Practices',
    provider: {
      '@type': 'Organization',
      name: 'Antek Automation',
      url: 'https://www.aiautomationagencyuk.com',
    },
    description: 'AI voice agents and chatbots for dental practices. Appointment bookings, cancellations, new patient enquiries handled automatically.',
    areaServed: 'GB',
    audience: {
      '@type': 'Audience',
      audienceType: 'Dental practices, dentists, dental surgeries',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can the voice agent book into our practice management software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We connect to most practice management systems. We confirm compatibility before building anything — no surprises. If your system isn\'t supported, we\'ll tell you upfront.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if a patient is calling in pain or distress?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The agent is configured to recognise distress signals and escalate immediately to a human — either transferring the call or alerting your team. This is set up carefully during the build, not left to chance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will it handle appointment cancellations and rescheduling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Cancellations and rescheduling are some of the most common calls dental practices receive. The agent handles both, updates the calendar, and can attempt to fill the cancelled slot from a waiting list if you have one.',
        },
      },
    ],
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title="AI Automation for Dental Practices UK | Bookings & Enquiries"
        description="AI voice agents and chatbots for dental practices. Appointment bookings, cancellations, new patient enquiries — handled automatically."
        path="/who-we-help/dentists"
        breadcrumbs={breadcrumbs}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              Who We Help → Dental Practices
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-8 leading-tight">
              AI Automation for Dental Practices
            </h1>
            <p className="text-xl text-charcoal leading-normal mb-4">
              Your front desk handles patients in the room, phones ringing, and someone trying to rebook — all at the same time.
            </p>
            <p className="text-lg text-charcoal leading-normal mb-10">
              A lot of those calls are appointment-related. Most of them don't need a person to handle them.
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
              What We Build for Practices
            </h2>
            <div className="space-y-8">
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Voice Agent for Inbound Calls</h3>
                <p className="text-charcoal leading-normal">
                  Bookings, cancellations, rescheduling, new patient enquiries, and basic practice FAQs — all handled without tying up your front desk. The agent answers in seconds, works through the call professionally, and updates the calendar automatically.
                </p>
              </Card>
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Website Chatbot</h3>
                <p className="text-charcoal leading-normal">
                  New patient enquiries and booking requests out of hours. Someone checks your site at 9pm wondering about a new patient registration — the chatbot handles it, collects what you need, and has everything ready for the morning.
                </p>
              </Card>
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Automated Appointment Reminders</h3>
                <p className="text-charcoal leading-normal">
                  Reduces no-shows without manual chasing. Reminders go out automatically at the intervals you choose. Patients who need to reschedule can do so through the same system.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Experience */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              On Patient Experience
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                The agent is calm, clear, and professional. It introduces itself correctly — patients know they're speaking to an automated system. It doesn't try to sound more human than it is.
              </p>
              <p>
                If someone is in pain or distressed, it escalates to a human immediately. This is configurable and we set it up carefully — it's not an afterthought. The trigger phrases, the escalation path, the tone shift — all of it is tested before the system goes live.
              </p>
              <p>
                This isn't trying to replace the patient relationship. It's handling the administrative calls so your team can focus on the ones that actually need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Integration
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                We connect to most practice management software for appointment data. Before we build anything, we confirm compatibility with your specific system. No surprises halfway through.
              </p>
              <p>
                Common systems we've worked with include Dentally, Exact, Software of Excellence, and various others. If you're using something less common, we'll check first and tell you honestly whether it works.
              </p>
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
                Clinical advice, triage beyond the basics, anything requiring clinical judgement. That's not what this is and we're clear about that with patients from the first interaction.
              </p>
              <p>
                It also won't suit every practice. If you're a single-surgery practice with a part-time receptionist and manageable call volume, the economics might not stack up. Worth discussing before committing — we'd rather tell you it's not right for you now than have you find out after.
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
                Can it book into our practice management software?
              </h3>
              <p className="text-charcoal leading-normal">
                We connect to most practice management systems. We confirm compatibility before building anything. If your system isn't supported, we'll tell you upfront.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                What if a patient is calling in pain or distress?
              </h3>
              <p className="text-charcoal leading-normal">
                The agent is configured to recognise distress and escalate immediately — either transferring the call or alerting your team. This is set up carefully during the build, not left to chance.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Will it handle cancellations and rescheduling?
              </h3>
              <p className="text-charcoal leading-normal">
                Yes. These are some of the most common dental practice calls. The agent handles both, updates the calendar, and can fill cancelled slots from a waiting list if you have one.
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
                Answers calls, handles bookings, escalates distressed patients appropriately.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-voice-agents')}>
                Learn More
              </Button>
            </Card>
            <Card hover>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">AI Chatbots</h3>
              <p className="text-charcoal leading-normal mb-6">
                New patient enquiries and out-of-hours bookings handled on your website.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-chatbots')}>
                Learn More
              </Button>
            </Card>
            <Card hover>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">Workflow Automation</h3>
              <p className="text-charcoal leading-normal mb-6">
                Reminders, confirmations, and follow-up sequences without manual effort.
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
            If any of this sounds relevant, book a 30-minute call. We'll tell you honestly whether AI automation makes sense for your practice right now. No deck, no demo script, just a conversation.
          </p>
          <Button variant="primary" className="text-lg px-10" onClick={() => navigate('/contact')}>
            Book a Call →
          </Button>
        </div>
      </section>
    </div>
  );
}
