import styled from "styled-components";
import { Paragraph } from "./Texts";

const PrefItemWrapper = styled.div`
display: flex;
flex-direction: row;
// text-wrap: pretty;
height: auto;
padding: 1.4em 0;
gap: 1.3em;
border-bottom: 1px solid var(--borderGrey);

@media(width<=960px){
    width: 100%;
}
`

export default function PrefItem({number, content}){
    return(
        <PrefItemWrapper>
            <Paragraph style={{color: "var(--mainGreen)"}}>{number}</Paragraph>
            <Paragraph>{content}</Paragraph>
        </PrefItemWrapper>
    )
    

}

