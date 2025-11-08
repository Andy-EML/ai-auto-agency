# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a production-ready marketing website for Antek Automation, a UK-based AI automation company. The site features a neo-brutalist design with an earth-tone color palette and includes an integrated AI chatbot widget that connects to n8n webhooks.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (Vite dev server on http://localhost:5173)
npm run dev

# Type checking (run before committing)
npm run typecheck

# Linting
npm run lint

# Production build
npm run build

# Preview production build
npm run preview
```

**Useful command sequences:**
```bash
# Quick check before committing (run in order)
npm run typecheck && npm run lint && npm run build

# Full dev setup after cloning
npm install && npm run dev

# Test production build locally before deploying
npm run build && npm run preview
```

## Architecture

### Routing
The app uses **client-side routing** via `window.location.pathname` (not React Router). Routes are handled in `src/App.tsx`:
- `/` → HomePage
- `/contact` → ContactPage
- `/services/ai-chatbots` → AIChatbotsPage
- `/services/ai-voice-assistants` → AIVoiceAssistantsPage
- `/services/workflow-automation` → WorkflowAutomationPage
- `/locations/:citySlug` → LocationPage (dynamic route for location-specific pages)

The current route is determined by `window.location.pathname`. Navigation automatically scrolls to top on route change. Use the global `window.navigate(path)` function for programmatic navigation (e.g., `window.navigate('/contact')`). Note: There is no dedicated Pricing page - pricing information is included on the service-specific pages.

**Dynamic Location Routes:**
Location pages use a slug-based pattern (e.g., `/locations/london-ai-automation`). The `LocationPage` component receives the `citySlug` prop extracted from the route.

**Implemented Cities:** London, Manchester, Birmingham, Leeds, Liverpool, Glasgow, Edinburgh, Newcastle, Hampshire. Add new cities by extending the `cities` array in `src/data/cities.ts`.

### Component Structure
- **Pages** (`src/pages/`): Top-level page components
  - `HomePage.tsx`: Landing page with hero, services overview, industries
  - `ContactPage.tsx`: Contact form with webhook integration
  - `AIChatbotsPage.tsx`: Dedicated service page for AI chatbot solutions
  - `AIVoiceAssistantsPage.tsx`: Dedicated service page for voice AI (includes ElevenLabs voice chat demo)
  - `WorkflowAutomationPage.tsx`: Dedicated service page for automation
  - `LocationPage.tsx`: Dynamic location-specific landing pages (receives citySlug prop)
- **Components** (`src/components/`): Reusable UI components
  - `ChatbotWidget.tsx`: Persistent chatbot that appears on all pages
  - `VoiceChat.tsx`: Modal voice chat integration with ElevenLabs agent (demo on AIVoiceAssistantsPage)
  - `Navigation.tsx`: Global header with responsive menu (mobile: hamburger icon that toggles dropdown)
  - `Footer.tsx`: Global footer with links and copyright info
  - `Button.tsx`, `Card.tsx`, `Icon.tsx`: Design system primitives

### Type Definitions
All TypeScript types are centralized in `src/types/index.ts`:
- `ContactFormData`: Contact form submission payload
- `ChatMessage`: Individual chat message structure
- `ChatState`: Chatbot widget state management

### Design System (Neo-Brutalist)

**Core Principles:**
- 3px borders (`border-3`)
- Hard box shadows (`shadow-brutal`, `shadow-brutal-sm`, etc.)
- Hover effects: translate + shadow increase
- Uppercase text for headings/buttons
- Geometric icon squares (no emoji icons)

**Custom Tailwind Classes** (defined in `tailwind.config.js`):
```
Colors: charcoal, warm-beige, soft-sage, muted-taupe, terracotta, off-white,
        success-green, peach, mid-gray
Shadows: shadow-brutal, shadow-brutal-sm, shadow-brutal-lg, shadow-brutal-xs,
         shadow-brutal-chat, shadow-brutal-msg
