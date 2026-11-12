import type { NextConfig } from "next";

/**
 * Only used for GitHub Pages, where the site lives at
 * https://<user>.github.io/<repo>/ — the workflow in .github/workflows sets it.
 * On Vercel this stays empty.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // The site has no backend: build it to plain HTML/CSS/JS in the `out` folder.
  output: "export",
  basePath,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
