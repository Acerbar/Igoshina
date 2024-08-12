import EducationSection from "../sections/education";
import FAQSection from "../sections/FAQ";
import CooperationSection from "../sections/cooperation";
import MainSection from "../sections/main";
import PrefSection from "../sections/prefs";
import TelegramChannelElem from "../sections/telegramChannel";
import ContactsElem from "../sections/contacts";

export default function MainPage(){
    return(
        <>
            <MainSection/>
            <PrefSection/>
            <CooperationSection/>
            <FAQSection/>
            <EducationSection/>
            <TelegramChannelElem/>
            <ContactsElem/>
        </>
    )
}