Letter Spacing: tight-xl (-2px), tight-lg (-1px)
```

## Environment Configuration

Environment variables are defined in `.env` at the root directory. A `.env.example` template is provided as a reference.

**Important:** Environment variables are read at build time by Vite. Changes to `.env` require restarting the dev server (`npm run dev`).

### Webhook Integration

The site integrates with n8n webhooks via environment variables:

**Required Variables:**
```
VITE_CONTACT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact
VITE_CHATBOT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/chatbot
```

**Optional Variables:**
```
VITE_SUPABASE_URL=                    # Supabase project URL
VITE_SUPABASE_ANON_KEY=               # Supabase anonymous key
VITE_GA_MEASUREMENT_ID=               # Google Analytics Measurement ID (G-XXXXXXXXXX)
```

### Google Analytics

Google Analytics is integrated via gtag.js and automatically tracks page views for all route changes (SPA navigation).

**Setup:**
1. Create a Google Analytics property at [google.com/analytics](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Set `VITE_GA_MEASUREMENT_ID` in Vercel environment variables (recommended) or `.env` for local testing
4. The app will automatically load gtag and track:
   - Initial page load
   - Route changes (e.g., navigating between pages, location pages)
   - Page views include `page_path` and `page_title`

**Custom Event Tracking:**
Use `trackEvent()` from `src/utils/analytics.ts` to track custom events:
```typescript
import { trackEvent } from './utils/analytics';

// Track contact form submission
trackEvent('form_submit', 'contact_form', 'submit_button');

// Track chatbot interaction
trackEvent('chatbot_message', 'engagement', 'user_message', 1);
```

**Analytics Utility Functions:**
- `initializeAnalytics()` - Loads gtag script (called on app mount)
- `trackPageView(path)` - Tracks page view (called on route change)
- `trackEvent(action, category, label?, value?)` - Tracks custom events

**Chatbot Behavior:**
- Auto-opens after 5 seconds on first visit (tracked via `localStorage` key: `chatbot_visited`)
- Session ID generated: `session_${timestamp}_${randomId}`
- Sends POST to `VITE_CHATBOT_WEBHOOK_URL` with: `{ sessionId, message, timestamp, pageUrl, source }`
- Response handling: Expects either `{ reply: "string" }` or `{ output: "string" }` format. Handles both direct objects and array responses from n8n (uses first element if array).
- Fallback message shown if webhook unavailable or fails
- Loading indicator with animated dots while waiting for response
- Analytics tracked: Auto-open event and user message interactions (via `trackEvent()` in ChatbotWidget)

**Contact Form:**
- Sends POST to `VITE_CONTACT_WEBHOOK_URL`
- Payload structure defined in `ContactFormData` type
- Includes fields: name, businessName, phone, email, serviceType, budget, interests[], message, preferredContact

## Technology Stack

**Core Framework:**
- React 18.3.1 - UI framework
- TypeScript 5.5.3 - Type-safe JavaScript
- Vite 5.4.2 - Build tool and dev server (HMR for fast development)
- Tailwind CSS 3.4.1 - Utility-first styling

**Key Libraries:**
- lucide-react (0.344.0) - Icon library (geometric SVG icons, no emojis)
- @elevenlabs/react (0.8.0) - ElevenLabs voice chat integration
- @supabase/supabase-js (2.57.4) - Optional Supabase backend

**Development Tools:**
- ESLint 9.9.1 - Linting with v9 flat config format
- TypeScript ESLint - Strict TypeScript linting rules
- Autoprefixer, PostCSS - CSS processing and vendor prefixes

## Key Architectural Decisions

1. **Pathname-Based Routing** - Uses `window.location.pathname` for clean, SEO-friendly client-side routing (not hash-based, not React Router). Requires SPA fallback on server (index.html serves all routes).

2. **No Backend API** - All webhook communication goes directly to n8n. Enables serverless architecture.

3. **Centralized Types** (`src/types/index.ts`) - Single source of truth for all interfaces. Easier to maintain and refactor.

4. **Design System Primitives** - Button and Card components enforce brutalist consistency across all pages.

5. **ElevenLabs Voice Chat** - Pre-built voice agent integration using `@elevenlabs/react`. Configured via agent ID in VoiceChat component.

6. **LocalStorage for Session Tracking** - Chatbot tracks first visit to avoid repeated auto-opens. Uses key: `chatbot_visited`.

7. **Vite Over Create React App** - Modern tooling, faster HMR, smaller bundle, better ES module support.

8. **TypeScript Strict Mode** - All strict checks enabled (`strict: true`, `noUnusedLocals`, `noUnusedParameters`). Errors on unused variables/parameters.

9. **Code Splitting & Lazy Loading** - Pages and ChatbotWidget are lazy-loaded via React.lazy(). Reduces initial bundle size and speeds up first page load.

10. **Vendor Chunk Splitting** - Separate chunks for React, icons, and voice libraries allow better caching and parallel downloads.

## Component Patterns & Best Practices

### State Management Pattern
The app uses simple, lightweight state management without Redux or Context API:
- **Component-level state**: Use `useState()` for component-specific state (e.g., form inputs in ContactPage)
- **Global events**: Use custom `window.dispatchEvent()` for global UI triggers (e.g., opening chatbot, voice chat)
- **localStorage**: Use for persistent session state (e.g., `chatbot_visited` flag, user preferences)
- **Props**: Pass data down from parent to child components. Keep prop drilling minimal by lifting state only as high as needed.

### Event Patterns
Create custom events for cross-component communication:
```typescript
// Dispatch event
window.dispatchEvent(new Event('openChatbot'));

