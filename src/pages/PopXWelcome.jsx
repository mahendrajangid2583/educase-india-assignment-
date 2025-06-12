import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopXWelcome = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    console.log('Create Account clicked');
    navigate("/signup")
  };

  const handleLogin = () => {
    console.log('Login clicked');
    navigate("/login");
  };

  return (
   
      <div className=" bg-gray-100 flex flex-col justify-end border border-gray-300 rounded-lg h-[95vh] shadow-lg p-8 w-[384px]">
        <div className=" mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Welcome to PopX
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit.
          </p>
        </div>
        
        <div className=" space-y-3">
          <button
            onClick={handleCreateAccount}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Create Account
          </button>
          
          <button
            onClick={handleLogin}
            className="w-full bg-purple-200 hover:bg-purple-300 text-purple-800 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    
  );
};

export default PopXWelcome;