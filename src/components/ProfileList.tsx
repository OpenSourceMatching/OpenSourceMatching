'use client';

import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  // border: 2px solid red;
`;

const ProfileList = ({search}) => {
  type Users = {
    id: number;
    name: string;
    email: string;
    technologies: string[];
    linkedIn: string;
  }
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/allProfiles')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
      setLoading(false);
    })
  },[])

  const filteredUsers = users.filter(user => {
    const userName =  user.name ? user.name.toLowerCase() : '';
    return userName.toLowerCase().includes(search.toLowerCase())
  });

  console.log('filtered', filteredUsers)
 const userList = filteredUsers.map(user => {
  return (
    <span style={{alignItems: 'center', display:'flex', justifyContent:'center'}} key={user.email}>
      <ProfileCard user={user}/>
    </span>
  )
 })
 
  return (
    <>
        <Container>
            {loading ? <h2>Loading...</h2> : userList}
        </Container>
    </>
  )
}

export default ProfileList