import Link from "next/link";
import { Play, ShieldCheck, Trophy, Zap, ArrowRight, Dumbbell } from "lucide-react";
import Navbar from "@/component/NavBar";
import Footer from "@/component/Footer";

export default function HomePage() {
  return (
    <main className="bg-zinc-950 text-white overflow-hidden">
      <Navbar/>

      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Overlay with Image placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Background" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h2 className="text-orange-600 font-black tracking-[0.3em] uppercase mb-4 animate-pulse">
              No Pain, No Gain
            </h2>
            <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-6">
              UNLEASH YOUR <br />
              <span className="text-transparent stroke-orange-500 stroke-2 outline-text">INNER BEAST</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Experience the ultimate fitness transformation with world-class trainers and state-of-the-art equipment. Your journey to greatness starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/register" className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 font-black uppercase italic flex items-center justify-center gap-3 transition-all hover:scale-105">
                Start Training <ArrowRight size={20} />
              </Link>
              <button className="border-2 border-white/20 hover:border-orange-600 px-10 py-5 font-black uppercase italic flex items-center justify-center gap-3 transition-all">
                <Play className="fill-white" size={20} /> Watch Promo
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stats - Hidden on Small Mobile */}
        <div className="absolute bottom-10 right-0 hidden lg:block bg-orange-600 p-8 transform -skew-x-12 translate-x-10">
          <div className="flex gap-12 skew-x-12 pr-10">
            <div><p className="text-4xl font-black">500+</p><p className="text-xs uppercase font-bold opacity-80">Members</p></div>
            <div><p className="text-4xl font-black">15+</p><p className="text-xs uppercase font-bold opacity-80">Coaches</p></div>
            <div><p className="text-4xl font-black">24/7</p><p className="text-xs uppercase font-bold opacity-80">Access</p></div>
          </div>
        </div>
      </section>

      {/* --- SERVICES / FEATURES SECTION --- */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-orange-600 font-bold uppercase tracking-widest">Our Services</h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic">Why Choose IronForge?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="text-orange-500" size={40} />}
              title="High Intensity"
              desc="Specially designed HIIT zones to burn fat and build endurance in record time."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-orange-500" size={40} />}
              title="Expert Coaching"
              desc="Certified personal trainers dedicated to your specific fitness goals and safety."
            />
            <FeatureCard 
              icon={<Trophy className="text-orange-500" size={40} />}
              title="Pro Equipment"
              desc="The latest Hammer Strength and Life Fitness gear for maximum performance."
            />
          </div>
        </div>
      </section>

      {/* --- MOBILE READY CTA --- */}
      <section className="py-20 bg-orange-600 overflow-hidden relative mb-5">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6">Ready to join the elite?</h2>
          <p className="text-black/80 font-bold mb-8 max-w-2xl mx-auto">Sign up today and get 20% off your first 3 months. No hidden fees, just pure results.</p>
          <Link href="public/auth/login" className="inline-block bg-black text-white px-12 py-4 font-black uppercase italic hover:bg-zinc-800 transition-colors">
            Get Membership Now
          </Link>
        </div>
        <Dumbbell className="absolute -bottom-10 -left-10 text-black/10 h-64 w-64 rotate-12" />
      </section>
      <Footer/>
    </main>
  );
}

// Helper Component for Features
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 border border-white/5 bg-zinc-950 hover:border-orange-500/50 transition-all group">
      <div className="mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="text-xl font-black uppercase italic mb-4">{title}</h4>
      <p className="text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}