import React from "react";
import styled from "styled-components";



const GoalItem = ({GoalInfo}) => {


    return(


           <GoalWrapper>

           <p> {GoalInfo.goal}  </p> 
           
           </GoalWrapper>




  




    )
}


const GoalWrapper = styled.div`
display:block;
color: ${({theme})=>theme.colors.white};
inline-size: 200px;
overflow-wrap: break-word;
margin-top:10px;

`









export default GoalItem