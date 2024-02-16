'use-client'

import React from 'react'
import styled from 'styled-components'

const SidebarStyle = styled.aside`
  // background-color: #34495E;
  // color: #ECF0F1; 
  background-color: rgba(227, 227, 227, 0.391);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
  width: 200px; 
  padding: 20px; 
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
const Sidebar = () => {
  return (
    <SidebarStyle>Sidebar</SidebarStyle>
  )
}

export default Sidebar