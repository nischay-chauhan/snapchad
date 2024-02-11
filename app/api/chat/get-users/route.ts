import { auth } from "@/auth"
import { connectToMongoDB } from "@/lib/db";
import User, { UserModel } from "@/models/user.model";
import { NextResponse } from "next/server";


export const GET = async () => {
    try{
        const session = await auth();
        if(!session) return;
        await connectToMongoDB();

        const users:UserModel[] = await User.find();
        const filteredUsers = users.filter((user) => user._id.toString() !== session.user.id?.toString());
        return NextResponse.json(filteredUsers);
    }catch(error){
        // console.log("Error get0uer route handlers")
        throw error;
    }
}