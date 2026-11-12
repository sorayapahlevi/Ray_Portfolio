import { about, site } from "@/data/site";
import { PixelIcon } from "./PixelIcon";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="on-band bg-band text-band-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <SectionHeading level="Level 1" onBand>
          About me
        </SectionHeading>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Photo (or a placeholder until site.photo is set in src/data/site.ts) */}
          <div className="pixel-box aspect-[5/4] bg-slab text-slab-ink">
            {site.photo ? (
              // eslint-disable-next-line @next/next/no-img-element -- static export: plain <img> is the simplest option
              <img
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                className="size-full object-cover"
              />
            ) : (
              <div className="dot-grid grid size-full place-items-center [--dot:rgb(191_224_42/0.16)]">
                <div className="text-center">
                  <PixelIcon
                    name="sparkle"
                    className="twinkle mx-auto mb-3 h-8 w-auto text-band"
                  />
                  <p className="font-pixel text-4xl text-band">PHOTO</p>
                  <p className="mt-1 text-xs opacity-70">coming soon</p>
                </div>
              </div>
            )}
          </div>

          <div>
            <h3 className="font-pixel text-5xl leading-none sm:text-6xl">
              {about.heading}
            </h3>
            <p className="mt-5 leading-relaxed sm:text-lg sm:leading-relaxed">
              {about.paragraph}
            </p>

            <p className="mb-3 mt-8 text-xs font-bold uppercase tracking-[0.25em] text-band-muted">
              {about.interestsLabel}
            </p>
            <ul className="flex flex-wrap gap-3">
              {about.interests.map((interest) => (
                <li
                  key={interest.label}
                  className="pixel-box flex items-center gap-2.5 bg-slab px-3.5 py-2.5 text-sm font-bold text-slab-ink"
                >
                  <PixelIcon
                    name={interest.icon}
                    className="h-4 w-auto text-band"
                  />
                  {interest.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
