'use client'
import Link from "next/link";
import { User, Mail, Lock, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import registerUser from "./action";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-orange-600/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-zinc-900 rounded-none overflow-hidden shadow-2xl border border-white/5">
        
        {/* Left Side: Branding/Motivation */}
        <div className="hidden md:flex relative bg-orange-600 p-12 flex-col justify-between overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-black uppercase italic leading-none text-black">
              Start Your <br /> Legend <br /> Today.
            </h2>
            <ul className="mt-10 space-y-4">
              <li className="flex items-center gap-3 font-bold text-zinc-900">
                <CheckCircle2 size={20} /> Free Personalized Workout Plan
              </li>
              <li className="flex items-center gap-3 font-bold text-zinc-900">
                <CheckCircle2 size={20} /> Access to All Elite Zones
              </li>
              <li className="flex items-center gap-3 font-bold text-zinc-900">
                <CheckCircle2 size={20} /> No Hidden Joining Fees
              </li>
            </ul>
          </div>
          
          <div className="relative z-10 opacity-80 text-sm font-black uppercase tracking-widest text-black">
            IronForge Community — Join 5,000+ Members
          </div>

          {/* Decorative Large Icon */}
          <User className="absolute -bottom-10 -right-10 h-64 w-64 text-black/10 rotate-12" />
        </div>

        {/* Right Side: The Form */}
        <div className="p-8 md:p-12 lg:p-16">
          <div className="mb-10 text-center md:text-left">
            <h3 className="text-3xl font-black uppercase italic text-white">Create Account</h3>
            <p className="text-zinc-500 mt-2">Already a member? <Link href="/public/auth/login" className="text-orange-500 hover:underline">Login here</Link></p>
          </div>

          <form action={registerUser} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-zinc-800 border border-zinc-700 p-4 pl-12 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-600"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-zinc-800 border border-zinc-700 p-4 pl-12 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-600"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Create Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input 
                  type="password" 
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-zinc-800 border border-zinc-700 p-4 pl-12 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-600"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black uppercase italic py-4 mt-4 flex items-center justify-center gap-2 group transition-all"
            >
              Confirm Registration
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[10px] text-zinc-600 text-center uppercase tracking-tighter mt-4">
              By clicking register, you agree to our <span className="text-zinc-400 underline">Terms of Service</span> and <span className="text-zinc-400 underline">Privacy Policy</span>.
            </p>
          </form>
          {/* Redirect to Login */}
          <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
            <p className="text-zinc-400 font-medium">
              Already a member of the squad?{" "}
              <Link 
                href="/public/auth/login" 
                className="text-orange-500 font-black uppercase italic tracking-wider hover:text-orange-400 transition-colors inline-flex items-center gap-1 group"
              >
                Please Login
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}