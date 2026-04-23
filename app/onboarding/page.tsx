import { redirect } from 'next/navigation';
import { prisma } from '@/lib/db/prisma';
import { requireSession } from '@/lib/multitenant/guards';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

async function completeOnboarding(formData: FormData) {
  'use server';
  const session = await requireSession();
  const city = String(formData.get('city') || '');
  const bio = String(formData.get('bio') || '');

  await prisma.playerProfile.update({
    where: { userId: session.userId },
    data: {
      city,
      bio,
      onboardingCompleted: true
    }
  });

  redirect('/app');
}

export default function OnboardingPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-6 px-6">
      <h1 className="text-3xl font-semibold">Finalisez votre profil sportif</h1>
      <form action={completeOnboarding} className="space-y-4 rounded-2xl border border-white/10 p-6">
        <Input name="city" placeholder="Ville" required />
        <textarea name="bio" placeholder="Bio sportive" className="min-h-24 w-full rounded-xl border border-white/20 bg-transparent p-3" />
        <Button type="submit">Terminer l&apos;onboarding</Button>
      </form>
    </main>
  );
}
