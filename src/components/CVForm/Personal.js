import React  from 'react';
import styled from 'styled-components';
import Input from '../Utils/Input';
import Section from '../Utils/Section';
import FileInput from '../Utils/FileInput';




const Personal = ({personalInfo,onChange

}) =>{

    
    

    return(
    <PersonalWrapper>
    <Section title="Personal Info" titlePadding="4px" direction="column">

<Input
    type="text"
    name="name"
    placeholder="Name"
    onChange={(e) => onChange(e)}
    value= {personalInfo.name} 
/>
<Input
    type="text"
    name="title"
    placeholder="Title"
    onChange={(e) => onChange(e)}
    value= {personalInfo.title} 
/>
<FileInput
    name="photo"
    label="Photo"
    onChange={(e) => onChange(e)}
    value= {personalInfo.photo} 
/>
<Input
    type="text"
    name="phoneNumber"
    placeholder="Phone number"
    onChange={(e) => onChange(e)}
    value= {personalInfo.phoneNumber} 
/>
<Input
    type="text"
    name="email"
    placeholder="Email"
    onChange={(e) => onChange(e)}
    value= {personalInfo.email} 
/>
<Input
    type="text"
    name="LinkedIn"
    placeholder="LinkedIn"
    onChange={(e) => onChange(e)}
    value= {personalInfo.LinkedIn} 
/>
</Section>



    </PersonalWrapper>
    
    
    
    )}



const PersonalWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content:center;

`


export default Personal
