import { skills } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <SectionHeading level="Level 2">Skills</SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title} className="pixel-box bg-raised">
              <h3 className="bg-accent px-4 py-2 font-pixel text-2xl leading-none text-accent-ink">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2 p-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-2 border-line/70 px-2.5 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
