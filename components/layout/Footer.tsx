import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/10 mt-32">
      <Container>
        <p className="text-white/60">
          © {new Date().getFullYear()} DevGov. Engineering Without Excuses.
        </p>
      </Container>
    </footer>
  );
}