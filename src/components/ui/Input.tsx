import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--text-muted)] transition-colors duration-200 focus:border-[var(--accent)] ${className}`}
      {...props}
    />
  );
}
