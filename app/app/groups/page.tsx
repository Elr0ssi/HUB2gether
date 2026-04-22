import Link from 'next/link';
import { prisma } from '@/lib/db/prisma';
import { requireSession } from '@/lib/multitenant/guards';
import { createGroup, joinGroup } from '@/lib/actions/group-actions';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default async function GroupsPage() {
  const session = await requireSession();
  const [groups, sports] = await Promise.all([
    prisma.group.findMany({ where: { companyId: session.companyId }, include: { _count: { select: { members: true } }, sport: true } }),
    prisma.sport.findMany({ where: { isActive: true } })
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Groupes</h1>
      <Card className="p-4">
        <h2 className="mb-4 text-lg">Créer un groupe</h2>
        <form action={createGroup} className="grid gap-3 md:grid-cols-2">
          <Input name="name" placeholder="Nom du groupe" required />
          <select name="sportId" className="rounded-xl border border-white/20 bg-transparent px-3">
            <option value="">Sport libre</option>
            {sports.map((sport) => <option key={sport.id} value={sport.id}>{sport.name}</option>)}
          </select>
          <textarea name="description" className="md:col-span-2 min-h-20 rounded-xl border border-white/20 bg-transparent p-3" required />
          <Button className="w-fit" type="submit">Créer</Button>
        </form>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <Card key={group.id} className="space-y-3 p-4">
            <Link href={`/app/groups/${group.id}`} className="text-xl font-medium">{group.name}</Link>
            <p className="text-sm text-muted">{group.description}</p>
            <p className="text-sm text-muted">{group._count.members} membres</p>
            <form action={async () => { 'use server'; await joinGroup(group.id); }}>
              <Button size="sm">Rejoindre</Button>
            </form>
          </Card>
        ))}
      </div>
    </div>
  );
}
