import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/", label: "Accueil" },
    { href: "/simulateur", label: "Simulateur de Devis" },
    { href: "/parrainage", label: "Programme Parrainage" },
  ],
  services: [
    { href: "/simulateur", label: "Lavage de Façade" },
    { href: "/simulateur", label: "Reprise Fissures" },
    { href: "/simulateur", label: "Ravalement Complet" },
    { href: "/simulateur", label: "Isolation (ITE)" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions Légales" },
    { href: "/politique-confidentialite", label: "Politique de Confidentialité" },
    { href: "/cgv", label: "CGV" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              {/* House Icon Logo */}
              <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-105 transition-transform">
                <path d="M15 75 L15 35 L45 10 L45 75 Z" fill="#6B7280"/>
                <path d="M55 10 L85 45 L55 45 Z" fill="#B92240"/>
                <path d="M55 55 L85 55 L85 90 Z" fill="#B92240"/>
                <rect x="55" y="75" width="12" height="12" fill="#B92240"/>
              </svg>
              {/* Brand Name */}
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline">
                  <span className="font-script text-2xl text-burgundy-light">H</span>
                  <span className="font-display text-base font-medium tracking-wide text-white -ml-0.5">ouse</span>
                  <span className="font-script text-2xl text-burgundy-light ml-1">D</span>
                  <span className="font-display text-base font-medium tracking-wide text-white -ml-0.5">etailing</span>
                </div>
                <span className="text-xs font-bold tracking-[0.2em] text-burgundy-light uppercase mt-0.5">
                  by MSB
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Experts en rénovation de façade en Île-de-France. 
              Nous apportons le soin et la précision du detailing automobile 
              à la rénovation de votre pavillon.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-11 w-11 rounded-xl bg-charcoal hover:bg-burgundy transition-all duration-300 flex items-center justify-center group hover:scale-105"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="h-11 w-11 rounded-xl bg-charcoal hover:bg-burgundy transition-all duration-300 flex items-center justify-center group hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="h-11 w-11 rounded-xl bg-charcoal hover:bg-burgundy transition-all duration-300 flex items-center justify-center group hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-white">Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-burgundy-light transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-white">Nos Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-burgundy-light transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-charcoal flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-burgundy-light" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Paris & Île-de-France</p>
                  <p className="text-gray-500 text-xs mt-0.5">75, 77, 78, 91, 92, 93, 94, 95</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-charcoal flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-burgundy-light" />
                </div>
                <a href="tel:+33601332009" className="text-white hover:text-burgundy-light transition-colors text-sm font-medium">
                  06 01 33 20 09
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-charcoal flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-burgundy-light" />
                </div>
                <a href="mailto:contact@house-detailing-msb.fr" className="text-white hover:text-burgundy-light transition-colors text-sm font-medium">
                  contact@house-detailing-msb.fr
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-charcoal flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-burgundy-light" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Lun - Sam</p>
                  <p className="text-gray-500 text-xs mt-0.5">8h - 19h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} House Detailing by MSB. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-500 hover:text-burgundy-light transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
