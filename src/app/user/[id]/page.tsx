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

  console.log('userData: ', userData);

  return (
    <div>
      <h1>User Page</h1>
      <div>{userData.name}</div>
      <div>{userData.email}</div>
    </div>

  )
}

export default UserPage;

// export async function getStaticPaths() {
//   // Return a list of possible value for id

//   const paths = getAllUserIds();
//   // needs to actually equal a function that fetches all the data. Data must be an array of objects
//   // Important: The returned list is not just an array of strings — it must be an array of objects that look like the comment above. Each object must have the params key and contain an object with the id key (because we’re using [id] in the file name). Otherwise, getStaticPaths will fail.

//   console.log('paths: ', paths);
//   return {
//     paths,
//     fallback: true // if false, it will 404 for any paths not returned by getStaticPaths. If true, it will try to render the page on the first request and then generate the static page. True will allow users to create a profile and see it immediately, but it will take longer to load the page.
//   }

// }

// export async function getStaticProps({ params }: any) {
//   // Fetch necessary data for the user using params.id

//   const userData = getUserData(params.id);
//   console.log('userData: ', userData);
//   return {
//     props: {
//       userData,
//     },
//   };
// }
