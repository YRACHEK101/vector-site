import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { HowItWorks } from "@/components/HowItWorks";
import { QuickStart } from "@/components/QuickStart";
import { Safety } from "@/components/Safety";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:border-edge-soft focus:bg-panel focus:px-4 focus:py-2 focus:text-sm focus:text-fg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Problems />
        <HowItWorks />
        <QuickStart />
        <Safety />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
