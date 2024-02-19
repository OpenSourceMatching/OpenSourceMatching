import React from 'react'
import User from '@models/user'
import { getAllUserIds, getUserData } from '@utils/getUsers';
import { notFound } from 'next/navigation';
import exp from 'constants';

// Documentation: https://nextjs.org/learn-pages-router/basics/dynamic-routes/implement-getstaticpaths


// If I want to revalidate the page every 10 seconds, I can set revalidate to 10. This will cause the page to be re-rendered with the latest data. This is useful when the data is updated at a very high frequency.
// export const revalidate = 10;

const UserPage = async ( { params }: {params: { id: string}}) => {
  // state for if user is logged in
  const userData = await getUserData(params.id.toString());
  
  if (!userData) {
    return notFound();
  }

  // console.log('userData: ', userData);

  // Can use the useParams() hook to get the id from the URL in any child component

  return (
    <div>
      <h1>User Page</h1>
      <div>{userData.name}</div>
      <div>{userData.email}</div>
      <div>{userData.linkedIn}</div>
    </div>
  )
}

export default UserPage;


// Pre-generate pages up front
// Only runs at build time
// I don't think I want this because people should be able to update their profile and see it immediately
// export async function generateStaticParams() {
//   const paths = await getAllUserIds();
//   return paths;
// }