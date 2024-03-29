import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import { connectToMongo } from "@/utils/mongoConnection";
import * as z from 'zod';
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const stringOrEmpty = z.union([z.string(), z.literal("")]).optional();

// Validation of fields
const updateProfileSchema = z.object({
  linkedIn: stringOrEmpty,
  github: stringOrEmpty,
  personalWebsite: stringOrEmpty,
  about: stringOrEmpty,
  employer: stringOrEmpty,
  location: stringOrEmpty,
  zip: stringOrEmpty,
  technologies: z.array(z.string().transform( val => val.toLowerCase())),
  lookingFor: stringOrEmpty,
  age: stringOrEmpty,
  activeProjects: z.array(z.object({
    title: z.string(),
    description: z.string(),
  }).or(z.array(stringOrEmpty))),
});


// ** Handle GET requests to /api/profile ***

// Need to send requests like this: http://localhost:3000/api/myProfile
export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const session = await getServerSession( authOptions);
    // console.log("session: ", session);

    if (!session?.user?.email) {
      return NextResponse.json({ message: "User not logged in" }, {
        status: 404,
      });
    }

    // connect to db if not already connected
    await connectToMongo();

    // find user by id
    const userDetails: typeof User | null = await User.findOne({ email: session.user.email });

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
// Send requests like: http://localhost:3000/api/myProfile
  // include all data in the body of the request
export const PATCH = async (req: NextRequest) => {
  try {
    
    const session = await getServerSession(authOptions);
    console.log("session: ", session);
    
    if (!session?.user?.email) {
      return NextResponse.json({ message: "User not logged in" }, {
        status: 404,
      });
    }
    
    const updateData = await req.json(); // Get update data from request body

    console.log("updateData: ", updateData);

    // Validate data
    const validattedData = updateProfileSchema.parse(updateData);
    console.log("validattedData: ", validattedData);

    await connectToMongo();

    const updatedUser = await User.findOneAndUpdate({email: session.user.email },
      validattedData,
      {
        new: true, // Return the updated document
      }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error: any) {
    console.error("Error in api/profile PATCH: ", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};