// Listen to event
window.addEventListener('openChatbot', () => {
  // Handle event
});
```

Common custom events:
- `openChatbot` - Open the chatbot widget
- `openVoiceChat` - Open voice chat modal
- `contactFormSubmitted` - Form submission completed

### Page Component Pattern
All page components follow this structure:
1. Import `SEOHead` for meta tags and schema
2. Define page layout and content
3. Return JSX with `SEOHead` at the top
4. Keep API calls and webhooks in effect hooks or event handlers

Example:
```typescript
export function MyPage() {
  return (
    <>
      <SEOHead
        title="Page Title"
        description="Page meta description"
        schema={/* JSON-LD */}
      />
      {/* Page content */}
    </>
  );
}
```

## Common Patterns & State Management

### Navigation & Routing
- Use `window.navigate('/path')` for programmatic navigation (function defined in App.tsx)
- Routing automatically scrolls to top on route change (handled in `App.tsx` via popstate listener)
- Example: `window.navigate('/contact')` or `window.navigate('/services/ai-chatbots')`
- For event-driven navigation: dispatch custom events like `new Event('openChatbot')`

### Component Communication
- **Custom Events**: Used for global UI triggers (e.g., `openChatbot` event from buttons)
- **localStorage**: Tracks session state (e.g., `chatbot_visited` to prevent duplicate auto-opens)
- **Props**: Primary method for component data flow (pages pass `citySlug` to LocationPage, etc.)

### SEO & Meta Tags
- All pages use `SEOHead` component to set page title, description, and JSON-LD schema
- Organization schema defined at page level (see `HomePage.tsx` for example)
- Schema markup includes context data relevant to each page

### Webhook Communication
- All webhook calls use `fetch()` with POST requests
- Requests include `timestamp: new Date().toISOString()`
- Include `source` field to identify request origin (e.g., `"website_chatbot"`)
- Handle errors gracefully with fallback messages shown to users
- Session tracking: Generate unique `sessionId` format: `session_${timestamp}_${randomId}`

## File Reference

### Pages
- `src/pages/HomePage.tsx` - Landing page with hero, services overview, industries, organization schema
- `src/pages/ContactPage.tsx` - Contact form for lead capture, sends to contact webhook
- `src/pages/AIChatbotsPage.tsx` - Service detail page: AI chatbots, features, benefits
- `src/pages/AIVoiceAssistantsPage.tsx` - Service detail page: Voice AI with ElevenLabs demo integration
- `src/pages/WorkflowAutomationPage.tsx` - Service detail page: Workflow automation solutions
- `src/pages/LocationPage.tsx` - Dynamic location pages (receives `citySlug` prop from route)

### Components
- `src/components/Navigation.tsx` - Global header with logo, nav links, services dropdown. Mobile behavior: hamburger menu icon that toggles visibility of nav links in a dropdown
- `src/components/Footer.tsx` - Global footer with links and copyright info
- `src/components/ChatbotWidget.tsx` - AI chatbot widget (persistent, all pages, webhook-driven, auto-opens first visit)
- `src/components/VoiceChat.tsx` - Voice chat modal with ElevenLabs agent integration (triggered via `openVoiceChat` custom event)
- `src/components/Button.tsx` - Button primitive: `variant="primary"` or `variant="secondary"`, brutalist styling
- `src/components/Card.tsx` - Card primitive: `hover` prop enables translate + shadow effect on hover
- `src/components/Icon.tsx` - Icon wrapper component using lucide-react
- `src/components/SEOHead.tsx` - Sets meta tags, title, description, JSON-LD schema markup

### Data & Types
- `src/data/cities.ts` - City data for location pages (name, slug, description, testimonials, service offerings)
- `src/types/index.ts` - All TypeScript interfaces: `ContactFormData`, `ChatMessage`, `ChatState`

### Configuration
- `vite.config.ts` - Vite build config (React plugin, lucide-react HMR optimization)
- `tailwind.config.js` - Tailwind theme (colors, shadows, custom utilities)
- `postcss.config.js` - PostCSS config (Tailwind and Autoprefixer)
- `eslint.config.js` - ESLint config (v9 flat format, React Hooks rules enforced)
- `tsconfig.json` - Root TypeScript config (project references)
- `tsconfig.app.json` - App TypeScript config (strict mode enabled)

## Working with the Codebase

### Design Changes
- Maintain 3px borders (`border-3`) and hard box shadows (`shadow-brutal*`)
- Use `uppercase` class for headings and buttons
- Stick to earth-tone palette: charcoal, warm-beige, soft-sage, muted-taupe, terracotta, off-white
- Test hover states (translate -2px + shadow increase)
- Active states: translate +2px + shadow decrease
- No rounded corners - use hard edges for brutalist aesthetic

### Adding New Pages
1. Create page component in `src/pages/NewPage.tsx`
2. Import component in `src/App.tsx`
3. Add route case in the switch statement in `App.tsx` (inside `renderPage()` function)
4. Update `src/components/Navigation.tsx` if link should appear in nav menu
5. Add `SEOHead` component with appropriate title, description, and schema

### Adding Location Pages
- Add city data to `src/data/cities.ts` with structure matching other city objects (slug, name, region, metaDescription, etc.)
- Route automatically works: `/locations/city-slug` maps to LocationPage with `citySlug` prop
- No changes to `src/App.tsx` needed - uses dynamic route matching
- LocationPage component extracts `citySlug` from route and looks up data via `getCityData(slug)`
- New cities automatically appear in Footer and location listing (Footer splits cities into "Locations" and "More Locations" columns at index 4)

### Updating Contact Information
Contact details appear in multiple places and are defined in centralized locations:
- **Footer Contact Section** (`src/components/Footer.tsx`): Email, phone, and address are hardcoded in the Contact column
  - Email: `hello@antekautomation.com` (also has `mailto:` link)
  - Phone: `03330389960` (also has `tel:` link)
  - Address: `Chantry House, 38 Chantry Way, Andover, SP10 1LZ`
- When updating contact info, update Footer.tsx and search the codebase for any other hardcoded references
- Consider centralizing contact data to `src/data/` if contact info is referenced in multiple components

### Webhook Modifications
- Environment variables use `VITE_` prefix (Vite convention)
- Update type interfaces in `src/types/index.ts` if payload schema changes
- Update webhook sender implementation (ChatbotWidget.tsx or ContactPage.tsx)
- Include proper error handling with try/catch and fallback messages
- Test webhooks using ngrok for local development

### SEO Implementation
- All pages must use `SEOHead` component (sets title, description, canonical, schema)
  - Import: `import { SEOHead } from '../components/SEOHead'`
  - Example: `<SEOHead title="..." description="..." schema={...} />`
  - Renders meta tags in document head and JSON-LD structured data
- Define JSON-LD schema at page level (Organization, LocalBusiness, etc.)
- Update page meta when content changes to maintain search visibility
- Include relevant keywords in title and description
- Static SEO files:
  - `dist/robots.txt` - Search engine crawling rules
  - `dist/sitemap.xml` - Site structure for search engines
  - `dist/llms.txt` - AI attribution guidelines (for LLM training data use)

### ElevenLabs Voice Integration
- Voice chat component located in `src/components/VoiceChat.tsx`
- Requires ElevenLabs agent ID configured in component props
- Sends session context including `sessionId`, `userId`, page URL to ElevenLabs
- Modal opens via custom event: `window.dispatchEvent(new Event('openVoiceChat'))`
- Voice integration available on `AIVoiceAssistantsPage` as demo

## Local Development & Testing

### Setting Up Environment Variables

Create a `.env` file in the root directory. Start with the required variables:

```bash
# Contact form webhook
VITE_CONTACT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact

