import { prisma } from '@/lib/db/prisma';
import { requireAdmin } from '@/lib/multitenant/guards';

export default async function AdminUsersPage() {
  const session = await requireAdmin();
  const users = await prisma.user.findMany({ where: { companyId: session.companyId }, orderBy: { createdAt: 'desc' } });
  return <div><h1 className="mb-4 text-2xl font-semibold">Utilisateurs</h1>{users.map((u) => <p key={u.id}>{u.firstName} {u.lastName} — {u.role}</p>)}</div>;
}
