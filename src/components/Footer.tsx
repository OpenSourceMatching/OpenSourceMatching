'use client';

import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
  background-color: #2C3E50;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  color: #ECF0F1; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;
const Footer = () => {
  return (
    <FooterStyle>Footer</FooterStyle>
  )
}

export default Footer