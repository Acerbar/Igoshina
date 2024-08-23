import styled from "styled-components";
import Image from "../components/Images";
import { Paragraph, TitleH3 } from "../components/Texts";
import {EducationItem} from "../components/educationItem";
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
    margin: 0px 10px;

    @media(width <=960px){
        margin: 0px 10px;
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
export const EducationText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;

    @media(width <= 892px){
        width: 100%;
    }
`
export const EducationTitle = styled(TitleH3)`
margin: .5em 0;
`

export const EducationPhoto = styled.div`
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
export const EducationButton = styled(ButtonElem)`
    margin-top: 30px;
    @media(width<=430px){
    align-self: center;
    @media(width<=960px){
        
    }
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
                    <EducationTitle>Игошина Анастасия</EducationTitle>
                    <EducationParagraph>Я дипломированный нутрициолог и член Ассоциации Нутрициологов и Коучей по Здоровью.</EducationParagraph>
                    <EducationParagraph>В рамках своих консультаций я не даю банальных, всем известных советов по здоровью. Мои рекомендации всегда строго персонализированы и индивидуальны.</EducationParagraph>
                    <Paragraph style={{fontWeight: "600", marginTop: "2em"}}>Образование</Paragraph>
                    {educationTexts.map((educationText) => (
                            <EducationItem key={educationText.id} {...educationText} />
                        ))}
                    <EducationButton>Подробнее обо мне</EducationButton>
                </EducationText>
            </EducationInner>
        </Section>
    )
}

const AboutInner = styled(EducationInner)`
height: 594px;
margin-top: 10px;

@media(width<= 960px){
    height: 500px;
}
@media(width<= 892px){
    height: fit-content;
}

@media(width<= 500px){
    padding: 0;
}
`
const AboutPhoto = styled(EducationPhoto)`

& > img{
    @media(width<=500px){
        border-radius: 20px 20px 0 0;
    }
}
`
const AboutText = styled(EducationText)`
justify-content: center;
gap: 16px;
padding: 0 1em 1em;
`
const AboutParagraph = styled(EducationParagraph)`
@media(width<=960px){
    font-size: clamp(14px, 2vw, 16px);
}
`

const ButtonsBlock = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;

    @media(width<=500px){
        padding: 20px 0;
        flex-direction: column;
        align-items: center;
        
    }
`
const EducationButtonStyled = styled(EducationButton)`
    width: 155px;

    &:hover{
        background-color: var(--mainGreen);
        color: oklch(100% 0 0);
    }

    @media(width <= 960px){
        width: 133px;
    }
    
    @media(width<=500px){
        width: 250px;
        margin-top: 0;
    }
`
export function AboutSection(){
    return(
        <Section>
            <AboutInner>
                <AboutPhoto>
                    <img src={Image.AboutMePhoto} alt="" />
                </AboutPhoto>
                <AboutText>
                    <EducationTitle>Я Игошина Анастасия – дипломированный нутрициолог</EducationTitle>
                    <AboutParagraph>Я дипломированный нутрициолог и член Ассоциации Нутрициологов и Коучей по Здоровью.</AboutParagraph>
                    <AboutParagraph>В рамках своих консультаций я не даю банальных, всем известных советов по здоровью. Мои рекомендации всегда строго персонализированы и индивидуальны.</AboutParagraph>
                    <ButtonsBlock>
                        <EducationButtonStyled>Телеграм</EducationButtonStyled>
                        <EducationButtonStyled>WhatsApp</EducationButtonStyled>
                        <EducationButtonStyled>Почта</EducationButtonStyled>
                    </ButtonsBlock>
                </AboutText>
            </AboutInner>
        </Section>
    )
}

