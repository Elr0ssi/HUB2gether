export function getWorkOSRedirectUri() {
  return process.env.SSO_REDIRECT_URI || `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;
}

export function isWorkOSConfigured() {
  return Boolean(process.env.WORKOS_API_KEY && process.env.WORKOS_CLIENT_ID);
}

/**
 * Optional WorkOS SDK loader.
 * Uses runtime dynamic import to avoid build-time failures when the dependency
 * is not installed (e.g. restricted deploy environments).
 */
export async function getWorkOSClient() {
  if (!isWorkOSConfigured()) return null;

  try {
    const dynamicImport = new Function('m', 'return import(m)') as (m: string) => Promise<any>;
    const mod = await dynamicImport('workos');
    const WorkOS = mod?.WorkOS;
    if (!WorkOS) return null;
    return new WorkOS(process.env.WORKOS_API_KEY as string);
  } catch {
    return null;
  }
}
