// Single source of truth for site-wide constants.

/** Canonical GitHub repository for Vector. Every GitHub link points here. */
export const REPO_URL = "https://github.com/YRACHEK101/Vector";

/** The npm package name. */
export const NPM_PACKAGE = "vector-migrate";

/** The package's page on npm. */
export const NPM_URL = "https://www.npmjs.com/package/vector-migrate";

/** The one-line install/run command shown in the hero and quick start. */
export const INSTALL_COMMAND = "npx vector-migrate";

export const SITE_NAME = "Vector";

export const TAGLINE =
  "Move your repos from Azure DevOps to GitHub — without losing your green squares.";

export const SITE_DESCRIPTION =
  "Vector (vector-migrate) is an interactive, zero-token CLI that migrates Git repositories from Azure DevOps to GitHub with full commit history — and restores your contribution graph.";

/** Shared props for any external link so we never forget the security attrs. */
export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
