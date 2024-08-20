import styled from "styled-components";
import { Section, Container } from "../components/section&container";
import { TitleH3 } from "../components/Texts";
import { specializationTexts } from "../JS/specializationText";
import SpecializationItem from "../components/specializationItem";

export default function SpecializationSection(){
    return(
        <Section>
            <Container>
                <TitleH3>Специализация</TitleH3>
                {specializationTexts.map((specializationText) => (
                        <SpecializationItem key={specializationText.content} {...specializationText} />
                    ))}
            </Container>
        </Section>
    )
}