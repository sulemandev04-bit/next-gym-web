import { supabase } from "@/lib/supabase";

export default async function saveContact(formData : FormData):Promise<void> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string ;
    const message = formData.get("message") as string;
    const subject  = formData.get("subject") as string;

   let {error} = await supabase.from('message')
   .insert(
    {   name:name ,
        email:email , 
        message:message ,
        subject:subject
    })

   if(error){
    throw new Error(error.message)
   }
   else{
    alert("Message Save Successfully")
   }
  
}