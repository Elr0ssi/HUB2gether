import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth/session';

export async function requireSession() {
  const session = await getSession();
  if (!session) redirect('/login');
  return session;
}

export async function requireAdmin() {
  const session = await requireSession();
  if (!['company_admin', 'super_admin'].includes(session.role)) {
    redirect('/app');
  }
  return session;
}
