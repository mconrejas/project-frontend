import styles from '../Layout.module.css'
import 'tailwindcss/tailwind.css'



export default function Design({children}){
    
return(
 <div className="flex h-screen bg-blue-400">
    <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
        
          <div   className={styles.imgStyle}>
            <div className={styles.imgMountain}> </div>
            <div className={styles.plane_one}></div>
            <div className={styles.plane_two}></div>
         </div>
    
        <div className="right flex flex-col justify-evenly bg-gray-800">
            <div className="text-center py-10"> 
                {children}
            </div>
        </div>
    </div>
   
 </div>


)


}
