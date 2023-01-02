import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";
import FileInput from "../Utils/FileInput";





const SidebarItem = ({id,sidebarInfo,onChange,onDelete}) =>{





    return(
        <>
        <Input
        type="text"
        name="objective"
        placeholder="Objective"
        onChange={(e)=> onChange(e,id)}
        value={sidebarInfo.objective}/>
        <Input
        type="text"
        name="interest"
        placeholder="Interest"
        onChange={(e)=> onChange(e,id)}
        value={sidebarInfo.interest}/>
        <Input
        type="text"
        name="accomplishment"
        placeholder="Accomplishment"
        onChange={(e)=> onChange(e,id)}
        value={sidebarInfo.accomplishment}/>



       

<Button text="Delete" onClick={()=>onDelete(id)}></Button>
            </>



    )
}




export default SidebarItem



