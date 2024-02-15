import NextAuth from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

// Not sure if I need callback or not
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }