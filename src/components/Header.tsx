"use client";

import { useState } from "react";
import { nav, site } from "@/data/site";
import { Logo } from "./Logo";
import { PixelIcon } from "./PixelIcon";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const cvReady = site.cvUrl !== "#";

  return (
    <header className="on-band sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="mx-auto max-w-6xl">
        <div className="pixel-box relative bg-band text-band-ink">
          <div className="flex h-12 items-center gap-1 pl-3 pr-1">
            <a
              href="#top"
              aria-label={`${site.nickname} — back to top`}
              className="mr-auto flex h-11 items-center"
            >
              <Logo />
            </a>

            {/* Desktop navigation */}
            <nav aria-label="Sections" className="hidden items-center md:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex h-11 items-center px-3 text-sm font-medium hover:bg-band-ink/15 lg:px-4"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={site.cvUrl}
                {...(cvReady ? { download: true } : {})}
                className="ml-2 flex h-9 items-center gap-2 bg-slab px-3 text-sm font-bold text-slab-ink hover:bg-[#26301a]"
              >
                <PixelIcon name="download" className="h-3.5 w-auto" />
                CV
              </a>
            </nav>

            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 cursor-pointer place-items-center hover:bg-band-ink/15 md:hidden"
            >
              <PixelIcon
                name={open ? "close" : "menu"}
                className="h-5 w-auto"
              />
            </button>
          </div>

          {/* Mobile navigation */}
          {open && (
            <nav
              id="mobile-menu"
              aria-label="Sections"
              className="pixel-outline absolute inset-x-0 top-[calc(100%+4px)] bg-band p-2 md:hidden"
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center px-3 font-medium hover:bg-band-ink/15"
                >
                  <span className="mr-3 text-band-muted" aria-hidden="true">
                    &gt;
                  </span>
                  {item.label}
                </a>
              ))}
              <a
                href={site.cvUrl}
                {...(cvReady ? { download: true } : {})}
                onClick={() => setOpen(false)}
                className="mt-2 flex h-12 items-center justify-center gap-2 bg-slab font-bold text-slab-ink"
              >
                <PixelIcon name="download" className="h-4 w-auto" />
                Download CV
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
