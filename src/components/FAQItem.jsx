import styled from "styled-components";
import { Paragraph, TitleH4 } from "./Texts";
import RoundButtonElem from "./roundButton";
import { useState } from "react";


const FAQItemWrapper = styled.div`
border-top: 1px solid var(--borderGrey);
border-bottom: 1px solid var(--borderGrey);
`
const FAQItemInner = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 3em;
padding: 1em 1em 1em 0;

    @media(width <= 640px){
        padding-right: 0;
    }
`
const FAQParagraph = styled(Paragraph)`
white-space: pre-line;
padding: 0 0 2em 1em;
width: 78%;

@media(width <=640px){
    width: 85%;
}
`
export default function FAQItem({title, content}){
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return(
        <FAQItemWrapper>
            <FAQItemInner>
                <TitleH4>{title}</TitleH4>
                <RoundButtonElem onClick={handleToggle} minusHidden={isOpen}/>
            </FAQItemInner>
            {isOpen && <FAQParagraph>{content}</FAQParagraph>}
        </FAQItemWrapper>
    )
}

