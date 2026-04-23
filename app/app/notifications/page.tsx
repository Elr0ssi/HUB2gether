import { prisma } from '@/lib/db/prisma';
import { requireSession } from '@/lib/multitenant/guards';
import { Card } from '@/components/ui/card';

export default async function NotificationsPage() {
  const session = await requireSession();
  const notifications = await prisma.notification.findMany({ where: { userId: session.userId }, orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <h1 className="mb-4 text-3xl font-semibold">Notifications</h1>
      <Card className="p-4 space-y-3">
        {notifications.length === 0 && <p className="text-muted">Aucune notification.</p>}
        {notifications.map((n) => <p key={n.id}><b>{n.title}</b> — {n.body}</p>)}
      </Card>
    </div>
  );
}
