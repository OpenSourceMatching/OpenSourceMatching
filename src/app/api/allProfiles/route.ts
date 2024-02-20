import { connectToMongo } from "@utils/mongoConnection";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";

// Potential Query Params
// searchKeyword: string
  // searches for technologies and active projects
// lookingFor: string
// distance: int - distance in miles (STRETCH)
export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const searchKeyword = req.nextUrl.searchParams.get('searchKeyword');
    const lookingFor = req.nextUrl.searchParams.get('lookingFor');

    await connectToMongo();
    const allUsers = await User.find({});
    // may need to paginate this
    const allUsersWithoutSensitiveData = allUsers.map((user) => {
      return {
        name: user.name,
        email: user.email,
        _id: user._id,
        image: user.image,
        linkedIn: user.linkedIn,
        github: user.github,
        personalWebsite: user.personalWebsite,
        about: user.about,
        location: user.location,
        zip: user.zip,
        age: user.age,
        employer: user.employer,
        technologies: user.technologies,
        lookingFor: user.lookingFor,
        activeProjects: user.activeProjects,
      };
    });


    return new Response(JSON.stringify(allUsersWithoutSensitiveData), {
      status: 200,
    });
  } catch (error) {
    console.error("Error in api/allProfiles GET: ", error);
    return new Response(JSON.stringify({'message' : 'Error finding user data'}), {
      status: 400,
    });
  }
}