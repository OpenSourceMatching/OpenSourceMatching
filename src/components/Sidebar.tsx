'use-client'

import React from 'react'
import styled from 'styled-components'

const SidebarStyle = styled.aside`
  background-color: coral;
  flex-shrink: 0;
  width: 200px;
`;
const Sidebar = () => {
  return (
    <SidebarStyle>Sidebar</SidebarStyle>
  )
}

export default Sidebar