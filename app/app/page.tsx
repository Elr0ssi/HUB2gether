import { Card } from '@/components/ui/card';
import { prisma } from '@/lib/db/prisma';
import { requireSession } from '@/lib/multitenant/guards';

export default async function PlayerDashboardPage() {
  const session = await requireSession();
  const [profile, badges, matches] = await Promise.all([
    prisma.playerProfile.findUnique({ where: { userId: session.userId } }),
    prisma.userBadge.findMany({ where: { userId: session.userId }, include: { badge: true } }),
    prisma.matchParticipant.findMany({
      where: { userId: session.userId },
      include: { match: { include: { sport: true } } },
      orderBy: { createdAt: 'desc' },
      take: 5
    })
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Dashboard joueur</h1>
      <section className="grid gap-4 md:grid-cols-3">
        <Card className="p-4"><p className="text-muted">Matchs joués</p><p className="text-3xl font-semibold">{profile?.matchesPlayed ?? 0}</p></Card>
        <Card className="p-4"><p className="text-muted">Victoires</p><p className="text-3xl font-semibold">{profile?.wins ?? 0}</p></Card>
        <Card className="p-4"><p className="text-muted">Points ranking</p><p className="text-3xl font-semibold">{profile?.rankingPoints ?? 1000}</p></Card>
      </section>
      <Card className="p-4">
        <h2 className="mb-3 text-xl font-medium">Historique récent</h2>
        <ul className="space-y-2 text-sm text-muted">
          {matches.map((entry) => (
            <li key={entry.id}>{entry.match.title} — {entry.match.sport.name} — {new Date(entry.match.startAt).toLocaleString('fr-FR')}</li>
          ))}
        </ul>
      </Card>
      <Card className="p-4">
        <h2 className="mb-3 text-xl font-medium">Badges</h2>
        <div className="flex flex-wrap gap-3">
          {badges.map((ub) => <span key={ub.id} className="rounded-full bg-primary/20 px-3 py-1 text-sm">{ub.badge.icon} {ub.badge.name}</span>)}
        </div>
      </Card>
    </div>
  );
}
