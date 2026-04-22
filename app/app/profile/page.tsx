import { prisma } from '@/lib/db/prisma';
import { requireSession } from '@/lib/multitenant/guards';
import { Card } from '@/components/ui/card';

export default async function ProfilePage() {
  const session = await requireSession();
  const user = await prisma.user.findFirst({ where: { id: session.userId, companyId: session.companyId }, include: { profile: true, userSports: { include: { sport: true } } } });
  if (!user) return null;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Profil</h1>
      <Card className="p-4"><p>{user.firstName} {user.lastName}</p><p className="text-muted">{user.email}</p></Card>
      <Card className="p-4"><h2 className="mb-2">Sports pratiqués</h2>{user.userSports.map((s) => <p key={s.id}>{s.sport.icon} {s.sport.name} — niveau {s.level}</p>)}</Card>
    </div>
  );
}
