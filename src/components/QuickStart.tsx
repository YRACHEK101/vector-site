import { Reveal } from "./Reveal";
import { Code } from "./Code";
import { OsTabs } from "./OsTabs";

export function QuickStart() {
  return (
    <section id="quick-start" className="border-t border-edge/50">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
        <Reveal>
          <p className="font-mono text-sm text-acc-bright">Quick start</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Run it in two commands.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            Install the one system dependency, then run the interactive wizard. There is nothing to
            configure by hand and no scripts to edit — Vector prompts you through it.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            <span className="font-medium text-fg">Requirements:</span> <Code>Node.js ≥ 18</Code>,{" "}
            <Code>git</Code>, and <Code>git-filter-repo</Code>.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="space-y-4">
          <div className="rounded-xl border border-edge bg-panel/40 p-4">
            <p className="text-sm leading-relaxed text-muted">
              <span className="font-medium text-fg">New here?</span> Run{" "}
              <Code>vector-migrate --check</Code> first — it verifies <Code>git</Code> and{" "}
              <Code>git-filter-repo</Code> are installed and prints exact, OS-specific install
              instructions if anything is missing.
            </p>
          </div>

          <OsTabs />

          <p className="text-sm leading-relaxed text-muted">
            Prefer a global install? <Code>npm install -g vector-migrate</Code>, then run{" "}
            <Code>vector-migrate</Code> anywhere.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
