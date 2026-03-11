'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg',
          {
            'bg-blue-900 text-white hover:bg-blue-950 focus:ring-blue-700': variant === 'primary',
            'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-600': variant === 'secondary',
            'border-2 border-slate-400 text-slate-700 hover:bg-slate-100 focus:ring-slate-500': variant === 'outline',
            'text-slate-700 hover:bg-slate-100 focus:ring-slate-400': variant === 'ghost',
            'bg-amber-100 text-amber-800 hover:bg-amber-200 focus:ring-amber-400': variant === 'danger',
          },
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-5 py-2.5 text-base': size === 'md',
            'px-8 py-3.5 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
