import React from 'react';
import Link from "next/link"
import 'tailwindcss/tailwind.css'



const NotFoundPage: React.FC = () => {

        
  return (
    
    <div className="flex items-center justify-center h-screen bg-gray-900 flex-col space-y-6">
      <div className="max-w-md mx-auto p-8 bg-white border border-gray-300 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">PAGE NOT FOUND!</h1>
        
          <div className="flex justify-center">
                
                <button className="h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded " type="button">
                            <Link href="/" className='text-center  '> back to home page</Link>
                </button>
            </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
