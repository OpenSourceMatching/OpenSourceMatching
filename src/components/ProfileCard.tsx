'use client';

import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import Link from 'next/link';

const Card = styled.div`
  background-color: #f9f9f9; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover{
    background-color: rgba(227, 227, 227, 0.391);
  }
`;

const CardItem = styled.div`
  color: #2C3E50;
`;
const ProfileCard = ({user}) => {
  return (
    <>
      <Link href='./'>
        <Card>
           <Image
            src={"" || "profile-placeholder.svg"}
            height={125}
            width={125}
            alt="Profile Image"
            style={{borderRadius:'50%', margin:'10px'}}
          />
          <CardItem>{user.name}</CardItem>
          <div>Email: {user.email}</div>
        </Card>
      </Link>
    </>
  )
}

export default ProfileCard