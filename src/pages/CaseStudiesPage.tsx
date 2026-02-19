import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SEOHead } from '../components/SEOHead';

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function CaseStudiesPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
  ];

  return (
    <div className="bg-off-white">
      <SEOHead
        title="Case Studies | AI Automation Results | Antek Automation"
        description="How UK service businesses use AI voice agents, chatbots and workflow automation to stop losing enquiries. Real examples from trades, legal and dental."
        path="/case-studies"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-8 leading-tight">
              How It Works in Practice
            </h1>
            <p className="text-lg text-charcoal leading-normal">
              The problems we solve are usually the same: missed calls, slow responses, repetitive admin. The solutions are specific to each business. Here's what that looks like.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 1 — Electrician */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">Electrical Contractor — Hampshire</p>
            <h2 className="font-black text-4xl uppercase tracking-tight-lg text-charcoal mb-8">
              Calls Missed on Site
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal mb-10">
              <p>
                A two-man electrical business was losing jobs to competitors who answered the phone faster. When you're on a job, you can't stop to take a call. By the time you're free, the customer has already called someone else.
              </p>
              <p>
                We built a voice agent that answers every call, takes the details — what the job is, where, urgency — and lets the customer know someone will be in touch to arrange a visit. Urgent calls get flagged immediately by text.
              </p>
              <p>
                Nothing was missed after that. The agent handled first contact while they were on site. They called back when they had five minutes.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3 className="font-black text-lg uppercase text-charcoal mb-2">What We Built</h3>
                <p className="text-charcoal leading-normal text-sm">Voice agent with call-back messaging and urgent escalation via SMS.</p>
              </Card>
              <Card>
                <h3 className="font-black text-lg uppercase text-charcoal mb-2">The Result</h3>
                <p className="text-charcoal leading-normal text-sm">No missed enquiries. Less time on the phone, more time on tools.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t-3 border-charcoal mx-6 md:mx-12 max-w-7xl xl:mx-auto" />

      {/* Case Study 2 — Solicitor */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">Family Law Solicitor — Leeds</p>
            <h2 className="font-black text-4xl uppercase tracking-tight-lg text-charcoal mb-8">
              Intake Calls During Billable Time
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal mb-10">
              <p>
                A sole practitioner was handling all her own calls — including initial enquiries from potential clients who needed a lot of handholding before it was clear whether they were a good fit. Each call took 20 minutes. Many didn't convert.
              </p>
              <p>
                We built a chatbot that handles first contact on the website. It explains the process, asks qualifying questions — type of matter, where they are in the situation, what outcome they're looking for — and captures contact details. By the time she responds, she has enough to know whether a proper call is worth it.
              </p>
              <p>
                She now only takes calls from enquiries that have been through the chatbot first. The conversations are shorter because the groundwork is done.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3 className="font-black text-lg uppercase text-charcoal mb-2">What We Built</h3>
                <p className="text-charcoal leading-normal text-sm">Qualifying chatbot for the website with lead capture and summary notifications.</p>
              </Card>
              <Card>
                <h3 className="font-black text-lg uppercase text-charcoal mb-2">The Result</h3>
                <p className="text-charcoal leading-normal text-sm">Less time on calls that don't convert. Better-prepared conversations with those that do.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t-3 border-charcoal mx-6 md:mx-12 max-w-7xl xl:mx-auto" />

      {/* Case Study 3 — Dental */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">Dental Practice — Manchester</p>
            <h2 className="font-black text-4xl uppercase tracking-tight-lg text-charcoal mb-8">
              Front Desk, Two Jobs at Once
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal mb-10">
              <p>
                A three-chair practice with one receptionist. Patients at the desk, phones ringing, appointment requests coming in online. No way to do all of it at the same time.
              </p>
              <p>
                We built a voice agent to handle inbound calls when the receptionist was busy — taking appointment requests, answering common questions about the practice, and capturing details for callback. We also added automated appointment reminders going out 24 hours and 2 hours before each booking.
              </p>
              <p>
                The receptionist now handles calls that actually need a person. The routine ones — booking requests, general questions, reminders — run without her.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3 className="font-black text-lg uppercase text-charcoal mb-2">What We Built</h3>
                <p className="text-charcoal leading-normal text-sm">Voice agent for overflow calls and automated appointment reminder sequences.</p>
              </Card>
              <Card>
                <h3 className="font-black text-lg uppercase text-charcoal mb-2">The Result</h3>
                <p className="text-charcoal leading-normal text-sm">Fewer missed calls. Lower no-show rate. Front desk freed up for patients in the room.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t-3 border-charcoal mx-6 md:mx-12 max-w-7xl xl:mx-auto" />

      {/* Case Study 4 — Consultant */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">Management Consultant — London</p>
            <h2 className="font-black text-4xl uppercase tracking-tight-lg text-charcoal mb-8">
              Admin Between Client Work
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal mb-10">
              <p>
                A freelance consultant billing by the day. Evenings were going on follow-up emails, onboarding new clients, and doing the same setup tasks manually every time a new project started.
              </p>
              <p>
                We built a set of n8n workflows: new client enquiry comes in, it goes into the CRM and triggers a follow-up sequence. Project confirmed, intake questionnaire goes out automatically. Project starts, all the standard documents get generated and sent. Invoice goes when the engagement ends.
              </p>
              <p>
                The admin between projects now happens without him. He works on client work; the system handles the rest.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3 className="font-black text-lg uppercase text-charcoal mb-2">What We Built</h3>
                <p className="text-charcoal leading-normal text-sm">n8n workflows for lead capture, client onboarding, document generation and invoicing.</p>
              </Card>
              <Card>
                <h3 className="font-black text-lg uppercase text-charcoal mb-2">The Result</h3>
                <p className="text-charcoal leading-normal text-sm">Evenings back. Admin that used to take hours now happens automatically.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl uppercase tracking-tight-lg text-charcoal mb-10">
            What We Build
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card hover>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">AI Voice Agents</h3>
              <p className="text-charcoal leading-normal mb-6">
                Answers your phone, takes messages, books appointments. Works 24/7.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-voice-agents')}>
                Learn More
              </Button>
            </Card>
            <Card hover>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">AI Chatbots</h3>
              <p className="text-charcoal leading-normal mb-6">
                Website or WhatsApp. Captures enquiries, qualifies leads, answers questions.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-chatbots')}>
                Learn More
              </Button>
            </Card>
            <Card hover>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">Workflow Automation</h3>
              <p className="text-charcoal leading-normal mb-6">
                Connects your tools. Removes the repetitive admin between them.
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
            If any of this sounds like your situation, book a 30-minute call. We'll tell you honestly what would and wouldn't work for your business.
          </p>
          <Button variant="primary" className="text-lg px-10" onClick={() => navigate('/contact')}>
            Book a Call →
          </Button>
        </div>
      </section>
    </div>
  );
}
