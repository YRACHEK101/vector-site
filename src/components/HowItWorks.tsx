import { ArrowDown, ArrowRight, Database, GitFork } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { GitHubIcon } from "./GitHubIcon";

type Stage = {
  n: string;
  icon: ReactNode;
  node: string;
  title: string;
  body: ReactNode;
  cmd: string;
};

const STAGES: Stage[] = [
  {
    n: "01",
    icon: <Database size={20} aria-hidden="true" />,
    node: "Azure DevOps",
    title: "Mirror / fetch",
    body: "Mirror the full history from Azure DevOps into a pristine local source mirror — every branch, every commit, untouched.",
    cmd: "git fetch --mirror",
  },
  {
    n: "02",
    icon: <GitFork size={20} aria-hidden="true" />,
    node: "Local staging copy",
    title: "Rebuild + rewrite",
    body: "Rebuild a disposable staging copy with git-filter-repo --mailmap — deterministically mapping your old email to your new identity. Teammates' commits stay exactly as they were.",
    cmd: "git filter-repo --mailmap",
  },
  {
    n: "03",
    icon: <GitHubIcon width={20} height={20} />,
    node: "GitHub",
    title: "Ancestry-aware push",
    body: "Push per branch over SSH — create, no-op, fast-forward, skip-if-ahead, or confirm-on-divergence. Vector never overwrites what is already on GitHub.",
    cmd: "ssh push --per-branch",
  },
];

const BRANCH_STRATEGIES = [
  "create",
  "no-op",
  "fast-forward",
  "skip-if-ahead",
  "confirm-on-divergence",
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-edge/50">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="text-center">
          <p className="font-mono text-sm text-acc-bright">How it works</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Three stages, fully deterministic.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Source mirror in, staging copy rewritten, ancestry-aware push out. The same inputs
            always produce the same result.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col items-stretch gap-3 lg:flex-row lg:items-stretch lg:gap-2">
          {STAGES.map((s, i) => (
            <Fragment key={s.n}>
              <Reveal delay={i * 0.1} className="flex-1">
                <article className="flex h-full flex-col rounded-2xl border border-edge bg-panel/50 p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-edge bg-canvas text-acc-bright">
                      {s.icon}
                    </span>
                    <span className="font-mono text-xs text-muted">{s.n}</span>
                  </div>
                  <p className="mt-5 font-mono text-xs uppercase tracking-wider text-muted">
                    {s.node}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.body}</p>
                  <p className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-edge bg-canvas px-3 py-1.5 font-mono text-xs text-fg/90">
                    <span className="text-acc-bright">$</span>
                    {s.cmd}
                  </p>
                </article>
              </Reveal>

              {i < STAGES.length - 1 && (
                <div
                  aria-hidden="true"
                  className="flex shrink-0 items-center justify-center text-edge-soft lg:px-1"
                >
                  <ArrowDown size={22} className="lg:hidden" />
                  <ArrowRight size={22} className="hidden lg:block" />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 rounded-2xl border border-edge bg-panel/40 p-6 sm:p-7">
            <h3 className="text-sm font-semibold tracking-tight">Incremental by design</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
              Re-run any time new commits land on Azure. Vector fetches only the delta, keeps
              identical SHAs for commits already pushed, fast-forwards the new ones, and refuses to
              clobber a diverged remote unless <span className="font-mono text-fg/90">--force</span>{" "}
              is passed.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {BRANCH_STRATEGIES.map((b) => (
                <span
                  key={b}
                  className="rounded-md border border-edge bg-canvas px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
