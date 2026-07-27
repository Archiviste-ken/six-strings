import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const styles =
    variant === 'accent'
      ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--foreground)]'
      : 'border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-muted)]';

  return (
    <span
      className={`inline-flex items-center border px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] ${styles}`}
    >
      {children}
    </span>
  );
}