# Chatbot webhook
VITE_CHATBOT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/chatbot

# Optional: Supabase integration (if using)
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

**Important:** Environment variables are read at build time. After updating `.env`, restart the dev server:
```bash
npm run dev
```

### Local Testing with n8n

Use ngrok to expose local n8n instance:
```bash
ngrok http 5678
```

Update your `.env` file with ngrok URLs:
```bash
VITE_CONTACT_WEBHOOK_URL=https://abc123.ngrok.io/webhook/contact
VITE_CHATBOT_WEBHOOK_URL=https://abc123.ngrok.io/webhook/chatbot
```

Restart dev server to apply changes:
```bash
npm run dev
```

## Pre-Commit Checklist

Before committing code, ensure:
1. Run `npm run typecheck` - Catch type errors
2. Run `npm run lint` - Fix linting issues
3. Run `npm run build` - Verify production build succeeds
4. Test changes locally with `npm run dev`
5. Verify no secrets (API keys, tokens) are committed
6. Update CLAUDE.md or relevant docs if architecture changes

## Debugging & Monitoring

### Browser DevTools
- **Network Tab**: Monitor webhook requests (Contact form, Chatbot messages). Check for failed requests, latency, and response payloads.
- **Console Tab**: Look for React warnings, TypeScript errors, or failed imports.
- **Application Tab**: Check `localStorage` for `chatbot_visited` flag and any session data.
- **Performance Tab**: Monitor FCP (First Contentful Paint), LCP (Largest Contentful Paint), and CLS (Cumulative Layout Shift).

