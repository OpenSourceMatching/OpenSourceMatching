'use client';

import React from "react";
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
  return (
    <HomeContainer>
      <MainContainer>
        <Sidebar />
        <ProfileContainer>
          <SearchBar />
          <ProfileList />
        </ProfileContainer>
      </MainContainer>
    </HomeContainer>
  )
}
