import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";



const EducationItem = ({ id,educationItem,onChange,onDelete


})=>{


    return(
       <>
            <Input
            type="text"
            name="institution"
            placeholder="Institution"
            onChange={(e) => onChange(e,id)}
            value={educationItem.institution}
            />
            <Input
            type="text"
            name="major"
            placeholder="Major"
            onChange={(e) => onChange(e,id)}
            value={educationItem.major}
            />
            <Input
            type="text"
            name="startDate"
            placeholder="Start Date"
            onChange={(e) => onChange(e,id)}
            value={educationItem.startDate}
            />
            <Input
            type="text"
            name="endDate"
            placeholder="End date"
            onChange={(e) => onChange(e,id)}
            value={educationItem.endDate}
            />
            <Input
            type="text"
            name="specialisation"
            placeholder="specialisation"
            onChange={(e) => onChange(e,id)}
            value={educationItem.specialisation}
            />
            <Button text="Delete" onClick={()=>onDelete(id)}></Button>
            </>

    )


}




export default EducationItem
