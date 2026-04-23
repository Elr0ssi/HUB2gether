import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';
import { createSession } from '@/lib/auth/session';
import { getWorkOSClient, getWorkOSRedirectUri } from '@/lib/auth/workos';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const mock = url.searchParams.get('mock');

  let email = '';
  let companySlug = '';
  const workos = await getWorkOSClient();

  if (mock === '1') {
    email = String(url.searchParams.get('email'));
    companySlug = String(url.searchParams.get('company'));
  } else if (workos && process.env.WORKOS_CLIENT_ID && code) {
    const authResult = await workos.userManagement.authenticateWithCode({
      clientId: process.env.WORKOS_CLIENT_ID,
      code,
      redirectUri: getWorkOSRedirectUri()
    });
    email = authResult.user.email;
    companySlug = String(url.searchParams.get('state') || authResult.organizationId || '');
  }

  const domain = email.split('@')[1]?.toLowerCase();
  const company = await prisma.company.findFirst({
    where: {
      OR: [{ slug: companySlug }, { domain }]
    }
  });

  if (!company) return NextResponse.redirect(new URL('/login?error=company', request.url));

  const [firstName = 'User', lastName = ''] = email.split('@')[0].split('.');

  const user = await prisma.user.upsert({
    where: { companyId_email: { companyId: company.id, email } },
    update: { isActive: true },
    create: {
      companyId: company.id,
      email,
      firstName: firstName[0]?.toUpperCase() + firstName.slice(1),
      lastName: lastName[0]?.toUpperCase() + lastName.slice(1),
      role: 'player',
      profile: { create: {} }
    },
    include: { profile: true }
  });

  await createSession({ userId: user.id, companyId: company.id, role: user.role });

  const nextUrl = user.profile?.onboardingCompleted ? '/app' : '/onboarding';
  return NextResponse.redirect(new URL(nextUrl, request.url));
}
