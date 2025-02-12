import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import LinkedIn and Email icons

export default function Navbar() {
  return (
    <nav className="bg-matrix-gray p-4 border-b border-matrix-green">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Hammad Nawaz
        </a>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

// Reusable NavLink Component with Upward Text Animation
function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="relative inline-block text-lg font-bold text-matrix-green transition-all duration-300 ease-in-out group"
    >
      <span className="relative inline-block">
        {children}
        {/* Invisible Clone for Hover Effect */}
        <span className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <span className="absolute top-0 left-0 w-full text-matrix-green/80 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
            {children}
          </span>
        </span>
      </span>
    </a>
  );
}