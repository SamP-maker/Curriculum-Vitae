import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";





const AwardItem = ({id,awardInfo,onChange,onDelete}) =>{





    return(
        <>
         <Input
        type="text"
        name="award"
        placeholder="Awards Obtained"
        onChange={(e)=> onChange(e,id)}
        value={awardInfo.Award}/>
       



       

<Button text="Delete" onClick={()=>onDelete(id)}></Button>
            </>



    )
}




export default AwardItem



