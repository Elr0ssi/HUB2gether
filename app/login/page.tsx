import { prisma } from '@/lib/db/prisma';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

async function getDemoCompanies() {
  return prisma.company.findMany({ take: 3, select: { name: true, slug: true, domain: true } });
}

export default async function LoginPage() {
  const companies = await getDemoCompanies();
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-6 px-6">
      <h1 className="text-3xl font-semibold">Connexion entreprise</h1>
      <p className="text-muted">Entrez votre domaine ou slug d&apos;organisation pour lancer le SSO (OIDC/SAML via WorkOS).</p>
      <form action="/api/auth/login" method="POST" className="space-y-4 rounded-2xl border border-white/10 p-6">
        <Input name="identifier" placeholder="acme.com ou acme" required />
        <Button className="w-full" type="submit">Continuer avec SSO</Button>
      </form>
      <div className="rounded-2xl border border-white/10 p-4 text-sm text-muted">
        <p className="mb-2 text-white">Entreprises de démonstration</p>
        <ul className="space-y-1">
          {companies.map((company) => (
            <li key={company.slug}>{company.name} — {company.slug} ({company.domain})</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
