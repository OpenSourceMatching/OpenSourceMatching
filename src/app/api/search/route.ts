import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import { connectToMongo } from "@/utils/mongoConnection";

// lets user search all other profiles with 1) a keyword and/or 2) lookingFor option
// **** This is a complicated route and need to sync up on details
export const GET = async (req: NextRequest) => {
  try {
    const searchKeyword = req.nextUrl.searchParams.get('searchKeyword');
    const lookingFor = req.nextUrl.searchParams.get('lookingFor');
    
    // connect to db if not already connected
    await connectToMongo();

    // find users based on looking for (ideally should exclude current user from results)
    const userDetails: typeof User[] | null = await User.find({ lookingFor: lookingFor });
    
    // *** Need a lot more logic here to handle searchKeyword


    return NextResponse.json(userDetails, { status: 200 });

  } catch (error: any) {
    console.error("Error in api/profile GET: ", error);

    return NextResponse.json({ message: error.message }, {
      status: 500,
    });
  }

}