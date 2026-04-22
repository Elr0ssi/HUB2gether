import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hub2gether',
  description: 'SaaS sport B2B multi-tenant pour les entreprises'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
