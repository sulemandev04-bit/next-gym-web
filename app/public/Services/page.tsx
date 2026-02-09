import Footer from "@/component/Footer";
import Navbar from "@/component/NavBar";
import { Check, Dumbbell, Zap, HeartPulse, UserCheck, Flame, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Strength Training",
      desc: "Heavy-duty machines and free weights zone for maximum muscle hypertrophy.",
      icon: <Dumbbell size={32} />,
      img: "https://hips.hearstapps.com/hmg-prod/images/man-doing-gym-front-squat-royalty-free-image-1658490142.jpg?crop=0.8891xw:1xh;center,top&resize=1200:*"
    },
    {
      title: "Cardio Blitz",
      desc: "High-end treadmills, rowing machines, and spin bikes to crush calories.",
      icon: <HeartPulse size={32} />,
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "HIIT Sessions",
      desc: "Group classes focused on explosive movements and fat burning.",
      icon: <Flame size={32} />,
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-zinc-950 text-white pb-20">
      <Navbar/>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
          CHOOSE YOUR <span className="text-orange-600">WEAPON</span>
        </h1>
        <p className="text-zinc-500 mt-4 max-w-xl mx-auto font-bold uppercase tracking-widest text-sm">
          Premium facilities for elite results.
        </p>
      </div>

      {/* --- SERVICE CARDS --- */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6 mb-32">
        {services.map((s, i) => (
          <div key={i} className="group relative overflow-hidden bg-zinc-900 border border-white/5">
            <div className="h-64 overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="p-8">
              <div className="text-orange-600 mb-4">{s.icon}</div>
              <h3 className="text-2xl font-black uppercase italic mb-3">{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase italic">Membership <span className="text-orange-600">Plans</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <PricingCard 
            tier="Rookie" 
            price="29" 
            features={["Access to Gym Floor", "Locker Room Access", "Free WiFi", "1 Personal Training Session"]}
          />
          {/* Pro Plan (Highlighted) */}
          <PricingCard 
            tier="Pro Warrior" 
            price="59" 
            popular={true}
            features={["Unlimited 24/7 Access", "All Group Classes", "Sauna & Steam Room", "Diet Consultation", "Monthly Progress Report"]}
          />
          {/* Elite Plan */}
          <PricingCard 
            tier="Elite Titan" 
            price="99" 
            features={["All Pro Features", "Dedicated Trainer", "Supplements Discount", "Unlimited Guest Passes", "Laundry Service"]}
          />
        </div>
      </section>

      {/* Custom Training CTA */}
      <div className="mt-32 max-w-5xl mx-auto px-4 mb-5">
        <div className="bg-orange-600 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 transform -skew-x-2">
          <div className="skew-x-2 text-center md:text-left">
            <h3 className="text-3xl font-black uppercase italic text-black">Need a Personal Coach?</h3>
            <p className="text-black/70 font-bold uppercase text-sm mt-2">Customized programs built for your body type.</p>
          </div>
          <Link href="/Contact" className="skew-x-2 bg-black text-white px-10 py-4 font-black uppercase italic hover:bg-zinc-800 transition-colors flex items-center gap-2">
            Inquire Now <ArrowRight size={20} />
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

// Pricing Card Sub-Component
function PricingCard({ tier, price, features, popular = false }: { tier: string, price: string, features: string[], popular?: boolean }) {
  return (
    <div className={`relative p-10 flex flex-col ${popular ? 'bg-orange-600 border-none scale-105 z-10' : 'bg-zinc-900 border border-white/5'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-4 py-1 uppercase tracking-widest">
          Most Popular
        </div>
      )}
      <h3 className={`text-2xl font-black uppercase italic ${popular ? 'text-black' : 'text-white'}`}>{tier}</h3>
      <div className="my-8">
        <span className={`text-5xl font-black ${popular ? 'text-black' : 'text-white'}`}>${price}</span>
        <span className={`font-bold uppercase text-xs ${popular ? 'text-black/60' : 'text-zinc-500'}`}>/month</span>
      </div>
      
      <ul className="space-y-4 mb-10 grow">
        {features.map((f, i) => (
          <li key={i} className={`flex items-center gap-3 text-sm font-bold ${popular ? 'text-black/80' : 'text-zinc-400'}`}>
            <Check size={18} className={popular ? 'text-black' : 'text-orange-500'} /> {f}
          </li>
        ))}
      </ul>

      <Link 
        href="/register" 
        className={`w-full text-center py-4 font-black uppercase italic transition-all ${
          popular ? 'bg-black text-white hover:bg-zinc-800' : 'bg-white/10 text-white hover:bg-orange-600'
        }`}
      >
        Select Plan
      </Link>
    </div>
    
  );
}