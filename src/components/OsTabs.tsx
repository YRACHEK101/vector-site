"use client";

import {
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import { Terminal } from "./Terminal";

type OsTab = {
  id: string;
  label: string;
  /** Plain text written to the clipboard. */
  copy: string;
  copyAriaLabel: string;
  /** Styled terminal body. */
  content: ReactNode;
  helper?: string;
};

const TABS: OsTab[] = [
  {
    id: "macos",
    label: "macOS",
    copy: "brew install git-filter-repo\nnpx vector-migrate",
    copyAriaLabel: "Copy macOS install commands",
    content: (
      <>
        <span className="text-acc-bright">brew</span>
        <span className="text-fg"> install git-filter-repo</span>
        {"\n"}
        <span className="text-acc-bright">npx</span>
        <span className="text-fg"> vector-migrate</span>
      </>
    ),
  },
  {
    id: "linux",
    label: "Linux",
    copy: "sudo apt update && sudo apt install -y git git-filter-repo\nnpx vector-migrate",
    copyAriaLabel: "Copy Linux install commands",
    content: (
      <>
        <span className="text-acc-bright">sudo</span>
        <span className="text-fg"> apt update && sudo apt install -y git git-filter-repo</span>
        {"\n"}
        <span className="text-muted">{"# any distro, via pip:  pip3 install --user git-filter-repo"}</span>
        {"\n"}
        <span className="text-acc-bright">npx</span>
        <span className="text-fg"> vector-migrate</span>
      </>
    ),
  },
  {
    id: "windows",
    label: "Windows",
    copy: "pip install git-filter-repo\nnpx vector-migrate",
    copyAriaLabel: "Copy Windows install commands",
    helper: "WSL is recommended for large repos and behaves like Linux.",
    content: (
      <>
        <span className="text-acc-bright">pip</span>
        <span className="text-fg"> install git-filter-repo</span>
        <span className="text-muted">{"   # requires Python on PATH"}</span>
        {"\n"}
        <span className="text-acc-bright">npx</span>
        <span className="text-fg"> vector-migrate</span>
      </>
    ),
  },
];

export function OsTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const onKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    const last = TABS.length - 1;
    let next = active;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Operating system"
        className="inline-flex gap-1 rounded-xl border border-edge bg-panel/60 p-1"
      >
        {TABS.map((t, i) => {
          const selected = i === active;
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={onKeyDown}
              className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                selected
                  ? "bg-canvas text-fg shadow-[inset_0_0_0_1px_#2c3442]"
                  : "text-muted hover:text-fg"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {TABS.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`${baseId}-panel-${t.id}`}
          aria-labelledby={`${baseId}-tab-${t.id}`}
          hidden={i !== active}
          tabIndex={0}
          className="mt-4 focus-visible:outline-none"
        >
          <Terminal label="bash" copyValue={t.copy} copyAriaLabel={t.copyAriaLabel}>
            {t.content}
          </Terminal>
          {t.helper ? (
            <p className="mt-3 text-sm leading-relaxed text-muted">{t.helper}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
