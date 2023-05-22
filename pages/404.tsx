import React from 'react';
import Link from "next/link"

const NotFoundPage: React.FC = () => {

        
  return (
    
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="max-w-md mx-auto p-8 bg-white border border-gray-300 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">page not found!</h1>
        <Link href="/App" className='text text-center  '> back to home page</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
