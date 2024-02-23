'use client';

import React, { useEffect, useState } from 'react';
import MessageChatCard from './MessageChatCard';
import styled from 'styled-components';

const MessageCardList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const S = {
  MessageCardList: MessageCardList,
}

type conversationList = {
  otherUserId: number;
  name: string;
  image: string;
  message: string;
  date: string;
  isUserSender: boolean;
};

const MessageChats = () => {
  const [messageChats, setMessageChats] = useState<conversationList[]>([]);

  // useEffect here to fetch people's names from database
  useEffect(() => {
    const fetchMessageChats = async () => {
      try {
        // const response = await fetch('/api/myConversations');
        // const data = await response.json();
        let temp: conversationList[] = [
          {
            otherUserId: 1,
            name: 'David Johnson',
            image: 'https://randomuser.me/api/portraits/men/67.jpg',
            message: 'Hey, currently working on a project using Next.js',
            date: '11:32',
            isUserSender: true,
          },
          {
            otherUserId: 2,
            name: 'Julia Smith',
            image: 'https://randomuser.me/api/portraits/women/63.jpg',
            message: 'Thanks for connecting!',
            date: '09:46',
            isUserSender: false,
          },
          {
            otherUserId: 3,
            name: 'Alex Williams',
            image: 'https://randomuser.me/api/portraits/men/66.jpg',
            message: 'What are you interested in building?',
            date: '17:23',
            isUserSender: false,
          },
        ];
        setMessageChats(temp);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };
    fetchMessageChats();
  }, []);

  const messageList = messageChats.map((chat) => {
    return (
      <span
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
        key={chat.otherUserId}
        >
          <MessageChatCard user={chat}/>
      </span>
    )
  })

  return (
    <div>
      <h2 style={{margin:'15px'}}>Messages</h2>
      <S.MessageCardList>{messageList}</S.MessageCardList>
    </div>
  );
};

export default MessageChats;
