import { Reveal } from "./Reveal";
import { Terminal } from "./Terminal";
import { Code } from "./Code";
import { EXTERNAL_LINK_PROPS, REPO_URL } from "@/lib/site";

const CI_SNIPPET = `vector-migrate --non-interactive \\
  --azure-url  "https://org@dev.azure.com/org/Project/_git/Repo" \\
  --github-ssh "git@github.com:you/your-repo.git" \\
  --old-email  "you@old-corp.com" \\
  --new-name   "your-github-username" \\
  --new-email  "you@personal.com" \\
  --branch master --branch main`;

const CI_SNIPPET_GH = `# GitHub → GitHub, auto-handle >100 MB files, and skip the rewrite if you're not a contributor:
vector-migrate --force \\
  --mode c \\
  --source "git@github.com:old-org/repo.git" \\
  --dest   "git@github.com:you/repo.git" \\
  --on-large-file strip \\
  --skip-identity`;

export function AutomateCI() {
  return (
    <section id="automation" className="border-t border-edge/50">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-sm text-acc-bright">Automation</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Run it unattended in CI
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Every interactive prompt also has a flag and an environment variable, so you can skip
            the wizard entirely. Add <Code>--sync</Code> to re-run incrementally, <Code>--dry-run</Code>{" "}
            to preview without pushing, or <Code>--json</Code> for machine-readable output.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-4">
          <Terminal
            label="bash"
            copyValue={CI_SNIPPET}
            copyAriaLabel="Copy the non-interactive command"
          >
            <span className="text-acc-bright">vector-migrate</span>
            <span className="text-fg">{" --non-interactive \\"}</span>
            {"\n"}
            <span className="text-fg">{"  --azure-url  "}</span>
            <span className="text-muted">{`"https://org@dev.azure.com/org/Project/_git/Repo"`}</span>
            <span className="text-fg">{" \\"}</span>
            {"\n"}
            <span className="text-fg">{"  --github-ssh "}</span>
            <span className="text-muted">{`"git@github.com:you/your-repo.git"`}</span>
            <span className="text-fg">{" \\"}</span>
            {"\n"}
            <span className="text-fg">{"  --old-email  "}</span>
            <span className="text-muted">{`"you@old-corp.com"`}</span>
            <span className="text-fg">{" \\"}</span>
            {"\n"}
            <span className="text-fg">{"  --new-name   "}</span>
            <span className="text-muted">{`"your-github-username"`}</span>
            <span className="text-fg">{" \\"}</span>
            {"\n"}
            <span className="text-fg">{"  --new-email  "}</span>
            <span className="text-muted">{`"you@personal.com"`}</span>
            <span className="text-fg">{" \\"}</span>
            {"\n"}
            <span className="text-fg">{"  --branch master --branch main"}</span>
          </Terminal>

          <Terminal
            label="bash"
            copyValue={CI_SNIPPET_GH}
            copyAriaLabel="Copy the GitHub-to-GitHub command"
          >
            <span className="text-muted">
              {"# GitHub → GitHub, auto-handle >100 MB files, and skip the rewrite if you're not a contributor:"}
            </span>
            {"\n"}
            <span className="text-acc-bright">vector-migrate</span>
            <span className="text-fg">{" --force \\"}</span>
            {"\n"}
            <span className="text-fg">{"  --mode c \\"}</span>
            {"\n"}
            <span className="text-fg">{"  --source "}</span>
            <span className="text-muted">{`"git@github.com:old-org/repo.git"`}</span>
            <span className="text-fg">{" \\"}</span>
            {"\n"}
            <span className="text-fg">{"  --dest   "}</span>
            <span className="text-muted">{`"git@github.com:you/repo.git"`}</span>
            <span className="text-fg">{" \\"}</span>
            {"\n"}
            <span className="text-fg">{"  --on-large-file strip \\"}</span>
            {"\n"}
            <span className="text-fg">{"  --skip-identity"}</span>
          </Terminal>

          <p className="text-sm leading-relaxed text-muted">
            <a
              href={`${REPO_URL}#non-interactive--scripted-runs`}
              {...EXTERNAL_LINK_PROPS}
              className="text-acc-bright hover:underline"
            >
              See the full flag &amp; environment-variable reference in the README →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
