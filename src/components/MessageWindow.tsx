'use client';

import React from 'react';
import styled from 'styled-components';

const ChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const S = {
  ChatWindow: ChatWindow,
}

// const MessageWindow = () => {
//   return <div style={{ fontStyle: 'italic' }}>Coming Soon</div>;
// };
const MessageWindow = () => {
  return (
    <div>
      {/* Coming Soon */}
    </div>
  )
};

export default MessageWindow;
