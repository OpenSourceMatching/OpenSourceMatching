'use client';

import React, { useId, useState } from 'react'
import styled from 'styled-components'

const SearchInput = styled.input`
  width: 100%;
  margin: 0 auto;
  max-width: 400px; 
  padding: 10px 20px;
  border: 1px solid #ccc; 
  border-radius: 8px; 
  font-size: 14px;
  color: #333; 
  outline: none; 
`
const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: grey;
  color: #ffffff; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer; /* Changes the cursor to a pointer to indicate it's clickable */
  font-size: 16px; /* Readable font size */
  font-weight: 500; /* Medium font weight for emphasis */
  text-align: center; /* Ensures the text is centered */
  display: inline-block; 
`
const SearchBar = () => {
  const id = useId();
 
  return (
    <>
      <form style={{border: '2px solid green'}}>
        <label
          htmlFor='search-input'
        >
        </label>
        <SearchInput
          type="search"
          id='search-input'
          placeholder='Joe Schmo'
          name='search'
        />
        <SearchButton>Search</SearchButton>
      </form>
    </>
  )
}

export default SearchBar