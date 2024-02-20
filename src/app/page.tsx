'use client';

import React, { useState, useEffect, use } from "react";
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

  // useEffect(() => {
  //   // fetch data
  //   const fetchData = async () => {
  //     const response = await fetch('/api/myProfile', {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ technologies: 'New Company' })
  //     }
  //     );
  //     console.log('response: ', response);
  //     const data = await response.json();
  //     console.log('TEST DATA: ', data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <HomeContainer>
      <MainContainer>
        <Sidebar />
        <ProfileContainer>
          <SearchBar />
        </ProfileContainer>
      </MainContainer>
    </HomeContainer>
  )
}
