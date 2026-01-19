"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Home, Calculator, Users, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/simulateur", label: "Simulateur Devis", icon: Calculator },
  { href: "/parrainage", label: "Parrainage", icon: Users },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100" 
        : "bg-white/95 backdrop-blur-sm border-b border-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-18 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* House Icon Logo */}
            <div className="relative flex items-center">
              <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-105 transition-transform duration-300">
                <path d="M15 75 L15 35 L45 10 L45 75 Z" fill="#1F2937"/>
                <path d="M55 10 L85 45 L55 45 Z" fill="#9B1B30"/>
                <path d="M55 55 L85 55 L85 90 Z" fill="#9B1B30"/>
                <rect x="55" y="75" width="12" height="12" fill="#9B1B30"/>
              </svg>
            </div>
            {/* Brand Name with Calligraphic Initials */}
            <div className="flex flex-col leading-none">
              <div className="flex items-baseline">
                <span className="font-script text-3xl md:text-4xl text-burgundy">H</span>
                <span className="font-display text-lg md:text-xl font-medium tracking-wide text-charcoal -ml-0.5">ouse</span>
                <span className="font-script text-3xl md:text-4xl text-burgundy ml-1">D</span>
                <span className="font-display text-lg md:text-xl font-medium tracking-wide text-charcoal -ml-0.5">etailing</span>
              </div>
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-burgundy uppercase mt-0.5">
                by MSB
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-charcoal-light hover:text-burgundy transition-colors rounded-lg hover:bg-burgundy/5"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              asChild 
              className="bg-burgundy hover:bg-burgundy-light text-white font-semibold rounded-full px-6 shadow-lg shadow-burgundy/20 hover:shadow-xl hover:shadow-burgundy/30 transition-all duration-300"
            >
              <Link href="/simulateur" className="flex items-center gap-2">
                Devis Gratuit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-charcoal" />
            ) : (
              <Menu className="h-6 w-6 text-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-4 text-base font-medium text-charcoal hover:text-burgundy hover:bg-burgundy/5 rounded-xl transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <link.icon className="h-5 w-5" />
                  </div>
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button 
                  asChild 
                  className="w-full bg-burgundy hover:bg-burgundy-light text-white font-semibold rounded-xl py-6 shadow-lg"
                >
                  <Link href="/simulateur" className="flex items-center justify-center gap-2">
                    Devis Gratuit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