### Google Analytics Debugging
- Visit `https://antekautomation.co.uk` and check Analytics real-time data
- Verify page views appear in Google Analytics dashboard (may have 24h delay)
- Test custom events with `gtag('event', 'test_event')` in browser console
- Use "DebugView" in Google Analytics to see real-time event stream without delay

### Webhook Debugging
- Use browser DevTools Network tab to capture webhook requests/responses
- Test webhook URLs directly with curl before deploying
- Check n8n webhook logs to see if payloads are arriving
- Verify environment variables are loaded: Open dev console and check `window.__VITE_WEBHOOK_URLS` or similar (requires exposing via Vite config)

## Common Development Tasks

### Hot Module Reload (HMR) Not Working
- Vite should auto-reload components on save. If not working, try `npm run dev` again
- Check that lucide-react is not being dependency-optimized (it's excluded in vite.config.ts)
- Hard refresh browser (Cmd+Shift+R on Mac)
- Check browser console for errors that might prevent HMR

### Testing Webhook Response Formats
ChatbotWidget handles flexible webhook responses:
- Direct object: `{ reply: "message" }` or `{ output: "message" }`
- Array response: `[{ reply: "message" }, ...]` (uses first element)
- n8n returns objects, so either format works

Test with curl:
```bash
curl -X POST https://your-webhook-url \
  -H "Content-Type: application/json" \
  -d '{
    "sessionId": "test_session_12345",
    "message": "hello",
    "timestamp": "2025-10-20T00:00:00Z",
    "pageUrl": "http://localhost:5173",
    "source": "test"
  }'
```

### Type Errors After Code Changes
- Run `npm run typecheck` to catch all type errors before committing
- Common issues: unused imports, missing types, prop mismatches
- Check `tsconfig.app.json` for strict mode settings

### Styling Issues with Tailwind
- After adding new custom colors/shadows to `tailwind.config.js`, restart dev server
- Verify class names follow Tailwind syntax (no spaces in compound classes)
- Check that CSS layers are imported in `src/index.css` in correct order

### Webhook Testing
- Use `curl` or Postman to test webhook URLs locally
- Check browser DevTools Network tab to see actual request/response
- Verify environment variables are loaded: `VITE_*` vars are read at build time
- For local testing, use ngrok and restart dev server after updating URLs

### Linting Issues
- Run `npm run lint` to see all ESLint violations
- React Hooks rules are enforced - ensure hooks called at top level in components
- Unused imports/variables will cause errors in strict mode

### Build Failures
- Clear `.cache` and `node_modules` if build fails: `rm -rf node_modules .cache && npm install`
- If Vite fails during build, check that all imports use correct paths (relative imports for local modules)
- Verify no circular dependencies by checking import chains
- Check `dist/` folder exists and has proper file structure before deploying

## Git Workflow

**Branch Strategy:**
- Main branch (`main`) is production-ready and deployed
- Create feature branches from `main` for new work: `git checkout -b feature/your-feature`
- Push branches and create pull requests for review before merging to `main`

**Committing Changes:**
- Run pre-commit checklist before creating commits (see "Pre-Commit Checklist" below)
- Use descriptive commit messages that explain the "why"
- Example: `git commit -m "Add Hampshire location page with SEO metadata"`
- Avoid committing sensitive files (`.env`, credentials, tokens)

## TypeScript Configuration

The project uses TypeScript project references:
- `tsconfig.json`: Root config that references app and node configs
- `tsconfig.app.json`: App-specific TypeScript configuration
- `tsconfig.node.json`: Node/Vite configuration

Run `npm run typecheck` before committing to catch type errors.

## Performance Considerations

### Code Splitting
- **Initial Load**: Only HomePage, Navigation, Footer, and necessary vendor libraries load on first visit
- **Lazy Loaded**: Service pages and ChatbotWidget load on-demand when needed
- **React.lazy()**: Used for pages, with Suspense fallback while loading
- **ChatbotWidget**: Lazy-loads after 5 seconds, doesn't block initial render

### Bundle Optimization
- Lucide-react icons excluded from dependency pre-optimization (uses native ES modules)
- Manual vendor chunks prevent duplication and improve browser caching
- Source maps enabled in production for debugging without exposing source

### When to Optimize Further
- Monitor Core Web Vitals using PageSpeed Insights
- If LCP is slow, consider inlining critical CSS or preloading fonts
- If FID/INP is high, check for long tasks in event handlers (use `setTimeout` to defer work)
- If CLS is high, ensure images have fixed dimensions and avoid layout shifts

## Linting

ESLint is configured using the v9 flat config format (`eslint.config.js`):
- TypeScript ESLint with recommended rules
- React Hooks rules enforced (must follow hooks rules)
- React Refresh plugin (warns if non-component exports in component files)
- Run `npm run lint` to check for issues

## CSS & Styling

**Global Styles** (`src/index.css`):
- Tailwind CSS layers imported: `@tailwind base`, `@tailwind components`, `@tailwind utilities`
- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif`
- Custom utilities: `.w-15` and `.h-15` (3.75rem)

**Tailwind Custom Tokens** (`tailwind.config.js`):
- Extended theme with custom colors (charcoal, warm-beige, soft-sage, muted-taupe, terracotta, off-white, success-green, peach, mid-gray)
- Custom shadows: `shadow-brutal`, `shadow-brutal-sm`, `shadow-brutal-lg`, `shadow-brutal-xs`, `shadow-brutal-chat`, `shadow-brutal-msg`
- Custom letter spacing: `tracking-tight-xl` (-2px), `tracking-tight-lg` (-1px)
- Custom border width: `border-3` (3px)
- No rounded corners by default (brutalist design aesthetic)

## Build & Deployment

**Vite Configuration** (`vite.config.ts`):
- React plugin enabled for automatic JSX transform
- Lucide-react library excluded from dependency optimization (faster HMR during development)
- Manual chunk splitting configured for optimized bundle:
  - `vendor-react`: React and React DOM
  - `vendor-icons`: lucide-react
  - `vendor-elevenlabs`: @elevenlabs/react
  - Lazy-loaded pages split into separate chunks
- Source maps enabled for production debugging

**Build Process:**
```bash
npm run build      # Creates optimized production build in dist/
npm run preview    # Preview production build locally
```

**Output:**
- Production build: `dist/` directory (minified, optimized, with source maps)
- Includes all assets, CSS, JavaScript chunks split by vendor/page

**Deployment Ready:**
- Static site - can be deployed to any static hosting (Vercel, Netlify, AWS S3, etc.)
- No server-side rendering needed
- All routing is client-side via `window.location.pathname`
- **Critical**: Server must serve `index.html` for all routes (SPA fallback). This allows direct deep linking to routes like `/services/ai-chatbots`
  - **Vercel**: Configured via `vercel.json` (included in repo) with rewrites rule that maps all routes to `/index.html`
  - **Netlify**: Auto-configures this for SPAs, or use `netlify.toml` with rewrite rule
  - **Other hosts**: Configure 404 → index.html rewrite or enable trailing slash rewrites
- Environment variables must be set at build time via `.env` file (or via platform-specific environment variable UI for build-time secrets)

**Pre-Deployment Checklist:**
1. Run full test suite: `npm run typecheck && npm run lint && npm run build`
2. Verify production build locally: `npm run preview` (check at `http://localhost:4173`)
3. Test all critical flows:
   - Contact form submission (check webhook is accessible)
   - Chatbot interaction (verify chatbot webhook URL is correct)
   - Navigation between service pages
   - Location pages load correctly
   - Mobile menu works
4. Check that all environment variables are set in deployment platform
5. Verify no console errors or warnings in production build
6. Test on multiple browsers: Chrome, Firefox, Safari, Edge

## TypeScript Strictness

**Strict Mode Enabled** (`tsconfig.app.json`):
- `strict: true` - All strict type checking rules enabled
- `noUnusedLocals: true` - Error on unused variables
- `noUnusedParameters: true` - Error on unused function parameters
- `noFallthroughCasesInSwitch: true` - Error on switch statement fallthrough
- `jsx: react-jsx` - Automatic JSX transform (no React import needed)

**Important:** All code must pass strict TypeScript checks. Run `npm run typecheck` before committing.
