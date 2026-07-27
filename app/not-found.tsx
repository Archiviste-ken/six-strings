import Container from "@/src/components/ui/Container";
import Button from "@/src/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center">
      <Container className="text-center">
        <span className="eyebrow">Error</span>

        <p className="mt-6 font-heading text-[clamp(6rem,18vw,14rem)] font-medium leading-none text-[var(--foreground)]">
          404
        </p>

        <h2 className="mt-4 font-heading text-[clamp(1.4rem,3vw,2.2rem)] font-medium text-[var(--foreground)]">
          Lost in the Noise
        </h2>

        <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-10">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </main>
  );
}