'use-client'

import React from 'react'
import styled from 'styled-components'

const SidebarStyle = styled.aside`
  // background-color: #34495E;
  // color: #ECF0F1; 
  background-color: rgba(227, 227, 227, 0.391);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  flex-shrink: 0;
  width: 235px; 
  padding: 15px; 
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 18px;
`;
const Sidebar = () => {
  return (
    <SidebarStyle style={{}}><h2>Filters</h2></SidebarStyle>
  )
}

export default Sidebar