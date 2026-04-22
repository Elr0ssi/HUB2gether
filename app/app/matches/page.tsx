import Link from 'next/link';
import { prisma } from '@/lib/db/prisma';
import { requireSession } from '@/lib/multitenant/guards';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { createMatch, joinMatch } from '@/lib/actions/match-actions';

export default async function MatchesPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const session = await requireSession();
  const params = await searchParams;
  const sportId = typeof params.sportId === 'string' ? params.sportId : undefined;
  const mindset = typeof params.mindset === 'string' ? params.mindset : undefined;

  const [matches, sports] = await Promise.all([
    prisma.match.findMany({
      where: {
        companyId: session.companyId,
        ...(sportId ? { sportId } : {}),
        ...(mindset ? { mindset: mindset as 'competitive' | 'casual' | 'discovery' } : {})
      },
      include: { sport: true, participants: true },
      orderBy: { startAt: 'asc' }
    }),
    prisma.sport.findMany({ where: { isActive: true } })
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Matchmaking</h1>
      <Card className="p-4">
        <form className="grid gap-2 md:grid-cols-4" method="GET">
          <select name="sportId" className="rounded-xl border border-white/20 bg-transparent px-3">
            <option value="">Tous les sports</option>
            {sports.map((sport) => <option key={sport.id} value={sport.id}>{sport.name}</option>)}
          </select>
          <select name="mindset" className="rounded-xl border border-white/20 bg-transparent px-3">
            <option value="">Tous mindsets</option>
            <option value="competitive">Competitive</option>
            <option value="casual">Casual</option>
            <option value="discovery">Discovery</option>
          </select>
          <Button variant="outline" type="submit">Filtrer</Button>
        </form>
      </Card>
      <Card className="p-4">
        <h2 className="mb-3 text-lg">Créer un match</h2>
        <form action={createMatch} className="grid gap-3 md:grid-cols-2">
          <Input name="title" placeholder="Titre" required />
          <select name="sportId" required className="rounded-xl border border-white/20 bg-transparent px-3">{sports.map((sport) => <option key={sport.id} value={sport.id}>{sport.name}</option>)}</select>
          <select name="mindset" required className="rounded-xl border border-white/20 bg-transparent px-3"><option value="casual">Casual</option><option value="competitive">Competitive</option><option value="discovery">Discovery</option></select>
          <Input name="locationName" placeholder="Lieu" required />
          <Input name="startAt" type="datetime-local" required />
          <Input name="endAt" type="datetime-local" required />
          <Input name="maxPlayers" type="number" min={2} max={50} required />
          <Button className="w-fit" type="submit">Publier</Button>
        </form>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        {matches.map((match) => (
          <Card key={match.id} className="space-y-2 p-4">
            <Link href={`/app/matches/${match.id}`} className="text-xl font-medium">{match.title}</Link>
            <p className="text-sm text-muted">{match.sport.name} · {match.mindset} · {new Date(match.startAt).toLocaleString('fr-FR')}</p>
            <p className="text-sm text-muted">{match.participants.length}/{match.maxPlayers} joueurs</p>
            <form action={async () => { 'use server'; await joinMatch(match.id); }}><Button size="sm">Rejoindre</Button></form>
          </Card>
        ))}
      </div>
    </div>
  );
}
