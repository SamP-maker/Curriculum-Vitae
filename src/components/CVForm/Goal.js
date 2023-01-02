import React from "react";
import styled from "styled-components";
import Goal from "./GoalItem";
import Section from "../Utils/Section";
import Button from "../Utils/Button";



const Goals = ({goal,onAdd,onDelete,onChange}) =>{



const GoalItems = goal.map((GoalItems) =>(


    <Goal
    key = {GoalItems.id}
    id = {GoalItems.id}
    goalInfo={GoalItems}
    onChange={onChange}
    onAdd={onAdd}
    onDelete={onDelete}>
    </Goal>

    



 
))


return(

<SkillsWrapper>
    <Section title="Goals Info" titlePadding="4px" direction="column">
       {GoalItems}

    <Button text="Add" onClick={onAdd}></Button>
    </Section>
</SkillsWrapper>
)



}

const SkillsWrapper = styled.div`

`

export default Goals