"use client";

import React, { useState } from "react";
import styled from "styled-components";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaGlobe,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 80%;
  margin: 25px auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionStyle = styled.section`
  display: flex;
  justify-content: center
  align-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledSectionLocation = styled(SectionStyle)`
  font-style: italic;
`;

const TechnologyGroupStyle = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 5px;
  max-width: 40%;
  flex-wrap: wrap;
`;

const TechnologyStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  min-width: 100px;
  background-color: #2c3e50;
  color: #faf9f6;
`;

const ExternalLink = styled.a`
  color: blue;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const NameStyle = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;

const AboutStyle = styled.div`
  font-size: 18px;
  border-radius: 5px;
  padding: 15px;
  font-family: "Open Sans", sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AllProjectsStyle = styled.section`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  stretch: 100%;
`;

const ProjectTitleStyle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  justify-self: center;
  align-self: center;
  color: #2c3e50;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.05em;
`;

const ProjectContainerStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: "Open Sans", sans-serif;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;
const ProjectDescriptionContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

const SectionTitlesStyle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  justify-self: center;
  align-self: center;
  color: #2c3e50;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.05em;
  margintop: 30px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin: auto;
`;

const GridItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-y: 20px;
  padding-x: 10px;
  border-radius: 5px;
`;

type UserProfileProps = {
  name: string;
  email: string;
  personalWebsite?: string;
  linkedIn?: string;
  github?: string;
  about?: string;
  location?: string;
  zip?: string;
  age?: string;
  employer?: string;
  technologies?: string[];
  lookingFor?: string;
  image?: string;
  activeProjects?: {
    title: string;
    description: string;
  }[];
};

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  personalWebsite,
  linkedIn,
  github,
  about,
  location,
  zip,
  age,
  employer,
  technologies,
  lookingFor,
  activeProjects,
  image,
}) => {
  // console.log("image: ", image);

  // state if copied
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <MainStyle>
      <SectionStyle>
        <NameStyle>{name}</NameStyle>
        <div>
          {image && (
            <UserImage src={image || "profile-placeholder.svg"} alt={name} />
          )}
        </div>
      </SectionStyle>
      {/* Icons for links */}
      <div style={{ color: "grey" }}>
        {linkedIn && (
          <a href={linkedIn} target="_blank">
            <FaLinkedin /> |{" "}
          </a>
        )}
        {github &&
          <a href={github} target="_blank">
            <FaGithub /> |{" "}
          </a>
        }
        {personalWebsite &&
          <a href={personalWebsite} target="_blank">
            <FaGlobe /> |{" "}
          </a>
        }
        <a href={`mailto: ${email}`} target="_blank">
          <FaEnvelope />
        </a>
      </div>

      {/* Location */}
      <StyledSectionLocation>
        <div>{location}</div>
        {location && zip && <div style={{ fontStyle: "normal" }}>|</div>}
        <div>{zip}</div>
      </StyledSectionLocation>

      {/* Email, website, github, and linkedin */}
      <GridContainer>
        {/* Email */}
        <GridItem>
          <div style={{ fontWeight: "bold", color: "#001a00" }}>Email:</div>
          <div>
            <ExternalLink style={{ paddingRight: "8px" }}>{email}</ExternalLink>
            {!copied && <FaCopy onClick={handleCopy} />}
            {copied && <FaCheck />}
          </div>
        </GridItem>
        {/* Personal Website */}
        <GridItem>
          <div style={{ fontWeight: "bold", color: "#001a00" }}>
            Personal Website:
          </div>
          <ExternalLink href={personalWebsite || ""} target="_blank">
            {personalWebsite}
          </ExternalLink>
        </GridItem>

        {/* LinkedIn */}
        <GridItem>
          <div style={{ fontWeight: "bold", color: "#001a00" }}>LinkedIn:</div>
          <ExternalLink href={linkedIn || ""} target="_blank">
            {linkedIn}
          </ExternalLink>
        </GridItem>

        {/* GitHub */}
        <GridItem>
          <div style={{ fontWeight: "bold", color: "#001a00" }}>Github:</div>
          <ExternalLink href={github || ""} target="_blank">
            {github}
          </ExternalLink>
        </GridItem>
      </GridContainer>

      {/* Age and Employer */}
      <StyledSectionLocation>
        {age && (
          <div>
            <span style={{ fontWeight: "bold" }}>Age: </span>
            {age}
          </div>
        )}
        {employer && (
          <div>
            <span style={{ fontWeight: "bold" }}>Employer: </span>
            {employer}
          </div>
        )}
      </StyledSectionLocation>

      {/* Looking For  */}
      <StyledSectionLocation>
        {lookingFor && (
          <>
            <h3 style={{ fontWeight: "bold" }}>Looking for: </h3>
            <div>
              {`${
                lookingFor === "Both"
                  ? "Looking for someone to work on my project and/or to work on someone else's project"
                  : lookingFor
              }`}
            </div>
          </>
        )}
      </StyledSectionLocation>

      {/* About */}
      <SectionTitlesStyle>About</SectionTitlesStyle>
      <AboutStyle>
        {about &&
          about.split("\n").map((line, index) => {
            return (
              <p style={{ marginTop: "10px" }} key={index}>
                {line}
              </p>
            );
          })}
      </AboutStyle>
      <SectionTitlesStyle>Technologies</SectionTitlesStyle>
      <TechnologyGroupStyle>
        {technologies &&
          technologies.map((tech: string, index: number) => {
            return <TechnologyStyle key={index}>{tech}</TechnologyStyle>;
          })}
      </TechnologyGroupStyle>

      <SectionTitlesStyle>Active Projects</SectionTitlesStyle>
      <AllProjectsStyle>
        {activeProjects &&
          activeProjects.map((project, index) => {
            // console.log("project: ", project);
            return (
              <ProjectContainerStyle key={index}>
                <ProjectTitleStyle>{project.title}</ProjectTitleStyle>
                <ProjectDescriptionContainer>
                  {project.description.split("\n").map((line, index) => {
                    return <p key={index}>{line}</p>;
                  })}
                </ProjectDescriptionContainer>
              </ProjectContainerStyle>
            );
          })}
        {!activeProjects && <div>No active projects</div>}
      </AllProjectsStyle>
    </MainStyle>
  );
};

export default UserProfile;
