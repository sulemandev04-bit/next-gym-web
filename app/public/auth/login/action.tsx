'use server';
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

export default async function loginAction(formData: FormData) {
  const emailRaw = formData.get("email");
  const passwordRaw = formData.get("password");

  if (!emailRaw || !passwordRaw) {
    throw new Error("Email and password are required");
  }

  const email = String(emailRaw);
  const password = String(passwordRaw);

  // 1️⃣ Login
  const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (loginError) {
    throw new Error("Login failed: " + loginError.message);
  }

  const user = loginData.user;
  if (!user) {
    throw new Error("User not found after login");
  }
  
  const { data: profile, error: profileError } = await supabase
  .from("profiles")
  .select("id, role")
  .eq("id", user.id)
  .maybeSingle() 

  // 2️⃣ Upsert profile safely
  if (!profile) {
  const { data: newProfile, error: insertError } = await supabase
    .from("profiles")
    .insert({
      id: user.id,
      name: user.user_metadata?.name || "",
      email: user.email || email,
      role: "user", // default role
    })
  }

  if (profileError) {
    throw new Error("Profile error: " + profileError.message);
  }

  console.log("profile:", profile)

  
  // 3️⃣ Redirect after successful login
  if (profile && profile.role === "admin") {
    redirect("/dashboard");
}
  else{
    redirect('/')
  }
}
