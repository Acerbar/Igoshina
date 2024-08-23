import styled from "styled-components";
import { useState } from "react";
import { Section, Container } from "../components/section&container";
import {EducationTitle, EducationText, EducationPhoto, EducationButton} from "./education&about";
import { educationTypeTexts } from "../JS/educationTexts";
import { EducationTypeItem } from "../components/educationItem";
import Image from "../components/Images";
import DiplomItem from "../components/diplomDialog";

const EducationTypeTitle = styled(EducationTitle)`
@media(width<=892px){
    display: none;
}
`
const EducationTypeTitleHidden = styled(EducationTitle)`
display:none;
@media(width<=892px){
    display: block;
    margin: 40px 0 30px;
}
@media(width<=500px){
    margin: 20px 0 10px;
}
`
const EducationContent = styled.div`
    display: flex;
    gap: 5%;

    @media(width <=892px){
        flex-direction: column-reverse;
        margin-top: 20px;
    }
`
const EducationTypePhoto =styled(EducationPhoto)`
    & > img{
        @media(892px <= width <= 1960px){
            height: clamp(530px, 40vw, 690px);
    }
}
`

export default function EducationSectionType(){
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal(){
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
    return(
        <Section style={{marginBottom: "40px"}} id="modal-nest">
            <DiplomItem open={isModalOpen} onClose={closeModal}/>
            <Container>
            <EducationTypeTitle>Образование</EducationTypeTitle>
                <EducationContent>
                    <EducationText>
                        {educationTypeTexts.map((educationTypeText) => (
                                <EducationTypeItem key={educationTypeText.id} {...educationTypeText} />
                            ))}
                        <EducationButton onClick={openModal}>Дипломы и сертификаты</EducationButton>
                    </EducationText>
                    <EducationTypeTitleHidden>Образование</EducationTypeTitleHidden>
                    <EducationTypePhoto>
                        <img src={Image.AboutMePhoto} alt="" />
                    </EducationTypePhoto>
                </EducationContent>
            </Container>
        </Section>
    )
    
}