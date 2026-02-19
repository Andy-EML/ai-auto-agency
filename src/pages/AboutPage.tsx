import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SEOHead } from '../components/SEOHead';

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ];

  return (
    <div className="bg-off-white">
      <SEOHead
        title="About Antek Automation | UK AI Automation Agency"
        description="Small UK agency building AI voice agents, chatbots and workflow automation for service businesses. Retell AI Gold Partner. Based in Hampshire."
        path="/about"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-8 leading-tight">
              About Antek Automation
            </h1>
            <p className="text-lg text-charcoal leading-normal">
              We're a small UK agency. We build AI voice agents, chatbots and workflow automation for service businesses — the kind of businesses where one missed call is a missed job, and where there aren't enough hours in the day for both the work and the admin that surrounds it.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              What We Do
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                We build three things: AI voice agents that answer your phone, chatbots that handle website and WhatsApp enquiries, and n8n workflows that connect your tools and remove repetitive admin.
              </p>
              <p>
                Most of our clients are tradespeople, lawyers, dental practices and independent consultants — small teams or sole traders where the phone is how most work comes in, and where admin is the thing that eats into the time they should be spending on clients.
              </p>
              <p>
                We're not a software company selling you a platform to figure out yourself. We build the thing, set it up, make sure it works, and keep it running. You tell us what's falling through the cracks. We build something specific to that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              How We Work
            </h2>
            <div className="space-y-8">
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">We Start with a Conversation</h3>
                <p className="text-charcoal leading-normal">
                  Not a demo, not a deck. A 30-minute call to understand your business and what's actually getting in the way. We'll tell you honestly if AI automation makes sense for where you are right now.
                </p>
              </Card>
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">We Build It Specifically for You</h3>
                <p className="text-charcoal leading-normal">
                  No generic templates. The voice agent gets trained on your services, your tone, your typical calls. The chatbot gets built around the questions your actual customers ask. The workflows connect your actual tools.
                </p>
              </Card>
              <Card>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">We Keep It Running</h3>
                <p className="text-charcoal leading-normal">
                  Monthly rolling after launch. We monitor, maintain, and update as things change. If something isn't working the way it should, we fix it. You're not left to figure it out.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Certification
            </h2>
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
              <a
                href="https://www.retellai.com/partner/antek-automation"
                target="_blank"
                rel="noopener noreferrer"
                className="border-3 border-charcoal bg-warm-beige px-8 py-6 shadow-brutal shrink-0 hover:shadow-brutal-lg hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200"
              >
                <p className="text-xs font-black uppercase text-charcoal tracking-wide mb-1">Certified Partner</p>
                <p className="text-xl font-black uppercase text-terracotta">Retell AI — Gold</p>
                <p className="text-sm text-charcoal mt-1">Voice Agent Platform</p>
              </a>
              <div className="space-y-4 text-charcoal leading-normal">
                <p>
                  We're a certified Retell AI Gold Partner — the platform we build voice agents on. Retell AI is among the better options available for natural-sounding conversation.
                </p>
                <p>
                  Gold certification means we've met Retell's standards for building production-quality voice agents. We're one of a small number of certified partners in the UK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We're Based */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Where We're Based
            </h2>
            <div className="space-y-6 text-lg text-charcoal leading-normal">
              <p>
                We're based in Andover, Hampshire. We work with businesses across the UK — everything is handled remotely, so location doesn't affect how we work or what we can build.
              </p>
              <p>
                Chantry House, 38 Chantry Way, Andover, SP10 1LZ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-lg text-off-white leading-normal mb-8 max-w-2xl mx-auto">
            If any of this sounds relevant, book a 30-minute call. No deck, no demo script. Just a conversation about whether this makes sense for your business.
          </p>
          <Button variant="primary" className="text-lg px-10" onClick={() => navigate('/contact')}>
            Book a Call →
          </Button>
        </div>
      </section>
    </div>
  );
}
