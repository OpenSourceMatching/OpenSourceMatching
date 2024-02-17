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
  width: 60rem;
  // display: flex;
  margin: 15px auto;
  &:hover{
    background-color: rgba(227, 227, 227, 0.391);
  }
`;
const Button = styled.button`
  padding: 10px 10px;
  background-color: limegreen;
  color: #ffffff; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer;
  font-weight: 500; 
  text-align: center;
  margin-left: auto;
  &:hover{
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: green;
  }
`
const ProfileCard = ({user}) => {
  return (
    <>
      <Card>

        <div style={{border: '1px solid red', display:'flex', alignItems:'center'}}>
          <Image
              src={"" || "profile-placeholder.svg"}
              height={50}
              width={50}
              alt="Profile Image"
              style={{borderRadius:'50%', margin:'10px'}}
            />

          <div style={{border: '1px solid purple'}}>
            <Link href='/user/'><h3>{user.name || 'User Name'}</h3></Link>
            <div>
              <a href={'https://' + user.linkedIn}>LinkedIn | </a>
              <a href={user.github}>GitHub | </a>
              <a href={'https://' + user.personalWebsite}>Website | </a>
              <a href={'mailto: user.email'}>Email</a>
            </div>
            <div>{user.activeProjects.length} Active Projects</div>
          </div>
          
          <Button><Link href='./messages'>Message</Link></Button>
          
        </div>

        <div style={{border: '1px solid blue'}}>
            <h4>About</h4>
            {user.about || 'I am a Full Stack Engineer.'}
            <h4>Tech</h4>
            {user.technologies || 'Javascript, React, Node.js.'}
        </div>

      </Card>
    </>
  )
}

export default ProfileCard