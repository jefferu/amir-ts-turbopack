/**
 * Resolves static asset paths taking the production basePath into account.
 *
 * Next.js static exports (`output: 'export'`) with `unoptimized: true` do not automatically
 * prefix basePath to string-based Image src attributes. This utility guarantees assets resolve
 * correctly both in local development (root domain) and on GitHub Pages (subpath /amir-ts-turbopack).
 *
 * @param path - Absolute path from public root (e.g. "/images/amir/logo.png")
 * @returns Fully qualified path prefixed with basePath if configured
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}
