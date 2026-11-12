import { site } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { PixelIcon, type IconName } from "./PixelIcon";
import { SectionHeading } from "./SectionHeading";

const rows: { icon: IconName; label: string; value: string; href?: string }[] =
  [
    {
      icon: "chat",
      label: "WhatsApp",
      value: site.phoneDisplay,
      href: `https://wa.me/${site.phoneWhatsApp}`,
    },
    {
      icon: "mail",
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    { icon: "pin", label: "Location", value: site.location },
  ];

export function Contact() {
  return (
    <section id="contact" className="on-band bg-band text-band-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <SectionHeading level="Final level" onBand>
          Contact
        </SectionHeading>

        <div className="grid gap-12 md:grid-cols-2 md:gap-14">
          <div className="min-w-0">
            <ul className="space-y-5">
              {rows.map((row) => {
                const content = (
                  <>
                    <span className="grid size-10 shrink-0 place-items-center bg-band text-band-ink">
                      <PixelIcon name={row.icon} className="h-5 w-auto" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-widest opacity-70">
                        {row.label}
                      </span>
                      <span className="block font-bold [overflow-wrap:anywhere] sm:text-lg">
                        {row.value}
                      </span>
                    </span>
                  </>
                );
                const box =
                  "pixel-box flex min-h-16 items-center gap-4 bg-slab p-3 text-slab-ink";
                return (
                  <li key={row.label}>
                    {row.href ? (
                      <a
                        href={row.href}
                        target={
                          row.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noreferrer"
                        className={`${box} hover:bg-[#26301a]`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={box}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="pixel-btn"
              >
                <PixelIcon name="github" className="h-5 w-auto" />
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="pixel-btn"
              >
                <PixelIcon name="linkedin" className="h-5 w-auto" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form card with a hard offset shadow, like the wireframe */}
          <div className="relative mb-3 mr-3">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 bg-slab"
              aria-hidden="true"
            />
            <div className="relative border-4 border-band-ink bg-raised p-5 text-ink sm:p-7">
              <h3 className="mb-5 font-pixel text-4xl leading-none">
                Send a message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
