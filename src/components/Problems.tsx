import { Activity, HardDrive, KeyRound, TimerReset, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Code } from "./Code";

type Problem = {
  icon: LucideIcon;
  title: string;
  body: ReactNode;
};

const PROBLEMS: Problem[] = [
  {
    icon: Activity,
    title: "The Contribution Graph Wipeout",
    body: (
      <>
        GitHub only lights up your contribution graph for commits whose author email is verified
        on your account. A normal migration carries corporate-email commits over as unattributed
        &ldquo;ghosts,&rdquo; so months or years of real work never show up as green squares.
        Vector rewrites your old corporate identity to your personal, verified one — and{" "}
        <em className="not-italic text-fg">by default leaves everyone else untouched</em>. Migrating
        a shared repo? Map your whole team in the same flow; each developer keeps attribution at
        their original dates.
      </>
    ),
  },
  {
    icon: KeyRound,
    title: "The Security Token Leak",
    body: (
      <>
        Pasting a Personal Access Token into a clone URL or config leaks it into shell history,{" "}
        <Code>.git/config</Code>, and CI logs. Vector is zero-token by design: it authenticates over
        SSH keys only and reads config from environment variables or in-memory prompts that are
        never written to disk.
      </>
    ),
  },
  {
    icon: TimerReset,
    title: "The HTTPS Push Freeze",
    body: (
      <>
        Large histories routinely hang at <Code>Writing objects: 100%</Code> over HTTPS. Vector
        streams over a single persistent raw-SSH pipeline, so even big repos transfer reliably.
      </>
    ),
  },
  {
    icon: HardDrive,
    title: "The 100 MB Wall",
    body: (
      <>
        GitHub hard-rejects any file over 100 MB found anywhere in history — and only at the final
        push, after the whole mirror and rewrite are done. One stray build artifact or{" "}
        <Code>.AppImage</Code> can sink an otherwise-perfect migration with a cryptic{" "}
        <Code>GH001</Code> error. Vector scans your full history before pushing, names each offending
        file and size, and — by default in <Code>--force</Code>/CI — strips them from history (or
        moves them to Git LFS), so the push just succeeds. No surprise failure at the finish line.
      </>
    ),
  },
];

export function Problems() {
  return (
    <section id="problems" className="border-t border-edge/50">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-sm text-acc-bright">The problem</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A naïve migration quietly costs you four things.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Moving repos to GitHub looks like a plain <Code>git push</Code> — until your graph goes
            dark, a token leaks, a big repo stalls, or one oversized file kills the push at the very
            end. Vector is built around exactly these failure modes.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08} as="div" className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-edge bg-panel/50 p-6 transition-colors duration-200 hover:border-edge-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-edge bg-canvas text-acc-bright">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
