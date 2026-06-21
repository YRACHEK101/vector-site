import { GitHubButton } from "./GitHubButton";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="border-t border-edge/50">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-edge bg-panel/60 px-6 py-14 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(57,211,83,0.14),transparent)]"
            />
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Ready to bring your green squares with you?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
              Migrate your Azure DevOps history to GitHub with full attribution — interactive,
              zero-token, and non-destructive.
            </p>
            <div className="mt-9 flex justify-center">
              <GitHubButton size="lg" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
