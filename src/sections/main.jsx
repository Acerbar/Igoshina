import styled from "styled-components";
import Section from "../components/section";
import { TitleH1, TitleH2, Paragraph } from "../components/Texts";
import ButtonElem from "../components/button";
import Image from "../components/Images";
import TelegramIcon from "../components/telegram";


const IntroContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 54%;
`
const IntroPhoto = styled.div`
width: 46%;
`


export default function MainSection(){
    return(

        <div className="container">
            <Section>
                <IntroContent>
                    <TitleH2>Превентивный нутрициолог</TitleH2>
                    <TitleH1>Игошина Анастасия</TitleH1>
                    <Paragraph style={{margin: "20px 0 30px", width:"80%"}}>Докажу, что здоровый образ жизни — это легко и вкусно!
                                Научу заботиться о себе в рамках ваших возможностей
                    </Paragraph>
                    <ButtonElem style={{fontSize: "20px"}}isColored>Связаться со мной
                        <TelegramIcon variant="light" />  
                    </ButtonElem>
                </IntroContent>
                <IntroPhoto>
                    <img
                    style={{ borderRadius: "45px" }}
                    src={Image.IntroImage}
                    alt="Игошина Анастасия"
                />
                </IntroPhoto>
            </Section>
            </div>
    )

}