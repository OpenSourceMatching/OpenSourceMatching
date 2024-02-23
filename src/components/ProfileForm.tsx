'use client'
import { error } from 'console';
import React, {useState, useId, useEffect} from 'react'
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
const ButtonStyleSm = styled.button`
  padding: 5px 5px;
  border: none;
  border-radius: 5px;
  background-color: red;
  color: white;
  cursor: pointer;
  font-size: 12px;
`
const LabelStyle = styled.label`
  text-align: left;
  width: 100%;
`
const DivLabelStyle = styled.div`
  text-align: left;
  width: 100%;
`
const TextAreaStyle = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  padding: 10px;
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
  const id = useId();
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState(
    {
        linkedIn: "",
        github: "",
        personalWebsite: "",
        about: "",
        location: "",
        zip: "",
        age: "",
        employer: "",
        technologies: [],
        lookingFor: "",
        activeProjects:[]
    }
)
  useEffect(() =>{
    fetch('api/myProfile')
    .then(res => res.json())
    .then(profileData => {
      setFormData({
        linkedIn: profileData.linkedIn || "",
        github: profileData.github || "",
        personalWebsite: profileData.personalWebsite || "",
        about: profileData.about || "",
        location: profileData.location || "",
        zip: profileData.zip || "",
        age: profileData.age || "",
        employer: profileData.employer || "",
        technologies: profileData.technologies || [],
        lookingFor: profileData.lookingFor || "",
        activeProjects: profileData.activeProjects || []
    });
    })
    .catch(error => {
      console.error(error)
    })
  },[])

  function handleProjectChange(index, event) {
    const { name, value } = event.target;
    const updatedProjects = formData.activeProjects.map((project, i) =>
        i === index ? { ...project, [name]: value } : project
    );
    setFormData({ ...formData, activeProjects: updatedProjects });
  }

  function addProject() {
    setFormData({
        ...formData,
        activeProjects: [...formData.activeProjects, { title: "", description: "" }]
    });
  }

  function removeProject(index) {
    setFormData({
        ...formData,
        activeProjects: formData.activeProjects.filter((_, i) => i !== index)
    });
  }

  function handleChange(event: any) {
    const {name, value} = event.target
    if(name === 'technologies') {
      const techArray = value.split(',').map((tech: string) => tech.trim());
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: techArray
      }));
    }
    else {
      setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
      })
    }
  }

  async function handleSubmit(event: any) {
      event.preventDefault()
      const endpoint = `/api/myProfile`;
      try {
        const response = await fetch(endpoint, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        if(!response.ok) {
          throw new Error('Failed to patch profile')
        }
        const result = await response.json();
        // console.log('Profile Updated:', result)
        setMessage('Profile Updated!')
      }
      catch(error) {
        console.error('Error Updating Profile:')
        setMessage('Error Updating Profile :(')
      }
  }

return (
  <>
    <h2 style={{textAlign:'center', marginTop:'20px', fontSize:'30px'}}>Update Your Profile</h2>
    <FormStyle onSubmit={handleSubmit}>
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
      <LabelStyle htmlFor={id + '-technologies'}>Technologies (separate with commas)</LabelStyle>
      <InputStyle
          type="text"
          onChange={handleChange}
          name="technologies"
          value={formData.technologies.join(", ")}
          id={id + '-technologies'}
      />
      <LabelStyle htmlFor={id + '-lookingFor'}>What are you looking for?</LabelStyle>
      <SelectStyle 
          value={formData.lookingFor}
          onChange={handleChange}
          name="lookingFor"
          id={id + '-lookingFor'} 
      >
          <OptionStyle value="">--Choose--</OptionStyle>
          <OptionStyle value="Someone to work on my project">Someone to work on my project</OptionStyle>
          <OptionStyle value="To work on someone else's project">To work on someone else&apos;s project</OptionStyle>
          <OptionStyle value="Both">Both</OptionStyle>
      </SelectStyle>
      <DivLabelStyle>
        Active Projects:
        {formData.activeProjects.map((project, index) => (
            <div key={index}>
                <InputStyle
                    type="text"
                    name="title"
                    placeholder="Project Title"
                    value={project.title}
                    onChange={(e) => handleProjectChange(index, e)}
                />
                <TextAreaStyle
                    name="description"
                    placeholder="Project Description"
                    value={project.description}
                    onChange={(e) => handleProjectChange(index, e)}
                />
                <ButtonStyleSm type="button" onClick={() => removeProject(index)}>X</ButtonStyleSm>
            </div>
        ))}
        <br />
        <ButtonStyle type="button" onClick={addProject} style={{background:'limegreen'}}>Add a Project</ButtonStyle>
      </DivLabelStyle>
      <ButtonStyle type='submit'>Update Profile</ButtonStyle>
      {message}
    </FormStyle>
  </>
)
}

export default ProfileForm