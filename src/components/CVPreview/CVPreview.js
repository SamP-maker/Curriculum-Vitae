import React, {Component} from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";






 class CVPreview extends Component{
render(){

  const {cv} = this.props;

  return(



<CVPreviewWrapper>
  
<SidebarWrapper>
 <SidebarBottom>
  <SidebarPhotoWrapper>
  <Sidebar sidebar={cv.sidebar} sidebarPhotoInfo={cv.sidebarPhoto} />
  </SidebarPhotoWrapper>
<SidebarTop>
</SidebarTop>
  </SidebarBottom> 
  
 
  
</SidebarWrapper>
  




   
    <CVMain>
        <Header personalInfo={cv.personalInfo}   education={cv.education}/>
        
    </CVMain>
    <CVBody>
    <Content  experience={cv.experience} award={cv.Award} language={cv.Language} goal={cv.Goal}> </Content>
    </CVBody>
</CVPreviewWrapper>


  )

}
 }

 const CVPreviewWrapper= styled.div`
 width: 793.7008px;
 height: 1600px;
 position: sticky;
 margin-top: 10px;
 display: grid;
 grid-template-columns: 150mm 60mm;
 grid-template-rows: 35mm 262mm;

 `

 const CVMain = styled.div`
  width: 793.7008px;
  height: 1300px;
  position: absolute;
  z-index:3;
  margin-left:50%;
  display: grid;
  grid-template-columns: 150mm 60mm;
  grid-template-rows: 35mm 262mm;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color:${({theme}) => theme.colors.white};
`


const CVBody = styled.div`
width: 793.7008px;
height: 750px;
position: absolute;
z-index:3;
margin-left:50%;
margin-top:90%;
display: grid;
grid-template-columns: 150mm 60mm;
grid-template-rows: 35mm 262mm;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background-color:${({theme}) => theme.colors.black};
`



const SidebarTop = styled.div`
width: 600px;
height:450px;
position:absolute;
background-color:${({theme}) => theme.colors.white}
`


const SidebarPhotoWrapper = styled.div`
z-index: 5;
`

const SidebarBottom = styled.div`
width: 350px;
height:1200px;
display: flex;
background-color:${({theme}) => theme.colors.ausGold}
`

const SidebarWrapper = styled.div`
width: 600px;
height:1200px;
display: flex;
justify-content:left;
margin-top:60%;
grid-template-columns: 150mm 60mm;
box-shadow: 1px 1px 15px  ${({ theme }) => theme.colors.black};
background-color:${({theme}) => theme.colors.white}

`


export default CVPreview;