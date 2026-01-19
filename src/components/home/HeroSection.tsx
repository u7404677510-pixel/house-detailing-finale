"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-dark via-charcoal to-charcoal-dark">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        
        {/* Burgundy accent glow */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-burgundy/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-burgundy/10 rounded-full blur-[120px]" />
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start pt-8">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
              <Sparkles className="h-4 w-4 text-burgundy-light" />
              <span className="text-white/90 text-sm font-medium tracking-wide">Excellence & Finition Premium</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 animate-fade-in-up stagger-1">
              Le{" "}
              <span className="relative inline-block">
                <span className="text-burgundy-light">Detailing</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 100 2 150 4C180 5 195 6 198 6" stroke="#B92240" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              <br />
              de votre Pavillon
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up stagger-2">
              Comme pour une voiture de prestige, votre maison mérite un soin extrême. 
              <span className="text-white font-medium"> Rénovation de façade haut de gamme</span> en Île-de-France.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up stagger-3 relative z-20">
              <Button 
                asChild 
                size="lg" 
                className="bg-burgundy hover:bg-burgundy-light text-white font-semibold text-base px-8 py-7 rounded-full shadow-xl shadow-burgundy/30 transition-all duration-300 hover:shadow-2xl hover:shadow-burgundy/40 hover:scale-[1.02] btn-shine"
              >
                <Link href="/simulateur" className="flex items-center gap-3">
                  Obtenir mon Devis Gratuit
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 font-semibold text-base px-8 py-7 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <Link href="/parrainage">
                  🎁 Parrainage · Gagnez 100€
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 animate-fade-in-up stagger-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <Shield className="h-6 w-6 text-burgundy-light" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">Garantie</p>
                  <p className="text-white/60 text-xs">Décennale</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <Award className="h-6 w-6 text-burgundy-light" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">Artisan</p>
                  <p className="text-white/60 text-xs">Qualifié</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element - Image moved higher */}
          <div className="hidden lg:block animate-fade-in-up stagger-2 order-1 lg:order-2">
            <div className="relative -mt-4">
              {/* Main image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/hero-maison.jpg"
                  alt="Pavillon rénové avec façade propre"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/40 via-transparent to-transparent" />
              </div>

              {/* Rating Badge */}
              <div className="absolute -top-4 -right-4 bg-burgundy rounded-2xl px-5 py-3 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300 text-lg">★</span>
                  <span className="text-white font-bold">4.9/5</span>
                </div>
                <p className="text-white/80 text-xs mt-0.5">Avis clients</p>
              </div>

              {/* Location Badge */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
                <p className="text-white text-sm font-semibold">Île-de-France</p>
                <p className="text-white/60 text-xs">8 départements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 100L48 95C96 90 192 80 288 75C384 70 480 70 576 72.5C672 75 768 80 864 82.5C960 85 1056 85 1152 82.5C1248 80 1344 75 1392 72.5L1440 70V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
