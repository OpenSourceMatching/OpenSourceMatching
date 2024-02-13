import React from 'react'
import styled from 'styled-components'

const ProfileCard = ({user}) => {
  const Card = styled.div`
    background-color: #f9f9f9; 
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    width: 20rem;
  `
  return (
    <>
      <Card>
        <img src="#" alt="profile image" />
        <div>Name: {user.name}</div>
        <div>Email: {user.email}</div>
      </Card>
    </>
  )
}

export default ProfileCard