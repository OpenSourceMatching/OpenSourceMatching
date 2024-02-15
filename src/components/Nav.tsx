'use client'
import React from 'react'
import { useSession, signIn } from 'next-auth/react';

const Nav = () => {
  return (
    <div>
      <h1>Nav Bar Test</h1>
      {/* Tells nextauth to use descope as the login provider and when finished, go back to home page */}
      <button onClick={() => signIn("descope", { callbackUrl: "/" })}>Sign Up or Sign In</button>
    </div>
  )
}

export default Nav