'use client';

import React from 'react'
import styled from 'styled-components';


const UserProfile = ( {userData}: any) => {
  return (
    <div>
    <h1>{userData.name}</h1>
    <div>{userData.email}</div>
    <div>{userData.linkedIn}</div>
    <div>{userData.github}</div>
    <div>{userData.about}</div>
    <div>{userData.location}</div>
    <div>{userData.zip}</div>
    <div>{userData.age}</div>
    <div>{userData.employer}</div>
    {userData.technologies.map((tech: string) => {
      return <div>{tech}</div>
    })}
    <div>{userData.lookingFor}</div>
    <div>{userData.activeProjects}</div>
  </div>
  )
}

export default UserProfile