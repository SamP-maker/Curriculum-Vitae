import React from "react";
import styled from "styled-components";



const AwardItem = ({AwardInfo}) => {


    return(


           <AwardWrapper>
           <p> {AwardInfo.award}  </p> 
           </AwardWrapper>




  




    )
}



const AwardWrapper = styled.div`
display:block;
color: ${({theme})=>theme.colors.white};
inline-size: 270px;
overflow-wrap: break-word;
margin-top:10px;
`









export default AwardItem