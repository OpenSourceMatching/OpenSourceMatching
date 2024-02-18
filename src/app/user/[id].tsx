import React from 'react'
import User from '@models/user'
import { getAllUserIds, getUserData } from '@utils/getUsers';

// Documentation: https://nextjs.org/learn-pages-router/basics/dynamic-routes/implement-getstaticpaths

const UserPage = () => {
  // state for if user is logged in
  
  return (
    <div>page</div>
  )
}


export async function getStaticPaths() {
  // Return a list of possible value for id

  const paths = [
    {
      params: {
        id: '1233'
      },
    },
    {
      params: {
        id: '7899'
      },
    }
  ]; // needs to actually equal a function that fetches all the data. Data must be an array of objects
  // Important: The returned list is not just an array of strings — it must be an array of objects that look like the comment above. Each object must have the params key and contain an object with the id key (because we’re using [id] in the file name). Otherwise, getStaticPaths will fail.

  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the user using params.id

  const postData = getUserData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default UserPage;