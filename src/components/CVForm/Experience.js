import React from "react";
import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";
import Section from "../Utils/Section";
import Button from "../Utils/Button";


const Experience = ({onChange,onAdd,onDelete,experience}) =>{

const experienceItems = experience.map((experienceItem) => (
<ExperienceItem
key = {experienceItem.id}
id = {experienceItem.id}
experienceInfo={experienceItem}
onChange = {onChange}
onDelete = {onDelete}
>

</ExperienceItem>
))


return(
<ExperienceWrapper>
<Section title="Experience Info" titlePadding="4px" direction="column">
               {experienceItems}

            <Button text="Add" onClick={onAdd}></Button>
            </Section>
</ExperienceWrapper>

)

}



const ExperienceWrapper = styled.div`

`



export default Experience

