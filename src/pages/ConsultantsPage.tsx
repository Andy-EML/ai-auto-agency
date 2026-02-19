import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SEOHead } from '../components/SEOHead';

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function ConsultantsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Who We Help', url: '/#who-we-help' },
    { name: 'Consultants', url: '/who-we-help/consultants' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Automation for Independent Consultants and Freelancers',
    provider: {
      '@type': 'Organization',
      name: 'Antek Automation',
      url: 'https://www.aiautomationagencyuk.com',
    },
    description: 'AI automation for independent consultants and freelancers. Stop losing enquiries to slow response times. Chatbots, voice agents and workflows built around how you work.',
    areaServed: 'GB',
    audience: {
      '@type': 'Audience',
      audienceType: 'Consultants, freelancers, independent professionals',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Will an automated response make me look less personal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In practice, a well-built chatbot that responds quickly and asks the right questions makes you look more organised, not less personal. Slow responses do more damage to perception than automation does.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the chatbot qualify leads before I speak to them?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We build the qualifying questions you\'d ask yourself into the chatbot. By the time you follow up, you know the budget, the timeline, the specific need. You\'re not going into the call blind.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if most of my work comes through referrals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If all your work comes through referrals and you have no public-facing enquiry flow, most of this won\'t apply. Worth a conversation first — we\'d rather tell you it doesn\'t make sense than have you spend money on something that won\'t move the needle.',
        },
      },
    ],
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title="AI Automation for Consultants & Freelancers UK"
        description="AI automation for consultants and freelancers. Stop losing enquiries to slow responses. Chatbots, voice agents and workflows built around how you work."
        path="/who-we-help/consultants"
        breadcrumbs={breadcrumbs}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              Who We Help → Consultants & Freelancers
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-8 leading-tight">
              AI Automation for Independent Consultants
            </h1>
            <p className="text-xl text-charcoal leading-normal mb-4">
              When you're billing by the hour, every hour matters.
            </p>
            <p className="text-lg text-charcoal leading-normal mb-10">
              The hours spent on admin, chasing, scheduling and following up on enquiries don't go on anyone's invoice. That's the bit worth automating first.
            </p>
            <Button variant="secondary" className="!bg-success-green !text-off-white" onClick={() => navigate('/contact')}>
              Book a Call →
            </Button>
          </div>
        </div>
      </section>

      {/* What We Solve */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              What We Solve for Consultants
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                Enquiries that arrive while you're with a client and go cold by the time you're free. The person moved on, found someone else, or just decided not to bother because you took too long.
              </p>
              <p>
                New business calls that eat into delivery time. Every call you take to discuss a potential project is time you're not spending on the project you're already paid for.
              </p>
              <p>
                Scheduling back-and-forth that takes five emails when it should take one. The "when are you free" dance that wastes half an hour of your week without producing anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Typically Build */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              What We Typically Build
            </h2>
            <div className="space-y-8">
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Qualifying Chatbot</h3>
                <p className="text-charcoal leading-normal">
                  Captures enquiries and asks the questions you'd ask yourself. What's the project? What's the timeline? What's the budget? By the time you follow up, you know whether it's worth a proper conversation. No more discovery calls that turn out to be mismatches.
                </p>
              </Card>
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Voice Agent for Overflow</h3>
                <p className="text-charcoal leading-normal">
                  If you get inbound calls and can't always answer, the agent handles first contact. Captures the details, explains that you'll be in touch, and makes sure the enquiry isn't lost because you were in a meeting.
                </p>
              </Card>
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Workflow Automation</h3>
                <p className="text-charcoal leading-normal">
                  Follow-up sequences after a call or enquiry. Onboarding triggers when a new client signs. Whatever the repetitive process is — the thing you do manually every time — we look at whether it can be automated. Usually it can.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* On Perception */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              On Perception
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                Some consultants worry an automated response makes them look less personal. It's a reasonable concern. In practice, the opposite tends to be true.
              </p>
              <p>
                A well-built chatbot that responds in seconds and asks the right questions makes you look more organised than a two-day silence does. The perception damage from slow responses — or no response at all — is almost always worse than any concern about automation feeling impersonal.
              </p>
              <p>
                Clients care about responsiveness and competence. Automation done well signals both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When It's Not Worth It */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              When It's Not Worth It
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                If all your work comes through referrals and you have no public-facing enquiry flow, most of this won't apply. There's nothing to capture if people aren't finding you independently.
              </p>
              <p>
                Worth a conversation first to see if it makes sense for your specific situation before spending anything. We'd rather tell you it's not right for you now than have you find out later.
              </p>
              <p>
                That said — if you're spending more than a few hours a week on the admin side of running your practice, there's probably something worth automating. Even in a referral-heavy business.
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
                Will it make me look less personal?
              </h3>
              <p className="text-charcoal leading-normal">
                In practice, a well-built chatbot that responds quickly and asks the right questions makes you look more organised, not less personal. Slow responses do more damage to perception than automation does.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Can it qualify leads before I speak to them?
              </h3>
              <p className="text-charcoal leading-normal">
                Yes. We build the qualifying questions you'd ask yourself into the chatbot. By the time you follow up, you know the budget, the timeline, the specific need. You're not going into the call blind.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                What if most of my work comes through referrals?
              </h3>
              <p className="text-charcoal leading-normal">
                If you have no public-facing enquiry flow, most of this won't apply. Worth a conversation first — we'd rather tell you it doesn't make sense than have you spend money on something that won't move the needle.
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
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">AI Chatbots</h3>
              <p className="text-charcoal leading-normal mb-6">
                Captures and qualifies enquiries so you go into every conversation prepared.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-chatbots')}>
                Learn More
              </Button>
            </Card>
            <Card hover>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">AI Voice Agents</h3>
              <p className="text-charcoal leading-normal mb-6">
                Handles inbound calls when you're with a client. Nothing gets missed.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-voice-agents')}>
                Learn More
              </Button>
            </Card>
            <Card hover>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">Workflow Automation</h3>
              <p className="text-charcoal leading-normal mb-6">
                Follow-up sequences, onboarding triggers, the repetitive admin that eats your time.
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
