import React from 'react'
import User from '@models/user'
import { getAllUserIds, getUserData } from '@utils/getUsers';
import { notFound } from 'next/navigation';

// Documentation: https://nextjs.org/learn-pages-router/basics/dynamic-routes/implement-getstaticpaths

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
    </div>
  )
}

export default UserPage;


// Pre-generate pages up front
export async function generateStaticParams() {
  const paths = await getAllUserIds();
  return paths;
}