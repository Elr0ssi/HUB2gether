import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';
import { workos, getWorkOSRedirectUri } from '@/lib/auth/workos';

export async function POST(request: Request) {
  const formData = await request.formData();
  const identifier = String(formData.get('identifier') || '').trim().toLowerCase();
  const company = await prisma.company.findFirst({
    where: { OR: [{ slug: identifier }, { domain: identifier }] }
  });

  if (!company) {
    return NextResponse.redirect(new URL('/login?error=company_not_found', request.url));
  }

  if (workos && process.env.WORKOS_CLIENT_ID) {
    const authorizationUrl = workos.userManagement.getAuthorizationUrl({
      clientId: process.env.WORKOS_CLIENT_ID,
      redirectUri: getWorkOSRedirectUri(),
      provider: 'authkit',
      state: company.slug,
      loginHint: `@${company.domain}`
    });
    return NextResponse.redirect(authorizationUrl);
  }

  return NextResponse.redirect(new URL(`/api/auth/callback?mock=1&company=${company.slug}&email=admin@${company.domain}`, request.url));
}
