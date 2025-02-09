import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Initialize Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hammad Nawaz - Portfolio",
  description: "Full Stack Developer | MERN Stack | Next.js | AI | Deep Learning",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-matrix-dark text-matrix-green`}
    >
      <body className="min-h-screen">
        {/* Navigation Bar */}
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

        {/* Page Content */}
        <main className="p-8">{children}</main>
      </body>
    </html>
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