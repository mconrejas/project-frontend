import Login from "./components/Login";
import Link from "next/link"

function App() {
    return (
        <div className="min-h-screen flex-col justify-center flex w-full g-screen">
            <div className="w-full flex items-center justify-center lg:w-full">
               <Login/>
            </div>
            <div className=" text-center text-white 500">  
            <Link href="app/components/SignIn"> FORM</Link>
            </div>  
        </div>
            
        
        
    );
}

export default App;