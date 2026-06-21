import type { ReactNode } from "react";
import { CopyButton } from "./CopyButton";

type TerminalProps = {
  /** Window chrome label (e.g. "bash"). */
  label?: string;
  /** Text copied by the corner copy button. */
  copyValue: string;
  copyAriaLabel: string;
  /** The pre/code body. */
  children: ReactNode;
  className?: string;
};

/**
 * The shared terminal/code-block chrome used across the site — dark panel,
 * traffic-light dots, a label, and a copy button. Mirrors the original
 * Quick Start block so every terminal looks identical.
 */
export function Terminal({
  label = "bash",
  copyValue,
  copyAriaLabel,
  children,
  className,
}: TerminalProps) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border border-edge bg-panel/80 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.85)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center gap-2 border-b border-edge px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-muted">{label}</span>
        <CopyButton
          value={copyValue}
          ariaLabel={copyAriaLabel}
          copiedLabel="Copied"
          iconSize={15}
          className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-edge-soft bg-canvas px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:text-fg"
        />
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-sm leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}
