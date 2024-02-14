import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import { connectToMongo } from "@/utils/mongoConnection";
import * as z from 'zod';

// Validation of fields
const updateProfileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  linkedIn: z.string().url().optional(), 
  github: z.string().url().optional(),
  personalWebsite: z.string().url().optional(),
  about: z.string().optional(),
  location: z.string().optional(),
  zip: z.number().optional(),
  technologies: z.array(z.string()).optional(),
  lookingFor: z.enum(["someone to work on my project", "to work on someone else's project", "both"]).optional(), 
});


// ** Handle GET requests to /api/profile ***

// Need to send requests like this: http://localhost:3000/api/profile?userId=65ca8ba68909d19b19420b5c
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

    // find user by id
    const userDetails: typeof User | null = await User.findById(userId);

    if (!userDetails) {
      return NextResponse.json({ message: "User not found" }, {
        status: 404,
      });
    }

    // return user data
    return NextResponse.json(userDetails, { status: 200 });

  } catch (error: any) {
    console.error("Error in api/profile GET: ", error);

    return NextResponse.json({ message: error.message }, {
      status: 500,
    });
  }
};

// ** Handle PATCH requests to /api/profile ***
// Send requests like: http://localhost:3000/api/profile?userId=65ca8ba68909d19b19420b5c
  // include all data in the body of the request
export const PATCH = async (req: NextRequest) => {
  try {
    const userId = req.nextUrl.searchParams.get('userId');
    if (!userId) {
      return NextResponse.json({ message: "User id not sent" }, {
        status: 404,
      });
    }
    const updateData = await req.json(); // Get update data from request body
    // *** Need to validate the data before updating the user ***

    const validattedData = updateProfileSchema.parse(updateData);
    console.log("validattedData: ", validattedData);

    await connectToMongo();

    const updatedUser = await User.findByIdAndUpdate(userId, validattedData, {
      new: true, // Return the updated document
    });

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error: any) {
    console.error("Error in api/profile PATCH: ", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};