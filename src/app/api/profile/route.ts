import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import { connectToMongo } from "@/utils/mongoConnection";


// Need to send requests like this: http://localhost:3000/api/profile?userId=65ca8ba68909d19b19420b5c
export const GET = async (req: any, res: NextResponse) => {
  try {
    // console.log('req: ', req);
    console.log('req.nextUrl.searchParams: ', req.nextUrl.searchParams);
    console.log('req.nextUrl.searchParams userId: ', req.nextUrl.searchParams.get('userId'));

    const userId = req.nextUrl.searchParams.get('userId');
    console.log("userId: ", userId);
    if (!userId) {
      return new Response(JSON.stringify({ message: "User id not sent" }), {
        status: 404,
      });
    }

    // connect to db if not already connected
    await connectToMongo();

    // find user by id
    const userDetails = await User.findById(userId);

    if (!userDetails) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // return all user data
    return new Response(JSON.stringify(userDetails), {
      status: 200,
    });
  } catch (error) {
    console.error("Error in api/profile PATCH: ", error);

    return new Response(JSON.stringify({ message: "Unknown error" }), {
      status: 404,
    });
  }
};