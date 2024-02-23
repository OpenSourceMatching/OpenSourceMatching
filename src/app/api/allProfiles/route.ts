import { connectToMongo } from '@utils/mongoConnection';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/user';

// Potential Query Params
// Ex: http://localhost:3000/api/allProfiles?page=1&searchkeyword=javascript&lookingFor=both
// Page and limit for pagination

// searchKeyword: string
// searches for technologies and active projects
// lookingFor: string
// distance: int - distance in miles (STRETCH)
export const GET = async (req: NextRequest, res: NextResponse) => {
  console.log('HEY NANCY I GOT INTO ALL PROFILES');
  try {
    const searchKeyword = req.nextUrl.searchParams.get('searchkeyword');
    const lookingFor = req.nextUrl.searchParams.get('lookingFor');
    const page = Number(req.nextUrl.searchParams.get('page')) || 1;

    // console.log('searchKeyword: ', searchKeyword);
    // console.log('lookingFor: ', lookingFor);
    // console.log('page: ', page);

    await connectToMongo();
    let allUsers;

    // Note: I don't think skip and limit are particularly efficient for large datasets
    if (!searchKeyword && !lookingFor) {
      allUsers = await User.find({})
        .select(
          'name email _id image linkedIn github personalWebsite about location zip age employer technologies lookingFor activeProjects'
        )
        .limit(20)
        .skip((page - 1) * 20)
        .exec();
    } else if (searchKeyword && !lookingFor) {
      // console.log('searchKeyword: ', searchKeyword);
      allUsers = await User.find({
        $or: [
          { technologies: { $in: [searchKeyword] } },
          { 'activeProjects.title': { $in: [searchKeyword] } },
          { 'activeProjects.description': { $in: [searchKeyword] } },
        ],
      })
        .select(
          'name email _id image linkedIn github personalWebsite about location zip age employer technologies lookingFor activeProjects'
        )
        .limit(20)
        .skip((page - 1) * 20)
        .exec();
    } else if (!searchKeyword && lookingFor) {
      allUsers = await User.find({
        lookingFor: lookingFor,
      })
        .select(
          'name email _id image linkedIn github personalWebsite about location zip age employer technologies lookingFor activeProjects'
        )
        .limit(20)
        .skip((page - 1) * 20)
        .exec();
    } else {
      allUsers = await User.find({
        $and: [
          {
            lookingFor: lookingFor,
          },
          {
            $or: [
              { technologies: { $in: [searchKeyword] } },
              { 'activeProjects.title': { $in: [searchKeyword] } },
              { 'activeProjects.description': { $in: [searchKeyword] } },
            ],
          },
        ],
      })
        .select(
          'name email _id image linkedIn github personalWebsite about location zip age employer technologies lookingFor activeProjects'
        )
        .limit(20)
        .skip((page - 1) * 20)
        .exec();
    }

    // console.log('allUsers: ', allUsers);
    return new Response(JSON.stringify(allUsers), {
      status: 200,
    });
  } catch (error) {
    console.error('Error in api/allProfiles GET: ', error);
    return new Response(
      JSON.stringify({ message: 'Error finding user data' }),
      {
        status: 400,
      }
    );
  }
};
