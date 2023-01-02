import React from "react";
import styled,{css} from "styled-components";


const Button = ({ text, onClick,print})=>{


    return(
        <ButtonWrapper
        onClick={onClick}
        print={print}>
            {text}
        </ButtonWrapper>

    )
}


const ButtonWrapper = styled.button`

padding: 8px;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.darkActive};
  }


  ${(props)=>
  css`
  background-color: ${({theme}) => theme.colors.black};
  color: ${({theme}) =>theme.colors.white};


  &:hover{
    background-color: ${({theme})=> theme.colors.white};
    color: ${({theme}) =>theme.colors.black};
  }

  &:active{
    border:1px solid  ${({theme}) =>theme.colors.ausGold}
  }
  `
  
  }
`



export default Button