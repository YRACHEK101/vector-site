import { Fingerprint, KeyRound, RefreshCw, ShieldCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Guarantee = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const GUARANTEES: Guarantee[] = [
  {
    icon: KeyRound,
    title: "Zero-Token",
    body: "SSH keys only. No Personal Access Token ever touches your shell history, config, or disk.",
  },
  {
    icon: ShieldCheck,
    title: "Non-Destructive",
    body: "Vector never overwrites GitHub. A diverged remote requires an explicit --force.",
  },
  {
    icon: Fingerprint,
    title: "Deterministic SHAs",
    body: "Commits already pushed keep identical hashes on every subsequent run.",
  },
  {
    icon: RefreshCw,
    title: "Incremental",
    body: "Re-run as work continues on Azure; only the new delta is fetched and pushed.",
  },
];

export function Safety() {
  return (
    <section id="safety" className="border-t border-edge/50">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-sm text-acc-bright">Why it&rsquo;s safe</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Safe by construction, not by convention.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map((g, i) => {
            const Icon = g.icon;
            return (
              <Reveal key={g.title} delay={i * 0.07} className="h-full">
                <div className="flex h-full flex-col bg-panel/50 p-6">
                  <Icon size={22} className="text-acc-bright" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold tracking-tight">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{g.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
