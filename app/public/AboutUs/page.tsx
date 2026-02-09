import Footer from "@/component/Footer";
import Navbar from "@/component/NavBar";
import { Target, Users, Award, Dumbbell, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-zinc-950 text-white ">
      <Navbar/>
      {/* --- VISION SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-orange-600 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop" 
              alt="Gym Culture" 
              className="relative z-0 grayscale contrast-125 brightness-75"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-600 p-8 hidden md:block">
              <p className="text-4xl font-black italic uppercase leading-none">ESTD <br /> 2018</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-orange-600 font-bold uppercase tracking-widest flex items-center gap-2">
              <Target size={20} /> Our Mission
            </h2>
            <h1 className="text-5xl md:text-6xl font-black uppercase italic leading-tight">
              WE BUILD <span className="text-transparent outline-text">LEGENDS</span> NOT JUST BODIES.
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              IronForge was born out of a desire to create a sanctuary for those who refuse to settle. We don't just provide equipment; we provide the environment, the expertise, and the community to push you beyond your limits.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <p className="text-3xl font-black text-white italic">10K+</p>
                <p className="text-xs uppercase font-bold text-zinc-500 tracking-tighter">Success Stories</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white italic">50+</p>
                <p className="text-xs uppercase font-bold text-zinc-500 tracking-tighter">Certified Trainers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="bg-zinc-900 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase italic">The Iron <span className="text-orange-600">Core Values</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Award size={40} className="text-orange-600" />}
              title="Excellence"
              desc="We provide world-class facilities and maintain the highest standards of hygiene and safety."
            />
            <ValueCard 
              icon={<Users size={40} className="text-orange-600" />}
              title="Community"
              desc="You aren't just a member; you're part of a brotherhood of athletes chasing greatness."
            />
            <ValueCard 
              icon={<Dumbbell size={40} className="text-orange-600" />}
              title="Hard Work"
              desc="There are no shortcuts here. We celebrate the sweat, the grind, and the persistence."
            />
          </div>
        </div>
      </section>

      {/* --- MEET THE EXPERTS --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black uppercase italic">Meet Your <span className="text-orange-600">Coaches</span></h2>
            <p className="text-zinc-500 mt-2 font-medium">Certified professionals with decades of combined experience in bodybuilding, HIIT, and nutrition.</p>
          </div>
          <Link href="/services" className="text-orange-600 font-bold uppercase italic border-b-2 border-orange-600 pb-1 hover:text-white hover:border-white transition-all">
            View Training Programs
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TrainerCard name="Alex 'The Tank' Rivera" role="Head Coach / Powerlifting" img="https://thumbs.dreamstime.com/b/gym-trainer-motivating-client-professional-to-lift-dumbbell-47295799.jpg" />
          <TrainerCard name="Sarah J. Woods" role="HIIT & Yoga Specialist" img="https://media.istockphoto.com/id/1305474642/photo/senior-woman-doing-lat-pulldowns-with-trainers-help.jpg?s=612x612&w=0&k=20&c=WqVQCvHNI8FSN_TDMQ0388uKFIXOAN1owj4EcnS41W4=" />
          <TrainerCard name="Marcus Chen" role="Nutrition & Performance" img="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" />
        </div>
      </section>

      {/* --- JOIN THE JOURNEY CTA --- */}
      <section className="bg-orange-600 py-16 mb-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic text-black mb-8">Ready to write your own story?</h2>
          <Link href="/public/auth/register" className="inline-flex items-center gap-3 bg-black text-white px-12 py-5 font-black uppercase italic hover:bg-zinc-800 transition-transform hover:scale-105">
            Become A Member <ArrowRight size={24} />
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

// Sub-components for better organization
function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-10 bg-zinc-950 border border-white/5 hover:border-orange-600 transition-all group">
      <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-2xl font-black uppercase italic mb-4">{title}</h3>
      <p className="text-zinc-400 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function TrainerCard({ name, role, img }: { name: string, role: string, img: string }) {
  return (
    <div className="group overflow-hidden relative">
      <div className="aspect-4/5 overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-black to-transparent">
        <p className="text-orange-600 font-black uppercase italic tracking-widest text-sm">{role}</p>
        <h3 className="text-2xl font-black uppercase italic text-white">{name}</h3>
      </div>
    </div>
  );
}