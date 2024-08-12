import styled from "styled-components"

const SectionItem = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
padding: 70px 0;
`

export default function Section ({children}){
   return(
    <SectionItem>
{children}
    </SectionItem>
   )
}