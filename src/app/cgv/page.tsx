"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";

export default function CGVPage() {
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
          Conditions Générales de Vente
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Préambule */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Préambule
            </h2>
            <p className="text-gray-600">
              Les présentes Conditions Générales de Vente (ci-après &quot;CGV&quot;) régissent les relations contractuelles entre la société MSB et ses clients (ci-après &quot;le Client&quot;) dans le cadre de prestations de rénovation de façade. Toute commande implique l&apos;acceptation sans réserve des présentes CGV.
            </p>
          </section>

          {/* Article 1 - Société */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Article 1 - Identification de la société
            </h2>
            <div className="text-gray-600 space-y-1">
              <p><strong>MSB - SARL</strong></p>
              <p>Capital social : 1 000 €</p>
              <p>Siège social : 35 rue des Cailloux, 92110 Clichy</p>
              <p>SIRET : 917 721 581 00010</p>
              <p>RCS Nanterre</p>
              <p>TVA Intracommunautaire : FR78917721581</p>
              <p>Téléphone : 06 01 33 20 09</p>
              <p>Email : contact@house-detailing-msb.fr</p>
            </div>
          </section>

          {/* Article 2 - Prestations */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Article 2 - Prestations proposées
            </h2>
            <p className="text-gray-600 mb-4">
              MSB propose les prestations suivantes de rénovation de façade :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Lavage simple :</strong> nettoyage haute pression et traitement anti-mousse</li>
              <li><strong>Reprise fissures + Lavage :</strong> traitement des fissures et micro-fissures avec nettoyage</li>
              <li><strong>Ravalement complet :</strong> préparation du support et application de peinture ou enduit</li>
              <li><strong>ITE + Ravalement :</strong> isolation thermique par l&apos;extérieur combinée à un ravalement</li>
            </ul>
          </section>

          {/* Article 3 - Zone */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Article 3 - Zone d&apos;intervention
            </h2>
            <p className="text-gray-600">
              MSB intervient sur l&apos;ensemble de la région Île-de-France, incluant les départements suivants : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d&apos;Oise (95).
            </p>
          </section>

          {/* Article 4 - Devis */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Article 4 - Devis et commande
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                <strong>4.1 Établissement du devis :</strong> Tout projet fait l&apos;objet d&apos;un devis gratuit établi après visite sur site. Le devis détaille la nature des travaux, les matériaux utilisés, les délais d&apos;exécution et le prix total TTC.
              </p>
              <p>
                <strong>4.2 Validité du devis :</strong> Les devis sont valables pendant une durée de <strong>30 jours</strong> à compter de leur date d&apos;émission.
              </p>
              <p>
                <strong>4.3 Acceptation :</strong> La commande est définitivement conclue à réception du devis signé par le Client portant la mention &quot;Bon pour accord&quot; accompagnée du versement de l&apos;acompte prévu.
              </p>
            </div>
          </section>

          {/* Article 5 - Prix */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Article 5 - Prix et tarifs indicatifs
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Les prix sont exprimés en euros TTC. À titre indicatif, nos tarifs de base sont :
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Lavage simple : à partir de 15 € / m²</li>
                <li>Reprise fissures + Lavage : à partir de 35 € / m²</li>
                <li>Ravalement complet : à partir de 55 € / m²</li>
                <li>ITE + Ravalement : à partir de 105 € / m²</li>
              </ul>
              <p>
                Le prix définitif est déterminé dans le devis personnalisé en fonction des spécificités du chantier (état du support, accessibilité, superficie, finitions choisies, etc.).
              </p>
            </div>
          </section>

          {/* Article 6 - Paiement */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Article 6 - Modalités de paiement
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                <strong>6.1 Acompte :</strong> Un acompte de <strong>30%</strong> du montant total TTC est exigé à la signature du devis pour confirmer la commande.
              </p>
              <p>
                <strong>6.2 Solde :</strong> Le solde est payable à la fin des travaux, après réception et validation du chantier par le Client.
              </p>
              <p>
                <strong>6.3 Moyens de paiement acceptés :</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Virement bancaire</li>
                <li>Chèque</li>
                <li>Espèces (dans la limite légale de 1 000 €)</li>
              </ul>
              <p>
                <strong>6.4 Retard de paiement :</strong> En cas de retard de paiement, des pénalités de retard seront appliquées au taux légal en vigueur, ainsi qu&apos;une indemnité forfaitaire de 40 € pour frais de recouvrement.
              </p>
            </div>
          </section>

          {/* Article 7 - Exécution */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Article 7 - Exécution des travaux
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                <strong>7.1 Délais :</strong> Les délais d&apos;exécution sont mentionnés à titre indicatif dans le devis. Ils peuvent être prolongés en cas d&apos;intempéries ou de circonstances exceptionnelles indépendantes de notre volonté.
              </p>
              <p>
                <strong>7.2 Accès au chantier :</strong> Le Client s&apos;engage à permettre l&apos;accès au chantier dans les conditions prévues et à assurer les branchements nécessaires (eau, électricité).
              </p>
              <p>
                <strong>7.3 Réception des travaux :</strong> À l&apos;achèvement des travaux, une réception contradictoire est effectuée. Le Client dispose d&apos;un délai de 8 jours pour signaler par écrit toute réserve.
              </p>
            </div>
          </section>

          {/* Article 8 - Annulation */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Article 8 - Annulation et rétractation
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                <strong>8.1 Droit de rétractation :</strong> Conformément au Code de la consommation, pour les contrats conclus hors établissement, le Client dispose d&apos;un délai de 14 jours à compter de la signature du devis pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.
              </p>
              <p>
                <strong>8.2 Annulation par le Client :</strong> Toute annulation après le délai de rétractation entraîne la conservation de l&apos;acompte versé à titre de dédommagement, sauf accord contraire.
              </p>
              <p>
                <strong>8.3 Annulation par MSB :</strong> En cas d&apos;impossibilité d&apos;exécuter la prestation, MSB remboursera intégralement l&apos;acompte versé.
              </p>
            </div>
          </section>

          {/* Article 9 - Garanties */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Article 9 - Garanties
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                <strong>9.1 Garantie de parfait achèvement :</strong> MSB garantit la conformité des travaux réalisés avec le devis accepté pendant 1 an à compter de la réception.
              </p>
              <p>
                <strong>9.2 Garantie biennale :</strong> Les équipements dissociables du bâtiment sont garantis pendant 2 ans.
              </p>
              <p>
                <strong>9.3 Responsabilité civile :</strong> MSB dispose d&apos;une assurance responsabilité civile professionnelle couvrant les dommages pouvant survenir lors de l&apos;exécution des travaux.
              </p>
            </div>
          </section>

          {/* Article 10 - Parrainage */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Article 10 - Programme de parrainage
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                MSB propose un programme de parrainage permettant à toute personne de recommander nos services. Si le chantier référé est signé et réalisé, le parrain reçoit une prime de <strong>100 €</strong>.
              </p>
              <p>
                Conditions : le parrain doit être identifié avant la signature du devis par le client parrainé. La prime est versée après règlement intégral du chantier parrainé.
              </p>
            </div>
          </section>

          {/* Article 11 - Responsabilité */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Article 11 - Limitation de responsabilité
            </h2>
            <p className="text-gray-600">
              La responsabilité de MSB ne pourra être engagée en cas de dommages résultant d&apos;une mauvaise utilisation des ouvrages réalisés, d&apos;un défaut d&apos;entretien par le Client, de modifications apportées par le Client ou un tiers, ou d&apos;événements de force majeure.
            </p>
          </section>

          {/* Article 12 - Litiges */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Article 12 - Litiges et médiation
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                <strong>12.1 Réclamations :</strong> Toute réclamation doit être adressée par écrit à MSB dans un délai de 30 jours suivant la survenance du litige.
              </p>
              <p>
                <strong>12.2 Médiation :</strong> En cas de litige non résolu à l&apos;amiable, le Client peut recourir gratuitement au service de médiation de la consommation. Le médiateur compétent peut être contacté via : <a href="https://www.mediateur-consommation.fr" target="_blank" rel="noopener noreferrer" className="text-burgundy hover:underline">www.mediateur-consommation.fr</a>
              </p>
              <p>
                <strong>12.3 Juridiction compétente :</strong> À défaut d&apos;accord amiable, tout litige relèvera de la compétence exclusive des tribunaux français, conformément aux règles de compétence en vigueur.
              </p>
            </div>
          </section>

          {/* Article 13 - Droit applicable */}
          <section>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Article 13 - Droit applicable
            </h2>
            <p className="text-gray-600">
              Les présentes Conditions Générales de Vente sont soumises au droit français. Elles sont rédigées en langue française qui fera foi en cas de litige.
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
