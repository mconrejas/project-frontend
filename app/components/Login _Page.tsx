// @ts-ignore
import COVER_IMAGE from './assets/cover_image.jfif';

const colors = {
 primary: "#060606",
 background: "#E0E0E0",
 disbaled: "D9D9D9"
}

const Login = () => {
  return (
    <div className="w-full min-h-screen flex items-start">
    <div className="relative w-1/2 h-full flex flex-col">
     <img src={COVER_IMAGE} className="w-full h-full"/>
   
   
    </div>
    </div>

  )

}

export default Login;