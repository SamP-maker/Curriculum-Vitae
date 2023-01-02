import React from "react";
import styled from "styled-components";
import EducationItem from "./EducationItem";
import Call from "../../assets/call_FILL0_wght400_GRAD0_opsz48.svg";
import Mail from "../../assets/mail_FILL0_wght400_GRAD0_opsz48.svg";
import LinkedInSVG from "../../assets/iconmonstr-linkedin-2.svg";




const Header=({personalInfo, education})=>{
const {name,title,photo,phoneNumber,email,LinkedIn} = personalInfo

const educationItems = education.map((educationItem) => (
    <EducationItem key={educationItem.id} educationInfo={educationItem}/>
  ));

return(





    <CVHeaderWrapper>

        <h1> {name}</h1>
        <p1> {title}</p1>

    <ProfileSection>
        <ImageWrapper src={photo}/>
    </ProfileSection>

<SectionWrapper>

    <InfoWrapper>
        <p2> <img src={Call}></img> &nbsp; PHONE - {phoneNumber}</p2>
        <p3> <img src={Mail}></img> &nbsp; EMAIL - {email}</p3>
        <p3> <img src={LinkedInSVG}></img> &nbsp;  LinkedIn - {LinkedIn} </p3>
    
    </InfoWrapper>
<EducationWrapper>
   
<p4>{educationItems} </p4>


</EducationWrapper>

</SectionWrapper>


    </CVHeaderWrapper>
)
}



const CVHeaderWrapper = styled.header`
display:flex;
flex-direction:column;
text-align:center;
grid-column: span 2;
padding: 5rem;
background-color: ${({ theme }) => theme.colors.blue};
color: ${({ theme }) => theme.colors.lightBlack};


h1{
    font-size: 36px;
    color: ${({theme}) => theme.colors.black};
    margin-bottom: 20px;
    letter-spacing:2px;
    font-family: 'Lora', serif;

    }
    
    p1{
        
        font-size:18px;
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.colors.lightGreenGrey};
        letter-spacing:6px;
        text-transform: uppercase;
    }
    

`
const ProfileSection = styled.div`
display:flex;
justify-content:center;
`



const ImageWrapper = styled.img`
margin-top:10%;
height:200px;
width:200px;
border-radius:50%;
box-shadow: 1px 1px 10px ${({ theme }) => theme.colors.black}
`


const SectionWrapper = styled.div`
display:flex;
text-align:left;
margin-top:10%;
gap:20%;
justify-content:flex-start;
flex-direction:row;



`

const InfoWrapper = styled.div`
display:flex;
text-align:left;
flex-wrap:wrap;
flex-direction:column;
width:50%;
padding:5px 5px;
font-family: 'Oswald', sans-serif;


img{
    height:18px;
    width:18px;
}


p2,p3{
    font-size:12px;
    padding-top:10px;
    font-family: 'Oswald', sans-serif;

}
`

const EducationWrapper = styled.div`
display:flex;
text-align:left;
flex-wrap:wrap;
flex-direction:column;
padding:5px 5px;
width:50%;
font-family: 'Oswald', sans-serif;



p4{
    font-size:12px;
    padding-top:10px;
    font-family: 'Oswald', sans-serif;
    

}
`

export default Header;