"use client";

import { useState } from "react";
import { Users, Gift, User, MapPin, Phone, Mail, CheckCircle2, ArrowRight, Info, Sparkles, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { MainLayout } from "@/components/layout/MainLayout";

interface FormData {
  // Parrain (Referrer) info
  parrainNom: string;
  parrainPrenom: string;
  parrainEmail: string;
  parrainTel: string;
  // Filleul (Referred) info
  filleulNom: string;
  filleulAdresse: string;
  filleulTel: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ParrainagePage() {
  return (
    <MainLayout>
      <ParrainageContent />
    </MainLayout>
  );
}

function ParrainageContent() {
  const [formData, setFormData] = useState<FormData>({
    parrainNom: "",
    parrainPrenom: "",
    parrainEmail: "",
    parrainTel: "",
    filleulNom: "",
    filleulAdresse: "",
    filleulTel: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Parrain validation
    if (!formData.parrainNom.trim()) {
      newErrors.parrainNom = "Le nom est requis";
    }
    if (!formData.parrainPrenom.trim()) {
      newErrors.parrainPrenom = "Le prénom est requis";
    }
    if (!formData.parrainEmail.trim() && !formData.parrainTel.trim()) {
      newErrors.parrainEmail = "Email ou téléphone requis";
      newErrors.parrainTel = "Email ou téléphone requis";
    }
    if (formData.parrainEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parrainEmail)) {
      newErrors.parrainEmail = "Email invalide";
    }
    if (formData.parrainTel && !/^[0-9+\s]{10,}$/.test(formData.parrainTel.replace(/\s/g, ""))) {
      newErrors.parrainTel = "Numéro invalide";
    }

    // Filleul validation
    if (!formData.filleulNom.trim()) {
      newErrors.filleulNom = "Le nom du propriétaire est requis";
    }
    if (!formData.filleulAdresse.trim()) {
      newErrors.filleulAdresse = "L'adresse du pavillon est requise";
    }
    if (!formData.filleulTel.trim()) {
      newErrors.filleulTel = "Le téléphone est requis";
    }
    if (formData.filleulTel && !/^[0-9+\s]{10,}$/.test(formData.filleulTel.replace(/\s/g, ""))) {
      newErrors.filleulTel = "Numéro invalide";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      try {
        // Save to Firestore
        await addDoc(collection(db, "leads_parrainage"), {
          // Parrain info
          parrainNom: formData.parrainNom,
          parrainPrenom: formData.parrainPrenom,
          parrainEmail: formData.parrainEmail,
          parrainTel: formData.parrainTel,
          // Filleul info
          filleulNom: formData.filleulNom,
          filleulAdresse: formData.filleulAdresse,
          filleulTel: formData.filleulTel,
          // Metadata
          status: "nouveau",
          createdAt: serverTimestamp(),
        });
        
        console.log("✅ Lead parrainage sauvegardé dans Firebase");
        setIsSubmitted(true);
      } catch (error) {
        console.error("❌ Erreur Firebase:", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cream to-white flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-lg mx-auto border-2 border-burgundy shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="h-20 w-20 rounded-full bg-emerald-100 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Merci pour votre recommandation !
              </h2>
              <p className="text-muted-foreground mb-6">
                Nous avons bien enregistré les informations. Si le chantier est signé, 
                vous recevrez votre prime de <span className="font-bold text-burgundy">100€</span> !
              </p>
              <Button 
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    parrainNom: "",
                    parrainPrenom: "",
                    parrainEmail: "",
                    parrainTel: "",
                    filleulNom: "",
                    filleulAdresse: "",
                    filleulTel: "",
                  });
                }}
                className="bg-charcoal hover:bg-charcoal-light text-white"
              >
                Parrainer quelqu&apos;un d&apos;autre
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Header Section */}
      <section className="bg-charcoal-dark py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy/20 border border-burgundy/30 mb-6">
              <Gift className="h-4 w-4 text-burgundy" />
              <span className="text-burgundy text-sm font-medium">Gagnez 100€ par recommandation</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Devenez <span className="text-burgundy">Apporteur d&apos;Affaires</span>
            </h1>
            <p className="text-lg text-gray-300">
              Vous connaissez un propriétaire qui souhaite rénover sa façade ?
              Recommandez-nous et gagnez une prime à la signature !
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20 -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - How it works */}
              <div className="lg:col-span-1">
                <Card className="border-2 border-burgundy/30 shadow-lg sticky top-24">
                  <CardHeader className="bg-gradient-to-br from-burgundy/10 to-burgundy/5">
                    <CardTitle className="font-serif text-xl text-charcoal flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-burgundy" />
                      Comment ça marche ?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ol className="space-y-6">
                      <li className="flex gap-4">
                        <span className="h-8 w-8 rounded-full bg-charcoal text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                          1
                        </span>
                        <div>
                          <p className="font-semibold text-charcoal">Remplissez le formulaire</p>
                          <p className="text-sm text-muted-foreground">Vos coordonnées + celles du propriétaire</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="h-8 w-8 rounded-full bg-charcoal text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                          2
                        </span>
                        <div>
                          <p className="font-semibold text-charcoal">Nous le contactons</p>
                          <p className="text-sm text-muted-foreground">Un conseiller prend contact sous 48h</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="h-8 w-8 rounded-full bg-charcoal text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                          3
                        </span>
                        <div>
                          <p className="font-semibold text-charcoal">Chantier signé = Prime</p>
                          <p className="text-sm text-muted-foreground">Vous recevez 100€ dès la signature</p>
                        </div>
                      </li>
                    </ol>

                    <div className="mt-8 p-4 bg-burgundy/10 rounded-xl border border-burgundy/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Gift className="h-6 w-6 text-burgundy" />
                        <span className="text-2xl font-bold text-burgundy">100€</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        par chantier signé. Pas de limite de parrainages !
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Section 1: Parrain Info */}
                  <Card className="border-2 border-border shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-serif text-xl text-charcoal flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-charcoal text-white flex items-center justify-center">
                          <User className="h-4 w-4" />
                        </div>
                        Vos informations (Parrain)
                      </CardTitle>
                      <CardDescription>
                        Pour vous recontacter et vous verser votre prime
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="parrainNom">Nom *</Label>
                        <Input
                          id="parrainNom"
                          name="parrainNom"
                          value={formData.parrainNom}
                          onChange={handleChange}
                          placeholder="Dupont"
                          className={errors.parrainNom ? "border-red-500" : ""}
                        />
                        {errors.parrainNom && (
                          <p className="text-sm text-red-500">{errors.parrainNom}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parrainPrenom">Prénom *</Label>
                        <Input
                          id="parrainPrenom"
                          name="parrainPrenom"
                          value={formData.parrainPrenom}
                          onChange={handleChange}
                          placeholder="Jean"
                          className={errors.parrainPrenom ? "border-red-500" : ""}
                        />
                        {errors.parrainPrenom && (
                          <p className="text-sm text-red-500">{errors.parrainPrenom}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parrainEmail" className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          Email
                        </Label>
                        <Input
                          id="parrainEmail"
                          name="parrainEmail"
                          type="email"
                          value={formData.parrainEmail}
                          onChange={handleChange}
                          placeholder="jean.dupont@email.com"
                          className={errors.parrainEmail ? "border-red-500" : ""}
                        />
                        {errors.parrainEmail && (
                          <p className="text-sm text-red-500">{errors.parrainEmail}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parrainTel" className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          Téléphone
                        </Label>
                        <Input
                          id="parrainTel"
                          name="parrainTel"
                          type="tel"
                          value={formData.parrainTel}
                          onChange={handleChange}
                          placeholder="06 00 00 00 00"
                          className={errors.parrainTel ? "border-red-500" : ""}
                        />
                        {errors.parrainTel && (
                          <p className="text-sm text-red-500">{errors.parrainTel}</p>
                        )}
                      </div>
                      <div className="sm:col-span-2">
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Info className="h-3 w-3" />
                          Au moins un moyen de contact (email ou téléphone) est requis
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Section 2: Filleul Info */}
                  <Card className="border-2 border-border shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-serif text-xl text-charcoal flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-burgundy text-white flex items-center justify-center">
                          <Users className="h-4 w-4" />
                        </div>
                        Informations du propriétaire recommandé
                      </CardTitle>
                      <CardDescription>
                        Les coordonnées de la personne que vous souhaitez recommander
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="filleulNom">Nom du propriétaire *</Label>
                        <Input
                          id="filleulNom"
                          name="filleulNom"
                          value={formData.filleulNom}
                          onChange={handleChange}
                          placeholder="Nom du propriétaire"
                          className={errors.filleulNom ? "border-red-500" : ""}
                        />
                        {errors.filleulNom && (
                          <p className="text-sm text-red-500">{errors.filleulNom}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="filleulAdresse" className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          Adresse du pavillon *
                        </Label>
                        <Input
                          id="filleulAdresse"
                          name="filleulAdresse"
                          value={formData.filleulAdresse}
                          onChange={handleChange}
                          placeholder="123 Rue de la Paix, 75001 Paris"
                          className={errors.filleulAdresse ? "border-red-500" : ""}
                        />
                        {errors.filleulAdresse && (
                          <p className="text-sm text-red-500">{errors.filleulAdresse}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="filleulTel" className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          Téléphone du propriétaire *
                        </Label>
                        <Input
                          id="filleulTel"
                          name="filleulTel"
                          type="tel"
                          value={formData.filleulTel}
                          onChange={handleChange}
                          placeholder="06 00 00 00 00"
                          className={errors.filleulTel ? "border-red-500" : ""}
                        />
                        {errors.filleulTel && (
                          <p className="text-sm text-red-500">{errors.filleulTel}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-burgundy hover:bg-burgundy-light text-white font-semibold h-14 text-lg shadow-lg shadow-burgundy/25"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer ma recommandation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    En soumettant ce formulaire, vous acceptez nos conditions générales 
                    et notre politique de confidentialité.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
