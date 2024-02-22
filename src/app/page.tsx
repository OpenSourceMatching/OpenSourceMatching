'use client';

import React, { useState, useEffect, useId } from "react";
import styles from "./page.module.css";
import Sidebar from "@components/Sidebar";
import SearchBar from "@components/SearchBar";
import ProfileList from "@components/ProfileList";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const MainContainer = styled.main`
  display: flex;
  flex-grow: 1;
`
const ProfileContainer = styled.section`
  width: 100%
`
export default function Home() {
  const id = useId();
  const [search, setSearch] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState('');
  const [lookingFor, setLookingFor] = useState('');

  const handleChange = (event: any) => {
    console.log('event.target.value: ', event.target.value);
    setLookingFor(event.target.value)
  }

  return (
    <HomeContainer>
      <MainContainer>
        <Sidebar 
          setLookingFor={setLookingFor}
          lookingFor={lookingFor}
          handleChange={handleChange}
        />
        <ProfileContainer>
          <SearchBar
            setSubmittedSearch={setSubmittedSearch}
            setSearch={setSearch}
            search={search}
            lookingFor={lookingFor}
          />
        </ProfileContainer>
      </MainContainer>
    </HomeContainer>
  )
}
