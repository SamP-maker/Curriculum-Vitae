import React from "react";
import styled from "styled-components";



const LanguageItem = ({LanguageInfo}) => {


    return(


           <LanguageWrapper>

           <p> {LanguageInfo.language}  </p> 
           
           </LanguageWrapper>




  




    )
}



const LanguageWrapper = styled.div`
display:block;
color: ${({theme})=>theme.colors.white};
inline-size: 200px;
overflow-wrap: break-word;
margin-top:10px;

`









export default LanguageItem