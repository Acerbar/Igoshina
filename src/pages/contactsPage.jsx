import { TitleH3 } from "../components/Texts";
import { Container, Section } from "../components/section&container";
import ContactsSection from "../sections/contacts";

export default function ContactsPage(){
    return(
        <Section>
            <Container>
                <TitleH3>Контакты</TitleH3>
                <ContactsSection/>
            </Container>
        </Section>
    )
}