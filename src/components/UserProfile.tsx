"use client";

import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa";

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
  bg-color: grey;
  hover: bg-color: tomato;
  min-width: 100px
`;

const ExternalLink = styled.a`
  color: blue;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
const Email = styled.a`
  color: blue;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
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
  align-self: ;
`;

const ProjectContainerStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  // console.log("activeProjects: ", activeProjects);
  return (
    <MainStyle>
      <SectionStyle>
        <NameStyle>{name}</NameStyle>
        <div>{image && <UserImage src={image} alt={name} />}</div>
      </SectionStyle>
      <div style={{ color: "grey" }}>
        <a href={linkedIn} target="_blank">
          <FaLinkedin /> |{" "}
        </a>
        <a href={github} target="_blank">
          <FaGithub /> |{" "}
        </a>
        <a href={personalWebsite} target="_blank">
          <FaGlobe /> |{" "}
        </a>
        <a href={`mailto: ${email}`} target="_blank">
          <FaEnvelope />
        </a>
      </div>
      <SectionStyle>
        <Email>{email}</Email>
        <ExternalLink href={personalWebsite || ""} target="_blank">
          <span style={{fontWeight: 'bold', color: 'black'}}>Website: </span>
          {personalWebsite}
        </ExternalLink>
      </SectionStyle>
      <SectionStyle>
        <ExternalLink href={linkedIn || ""} target="_blank">
          {linkedIn}
        </ExternalLink>
        <ExternalLink href={github || ""} target="_blank">
          {github}
        </ExternalLink>
      </SectionStyle>
      <StyledSectionLocation>
        <div>{location}</div>
        <div style={{fontStyle: 'normal'}}>|</div>
        <div>{zip}</div>
      </StyledSectionLocation>
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

      <TechnologyGroupStyle>
        {technologies &&
          technologies.map((tech: string, index: number) => {
            return <TechnologyStyle key={index}>{tech}</TechnologyStyle>;
          })}
      </TechnologyGroupStyle>
      <StyledSectionLocation>
        {lookingFor && (
          <>
            <h3 style={{fontWeight: 'bold'}}>Looking for: </h3>
            <div>
              {`${
                lookingFor === "both"
                  ? "Looking for someone to work on my project and/or to work on someone else's project"
                  : lookingFor
              }`}
            </div>
          </>
        )}
      </StyledSectionLocation>
      {activeProjects && <h2>Active Projects</h2>}
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
      </AllProjectsStyle>
    </MainStyle>
  );
};

export default UserProfile;
