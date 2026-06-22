import { Package, Terminal } from "lucide-react";
import { Logo } from "./Logo";
import { GitHubButton } from "./GitHubButton";
import { CopyButton } from "./CopyButton";
import { ContributionGrid } from "./ContributionGrid";
import { Reveal } from "./Reveal";
import { EXTERNAL_LINK_PROPS, INSTALL_COMMAND, NPM_URL, SITE_NAME } from "@/lib/site";

const PILLS = ["Interactive", "Zero-Token", "Non-Destructive"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative backdrop: faint grid + a single green glow. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_75%)]" />
        <div className="absolute left-1/2 top-[-12%] h-[480px] w-[820px] max-w-[110vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(57,211,83,0.16),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-24">
        {/* Left: the pitch. */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-edge-soft bg-panel/60 px-3 py-1 font-mono text-xs text-muted">
              <Terminal size={13} className="text-acc-bright" aria-hidden="true" /> open source ·{" "}
              vector-migrate
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 flex items-center gap-4">
              <Logo
                size={60}
                uid="hero"
                className="drop-shadow-[0_8px_24px_rgba(38,166,65,0.25)]"
              />
              <span className="text-6xl font-semibold tracking-tighter sm:text-7xl">
                {SITE_NAME}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              Move your repos from Azure DevOps to GitHub —{" "}
              <span className="bg-gradient-to-r from-acc to-acc-bright bg-clip-text text-transparent">
                without losing your green squares.
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              An interactive CLI that migrates full Git history and rewrites your old corporate
              identity to your personal, verified one — so years of real work light up your
              contribution graph again, at their original dates.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {PILLS.map((p) => (
                <li
                  key={p}
                  className="inline-flex items-center gap-2 rounded-full border border-edge-soft bg-panel/60 px-3.5 py-1.5 text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-acc-bright" aria-hidden="true" />
                  <span className="text-fg">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <GitHubButton size="lg" />
              <a
                href={NPM_URL}
                {...EXTERNAL_LINK_PROPS}
                aria-label="View vector-migrate on npm"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-edge-soft bg-panel/60 px-6 text-base font-medium text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-acc/50 hover:bg-panel"
              >
                <Package size={18} aria-hidden="true" />
                npm
              </a>
              <CopyButton
                value={INSTALL_COMMAND}
                ariaLabel="Copy install command"
                idleLabel="Copy install command"
                copiedLabel="Copied!"
                iconSize={18}
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-edge-soft bg-panel/60 px-7 text-base font-medium text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-acc/50 hover:bg-panel"
              />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-5 font-mono text-sm text-muted">
              <span className="text-acc-bright">$</span> {INSTALL_COMMAND}
              <span className="ml-2 text-edge-soft">— no install required</span>
            </p>
          </Reveal>
        </div>

        {/* Right: the green-squares motif. */}
        <Reveal delay={0.2} className="w-full lg:justify-self-end">
          <div className="relative w-full max-w-[520px] rounded-2xl border border-edge bg-panel/80 p-1 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.85)] backdrop-blur lg:ml-auto">
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
              <span className="ml-2 font-mono text-xs text-muted">contribution graph</span>
            </div>
            <div className="rounded-xl border border-edge bg-canvas/80 p-5">
              <ContributionGrid />
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-edge pt-4">
                <span className="inline-flex items-center gap-2 text-sm text-muted">
                  <span className="h-2 w-2 rounded-full bg-acc-bright" aria-hidden="true" /> identity
                  rewritten
                </span>
                <span className="font-mono text-xs text-acc-bright">history restored</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
