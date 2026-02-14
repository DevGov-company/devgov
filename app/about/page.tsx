import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <section className="py-32">
      <Container>
        <h1 className="text-5xl font-bold mb-10">
          We Treat Code Like Infrastructure.
        </h1>

        <div className="text-lg text-white/70 max-w-3xl space-y-6">
          <p>
            DevGov was founded on a simple belief:
          </p>

          <p className="text-xl font-semibold text-white">
            If software runs businesses, it deserves governance.
          </p>

          <p>
            We combine startup velocity with enterprise discipline.
            We don’t just “deliver.”
            We design systems that survive growth.
          </p>
        </div>
      </Container>
    </section>
  );
}