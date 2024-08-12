import styled from "styled-components";
import { TitleH3 } from "../components/Texts";
import { coopTexts } from "../JS/cooperationTexts";
import CooperationItem from "../components/cooperationItem";
import Section from "../components/section";


const CooperationContent = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
row-gap: 1em;


`

export default function CooperationSection(){
    return(
        <Section>
            <div className="container">
                <TitleH3>Форматы cотрудничества</TitleH3>
                <CooperationContent>
                {coopTexts.map((coopText, index) => (
                <CooperationItem
                    key={coopText.title}
                    {...coopText}
                    isLast={index === coopTexts.length - 1}
                />
                ))}
                </CooperationContent>
            </div>
        </Section>
    )
}
