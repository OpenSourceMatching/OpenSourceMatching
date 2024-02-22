import { connectToMongo } from "@utils/mongoConnection";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import User from "@/models/user";
import { authOptions } from "@utils/authOptions";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    // get the session
    const session = await getServerSession(authOptions);
    console.log("session: ", session);
    
    if (!session?.user?.email) {
      return NextResponse.json({ message: "User not logged in" }, {
        status: 404,
      });
    }

    // get query params for the other user
    const otherUserId = req.nextUrl.searchParams.get('otherUserId');

    // connect to mongo
    await connectToMongo();
    
    // find message by email (to find user) and otherUerId (to find the other user)
    const messages = await User.findOne({email: session.user.email }).select('messages').populate('messages.otherUser', 'name image').exec();


    return new Response(JSON.stringify(allUsers), {
      status: 200,
    });
  } catch (error) {
    console.error("Error in api/allProfiles GET: ", error);
    return new Response(JSON.stringify({'message' : 'Error finding user data'}), {
      status: 400,
    });
  }
}