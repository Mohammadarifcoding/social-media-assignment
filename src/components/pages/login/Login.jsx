import React from 'react';
import logo from '/src/assets/logo.svg'
const Login = () => {
    return (
<div className="login-container rounded-md">
  {/* PhotoBooth Logo */}
  <div className="flex justify-center mb-8">
    <img src={logo} alt="PhotoBooth" className="h-[51px]" />
  </div>
  {/* Login Form */}
  <div className="bg-white p-6 border border-gray-300 mb-3 rounded-md">
    <form>
      {/* Username/Email Field */}
      <div className="mb-3">
        <div className="relative">
          <input type="text" className="form-input" placeholder="Phone number, username, or email" aria-label="Phone number, username, or email" />
        </div>
      </div>
      {/* Password Field */}
      <div className="mb-3">
        <div className="relative">
          <input type="password" className="form-input" placeholder="Password" aria-label="Password" />
          <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs">
            Show
          </button>
        </div>
      </div>
      {/* Login Button */}
      <div className="mb-4">
        <button type="submit" className="login-button">
          Log in
        </button>
      </div>
      {/* OR Separator */}
      <div className="or-separator">
        OR
      </div>
      <div className="mb-4">
        <button type="submit" className="login-button">
          Log in with Google
        </button>
      </div>
    </form>
  </div>
  {/* Sign Up Box */}
  <div className="bg-white p-6 border border-gray-300 text-center ">
    <p className="text-sm">
      Don't have an account? <a href="./register.html" className="text-blue-500 font-semibold">Sign up</a>
    </p>
  </div>
</div>

    );
};

export default Login;