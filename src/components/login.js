import React from 'react';

const Login = () => {
  return <div className="mx-auto p-10 flex bg-gray-100 rounded shadow-sm">
    <div className="flex-1">
      <span className="flex shadow-md mb-5 text-xs">
        <span className="bg-indigo-500 w-28 font-bold text-gray-200 text-cener p-3 rounded-l">Email</span>
        <input className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" type="text" placeholder="someone@example.com" />
      </span>
      <span className="flex shadow-md mb-5 text-xs">
        <span className="bg-indigo-500 w-28 font-bold text-gray-200 text-cener p-3 rounded-l">Password</span>
        <input className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" type="password" placeholder="" />
      </span>
      <a className="text-indigo-500 hover:underline font-bold text-xs ml-auto cursor-pointer" href="#">Forget Password?</a>
      <span className="border-2 border-indigo-500 hover:bg-indigo-500 text-indigo-500 hover:text-white mt-3 block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold">Loing</span>
    </div>
  </div>
}
export default Login;