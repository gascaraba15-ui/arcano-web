import { ArrowRight } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  num: string;
}

interface Feature72Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

export const Feature72 = ({
  heading = "Powerful Features",
  description = "Discover the powerful features that make our platform stand out.",
  linkUrl = "#contacto",
  linkText = "Solicitar Reunion",
  features = [],
}: Feature72Props) => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 flex flex-col gap-16">
        <div className="lg:max-w-lg">
          <p className="text-[0.7rem] font-semibold tracking-[4px] uppercase text-[#C5A85F] mb-4">
            Los 5 Pilares
          </p>
          <h2
            className="mb-4 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.025em] text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {heading}
          </h2>
          <p className="mb-8 text-[#9CA3AF] text-base lg:text-lg leading-relaxed">{description}</p>
          <a
            href={linkUrl}
            className="group flex items-center text-sm font-medium text-[#C5A85F] hover:text-[#D4BA74] transition-colors md:text-base"
          >
            {linkText}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-hidden border border-white/[0.06] bg-[#0E1220] hover:border-[rgba(197,168,95,0.2)] transition-colors"
            >
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <span className="text-[0.7rem] font-semibold tracking-[3px] text-[#C5A85F] mb-3 block">
                  {feature.num}
                </span>
                <h3
                  className="mb-3 text-lg font-semibold text-white md:mb-4 md:text-2xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#9CA3AF] leading-[1.8] text-[0.92rem]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
