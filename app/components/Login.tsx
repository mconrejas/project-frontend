import React, { useState } from "react";
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';



export default function App() {

    // const [open, setOpen] = useState(false)
    // const toggle = () =>{
    //     setOpen(!open)}

    return(
    <div>
    
        <form className="bg-gradient-to-tr from-violet-500 to-orange-500 shadow-md rounded w-15 px-2 pt-5 pb-5 mb-5 space-y-5 ">
            <div className="text-2xl font-extrabold text-white border-l-2 text-center ">LOGIN FORM</div>
                <div className="mb-3">
              
                <label className="block text-gray-900 text-sm font-semibold mb-2" >Username</label>
                <input className="text-center shadow appearance-none placeholder border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Username"></input>
                
            </div>
    

            <div className=" mx-auto relative">           
                    <label className="block text-gray-900 text-sm font-semibold mb-2" >Password</label>
                    <input className="text-md  text-center shadow appearance-none placeholder border border-red-500 rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Password"type="text" placeholder="Password"></input>
                     
                    <div className="text-2xl absolute bottom-1 right-1 ">                           
                            <AiFillEyeInvisible/> 
                        <div className="h-1 font-extralight" />
                        
             </div>   
                             
            </div>  
               
            <div className="flex items-center justify-between">     
                <div className="flex items-center">
                    <input type="checkbox" className="h-4 m-4 text-blue-300 rounded"/>
                    <label htmlFor="" className="ml-2 text-sm text-yellow-50 ">remember me</label>
               </div>
            </div>      
            
            <div className="flex items-center justify-between">
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
                
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-yellow-50 hover:text-blue-800" href="#">
                Forgot Password?
                </a>
            </div>
        </form>

    </div>
)
}
export{App};