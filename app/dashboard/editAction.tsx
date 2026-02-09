"use server";


import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData: FormData)
 {

const id = formData.get("id") as string;

  await supabase
    .from("profiles")
    .update({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      role: formData.get("role") as string,
    })
    .eq("id", id);

  revalidatePath("/dashboard");
}