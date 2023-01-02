import React from "react";
import FieldInput from "../Utils/FileInput";
import Section from "../Utils/Section";



const SidebarPhotoItem = ({SidebarPhotoItemInfo,onChange}) => {






    return(


        <>
        
        <Section title="SidebarPhoto" titlePadding="4px" direction="column">
        <FieldInput
        
        label="Photo"
        name="Photo"
        onChange={(e) => onChange(e)}
        value= {SidebarPhotoItemInfo.photo} 
        >
        
        
        </FieldInput>

        </Section>

        </>
    )


}


export default SidebarPhotoItem