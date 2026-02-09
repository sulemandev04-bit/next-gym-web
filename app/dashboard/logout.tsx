
import { supabase } from "@/lib/supabase"
import { redirect } from "next/navigation";
export default async function logOut(){
   
    const {error} = await supabase.auth.signOut()

    if(error){
        alert(error.message);
    }

    else{
        redirect("/")

    }

}