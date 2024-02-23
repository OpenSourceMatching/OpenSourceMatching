'use-client'
import React from 'react'

const ProfileInfo = ({userData}) => {
  // console.log(userData)
  return (
    <>
    <h1>{userData.name}</h1>
    <div>{userData.email}</div>
    <div>{userData.linkedIn}</div>
    <div>{userData.github}</div>
    <div>{userData.about}</div>
  </>
  )
}

export default ProfileInfo