import { useState, useEffect, Suspense, lazy } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { initializeAnalytics, trackPageView } from './utils/analytics';

// Lazy load chatbot widget (non-critical for initial load, loads after 5s anyway)
const ChatbotWidget = lazy(() => import('./components/ChatbotWidget').then(m => ({ default: m.ChatbotWidget })));

// Floating chat button
import { FloatingChatButton } from './components/FloatingChatButton';

// Lazy load pages
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const AIChatbotsPage = lazy(() => import('./pages/AIChatbotsPage').then(m => ({ default: m.AIChatbotsPage })));
const AIVoiceAgentsPage = lazy(() => import('./pages/AIVoiceAgentsPage').then(m => ({ default: m.AIVoiceAgentsPage })));
const AIVoiceAssistantsPage = lazy(() => import('./pages/AIVoiceAssistantsPage').then(m => ({ default: m.AIVoiceAssistantsPage })));
const WorkflowAutomationPage = lazy(() => import('./pages/WorkflowAutomationPage').then(m => ({ default: m.WorkflowAutomationPage })));
const LocationPage = lazy(() => import('./pages/LocationPage').then(m => ({ default: m.LocationPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfBusinessPage = lazy(() => import('./pages/TermsOfBusinessPage').then(m => ({ default: m.TermsOfBusinessPage })));
const TradespeoplePage = lazy(() => import('./pages/TradespeoplePage').then(m => ({ default: m.TradespeoplePage })));
const LawyersPage = lazy(() => import('./pages/LawyersPage').then(m => ({ default: m.LawyersPage })));
const DentistsPage = lazy(() => import('./pages/DentistsPage').then(m => ({ default: m.DentistsPage })));
const ConsultantsPage = lazy(() => import('./pages/ConsultantsPage').then(m => ({ default: m.ConsultantsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then(m => ({ default: m.CaseStudiesPage })));

// Global navigate function for easy access in onClick handlers
const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};
declare global {
  interface Window {
    navigate: (path: string) => void;
  }
}
window.navigate = navigate;

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  // Initialize Analytics on app mount
  useEffect(() => {
    initializeAnalytics();
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const newPath = window.location.pathname || '/';
      setCurrentPath(newPath);
      window.scrollTo(0, 0); // Scroll to top on route change
      trackPageView(newPath); // Track page view in Google Analytics
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    // Handle location routes
    if (currentPath.startsWith('/locations/')) {
      const citySlug = currentPath.replace('/locations/', '');
      return <LocationPage citySlug={citySlug} />;
    }

    switch (currentPath) {
      case '/contact':
        return <ContactPage />;
      case '/services/ai-chatbots':
        return <AIChatbotsPage />;
      case '/services/ai-voice-agents':
        return <AIVoiceAgentsPage />;
      case '/services/ai-voice-assistants':
        return <AIVoiceAssistantsPage />;
      case '/services/workflow-automation':
        return <WorkflowAutomationPage />;
      case '/who-we-help/tradespeople':
        return <TradespeoplePage />;
      case '/who-we-help/lawyers':
        return <LawyersPage />;
      case '/who-we-help/dentists':
        return <DentistsPage />;
      case '/who-we-help/consultants':
        return <ConsultantsPage />;
      case '/about':
        return <AboutPage />;
      case '/case-studies':
        return <CaseStudiesPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms-of-business':
        return <TermsOfBusinessPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-off-white">
      <Navigation />
      <main>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-off-white" />}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatbotWidget />
      </Suspense>
      <FloatingChatButton onClick={() => window.dispatchEvent(new Event('openChatbot'))} />
    </div>
  );
}

export default App;
