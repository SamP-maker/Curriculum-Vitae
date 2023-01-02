import React from "react";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import Section from "../Utils/Section";
import Button from "../Utils/Button";




const Sidebar = ({sidebar,onChange,onAdd,onDelete})=>{

const newSidebar = sidebar.map((sidebarItem)=>(

    <SidebarItem 
    key = {sidebarItem.id} 
    id={sidebarItem.id} 
    sidebarInfo={sidebarItem} 
    onChange={onChange} 
    onDelete={onDelete}>
        </SidebarItem>
))


return(
<SidebarWrapper>
    <Section title="Sidebar Info" titlePadding="4px" direction="column">
    {newSidebar}

    <Button text="Add" onClick={onAdd}></Button>
    </Section>
</SidebarWrapper>


)
}


const SidebarWrapper = styled.div`

`

export default Sidebar