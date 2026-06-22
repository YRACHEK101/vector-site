"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { GitHubButton } from "./GitHubButton";
import { EXTERNAL_LINK_PROPS, SITE_NAME } from "@/lib/site";

const LINKS: { href: string; label: string; external?: boolean }[] = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#problems", label: "Features" },
  { href: "#quick-start", label: "Quick start" },
  { href: "https://github.com/YRACHEK101/Vector#readme", label: "Docs", external: true },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-edge bg-canvas/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-lg"
          aria-label={`${SITE_NAME} — home`}
        >
          <Logo size={30} uid="nav" />
          <span className="text-lg font-semibold tracking-tight">{SITE_NAME}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              {...(l.external ? EXTERNAL_LINK_PROPS : {})}
              className="rounded-lg px-3.5 py-2 text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <div className="ml-3">
            <GitHubButton size="sm" />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-edge-soft text-fg transition-colors hover:bg-panel md:hidden"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-edge bg-canvas/95 backdrop-blur-md md:hidden"
        >
          <div className="mx-auto flex max-w-[1180px] flex-col gap-1 px-5 py-4 sm:px-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...(l.external ? EXTERNAL_LINK_PROPS : {})}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-fg/90 transition-colors hover:bg-panel"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2">
              <GitHubButton size="md" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
