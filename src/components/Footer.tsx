import { Logo } from "./Logo";
import { GitHubIcon } from "./GitHubIcon";
import { EXTERNAL_LINK_PROPS, REPO_URL, SITE_NAME, TAGLINE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Logo size={28} />
              <span className="text-base font-semibold tracking-tight">{SITE_NAME}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{TAGLINE}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
            <a
              href={REPO_URL}
              {...EXTERNAL_LINK_PROPS}
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
            >
              <GitHubIcon width={16} height={16} />
              GitHub repository
            </a>
            <a
              href="#top"
              className="text-muted transition-colors hover:text-fg"
            >
              Back to top
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-edge/60 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>MIT License</p>
          <p className="font-mono text-xs">
            <span className="text-acc-bright">$</span> npx vector-migrate
          </p>
        </div>
      </div>
    </footer>
  );
}
