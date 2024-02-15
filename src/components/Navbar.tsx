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
const NavItem = styled.span`
  margin: 0 10px
`;
const Navbar = () => {

  return (
    <>
      <NavContainer>
        <Link href="./"><NavItem>Home</NavItem></Link>
        <Link href="./profile"><NavItem>Profile</NavItem></Link>
        <Link href="./messages"><NavItem>Messages</NavItem></Link>
      </NavContainer>
    </>
  )
}

export default Navbar