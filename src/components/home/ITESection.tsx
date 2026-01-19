"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Thermometer, Euro, Home, ArrowRight, Check, Zap } from "lucide-react";

const benefits = [
  {
    icon: Thermometer,
    title: "Confort Thermique",
    description: "Fini les murs froids en hiver et la chaleur étouffante en été",
    color: "text-sky-500",
    bg: "bg-sky-50",
  },
  {
    icon: Euro,
    title: "Économies d'Énergie",
    description: "Réduisez vos factures de chauffage jusqu'à 30%",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Home,
    title: "Valorisation du Bien",
    description: "Augmentez la valeur de votre patrimoine immobilier",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
];

const features = [
  "Pose d'isolant haute performance",
  "Finition enduit ou crépi au choix",
  "Travail soigné et méticuleux",
  "Garantie décennale",
];

export function ITESection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-burgundy text-white text-sm font-semibold mb-6 shadow-lg shadow-burgundy/30">
            <Zap className="h-4 w-4" />
            NOTRE SPÉCIALITÉ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6 leading-tight">
            Isolation Thermique par l'Extérieur
          </h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
            Transformez votre maison avec l'ITE : isolation performante et ravalement esthétique en une seule intervention
          </p>
        </div>

        {/* Large Image */}
        <div className="relative mb-16 max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/ite-avant-apres.jpg"
              alt="Isolation Thermique Extérieure - Avant, Pendant, Après"
              width={1400}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
            {/* Gradient overlay for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
          </div>
          
          {/* Floating Price Badge */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-burgundy text-white px-8 py-5 rounded-2xl shadow-2xl shadow-burgundy/40 animate-float">
            <p className="text-white/80 text-sm font-medium mb-1">À partir de</p>
            <p className="text-3xl font-bold">105€<span className="text-lg font-normal">/m²</span></p>
          </div>
          
          {/* Process indicator */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex gap-2">
            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
              <span className="text-charcoal font-bold text-sm">AVANT</span>
            </div>
            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
              <span className="text-charcoal font-bold text-sm">PENDANT</span>
            </div>
            <div className="bg-burgundy px-4 py-2 rounded-lg shadow-lg">
              <span className="text-white font-bold text-sm">APRÈS</span>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center card-hover"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${benefit.bg} flex items-center justify-center`}>
                <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-3">
                {benefit.title}
              </h3>
              <p className="text-charcoal-light leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Features & CTA Card */}
        <div className="bg-charcoal rounded-3xl p-10 md:p-12 max-w-4xl mx-auto shadow-2xl">
          <h4 className="text-white text-2xl font-serif font-bold mb-8 text-center">
            Ce que nous proposons
          </h4>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-burgundy flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-white/90 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-burgundy hover:bg-burgundy-light text-white font-semibold rounded-full px-8 py-7 shadow-lg shadow-burgundy/30 btn-shine"
            >
              <Link href="/simulateur" className="flex items-center gap-2">
                Estimer mon projet ITE
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 font-medium rounded-full px-8 py-7"
            >
              <Link href="/parrainage">
                Programme Parrainage · 100€
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
