import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">WealthBuilder</div>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#features"
            className="text-dark hover:text-primary transition"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-dark hover:text-primary transition"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-dark hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
