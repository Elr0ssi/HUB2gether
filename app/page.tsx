import Link from 'next/link';

const highlights = [
  'SSO entreprise OIDC/SAML',
  'Matchmaking multi-tenant sécurisé',
  'Dashboard analytics RH & sport',
  'Gamification et classements'
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0D1226] to-background">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
        <span className="w-fit rounded-full border border-primary/40 bg-primary/20 px-4 py-1 text-sm">Hub2gether for Enterprise Sports</span>
        <h1 className="max-w-4xl text-5xl font-semibold leading-tight">Activez la cohésion d&apos;entreprise avec une plateforme sport premium.</h1>
        <p className="max-w-2xl text-lg text-muted">Hub2gether connecte vos collaborateurs via des groupes sportifs, des matchs et un suivi d&apos;engagement consolidé pour les équipes RH et Office Management.</p>
        <div className="flex gap-4">
          <Link href="/login" className="rounded-xl bg-primary px-6 py-3 font-medium hover:opacity-90">Se connecter avec SSO</Link>
          <Link href="/app" className="rounded-xl border border-white/20 px-6 py-3 font-medium">Voir la démo</Link>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-24 md:grid-cols-2">
        {highlights.map((item) => (
          <article key={item} className="card p-6">
            <p className="text-lg font-medium">{item}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
