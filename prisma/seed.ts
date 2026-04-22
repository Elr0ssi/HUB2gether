import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.adminAuditLog.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.userBadge.deleteMany();
  await prisma.badge.deleteMany();
  await prisma.expenseShare.deleteMany();
  await prisma.expense.deleteMany();
  await prisma.matchParticipant.deleteMany();
  await prisma.match.deleteMany();
  await prisma.groupPost.deleteMany();
  await prisma.groupMember.deleteMany();
  await prisma.group.deleteMany();
  await prisma.userSport.deleteMany();
  await prisma.playerProfile.deleteMany();
  await prisma.user.deleteMany();
  await prisma.sport.deleteMany();
  await prisma.company.deleteMany();

  const [foot, running, padel] = await Promise.all([
    prisma.sport.create({ data: { name: 'Football', icon: '⚽' } }),
    prisma.sport.create({ data: { name: 'Running', icon: '🏃' } }),
    prisma.sport.create({ data: { name: 'Padel', icon: '🎾' } })
  ]);

  const companies = await Promise.all([
    prisma.company.create({ data: { name: 'Acme France', slug: 'acme', domain: 'acme.com' } }),
    prisma.company.create({ data: { name: 'Globex Europe', slug: 'globex', domain: 'globex.com' } })
  ]);

  const [acmeAdmin, acmePlayer, globexAdmin] = await Promise.all([
    prisma.user.create({
      data: {
        companyId: companies[0].id,
        email: 'admin@acme.com',
        firstName: 'Camille',
        lastName: 'Durand',
        role: Role.company_admin,
        department: 'People Ops',
        jobTitle: 'Head of People'
      }
    }),
    prisma.user.create({
      data: {
        companyId: companies[0].id,
        email: 'alex@acme.com',
        firstName: 'Alex',
        lastName: 'Martin',
        role: Role.player,
        department: 'Engineering',
        jobTitle: 'Software Engineer'
      }
    }),
    prisma.user.create({
      data: {
        companyId: companies[1].id,
        email: 'admin@globex.com',
        firstName: 'Lina',
        lastName: 'Moreau',
        role: Role.company_admin
      }
    })
  ]);

  await prisma.playerProfile.createMany({
    data: [
      { userId: acmeAdmin.id, city: 'Paris', levelGlobal: 4, matchesPlayed: 18, wins: 10, losses: 8, onboardingCompleted: true },
      { userId: acmePlayer.id, city: 'Lyon', levelGlobal: 3, matchesPlayed: 11, wins: 6, losses: 5, onboardingCompleted: true },
      { userId: globexAdmin.id, city: 'Bordeaux', levelGlobal: 2, matchesPlayed: 3, wins: 1, losses: 2, onboardingCompleted: true }
    ]
  });

  await prisma.userSport.createMany({
    data: [
      { userId: acmeAdmin.id, sportId: foot.id, level: 4, isFavorite: true },
      { userId: acmeAdmin.id, sportId: padel.id, level: 2 },
      { userId: acmePlayer.id, sportId: running.id, level: 4, isFavorite: true },
      { userId: acmePlayer.id, sportId: foot.id, level: 2 },
      { userId: globexAdmin.id, sportId: padel.id, level: 3, isFavorite: true }
    ]
  });

  const group = await prisma.group.create({
    data: {
      companyId: companies[0].id,
      name: 'Acme Football Club',
      slug: 'acme-football-club',
      description: 'Groupe interne pour les matchs du jeudi midi.',
      sportId: foot.id,
      createdById: acmeAdmin.id
    }
  });

  await prisma.groupMember.createMany({
    data: [
      { groupId: group.id, userId: acmeAdmin.id, role: 'admin' },
      { groupId: group.id, userId: acmePlayer.id, role: 'member' }
    ]
  });

  await prisma.groupPost.create({
    data: {
      groupId: group.id,
      authorId: acmeAdmin.id,
      content: 'Nouveau match vendredi 18h au Five !'
    }
  });

  const match = await prisma.match.create({
    data: {
      companyId: companies[0].id,
      groupId: group.id,
      sportId: foot.id,
      createdById: acmeAdmin.id,
      title: 'Five du vendredi',
      description: 'Match amical',
      mindset: 'casual',
      locationName: 'Le Five Paris 13',
      locationAddress: '1 Rue Example, Paris',
      startAt: new Date('2026-05-02T18:00:00.000Z'),
      endAt: new Date('2026-05-02T19:30:00.000Z'),
      maxPlayers: 10
    }
  });

  await prisma.matchParticipant.createMany({
    data: [
      { matchId: match.id, userId: acmeAdmin.id, status: 'joined' },
      { matchId: match.id, userId: acmePlayer.id, status: 'joined' }
    ]
  });

  const expense = await prisma.expense.create({
    data: {
      matchId: match.id,
      paidById: acmeAdmin.id,
      label: 'Terrain',
      amount: 80,
      currency: 'EUR'
    }
  });

  await prisma.expenseShare.createMany({
    data: [
      { expenseId: expense.id, userId: acmeAdmin.id, amountDue: 40, amountPaid: 40, status: 'settled' },
      { expenseId: expense.id, userId: acmePlayer.id, amountDue: 40, amountPaid: 0, status: 'pending' }
    ]
  });

  const badge = await prisma.badge.create({
    data: { code: 'first_match', name: 'Premier Match', description: 'A participé à son premier match', icon: '🏅' }
  });

  await prisma.userBadge.createMany({
    data: [
      { userId: acmeAdmin.id, badgeId: badge.id },
      { userId: acmePlayer.id, badgeId: badge.id }
    ]
  });

  await prisma.notification.createMany({
    data: [
      { userId: acmePlayer.id, type: 'match', title: 'Participation confirmée', body: 'Vous avez rejoint Five du vendredi.' },
      { userId: acmeAdmin.id, type: 'expense', title: 'Dépense partagée', body: 'Les frais du terrain ont été répartis.' }
    ]
  });

  await prisma.adminAuditLog.create({
    data: {
      companyId: companies[0].id,
      actorUserId: acmeAdmin.id,
      action: 'MATCH_CREATED',
      entityType: 'Match',
      entityId: match.id,
      metadata: { source: 'seed' }
    }
  });
}

main().finally(async () => {
  await prisma.$disconnect();
});
