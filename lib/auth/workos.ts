import { WorkOS } from 'workos';

export const workos = process.env.WORKOS_API_KEY
  ? new WorkOS(process.env.WORKOS_API_KEY)
  : null;

export function getWorkOSRedirectUri() {
  return process.env.SSO_REDIRECT_URI || `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;
}
