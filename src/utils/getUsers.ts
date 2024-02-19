import User from '@models/user'
import { connectToMongo } from './mongoConnection';

// followed documentation here: https://nextjs.org/learn-pages-router/basics/dynamic-routes/implement-getstaticprops
// then went to webdevsimplified

// not sure if this is necessary - may be for deployment
export async function getAllUserIds() {
  console.log('getAllUserIds');
  // connect to db
  await connectToMongo();

  // get array of user ids
  const users= await User.find({}).exec();

  // Log to test it
  console.log('userIds: ', users.map((user) => {
    return {
      params: {
        id: user._id.toString(),
      },
    };
  }));

  return users.map((user) => {
    return {
        id: user._id,
    };
  });
}

export async function getUserData(id: string) {
  // connect to db
  await connectToMongo();

  // console.log('id: ', id);

  // get user data
  const user = await User.findById(id).exec();
  
  // console.log('user: ', user);
  // remove messages from user data
  delete user.messages;

  // Combine the data with the id
  return user;
}