import styled from "styled-components";
import { TitleH4, Paragraph } from "./Texts";
import ButtonElem from "./button";
import TelegramIcon from "./telegram";
import { useEffect, useState } from "react";

const CoopItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: min(49%, 565px);
    height: 230px;
    padding: 1.5em;
    background-color: oklch(100% 0 0);
    border: 1px solid var(--borderGrey);
    border-radius: 20px;
    transition: all .2s linear;

    &:hover {
        background-color: var(--lineGreen);
    }
    

    @media (width <= 960px) {
        width: min(48.5%, 435px);
        min-height: 200px;
        height: auto;
        padding: 1em;
    }

    @media (width <= 640px) {
        height: 270px;
        margin: 0 auto;
    }

    @media (width <= 597px) {
        width: max(425px, 80%);
        height: 230px;
        padding: 1em;
    }
`;

const CoopItemContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (width <= 870px) {
        flex-direction: column;
        align-items: start;
        flex: 1 1 auto;
        margin-bottom: 1em;
    }
`;

const ContentInnerText = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentInnerTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;

    & > :nth-child(2) {
        align-self: end;

        @media (961px <= width <= 1280px) {
            align-self: start;
        }
    }
    @media(961px <= width <= 1280px){
        flex-direction: column;
    }
`;

const ContentInnerPrice = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;

    @media (width <= 870px) {
        text-align: start;
    }
`;

const CooperationParagraph = styled(Paragraph)`
    @media (width <= 640px) {
        font-size: 14px;
    }
`;

const TimeParagraph = styled(CooperationParagraph)`
    font-weight: 500;
    color: var(--mainGreen);

    @media (641px <= width <= 1054px) {
        display: none;
    }
`;


const CooperationButton = styled(ButtonElem)`
@media (width <= 640px) {
    margin: 0 auto;
    width: 230px;
}
    @media (width <= 440px) {
        width: 250px;
    }
`;

export default function CooperationItem({ title, subtitle, text, price, prepay, $isLast }) {
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

    return (
        <CoopItemWrapper>
            <CoopItemContent>
                <ContentInnerText>
                    <ContentInnerTitle $isLast={$isLast}>
                        <TitleH4>{adjustedTitle}</TitleH4>
                        <TimeParagraph>{subtitle}</TimeParagraph>
                    </ContentInnerTitle>
                    <CooperationParagraph style={{ textWrap: "balance", margin: "1em auto"}}>
                        {text}
                    </CooperationParagraph>
                </ContentInnerText>
                <ContentInnerPrice>
                    <TitleH4>{price}</TitleH4>
                    <CooperationParagraph style={{ color: "var(--greyText)" }}>{prepay}</CooperationParagraph>
                </ContentInnerPrice>
            </CoopItemContent>
            <div className="button">
                <CooperationButton>
                    {$isLast ? (
                        <>
                            Телеграм <TelegramIcon variant="default" />
                        </>
                    ) : (
                        "Подробнее"
                    )}
                </CooperationButton>
            </div>
        </CoopItemWrapper>
    );
}