import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva('inline-flex items-center justify-center rounded-xl text-sm font-medium transition', {
  variants: {
    variant: {
      default: 'bg-primary text-white hover:opacity-90',
      ghost: 'bg-transparent hover:bg-white/10',
      outline: 'border border-white/20 hover:bg-white/10'
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-8 px-3',
      lg: 'h-11 px-6'
    }
  },
  defaultVariants: { variant: 'default', size: 'default' }
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
