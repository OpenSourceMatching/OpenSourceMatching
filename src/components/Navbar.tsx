'use client';

import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

const NavContainer = styled.header`
  background-color: tomato;
  height: 80px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 20px;
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