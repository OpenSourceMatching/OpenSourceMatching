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
const StyledLink = styled.a`
  margin-left: 20px;
  text-decoration: none; 
  font-size: 16px; 
  cursor: pointer;

  &:hover {
    color: red; 
  }

`;
const Navbar = () => {

  return (
    <>
      <NavContainer>
        <Link href="./"><StyledLink>Home</StyledLink></Link>
        <Link href="./profile"><StyledLink>Profile</StyledLink></Link>
        <Link href="./messages"><StyledLink>Messages</StyledLink></Link>
      </NavContainer>
    </>
  )
}

export default Navbar