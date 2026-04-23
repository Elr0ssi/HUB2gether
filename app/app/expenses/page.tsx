import { prisma } from '@/lib/db/prisma';
import { requireSession } from '@/lib/multitenant/guards';
import { Card } from '@/components/ui/card';

export default async function ExpensesPage() {
  const session = await requireSession();
  const expenses = await prisma.expenseShare.findMany({
    where: { userId: session.userId, expense: { match: { companyId: session.companyId } } },
    include: { expense: { include: { match: true } } }
  });

  return (
    <div>
      <h1 className="mb-4 text-3xl font-semibold">Dépenses</h1>
      <Card className="p-4 space-y-2">
        {expenses.map((share) => (
          <p key={share.id}>{share.expense.match.title} — dû: {share.amountDue.toString()} {share.expense.currency} — payé: {share.amountPaid.toString()} ({share.status})</p>
        ))}
      </Card>
    </div>
  );
}
