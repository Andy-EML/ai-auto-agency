import { useState, useEffect, lazy, Suspense } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SEOHead } from '../components/SEOHead';
import { VoiceDemoButton } from '../components/VoiceDemoButton';

// Lazy load VoiceChat (only needed when user clicks demo button)
const VoiceChat = lazy(() => import('../components/VoiceChat').then(m => ({ default: m.VoiceChat })));

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function HomePage() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  useEffect(() => {
    const handleOpenVoiceChat = () => {
      setIsVoiceChatOpen(true);
    };

    window.addEventListener('openVoiceChat', handleOpenVoiceChat);
    return () => window.removeEventListener('openVoiceChat', handleOpenVoiceChat);
  }, []);

  const BASE = 'https://www.aiautomationagencyuk.com';

  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${BASE}/#webpage`,
    url: `${BASE}/`,
    name: 'AI Automation Agency UK | Antek Automation',
    alternateName: 'Antek AI Automation',
    headline: 'AI Automation Agency UK',
    alternativeHeadline: 'AI That Works for Your Business',
    abstract: 'AI automation services by Antek Automation, a UK agency specialising in voice agents, chatbots and workflow automation.',
    description: 'Antek Automation deploys AI chatbots, voice agents, and workflow automation that work 24/7 to capture leads, book appointments, and grow revenue for service businesses by reducing missed calls, slow responses, and administrative burden.',
    accessMode: ['textual', 'visual'],
    inLanguage: 'en-GB',
    keywords: [
      'AI automation agency UK',
      'AI voice agents',
      'AI phone answering service',
      'AI chatbots for service businesses',
      'appointment booking automation',
      'lead capture automation',
      'workflow automation',
      'customer support automation',
      'AI receptionist',
      'Retell AI partner',
    ],
    image: {
      '@type': 'ImageObject',
      '@id': `${BASE}/#logo`,
      url: `${BASE}/logo.svg`,
      contentUrl: `${BASE}/logo.svg`,
      description: 'Antek Company Logo',
      name: 'Antek Automation Logo',
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: `${BASE}/`,
      name: 'Antek Automation',
      inLanguage: 'en-GB',
      publisher: { '@id': `${BASE}/#organization` },
    },
    mainEntity: {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': `${BASE}/#organization`,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/#webpage` },
      image: {
        '@type': 'ImageObject',
        url: `${BASE}/logo.svg`,
        contentUrl: `${BASE}/logo.svg`,
      },
      name: 'Antek Automation',
      alternateName: ['Antek AI Automation'],
      url: `${BASE}/`,
      description: 'AI automation agency providing AI chatbots, voice AI phone agents, and workflow automation to capture leads, book appointments, and handle customer queries 24/7.',
      email: 'hello@antekautomation.com',
      telephone: '+44-3330-389960',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Chantry House, 38 Chantry Way',
        addressLocality: 'Andover',
        addressRegion: 'Hampshire',
        postalCode: 'SP10 1LZ',
        addressCountry: 'GB',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: '+44-3330-389960',
          email: 'hello@antekautomation.com',
          availableLanguage: ['en-GB'],
          areaServed: 'GB',
        },
      ],
      priceRange: '£500+',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '00:00',
          closes: '00:00',
        },
      ],
      potentialAction: {
        '@type': 'ScheduleAction',
        name: 'Book a 30-Minute AI Automation Strategy Call',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://cal.com/antek-automation/30min',
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Service',
          name: 'AI Automation Consultation',
          serviceType: 'Automation Strategy',
        },
      },
      hasMap: 'https://maps.app.goo.gl/XwJc5GwJvMBSJrG4A',
      areaServed: [
        {
          '@type': 'City',
          name: 'London',
          sameAs: 'https://en.wikipedia.org/wiki/London',
          geo: { '@type': 'GeoCoordinates', latitude: 51.5074, longitude: -0.1278 },
          containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
        },
        {
          '@type': 'City',
          name: 'Birmingham',
          sameAs: 'https://en.wikipedia.org/wiki/Birmingham',
          geo: { '@type': 'GeoCoordinates', latitude: 52.4862, longitude: -1.8904 },
          containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
        },
        {
          '@type': 'City',
          name: 'Manchester',
          sameAs: 'https://en.wikipedia.org/wiki/Manchester',
          geo: { '@type': 'GeoCoordinates', latitude: 53.4808, longitude: -2.2426 },
          containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
        },
        {
          '@type': 'City',
          name: 'Leeds',
          sameAs: 'https://en.wikipedia.org/wiki/Leeds',
          geo: { '@type': 'GeoCoordinates', latitude: 53.7965, longitude: -1.5477 },
          containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
        },
        {
          '@type': 'City',
          name: 'Liverpool',
          sameAs: 'https://en.wikipedia.org/wiki/Liverpool',
          geo: { '@type': 'GeoCoordinates', latitude: 53.4084, longitude: -2.9916 },
          containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
        },
        {
          '@type': 'City',
          name: 'Glasgow',
          sameAs: 'https://en.wikipedia.org/wiki/Glasgow',
          geo: { '@type': 'GeoCoordinates', latitude: 55.8642, longitude: -4.2518 },
          containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
        },
        {
          '@type': 'City',
          name: 'Newcastle upon Tyne',
          sameAs: 'https://en.wikipedia.org/wiki/Newcastle_upon_Tyne',
          geo: { '@type': 'GeoCoordinates', latitude: 54.9783, longitude: -1.6178 },
          containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Hampshire',
          sameAs: 'https://en.wikipedia.org/wiki/Hampshire',
          containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
        },
        {
          '@type': 'Country',
          name: 'United Kingdom',
          sameAs: 'https://en.wikipedia.org/wiki/United_Kingdom',
        },
      ],
      knowsAbout: [
        'AI chatbots',
        'Voice AI',
        'Conversational AI',
        'Lead qualification',
        'Appointment booking',
        'Workflow automation',
        'Business process automation',
      ],
      sameAs: [
        'https://www.antekautomation.com',
        'https://x.com/AntekAutomation',
        'https://www.youtube.com/@AntekAutomation',
        'https://www.linkedin.com/company/antek-automation',
        'https://www.facebook.com/people/Antek-Automation-Intelligent-Voice-Ai-Chat-Agents/61587195202811/',
        'https://www.crunchbase.com/organization/antek-automation',
        'https://maps.app.goo.gl/XwJc5GwJvMBSJrG4A',
        'https://www.google.com/search?kgmid=/g/11yt2ybv_c',
        'https://www.google.com/maps?cid=17451278745729112685',
        'https://local.google.com/place?id=17451278745729112685&use=srp',
      ],
      founder: {
        '@type': 'Person',
        '@id': `${BASE}/#founder`,
        name: 'Andy Norman',
        sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
      },
      logo: { '@id': `${BASE}/#logo` },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        '@id': `${BASE}/#services`,
        name: 'Antek Automation Services',
        itemListElement: [
          {
            '@type': 'Offer',
            '@id': `${BASE}/#offer-ai-chatbots`,
            url: `${BASE}/services/ai-chatbots`,
            itemOffered: {
              '@type': 'Service',
              '@id': `${BASE}/#service-ai-chatbots`,
              name: 'AI Chatbots',
              description: 'Website chat that qualifies leads, answers FAQs, and books appointments instantly while you focus on delivering service.',
              serviceType: 'AI chatbot deployment and website chat automation',
              provider: { '@id': `${BASE}/#organization` },
              areaServed: 'GB',
              audience: { '@type': 'BusinessAudience', name: 'Service businesses' },
              category: [
                {
                  '@type': 'DefinedTerm',
                  '@id': `${BASE}/#term-artificial-intelligence`,
                  name: 'Artificial intelligence',
                  alternateName: ['AI'],
                  url: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
                  sameAs: ['https://en.wikipedia.org/wiki/Artificial_intelligence'],
                  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Wikipedia', url: 'https://en.wikipedia.org/' },
                },
                {
                  '@type': 'DefinedTerm',
                  '@id': `${BASE}/#term-conversational-ai`,
                  name: 'Conversational AI',
                  alternateName: ['Dialogue system'],
                  url: 'https://en.wikipedia.org/wiki/Dialogue_system',
                  sameAs: ['https://en.wikipedia.org/wiki/Dialogue_system'],
                  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Wikipedia', url: 'https://en.wikipedia.org/' },
                },
              ],
            },
          },
          {
            '@type': 'Offer',
            '@id': `${BASE}/#offer-voice-ai`,
            url: `${BASE}/services/ai-voice-agents`,
            itemOffered: {
              '@type': 'Service',
              '@id': `${BASE}/#service-voice-ai`,
              name: 'AI Voice Agents',
              description: 'Phone agents that answer calls, take bookings, and handle customer questions with natural conversation 24/7.',
              serviceType: 'AI voice agent call handling and booking automation',
              provider: { '@id': `${BASE}/#organization` },
              areaServed: 'GB',
              audience: { '@type': 'BusinessAudience', name: 'Service businesses' },
              category: [
                {
                  '@type': 'DefinedTerm',
                  '@id': `${BASE}/#term-artificial-intelligence`,
                  name: 'Artificial intelligence',
                  alternateName: ['AI'],
                  url: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
                  sameAs: ['https://en.wikipedia.org/wiki/Artificial_intelligence'],
                  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Wikipedia', url: 'https://en.wikipedia.org/' },
                },
                {
                  '@type': 'DefinedTerm',
                  '@id': `${BASE}/#term-conversational-ai`,
                  name: 'Conversational AI',
                  alternateName: ['Dialogue system'],
                  url: 'https://en.wikipedia.org/wiki/Dialogue_system',
                  sameAs: ['https://en.wikipedia.org/wiki/Dialogue_system'],
                  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Wikipedia', url: 'https://en.wikipedia.org/' },
                },
                {
                  '@type': 'DefinedTerm',
                  '@id': `${BASE}/#term-voice-agent`,
                  name: 'Voice agent',
                  alternateName: ['Virtual assistant', 'Voice assistant'],
                  url: 'https://en.wikipedia.org/wiki/Virtual_assistant',
                  sameAs: [
                    'https://en.wikipedia.org/wiki/Virtual_assistant',
                    'https://en.wikipedia.org/wiki/Voice_user_interface',
                  ],
                  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Wikipedia', url: 'https://en.wikipedia.org/' },
                },
              ],
            },
          },
          {
            '@type': 'Offer',
            '@id': `${BASE}/#offer-workflow-automation`,
            url: `${BASE}/services/workflow-automation`,
            itemOffered: {
              '@type': 'Service',
              '@id': `${BASE}/#service-workflow-automation`,
              name: 'Workflow Automation',
              description: 'Connect your tools and eliminate repetitive tasks. From scheduling to invoicing, let AI handle the busywork.',
              serviceType: 'Workflow automation and system integrations',
              provider: { '@id': `${BASE}/#organization` },
              areaServed: 'GB',
              audience: { '@type': 'BusinessAudience', name: 'Service businesses' },
            },
          },
        ],
      },
    },
    hasPart: [
      {
        '@type': 'HowTo',
        '@id': `${BASE}/#how-it-works`,
        name: 'How It Works',
        description: 'From setup to success in three steps: discovery call, custom setup, and launch & grow.',
        inLanguage: 'en-GB',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Discovery Call', text: 'We learn about your business, customers, and processes. Takes 30 minutes. Zero commitment required.' },
          { '@type': 'HowToStep', position: 2, name: 'Custom Setup', text: 'We build and train your AI agents on your services, pricing, and availability. Ready in 1-2 weeks.' },
          { '@type': 'HowToStep', position: 3, name: 'Launch & Grow', text: 'Your AI starts working immediately. We monitor, optimise, and help you scale as you grow.' },
        ],
      },
      {
        '@type': 'WebPageElement',
        '@id': `${BASE}/#industries-section`,
        name: 'Industries We Serve',
        inLanguage: 'en-GB',
        isPartOf: { '@id': `${BASE}/#webpage` },
        mainEntity: {
          '@type': 'ItemList',
          '@id': `${BASE}/#industries`,
          name: 'Industries We Serve',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Tradespeople', description: 'Plumbers, electricians, builders who need 24/7 call handling' },
            { '@type': 'ListItem', position: 2, name: 'Lawyers & Solicitors', description: 'Small law firms and solicitors needing client intake and appointment automation' },
            { '@type': 'ListItem', position: 3, name: 'Dental Practices', description: 'Practices needing automated booking, cancellation, and new patient handling' },
            { '@type': 'ListItem', position: 4, name: 'Consultants & Freelancers', description: 'Independent professionals needing lead capture and enquiry handling' },
          ],
        },
      },
    ],
    citation: [
      {
        '@type': 'WebPage',
        headline: 'Antek Automation Achieves Certified Retell AI Partnership Status, Expanding Advanced Voice AI Solutions for UK Service Businesses',
        url: 'https://www.digitaljournal.com/pr/news/indnewswire/antek-automation-achieves-certified-retell-1650888160.html',
        creator: { '@type': 'Organization', name: 'Digital Journal', url: 'https://www.digitaljournal.com/' },
      },
      {
        '@type': 'WebPage',
        headline: 'About Antek Automation',
        url: 'https://www.retellai.com/partner/antek-automation',
        creator: { '@type': 'Organization', name: 'Retell AI', url: 'https://www.retellai.com/' },
      },
      {
        '@type': 'WebPage',
        headline: 'Antek Automation',
        url: 'https://www.crunchbase.com/organization/antek-automation',
        creator: { '@type': 'Organization', name: 'Crunchbase', url: 'https://www.crunchbase.com/' },
      },
      {
        '@type': 'WebPage',
        headline: 'Antek Automation Retell AI Voice Partnership',
        url: 'https://www.slideshare.net/slideshow/antek-automation-retell-ai-voice-partnership/285139851',
        creator: { '@type': 'Organization', name: 'SlideShare', url: 'https://www.slideshare.net/' },
      },
      {
        '@type': 'WebPage',
        headline: 'Antek Automation',
        url: 'https://directory.cambridge-news.co.uk/search/andover/automated-gates-manufacturer',
        creator: { '@type': 'Organization', name: 'CAMBRIDGEnews', url: 'https://www.cambridge-news.co.uk/' },
      },
      {
        '@type': 'WebPage',
        headline: 'Antek Automation',
        url: 'https://www.click4homeservices.com/38-chantry-way-andover-sp10-1lz/sample-category/antek-automation',
        creator: { '@type': 'Organization', name: 'CLICK4HOMESERVICES', url: 'https://www.click4homeservices.com/' },
      },
      {
        '@type': 'WebPage',
        headline: 'Antek Automation, Andover',
        url: 'https://www.yell.com/biz/antek-automation-andover-11003297/',
        creator: { '@type': 'Organization', name: 'Yell', url: 'https://www.yell.com/' },
      },
      {
        '@type': 'WebPage',
        headline: 'Antek Automation',
        url: 'https://www.semfirms.com/profile/antek-automation',
        creator: { '@type': 'Organization', name: 'SEMfirms', url: 'https://www.semfirms.com/' },
      },
      {
        '@type': 'WebPage',
        headline: 'Antek Automation Achieves Certified Retell AI Partnership Status, Expanding Advanced Voice AI Solutions for UK Service Businesses',
        url: 'https://lifestyle.middletownlifemagazine.com/story/214412/antek-automation-achieves-certified-retell-ai-partnership-status-expanding-advanced-voice-ai-solutions-for-uk-service-businesses/',
        creator: { '@type': 'Organization', name: 'Middletown Life', url: 'https://lifestyle.middletownlifemagazine.com/' },
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an AI automation agency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An AI automation agency builds systems that handle repetitive business tasks automatically — answering calls, responding to enquiries, booking appointments, processing information. We handle the technical build so you get the results without the complexity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will customers know they\'re talking to AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Depends on your preference. Some clients want it fully transparent. Others prefer it to sound like a member of staff. We build it however works for your business.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does setup take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Voice agents and chatbots are usually live in 5–10 working days. Workflow automation takes 1–3 weeks depending on complexity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a contract?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Monthly rolling. We\'d rather you stay because it\'s working than because you\'re locked in.',
        },
      },
    ],
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title="AI Automation Agency UK | Antek Automation"
        description="We build AI voice agents, chatbots and automated workflows for UK service businesses and professionals. Less admin. More of the work you're actually good at."
        path="/"
        schema={[homepageSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-8 leading-tight">
              You're Good at Your Job. The Admin Is the Problem.
            </h1>
            <p className="text-lg text-charcoal leading-normal mb-10">
              We're an AI automation agency based in the UK. Most of our clients aren't looking for a tech upgrade. They're looking for a way to stop answering the same questions twice, stop losing jobs to whoever picks up the phone first, and stop spending evenings doing things that should happen automatically. That's what we build.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
              <Button variant="secondary" onClick={() => navigate('/contact')}>Book a Call</Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28" id="services">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                AI Voice Agents
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Your phone answered 24/7. Books appointments, captures enquiries, handles the basics. Sounds human. Doesn't take sick days.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-voice-agents')}>
                How It Works →
              </Button>
            </Card>

            <Card hover>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                AI Chatbots
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Website or WhatsApp. Answers questions, qualifies leads, collects contact details — while you're actually working.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-chatbots')}>
                How It Works →
              </Button>
            </Card>

            <Card hover>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                Workflow Automation
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                The repetitive stuff between your tools — emails, CRM updates, reports, notifications — handled automatically using n8n.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/workflow-automation')}>
                How It Works →
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28" id="who-we-help">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Who This Is For
          </h2>
          <p className="text-lg text-charcoal leading-normal mb-12 max-w-3xl">
            This works well for businesses where the phone is how most work comes in, where one missed call is a lost client, and where there's no dedicated admin support. We work mainly with tradespeople, lawyers, dental practices and independent consultants — small teams, high value per client, not enough hours in the day.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Tradespeople', desc: 'Can\'t answer on site. Lose jobs to whoever picks up first.', href: '/who-we-help/tradespeople' },
              { label: 'Lawyers', desc: 'Intake calls and rescheduling eating into billable time.', href: '/who-we-help/lawyers' },
              { label: 'Dental Practices', desc: 'Front desk handling patients and phones at the same time.', href: '/who-we-help/dentists' },
              { label: 'Consultants', desc: 'Billing by the hour. Admin doesn\'t go on the invoice.', href: '/who-we-help/consultants' },
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

      {/* How We Work */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              How We Work
            </h2>
            <p className="text-lg text-charcoal leading-normal mb-6">
              We're not a software company selling you a subscription to figure out yourself. We build the thing, set it up, make sure it works, and keep it running. You tell us what's falling through the cracks. We build something specific to that.
            </p>
            <p className="text-lg text-charcoal leading-normal">
              Most clients are live within a week or two. Monthly rolling after that — no lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
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
              <p className="font-black text-xl uppercase text-charcoal mb-2">Certified Retell AI Gold Partner</p>
              <p className="text-charcoal leading-normal max-w-2xl">
                Retell AI is the platform we build voice agents on — among the best available for natural-sounding conversation. As a certified Gold Partner, we're trained to build production-quality voice agents, not just demos. One of a small number of certified partners in the UK.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Common Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                What is an AI automation agency?
              </h3>
              <p className="text-charcoal leading-normal">
                A business that builds systems to handle repetitive tasks automatically — answering calls, responding to enquiries, booking appointments, processing information. We handle the technical build so you get the results without the complexity.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Will customers know they're talking to AI?
              </h3>
              <p className="text-charcoal leading-normal">
                Depends on your preference. Some clients want it fully transparent. Others prefer it to sound like a member of staff. We build it however works for your business.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                How long does setup take?
              </h3>
              <p className="text-charcoal leading-normal">
                Voice agents and chatbots are usually live in 5–10 working days. Workflow automation takes 1–3 weeks depending on complexity.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Is there a contract?
              </h3>
              <p className="text-charcoal leading-normal">
                Monthly rolling. We'd rather you stay because it's working than because you're locked in.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28" id="locations">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Across the UK
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'London', slug: 'london' },
              { name: 'Birmingham', slug: 'birmingham' },
              { name: 'Manchester', slug: 'manchester' },
              { name: 'Leeds', slug: 'leeds' },
              { name: 'Glasgow', slug: 'glasgow' },
              { name: 'Newcastle', slug: 'newcastle' },
            ].map((city) => (
              <button
                key={city.slug}
                onClick={() => navigate(`/locations/${city.slug}`)}
                className="bg-white border-3 border-charcoal shadow-brutal p-6 text-center hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg transition-all duration-200 cursor-pointer font-black uppercase text-charcoal text-sm"
              >
                {city.name}
              </button>
            ))}
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

      <Suspense fallback={null}>
        <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
      </Suspense>
    </div>
  );
}
