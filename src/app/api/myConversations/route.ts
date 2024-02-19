import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import { connectToMongo } from "@/utils/mongoConnection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

type mesType = {
  otherUser: String;
  conversation: {
    message: String;
    date: Date;
    isUserSender: Boolean;
  }[];
};

// return all conversations and the last message in each conversation
export const GET = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "User not logged in" },
        {
          status: 404,
        }
      );
    }

    // connect to db if not already connected
    await connectToMongo();

    // find user by id (need to populate otherUser field in messages array to get other user's name)
    const userDetails = await User.findOne({
      email: session.user.email,
    }).populate({
      path: "messages",
      populate: {
        path: "otherUser",
        model: "User",
      },
    });

    if (!userDetails) {
      return NextResponse.json(
        { message: "User not found" },
        {
          status: 404,
        }
      );
    }

    // Need to map over messages and get the last message in each conversation and the other user's name
    // if (userDetails) {
    //   const messages = userDetails.messages.map(mes:mesType => {
    //     const lastMessage = mes.messages[mes.messages.length - 1];

    //     return {
    //       otherUser: mes.otherUser,
    //       lastMessage,
    //     };
    //   });

    // return user data
    return NextResponse.json(userDetails, { status: 200 });
  } catch (error: any) {
    console.error("Error in api/profile GET: ", error);

    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
};
