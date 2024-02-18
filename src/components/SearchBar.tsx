'use client';

import React, { useId, useState } from 'react'
import styled from 'styled-components'

const SearchInput = styled.input`
  width: 100%;
  // margin: 0 16px;
  max-width: 500px; 
  padding: 15px 20px;
  border: 1px solid #ccc; 
  border-radius: 8px; 
  font-size: 16px;
  color: #333; 
  outline: none; 
`
const SearchButton = styled.button`
  padding: 15px 20px;
  margin: 0 10px;
  background-color: tomato;
  color: #ffffff; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer; 
  font-size: 16px;
  font-weight: 500;
  text-align: center; 
  display: inline-block;
  &:hover{
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    background-color: maroon;
  }
`
const SearchBar = () => {
  const id = useId();
 
  return (
    <>
    {/* <div style={{margin:'30px 0px 0px 100px', fontSize:'25px', fontWeight:'bold'}}>Search and Message Developers:</div> */}
      <form style={{margin: '30px 100px'}}>
        <label style={{fontSize:'25px', fontWeight:'bold'}} htmlFor={id + '-search'}>Search and Message Developers:</label>
        <br></br>
        <br></br>
        <SearchInput
          type="search"
          id={id + '-search'}
          placeholder='Search by Name'
          name='search'
          value='search'
        />
        <SearchButton>Search</SearchButton>
      </form>
    </>
  )
}

export default SearchBar