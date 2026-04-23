import { prisma } from '@/lib/db/prisma';
import { requireSession } from '@/lib/multitenant/guards';
import { Card } from '@/components/ui/card';

export default async function GroupDetailPage({ params }: { params: Promise<{ groupId: string }> }) {
  const session = await requireSession();
  const { groupId } = await params;
  const group = await prisma.group.findFirst({
    where: { id: groupId, companyId: session.companyId },
    include: { posts: { include: { author: true }, orderBy: { createdAt: 'desc' } }, members: { include: { user: true } } }
  });

  if (!group) return <p>Groupe introuvable.</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">{group.name}</h1>
      <Card className="p-4"><h2 className="mb-2">Membres</h2>{group.members.map((m) => <p key={m.id}>{m.user.firstName} {m.user.lastName}</p>)}</Card>
      <Card className="p-4"><h2 className="mb-2">Fil de discussion</h2>{group.posts.map((post) => <p key={post.id}><b>{post.author.firstName}:</b> {post.content}</p>)}</Card>
    </div>
  );
}
