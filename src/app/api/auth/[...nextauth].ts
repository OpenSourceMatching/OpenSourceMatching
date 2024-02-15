import NextAuth from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

// Not sure if I need callback or not
export default NextAuth(authOptions);