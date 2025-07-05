import React from 'react';

const AccountCreate = () => {
    return (
<div className="dialog">
  <div className="p-8 flex flex-col items-center">
    <div className="success-icon mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center mb-2">Account Created</h3>
    <p className="text-gray-500 text-center mb-6">Your PhotoBooth account has been created successfully.</p>
    <button className="primary-button mb-3">
      Continue to Feed
    </button>
    <button className="secondary-button">
      Complete Your Profile
    </button>
  </div>
</div>

    );
};

export default AccountCreate;