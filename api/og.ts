export const config = { runtime: 'edge' };

const BASE_URL = 'https://www.aiautomationagencyuk.com';

interface MetaEntry {
  title: string;
  description: string;
}

// Static route metadata — keep in sync with SEOHead props in page components
const ROUTE_META: Record<string, MetaEntry> = {
  '/': {
    title: 'AI Automation Agency UK | Antek Automation',
    description:
      'We build AI voice agents, chatbots and automated workflows for UK service businesses and professionals. Less admin. More of the work you\'re actually good at.',
  },
  '/contact': {
    title: 'Contact Us | Antek Automation | AI Agency UK',
    description:
      'Talk to us about AI automation | Capture every customer call 24/7 | Expert setup & support for UK service businesses | Free consultation',
  },
  '/services/ai-chatbots': {
    title: 'AI Chatbots for UK Businesses | Antek Automation',
    description:
      'AI chatbots for websites and WhatsApp. Captures enquiries, qualifies leads, answers common questions — while you\'re working. Built for UK service businesses.',
  },
  '/services/ai-voice-assistants': {
    title: 'AI Voice Assistants | Antek Automation UK',
    description:
      'AI voice agents that answer calls 24/7 | Book appointments automatically | Never miss a call again | Boost revenue for UK service businesses',
  },
  '/services/workflow-automation': {
    title: 'Workflow Automation for UK Businesses | Antek Automation',
    description:
      'Workflow automation built on n8n. Connects your tools, removes repetitive admin, and runs in the background. Built for UK service businesses.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Antek Automation',
    description:
      'Privacy Policy for Antek Automation. Learn how we collect, process, and protect your personal data.',
  },
  '/terms-of-business': {
    title: 'Terms of Business | Antek Automation',
    description:
      'Terms of Business for Antek Automation. Read our terms and conditions for AI automation services.',
  },
  '/services/ai-voice-agents': {
    title: 'AI Voice Agents for UK Businesses | Antek Automation',
    description:
      'AI voice agents that answer your calls 24/7. Books appointments, handles enquiries, sounds human. Certified Retell AI Gold Partner. UK businesses.',
  },
  '/who-we-help/tradespeople': {
    title: 'AI Automation for Tradespeople UK | Antek Automation',
    description:
      'You can\'t answer your phone mid-job. AI voice agents and chatbots built for UK tradespeople — plumbers, electricians, HVAC and more.',
  },
  '/who-we-help/lawyers': {
    title: 'AI Automation for Law Firms & Solicitors UK',
    description:
      'AI voice agents and chatbots for small law firms and solicitors. Client intake, appointment booking and enquiries handled automatically.',
  },
  '/who-we-help/dentists': {
    title: 'AI Automation for Dental Practices UK | Antek',
    description:
      'AI voice agents and chatbots for dental practices. Appointment bookings, cancellations, new patient enquiries — handled automatically.',
  },
  '/who-we-help/consultants': {
    title: 'AI Automation for Consultants & Freelancers UK',
    description:
      'AI automation for consultants and freelancers. Stop losing enquiries to slow responses. Chatbots, voice agents and workflows built around how you work.',
  },
  '/about': {
    title: 'About Antek Automation | UK AI Automation Agency',
    description:
      'Small UK agency building AI voice agents, chatbots and workflow automation for service businesses. Retell AI Gold Partner. Based in Hampshire.',
  },
  '/case-studies': {
    title: 'Case Studies | AI Automation Results | Antek Automation',
    description:
      'How UK service businesses use AI voice agents, chatbots and workflow automation to stop losing enquiries. Real examples from trades, legal and dental.',
  },
};

// Location page metadata — city slug → meta
const LOCATION_META: Record<string, MetaEntry> = {
  london: {
    title: 'AI Automation Agency London | Antek Automation',
    description:
      'AI voice agents & chatbots for London businesses. Answer every call 24/7, capture leads & book appointments. Antek Automation UK.',
  },
  birmingham: {
    title: 'AI Automation Agency Birmingham | Antek Automation',
    description:
      'AI voice agents & chatbots for Birmingham. Never miss a call again. Serve all West Midlands 24/7. Antek Automation UK.',
  },
  manchester: {
    title: 'AI Automation Agency Manchester | Antek Automation',
    description:
      'AI voice agents & chatbots for Manchester. Handle calls from Greater Manchester 24/7. Capture every lead. Antek Automation UK.',
  },
  leeds: {
    title: 'AI Automation Agency Leeds | Antek Automation',
    description:
      'AI voice agents & chatbots for Leeds. Answer calls 24/7. Serve all West Yorkshire. Antek Automation UK.',
  },
  liverpool: {
    title: 'AI Automation Agency Liverpool | Antek Automation',
    description:
      'AI voice agents & chatbots for Liverpool. Handle calls across Merseyside 24/7. Never miss business again. Antek Automation UK.',
  },
  glasgow: {
    title: 'AI Automation Agency Glasgow | Antek Automation',
    description:
      'AI voice agents & chatbots for Glasgow. Answer calls 24/7 across Scotland. Capture every customer. Antek Automation UK.',
  },
  newcastle: {
    title: 'AI Automation Agency Newcastle | Antek Automation',
    description:
      'AI voice agents & chatbots for Newcastle. Handle calls across the Northeast 24/7. Book appointments automatically. Antek Automation UK.',
  },
  hampshire: {
    title: 'AI Automation Agency Hampshire | Antek Automation',
    description:
      'AI voice agents & chatbots for Hampshire businesses. Answer every call 24/7, capture leads & book appointments. Antek Automation UK.',
  },
};

function getMetaForPath(pathname: string): MetaEntry {
  // Check static routes first
  if (ROUTE_META[pathname]) {
    return ROUTE_META[pathname];
  }

  // Check location routes
  if (pathname.startsWith('/locations/')) {
    const slug = pathname.replace('/locations/', '').replace(/\/$/, '');
    if (LOCATION_META[slug]) {
      return LOCATION_META[slug];
    }
  }

  // Fallback to homepage meta
  return ROUTE_META['/'];
}

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname.replace(/\/$/, '') || '/';

  // Fetch the static index.html from the deployment
  const baseUrl = url.origin;
  const indexRes = await fetch(`${baseUrl}/index.html`, {
    headers: { 'x-skip-middleware': '1' },
  });
  let html = await indexRes.text();

  const meta = getMetaForPath(pathname);
  const canonical = `${BASE_URL}${pathname === '/' ? '' : pathname}`;

  // Replace placeholder tags in index.html
  html = html.replace('__OG_TITLE__', escapeHtml(meta.title));
  html = html.replace('__OG_DESCRIPTION__', escapeHtml(meta.description));
  html = html.replace('__OG_URL__', canonical);
  html = html.replace('__CANONICAL_URL__', canonical);
  html = html.replace('__PAGE_TITLE__', escapeHtml(meta.title));
  html = html.replace('__META_DESCRIPTION__', escapeHtml(meta.description));

  return new Response(html, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
