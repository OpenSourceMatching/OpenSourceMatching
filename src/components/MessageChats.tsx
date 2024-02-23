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
            message: 'Hello',
            date: '2016-10-05T14:48:00.000',
            isUserSender: false,
          },
          {
            otherUserId: 2,
            name: 'Julia Smith',
            image: 'https://randomuser.me/api/portraits/women/63.jpg',
            message: 'Thanks for connecting!',
            date: '2016-11-05T14:48:00.000',
            isUserSender: true,
          },
          {
            otherUserId: 3,
            name: 'Alex Williams',
            image: 'https://randomuser.me/api/portraits/men/66.jpg',
            message: 'What are you interested in building?',
            date: '2016-11-05T12:48:00.000',
            isUserSender: true,
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
      <h2>View All Messages</h2>
      <S.MessageCardList>{messageList}</S.MessageCardList>
    </div>
  );
};

export default MessageChats;
