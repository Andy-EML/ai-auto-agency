export const config = { runtime: 'edge' };

const BASE_URL = 'https://www.aiautomationagencyuk.com';

interface MetaEntry {
  title: string;
  description: string;
}

// Static route metadata — keep in sync with SEOHead props in page components
const ROUTE_META: Record<string, MetaEntry> = {
  '/': {
    title: 'Antek Automation | AI Automation Agency UK | Business Growth',
    description:
      'Missing calls = lost customers | AI voice assistants & chatbots capture every lead 24/7 | UK automation agency for service businesses',
  },
  '/contact': {
    title: 'Contact Antek Automation | AI Automation Agency UK | Free Audit',
    description:
      'Talk to us about AI automation | Capture every customer call 24/7 | Expert setup & support for UK service businesses | Free consultation',
  },
  '/services/ai-chatbots': {
    title: 'AI Chatbots | Antek Automation | AI Automation Agency UK',
    description:
      'AI chatbots that capture leads 24/7 | Answer FAQs & book appointments automatically | Never miss a customer inquiry again | UK service businesses',
  },
  '/services/ai-voice-assistants': {
    title: 'Voice Automation Systems | AI Phone Agents | Antek Automation UK',
    description:
      'AI voice agents that answer calls 24/7 | Book appointments automatically | Never miss a call again | Boost revenue for UK service businesses',
  },
  '/services/workflow-automation': {
    title: 'Workflow Automation | Business Process Automation | Antek Automation UK',
    description:
      'Automate repetitive tasks & eliminate manual work | Connect your business tools | Save hours every week | Transform operations for UK service businesses',
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
};

// Location page metadata — city slug → meta
const LOCATION_META: Record<string, MetaEntry> = {
  london: {
    title: 'AI Automation Agency London | Antek Automation | Business Growth',
    description:
      'AI voice agents & chatbots for London | Answer every call 24/7 | Capture leads & book appointments | Antek Automation UK',
  },
  birmingham: {
    title: 'AI Automation Agency Birmingham | Antek Automation | Business Growth',
    description:
      'AI voice agents & chatbots for Birmingham | Never miss a call again | Serve all West Midlands 24/7 | Antek Automation UK',
  },
  manchester: {
    title: 'AI Automation Agency Manchester | Antek Automation | Business Growth',
    description:
      'AI voice agents & chatbots for Manchester | Handle calls from Greater Manchester 24/7 | Capture every lead | Antek Automation UK',
  },
  leeds: {
    title: 'AI Automation Agency Leeds | Antek Automation | Business Growth',
    description:
      'AI voice agents & chatbots for Leeds | Answer calls 24/7 | Serve all West Yorkshire | Antek Automation UK',
  },
  liverpool: {
    title: 'AI Automation Agency Liverpool | Antek Automation | Business Growth',
    description:
      'AI voice agents & chatbots for Liverpool | Handle calls across Merseyside 24/7 | Never miss business again | Antek Automation UK',
  },
  glasgow: {
    title: 'AI Automation Agency Glasgow | Antek Automation | Business Growth',
    description:
      'AI voice agents & chatbots for Glasgow | Answer calls 24/7 across Scotland | Capture every customer | Antek Automation UK',
  },
  newcastle: {
    title: 'AI Automation Agency Newcastle | Antek Automation | Business Growth',
    description:
      'AI voice agents & chatbots for Newcastle | Handle calls across Northeast 24/7 | Book appointments automatically | Antek Automation UK',
  },
  hampshire: {
    title: 'AI Automation Agency Hampshire | Antek Automation | Business Growth',
    description:
      'AI voice agents & chatbots for Hampshire | Answer every call 24/7 | Capture leads & book appointments | Antek Automation UK',
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
