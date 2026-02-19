# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Production marketing website for Antek Automation, a UK-based AI automation company. Neo-brutalist design with earth-tone palette, AI chatbot widget, and n8n webhook integrations. Deployed as a static SPA on Vercel.

## Development Commands

```bash
npm install           # Install dependencies
npm run dev           # Dev server at http://localhost:5173
npm run typecheck     # Type check (run before committing)
npm run lint          # Lint check
npm run build         # Production build to dist/
npm run preview       # Preview production build locally

# Quick pre-commit check
npm run typecheck && npm run lint && npm run build
```

## Architecture

### Routing

Client-side routing via `window.location.pathname` — no React Router. Routes defined in `src/App.tsx` `renderPage()` function:

- `/` → HomePage (eagerly loaded)
- `/contact` → ContactPage
- `/services/ai-chatbots` → AIChatbotsPage
- `/services/ai-voice-assistants` → AIVoiceAssistantsPage
- `/services/workflow-automation` → WorkflowAutomationPage
- `/privacy-policy` → PrivacyPolicyPage
- `/terms-of-business` → TermsOfBusinessPage
- `/locations/:citySlug` → LocationPage (dynamic, slug extracted from path)

All service/detail pages are lazy-loaded via `React.lazy()`. Use `window.navigate('/path')` for programmatic navigation (defined globally in `App.tsx`).

### Key Files

- `src/App.tsx` — Router, global `window.navigate()`, Analytics init, layout
- `src/constants/index.ts` — Centralized app constants (ElevenLabs agent ID, chatbot behavior, company info, webhook sources). **Update here when changing contact info, timing, or agent IDs.**
- `src/data/cities.ts` — Location page city data. Add new cities here; routes auto-resolve.
- `src/types/index.ts` — All TypeScript interfaces: `ContactFormData`, `ChatMessage`, `ChatState`
- `src/utils/analytics.ts` — `initializeAnalytics()`, `trackPageView(path)`, `trackEvent(action, category, label?, value?)`

### Components

- `ChatbotWidget.tsx` — Persistent chatbot on all pages; auto-opens after 5s on first visit (tracked via `localStorage` key `chatbot_visited`); posts to `VITE_CHATBOT_WEBHOOK_URL`
- `FloatingChatButton.tsx` — Floating button that dispatches `openChatbot` custom event
- `VoiceChat.tsx` — ElevenLabs voice modal; triggered via `openVoiceChat` custom event
- `VoiceAgentDemoButton.tsx`, `VoiceDemoButton.tsx`, `ChatbotDemoButton.tsx` — Demo trigger buttons for service pages
- `SEOHead.tsx` — Sets `<title>`, meta description, canonical URL, and JSON-LD schema per page
- `Navigation.tsx` — Global header; mobile: hamburger toggles dropdown
- `Button.tsx`, `Card.tsx`, `Icon.tsx` — Design system primitives

### Cross-Component Communication

Custom events via `window.dispatchEvent` / `window.addEventListener`:
- `openChatbot` — Opens chatbot widget
- `openVoiceChat` — Opens voice chat modal

### State Management

No Redux or Context. Pattern:
- Component `useState` for local state
- `localStorage` for persistent session state
- Custom window events for global UI triggers
- Props for parent-to-child data flow

## Environment Variables

All `VITE_` prefixed; read at **build time** — restart dev server after changes.

```bash
# Required
VITE_CONTACT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact
VITE_CHATBOT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/chatbot

# Optional
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Copy `.env.example` to `.env` for local setup.

## Design System (Neo-Brutalist)

**Rules:** 3px borders (`border-3`), hard box shadows (no blur), no rounded corners, uppercase headings/buttons, earth-tone palette.

**Custom Tailwind tokens** (`tailwind.config.js`):
- Colors: `charcoal`, `warm-beige`, `soft-sage`, `muted-taupe`, `terracotta`, `off-white`, `success-green`, `peach`, `mid-gray`
- Shadows: `shadow-brutal`, `shadow-brutal-sm`, `shadow-brutal-lg`, `shadow-brutal-xs`, `shadow-brutal-chat`, `shadow-brutal-msg`
- Borders: `border-3` (3px)
- Letter spacing: `tracking-tight-xl` (-2px), `tracking-tight-lg` (-1px)

Hover: translate -2px + shadow increase. Active: translate +2px + shadow decrease.

## Webhook Integration

**Chatbot** posts to `VITE_CHATBOT_WEBHOOK_URL`:
```json
{ "sessionId": "session_<ts>_<id>", "message": "...", "timestamp": "...", "pageUrl": "...", "source": "website_chatbot" }
```
Response: `{ "reply": "..." }` or `{ "output": "..." }` — handles both direct objects and n8n arrays (uses first element).

**Contact form** posts to `VITE_CONTACT_WEBHOOK_URL` with `ContactFormData` type payload.

Test webhooks locally with ngrok: `ngrok http 5678`, then update `.env` and restart dev server.

## Adding New Pages

1. Create `src/pages/NewPage.tsx` with `SEOHead` at top
2. Add `const NewPage = lazy(...)` import in `src/App.tsx`
3. Add route case to `renderPage()` in `App.tsx`
4. Update `Navigation.tsx` if it needs a nav link

## Adding Location Pages

Add city object to `src/data/cities.ts` — routing resolves automatically. No `App.tsx` changes needed. Cities appear in Footer automatically (split at index 4 between "Locations" and "More Locations").

## TypeScript

Strict mode enabled (`tsconfig.app.json`): `strict: true`, `noUnusedLocals`, `noUnusedParameters`. Run `npm run typecheck` before committing.

## Build & Deployment

Static SPA deployed to Vercel. `vercel.json` configures SPA fallback (all routes → `index.html`). Bundle uses manual chunk splitting: `vendor-react`, `vendor-icons`, `vendor-elevenlabs`. Source maps enabled in production.
