import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
  /** Empty by default — the wordmark text usually carries the name. */
  alt?: string;
  priority?: boolean;
};

/** Renders the canonical public/vector-logo.svg. */
export function Logo({ size = 32, className, alt = "", priority = false }: LogoProps) {
  return (
    <Image
      src="/vector-logo.svg"
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
