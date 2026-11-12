import { projects, site } from "@/data/site";
import { PixelIcon } from "./PixelIcon";
import { SectionHeading } from "./SectionHeading";

const cardSpan = "lg:col-span-2 lg:[&:nth-child(4)]:col-start-2";

export function Projects() {
  return (
    <section id="projects" className="border-t-4 border-line/15">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <SectionHeading level="Level 3">Projects</SectionHeading>

        <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, index) => (
            <li
              key={project.title}
              className={`pixel-box flex flex-col bg-raised ${cardSpan}`}
            >
              <div className="flex items-center justify-between gap-3 bg-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent-ink">
                <span>Quest {String(index + 1).padStart(2, "0")}</span>
                <span>{project.tag}</span>
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="font-pixel text-4xl leading-none">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul
                  className="mt-4 flex flex-wrap gap-1.5"
                  aria-label="Tech stack"
                >
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border-2 border-line/60 px-2 py-0.5 text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-5 text-sm font-bold">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 underline decoration-accent decoration-4 underline-offset-4 hover:text-hilite"
                  >
                    <PixelIcon name="github" className="h-4 w-auto" />
                    Repository
                    <span className="sr-only"> for {project.title}</span>
                  </a>
                  {project.extra && (
                    <a
                      href={project.extra.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 underline decoration-accent decoration-4 underline-offset-4 hover:text-hilite"
                    >
                      {project.extra.label}
                      <PixelIcon name="arrow" className="h-2.5 w-auto" />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}

          {/* Fifth slot: link to the rest of the work on GitHub */}
          <li className={`flex sm:max-lg:col-span-2 ${cardSpan}`}>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="pixel-box group flex min-h-48 flex-1 flex-col items-center justify-center gap-3 border-0 bg-transparent p-6 text-center [--px-line:var(--accent)] hover:bg-raised"
            >
              <PixelIcon name="github" className="h-10 w-auto text-hilite" />
              <span className="font-pixel text-3xl leading-none">
                More on GitHub
              </span>
              <span className="text-sm text-muted">
                Coursework, experiments and side quests
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
