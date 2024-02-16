'use client';

import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

const NavContainer = styled.header`
  background-color: #2C3E50;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px; /* Increased padding for more horizontal space */
  color: #ECF0F1; /* Light grey for text, ensuring good contrast against the dark background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /
`;
const NavItem = styled.span`
  margin: 0 10px
`;
const Navbar = () => {

  return (
    <>
      <NavContainer>
        <Link href="./"><NavItem>Open Source Matcher</NavItem></Link>
        <div>
          <Link href="./"><NavItem>Home</NavItem></Link>
          <Link href="./profile"><NavItem>Profile</NavItem></Link>
          <Link href="./messages"><NavItem>Messages</NavItem></Link>
        </div>
      </NavContainer>
    </>
  )
}

export default Navbar