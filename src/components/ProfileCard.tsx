'use client';

import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background-color: #f9f9f9; 
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 20rem;
  display: flex;
  flex-direction: column;
`;

const CardItem = styled.div`
  color: red;
`;
const ProfileCard = ({user}) => {
  return (
    <>
      <Card>
        <img 
          src={"#" || 'default-image.jpg'} 
          alt="profile image" 
        />
        <CardItem>Name: {user.name}</CardItem>
        <div>Email: {user.email}</div>
      </Card>
    </>
  )
}

export default ProfileCard