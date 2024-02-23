'use client';

import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import styled from 'styled-components';
import { set } from 'mongoose';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  // border: 2px solid red;
`;

type ProfileListProps = {
  search: string;
  lookingFor: string;
}

const ProfileList:React.FC<ProfileListProps> = ({search, lookingFor}) => {
  type Users = {
    id: number;
    name: string;
    email: string;
    technologies: string[];
    linkedIn: string;
  }
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = (search: string) => {
    console.log('search: ', search);
    console.log('lookingFor: ', lookingFor);

    fetch(`${search || lookingFor ? 
      `/api/allProfiles?searchkeyword=${search}&lookingFor=${lookingFor}`
      : '/api/allProfiles'}`)
    .then(res => res.json())
    .then(data => {
      setUsers(data)
      console.log('user data: ', data);
      setLoading(false);
    })
  }


  useEffect(() => {
    // console.log('search: ', search);
    // console.log('fetching users: ', `/api/allProfiles?searchkeyword=${search}`);
    fetchUsers(search);
  },[search, lookingFor])

  // const filteredUsers = users.filter(user => {
  //   const userName =  user.name ? user.name.toLowerCase() : '';
  //   return userName.toLowerCase().includes(search.toLowerCase())
  // });

  // console.log('filtered', filteredUsers)
  const userList = users.map(user => {
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