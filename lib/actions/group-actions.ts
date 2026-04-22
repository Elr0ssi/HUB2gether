'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db/prisma';
import { requireSession } from '@/lib/multitenant/guards';
import { createGroupSchema } from '@/lib/validation/group';

export async function createGroup(formData: FormData) {
  const session = await requireSession();
  const parsed = createGroupSchema.parse({
    name: formData.get('name'),
    description: formData.get('description'),
    sportId: formData.get('sportId') || undefined
  });

  await prisma.group.create({
    data: {
      companyId: session.companyId,
      createdById: session.userId,
      name: parsed.name,
      slug: parsed.name.toLowerCase().replace(/\s+/g, '-'),
      description: parsed.description,
      sportId: parsed.sportId,
      visibility: 'company'
    }
  });

  revalidatePath('/app/groups');
}

export async function joinGroup(groupId: string) {
  const session = await requireSession();
  const group = await prisma.group.findFirst({ where: { id: groupId, companyId: session.companyId } });
  if (!group) throw new Error('Group not found');

  await prisma.groupMember.upsert({
    where: { groupId_userId: { groupId, userId: session.userId } },
    update: {},
    create: { groupId, userId: session.userId, role: 'member' }
  });

  revalidatePath('/app/groups');
}
