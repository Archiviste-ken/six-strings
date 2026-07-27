interface MuseumHallProps {
  hall: string;
  title: string;
  subtitle?: string;
}

export default function MuseumHall({
  hall,
  title,
  subtitle,
}: MuseumHallProps) {
  return (
    <div className="mb-20">
      <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[var(--accent)]">
        {hall}
      </p>

      <h2 className="max-w-4xl font-heading text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}