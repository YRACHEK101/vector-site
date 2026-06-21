import type { ReactNode } from "react";
import { GitHubIcon } from "./GitHubIcon";
import { EXTERNAL_LINK_PROPS, REPO_URL } from "@/lib/site";

type Variant = "primary" | "ghost";
type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2.5 rounded-xl font-medium tracking-tight transition-all duration-200 focus-visible:outline-none";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-acc-bright to-acc text-[#06140b] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_30px_-10px_rgba(38,166,65,0.65)] hover:brightness-110 hover:-translate-y-0.5",
  ghost:
    "border border-edge-soft bg-panel/60 text-fg hover:border-acc/50 hover:bg-panel hover:-translate-y-0.5",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

const ICON_SIZE: Record<Size, number> = { sm: 16, md: 18, lg: 20 };

type GitHubButtonProps = {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

/** A link to the canonical repo. Always opens in a new, secure tab. */
export function GitHubButton({
  children = "View on GitHub",
  variant = "primary",
  size = "md",
  className,
}: GitHubButtonProps) {
  return (
    <a
      href={REPO_URL}
      {...EXTERNAL_LINK_PROPS}
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className ?? ""}`}
    >
      <GitHubIcon className="shrink-0" width={ICON_SIZE[size]} height={ICON_SIZE[size]} />
      {children}
    </a>
  );
}
