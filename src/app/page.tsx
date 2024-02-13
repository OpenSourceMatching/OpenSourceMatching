'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import SearchBar from "@components/SearchBar";
import ProfileList from "@components/ProfileList";
import ProfileCard from "@components/ProfileCard";
import React from "react";
import styled from "styled-components";

export default function Home() {
  const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `
  const MainContainer = styled.main`
    display: flex;
    flex-grow: 1;
    background-color: moccasin;
  `
  const ProfileContainer = styled.section`
    width: 100%
  `
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
