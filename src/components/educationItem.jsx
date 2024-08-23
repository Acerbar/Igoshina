import styled from "styled-components";
import { Paragraph } from "./Texts";



const EducationElemWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 1em;
padding: 1em 0;
border-bottom: 1px solid var(--borderGreen);
`
const EducationDate = styled(Paragraph)`
color: var(--greyText);
`



export function EducationItem({id, date, content}){
    return(
        <EducationElemWrapper>
            <EducationDate>{date}</EducationDate>
            <Paragraph>{content}</Paragraph>
        </EducationElemWrapper>
    )
}

const EducationLink = styled.a`
color: var(--mainGreen);

&:hover{
    color: var(--mainGreenHovered);
}
`

export function EducationTypeItem({id, date, content, link}){
    return(
        <EducationElemWrapper>
            <EducationDate>{date}</EducationDate>
            <Paragraph>{content}<EducationLink>{link}</EducationLink></Paragraph>
        </EducationElemWrapper>
    )
}

export function DiplomItem({id, content, link}){
    <EducationElemWrapper>
            <Paragraph>{content}<EducationLink>{link}</EducationLink></Paragraph>
        </EducationElemWrapper>
}