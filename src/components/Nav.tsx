'use client'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

const Nav = () => {
  const { data: session, status } = useSession();

  const handleLogOut = async () => {
    await signOut({redirect: false, callbackUrl: '/'})
  }

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
            src={session.user?.image || '/profile-placeholder.png'}
            alt="profile picture"
            width={50}
            height={50}/>
        </div>
        <button onClick={handleLogOut}>Sign Out</button>
      </>
      }
    </div>
  )
}

export default Nav