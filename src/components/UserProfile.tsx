"use client";

import React from "react";
import styled from "styled-components";

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

const AboutStyle = styled.p`
  font-size: 18px;
  border-radius: 5px;
  padding: 15px;
  font-family: 'Open Sans', sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

type UserProfileProps = {
  name: string;
  email: string;
  personalWebsite?: string ;
  linkedIn?: string ;
  github?: string ;
  about?: string ;
  location?: string ;
  zip?: string ;
  age?: string ;
  employer?: string ;
  technologies?: string[];
  lookingFor?: string ;
  image?: string ;
  activeProjects: {
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

  // console.log('image: ', image);
  return (
    <MainStyle>
      <SectionStyle>
        <NameStyle>{name}</NameStyle>
        <div>
          {image && <UserImage src={image} alt={name} />}
        </div>
      </SectionStyle>
      <SectionStyle>
        <Email>{email}</Email>
        <ExternalLink href={personalWebsite || ""} target="_blank">
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
        <div>{zip}</div>
      </StyledSectionLocation>
      <AboutStyle>{about}</AboutStyle>
      <div>{age}</div>
      <div>{employer}</div>
      <TechnologyGroupStyle>
        {technologies &&
          technologies.map((tech: string, index: number) => {
            return <TechnologyStyle key={index}>{tech}</TechnologyStyle>;
          })}
      </TechnologyGroupStyle>
      <div>{lookingFor}</div>
      {activeProjects &&
        activeProjects.map((project, index) => {
          return (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          );
        })}
    </MainStyle>
  );
};

export default UserProfile;
