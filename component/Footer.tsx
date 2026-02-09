import Link from "next/link";
import { Dumbbell, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
          <Dumbbell className="text-orange-600 h-6 w-6" />
          <span className="text-xl font-black uppercase italic text-white tracking-tighter">
            IRON<span className="text-orange-600">FORGE</span>
          </span>
        </div>
        {/* Social Icons */}
        <div className="flex gap-6 mb-8">
          <Instagram className="text-zinc-500 hover:text-white cursor-pointer transition-colors" size={20} />
          <Twitter className="text-zinc-500 hover:text-white cursor-pointer transition-colors" size={20} />
          <Facebook className="text-zinc-500 hover:text-white cursor-pointer transition-colors" size={20} />
        </div>

        {/* Copyright */}
        <p className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} IRONFORGE GYM • BUILT FOR STRENGTH
        </p>
        
      </div>
    </footer>
  );
}