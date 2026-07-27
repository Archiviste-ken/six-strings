import Container from "@/src/components/ui/Container";
import type { Band } from "@/src/types/band";

interface BandInfoProps {
  band: Band;
}

export default function BandInfo({ band }: BandInfoProps) {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold">
            About the Band
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            {band.history}
          </p>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold">
              Original Members
            </h3>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {band.members.map((member) => (
                <li
                  key={member}
                  className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
                >
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}