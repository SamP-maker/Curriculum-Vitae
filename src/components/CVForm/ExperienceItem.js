import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";





const ExperienceItem = ({id,experienceInfo,onChange,onDelete}) =>{





    return(
        <>
        <Input
        type="text"
        name="company"
        placeholder="Company"
        onChange={(e)=>onChange(e,id)}
        value={experienceInfo.company}
        />
        <Input
        type="text"
        name="position"
        placeholder="Position"
        onChange={(e)=>onChange(e,id)}
        value={experienceInfo.position}
        />
        <Input
        type="text"
        name="startDate"
        placeholder="Start Date"
        onChange={(e)=>onChange(e,id)}
        value={experienceInfo.startDate}
        />
         <Input
        type="text"
        name="endDate"
        placeholder="End Date"
        onChange={(e)=>onChange(e,id)}
        value={experienceInfo.endDate}
        />

        <Button text="Delete" onClick={()=>onDelete(id)}></Button>
            </>
  


    )
}




export default ExperienceItem



