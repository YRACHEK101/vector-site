import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { REPO_URL, SITE_DESCRIPTION, SITE_NAME, TAGLINE } from "@/lib/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vector-migrate.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vector — Migrate Azure DevOps repos to GitHub, keep your green squares",
    template: "%s · Vector",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Azure DevOps to GitHub",
    "git migration",
    "git-filter-repo",
    "contribution graph",
    "vector-migrate",
    "repository migration",
    "preserve commit history",
  ],
  authors: [{ name: "YRACHEK101", url: REPO_URL }],
  creator: "YRACHEK101",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: "Vector — Migrate Azure DevOps repos to GitHub",
    description: TAGLINE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Vector — Migrate Azure DevOps repos to GitHub",
    description: TAGLINE,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-fg">{children}</body>
    </html>
  );
}
