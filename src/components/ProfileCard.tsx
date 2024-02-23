"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa";

const Card = styled.div`
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 35px 30px;
  width: 60rem;
  // display: flex;
  margin: 15px auto;
  &:hover {
    background-color: rgba(227, 227, 227, 0.391);
  }
`;
const Button = styled.button`
  padding: 10px 10px;
  background-color: limegreen;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-left: auto;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: green;
  }
`;
const ProfileCard = ({ user }: any) => {
  return (
    <>
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={user.image || "profile-placeholder.svg"}
            height={50}
            width={50}
            alt="Profile Image"
            style={{ borderRadius: "50%", margin: "10px" }}
          />

          <div style={{ marginLeft: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Link href={`user/${user._id}`}>
                <h2>{user.name}</h2>
              </Link>
              <div style={{ color: "grey" }}>
                <a
                  href={
                    user.linkedIn
                      ? user.linkedIn.startsWith("https://")
                        ? user.linkedIn // Use github directly if it starts with 'https://'
                        : "https://" + user.linkedIn // Prepend 'https://' if github doesn't start with it
                      : "" // Fallback to an empty string if github is falsy
                  }
                  target="_blank"
                >
                  <FaLinkedin /> |{" "}
                </a>
                <a
                  href={
                    user.github
                      ? user.github.startsWith("https://")
                        ? user.github // Use github directly if it starts with 'https://'
                        : "https://" + user.github // Prepend 'https://' if github doesn't start with it
                      : "" // Fallback to an empty string if github is falsy
                  }
                  target="_blank"
                >
                  <FaGithub /> |{" "}
                </a>
                <a
                  href={
                    user.personalWebsite
                      ? user.personalWebsite.startsWith("https://")
                        ? user.personalWebsite // Use github directly if it starts with 'https://'
                        : "https://" + user.personalWebsite // Prepend 'https://' if github doesn't start with it
                      : "" // Fallback to an empty string if github is falsy
                  }
                  target="_blank"
                >
                  <FaGlobe /> |{" "}
                </a>
                <a href={`mailto: ${user.email}`} target="_blank">
                  <FaEnvelope />
                </a>
              </div>
            </div>
            <div>{user.location}</div>
            <div>{user.activeProjects.length} Active Projects</div>
          </div>

          <Button>
            <Link href="./messages">Message</Link>
          </Button>
        </div>

        <div style={{}}>
          <br />
          <h4>About</h4>
          {user.about || "I am a Full Stack Engineer."}
          <br />
          <br />
          <h4>Tech</h4>
          {user.technologies.length
            ? user.technologies.toString()
            : "Javascript, React, Node.js."}
          {/* <h4>Active Projects</h4>
            {user.activeProjects &&
              user.activeProjects.map((project, index) => {
                return (
                  <ul key={index}>
                    <li>{project.title}: {project.description}</li>
                  </ul>
                );
            })} */}
        </div>
      </Card>
    </>
  );
};

export default ProfileCard;
