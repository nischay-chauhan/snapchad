"use server"
import { auth, signIn, signOut } from "@/auth";
import { connectToMongoDB } from "./db";
import {v2 as cloudinary} from "cloudinary"
import { Content } from "next/font/google";
import Message, { IMessageDocument } from "@/models/message.model";
import Chat, { IChatDocument } from "@/models/chat.model";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function authAction() {
    try{    
        await signIn("github");
    }catch(error: any){
      if(error.message === "NEXT_REDIRECT"){
        throw error
      }
      return error.message
    }
  
}

export   async function logoutAction(){
    await signOut()
}

export const sendMessageAction = async(recieverId:string,content:string , messageType : "image" | "text") => {
  try{
    const session = await auth()
    if(!session) return;
    await connectToMongoDB()
    const senderId = session.user._id

    let uploadedResponse;
    if(messageType === "image"){
      uploadedResponse = await cloudinary.uploader.upload(
        content
      )
    }

    const newMessage:IMessageDocument = await Message.create({
      sender: senderId,
      receiver: recieverId,
      content: uploadedResponse?.secure_url || content,
      messageType: messageType,
      opened: false,
    })

    let chat:IChatDocument | null = await Chat.findOne(
      { participants: { $all: [senderId, recieverId] } },
    )

    if(!chat){
      chat = await Chat.create({
        participants: [senderId, recieverId],
        messages: [newMessage._id],
      })
    }else{
      chat.messages.push(newMessage._id)
      await chat.save()
    }

    return newMessage
}catch(error : any){
  console.error("Error in sendMessageAction", error.message)
  throw error
}

}