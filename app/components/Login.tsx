import React from "react";
import { useForm } from 'react-hook-form';


export default function App() {

    // const { register } = useForm();

    return(
     
     

<div className=" ">
    
         <form className=" mx-auto  bg-white shadow-md rounded w-15 px-2 pt-10 pb-5 mb-5">
         <div className="text-2xl font-extrabold border-l-2 text-center ">LOGIN FORM</div>
            <div className="mb-3">
              
                <label className="block text-gray-700 text-sm font-bold mb-2" >Username</label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Username"></input>
                
            </div>
               
            <div> 
            <label className="block text-gray-700 text-sm font-semibold mb-2" >Password</label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password">
                    {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">
                        </path>
                    </svg> */}
                </input>
           
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">
                    </path>
                </svg>
            </div>   
               
            <div className="flex items-center justify-between">     
                <div className="flex items-center">
                    <input type="checkbox" className="h-4 m-4 text-blue-300 rounded"/>
                    <label htmlFor="" className="ml-2 text-sm text-gray-600">remember me</label>
               </div>
            </div>
            
            
            
            <div className="flex items-center justify-between">
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
                </a>
            </div>
  </form>

</div>




    )
}

export{App};

