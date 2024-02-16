'use client'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import styled from 'styled-components';

const NavProfile = () => {
  const Button = styled.button`
    padding: 5px 15px;
    margin: 0 10px;
    background-color: tomato;
    color: #ffffff; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer;
    font-size: 16px; 
    font-weight: 500; 
    text-align: center;
    display: inline-block;
    &:hover{
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      background-color: maroon;
    }
`
  // useSession is a hook that returns an object with the session and status. It can only be used client side
  const { data: session, status } = useSession();

  console.log('status: ', status);
  console.log('session: ', session);
  return (
    <>
      {/* Tells nextauth to use descope as the login provider and when finished, go back to home page when you aren't already authenticated */}
      {status !== 'authenticated' &&
      <Button onClick={() => signIn("descope", { callbackUrl: "/" })}>Login/ Sign Up</Button>
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
        <Button onClick={() => signOut({redirect: false, callbackUrl: '/'})}>Sign Out</Button>
      </>
      }
    </>
  )
}

export default NavProfile