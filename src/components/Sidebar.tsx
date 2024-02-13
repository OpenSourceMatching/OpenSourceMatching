import React from 'react'
import styled from 'styled-components'

const Sidebar = () => {
  const Sidebar = styled.aside`
    background-color: coral;
    flex-shrink: 0;
    width: 100px;
  `;
  return (
    <Sidebar>Sidebar</Sidebar>
  )
}

export default Sidebar