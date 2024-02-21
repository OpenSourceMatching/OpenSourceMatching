import React from 'react'
import User from '@models/user'
import { getAllUserIds, getUserData } from '@utils/getUsers';
import { notFound } from 'next/navigation';
import UserProfile from '@components/UserProfile';

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
    <UserProfile
    name={userData.name}
    email={userData.email}
    personalWebsite={userData.personalWebsite}
    linkedIn={userData.linkedIn}
    github={userData.github}
    about={userData.about}
    location={userData.location}
    zip={userData.zip}
    age= {userData.age}
    employer={userData.employer}
    technologies={userData.technologies}
    lookingFor={userData.lookingFor}
    activeProjects={userData.activeProjects}
    image={userData.image}
    />
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