"use client";

import { useState, useMemo } from "react";
import { Calculator, Droplets, Wrench, Paintbrush, ThermometerSun, Check, Info, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Pricing configuration - Business rules
const FORMULAS = [
  {
    id: "lavage",
    name: "Lavage Simple",
    description: "Nettoyage haute pression professionnel",
    pricePerSqm: 15,
    icon: Droplets,
    color: "border-blue-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
    features: ["Nettoyage haute pression", "Traitement anti-mousse", "Résultat immédiat"],
  },
  {
    id: "fissures",
    name: "Reprise Fissures + Lavage",
    description: "Traitement des fissures + nettoyage complet",
    pricePerSqm: 35,
    icon: Wrench,
    color: "border-amber-500",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500",
    features: ["Diagnostic fissures", "Rebouchage pro", "Nettoyage inclus"],
  },
  {
    id: "ravalement",
    name: "Ravalement Complet",
    description: "Rénovation avec peinture ou enduit",
    pricePerSqm: 55,
    icon: Paintbrush,
    color: "border-burgundy",
    bgColor: "bg-burgundy/10",
    iconColor: "text-burgundy",
    popular: true,
    features: ["Préparation support", "Peinture/Enduit", "Finition premium"],
  },
  {
    id: "ite",
    name: "ITE + Ravalement",
    description: "Isolation thermique + ravalement premium",
    pricePerSqm: 105,
    icon: ThermometerSun,
    color: "border-emerald-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-500",
    features: ["Isolation optimale", "Économies énergie", "Valorisation du bien"],
  },
];

export default function SimulateurPage() {
  const [surface, setSurface] = useState<number>(100);
  const [selectedFormula, setSelectedFormula] = useState<string>("ravalement");

  // Calculate estimated price
  const estimatedPrice = useMemo(() => {
    const formula = FORMULAS.find((f) => f.id === selectedFormula);
    if (!formula || !surface || surface <= 0) return 0;
    return formula.pricePerSqm * surface;
  }, [surface, selectedFormula]);

  const selectedFormulaData = FORMULAS.find((f) => f.id === selectedFormula);

  const handleValidation = () => {
    const formula = FORMULAS.find((f) => f.id === selectedFormula);
    const devisData = {
      surface: surface,
      formule: formula?.name,
      prixUnitaire: formula?.pricePerSqm,
      prixTotal: estimatedPrice,
      date: new Date().toISOString(),
    };
    
    console.log("📋 Devis validé:", devisData);
    alert(`✅ Devis enregistré !\n\nFormule: ${formula?.name}\nSurface: ${surface} m²\nPrix estimé: ${estimatedPrice.toLocaleString('fr-FR')} €\n\nUn conseiller vous contactera très prochainement.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Header Section */}
      <section className="bg-charcoal-dark py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy/20 border border-burgundy/30 mb-6">
              <Calculator className="h-4 w-4 text-burgundy" />
              <span className="text-burgundy text-sm font-medium">Simulation instantanée</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Simulateur de <span className="text-burgundy">Devis</span>
            </h1>
            <p className="text-lg text-gray-300">
              Estimez le coût de votre projet de rénovation en quelques clics.
              Prix indicatif, devis définitif après visite technique.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 lg:py-20 -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Input Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Surface Input */}
                <Card className="border-2 border-border shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-charcoal flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-charcoal text-white flex items-center justify-center text-sm font-bold">1</span>
                      Surface à traiter
                    </CardTitle>
                    <CardDescription>
                      Entrez la surface approximative de votre façade en mètres carrés
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <Label htmlFor="surface" className="sr-only">Surface en m²</Label>
                        <div className="relative">
                          <Input
                            id="surface"
                            type="number"
                            min="1"
                            max="10000"
                            value={surface}
                            onChange={(e) => setSurface(Math.max(0, parseInt(e.target.value) || 0))}
                            className="text-2xl font-bold h-16 pr-16 border-2 focus:border-burgundy"
                            placeholder="100"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                            m²
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSurface(50)}
                          className={surface === 50 ? "border-burgundy bg-burgundy/10" : ""}
                        >
                          50m²
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSurface(100)}
                          className={surface === 100 ? "border-burgundy bg-burgundy/10" : ""}
                        >
                          100m²
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSurface(200)}
                          className={surface === 200 ? "border-burgundy bg-burgundy/10" : ""}
                        >
                          200m²
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      Astuce : Mesurez la hauteur × largeur de chaque mur visible
                    </p>
                  </CardContent>
                </Card>

                {/* Formula Selection */}
                <Card className="border-2 border-border shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-charcoal flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-charcoal text-white flex items-center justify-center text-sm font-bold">2</span>
                      Choisissez votre formule
                    </CardTitle>
                    <CardDescription>
                      Sélectionnez le type de prestation souhaité
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {FORMULAS.map((formula) => (
                        <button
                          key={formula.id}
                          onClick={() => setSelectedFormula(formula.id)}
                          className={`relative text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                            selectedFormula === formula.id
                              ? `${formula.color} ${formula.bgColor} shadow-md`
                              : "border-border hover:border-muted-foreground/50 bg-white"
                          }`}
                        >
                          {/* Popular Badge */}
                          {formula.popular && (
                            <span className="absolute -top-2 -right-2 bg-burgundy text-white text-xs font-bold px-2 py-0.5 rounded-full">
                              ★ POPULAIRE
                            </span>
                          )}

                          {/* Selection Indicator */}
                          {selectedFormula === formula.id && (
                            <div className={`absolute top-3 right-3 h-6 w-6 rounded-full ${formula.iconColor.replace('text-', 'bg-')} flex items-center justify-center`}>
                              <Check className="h-4 w-4 text-white" />
                            </div>
                          )}

                          <div className="flex items-start gap-3">
                            <div className={`h-12 w-12 rounded-lg ${formula.bgColor} flex items-center justify-center flex-shrink-0`}>
                              <formula.icon className={`h-6 w-6 ${formula.iconColor}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-charcoal text-sm mb-1">{formula.name}</h3>
                              <p className="text-xs text-muted-foreground mb-2">{formula.description}</p>
                              <p className="text-lg font-bold text-charcoal">
                                {formula.pricePerSqm}€<span className="text-sm font-normal text-muted-foreground"> / m²</span>
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Price Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="border-2 border-burgundy shadow-xl bg-gradient-to-br from-white to-burgundy/5">
                    <CardHeader className="bg-charcoal-dark rounded-t-lg">
                      <CardTitle className="font-serif text-xl text-white text-center">
                        Votre Estimation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      {/* Selected Formula Summary */}
                      {selectedFormulaData && (
                        <div className="mb-6 pb-6 border-b border-border">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`h-10 w-10 rounded-lg ${selectedFormulaData.bgColor} flex items-center justify-center`}>
                              <selectedFormulaData.icon className={`h-5 w-5 ${selectedFormulaData.iconColor}`} />
                            </div>
                            <div>
                              <p className="font-semibold text-charcoal">{selectedFormulaData.name}</p>
                              <p className="text-sm text-muted-foreground">{selectedFormulaData.pricePerSqm}€ / m²</p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {selectedFormulaData.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Check className="h-4 w-4 text-burgundy" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Calculation Breakdown */}
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Surface</span>
                          <span className="font-medium text-charcoal">{surface} m²</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Prix unitaire</span>
                          <span className="font-medium text-charcoal">{selectedFormulaData?.pricePerSqm || 0}€ / m²</span>
                        </div>
                        <div className="h-px bg-border my-4"></div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-muted-foreground">Total estimé</span>
                          <div className="text-right">
                            <p className="text-3xl font-bold text-burgundy">
                              {estimatedPrice.toLocaleString('fr-FR')} €
                            </p>
                            <p className="text-xs text-muted-foreground">TTC</p>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button 
                        onClick={handleValidation}
                        className="w-full bg-burgundy hover:bg-burgundy-light text-white font-semibold h-12 text-base"
                        disabled={!surface || surface <= 0}
                      >
                        Valider ce devis
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>

                      <p className="text-xs text-center text-muted-foreground mt-4">
                        * Prix indicatif. Devis définitif après visite technique gratuite.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Trust Badge */}
                  <div className="mt-4 p-4 bg-charcoal/5 rounded-xl text-center">
                    <p className="text-sm text-muted-foreground">
                      🔒 Devis gratuit et sans engagement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
