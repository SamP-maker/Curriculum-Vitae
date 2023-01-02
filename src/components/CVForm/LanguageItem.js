import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";





const LanguageItem = ({id,languageInfo,onChange,onDelete}) =>{





    return(
        <>
        <Input
        type="text"
        name="language"
        placeholder="Languages spoken"
        onChange={(e)=> onChange(e,id)}
        value={languageInfo.language}/>

<Button text="Delete" onClick={()=>onDelete(id)}></Button>
            </>



    )
}




export default LanguageItem



