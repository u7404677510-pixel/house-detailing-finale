"use client";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyButtons } from "./StickyButtons";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyButtons />
    </>
  );
}
