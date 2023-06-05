import NextAuth from "next-auth";
import GoogleProviders from "next-auth/providers/google";


export default NextAuth({
  
  providers: [
  //Google Provider
  GoogleProviders({
    clientId: process.env.GOOGLE_ID ? process.env.GOOGLE_ID :"",
    clientSecret: process.env.GOOGLE_SECRET ? process.env.GOOGLE_SECRET :"",

  }),  
  ],
  secret: process.env.JWT_SECRET
});