import { Reveal } from "./Reveal";
import { CopyButton } from "./CopyButton";
import { Code } from "./Code";

const SNIPPET = `# install the one system dependency
brew install git-filter-repo        # macOS  (Linux: sudo apt install git-filter-repo)

# run the interactive wizard — no install required
npx vector-migrate`;

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

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-edge bg-panel/80 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.85)]">
            <div className="flex items-center gap-2 border-b border-edge px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
              <span className="ml-2 font-mono text-xs text-muted">bash</span>
              <CopyButton
                value={SNIPPET}
                ariaLabel="Copy quick start commands"
                copiedLabel="Copied"
                iconSize={15}
                className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-edge-soft bg-canvas px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:text-fg"
              />
            </div>
            <pre className="overflow-x-auto px-5 py-5 font-mono text-sm leading-relaxed">
              <code>
                <span className="text-muted"># install the one system dependency</span>
                {"\n"}
                <span className="text-acc-bright">brew</span>
                <span className="text-fg"> install git-filter-repo</span>
                <span className="text-muted">{"        # macOS  (Linux: sudo apt install git-filter-repo)"}</span>
                {"\n\n"}
                <span className="text-muted"># run the interactive wizard — no install required</span>
                {"\n"}
                <span className="text-acc-bright">npx</span>
                <span className="text-fg"> vector-migrate</span>
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
