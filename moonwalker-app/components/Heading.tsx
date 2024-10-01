import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-800 via-gray-900 to-black text-electricBlue py-4 md:py-6 lg:py-8 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-2.5">
        {/* Logo */}
        <Logo />
        
        {/* Navigation */}
        <nav className="flex space-x-8 text-xl 2font-robotoMono">
          <Link href="/about"
            className="hover:text-neonGreen transition-colors duration-300">About Us
          </Link>
          <Link href="/services"
            className="hover:text-neonGreen transition-colors duration-300">Services
          </Link>
          <Link href="/quote"
            className="hover:text-neonGreen transition-colors duration-300">Quote
          </Link>
          <Link href="/signin"
            className="hover:text-neonGreen transition-colors duration-300">Sign In
          </Link>
        </nav>
      </div>
    </div>
  );
}