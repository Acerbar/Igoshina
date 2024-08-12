import styled from "styled-components";
import Image from "../components/Images";
import { Paragraph, TitleH3 } from "../components/Texts";
import EducationItem from "../components/educationItem";
import { educationTexts } from "../JS/educationTexts";
import ButtonElem from "../components/button";
import Section from "../components/section";

const EducationInner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3em;
    background-color: oklch(100% 0 0);
    border-radius: 60px;
    gap: 2em;
    max-width: 1272px;
    margin: 0 auto;
`
const EducationText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
`
const EducationPhoto = styled.div`
    width: 45%;
`
export default function EducationSection(){
    return(
        <Section>
            <EducationInner>
                <EducationPhoto>
                    <img style={{ borderRadius: "30px" }} src={Image.AboutMePhoto} alt="" />
                </EducationPhoto>
                <EducationText>
                    <TitleH3>Игошина Анастасия</TitleH3>
                    <Paragraph style={{padding: "0.5em 0"}}>Я дипломированный нутрициолог и член Ассоциации Нутрициологов и Коучей по Здоровью.</Paragraph>
                    <Paragraph>В рамках своих консультаций я не даю банальных, всем известных советов по здоровью. Мои рекомендации всегда строго персонализированы и индивидуальны.</Paragraph>
                    <Paragraph style={{fontWeight: "600", marginTop: "2em"}}>Образование</Paragraph>
                    {educationTexts.map((educationText) => (
                            <EducationItem key={educationText.date} {...educationText} />
                        ))}
                    <ButtonElem style={{marginTop: "30px"}}>Подробнее обо мне</ButtonElem>
                </EducationText>
            </EducationInner>
        </Section>
    )
}