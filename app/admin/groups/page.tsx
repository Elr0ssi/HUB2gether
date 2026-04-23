import { prisma } from '@/lib/db/prisma';
import { requireAdmin } from '@/lib/multitenant/guards';

export default async function AdminGroupsPage() {
  const session = await requireAdmin();
  const groups = await prisma.group.findMany({ where: { companyId: session.companyId }, include: { _count: { select: { members: true } } } });
  return <div><h1 className="mb-4 text-2xl font-semibold">Groupes</h1>{groups.map((g) => <p key={g.id}>{g.name} — {g._count.members} membres</p>)}</div>;
}
