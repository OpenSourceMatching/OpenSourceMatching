'use client'
import React, {useState, useId} from 'react'
import styled from 'styled-components';

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 700px;
  margin: 25px auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
const InputStyle = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box; 
`
const ButtonStyle = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: tomato;
  color: white;
  cursor: pointer;
  font-size: 16px;
`
const LabelStyle = styled.label`
  text-align: left;
  width: 100%;
`
const TextAreaStyle = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
`
const SelectStyle = styled.select`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: white;
  box-sizing: border-box;
  cursor: pointer;
`
const OptionStyle = styled.option`
  padding: 10px;
`
const ProfileForm = () => {
  const [formData, setFormData] = useState(
    {
        firstName: "", 
        lastName: "", 
        email: "",
        linkedIn: "",
        github: "",
        personalWebsite: "",
        about: "",
        location: "",
        zip: "",
        age: "",
        employer: "",
        technologies: "",
        lookingFor: "",
        activeProjects:""
    }
)
const id = useId();

function handleChange(event) {
  const {name, value} = event.target
  setFormData(prevFormData => {
    return {
        ...prevFormData,
        [name]: value
    }
  })
}

function handleSubmit(event) {
    event.preventDefault()
    // submitToApi(formData)
    console.log(formData)
}

return (
    <FormStyle onSubmit={handleSubmit}>
      <LabelStyle htmlFor={id + "-firstName"}>First Name</LabelStyle>
      <InputStyle
          type="text"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
          id={id + '-firstName'}
      />
      <LabelStyle htmlFor={id + "-lastName"}>Last Name</LabelStyle>
      <InputStyle
          type="text"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
          id={id + '-lastName'}
      />
      <LabelStyle htmlFor={id + '-email'}>Email</LabelStyle>
      <InputStyle
          type="email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          id={id + '-email'}
      />
      <LabelStyle htmlFor={id + '-linkedIn'}>LinkedIn</LabelStyle>
      <InputStyle
          type="text"
          onChange={handleChange}
          name="linkedIn"
          value={formData.linkedIn}
          id={id + '-linkedIn'}
      />      
      <LabelStyle htmlFor={id + '-github'}>Github</LabelStyle>
      <InputStyle
          type="text"
          onChange={handleChange}
          name="github"
          value={formData.github}
          id={id + '-github'}
      />      
      <LabelStyle htmlFor={id + '-personalWebsite'}>Personal Website</LabelStyle>
      <InputStyle
          type="text"
          onChange={handleChange}
          name="personalWebsite"
          value={formData.personalWebsite}
          id={id + '-personalWebsite'}
      />
      <LabelStyle htmlFor={id + '-about'}>About Me</LabelStyle>
        <TextAreaStyle 
            value={formData.about}
            onChange={handleChange}
            name="about"
            id={id + '-about'}
        />
      <LabelStyle htmlFor={id + '-location'}>Location (City)</LabelStyle>
      <InputStyle
          type="text"
          onChange={handleChange}
          name="location"
          value={formData.location}
          id={id + '-location'}
      />
      <LabelStyle htmlFor={id + '-zip'}>Zip Code</LabelStyle>
      <InputStyle
          type="number"
          onChange={handleChange}
          name="zip"
          value={formData.zip}
          id={id + '-zip'}
      />
      <LabelStyle htmlFor={id + '-age'}>Age</LabelStyle>
      <InputStyle
          type="number"
          onChange={handleChange}
          name="age"
          value={formData.age}
          id={id + '-age'}
      />
      <LabelStyle htmlFor={id + '-employer'}>Employer</LabelStyle>
      <InputStyle
          type="text"
          onChange={handleChange}
          name="employer"
          value={formData.employer}
          id={id + '-employer'}
      />
      <LabelStyle htmlFor={id + '-technologies'}>Technologies</LabelStyle>
      <InputStyle
          type="text"
          onChange={handleChange}
          name="technologies"
          value={formData.technologies}
          id={id + '-technologies'}
      />
      <LabelStyle htmlFor={id + '-lookingFor'}>What are you looking for?</LabelStyle>
      <SelectStyle 
          value={formData.lookingFor}
          onChange={handleChange}
          name="lookingFor"
          id={id + '-lookingFor'} 
      >
          <OptionStyle value="myProject">Someone to work on my project</OptionStyle>
          <OptionStyle value="yourProject">To work on someone elses project</OptionStyle>
          <OptionStyle value="both">Both</OptionStyle>
      </SelectStyle>
      <LabelStyle htmlFor={id + '-activeProjects'}>Active Projects</LabelStyle>
      <InputStyle
          type="number"
          onChange={handleChange}
          name="activeProjects"
          value={formData.activeProjects}
          id={id + '-activeProjects'}
      />
      <ButtonStyle>Submit</ButtonStyle>
    </FormStyle>
)
}

export default ProfileForm