import { NyxFooter } from "@/components/brand/nyx-footer";
import { NyxNav } from "@/components/brand/nyx-nav";
import { CtaSection } from "@/components/landing/cta-section";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { FlowDiagram } from "@/components/landing/flow-diagram";
import { LandingHero } from "@/components/landing/hero";
import { MarketStructureBand } from "@/components/landing/market-structure-band";
import { PlainOverview } from "@/components/landing/plain-overview";
import { HardProblemGrid, InstitutionalBenefits } from "@/components/landing/problem-grid";
import { StackStrip } from "@/components/landing/stack-strip";

export default function Home() {
  return (
    <div className="landing-light nyx-pixel-grid-light flex min-h-screen flex-1 flex-col bg-stone-50 text-stone-950">
      <NyxNav tone="chalk" active="home" launchHref={null} />
      <main className="flex-1">
        <LandingHero />
        <MarketStructureBand />
        <PlainOverview />
        <InstitutionalBenefits />
        <HardProblemGrid />
        <StackStrip />
        <FeatureGrid />
        <FlowDiagram />
        <CtaSection />
      </main>
      <NyxFooter tone="chalk" />
    </div>
  );
}
