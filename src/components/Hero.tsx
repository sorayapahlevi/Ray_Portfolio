import { site } from "@/data/site";
import { PixelIcon } from "./PixelIcon";

export function Hero() {
  const cvReady = site.cvUrl !== "#";

  return (
    <section id="top" className="dot-grid relative overflow-hidden">
      {/* Decorative sparkles */}
      <PixelIcon
        name="sparkle"
        className="twinkle absolute left-[8%] top-[14%] h-5 w-auto text-accent"
      />
      <PixelIcon
        name="sparkle"
        className="twinkle absolute right-[9%] top-[20%] h-7 w-auto text-accent [animation-delay:0.8s]"
      />
      <PixelIcon
        name="sparkle"
        className="twinkle absolute bottom-[16%] left-[16%] hidden h-4 w-auto text-accent [animation-delay:1.5s] sm:block"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col items-center justify-center px-5 py-16 text-center">
        <p className="mb-5 bg-accent px-2.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent-ink">
          Player 1 · {site.location}
        </p>

        <h1 className="pixel-title font-pixel text-[clamp(3.4rem,11vw,8rem)] leading-[0.85] text-balance">
          {site.name}
        </h1>

        <p className="mt-6 text-base sm:text-xl">
          {site.role}
          <span
            className="blink ml-1 inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] bg-accent"
            aria-hidden="true"
          />
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={site.cvUrl}
            {...(cvReady ? { download: true } : {})}
            className="pixel-btn"
          >
            <PixelIcon name="download" className="h-4 w-auto" />
            Download resume
          </a>
          <div className="flex gap-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              className="pixel-btn !bg-raised !text-ink"
            >
              <PixelIcon name="linkedin" className="h-5 w-auto" />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
              className="pixel-btn !bg-raised !text-ink"
            >
              <PixelIcon name="github" className="h-5 w-auto" />
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="mt-14 text-xs font-bold uppercase tracking-[0.25em] text-muted hover:text-hilite"
        >
          <span className="blink">Press start</span>
          <span className="bob mt-2 block text-hilite" aria-hidden="true">
            ▼
          </span>
        </a>
      </div>
    </section>
  );
}
