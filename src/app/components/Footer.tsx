import { Mail, Phone, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 
              className="mb-4"
              style={{ 
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem'
              }}
            >
              BlackFork Hills
            </h3>
            <p className="text-sm opacity-90">
              Your mountain retreat awaits
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 opacity-90">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="hover:opacity-80 transition-opacity"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="hover:opacity-80 transition-opacity"
                >
                  Book Now
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:opacity-80 transition-opacity"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 opacity-90">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="mailto:stay@blackforkhills.com" 
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Mail className="w-4 h-4" />
                  stay@blackforkhills.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+19403123012" 
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Phone className="w-4 h-4" />
                  (940) 312-3012
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 opacity-90">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© {currentYear} BlackFork Hills. All rights reserved.</p>
          <p>Managed by Relay Properties</p>
        </div>
      </div>
    </footer>
  );
}
