# Antek Automation Website

Production marketing website for [Antek Automation](https://www.aiautomationagencyuk.com) — a UK-based AI automation agency building voice agents, chatbots and workflow automation for service businesses. Neo-brutalist design with earth-tone palette, deployed as a static SPA on Vercel.

## Tech Stack

- React 18 + TypeScript
- Tailwind CSS (neo-brutalist design system)
- Vite (build tooling)
- Vercel (hosting + Edge Functions)
- Lucide React (icons)
- ElevenLabs (voice agent demo)
- Cal.com (booking embed)

## Getting Started

```bash
npm install
cp .env.example .env   # Add your webhook URLs
npm run dev             # Dev server at http://localhost:5173
```

### Environment Variables

All `VITE_` prefixed; read at build time.

```bash
VITE_CONTACT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact
VITE_CHATBOT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/chatbot
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX   # Optional
```

## Development Commands

```bash
npm run dev           # Dev server
npm run typecheck     # TypeScript type check
npm run lint          # ESLint
npm run build         # Production build to dist/
npm run preview       # Preview production build
```

## Pages

### Main
- `/` — Home
- `/contact` — Contact form + Cal.com booking
- `/about` — About us
- `/case-studies` — Case studies

### Services
- `/services/ai-chatbots` — AI Chatbots
- `/services/ai-voice-agents` — AI Voice Agents
- `/services/ai-voice-assistants` — AI Voice Assistants
- `/services/workflow-automation` — Workflow Automation

### Who We Help
- `/who-we-help/tradespeople` — Tradespeople
- `/who-we-help/lawyers` — Lawyers & Solicitors
- `/who-we-help/dentists` — Dental Practices
- `/who-we-help/consultants` — Consultants & Freelancers

### Locations
- `/locations/:citySlug` — Dynamic location pages (London, Manchester, Birmingham, Leeds, Glasgow, Liverpool, Newcastle, Hampshire)

### Legal
- `/privacy-policy` — Privacy Policy
- `/terms-of-business` — Terms of Business

## Deployment

Static SPA deployed to Vercel. `vercel.json` configures SPA fallback and the Edge Function (`api/og.ts`) for server-side meta tag injection for social sharing and SEO crawlers.

## License

All rights reserved — Antek Automation © 2025
