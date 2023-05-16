import React, { useState } from "react";
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';



export default function PasswordInput() {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    return(
    
     
        <form>
            className="bg-gradient-to-tr from-violet-500 to-orange-500 shadow-md rounded w-15 px-2 pt-5 pb-5 mb-5 space-y-5 ">
            <div className="text-2xl font-extrabold text-white border-l-2 text-center ">LOGIN FORM</div>
                <div className="mb-3">
              
                <label className="block text-gray-900 text-sm font-semibold mb-2" >Username</label>
                <input className="text-center shadow appearance-none placeholder border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Username"></input>
                
            </div>
                  <div className="relative w-1/4 container mx-auto mt-20">
                  <input
                     type={isPasswordVisible ? "text" : "password"} placeholder="Password"className="w-full px-4 py-2 text-base border border-gray-300 round outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"/>
             <button
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={togglePasswordVisibility}>
                         {isPasswordVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              
                 
                  </div>

            {/* <div className=" mx-auto relative">           
                    <label className="block text-gray-900 text-sm font-semibold mb-2" >Password</label>
                    <input className="text-md  text-center shadow appearance-none placeholder border border-red-500 rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Password"type="text" placeholder="Password"></input>
                     
                    <div className="text-2xl absolute bottom-1 right-1 ">                           
                            < AiFillEyeInvisible/> 
                                        */}
                     
            
               
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


    </div>
    
        </form> 
                                       
)
}

export{PasswordInput};