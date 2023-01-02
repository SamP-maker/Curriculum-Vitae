import React from "react";
import styled from "styled-components";




const Input = ({type,name,placeholder,onChange,value

}) =>{


    return(
    
    <InputWrapper type ={type} name={name} placeholder={placeholder}
    onChange={onChange} value={value}/>
    )

}



const InputWrapper = styled.input`
padding: 6px;
border-radius: 5px;
outline:none;
border:none;
background-color: ${({ theme }) => theme.colors.lightGreenGrey};
&:focus {
  outline:none;
  box-shadow: inset 1px 1px 3px ${({ theme }) => theme.colors.grey};
`




export default Input