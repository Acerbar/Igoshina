import styled from "styled-components";
import { EducationParagraph } from "../sections/education&about";
import { Paragraph } from "./Texts";

const EducationElemWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 1em;
padding: 1em 0.5em 1em 0;
border-bottom: 1px solid var(--borderGreen);

`
export default function EducationItem({date, content}){
    return(
        <EducationElemWrapper>
            <Paragraph style={{color: "var(--greyText)"}}>{date}</Paragraph>
            <EducationParagraph style={{width: "100%"}}>{content}</EducationParagraph>
        </EducationElemWrapper>
    )
}