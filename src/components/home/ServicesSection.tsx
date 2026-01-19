"use client";

import Link from "next/link";
import { Droplets, Wrench, Paintbrush, ThermometerSun, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "lavage",
    title: "Lavage Simple",
    description: "Nettoyage haute pression professionnel pour redonner l'éclat d'origine à votre façade.",
    price: "15€",
    unit: "/ m²",
    icon: Droplets,
    iconColor: "text-sky-500",
    iconBg: "bg-sky-50",
    borderColor: "hover:border-sky-400",
    features: [
      "Nettoyage haute pression",
      "Traitement anti-mousse",
      "Résultat immédiat",
    ],
  },
  {
    id: "fissures",
    title: "Reprise Fissures + Lavage",
    description: "Traitement complet des fissures et micro-fissures suivi d'un nettoyage en profondeur.",
    price: "35€",
    unit: "/ m²",
    icon: Wrench,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    borderColor: "hover:border-amber-400",
    features: [
      "Diagnostic des fissures",
      "Rebouchage professionnel",
      "Nettoyage inclus",
    ],
  },
  {
    id: "ravalement",
    title: "Ravalement Complet",
    description: "Rénovation complète avec peinture ou enduit pour une façade comme neuve.",
    price: "55€",
    unit: "/ m²",
    icon: Paintbrush,
    iconColor: "text-burgundy",
    iconBg: "bg-burgundy/10",
    borderColor: "hover:border-burgundy",
    popular: true,
    features: [
      "Préparation du support",
      "Peinture ou enduit au choix",
      "Finition haut de gamme",
    ],
  },
  {
    id: "ite",
    title: "ITE + Ravalement",
    description: "Isolation Thermique par l'Extérieur combinée à un ravalement premium.",
    price: "105€",
    unit: "/ m²",
    icon: ThermometerSun,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    borderColor: "hover:border-emerald-400",
    features: [
      "Isolation thermique optimale",
      "Économies d'énergie",
      "Valorisation du bien",
    ],
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-burgundy/10 text-burgundy text-sm font-semibold mb-6 tracking-wide">
            NOS FORMULES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6 leading-tight">
            4 Formules pour sublimer{" "}
            <span className="text-burgundy">votre Façade</span>
          </h2>
          <p className="text-lg text-charcoal-light leading-relaxed">
            Du simple nettoyage à la rénovation thermique complète, 
            choisissez la formule adaptée à vos besoins et votre budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`group relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 card-hover ${
                service.popular 
                  ? "border-burgundy shadow-xl shadow-burgundy/10" 
                  : `border-gray-100 ${service.borderColor}`
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-burgundy text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  POPULAIRE
                </div>
              )}

              {/* Icon */}
              <div className={`h-16 w-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-8 w-8 ${service.iconColor}`} />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-burgundy transition-colors">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <span className="text-4xl font-bold text-charcoal">{service.price}</span>
                <span className="text-charcoal-light text-sm ml-1">{service.unit}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-burgundy" />
                    </div>
                    <span className="text-charcoal-light text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                asChild 
                className={`w-full font-semibold rounded-xl py-6 transition-all duration-300 ${
                  service.popular 
                    ? "bg-burgundy hover:bg-burgundy-light text-white shadow-lg shadow-burgundy/20 hover:shadow-xl hover:shadow-burgundy/30" 
                    : "bg-charcoal hover:bg-charcoal-light text-white"
                }`}
              >
                <Link href="/simulateur" className="flex items-center justify-center gap-2">
                  Calculer mon devis
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-2xl max-w-2xl mx-auto">
          <p className="text-charcoal font-medium mb-4">
            Besoin d'un conseil personnalisé ?
          </p>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white font-semibold rounded-full px-8"
          >
            <Link href="/simulateur">
              Simuler mon projet complet
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
