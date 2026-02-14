import Link from "next/link";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <nav className="py-6">
      <Container className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          DevGov
        </Link>

        <div className="space-x-6 hidden md:block">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </Container>
    </nav>
  );
}