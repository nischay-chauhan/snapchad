import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LoginCard from './login-card';

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#fffc00] via-[#fffa00] to-[#fff700]'>
      <div className='p-8 bg-white rounded-lg shadow-md min-w-80'>
        <Link href={"/"} className='flex justify-center mb-4'>
          <Image src={"/logo.svg"} width={40} height={40} alt='logo' />
        </Link>
        <h1 className='text-2xl font-bold text-center mb-4'>Log in to SnapNext</h1>
        <LoginCard />
      </div>
    </div>
  );
};

export default LoginPage;
