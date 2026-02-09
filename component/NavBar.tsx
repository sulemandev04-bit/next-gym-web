import Link from "next/link";
import { Dumbbell, Menu, X, User, ArrowRight } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/public/AboutUs" },
    { name: "Services", href: "/public/Services" },
    { name: "Contact Us", href: "/public/Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-zinc-950 border-b-2 border-orange-600/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-orange-600 p-1.5 rounded-sm transform group-hover:rotate-12 transition-transform duration-300">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
              GYM<span className="text-orange-600">WEB</span>
            </span>
          </Link>

          {/* Desktop Navigation & Login */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold text-zinc-400 hover:text-orange-500 transition-all tracking-[0.2em] uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* THE LOGIN BUTTON */}
            <Link
              href="/public/auth/login"
              className="relative group overflow-hidden bg-orange-600 px-8 py-3 rounded-none font-black text-white transition-all hover:pr-10 active:scale-95"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
            >
              <span className="relative z-10 flex items-center gap-2 italic uppercase tracking-wider">
                <User size={18} strokeWidth={3} />
                Member Login
              </span>
              {/* Hover effect highlight */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
            </Link>
          </div>

          {/* Mobile Menu Control */}
          <label htmlFor="nav-toggle" className="md:hidden cursor-pointer">
            <input type="checkbox" id="nav-toggle" className="peer hidden" />
            <div className="text-white p-2 peer-checked:text-orange-600 transition-colors">
              <Menu className="peer-checked:hidden block h-8 w-8" />
              <X className="peer-checked:block hidden h-8 w-8" />
            </div>
            
            {/* Mobile Sidebar */}
            <div className="fixed top-80 left-0 w-full h-[calc(100vh-80px)] bg-zinc-950 hidden peer-checked:flex flex-col p-6 space-y-4 animate-in fade-in slide-in-from-right-full duration-300 border-t border-zinc-800">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-black text-white hover:text-orange-600 uppercase italic border-b border-zinc-900 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/public/auth/login"
                className="mt-8 w-full bg-orange-600 text-white py-5 text-center font-black text-2xl uppercase italic flex items-center justify-center gap-3"
              >
                Login Now <ArrowRight size={24} />
              </Link>
            </div>
          </label>

        </div>
      </div>
    </nav>
  );
}