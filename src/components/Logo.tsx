type LogoProps = {
  size?: number;
  className?: string;
  /** Namespaces gradient/filter ids so several logos can coexist on one page. */
  uid?: string;
  /** Accessible title; omit for decorative use (the wordmark usually carries the name). */
  title?: string;
};

/**
 * The Vector mark, inlined as SVG. Inlining (vs. an <img>) means it paints
 * instantly with no extra request — so it never becomes an un-prioritized LCP —
 * and stays crisp at any device pixel ratio. Mirrors public/vector-logo.svg.
 */
export function Logo({ size = 32, className, uid = "logo", title }: LogoProps) {
  const bg = `vec-bg-${uid}`;
  const green = `vec-green-${uid}`;
  const glow = `vec-glow-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      className={className}
    >
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1b2230" />
          <stop offset="1" stopColor="#0d1117" />
        </linearGradient>
        <linearGradient id={green} x1="120" y1="392" x2="392" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#26a641" />
          <stop offset="1" stopColor="#39d353" />
        </linearGradient>
        <filter id={glow} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="16" y="16" width="480" height="480" rx="112" fill={`url(#${bg})`} />
      <rect
        x="16.5"
        y="16.5"
        width="479"
        height="479"
        rx="111.5"
        fill="none"
        stroke="#2c3442"
        strokeWidth="1"
      />
      <g opacity="0.9">
        <rect x="120" y="300" width="40" height="40" rx="9" fill={`url(#${green})`} opacity="0.35" />
        <rect x="186" y="252" width="40" height="40" rx="9" fill={`url(#${green})`} opacity="0.55" />
        <rect x="252" y="204" width="40" height="40" rx="9" fill={`url(#${green})`} opacity="0.78" />
      </g>
      <g filter={`url(#${glow})`}>
        <path
          d="M150 362 L322 190"
          stroke={`url(#${green})`}
          strokeWidth="44"
          strokeLinecap="round"
        />
        <path
          d="M236 172 L344 172 L344 280"
          fill="none"
          stroke={`url(#${green})`}
          strokeWidth="44"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <circle cx="150" cy="362" r="14" fill="#0d1117" stroke={`url(#${green})`} strokeWidth="10" />
    </svg>
  );
}
