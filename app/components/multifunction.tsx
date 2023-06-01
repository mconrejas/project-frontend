"use client"

import Link from "next/link";
import { useState } from "react"

export default function Home(){

    const[ session, setSession]  = useState(false)

return(

        <div>

        { session ? User(): Guest()}      
        </div>  

)    
}


//guest
function Guest(){
    return(
       <main className=" container mx-auto text-center py-40 ">
           <h3 className="text-4xl font-bold underline"> Guest Homepage!  </h3>
           <div className="flex justify-center">
               <Link href={'/loginpage'} className="mt-5 px-10 py-1 rounded-sm bg-indigo-700 text-white  hover:text-black">Sign-in</Link>
   
           </div>
       </main>
    );   
    
   }

   
   //authourized
 function User(){
       return(
       
       <main className=" container mx-auto text-center py-20">
           <h3 className="text-4xl font-bold underline"> Profile Page </h3>
           
           <div className='details'>
               <h5>UnKnown</h5>
               <h5>UnKnown</h5>
           </div>
   
           <div className='flex justify-center'>
               <button className='mt-5 px-10 py-1 rounded-sm bg-indigo-500'> sign out</button>
   
           </div>
           <div className="flex justify-center">
               <Link href={'/profile'} className="mt-5 px-10 py-1 rounded-sm bg-indigo-700 text--700  hover:text-black">Sign-in</Link>
   
           </div>
       </main>
       );
   }
   