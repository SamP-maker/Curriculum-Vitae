import React from "react";
import styled from "styled-components";





const EducationItem = ({educationInfo})=>{


return(
  
   <EducationWrapper>
  <Title>
   <h3>Education</h3>
   </Title>
   <h>{educationInfo.major} - {educationInfo.institution}</h>
   &nbsp;
  <p3>{educationInfo.startDate} - {educationInfo.endDate}</p3>

     <p>{educationInfo.specialisation}</p>
   </EducationWrapper>
  
)

}


const EducationWrapper = styled.div`
padding:5px 5px;


p3{
  font-weight:bold;
  font-style:italic;
}
`

const Title = styled.h3`
font-size: 14px;
font-family: 'Oswald', sans-serif;
`







export default EducationItem