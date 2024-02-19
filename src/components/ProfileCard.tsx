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
`;

const CardItem = styled.div`
  color: #2C3E50;
`;
const ProfileCard = ({user}: any) => {
  // Link needs to be dynamic
  return (
    <>
      <Card>
        {/* **John edits to test out. Hard-coded to go to one id but will need to be dynamic */}
        <Link
          href={`/user/65ce8cc7e2cb119e6308119e`}
        >
          <Image
            src={"" || "/default_image.png"}
            height={125} 
            width={125}
            alt="Profile Image"
            style={{borderRadius:'50%', margin:'10px'}}
          />
          <CardItem>{user.name}</CardItem>
          <div>Email: {user.email}</div>
        </Link>
      </Card>
    </>
  )
}

export default ProfileCard