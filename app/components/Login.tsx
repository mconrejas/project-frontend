import  { useRef, useState, useEffect } from "react";
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';


const Login = () => {
 
    // const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    // function togglePasswordVisibility() {
    //     setIsPasswordVisible((prevState) => !prevState);
    
    return (
           

    <form className="bg-gradient-to-tr from-violet-500 to-blue-900 shadow-md rounded w-small px-2 pt-5 pb-5 mb-8 space-y-7 ">
                    <div className="font-bold text-center text-2xl">Sign In</div>
                    <div className="mb-3">
              
                    <label className="block text-gray-900 text-sm font-semibold mb-2" >Username</label>
                    <input className="text-center shadow appearance-none placeholder border border-red-500 rounded w-small py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
                 </div>
             
            <link>
            </link> 

            <div className=" mx-auto relative">           
                    <label className="block text-gray-900 text-sm font-semibold mb-2" >Password</label>
                    <input className="text-md  text-center shadow appearance-none placeholder border border-red-500 rounded w-small py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Password"type="text" placeholder="Password"></input>             
                  
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
                <a className="inline-block align-baseline font-bold text-sm text-yellow-50 hover:text-blue-800" href="#">Forgot Password?</a>
            </div>
        
    </form>                          

)
};
export default Login