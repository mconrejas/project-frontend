import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export default function Form(){

const PasswordInput: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center">
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-base outline-none focus:outline-none text-gray-700 px-3 py-2 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Password"
      />
      <button
        onClick={toggleShowPassword}
        className="ml-2 focus:outline-none"
      >
        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
      </button>
    </div>
  );
};
}
