import Container from "@/src/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
        <p>© 2026 Six Strings. All rights reserved.</p>

        <p>Built with code. Powered by riffs. 🤘</p>
      </Container>
    </footer>
  );
}