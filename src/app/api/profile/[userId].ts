import { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/user";
import { connectToMongo } from "@/utils/mongoConnection";

interface RequestUserId extends NextApiResponse {
  query: {
    userId: string;
  };
}

export const GET = async (req: RequestUserId, res: NextApiResponse) => {
  try {
    console.log('req: ', req.query);
    // connect to db if not already connected
    await connectToMongo();

    const { userId } = req.query;
    console.log("userId: ", userId);
    if (!userId) {
      return new Response(JSON.stringify({ message: "User id not sent" }), {
        status: 404,
      });
    }

    const userDetails = await User.findById(userId);

    if (!userDetails) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(userDetails));
  } catch (error) {
    console.error("Error in api/profile PATCH: ", error);

    return new Response(JSON.stringify({ message: "Unknown error" }), {
      status: 404,
    });
  }
};