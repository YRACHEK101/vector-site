"use client";

import { Check, Copy } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type CopyButtonProps = {
  /** Text written to the clipboard. */
  value: string;
  /** Accessible label for the control. */
  ariaLabel: string;
  className?: string;
  /** Optional visible content rendered before the icon (e.g. a command). */
  children?: ReactNode;
  /** Visible text shown when idle (omit for an icon-only button). */
  idleLabel?: string;
  /** Visible text shown briefly after a successful copy. */
  copiedLabel?: string;
  iconSize?: number;
};

export function CopyButton({
  value,
  ariaLabel,
  className,
  children,
  idleLabel,
  copiedLabel = "Copied!",
  iconSize = 16,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const onCopy = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        throw new Error("Clipboard API unavailable");
      }
    } catch {
      // Fallback for older / insecure-context browsers.
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-1000px";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* nothing more we can do */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }, [value]);

  const label = copied ? copiedLabel : idleLabel;

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={ariaLabel}
      data-copied={copied || undefined}
      className={className}
    >
      {children}
      {copied ? (
        <Check size={iconSize} className="text-acc-bright" aria-hidden="true" />
      ) : (
        <Copy size={iconSize} aria-hidden="true" />
      )}
      {label ? <span>{label}</span> : null}
      <span aria-live="polite" className="sr-only">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}
