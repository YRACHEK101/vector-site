import type { ReactNode } from "react";

/** Inline monospace token for technical terms, flags, and file paths. */
export function Code({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <code
      className={`rounded-md border border-edge bg-canvas px-1.5 py-0.5 font-mono text-[0.85em] text-fg/90 ${
        className ?? ""
      }`}
    >
      {children}
    </code>
  );
}
