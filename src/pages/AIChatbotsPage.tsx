import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SEOHead } from '../components/SEOHead';
import { ChatbotDemoButton } from '../components/ChatbotDemoButton';

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function AIChatbotsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: 'AI Chatbots', url: '/services/ai-chatbots' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Chatbots for UK Businesses',
    provider: {
      '@type': 'Organization',
      name: 'Antek Automation',
      url: 'https://www.aiautomationagencyuk.com',
    },
    description: 'AI chatbots for websites and WhatsApp. Captures enquiries, qualifies leads, answers common questions — while you\'re working. Built for UK service businesses.',
    areaServed: 'GB',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where does the chatbot actually live?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On your website, embedded as a chat widget. We can also set it up on WhatsApp if that\'s where most of your enquiries come from. Some clients use both.',
        },
      },
      {
        '@type': 'Question',
        name: 'What can it actually answer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Whatever you train it on. Typically: what services you offer, which areas you cover, how pricing works, how to book, what happens next. The questions you answer every day.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens when someone asks something it can\'t answer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It captures their contact details and flags it for you to follow up. It won\'t make something up or give wrong information — it\'ll say it doesn\'t have that answer and take a message.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can it replace my contact form?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For most purposes, yes. It captures the same information but in a conversational way, which tends to get higher completion rates. You still get the details you need; the visitor gets a better experience.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Usually 5–10 working days. We need to understand your business, what questions to answer and how, and then there\'s a testing phase before it goes live on your site.',
        },
      },
    ],
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title="AI Chatbots for UK Businesses | Antek Automation"
        description="AI chatbots for websites and WhatsApp. Captures enquiries, qualifies leads, answers common questions — while you're working. Built for UK service businesses."
        path="/services/ai-chatbots"
        breadcrumbs={breadcrumbs}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              Services → AI Chatbots
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-8 leading-tight">
              AI Chatbots for UK Businesses
            </h1>
            <p className="text-lg text-charcoal leading-normal mb-10">
              Your website gets traffic at all hours. Most of it leaves without doing anything. A chatbot gives visitors somewhere to go — answers their questions, captures their details, qualifies whether they're a good fit. All while you're working on something else.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <ChatbotDemoButton onClick={() => window.dispatchEvent(new Event('openChatbot'))} />
              <Button variant="secondary" onClick={() => navigate('/contact')}>Book a Call</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Where It Lives */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Where It Lives
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                On your website as a chat widget — the kind that appears in the bottom corner. Visitors can start a conversation without filling in a form or waiting for someone to pick up the phone.
              </p>
              <p>
                On WhatsApp, if that's where your clients prefer to reach you. Some trades businesses and service businesses get more WhatsApp messages than website enquiries — the chatbot works there too.
              </p>
              <p>
                Some clients use both. Website for first contact, WhatsApp for ongoing communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Handles */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              What It Handles
            </h2>
            <div className="space-y-8">
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Answering Questions</h3>
                <p className="text-charcoal leading-normal">
                  What do you do, what areas do you cover, how much does it cost, how long does it take, what happens next. The questions you answer every day, handled without you.
                </p>
              </Card>
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Capturing Enquiries</h3>
                <p className="text-charcoal leading-normal">
                  Visitor says what they need. Chatbot asks the right follow-up questions. You get a summary with their contact details. No form, no friction, no lost enquiries because it was 11pm and no one was around.
                </p>
              </Card>
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Qualifying Leads</h3>
                <p className="text-charcoal leading-normal">
                  We build in the questions you'd ask yourself — budget, timeline, what they're actually looking for. By the time you follow up, you know whether it's worth a proper conversation.
                </p>
              </Card>
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">Booking Appointments</h3>
                <p className="text-charcoal leading-normal">
                  If you want it to, it can link to your calendar and let visitors book directly. No back-and-forth. Works well for consultations, site visits, and discovery calls.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What It Doesn't Replace */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              What It Doesn't Replace
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                It's not a replacement for a sales conversation. It handles first contact and qualification — you still close the job.
              </p>
              <p>
                It won't handle complex queries that need real expertise or judgement. Those get flagged and passed to you. The chatbot knows the limits of what it knows.
              </p>
              <p>
                It won't suit every business. If you have no website traffic and all your work comes through referrals, there's not much for it to do. Worth being honest about that rather than selling you something that won't move the needle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Gets Built */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              How It Gets Built
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                We start with a call to understand what questions it needs to answer, what information it should capture, and what tone fits your business. We don't use a generic template — it gets built specifically for you.
              </p>
              <p>
                We write the responses, test it with likely scenarios, and run it past you before it goes live. If it doesn't sound right, we fix it. Usually live within 5–10 working days.
              </p>
              <p>
                After launch we monitor how it's being used, refine responses based on real conversations, and keep it updated as your services or pricing changes.
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
              { label: 'Tradespeople', desc: 'Website enquiries coming in while on site. Nothing gets missed.', href: '/who-we-help/tradespeople' },
              { label: 'Lawyers', desc: 'First-contact qualification before the intake call.', href: '/who-we-help/lawyers' },
              { label: 'Dental Practices', desc: 'Appointment requests handled online. Front desk gets breathing room.', href: '/who-we-help/dentists' },
              { label: 'Consultants', desc: 'Qualifying enquiries before spending time on a discovery call.', href: '/who-we-help/consultants' },
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
                Where does the chatbot actually live?
              </h3>
              <p className="text-charcoal leading-normal">
                On your website, embedded as a chat widget. We can also set it up on WhatsApp if that's where most of your enquiries come from. Some clients use both.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                What can it actually answer?
              </h3>
              <p className="text-charcoal leading-normal">
                Whatever you train it on. Typically: what services you offer, which areas you cover, how pricing works, how to book, what happens next. The questions you answer every day.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                What happens when someone asks something it can't answer?
              </h3>
              <p className="text-charcoal leading-normal">
                It captures their contact details and flags it for you to follow up. It won't make something up or give wrong information — it'll say it doesn't have that answer and take a message.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Can it replace my contact form?
              </h3>
              <p className="text-charcoal leading-normal">
                For most purposes, yes. It captures the same information but in a conversational way, which tends to get higher completion rates. You still get the details you need; the visitor gets a better experience.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                How long does it take to build?
              </h3>
              <p className="text-charcoal leading-normal">
                Usually 5–10 working days. We need to understand your business, what questions to answer and how, and then there's a testing phase before it goes live on your site.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-lg text-off-white leading-normal mb-8 max-w-2xl mx-auto">
            If you're losing enquiries to slow response times or out-of-hours gaps, book a 30-minute call. We'll tell you honestly whether a chatbot makes sense for your business.
          </p>
          <Button variant="primary" className="text-lg px-10" onClick={() => navigate('/contact')}>
            Book a Call →
          </Button>
        </div>
      </section>
    </div>
  );
}
