'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db/prisma';
import { requireSession } from '@/lib/multitenant/guards';
import { createMatchSchema } from '@/lib/validation/match';

export async function createMatch(formData: FormData) {
  const session = await requireSession();
  const parsed = createMatchSchema.parse({
    title: formData.get('title'),
    sportId: formData.get('sportId'),
    mindset: formData.get('mindset'),
    locationName: formData.get('locationName'),
    startAt: formData.get('startAt'),
    endAt: formData.get('endAt'),
    maxPlayers: formData.get('maxPlayers')
  });

  await prisma.match.create({
    data: {
      companyId: session.companyId,
      createdById: session.userId,
      sportId: parsed.sportId,
      title: parsed.title,
      description: 'Match organisé via Hub2gether',
      mindset: parsed.mindset,
      locationName: parsed.locationName,
      locationAddress: parsed.locationName,
      startAt: new Date(parsed.startAt),
      endAt: new Date(parsed.endAt),
      maxPlayers: parsed.maxPlayers,
      visibility: 'company',
      status: 'open'
    }
  });

  revalidatePath('/app/matches');
}

export async function joinMatch(matchId: string) {
  const session = await requireSession();
  const match = await prisma.match.findFirst({ where: { id: matchId, companyId: session.companyId } });
  if (!match) throw new Error('Match inaccessible');

  await prisma.matchParticipant.upsert({
    where: { matchId_userId: { matchId, userId: session.userId } },
    update: { status: 'joined' },
    create: { matchId, userId: session.userId, status: 'joined' }
  });

  revalidatePath('/app/matches');
}
