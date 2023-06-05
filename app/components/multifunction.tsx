'use Client'

import Link from 'next/link'
import {useState} from 'react'
import {getSession, useSession,signOut} from 'next-auth/react'



interface Session {
    // Define properties and their types here
    userId: number;
    token: string;
    // ...
  }

  
export default function Home(){

req: String;


    const { data : session } = useSession();

    if (session){
return(
        <div >
           
        
        {session?User({session, handleSignOut}):Guest()}
        
           
        </div>  
    
)   
    } 
}
function handleSignOut(){
    signOut()
 
    }

//Guest
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

   
   //Authourized User
 function User({session,handleSignOut}){
       return(
       
       <main className=" container mx-auto text-center py-20">
           <h3 className="text-4xl font-bold underline"> Profile Page </h3>
           
           <div className='details'>
               <h5>{session.user.name}</h5>
               <h5>{session.user.email}</h5>
           </div>
   
           <div className='flex justify-center'>
               <button onClick={handleSignOut}className='mt-5 px-10 py-1 rounded-sm bg-indigo-500'> sign out</button>
   
           </div>
           <div className="flex justify-center">
               <Link href={'/profile'} className="mt-5 px-10 py-1 rounded-sm bg-indigo-700 text--700  hover:text-black">Sign-in</Link>
   
           </div>
       </main>
       );
   }
  
   
   export async function getServerSideProps({req}){
        const session = await getSession({req})
    
     if(!session){    

        return{
            redirect:{
            destination:'/loginpage',
            permanent: false
            }
            
        }

    }
  return{
    props: {session}
  }
}