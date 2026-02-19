import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

interface DropdownItem {
  label: string;
  href: string;
}

function DesktopDropdown({
  label,
  items,
  isOpen,
  onToggle,
  onClose,
}: {
  label: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={onToggle}
        className="font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors flex items-center space-x-1"
      >
        <span>{label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-off-white border-3 border-charcoal shadow-brutal min-w-[260px] z-50">
          {items.map((link) => (
            <button
              key={link.href}
              onClick={() => { navigate(link.href); onClose(); }}
              className="block w-full text-left px-6 py-4 font-bold uppercase text-sm text-charcoal hover:bg-warm-beige transition-colors border-b-3 border-charcoal last:border-b-0 bg-transparent cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileDropdown({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: DropdownItem[];
  onNavigate: (href: string) => void;
}) {
  return (
    <div className="border-t-3 border-charcoal pt-4">
      <p className="font-black uppercase text-xs text-charcoal mb-3">{label}</p>
      {items.map((link) => (
        <button
          key={link.href}
          onClick={() => onNavigate(link.href)}
          className="block font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors mb-3 text-left w-full bg-transparent border-none cursor-pointer"
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const serviceLinks: DropdownItem[] = [
    { label: 'AI Chatbots', href: '/services/ai-chatbots' },
    { label: 'AI Voice Agents', href: '/services/ai-voice-agents' },
    { label: 'Workflow Automation', href: '/services/workflow-automation' },
  ];

  const whoWeHelpLinks: DropdownItem[] = [
    { label: 'Tradespeople', href: '/who-we-help/tradespeople' },
    { label: 'Lawyers & Solicitors', href: '/who-we-help/lawyers' },
    { label: 'Dental Practices', href: '/who-we-help/dentists' },
    { label: 'Consultants & Freelancers', href: '/who-we-help/consultants' },
  ];

  const handleMobileNav = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-off-white border-b-3 border-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="Antek Automation Logo" className="w-14 h-14" />
            <span className="font-black text-2xl uppercase text-charcoal">
              Antek Automation
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => navigate('/')}
              className="font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors bg-transparent border-none cursor-pointer"
            >
              Home
            </button>

            <DesktopDropdown
              label="Services"
              items={serviceLinks}
              isOpen={openDropdown === 'services'}
              onToggle={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
              onClose={() => setOpenDropdown(null)}
            />

            <DesktopDropdown
              label="Who We Help"
              items={whoWeHelpLinks}
              isOpen={openDropdown === 'who-we-help'}
              onToggle={() => setOpenDropdown(openDropdown === 'who-we-help' ? null : 'who-we-help')}
              onClose={() => setOpenDropdown(null)}
            />

            <button
              onClick={() => { navigate('/about'); setOpenDropdown(null); }}
              className="font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors bg-transparent border-none cursor-pointer"
            >
              About
            </button>

            <button
              onClick={() => { navigate('/case-studies'); setOpenDropdown(null); }}
              className="font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors bg-transparent border-none cursor-pointer"
            >
              Case Studies
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-terracotta border-3 border-charcoal ring-1 ring-white ring-inset shadow-brutal font-black uppercase text-off-white text-sm hover:shadow-brutal-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Book Free Call →
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t-3 border-charcoal bg-warm-beige">
            <div className="flex flex-col space-y-4 p-6">
              <button
                onClick={() => handleMobileNav('/')}
                className="font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors text-left bg-transparent border-none cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleMobileNav('/about')}
                className="font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors text-left bg-transparent border-none cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => handleMobileNav('/case-studies')}
                className="font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors text-left bg-transparent border-none cursor-pointer"
              >
                Case Studies
              </button>
              <button
                onClick={() => handleMobileNav('/contact')}
                className="font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors text-left bg-transparent border-none cursor-pointer"
              >
                Contact
              </button>

              <MobileDropdown label="Services" items={serviceLinks} onNavigate={handleMobileNav} />
              <MobileDropdown label="Who We Help" items={whoWeHelpLinks} onNavigate={handleMobileNav} />

              <button
                onClick={() => handleMobileNav('/contact')}
                className="w-full px-6 py-3 bg-terracotta border-3 border-charcoal ring-1 ring-white ring-inset shadow-brutal font-black uppercase text-off-white text-sm hover:shadow-brutal-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Book Free Call →
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
