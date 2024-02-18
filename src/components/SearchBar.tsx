'use client';

import React, { useId, useState } from 'react'
import styled from 'styled-components'
import ProfileList from './ProfileList';

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
  const [search, setSearch] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState('');

  function handleChange(event) {
    // console.log('searched Value:',event.target.value)
    setSearch(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    setSubmittedSearch(search);
  }

  return (
    <>
      <form style={{margin: '30px 100px'}} onSubmit={handleSubmit}>
        <label style={{fontSize:'25px', fontWeight:'bold'}} htmlFor={id + '-search'}>Search and Message Developers:</label>
        <br /><br />
        <SearchInput
          type="search"
          id={id + '-search'}
          placeholder='Search by Name'
          onChange={handleChange}
          name='search'
          value={search}
        />
        <SearchButton type='submit'>Search</SearchButton>
      </form>
      <ProfileList search = {search}/>
    </>
  )
}

export default SearchBar