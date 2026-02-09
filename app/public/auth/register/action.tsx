'use server'
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";



export default async function registerUser(formData : FormData) {
   
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const { data, error } = await supabase.auth.signUp({email:email , password:password,
    options: {
        data: {
        name: name

        }
    }
    })

    if(error){
        window.alert(error.message);
    }

    else{
        // window.alert("Register successfully");
        redirect("/auth/login")
    }

}