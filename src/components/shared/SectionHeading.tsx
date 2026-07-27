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
    <div className="mb-14 max-w-2xl">
      <span className="text-sm font-medium uppercase tracking-[0.25em] text-red-500">
        {eyebrow}
      </span>

      <h2 className="mt-4 text-4xl font-bold tracking-tight">
        {title}
      </h2>

      <p className="mt-4 text-lg leading-8 text-zinc-400">
        {description}
      </p>
    </div>
  );
}