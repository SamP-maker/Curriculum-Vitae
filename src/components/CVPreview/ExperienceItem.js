import React from "react";
import styled from "styled-components";


const ExperienceItem = ({experienceInfo}) => {

    return(

        <>
        <ExperienceItemWrapper>
            <Title><p1>{experienceInfo.company} - </p1>&nbsp;<p2> {experienceInfo.startDate}-{experienceInfo.endDate}</p2></Title>
            
           



            <p>{experienceInfo.position} </p>



            </ExperienceItemWrapper></>
    )





}


const ExperienceItemWrapper = styled.div`
display:flex;
flex-direction:column;
color: ${({theme})=>theme.colors.white};
height:400px;
margin-top:10%;
inline-size: 300px;
overflow:hidden;
overflow-wrap: break-word;
font-family: 'Oswald', sans-serif;

`

const Title = styled.div`
display:flex;
color: ${({theme})=>theme.colors.white};
font-weight:bold;
font-size:18px;
inline-size: 275px;
overflow-wrap: break-word;
font-family: 'Oswald', sans-serif;


p2{
    font-style:italic;
    
}
`


export default ExperienceItem