import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Jersey_10 } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const pixelFont = Jersey_10({
  variable: "--font-pixel-face",
  weight: "400",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} — Portfolio`,
  description: `${site.name} (${site.nickname}) — ${site.role} based in ${site.location}. Projects, skills and contact.`,
  openGraph: {
    title: `${site.name} — Portfolio`,
    description: `${site.role} based in ${site.location}.`,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#a6c416",
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${pixelFont.variable} ${monoFont.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
