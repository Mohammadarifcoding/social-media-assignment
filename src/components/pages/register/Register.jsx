import React from 'react';
import logo from '/src/assets/logo-2.svg'
const Register = () => {
    return (
<div className="signup-container">
  {/* PhotoBooth Logo */}
  <div className="flex justify-center mb-4">
    <img src={logo} alt="PhotoBooth" className="h-[51px]" />
  </div>
  {/* Sign Up Form */}
  <div className="bg-white p-6 border border-gray-300 mb-3">
    {/* Headline */}
    <h2 className="text-center font-semibold text-gray-500 text-lg mb-4">
      Sign up to see photos and videos from your friends.
    </h2>
    <form>
      {/* Email/Phone Field */}
      <div className="mb-2">
        <div className="relative">
          <input type="text" className="form-input" placeholder="Email" aria-label="Email" />
        </div>
      </div>
      {/* Full Name Field */}
      <div className="mb-2">
        <div className="relative">
          <input type="text" className="form-input" placeholder="Full Name" aria-label="Full Name" />
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
      {/* Confirm Password Field */}
      <div className="mb-3">
        <div className="relative">
          <input type="password" className="form-input" placeholder="Confirm Password" aria-label="Confirm Password" />
          <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs">
            Show
          </button>
        </div>
      </div>
      {/* Sign Up Button */}
      <div className="mb-2">
        <button type="submit" className="signup-button">
          Sign up
        </button>
      </div>
    </form>
  </div>
  {/* Login Box */}
  <div className="bg-white p-6 border border-gray-300 text-center mb-4 rounded-md">
    <p className="text-sm">
      Have an account? <a href="./login.html" className="text-blue-500 font-semibold">Log in</a>
    </p>
  </div>
</div>

    );
};

export default Register;