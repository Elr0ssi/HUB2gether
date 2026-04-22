import { cn } from '@/lib/utils';

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn('h-10 w-full rounded-xl border border-white/20 bg-transparent px-3 text-sm outline-none focus:border-primary', className)} {...props} />;
}
