import {EducationSection} from "../sections/education&about";
import FAQSection from "../sections/FAQ";
import CooperationSection from "../sections/cooperation";
import MainSection from "../sections/main";
import PrefSection from "../sections/prefs";
import TelegramChannelSection from "../sections/telegramChannel";
import ContactsSection from "../sections/contacts";


export default function MainPage(){
    return(
        <>
            <MainSection/>
            <PrefSection/>
            <CooperationSection/>
            <FAQSection/>
            <EducationSection/>
            <TelegramChannelSection/>
            <ContactsSection/>
        </>
    )
}