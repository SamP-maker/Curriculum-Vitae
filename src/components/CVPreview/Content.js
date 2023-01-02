import React from "react";
import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";
import AwardItemWrapper from "./AwardItem";
import LanguageItem from "./LanguageItem";
import GoalItem from "./GoalItem";
import Arrow from "../../assets/arrow_right_FILL0_wght400_GRAD0_opsz48.svg";





const Content = ({experience,award,language,goal}) =>{
    const experienceItems = experience.map((experienceItem) => (
        <ExperienceItem key={experienceItem.id} experienceInfo={experienceItem}/>
      ));

    const awardItems = award.map((awardItem)=>(
       <AwardItemWrapper key={awardItem.id} AwardInfo={awardItem}/>
    ))

    const languageItems = language.map((languageItem)=>(
        <LanguageItem key={languageItem.id} LanguageInfo={languageItem}/>
     ))

     const goalItems = goal.map((goalItem)=>(
        <GoalItem key={goalItem.id} GoalInfo={goalItem}/>
     ))

     

return(

    

<ContentWrapper>

    <LeftWrapper>

    <AwardWrapper>
    <h1>Award</h1>
    <p>{awardItems}</p>
    </AwardWrapper>

    <LanguageWrapper>
    <h1>Language</h1>
    <p>{languageItems}</p>
    </LanguageWrapper>

    <GoalWrapper> 
    <h1>Goal</h1>
   <p>{goalItems}</p> 
    </GoalWrapper>


    </LeftWrapper>


    <RightWrapper>
    <p>{experienceItems}</p>
    </RightWrapper>
</ContentWrapper>

)

}






const ContentWrapper = styled.div`

background-color:${({theme})=>theme.colors.black};
width: 793.7008px;
display:flex;
text-align:left;
height:750px;
justify-content:flex-start;
flex-direction:row;


p{font-family: 'Lora', sans-serif;}


img{
    color:white;
}
`

const RightWrapper = styled.div`
display:flex;
text-align:left;
flex-wrap:wrap;
flex-direction:column;
padding-top:50px;
width:50%;

`

const LeftWrapper = styled.div`
display:flex;
flex-wrap:wrap;
text-align:left;
flex-direction:row;
padding:50px 50px;
width:50%;


h1{
    color: ${({theme})=> theme.colors.white};
}
`

const AwardWrapper = styled.div`
display:flex;
flex-wrap:wrap;
text-align:left;
flex-direction:column;
padding:15px 15px;
width:100%;
inline-size: 300px;
overflow-wrap: break-word;

h1{
    color: ${({theme})=> theme.colors.white};
}
`


const LanguageWrapper = styled.div`
display:flex;
flex-wrap:wrap;
text-align:left;
flex-direction:column;
padding:15px 15px;
width:100%;

h1{
    color: ${({theme})=> theme.colors.white};
}
`

const GoalWrapper = styled.div`
display:flex;
flex-wrap:wrap;
text-align:left;
flex-direction:column;
padding:15px 15px;
width:100%;

h1{
    color: ${({theme})=> theme.colors.white};
}
`

export default Content