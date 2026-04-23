import Link from 'next/link';

const links = [
  ['Tableau de bord', '/app'],
  ['Profil', '/app/profile'],
  ['Groupes', '/app/groups'],
  ['Matchs', '/app/matches'],
  ['Classements', '/app/rankings'],
  ['Dépenses', '/app/expenses'],
  ['Notifications', '/app/notifications']
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen md:grid-cols-[240px_1fr]">
      <aside className="border-r border-white/10 bg-[#090d1c] p-4">
        <p className="mb-6 text-xl font-semibold">Hub2gether</p>
        <nav className="space-y-1">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-white/10 hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="p-6">{children}</div>
    </div>
  );
}
