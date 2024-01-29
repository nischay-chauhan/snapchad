import React from "react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "@/auth";

const LogoutButton = () => {
  async function logoutAction(){
    "use server"
    await signOut()
  }
  return (
    <form action={logoutAction}>
      <Button className="bg-black text-white rounded-full p-3 text-xs md:text-sm">
        <LogOut className="cursor-pointer" />
      </Button>
    </form>
  );
};

export default LogoutButton;
