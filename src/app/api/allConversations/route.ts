import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import { connectToMongo } from "@/utils/mongoConnection";

type conversationType = {
  otherUser: String,
  type: {
    message: String
    date: Date,
    isUserSender: Boolean,
  }
  default: [],
}

// return all conversations and the last message in each conversation
export const GET = async (req: NextRequest) => {
  try {
    const userId = req.nextUrl.searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ message: "User id not sent" }, {
        status: 404,
      });
    }

    // connect to db if not already connected
    await connectToMongo();

    // find user by id (need to populate otherUser field in messages array to get other user's name)
    const userDetails = await User.findById(userId).populate({
      path: "messages",
      populate: {
        path: "otherUser",
        model: "User",
      }
    });

    if (!userDetails) {
      return NextResponse.json({ message: "User not found" }, {
        status: 404,
      });
    }

    // 
    if (userDetails) {
      const messages = userDetails.messages.map(conversation => {
        const lastMessage = conversation.messages[conversation.messages.length - 1];
  
        return {
          otherUser: conversation.otherUser,
          lastMessage,
        };
      });

      // return user data
      return NextResponse.json(userDetails, { status: 200 });
    }


  } catch (error: any) {
    console.error("Error in api/profile GET: ", error);

    return NextResponse.json({ message: error.message }, {
      status: 500,
    });
  }
};
