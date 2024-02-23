'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const MessageCard = styled.div`
  background-color: #f9f9f9; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px 30px;
  width: 60rem;
  display: flex;
  margin: 15px auto;
  &:hover{
    background-color: rgba(227, 227, 227, 0.391);
  }
`;

const MessageChatCard = ({user}: any) => {
  return (
    <>
      <MessageCard>
        <div style={{display:'flex', alignItems:'center'}}>
          <Image
              src={user.image || "profile-placeholder.svg"}
              height={100}
              width={100}
              alt="Profile Image"
              style={{borderRadius:'50%', margin:'10px'}}
            />
        </div>
        <div style={{display:'flex', flexDirection:'column', marginLeft:'25px', justifyContent:'space-around'}}>
          <div style={{display:'flex'}}>
            <div>
              <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                <Link href={`user/${user._id}`}><h2>{user.name}</h2></Link>
              </div>
            </div>
          </div>

          <div style={{display:'flex', color:'#a7a7a7'}}>
              <br />
              {user.message || 'No messages.'}
              <br />
              <br />
          </div>
        </div>

      </MessageCard>
    </>
  )
}

export default MessageChatCard;