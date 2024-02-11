import { auth } from "@/auth";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  // console.log(session);

  return (
    <div className='bg-gradient-to-b from-[#fffc00] via-[#fffa00] to-[#fff700]'>
      <div className='min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto'>
        <Navbar />
        <main className='flex flex-1 flex-col md:flex-row items-center justify-center px-8 mt-4'>
          <div className='flex-1 md:text-left text-center h-full'>
            <h1 className='text-4xl md:text-6xl font-bold text-[#4c68d7] hover:text-[#32559e] transition duration-300'>
              Welcome to SnapChad for Developers!
            </h1>
            <p className='mt-4 text-xl font-semibold text-[#666]'>
              Share your code with friends, receive feedback, and elevate your programming skills.
            </p>
            <div className='mt-4'>
              <p className='mt-2 text-lg font-semibold text-[#888]'>
                What are you waiting for? Join the coding community now!
              </p>
            </div>
            {!session ? (
              <Button
                asChild
                className='mt-4 bg-[#4c68d7] hover:bg-[#32559e] text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0'
              >
                <Link href='/login' className='max-w-max'>
                  <Image src='/logo.svg' width={20} height={20} alt='Snapchad logo' />
                  Log in to get started
                </Link>
              </Button>
            ) : (
              <Button
                asChild
                className='mt-4 bg-[#4c68d7] hover:bg-[#32559e] text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0'
              >
                <Link href='/chat' className='max-w-max'>
                  <Image src='/logo.svg' width={20} height={20} alt='Snapchad logo' />
                  Start chatting with friends
                </Link>
              </Button>
            )}
          </div>
          <div className='flex-1 md:w-full md:flex'>
            <Image alt='Avatar' width={651} height={621} src='/hero.png' />
          </div>
        </main>
      </div>
    </div>
  );
}
