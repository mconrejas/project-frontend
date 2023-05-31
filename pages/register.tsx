import Head from "next/head"
import Link from 'next/link'
import Design from '../app/layout/design'
import Styles from '/styles/form.module.css';
import {AiFillEyeInvisible, AiFillEye, AiOutlineUser} from 'react-icons/ai';
import {useState} from 'react';




export default function Register()
{
  const [show, setShow] = useState({password: false,cpassword: false})

  return (
    <Design>
    <Head>
      <title>Register</title>

    </Head>
    
    <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="tittle">
            <h1 className='text-white text-4xl font-bold py-4'>Register</h1>
            </div>

            {/*form*/}
            <form className="flex flex-col center gap-2">
            <div className={Styles.input_group}>
                <input 
                type="text"
                name="Username"
                placeholder="Username"
                className={Styles.input_text}
                />
                 <span className='icon flex items-center px-2'>
                  <AiOutlineUser size={25}/>
                </span>
              </div>
              <div className={Styles.input_group}>
                <input 
                type="text"
                name="email"
                placeholder="Email"
                className={Styles.input_text}
                />
              </div>
              <div className={Styles.input_group}>
                  <input 
                  type={`${show.password? "text":"password"}`}
                  name="password"
                  placeholder="Password"
                  className={Styles.input_text}
                  />
                <span className='icon flex items-center px-2'onClick={()=>setShow({...show,password: !show.password})}>
                  <AiFillEye size={25}/>
                </span>
              </div>

              <div className={Styles.input_group}>
                  <input 
                  type={`${show.cpassword? "text":"password"}`}
                  name="cpassword"
                  placeholder="Confirm Password"
                  className={Styles.input_text}
                  />
                <span className='icon flex items-center px-2'onClick={()=>setShow({...show, cpassword: !show.cpassword})}>
                  <AiFillEye size={25}/>
                </span>
              </div>


              {/*login buttons*/}
              <div className="input button ">
                <button type="submit" className={Styles.button}>
                  Login
                </button>
              

              </div>
            </form>
            {/*bottom*/}
            <p className='text-center text-gray-400'>
              Dont Have An Account? <Link className="hover:text-red-500 hover:text-2xl" href={'/loginpage'}>Sign in</Link>
            </p>
            </section>

    
    </Design>
  ) 
}
