import styled from "styled-components"
import { Paragraph } from "./Texts"

const SpecializationParagraph = styled(Paragraph)`
    display: flex;
    align-items: center;
    gap: .5em;
    width: 100%; 
    height: 61px;
    border-bottom: 1px solid var(--lineGreen);

    @media(width<=960px){
        height: clamp(52px, 9vw, 61px);
    }

    @media(width <=640px){
        line-height: 1.3em;
    }
    svg {
        flex-shrink: 0; 
    
      span {
        flex-grow: 1; 
      }
`

export default function SpecializationItem({content}){
    return(
        <SpecializationParagraph>
            <svg width="14" height="24" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L4.75 9L1 5.36364" stroke="#739544" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{content}</span>
        </SpecializationParagraph>
    )
}