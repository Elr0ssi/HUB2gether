import { prisma } from '@/lib/db/prisma';
import { requireAdmin } from '@/lib/multitenant/guards';

export default async function AdminMatchesPage() {
  const session = await requireAdmin();
  const matches = await prisma.match.findMany({ where: { companyId: session.companyId }, include: { sport: true } });
  return <div><h1 className="mb-4 text-2xl font-semibold">Matchs</h1>{matches.map((m) => <p key={m.id}>{m.title} — {m.sport.name} — {m.status}</p>)}</div>;
}
