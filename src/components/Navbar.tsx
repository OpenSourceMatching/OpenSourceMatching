'use client';

import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import NavProfile from './NavProfile';
import Image from 'next/image';

const NavContainer = styled.header`
  background-color: #2C3E50;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 30px;
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
      <Link href="/" style={{display:'flex', alignItems:'center'}}>
        <Image
          src={'/opensourcematch.png'}
          alt="logo"
          width={60}
          height={60}
          style={{borderRadius: '50%'}}
        />
        <NavItem style={{fontSize:'25px', fontFamily:'monospace'}}>Open Source Match</NavItem>
      </Link>
        <div style={{display:'flex', alignItems:'center'}}>
          <Link href="/"><NavItem>Home</NavItem></Link>
          <Link href="/messages"><NavItem>Messages</NavItem></Link>
          <NavProfile />
        </div>
      </NavContainer>
    </>
  )
}

export default Navbar