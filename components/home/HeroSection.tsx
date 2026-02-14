import Button from "../ui/Button";
import Container from "../ui/Container";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-40 text-center">


      <Container className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Engineering Without Excuses.
          </h1>

        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          DevGov builds production-grade systems with transparency,
          governance, and measurable delivery.
          <br />
          No chaos. No ghosting. No surprises.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button>Start Your Project</Button>
          <Button variant="secondary">
            See How We Work
          </Button>
        </div>
      </Container>
    </section>
  );
}