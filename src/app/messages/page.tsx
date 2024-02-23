'use-client';

import MessageChats from '@components/MessageChats'
import MessageWindow from '@components/MessageWindow'
import Sidebar from '@components/Sidebar'
import React from 'react'

const Messages = () => {
  return (
    <div style={{paddingLeft:'10px', fontWeight:'bold'}}>
      <MessageChats />
      <br />
      <MessageWindow />
    </div>
  )
}

export default Messages