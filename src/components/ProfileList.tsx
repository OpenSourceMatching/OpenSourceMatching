'use client';
import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import styled from 'styled-components';

const ProfileList = () => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 5rem;
    flex-grow: 1;
  `;

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
  return <ProfileCard key={user.id} user={user}/>
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