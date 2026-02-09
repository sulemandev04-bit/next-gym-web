"use client"; // Required for useEffect and useState

import { useEffect, useState } from "react";
import { User, MessageSquare, Edit2, Trash2, LayoutDashboard, Settings, LogOut, Loader2 } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase"; // Ensure this path matches your file structure
import logOut from "./logout";


export default function DashboardPage() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      
      // Fetch both simultaneously for better performance
      const [profilesRes, messagesRes] = await Promise.all([
        supabase.from("profiles").select("*").order("name", { ascending: true }),
        supabase.from("message").select("*").order("created_at", { ascending: false })
      ]);

      if (profilesRes.data) setProfiles(profilesRes.data);
      if (messagesRes.data) setMessages(messagesRes.data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }


async function deleteProfile(id: string) {
    const confirmed = confirm("Are you sure you want to delete this profile?");
    if (!confirmed) return;

    try {
      const { error } = await supabase
        .from("profiles")
        .delete()
        .eq("id", id);

      if (error) throw error;

      // Optimistic UI update
      setProfiles((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete profile.");
    }
  }
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      
      {/* --- SIDEBAR --- */}
      <aside className="hidden md:flex w-64 bg-zinc-900 border-r border-white/5 flex-col p-6 sticky top-0 h-screen">
        <div className="flex items-center gap-2 mb-10">
          <LayoutDashboard className="text-orange-600" />
          <span className="font-black uppercase italic tracking-tighter">Admin Panel</span>
        </div>
        <nav className="space-y-2 grow">
          <SidebarLink icon={<User size={18} />} label="Profiles" active />
          <SidebarLink icon={<MessageSquare size={18} />} label="Messages" />
          <SidebarLink icon={<Settings size={18} />} label="Settings" />
        </nav>
        <button onClick={logOut} className="flex items-center gap-3 text-zinc-500 hover:text-red-500 font-bold uppercase italic text-sm transition-colors mt-auto">
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-4 md:p-10 lg:p-12 overflow-x-hidden">
        
        {/* Header */}
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black uppercase italic tracking-tighter">
              System <span className="text-orange-600">Overview</span>
            </h1>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mt-1">Manage your gym members and inquiries</p>
          </div>
          {loading && <Loader2 className="animate-spin text-orange-600 mb-2" size={24} />}
        </div>

        <div className="space-y-12">
          
          {/* --- TABLE 1: USER PROFILES --- */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-black uppercase italic flex items-center gap-2">
                <User className="text-orange-600" size={20} /> Member Profiles
              </h2>
              <span className="bg-zinc-800 text-zinc-400 text-[10px] px-3 py-1 font-bold uppercase">Total: {profiles.length}</span>
            </div>
            
            <div className="overflow-x-auto bg-zinc-900 border border-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-800/50">
                    <th className="p-4 text-xs font-black uppercase tracking-widest text-zinc-400">Member</th>
                    <th className="p-4 text-xs font-black uppercase tracking-widest text-zinc-400">Role</th>
                    <th className="p-4 text-xs font-black uppercase tracking-widest text-zinc-400 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {profiles.map((profile, idx) => (
                    <ProfileRow key={profile.id || idx} {...profile}
                    onDelete={deleteProfile}
                    />
                  ))}
                  {!loading && profiles.length === 0 && (
                    <tr><td colSpan={3} className="p-10 text-center text-zinc-600 italic">No members found.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* --- TABLE 2: MESSAGES --- */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-black uppercase italic flex items-center gap-2">
                <MessageSquare className="text-orange-600" size={20} /> Member Inquiries
              </h2>
            </div>
            
            <div className="overflow-x-auto bg-zinc-900 border border-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-800/50">
                    <th className="p-4 text-xs font-black uppercase tracking-widest text-zinc-400">From</th>
                    <th className="p-4 text-xs font-black uppercase tracking-widest text-zinc-400">Subject / Message</th>
                    <th className="p-4 text-xs font-black uppercase tracking-widest text-zinc-400">Date</th>
                    <th className="p-4 text-xs font-black uppercase tracking-widest text-zinc-400 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {messages.map((msg, idx) => (
                    <MessageRow key={msg.id || idx} {...msg} />
                  ))}
                  {!loading && messages.length === 0 && (
                    <tr><td colSpan={4} className="p-10 text-center text-zinc-600 italic">No messages yet.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

/* --- UPDATED HELPER COMPONENTS --- */

function SidebarLink({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link href="#" className={`flex items-center gap-4 px-4 py-3 font-bold uppercase italic text-sm transition-all ${active ? 'bg-orange-600 text-white' : 'text-zinc-500 hover:text-white hover:bg-zinc-800'}`}>
      {icon} {label}
    </Link>
  );
}

function ProfileRow({ name, email, role ,id, onDelete}: { name: string, email: string, role: string , id:string, onDelete: (id: string) => void; }) {
  return (
    <tr className="hover:bg-white/5 transition-colors">
      <td className="p-4">
        <div className="font-bold text-white uppercase tracking-tighter">{name}</div>
        <div className="text-[10px] text-zinc-500 uppercase">{email}</div>
      </td>
      <td className="p-4 text-xs font-black italic text-orange-500 uppercase tracking-widest">
        {role || 'Member'}
      </td>
      <td className="p-4 text-right space-x-2">
       <Link 
          href={`/dashboard/profile/${id}/edit`} 
          className="px-2.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all inline-block rounded"
        >
          <Edit2 size={16} />
        </Link>
        <button
          onClick={() => onDelete(id)}
          className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-500/10 transition-all inline-block rounded"
        >
          <Trash2 size={16} />
        </button>
      </td>
    </tr>
  );
}

function MessageRow({ name, email, subject, message, created_at }: any) {
  const dateStr = new Date(created_at).toLocaleDateString();
  
  return (
    <tr className="hover:bg-white/5 transition-colors">
      <td className="p-4">
        <div className="font-bold text-white">{name}</div>
        <div className="text-[10px] text-zinc-500 uppercase font-bold">{email}</div>
      </td>
      <td className="p-4">
        <div className="text-sm font-bold text-orange-500 uppercase italic leading-none">{subject}</div>
        <div className="text-xs text-zinc-400 mt-1 line-clamp-1">{message}</div>
      </td>
      <td className="p-4 text-[10px] text-zinc-600 uppercase font-black">{dateStr}</td>
      <td className="p-4 text-right space-x-2">
        <button className="p-2 text-zinc-400 hover:text-orange-500 hover:bg-orange-500/10 transition-all inline-block"><Edit2 size={16} /></button>
        <button className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-500/10 transition-all inline-block"><Trash2 size={16} /></button>
      </td>
    </tr>
  );
}