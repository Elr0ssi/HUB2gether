import { prisma } from '@/lib/db/prisma';
import { requireAdmin } from '@/lib/multitenant/guards';
import { Card } from '@/components/ui/card';

export default async function AdminAnalyticsPage() {
  const session = await requireAdmin();
  const topSports = await prisma.userSport.groupBy({
    by: ['sportId'],
    where: { user: { companyId: session.companyId } },
    _count: { sportId: true },
    orderBy: { _count: { sportId: 'desc' } },
    take: 3
  });
  const sportNames = await prisma.sport.findMany({ where: { id: { in: topSports.map((s) => s.sportId) } } });

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Analytics</h1>
      <Card className="p-4">
        {topSports.map((s) => {
          const name = sportNames.find((sp) => sp.id === s.sportId)?.name;
          return <p key={s.sportId}>{name} — {s._count.sportId} pratiquants</p>;
        })}
      </Card>
    </div>
  );
}
