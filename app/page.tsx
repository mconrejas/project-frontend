import Login from "./components/Login";


function App() {
    return (
        <div className="min-h-screen flex-col justify-center flex w-full g-screen">
            <div className="w-full flex items-center justify-center lg:w-full">
               <Login/>
            </div>   
            {/* <div className="hidden md:flex  h-full items-center justify-center">
                <div className=" w-60 h-60 bg-gradient-to-tr  from-violet-500 to-orange-500 rounded"> </div>    
            </div> */}
        </div>

        
    );
}

export default App;