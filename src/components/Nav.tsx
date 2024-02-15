'use client'
import React from 'react'
import { useSession, signIn } from 'next-auth/react';

const Nav = () => {
  const { data: session, status } = useSession();

  console.log('status: ', status);
  console.log('session: ', session);
  return (
    <div>
      <h1>Nav Bar Test</h1>
      {/* Tells nextauth to use descope as the login provider and when finished, go back to home page */}
      <button onClick={() => signIn("descope", { callbackUrl: "/" })}>Sign Up or Sign In</button>
      <h3>Testing if sign-in worked:</h3>
      <p></p>
      <p>{session?.user?.email}</p>
    </div>
  )
}

export default Nav