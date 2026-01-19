"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PolitiqueConfidentialitePage() {
  return (
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
          Politique de Confidentialité
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600">
              La société MSB (ci-après &quot;nous&quot;, &quot;notre&quot; ou &quot;la Société&quot;) accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité a pour objectif de vous informer sur la manière dont nous collectons, utilisons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </section>

          {/* Responsable du traitement */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              2. Responsable du traitement
            </h2>
            <div className="text-gray-600 space-y-2">
              <p>Le responsable du traitement des données est :</p>
              <ul className="list-none space-y-1 mt-4">
                <li><strong>MSB - SARL</strong></li>
                <li>35 rue des Cailloux, 92110 Clichy</li>
                <li>Email : contact@house-detailing-msb.fr</li>
                <li>Téléphone : 06 01 33 20 09</li>
              </ul>
            </div>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              3. Données collectées
            </h2>
            <p className="text-gray-600 mb-4">
              Nous collectons les données personnelles suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Données d&apos;identification :</strong> nom, prénom</li>
              <li><strong>Données de contact :</strong> adresse email, numéro de téléphone, adresse postale</li>
              <li><strong>Données relatives au projet :</strong> surface à rénover, type de prestation souhaitée</li>
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées (via cookies)</li>
            </ul>
          </section>

          {/* Finalités */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              4. Finalités du traitement
            </h2>
            <p className="text-gray-600 mb-4">
              Vos données personnelles sont collectées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Traitement de vos demandes de devis</li>
              <li>Gestion de la relation client</li>
              <li>Exécution des prestations de services</li>
              <li>Gestion du programme de parrainage</li>
              <li>Envoi d&apos;informations commerciales (avec votre consentement)</li>
              <li>Amélioration de nos services et de notre site web</li>
              <li>Respect de nos obligations légales et réglementaires</li>
            </ul>
          </section>

          {/* Base légale */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              5. Base légale du traitement
            </h2>
            <p className="text-gray-600 mb-4">
              Le traitement de vos données repose sur les bases légales suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>L&apos;exécution d&apos;un contrat :</strong> pour le traitement des devis et la réalisation des prestations</li>
              <li><strong>Votre consentement :</strong> pour l&apos;envoi de communications commerciales</li>
              <li><strong>L&apos;intérêt légitime :</strong> pour l&apos;amélioration de nos services</li>
              <li><strong>Les obligations légales :</strong> pour la conservation des documents comptables</li>
            </ul>
          </section>

          {/* Durée de conservation */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              6. Durée de conservation
            </h2>
            <p className="text-gray-600 mb-4">
              Vos données personnelles sont conservées pendant les durées suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Données prospects :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Données clients :</strong> 5 ans après la fin de la relation commerciale</li>
              <li><strong>Documents comptables :</strong> 10 ans (obligation légale)</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
            </ul>
          </section>

          {/* Destinataires */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              7. Destinataires des données
            </h2>
            <p className="text-gray-600 mb-4">
              Vos données peuvent être transmises aux destinataires suivants :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Notre personnel habilité (direction, service commercial)</li>
              <li>Notre hébergeur web (Vercel)</li>
              <li>Notre expert-comptable (pour les obligations comptables)</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Vos données ne sont jamais vendues à des tiers à des fins commerciales.
            </p>
          </section>

          {/* Droits */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              8. Vos droits
            </h2>
            <p className="text-gray-600 mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@house-detailing-msb.fr" className="text-burgundy hover:underline">contact@house-detailing-msb.fr</a>
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              9. Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              Notre site utilise des cookies pour :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Cookies techniques :</strong> nécessaires au fonctionnement du site</li>
              <li><strong>Cookies analytiques :</strong> pour mesurer l&apos;audience du site</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
            </p>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              10. Sécurité des données
            </h2>
            <p className="text-gray-600">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction. Notre site utilise le protocole HTTPS pour sécuriser les échanges de données.
            </p>
          </section>

          {/* Réclamation */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              11. Réclamation
            </h2>
            <p className="text-gray-600">
              Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit d&apos;introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) :
            </p>
            <ul className="list-none space-y-1 mt-4 text-gray-600">
              <li>CNIL - 3 Place de Fontenoy, TSA 80715</li>
              <li>75334 Paris Cedex 07</li>
              <li>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-burgundy hover:underline">www.cnil.fr</a></li>
            </ul>
          </section>

          {/* Modification */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              12. Modification de la politique
            </h2>
            <p className="text-gray-600">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour.
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
  );
}
