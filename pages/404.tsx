import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="max-w-md mx-auto p-8 bg-white border border-gray-300 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-gray-600">Oops! Page not found.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
