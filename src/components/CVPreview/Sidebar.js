import React from "react";
import styled from "styled-components";
import SidebarContent from "./SidebarItem";






const Sidebar = ({sidebar,sidebarPhotoInfo}) =>{





    const SidebarItems = sidebar.map((SidebarItem)=>
    (<SidebarContent key={SidebarItem.id} sidebarInfo={SidebarItem}/>))



    return(<>

<PhotoWrapper>
        <Photo 
        src={sidebarPhotoInfo.Photo}>
   
        </Photo>
</PhotoWrapper>

    <SidebarWrapper>
    {SidebarItems}
    </SidebarWrapper>

    </>)


}


const SidebarWrapper = styled.div`

`

const Photo = styled.img`
height:300px;
width:300px;
box-shadow: 1px 1px 10px ${({ theme }) => theme.colors.black}

`

const PhotoWrapper = styled.div`
display:flex;
margin-top:10%;
width:100%;
padding:5%;




`



export default Sidebar