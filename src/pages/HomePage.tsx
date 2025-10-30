import { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Icon } from '../components/Icon';
import { SEOHead } from '../components/SEOHead';
import { VoiceChat } from '../components/VoiceChat';

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function HomePage() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);
  const organisationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: 'Antek Automation',
    description: 'AI Automation Agency UK specializing in business automation for service businesses',
    url: 'https://aiautomationagencyuk.com',
    logo: 'https://aiautomationagencyuk.com/logo.svg',
    telephone: '+443330389960',
    email: 'hello@antekautomation.com',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    serviceType: ['AI Automation', 'Business Process Automation', 'Workflow Automation'],
    priceRange: '£500+',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chantry House, 38 Chantry Way',
      addressLocality: 'Andover',
      postalCode: 'SP10 1LZ',
      addressCountry: 'GB',
    },
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title="Antek Automation | AI Automation Agency UK | Business Growth"
        description="Missing calls = lost customers | AI voice assistants & chatbots capture every lead 24/7 | UK automation agency for service businesses"
        path="/"
        schema={organisationSchema}
        keywords="ai automation agency uk, automation agency, ai automation agency, business automation uk, workflow automation, ai chatbots, voice automation systems"
      />
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
                AI Automation Agency UK | Antek Automation
              </h1>
              <p className="text-xl md:text-2xl font-bold text-terracotta mb-6">
                Stop Losing Customers to Manual Processes
              </p>
              <p className="text-lg text-charcoal leading-normal mb-8">
                Antek Automation is the UK's leading AI automation agency for service businesses. We capture more leads (40% increase), automate workflows, save 20 hours weekly, and help you scale without hiring. Our AI solutions work 24/7 so you can focus on growth.
              </p>
              <p className="text-sm md:text-base font-bold text-charcoal mb-6">
                Trusted AI Automation Agency UK • 40% More Leads • 20 Hours Saved Weekly
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" onClick={() => navigate('/contact')}>Book Free Automation Audit</Button>
                <Button variant="secondary" onClick={() => setIsVoiceChatOpen(true)}>See Live Demo</Button>
              </div>
            </div>
            <div className="relative">
              <Card hover className="bg-soft-sage">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon letter="A" size="md" />
                    <div>
                      <p className="font-black uppercase text-sm">AI Agent</p>
                      <p className="text-sm text-charcoal">Available 24/7</p>
                    </div>
                  </div>
                  <div className="border-3 border-charcoal bg-white p-4">
                    <p className="text-sm font-bold">Customer: "Can I book for tomorrow?"</p>
                  </div>
                  <div className="border-3 border-charcoal bg-warm-beige p-4">
                    <p className="text-sm font-bold">AI: "Of course! I have slots at 10am, 2pm, and 4pm available. Which works best?"</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft-sage border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              The Problem We Solve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal text-off-white flex items-center justify-center font-black text-xl border-3 border-charcoal shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase text-charcoal mb-2">
                    Missed Opportunities
                  </h3>
                  <p className="text-charcoal leading-normal">
                    65% of customers won't leave a voicemail. Every missed call is a lost customer to your competitor who answered first.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal text-off-white flex items-center justify-center font-black text-xl border-3 border-charcoal shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase text-charcoal mb-2">
                    Slow Response Times
                  </h3>
                  <p className="text-charcoal leading-normal">
                    Customers expect instant answers. Responding in hours instead of minutes means losing business to faster competitors.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal text-off-white flex items-center justify-center font-black text-xl border-3 border-charcoal shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase text-charcoal mb-2">
                    Administrative Burden
                  </h3>
                  <p className="text-charcoal leading-normal">
                    Hours wasted on scheduling, follow-ups, and repetitive questions. Time that should be spent growing your business.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal text-off-white flex items-center justify-center font-black text-xl border-3 border-charcoal shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase text-charcoal mb-2">
                    Limited Availability
                  </h3>
                  <p className="text-charcoal leading-normal">
                    Your business sleeps but customers don't. Late-night inquiries go to competitors who never close.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" id="services">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              How Our Automation Agency Transforms UK Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-normal">
              AI automation solutions designed for service businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Lead Automation
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Our AI automation agency solutions capture leads 24/7, qualify prospects, and nurture customers automatically.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-chatbots')}>Learn More</Button>
            </Card>

            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Voice Automation Systems
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Professional AI phone systems that book appointments and handle enquiries around the clock.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-voice-assistants')}>Learn More</Button>
            </Card>

            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Workflow Automation
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Complete business process automation connecting your tools and eliminating manual admin work.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/workflow-automation')}>Learn More</Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-normal">
              From setup to success in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-terracotta text-off-white flex items-center justify-center font-black text-4xl border-3 border-charcoal shadow-brutal mx-auto mb-6">
                1
              </div>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                Discovery Call
              </h3>
              <p className="text-charcoal leading-normal">
                We learn about your business, customers, and processes. Takes 30 minutes. Zero commitment required.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-terracotta text-off-white flex items-center justify-center font-black text-4xl border-3 border-charcoal shadow-brutal mx-auto mb-6">
                2
              </div>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                Custom Setup
              </h3>
              <p className="text-charcoal leading-normal">
                We build and train your AI agents on your services, pricing, and availability. Ready in 1-2 weeks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-terracotta text-off-white flex items-center justify-center font-black text-4xl border-3 border-charcoal shadow-brutal mx-auto mb-6">
                3
              </div>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                Launch & Grow
              </h3>
              <p className="text-charcoal leading-normal">
                Your AI starts working immediately. We monitor, optimise, and help you scale as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28" id="industries">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Industries We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card hover>
              <Icon letter="T" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Tradespeople
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Plumbers, electricians, builders who need 24/7 call handling
              </p>
            </Card>

            <Card hover>
              <Icon letter="C" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Cleaning
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Residential and commercial cleaning services
              </p>
            </Card>

            <Card hover>
              <Icon letter="P" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Professional
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Consultants, accountants, legal services
              </p>
            </Card>

            <Card hover>
              <Icon letter="B" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Beauty
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Salons, spas, wellness centers
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-off-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg text-off-white leading-normal mb-8">
            Book a free consultation and discover how AI can transform your service business
          </p>
          <Button variant="primary" className="text-lg px-10" onClick={() => navigate('/contact')}>
            Get Started Today
          </Button>
        </div>
      </section>

      <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
    </div>
  );
}
