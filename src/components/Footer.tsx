import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="px-5 py-8 text-center text-xs text-muted">
      <p>
        © {new Date().getFullYear()} {site.name} · Built with Next.js &amp;
        Tailwind CSS
      </p>
      <p className="mt-2 font-pixel text-xl text-hilite">Thanks for playing!</p>
    </footer>
  );
}
