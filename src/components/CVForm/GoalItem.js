import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";





const GoalItem = ({id,goalInfo,onChange,onDelete}) =>{





    return(
        <>
        <Input
        type="text"
        name="goal"
        placeholder="Languages spoken"
        onChange={(e)=> onChange(e,id)}
        value={goalInfo.goal}/>

<Button text="Delete" onClick={()=>onDelete(id)}></Button>
            </>



    )
}




export default GoalItem



