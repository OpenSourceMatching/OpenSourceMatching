'use client';

import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

const NavContainer = styled.header`
  background-color: tomato;
  height: 60px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Navbar = () => {

  return (
    <>
      <NavContainer>
        <Link href="./">Home</Link>
        <Link href="./profile">Profile</Link>
        <Link href="./messages">Messages</Link>
      </NavContainer>
    </>
  )
}

export default Navbar