import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House Detailing by MSB | Rénovation de Façade Premium en Île-de-France",
  description: "Experts en rénovation de façade et ravalement de pavillons en Île-de-France. Découvrez notre approche 'Detailing' pour une finition haut de gamme de votre maison.",
  keywords: "rénovation façade, ravalement, isolation thermique, ITE, Île-de-France, detailing maison, house detailing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
