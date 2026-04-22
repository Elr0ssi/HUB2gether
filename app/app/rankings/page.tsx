import { prisma } from '@/lib/db/prisma';
import { requireSession } from '@/lib/multitenant/guards';
import { Card } from '@/components/ui/card';

export default async function RankingsPage() {
  const session = await requireSession();
  const users = await prisma.user.findMany({
    where: { companyId: session.companyId },
    include: { profile: true },
    orderBy: { profile: { rankingPoints: 'desc' } },
    take: 20
  });

  return (
    <div>
      <h1 className="mb-4 text-3xl font-semibold">Classements entreprise</h1>
      <Card className="p-4">
        {users.map((u, idx) => <p key={u.id}>{idx + 1}. {u.firstName} {u.lastName} — {u.profile?.rankingPoints ?? 1000} pts</p>)}
      </Card>
    </div>
  );
}
