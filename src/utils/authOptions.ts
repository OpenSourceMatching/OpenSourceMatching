import { NextAuthOptions } from "next-auth"
import User from "@/models/User";
import { connectToMongo } from "./mongoConnection";

// Overview here:
// https://www.descope.com/blog/post/auth-nextjs13-app-nextauth
// https://docs.descope.com/build/guides/session/client#NextJS

// Used "sign-up-or-in" flow in env variables
export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "descope",
      name: "Descope",
      type: "oauth",
      wellKnown: `https://api.descope.com/${process.env.DESCOPE_PROJECT_ID}/.well-known/openid-configuration`,
      authorization: { params: { scope: "openid email profile" } },
      idToken: true,
      clientId: process.env.DESCOPE_PROJECT_ID, 
      clientSecret: process.env.DESCOPE_ACCESS_KEY,
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    },
  ],
  callbacks: {
    async signIn( {profile} ) {
      console.log('profile: ', profile);
      if (!profile?.email) {
        return false;
      }

      try {
        // connect to mongo
        await connectToMongo();
        
        // Check if user is already in the database and create if not
        const user = await User.findOne({ email: profile.email });
        
        if (!user) {
          await User.create({
            email: profile.email,
            name: profile.name,
            image: profile.image,
          });
        }

        return true;
      } catch (error) {

        console.error(error);
        return false;
      }

    }
  }
}
