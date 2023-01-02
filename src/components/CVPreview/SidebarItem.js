import React from "react";
import styled from "styled-components";




const SidebarItem = ({sidebarInfo}) => {



    
   return(
    <SidebarItemWrapper>

        
    <SidebarContent>
        <MainObjective>
            <h1>Main Objective</h1>
        <p1>{sidebarInfo.objective}</p1>
        </MainObjective>
        <MainInterest>
            <h1>Main Interest</h1>
            <p1>{sidebarInfo.interest}</p1>
        
        </MainInterest>
        <MainAccomplishment>
             <h1>Main Accomplishment</h1>
             <p1>{sidebarInfo.accomplishment}</p1>
        
        </MainAccomplishment>
    </SidebarContent>


    </SidebarItemWrapper>
   )


}

const SidebarItemWrapper = styled.div`
display:flex;
justify-content:left;
flex-direction:column;
color: ${({theme})=>theme.colors.white};
width:60%;
padding: 50px 50px;
`

const SidebarContent = styled.div`
display:flex;
flex-direction:column;
height:300px;
margin-top:10%;
justify-content:space-evenly;
color:${({ theme }) => theme.colors.black};



h1{
    font-size:18px;
}


p1{
    font-size:12px;
}
`



const MainObjective = styled.div`
color:${({ theme }) => theme.colors.white};
font-family: 'Poppins', sans-serif;
inline-size: 500px;
overflow-wrap: break-word;
`
const MainInterest = styled.div`
color:${({ theme }) => theme.colors.white};
font-family: 'Poppins', sans-serif;
margin-top:20%;
inline-size: 500px;
overflow-wrap: break-word;
`
const MainAccomplishment = styled.div`
color:${({ theme }) => theme.colors.white};
width:400px;
font-family: 'Poppins', sans-serif;
margin-top:20%;
inline-size: 500px;
overflow-wrap: break-word;
`





export default SidebarItem