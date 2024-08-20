import ContactsSection from "../sections/contacts"
import { AboutSection, EducationSectionType } from "../sections/education&about"
import SpecializationSection from "../sections/specialization"
import TelegramChannelSection from "../sections/telegramChannel"

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