'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { string } from '../../node_modules/joi/lib/index';

const MessageCard = styled.div`
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px 30px;
  width: 60rem;
  display: flex;
  margin: 5px auto;
  &:hover {
    background-color: rgba(227, 227, 227, 0.391);
    cursor: pointer;
  }
`;

const MessageOpened = styled.div`
  color: ${(props) => (props.$isUserSender ? 'gray' : '#173fac')};
  display: flex;
  border: ${(props) => {
    console.log(props, 'props');
  }};
`;

const S = {
  MessageCard: MessageCard,
  MessageOpened: MessageOpened,
};

const MessageChatCard = ({ user }: any) => {
  console.log(user.name, user.isUserSender);
  return (
    <>
      <S.MessageCard>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={user.image || 'profile-placeholder.svg'}
            height={80}
            width={80}
            alt='Profile Image'
            style={{ borderRadius: '50%', margin: '10px' }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '25px',
            justifyContent: 'space-around',
          }}
        >
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '700px',
              }}
            >
              <div>{user.name}</div>
              <div>{user.date}</div>
            </div>
          </div>

          <S.MessageOpened $isUserSender={user.isUserSender}>
            {user.message || 'No messages.'}
            <br />
            <br />
            {/* </div> */}
          </S.MessageOpened>
        </div>
      </S.MessageCard>
    </>
  );
};

export default MessageChatCard;
