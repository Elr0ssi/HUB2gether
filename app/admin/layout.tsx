import Link from 'next/link';
import { requireAdmin } from '@/lib/multitenant/guards';

const links = [
  ['Dashboard', '/admin'],
  ['Users', '/admin/users'],
  ['Groups', '/admin/groups'],
  ['Matches', '/admin/matches'],
  ['Analytics', '/admin/analytics'],
  ['Settings', '/admin/settings']
] as const;

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  return (
    <div className="grid min-h-screen md:grid-cols-[220px_1fr]">
      <aside className="border-r border-white/10 p-4">
        <h2 className="mb-4 text-xl font-semibold">Admin Hub</h2>
        {links.map(([label, href]) => <Link key={href} className="block rounded-lg px-3 py-2 hover:bg-white/10" href={href}>{label}</Link>)}
      </aside>
      <main className="p-6">{children}</main>
    </div>
  );
}
