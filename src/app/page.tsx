import { Navbar } from "@/components/navbar";
import { ArcanoHero } from "@/components/arcano-hero";
import { Manifesto } from "@/components/manifesto";
import { Pilares } from "@/components/pilares";
import { Stats } from "@/components/stats";
import { Equipo } from "@/components/equipo";
import { ArcanoIASection } from "@/components/arcano-ia-section";
import { Speech } from "@/components/speech";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

function GradientTransition({ from, to, height = "h-24 md:h-32" }: { from: string; to: string; height?: string }) {
  return (
    <div
      className={`${height} w-full`}
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
    />
  );
}

export default function Home() {
  return (
    <div className="dark bg-black">
      <Navbar />
      <main>
        <ArcanoHero />
        <GradientTransition from="#000000" to="#0B0F1A" height="h-16 md:h-24" />
        <Manifesto />
        <Pilares />
        <GradientTransition from="#0B0F1A" to="#000000" height="h-16 md:h-20" />
        <ArcanoIASection />
        <GradientTransition from="#000000" to="#060911" height="h-16 md:h-20" />
        <Stats />
        <GradientTransition from="#060911" to="#0B0F1A" height="h-16 md:h-20" />
        <Equipo />
        <GradientTransition from="#0B0F1A" to="#060911" height="h-16 md:h-20" />
        <Speech />
        <GradientTransition from="#060911" to="#0B0F1A" height="h-16 md:h-20" />
        <CTASection />
        <GradientTransition from="#0B0F1A" to="#060911" height="h-16 md:h-20" />
      </main>
      <Footer />
    </div>
  );
}
