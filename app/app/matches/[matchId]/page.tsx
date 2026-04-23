import { prisma } from '@/lib/db/prisma';
import { requireSession } from '@/lib/multitenant/guards';
import { Card } from '@/components/ui/card';

export default async function MatchDetailPage({ params }: { params: Promise<{ matchId: string }> }) {
  const session = await requireSession();
  const { matchId } = await params;

  const match = await prisma.match.findFirst({
    where: { id: matchId, companyId: session.companyId },
    include: { sport: true, participants: { include: { user: true } }, expenses: { include: { shares: { include: { user: true } } } } }
  });

  if (!match) return <p>Match introuvable.</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">{match.title}</h1>
      <Card className="p-4"><p>{match.sport.name} · {match.mindset} · {match.locationName}</p></Card>
      <Card className="p-4"><h2 className="mb-2">Participants</h2>{match.participants.map((p) => <p key={p.id}>{p.user.firstName} {p.user.lastName} - {p.status}</p>)}</Card>
      <Card className="p-4"><h2 className="mb-2">Dépenses</h2>{match.expenses.map((e) => <p key={e.id}>{e.label} {e.amount.toString()} {e.currency}</p>)}</Card>
    </div>
  );
}
