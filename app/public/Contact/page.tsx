'use client'

import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook, Clock } from "lucide-react";
import saveContact from "./action";
import Navbar from "@/component/NavBar";
import Footer from "@/component/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white  pb-12">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
            GET IN <span className="text-orange-600">TOUCH</span>
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto font-medium">
            Have questions about memberships, personal training, or facilities? Our team is ready to help you start your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Column 1: Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-zinc-900 p-8 border-l-4 border-orange-600 shadow-xl">
              <h3 className="text-xl font-black uppercase italic mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <ContactItem 
                  icon={<MapPin className="text-orange-500" />} 
                  title="Location" 
                  detail="123 Fitness Plaza, Muscle Bay, CA" 
                />
                <ContactItem 
                  icon={<Phone className="text-orange-500" />} 
                  title="Phone" 
                  detail="+1 (555) 000-IRON" 
                />
                <ContactItem 
                  icon={<Mail className="text-orange-500" />} 
                  title="Email" 
                  detail="support@ironforge.com" 
                />
                <ContactItem 
                  icon={<Clock className="text-orange-500" />} 
                  title="Gym Hours" 
                  detail="Mon - Sun: 24/7 Access" 
                />
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <SocialBtn icon={<Instagram />} />
              <SocialBtn icon={<Twitter />} />
              <SocialBtn icon={<Facebook />} />
            </div>
          </div>

          {/* Column 2 & 3: Contact Form */}
          <div className="lg:col-span-2 bg-zinc-900 p-8 md:p-12 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 opacity-5 rotate-12">
                <Mail size={300} />
            </div>

            <form action={saveContact} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 p-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 p-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Subject</label>
                <select name="subject" className="w-full bg-zinc-800 border border-zinc-700 p-4 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                  <option>Membership Inquiry</option>
                  <option>Personal Training</option>
                  <option>Feedback/Complaint</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Your Message</label>
                <textarea 
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 p-4 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="bg-orange-600 hover:bg-orange-500 text-white font-black uppercase italic px-10 py-4 flex items-center gap-3 transition-all active:scale-95 group"
              >
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Embedded Map Placeholder */}
      <div className="mt-24 h-96 w-full grayscale contrast-125 brightness-50 hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.70684029356!2d72.8813299752054!3d19.076622782128084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c88e4c3315fd%3A0xbf2f11d93dc21254!2sGood%20Luck%20Dairy%20%7C%20Pure%20milk%20and%20milk%20products!5e0!3m2!1sen!2sin!4v1770448802603!5m2!1sen!2sin" 
            className="w-full h-full border-none"
            allowFullScreen
            loading="lazy"
          ></iframe>
      </div>
      <Footer/>
    </div>
  );
}

// Helper Components
function ContactItem({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-[10px] uppercase font-black tracking-widest text-zinc-500">{title}</p>
        <p className="text-zinc-200 font-bold">{detail}</p>
      </div>
    </div>
  );
}

function SocialBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-4 bg-zinc-900 border border-zinc-800 hover:border-orange-600 hover:text-orange-600 transition-all">
      {icon}
    </button>
  );
}