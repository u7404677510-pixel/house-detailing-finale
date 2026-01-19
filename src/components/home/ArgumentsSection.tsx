"use client";

import { Gem, Target, ShieldCheck, Leaf, Users, Clock } from "lucide-react";

const arguments_data = [
  {
    icon: Gem,
    title: "Finition Premium",
    description: "Comme dans le detailing automobile, chaque détail compte. Nous appliquons les mêmes standards d'excellence.",
    color: "text-burgundy",
    bgColor: "bg-burgundy/10",
  },
  {
    icon: Target,
    title: "Expertise Certifiée",
    description: "Artisans qualifiés avec plus de 15 ans d'expérience en rénovation de façade en Île-de-France.",
    color: "text-sky-500",
    bgColor: "bg-sky-50",
  },
  {
    icon: ShieldCheck,
    title: "Garantie Décennale",
    description: "Tous nos travaux sont couverts par notre garantie décennale pour votre tranquillité d'esprit.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Leaf,
    title: "Isolation Performante",
    description: "Nos solutions ITE réduisent vos factures énergétiques jusqu'à 30% tout en valorisant votre bien.",
    color: "text-teal-500",
    bgColor: "bg-teal-50",
  },
  {
    icon: Users,
    title: "Accompagnement Complet",
    description: "De l'étude à la réception des travaux, un interlocuteur unique vous accompagne à chaque étape.",
    color: "text-violet-500",
    bgColor: "bg-violet-50",
  },
  {
    icon: Clock,
    title: "Respect des Délais",
    description: "Planning rigoureux et communication transparente pour des chantiers livrés dans les temps.",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
  },
];

export function ArgumentsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(155, 27, 48, 0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-charcoal text-white text-sm font-semibold mb-6 tracking-wide">
            POURQUOI NOUS ?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6 leading-tight">
            L'excellence du{" "}
            <span className="text-burgundy">Detailing</span>
            <br />pour votre maison
          </h2>
          <p className="text-lg text-charcoal-light leading-relaxed">
            Nous avons emprunté au monde du detailing automobile sa philosophie : 
            rigueur, attention aux détails, et résultats impeccables.
          </p>
        </div>

        {/* Arguments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {arguments_data.map((arg, index) => (
            <div 
              key={arg.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-burgundy/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`h-16 w-16 rounded-2xl ${arg.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <arg.icon className={`h-8 w-8 ${arg.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-burgundy transition-colors">
                {arg.title}
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                {arg.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-charcoal rounded-3xl p-10 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <p className="text-5xl lg:text-6xl font-bold text-burgundy-light mb-3">500+</p>
              <p className="text-white/80 font-medium">Chantiers réalisés</p>
            </div>
            <div className="text-center">
              <p className="text-5xl lg:text-6xl font-bold text-burgundy-light mb-3">15</p>
              <p className="text-white/80 font-medium">Années d'expérience</p>
            </div>
            <div className="text-center">
              <p className="text-5xl lg:text-6xl font-bold text-burgundy-light mb-3">98%</p>
              <p className="text-white/80 font-medium">Clients satisfaits</p>
            </div>
            <div className="text-center">
              <p className="text-5xl lg:text-6xl font-bold text-burgundy-light mb-3">8</p>
              <p className="text-white/80 font-medium">Départements couverts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
