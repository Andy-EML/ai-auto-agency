import { getAllCities } from '../data/cities';
import { CONSTANTS } from '../constants';

export function Footer() {
  const cities = getAllCities();

  return (
    <footer className="bg-mid-gray border-t-3 border-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity">
              <img src="/logo.svg" alt="Antek Automation Logo" className="w-12 h-12" />
              <span className="font-black text-lg md:text-xl uppercase text-off-white">
                Antek Automation
              </span>
            </a>
            <p className="text-off-white text-sm md:text-base leading-normal">
              AI automation solutions for UK service businesses. Save time, increase revenue, and delight customers.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase text-off-white text-sm md:text-base mb-6 tracking-tight-lg">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services/ai-chatbots" className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200">
                  AI Chatbots
                </a>
              </li>
              <li>
                <a href="/services/ai-voice-assistants" className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200">
                  Voice AI
                </a>
              </li>
              <li>
                <a href="/services/workflow-automation" className="text-gray-300 text-sm md:text-base hover:text-terracotta hover:underline transition-colors duration-200">
                  Automation
                </a>
              </li>
            </ul>
          </div>

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

          <div>
            <h4 className="font-bold uppercase text-off-white text-sm md:text-base mb-6 tracking-tight-lg">Legal</h4>
            <ul className="space-y-3">
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
            © {new Date().getFullYear()} Antek Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
