import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('Login attempt:', { email, password });
    navigate("/setting");
  };

  return (
      <div className="bg-gray-100 flex flex-col border border-gray-300 rounded-lg h-[95vh] shadow-lg p-8 w-[384px]">
        <div className=" mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Signin to your
          </h1>
          <h2 className="text-2xl font-semibold text-gray-900">
            PopX account
          </h2>
          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit.
          </p>
        </div>

        <div className="space-y-6">
          <div className=" relative">
            <label htmlFor="email" className="absolute -top-3 bg-gray-100 px-2 left-2 z-10  block text-sm font-medium text-purple-600 mb-2">
              Email Address<span className=" text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full px-3 py-3 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div className=" relative">
            <label htmlFor="password" className="absolute -top-3 bg-gray-100 px-2 left-2 z-10  block text-sm font-medium text-purple-600 mb-2">
              Password<span className=" text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-3 py-3 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gray-400 hover:bg-gray-500 text-white font-medium py-3 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </div>
   
  );
}

export default Login
