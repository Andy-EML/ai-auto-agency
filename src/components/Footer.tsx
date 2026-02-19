import { getAllCities } from '../data/cities';
import { CONSTANTS } from '../constants';

export function Footer() {
  const cities = getAllCities();

  return (
    <footer className="bg-mid-gray border-t-3 border-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-16">
          {/* Brand + Social + Certification */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity">
              <img src="/logo.svg" alt="Antek Automation Logo" className="w-12 h-12" />
              <span className="font-black text-lg md:text-xl uppercase text-off-white">
                Antek Automation
              </span>
            </a>
            <p className="text-off-white text-sm md:text-base leading-normal mb-6">
              AI voice agents, chatbots and workflow automation for UK service businesses.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-8">
              <a
                href="https://www.linkedin.com/company/antek-automation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Antek Automation on LinkedIn"
                className="text-gray-300 hover:text-terracotta transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/Antek-Automation-Intelligent-Voice-Ai-Chat-Agents/61587195202811/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Antek Automation on Facebook"
                className="text-gray-300 hover:text-terracotta transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/antekautomation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Antek Automation on Instagram"
                className="text-gray-300 hover:text-terracotta transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@AntekAutomation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Antek Automation on YouTube"
                className="text-gray-300 hover:text-terracotta transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/XwJc5GwJvMBSJrG4A"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Antek Automation on Google Business"
                className="text-gray-300 hover:text-terracotta transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
              </a>
              <a
                href="https://www.crunchbase.com/organization/antek-automation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Antek Automation on Crunchbase"
                className="text-gray-300 hover:text-terracotta transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.6 0H2.4A2.4 2.4 0 0 0 0 2.4v19.2A2.4 2.4 0 0 0 2.4 24h19.2a2.4 2.4 0 0 0 2.4-2.4V2.4A2.4 2.4 0 0 0 21.6 0zM7.045 14.465a2.175 2.175 0 0 0 1.631.686c.766 0 1.329-.376 1.631-.686l1.44 1.08c-.645.874-1.678 1.455-3.071 1.455C6.065 17 4.2 15.464 4.2 12.9s1.865-4.1 4.476-4.1c1.393 0 2.426.581 3.071 1.455l-1.44 1.08c-.302-.31-.865-.686-1.631-.686-1.263 0-2.175.963-2.175 2.251s.912 2.251 2.175 2.251h-.631zm9.755.686c.766 0 1.329-.376 1.631-.686l1.44 1.08c-.645.874-1.678 1.455-3.071 1.455-2.611 0-4.476-1.536-4.476-4.1s1.865-4.1 4.476-4.1c1.393 0 2.426.581 3.071 1.455l-1.44 1.08c-.302-.31-.865-.686-1.631-.686-1.263 0-2.175.963-2.175 2.251s.912 2.251 2.175 2.251z" />
                </svg>
              </a>
            </div>

            {/* Retell AI Gold Partner Badge */}
            <a
              href="https://www.retellai.com/partner/antek-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
              aria-label="Antek Automation — Certified Retell AI Gold Partner"
            >
              <div className="border-3 border-charcoal bg-off-white px-4 py-3 shadow-brutal-sm">
                <p className="text-xs font-black uppercase text-charcoal tracking-wide mb-1">Certified Partner</p>
                <p className="text-sm font-black uppercase text-terracotta">Retell AI — Gold</p>
                <p className="text-xs text-charcoal mt-1">Voice Agent Platform</p>
              </div>
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold uppercase text-off-white text-sm md:text-base mb-6 tracking-tight-lg">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services/ai-chatbots" className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200">
                  AI Chatbots
                </a>
              </li>
              <li>
                <a href="/services/ai-voice-agents" className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200">
                  AI Voice Agents
                </a>
              </li>
              <li>
                <a href="/services/workflow-automation" className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200">
                  Workflow Automation
                </a>
              </li>
            </ul>

            <h4 className="font-bold uppercase text-off-white text-sm md:text-base mt-8 mb-6 tracking-tight-lg">Who We Help</h4>
            <ul className="space-y-3">
              <li>
                <a href="/who-we-help/tradespeople" className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200">
                  Tradespeople
                </a>
              </li>
              <li>
                <a href="/who-we-help/lawyers" className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200">
                  Lawyers & Solicitors
                </a>
              </li>
              <li>
                <a href="/who-we-help/dentists" className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200">
                  Dental Practices
                </a>
              </li>
              <li>
                <a href="/who-we-help/consultants" className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200">
                  Consultants
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold uppercase text-off-white text-sm md:text-base mb-6 tracking-tight-lg">Locations</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {cities.map((city) => (
                <li key={city.slug}>
                  <a
                    href={`/locations/${city.slug}`}
                    className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200"
                  >
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase text-off-white text-sm md:text-base mb-6 tracking-tight-lg">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONSTANTS.CONTACT_EMAIL}`}
                  className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200"
                >
                  {CONSTANTS.CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="tel:03330389960"
                  className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200"
                >
                  03330 389960
                </a>
              </li>
              <li>
                <div className="text-gray-300 text-sm md:text-base leading-relaxed">
                  <div>Chantry House</div>
                  <div>38 Chantry Way</div>
                  <div>Andover, SP10 1LZ</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold uppercase text-off-white text-sm md:text-base mb-6 tracking-tight-lg">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/terms-of-business" className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200">
                  Terms of Business
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-3 border-charcoal mt-20 pt-12">
          <p className="text-center text-gray-400 text-xs md:text-sm leading-relaxed">
            © {new Date().getFullYear()} Antek Automation. All rights reserved. UK AI Automation Agency.
          </p>
        </div>
      </div>
    </footer>
  );
}
