# Hub2gether – SaaS B2B sport multi-tenant

Hub2gether est une base MVP production-ready en **Next.js 15 + App Router**, **TypeScript**, **Tailwind**, **Prisma/PostgreSQL** avec une authentification SSO entreprise (WorkOS OIDC/SAML), isolation multi-tenant stricte et dashboards joueur/admin.

## Stack
- Next.js 15 (App Router)
- TypeScript strict
- Tailwind CSS + composants UI type shadcn
- Prisma ORM + PostgreSQL
- WorkOS (OIDC/SAML) avec fallback mock local (SDK optionnel)
- Compatible Vercel

## Fonctionnalités MVP
- Landing premium + login SSO entreprise par domaine/slug
- Provisioning utilisateur automatique à la première connexion
- Gestion rôles: `super_admin`, `company_admin`, `group_admin`, `player`
- Isolation multi-tenant par `companyId` sur toutes les requêtes métier
- Onboarding joueur
- Dashboard joueur (stats, historique, badges)
- Groupes (liste, création, adhésion, détail + posts)
- Matchmaking (liste, filtres, création, participation, détail)
- Dépenses (lecture des parts à payer)
- Notifications in-app
- Dashboard admin + pages users/groups/matches/analytics/settings
- Journal d'audit admin

## Démarrage local
```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate -- --name init
npm run prisma:seed
npm run dev
```

## Variables d'environnement
Voir `.env.example`.

## Auth SSO entreprise
- En prod: renseigner `WORKOS_API_KEY`, `WORKOS_CLIENT_ID`, `SSO_REDIRECT_URI`
- Le SDK WorkOS est chargé dynamiquement (optionnel) pour éviter les erreurs de build si le package n'est pas installé.
- Endpoint login: `/api/auth/login`
- Endpoint callback: `/api/auth/callback`
- Endpoint logout: `/api/auth/logout`
- En local sans WorkOS: fallback `mock=1` pour tester le provisioning automatiquement.

## Seed de démonstration
Le seed crée:
- 2 entreprises (`acme`, `globex`)
- utilisateurs admins/joueurs
- sports, groupes, posts
- matchs, participants
- dépenses et répartitions
- badges, notifications, audit log

## Déploiement Vercel
1. Créer base PostgreSQL managée (Neon/Supabase/RDS)
2. Configurer variables d'env dans Vercel
3. Lancer migration Prisma en CI/CD
4. Déployer

## Roadmap v2
1. Chat temps réel (WebSockets / Pusher)
2. Réseau inter-entreprises (matches cross-company sous consentement)
3. Module tournois (brackets + saisons)
4. Recommandation intelligente de matchs (ML scoring)
5. Import RH/SCIM provisioning automatique
6. Analytics avancées (cohortes, rétention, ROI bien-être)
