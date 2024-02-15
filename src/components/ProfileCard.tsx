'use client';

import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background-color: #f9f9f9; 
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 20rem;
`
const ProfileCard = ({user}) => {
  return (
    <>
      <Card>
        <img 
          src={"#" || 'default-image.jpg'} 
          alt="profile image" 
        />
        <div>Name: {user.name}</div>
        <div>Email: {user.email}</div>
      </Card>
    </>
  )
}

export default ProfileCard