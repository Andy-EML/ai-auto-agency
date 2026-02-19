import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SEOHead } from '../components/SEOHead';

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function WorkflowAutomationPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: 'Workflow Automation', url: '/services/workflow-automation' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Workflow Automation for UK Businesses',
    provider: {
      '@type': 'Organization',
      name: 'Antek Automation',
      url: 'https://www.aiautomationagencyuk.com',
    },
    description: 'Workflow automation built on n8n. Connects your tools, removes repetitive admin, and runs in the background without you touching it. Built for UK service businesses.',
    areaServed: 'GB',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is n8n?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'n8n is a workflow automation tool — the thing that connects your apps and makes them work together automatically. When something happens in one system, n8n triggers the right response in another. We use it because it\'s flexible, self-hostable, and doesn\'t charge per task.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need technical knowledge to use it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We build the workflows, test them, and run them. You just see the output — the notifications, the updated records, the automated messages. You don\'t need to touch the system at all unless you want to.',
        },
      },
      {
        '@type': 'Question',
        name: 'What tools does it connect to?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most things with an API — which covers the vast majority of business software. Gmail, Outlook, Google Calendar, WhatsApp, Xero, QuickBooks, Stripe, GoCardless, Jobber, Tradify, WordPress, Airtable, Notion, Slack. If your tools can send or receive data, n8n can usually connect them.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does setup take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simple workflows can be built and live within a week. More complex setups — multiple tools, conditional logic, custom integrations — take 2–3 weeks. We\'ll tell you what to expect before we start.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if something breaks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We monitor workflows and fix anything that stops working. Tools update, APIs change, things break occasionally — that\'s part of what the ongoing retainer covers.',
        },
      },
    ],
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title="Workflow Automation for UK Businesses | Antek Automation"
        description="Workflow automation built on n8n. Connects your tools, removes repetitive admin, and runs in the background. Built for UK service businesses."
        path="/services/workflow-automation"
        breadcrumbs={breadcrumbs}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              Services → Workflow Automation
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-8 leading-tight">
              Workflow Automation for UK Businesses
            </h1>
            <p className="text-lg text-charcoal leading-normal mb-10">
              Most businesses have the same problem: information in one system that needs to be somewhere else, reminders that need to go out, records that need updating, follow-ups that need sending. All of it done manually. All of it takeable off your plate.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button variant="primary" onClick={() => navigate('/contact')}>Book a Call →</Button>
              <Button variant="secondary" onClick={() => navigate('/contact')}>Tell Us What You Need</Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            What We Automate
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">Lead Management</h3>
              <p className="text-charcoal leading-normal">
                New enquiry comes in — from your website, a chatbot, a phone call. It goes straight into your CRM, you get notified, and a follow-up is scheduled. No manual entry.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">Appointment Reminders</h3>
              <p className="text-charcoal leading-normal">
                Booking confirmed. 24 hours before: reminder sent. 2 hours before: another one. No-show rate drops. You didn't do anything.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">Invoicing & Payments</h3>
              <p className="text-charcoal leading-normal">
                Job marked complete. Invoice generated. Sent to client. Overdue after 7 days: reminder goes out. Logged in your accounting software. All automatic.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">Client Onboarding</h3>
              <p className="text-charcoal leading-normal">
                New client signs. Welcome email goes out. Intake form is sent. Task created in your project management tool. Everything you'd do manually, done for you.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">Review Requests</h3>
              <p className="text-charcoal leading-normal">
                Job done. 48 hours later: a message asking for a review. Goes to the right platform — Google, Trustpilot, wherever matters for your business. Happens every time, not just when you remember.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">Reporting</h3>
              <p className="text-charcoal leading-normal">
                Weekly summary of leads, revenue, outstanding invoices — pulled from your tools and sent to your inbox. You start Monday knowing where you stand.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why n8n */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Why n8n
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                n8n is the tool we build workflows on. It connects to most business software — Gmail, Google Calendar, WhatsApp, Xero, Stripe, Jobber, Airtable, Slack, and a few hundred others.
              </p>
              <p>
                We use n8n specifically because it's self-hostable, which means your data stays on your server rather than going through a third-party's infrastructure. For businesses that handle client information, that matters.
              </p>
              <p>
                It's also more flexible than tools like Zapier — the logic can be more complex, the integrations more specific to what you actually need. Less off-the-shelf, more built to fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It's Not */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              What It's Not
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                It's not magic. If your underlying process is broken or your data is a mess, automation makes that more visible faster. We sometimes tell people to fix the process first.
              </p>
              <p>
                It's not a replacement for everything human. Automation handles the predictable, repetitive parts. Anything that requires judgement, relationships, or genuine expertise stays with you.
              </p>
              <p>
                It's not always the right answer. If you're a very small operation with low volume, manual might be fine. We'll tell you that honestly rather than build something you don't actually need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              How We Work
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                We start by understanding what's taking up time. Not what you think should be automated, but what you actually spend hours on that produces nothing valuable. We map that out.
              </p>
              <p>
                Then we build the workflows, test them properly, and hand over something that works. We document what we've built so you understand what's running. You're not dependent on a black box.
              </p>
              <p>
                After launch, we monitor and maintain. APIs change, tools update, things break. That's part of the ongoing retainer. You don't have to think about it.
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
              { label: 'Tradespeople', desc: 'Quoting, invoicing, reminders — all the paperwork that piles up.', href: '/who-we-help/tradespeople' },
              { label: 'Lawyers', desc: 'Client intake, follow-ups, deadline reminders, billing updates.', href: '/who-we-help/lawyers' },
              { label: 'Dental Practices', desc: 'Appointment reminders, recall sequences, patient comms.', href: '/who-we-help/dentists' },
              { label: 'Consultants', desc: 'Onboarding, follow-up sequences, the recurring admin of client work.', href: '/who-we-help/consultants' },
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
                What is n8n?
              </h3>
              <p className="text-charcoal leading-normal">
                A workflow automation tool — the thing that connects your apps and makes them work together automatically. When something happens in one system, n8n triggers the right response in another. We use it because it's flexible, self-hostable, and doesn't charge per task.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Do I need technical knowledge to use it?
              </h3>
              <p className="text-charcoal leading-normal">
                No. We build the workflows, test them, and run them. You just see the output — the notifications, the updated records, the automated messages. You don't need to touch the system at all unless you want to.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                What tools does it connect to?
              </h3>
              <p className="text-charcoal leading-normal">
                Most things with an API — Gmail, Outlook, Google Calendar, WhatsApp, Xero, QuickBooks, Stripe, GoCardless, Jobber, Tradify, WordPress, Airtable, Notion, Slack. If your tools can send or receive data, n8n can usually connect them.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                How long does setup take?
              </h3>
              <p className="text-charcoal leading-normal">
                Simple workflows can be built and live within a week. More complex setups — multiple tools, conditional logic, custom integrations — take 2–3 weeks. We'll tell you what to expect before we start.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                What happens if something breaks?
              </h3>
              <p className="text-charcoal leading-normal">
                We monitor workflows and fix anything that stops working. Tools update, APIs change, things break occasionally — that's part of what the ongoing retainer covers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-lg text-off-white leading-normal mb-8 max-w-2xl mx-auto">
            If you're spending time on things that should happen automatically, book a 30-minute call. We'll work through what's worth automating and what isn't.
          </p>
          <Button variant="primary" className="text-lg px-10" onClick={() => navigate('/contact')}>
            Book a Call →
          </Button>
        </div>
      </section>
    </div>
  );
}
