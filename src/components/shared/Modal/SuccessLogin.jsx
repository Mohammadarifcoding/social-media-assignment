import React from 'react';
import { Link } from 'react-router';

const SuccessLogin = () => {
  return (
    <div className="dialog flex justify-center items-center mx-auto max-w-[320px]">
      <div className="p-8 flex flex-col items-center">
        <div className="success-icon mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">Account Logged In</h3>
        <p className="text-gray-500 text-center mb-6">
          Your PhotoBooth account has been Logged In successfully.
        </p>
        <Link to={'/'}>
          <button type="button" className="primary-button mb-3">
            Continue to Feed
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessLogin;
