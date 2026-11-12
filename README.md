# Ray's portfolio

Personal portfolio of Soraya Azzizah Pahlevi — a pixel / retro-handheld themed single page built with
**Next.js (App Router) + TypeScript + Tailwind CSS**. It has no backend: `npm run build` produces plain
static files in `out/`, so it can be hosted on Vercel, GitHub Pages or any static host.

## Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Where to edit things

| I want to change…                               | File                                    |
| ----------------------------------------------- | --------------------------------------- |
| Any text, link, skill or project                | `src/data/site.ts`                      |
| Colours (light + dark palettes)                 | top of `src/app/globals.css`            |
| Fonts                                           | `src/app/layout.tsx`                    |
| The logo                                        | `src/components/Logo.tsx`               |
| A pixel icon (they are little `#`/`.` bitmaps)  | `src/components/PixelIcon.tsx`          |
| A section's layout                              | `src/components/<Section>.tsx`          |

## Placeholders still to replace (search the code for `TODO`)

- [ ] **CV** — `cvUrl` in `src/data/site.ts` is a dummy `"#"`. Put the PDF at `public/cv.pdf` and set
      `cvUrl: asset("/cv.pdf")`.
- [ ] **LinkedIn** — `linkedin` in `src/data/site.ts` is a dummy URL.
- [ ] **Photo** — put a picture at `public/photo.jpg` and set `photo: asset("/photo.jpg")` in `src/data/site.ts`.
- [ ] **Logo** — `src/components/Logo.tsx` draws "Ray" with the pixel font; paste your own SVG there.
- [ ] **About paragraph** — a draft written from the GitHub repos; reword it in `src/data/site.ts`.

## Deploy

**Vercel (recommended):** import the GitHub repository at <https://vercel.com/new> and press Deploy —
no settings to change. Every push to `main` redeploys.

**GitHub Pages:** in the repository go to Settings → Pages → Source: *GitHub Actions*, then push to
`main`. The workflow in `.github/workflows/deploy-github-pages.yml` builds and publishes the site.
(If you use Vercel, delete that workflow file.)

## Notes

- The contact form opens the visitor's email app with the message pre-filled (`mailto:`), because there
  is no server. To receive messages directly, connect it to a form service such as Formspree in
  `src/components/ContactForm.tsx`.
- The theme follows the device's light/dark setting on the first visit and remembers the toggle after that.
