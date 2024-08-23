import ContactsSection from "../sections/contacts"
import {AboutSection} from "../sections/education&about"
import SpecializationSection from "../sections/specialization"
import TelegramChannelSection from "../sections/telegramChannel"
import EducationSectionType from "../sections/educationSectionType";
import DiplomItem from "../components/diplomDialog";

export default function AboutPage(){
    return(
        <>
            <AboutSection/>
            <SpecializationSection/>
            <EducationSectionType/>
            <TelegramChannelSection/>
            <ContactsSection/>
        </>
    )
}