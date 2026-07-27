interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-16 max-w-3xl border-t border-[var(--border)] pt-6">
      <span className="eyebrow">
        {eyebrow}
      </span>

      <h2 className="mt-4 max-w-2xl text-4xl leading-[1.02] md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-soft)] md:text-lg">
        {description}
      </p>
    </div>
  );
}
