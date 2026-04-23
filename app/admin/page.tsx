import { prisma } from '@/lib/db/prisma';
import { requireAdmin } from '@/lib/multitenant/guards';
import { Card } from '@/components/ui/card';

export default async function AdminDashboardPage() {
  const session = await requireAdmin();
  const [users, groups, matches, recentAudit] = await Promise.all([
    prisma.user.count({ where: { companyId: session.companyId, isActive: true } }),
    prisma.group.count({ where: { companyId: session.companyId } }),
    prisma.match.count({ where: { companyId: session.companyId } }),
    prisma.adminAuditLog.findMany({ where: { companyId: session.companyId }, orderBy: { createdAt: 'desc' }, take: 5 })
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Dashboard entreprise</h1>
      <section className="grid gap-4 md:grid-cols-3">
        <Card className="p-4"><p>Salariés actifs</p><p className="text-3xl font-semibold">{users}</p></Card>
        <Card className="p-4"><p>Groupes</p><p className="text-3xl font-semibold">{groups}</p></Card>
        <Card className="p-4"><p>Matchs créés</p><p className="text-3xl font-semibold">{matches}</p></Card>
      </section>
      <Card className="p-4"><h2 className="mb-2">Activité récente</h2>{recentAudit.map((log) => <p key={log.id}>{log.action} sur {log.entityType}</p>)}</Card>
    </div>
  );
}
