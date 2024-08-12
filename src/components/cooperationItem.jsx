import styled from "styled-components";
import { TitleH4, Paragraph } from "./Texts";
import ButtonElem from "./button";
import TelegramIcon from "./telegram";
import { useEffect, useState } from "react";

const CoopItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(290px, 49%, 565px);
    min-height: 230px;
    padding: 2em;
    background-color: oklch(100% 0 0);
    border: 1px solid var(--borderGrey);
    border-radius: 20px;
    transition: all .2s linear;

    &:hover{
        background-color: var(--lineGreen);
    }
    
`;

const CoopItemContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ContentInnerText = styled.div`
    display: flex;
    flex-direction: column;
`
const ContentInnerTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    height: 2.2em;

    & > :nth-child(2) {
        align-self: end;
    }

`
const ContentInnerPrice = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;
`
const CooperationParagraph = styled(Paragraph)`
 @media(width<=960px){
    font-size: 14px;
    }
 }
`
const CooperationTitle = styled(TitleH4)`
@media(width<=960px){
    font-size: 20px;
 }
 @media(width<=320px){
    font-size: 18px;
 }
`
export default function CooperationItem({title, subtitle, text, price, prepay, isLast}){
    const [adjustedTitle, setAdjustedTitle] = useState(title);

    useEffect(() => {
        const updateTitle = () => {
            if (window.innerWidth <= 1328) {
                setAdjustedTitle(title === "Не можете определиться с форматом?" ? "Не можете определиться?" : title);
            } else {
                setAdjustedTitle(title);
            }
        };

        updateTitle();
        window.addEventListener("resize", updateTitle);

        return () => {
            window.removeEventListener("resize", updateTitle);
        };
    }, [title]);
    return(
        <CoopItemWrapper>
            <CoopItemContent>
                <ContentInnerText>
                    <ContentInnerTitle>
                        <CooperationTitle>{adjustedTitle}</CooperationTitle>
                        <CooperationParagraph style={{
                            fontWeight: "500", 
                            color: "var(--mainGreen)", 
                            }}>{subtitle}</CooperationParagraph>
                    </ContentInnerTitle>
                    <CooperationParagraph style={{
                        textWrap: "balance"
                    }}>{text}</CooperationParagraph>
                </ContentInnerText>
                <ContentInnerPrice>
                    <TitleH4>{price}</TitleH4>
                    <CooperationParagraph style={{color: "var(--greyText)"}}>{prepay}</CooperationParagraph>
                </ContentInnerPrice>
            </CoopItemContent>
            <div className="button">
                <ButtonElem>{isLast ? (
                        <>
                            Телеграм <TelegramIcon variant="default" />
                        </>
                    ) : (
                        "Подробнее"
                    )}</ButtonElem>
            </div>
        </CoopItemWrapper>
    )

}