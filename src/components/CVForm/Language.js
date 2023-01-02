import React from "react";
import styled from "styled-components";
import LanguageWrapper from "./LanguageItem";
import Section from "../Utils/Section";
import Button from "../Utils/Button";



const Language = ({language,onAdd,onDelete,onChange}) =>{



const LanguageItems = language.map((LanguageItem) =>(


    <LanguageWrapper
    key = {LanguageItem.id}
    id = {LanguageItem.id}
    languageInfo={LanguageItem}
    onChange={onChange}
    onAdd={onAdd}
    onDelete={onDelete}>
    </LanguageWrapper>

    



 
))


return(

<SkillsWrapper>
    <Section title="Language Info" titlePadding="4px" direction="column">
       {LanguageItems}

    <Button text="Add" onClick={onAdd}></Button>
    </Section>
</SkillsWrapper>
)



}

const SkillsWrapper = styled.div`

`

export default Language