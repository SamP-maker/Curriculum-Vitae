import React from "react";
import styled from "styled-components";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Awards from "./Award";
import Language from "./Language";
import Goals from "./Goal";
import Sidebar from "./Sidebar";
import SidebarPhotoItem from "./SidebarPhotoItem";
import Button from "../Utils/Button";


const CVForm = ({
cv,
onChangePersonalInfo,
onChangeEducation,
onAddEducation,
onDeleteEducation,
onChangeExperience,
onAddExperience,
onDeleteExperience,
onChangeAward,
onAddAward,
onDeleteAward,
onChangeLanguage,
onAddLanguage,
onDeleteLanguage,
onChangeGoal,
onAddGoal,
onDeleteGoal,
onChangeSidebar,
onAddSidebar,
onDeleteSidebar,
onChangeSidebarPhoto,
onPrint,

}) =>{





    return(

      
    
    <CVFormWrapper>
<HeaderWrapper> 
<h1>CV Maker</h1>
<p1>Sam Perry Lee</p1>
</HeaderWrapper>
    <Personal personalInfo={cv.personalInfo} onChange={onChangePersonalInfo}></Personal>
    <Education education={cv.education} onChange={onChangeEducation} onAdd={onAddEducation} onDelete={onDeleteEducation}></Education>
    <Experience experience={cv.experience} onChange={onChangeExperience} onAdd={onAddExperience} onDelete={onDeleteExperience}></Experience>
    <Awards award={cv.Award} onChange={onChangeAward} onAdd={onAddAward} onDelete={onDeleteAward}></Awards>
    <Language language={cv.Language} onChange={onChangeLanguage} onAdd={onAddLanguage} onDelete={onDeleteLanguage}></Language>
    <Goals goal={cv.Goal} onChange={onChangeGoal} onAdd={onAddGoal} onDelete={onDeleteGoal}></Goals>
    <Sidebar sidebar={cv.sidebar} onChange={onChangeSidebar} onAdd={onAddSidebar} onDelete={onDeleteSidebar}></Sidebar>
    <SidebarPhotoItem SidebarPhotoItemInfo={cv.sidebarPhoto} onChange={onChangeSidebarPhoto}/>



     <Button text="Generate PDF" onClick={onPrint} print></Button>
    </CVFormWrapper>
    
    
    
    
    
    )

}

const CVFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 500px;
  padding: 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 1px 10px ${({ theme }) => theme.colors.black};


`;


const HeaderWrapper = styled.div`

padding-bottom: 100px;
text-align:center;
padding-top: 100px;

h1{
  display:block;
font-size: 36px;
color: ${({theme}) => theme.colors.black};
margin-bottom: 20px;
letter-spacing:2px;
}

p1{
    
    font-size:18px;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.colors.lightGreenGrey};

}


`



export default CVForm