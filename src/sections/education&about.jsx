import styled from "styled-components";
import Image from "../components/Images";
import { Paragraph, TitleH3 } from "../components/Texts";
import EducationItem from "../components/educationItem";
import { educationTexts } from "../JS/educationTexts";
import ButtonElem from "../components/button";
import {Section} from "../components/section&container";

const EducationInner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3em;
    background-color: oklch(100% 0 0);
    border-radius: 60px;
    gap: 2em;
    max-width: 1240px;
    margin: 25px 10px 0;

    @media(width <=960px){
        margin: 25px 10px 0;
        padding: 2em;
    }

    @media(width <=892px){
        flex-direction: column;
        margin: 25px 20px 0;
        border-radius: 45px;
    }
    @media(width <=640px){
        padding: 1em;
    }
    @media(width <= 320px){
        margin: 25px 15px 0;
        padding: 0.7em;
        border-radius: 15px;
    }
`
const EducationText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;

    @media(width <= 892px){
        width: 100%;
    }
`
const EducationPhoto = styled.div`
    width: 45%;

    & > img{
        border-radius: 30px;
        height: 100%;
        object-fit: cover;

        @media(width <= 892px){
            aspect-ratio: 1.45 / 1;
            object-position: 0% 20%;
            height: clamp(203px, 58vw, 430px);
        }

    }

    @media(width <= 892px){
        width: 100%;
    }
`

export const EducationParagraph = styled(Paragraph)`
    @media(width <= 960px){
        font-size: 14px;
    }

    @media(width <= 862px){
        width: 90%;
    }

  
`
const EducationButton = styled(ButtonElem)`
    margin-top: 30px;
    @media(width<=430px){
    align-self: center;
}

`
export function EducationSection(){
    return(
        <Section>
            <EducationInner>
                <EducationPhoto>
                    <img src={Image.AboutMePhoto} alt="" />
                </EducationPhoto>
                <EducationText>
                    <TitleH3 style={{margin: "0.5em 0"}}>Игошина Анастасия</TitleH3>
                    <EducationParagraph style={{padding: "0.5em 0"}}>Я дипломированный нутрициолог и член Ассоциации Нутрициологов и Коучей по Здоровью.</EducationParagraph>
                    <EducationParagraph>В рамках своих консультаций я не даю банальных, всем известных советов по здоровью. Мои рекомендации всегда строго персонализированы и индивидуальны.</EducationParagraph>
                    <Paragraph style={{fontWeight: "600", marginTop: "2em"}}>Образование</Paragraph>
                    {educationTexts.map((educationText) => (
                            <EducationItem key={educationText.date} {...educationText} />
                        ))}
                    <EducationButton>Подробнее обо мне</EducationButton>
                </EducationText>
            </EducationInner>
        </Section>
    )
}

const ButtonsBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

export function AboutSection(){
    return(
        <Section>
            <EducationInner>
            <EducationPhoto>
                    <img src={Image.AboutMePhoto} alt="" />
                </EducationPhoto>
                <EducationText>
                    <TitleH3 style={{margin: "0.5em 0"}}>Я Игошина Анастасия - дипломированный нутрициолог</TitleH3>
                    <EducationParagraph style={{padding: "0.5em 0"}}>Я дипломированный нутрициолог и член Ассоциации Нутрициологов и Коучей по Здоровью.</EducationParagraph>
                    <EducationParagraph>В рамках своих консультаций я не даю банальных, всем известных советов по здоровью. Мои рекомендации всегда строго персонализированы и индивидуальны.</EducationParagraph>
                    <ButtonsBlock>
                        <EducationButton>Телеграм</EducationButton>
                        <EducationButton>Whatsapp</EducationButton>
                        <EducationButton>Почта</EducationButton>
                    </ButtonsBlock>
                </EducationText>
            </EducationInner>
        </Section>
    )
}

export function EducationSectionType(){
    <Section>
        <EducationInner>
            <EducationPhoto>
                <img src={Image.AboutMePhoto} alt="" />
            </EducationPhoto>
            <EducationText>
                <TitleH3 style={{margin: "0.5em 0"}}>Образование</TitleH3>
                {educationTexts.map((educationText) => (
                        <EducationItem key={educationText.date} {...educationText} />
                    ))}
                <EducationButton>Дипломы и сертификаты</EducationButton>
            </EducationText>
        </EducationInner>
    </Section>
}