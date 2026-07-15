const ADMIN_API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL;

export function getAdminApiUrl() {
  return ADMIN_API_URL;
}

/**
 * Fetches from the admin's public API. Returns null if the admin URL isn't
 * configured, the request fails, or the response isn't ok — callers should
 * fall back to static content in that case so the site never breaks.
 */
export async function fetchPublicRaw<T>(path: string, revalidate = 60): Promise<T | null> {
  if (!ADMIN_API_URL) return null;

  try {
    const res = await fetch(`${ADMIN_API_URL}/api/public${path}`, {
      next: { revalidate },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}
