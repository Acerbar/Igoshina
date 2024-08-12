import styled from "styled-components";
import Section from "../components/section";
import { TitleH3 } from "../components/Texts";
import { FAQTexts } from "../JS/FAQTexts";
import FAQItem from "../components/FAQItem";


export default function FAQSection(){
    return(
        <Section>
            <div className="container">
                <TitleH3>Часто задаваемые вопросы:</TitleH3>
                {FAQTexts.map((FAQText) => (
                        <FAQItem key={FAQText.title} {...FAQText} />
                    ))}
            </div>
        </Section>
    )
}