import { updateProfile } from "@/app/dashboard/editAction";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

export default async function EditProfilePage({
  params,
}: {
  params: Promise <{ id: string }>;
}) {
    const { id } = await params;

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (!profile) redirect("/dashboard");

  return (
    <div className="flex items-center justify-center ">
    <form action={updateProfile} className="max-w-md space-y-4 border-amber-700 rounded-2xl bg-slate-900">
      <h2 className="text-xl font-bold">Edit Profile</h2>

      <input type="hidden" name="id" value={profile.id} />
      
      <input
        name="name"
        defaultValue={profile.name}
        className="w-full border p-2"
      />

      <input
        name="email"
        defaultValue={profile.email}
        className="w-full border p-2"
      />

       <input
        name="role"
        defaultValue={profile.role}
        className="w-full border p-2"
      />

      <button className="bg-black text-white px-4 py-4 rounded max-sm">
        Update
      </button>
    </form>
    </div>
  );
}