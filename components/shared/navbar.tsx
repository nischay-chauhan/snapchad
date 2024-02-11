import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import LogoutButton from "./logoutButton";
import { auth } from "@/auth";

const Navbar = async() => {
  const session = await auth();
  return (
    <header className='w-full py-4 px-8 flex justify-between items-center'>
      <Link href='/' passHref>
        <Image src='/logo.svg' width={40} height={40} alt='Snapchat logo' className='cursor-pointer' />
      </Link>
      <div className='flex space-x-1'>
        <Button className='bg-transparent hover:bg-primary/5 text-black'>Stories</Button>
        <Button className='bg-transparent hover:bg-primary/5 text-black'>Spotlight</Button>
        <Link href='/chat' passHref>
          <Button className='bg-transparent hover:bg-primary/5 text-black'>Chat</Button>
        </Link>
      </div>
      <div className='flex space-x-2'>
        <Button className='bg-black text-white rounded-full p-3 text-xs md:text-sm'>Watch tutorial</Button>
      </div>
      <div className='flex space-x-2'>
        {!session && (
          <Button asChild className="bg-black text-white rounded-full p-3 text-xs md:text-sm">
            <Link href="/login">Log in</Link>
          </Button>
        )}
        {session?.user && <LogoutButton />}
      </div>
    </header>
  );
};

export default Navbar;
