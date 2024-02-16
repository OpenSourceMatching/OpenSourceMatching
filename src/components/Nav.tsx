'use client'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

const Nav = () => {
  // useSession is a hook that returns an object with the session and status. It can only be used client side
  const { data: session, status } = useSession();

  console.log('status: ', status);
  console.log('session: ', session);
  return (
    <div>
      <h1>Nav Bar Test</h1>
      {/* Tells nextauth to use descope as the login provider and when finished, go back to home page when you aren't already authenticated */}
      {status !== 'authenticated' &&
      <button onClick={() => signIn("descope", { callbackUrl: "/" })}>Sign Up or Sign In</button>
      }
      {/* Show profile picture if already signed in */}
      {status === 'authenticated' &&
      <>
        <h3>{session.user?.name}</h3>
        <div>
          <Image
            src={session.user?.image || '/profile-placeholder.svg'}
            alt="profile picture"
            width={50}
            height={50}/>
        </div>
        <button onClick={() => signOut({redirect: false, callbackUrl: '/'})}>Sign Out</button>
      </>
      }
    </div>
  )
}

export default Nav