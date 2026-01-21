"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";

export default function MentionsLegalesPage() {
  return (
    <MainLayout>
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy-light transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>

        <h1 className="text-4xl font-serif font-bold text-charcoal mb-8">
          Mentions Légales
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Éditeur du site */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              1. Éditeur du site
            </h2>
            <div className="text-gray-600 space-y-2">
              <p>Le site <strong>house-detailing-msb.fr</strong> est édité par :</p>
              <ul className="list-none space-y-1 mt-4">
                <li><strong>Raison sociale :</strong> MSB</li>
                <li><strong>Forme juridique :</strong> SARL</li>
                <li><strong>Capital social :</strong> 1 000 €</li>
                <li><strong>Siège social :</strong> 35 rue des Cailloux, 92110 Clichy</li>
                <li><strong>SIRET :</strong> 917 721 581 00010</li>
                <li><strong>RCS :</strong> Nanterre</li>
                <li><strong>Numéro de TVA intracommunautaire :</strong> FR78917721581</li>
                <li><strong>Téléphone :</strong> 06 01 33 20 09</li>
                <li><strong>Email :</strong> contact@house-detailing-msb.fr</li>
              </ul>
            </div>
          </section>

          {/* Directeur de la publication */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              2. Directeur de la publication
            </h2>
            <p className="text-gray-600">
              Le directeur de la publication est <strong>Mme Hammouti</strong>, en qualité de gérante de la société MSB.
            </p>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              3. Hébergeur du site
            </h2>
            <div className="text-gray-600 space-y-2">
              <p>Le site est hébergé par :</p>
              <ul className="list-none space-y-1 mt-4">
                <li><strong>Vercel Inc.</strong></li>
                <li>340 S Lemon Ave #4133</li>
                <li>Walnut, CA 91789, États-Unis</li>
                <li>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-burgundy hover:underline">vercel.com</a></li>
              </ul>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              4. Propriété intellectuelle
            </h2>
            <p className="text-gray-600">
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de la société MSB, à l&apos;exception des marques, logos ou contenus appartenant à d&apos;autres sociétés partenaires ou auteurs.
            </p>
            <p className="text-gray-600 mt-4">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de MSB.
            </p>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              5. Protection des données personnelles
            </h2>
            <p className="text-gray-600">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
            </p>
            <p className="text-gray-600 mt-4">
              Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse email : <a href="mailto:contact@house-detailing-msb.fr" className="text-burgundy hover:underline">contact@house-detailing-msb.fr</a>
            </p>
            <p className="text-gray-600 mt-4">
              Pour plus d&apos;informations, consultez notre <Link href="/politique-confidentialite" className="text-burgundy hover:underline">Politique de Confidentialité</Link>.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              6. Cookies
            </h2>
            <p className="text-gray-600">
              Le site peut utiliser des cookies pour améliorer l&apos;expérience utilisateur et réaliser des statistiques de visites. Vous pouvez configurer votre navigateur pour refuser les cookies.
            </p>
          </section>

          {/* Limitation de responsabilité */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              7. Limitation de responsabilité
            </h2>
            <p className="text-gray-600">
              MSB s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, MSB ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p className="text-gray-600 mt-4">
              En conséquence, MSB décline toute responsabilité pour les éventuelles imprécisions, inexactitudes ou omissions portant sur des informations disponibles sur ce site.
            </p>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              8. Droit applicable
            </h2>
            <p className="text-gray-600">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          {/* Date de mise à jour */}
          <section className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : Janvier 2026
            </p>
          </section>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}
