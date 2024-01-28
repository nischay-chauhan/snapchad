import React from 'react';
import SignupCard from './signup-card';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fffc00] via-[#fffa00] to-[#fff700]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Sign up to SnapNext</h1>
        <SignupCard />
      </div>
    </div>
  );
};

export default SignUpPage;
