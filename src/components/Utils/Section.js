import React from "react";
import styled, {css} from "styled-components";




const Section = ({padding,title,children,titlePadding,contrastTitle,direction

}) =>{


    return(
    
    <SectionWrapper padding={padding}>

        <Title titlePadding={titlePadding} contrastTitle={contrastTitle}>
            {title}

        </Title>
        <Children direction={direction}>{children}</Children>

        

    </SectionWrapper>
    )

}



const SectionWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content:center;
  gap: 1rem;
  padding: ${(props) => props.padding};
  margin-bottom: 2rem;
`

const Title = styled.h3`
font-family: 'Alegreya';
  padding: ${(props) => props.padding};
  ${(props) =>
    props.contrast &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorder};
      color: ${({ theme }) => theme.colors.blue};
    `}
`;

const Children = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction === "column" && "column"};
  gap: 1rem;
`;




export default Section