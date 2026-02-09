'use client'

import Link from "next/link";
import { Lock, Mail, ArrowRight, LogIn, ChevronLeft } from "lucide-react";
import loginAction from "./action";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative Blur Effect */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-zinc-900 rounded-none overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 relative z-10">
        
        {/* Left Side: Motivational Image/Overlay */}
        <div className="hidden md:flex relative p-12 flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-900/40 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
              alt="Gym Motivation" 
              className="w-full h-full object-cover grayscale brightness-50"
            />
          </div>
          
          <div className="relative z-20">
            <h2 className="text-4xl font-black uppercase italic leading-none text-white mb-4">
              WELCOME <br /> <span className="text-orange-600">BACK, BEAST.</span>
            </h2>
            <p className="text-zinc-400 font-bold max-w-xs">
              Your gains are waiting. Log in to track your progress and crush your goals.
            </p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <Link href="/" className="text-zinc-500 hover:text-orange-500 flex items-center gap-1 text-xs uppercase font-bold mb-6 transition-colors">
              <ChevronLeft size={14} /> Back to Home
            </Link>
            <h3 className="text-3xl font-black uppercase italic text-white flex items-center gap-3">
              Member Login <LogIn className="text-orange-600" />
            </h3>
          </div>

          <form action={loginAction} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-orange-500 transition-colors" size={18} />
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="warrior@gymweb.com"
                  className="w-full bg-zinc-800/50 border border-zinc-700 p-4 pl-12 text-white focus:outline-none focus:border-orange-500 focus:bg-zinc-800 transition-all placeholder:text-zinc-700"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Password</label>
                <Link href="/forgot-password" className="text-[10px] uppercase font-bold text-orange-600/70 hover:text-orange-500 transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-orange-500 transition-colors" size={18} />
                <input 
                  type="password" 
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-zinc-800/50 border border-zinc-700 p-4 pl-12 text-white focus:outline-none focus:border-orange-500 focus:bg-zinc-800 transition-all placeholder:text-zinc-700"
                />
              </div>
            </div>

            {/* Login Button */}
            <button 
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black uppercase italic py-4 mt-2 flex items-center justify-center gap-2 group transition-all shadow-lg shadow-orange-900/20 active:scale-[0.98]"
            >
              Enter the Gym
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Register Redirect */}
            <div className="text-center mt-8">
              <p className="text-zinc-500 text-sm">
                New to the IronForge?{" "}
                <Link 
                  href="/public/auth/register" 
                  className="text-white font-black uppercase italic hover:text-orange-500 transition-colors border-b border-orange-600 pb-0.5"
                >
                  Join the Squad
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}