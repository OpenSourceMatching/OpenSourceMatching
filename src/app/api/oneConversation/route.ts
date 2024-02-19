import { connectToMongo } from "@utils/mongoConnection";
import User from "@/models/user";


export const GET = async () => {
  try {
    await connectToMongo();
    const allUsers = await User.find({});
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