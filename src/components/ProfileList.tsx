'use client';

import React, { useEffect, useState, Suspense } from 'react'
import ProfileCard from './ProfileCard'
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  margin: 35px 0px;
  // border: 2px solid red;
`;

const ContainerItem = styled.span`
  
`;

const ProfileList = () => {

  type Users = {
    id: number;
    name: string;
  }
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
  },[])

 const userList = users.map(user => {
  return (
    <span style={{alignItems: 'center', display:'flex', justifyContent:'center'}} key={user.id}>
      <ProfileCard user={user}/>
    </span>
  )
 })
 
  return (
    <>
        <Container>
          {userList}
        </Container>
    </>
  )
}

export default ProfileList