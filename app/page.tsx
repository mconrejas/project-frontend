import Login from "./components/Login";
import Form from "./components/form/Form"
import Link from "next/link"

function App() {
    return (
        <div className="min-h-screen flex-col justify-center flex w-full g-screen">
            <div className="w-full flex items-center justify-center lg:w-full">
               <Login/>
               {/* <Form/> */}
        </div>  
            <Link href="app/components/SignIn"> FORM</Link>
         
        </div>
            
        
        
    );
}

export default App;