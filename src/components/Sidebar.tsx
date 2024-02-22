'use-client'

import React, {useId} from 'react'
import styled from 'styled-components'

const SidebarStyle = styled.aside`
  // background-color: #34495E;
  // color: #ECF0F1; 
  background-color: rgba(227, 227, 227, 0.391);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  flex-shrink: 0;
  width: 235px; 
  padding: 15px; 
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 18px;
`;

const LabelStyle = styled.label`
  text-align: left;
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

type SidebarProps = {
  setLookingFor: (search: string) => void;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  lookingFor: string;
}

const Sidebar: React.FC<SidebarProps> = ({ setLookingFor, lookingFor, handleChange }) => {
  const id = useId();

  return (
    <SidebarStyle style={{}}>
      <h2>Filters</h2>
      <LabelStyle htmlFor={id + '-lookingFor'}>Find people looking for:</LabelStyle>
      <SelectStyle 
          value={lookingFor}
          onChange={handleChange}
          name="lookingFor"
          id={id + '-lookingFor'} 
      >
          <OptionStyle value="">--Choose--</OptionStyle>
          <OptionStyle value="Someone to work on my project">Someone to work on my project</OptionStyle>
          <OptionStyle value="To work on someone else's project">To work on someone else's project</OptionStyle>
          <OptionStyle value="Both">Both</OptionStyle>
      </SelectStyle>
    </SidebarStyle>
  )
}

export default Sidebar