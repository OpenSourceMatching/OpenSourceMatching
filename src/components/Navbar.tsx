'use client';

import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import NavProfile from './NavProfile';

const NavContainer = styled.header`
  background-color: #2C3E50;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  color: #ECF0F1; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;
const NavItem = styled.span`
  margin: 0 10px;
  &:hover {
    color: tomato
  }
`;
const Navbar = () => {

  return (
    <>
      <NavContainer>
        <Link href="./"><NavItem>Open Source Match</NavItem></Link>
        <div>
          <Link href="./"><NavItem>Home</NavItem></Link>
          <Link href="./profile"><NavItem>Profile</NavItem></Link>
          <Link href="./messages"><NavItem>Messages</NavItem></Link>
          <NavProfile />
        </div>
      </NavContainer>
    </>
  )
}

export default Navbar