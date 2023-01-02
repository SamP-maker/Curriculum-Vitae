import React from "react";
import styled from "styled-components";
import Award from "./AwardItem";
import Section from "../Utils/Section";
import Button from "../Utils/Button";



const Awards = ({award,onAdd,onDelete,onChange}) =>{



const AwardItems = award.map((AwardItem) =>(


    <Award
    key = {AwardItem.id}
    id = {AwardItem.id}
    awardInfo={AwardItem}
    onChange={onChange}
    onAdd={onAdd}
    onDelete={onDelete}>
    </Award>

    



 
))


return(

<SkillsWrapper>
    <Section title="Award Info" titlePadding="4px" direction="column">
       {AwardItems}

    <Button text="Add" onClick={onAdd}></Button>
    </Section>
</SkillsWrapper>
)



}

const SkillsWrapper = styled.div`

`

export default Awards