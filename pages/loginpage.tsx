import Head from "next/head";
import Design from '../app/layout/design';
import Link from 'next/link';
import Styles from '/styles/form.module.css';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import {useState} from 'react';
import Image from "next/image";
import { url } from "inspector";

export default function  Login(){

  const[show,setShow] = useState(false)

  return (
    <Design>

        <Head>
            <title>Login Page</title>
        </Head>

            <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="tittle">
            <h1 className='text-white text-4xl font-bold py-4'>Please Sign In</h1>
            </div>

            {/*form*/}
            <form className="flex flex-col gap-5">
              <div className={Styles.input_group}>
                <input 
                type="email"
                name="email"
                placeholder="Email"
                className={Styles.input_text}
                />
              </div>
              <div className={Styles.input_group}>
                  <input 
                  type={`${show ? "text":"password"}`}
                  name="password"
                  placeholder="Password"
                  className={Styles.input_text}
                  />
                <span className='icon flex items-center px-4'onClick={()=>setShow(!show)}>
                  <AiFillEye size={25}/>
                </span>
              </div>

              {/*login buttons*/}
              <div className="input button ">
                <button type="submit" className={Styles.button}>
                  Login
                </button>
               <div className="input button py-2">
                  <button type="button" className={Styles.buttonTwo}>
                    <div className="flex justify-between ">
                    <Image src={'/assets/google.png'} width="18" height="18" alt={""}></Image> Sign in with Google 
                  </div>
                  </button> 
                </div>
                <div className="input button">
                    
                      <button type="button" className={Styles.buttonTwo}>
                       
                        <div className="flex justify-between">
                        <Image src={'/assets/github.png'} width="20" height={20} alt={""}></Image>  Sign in with Github 
                        </div>
                      </button>
                   
                </div>

              </div>
            </form>
            {/*bottom*/}
            <p className='text-center text-gray-400'>
              Dont Have An Account Yet? <Link className="hover:text-red-500 hover:text-2xl" href={'/register'}>Sign Up</Link>
            </p>
            </section>

    </Design>
  ) 
}
