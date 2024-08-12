import styled from "styled-components";
import Section from "../components/section";
import { TitleH4, Paragraph } from "../components/Texts";
import ButtonElem from "../components/button";
import Image from "../components/Images";

const TelegramElem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 236px;
    margin: 0 auto;
    padding: 2em;
    background-color: var(--lineGreen);
    border-radius: 24px;
`
const TelegramElemText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 53%;
    text-wrap: balance;
`

const TelegramElemImage = styled.div`
    position: relative;
    width: 40%;
`

const Img = styled.div`

`
export default function TelegramChannelElem(){
    return(
        <Section>
            <div className="container">
                <TelegramElem>
                    <TelegramElemText>
                        <TitleH4>Автор телеграм-канала<span style={{color: "var(--mainGreen)", marginLeft: "0.5em"}}>"Что-то на полезном"</span></TitleH4>
                        <Paragraph style={{color: "var(--secondaryText)"}}>В нем я регулярно делюсь своими знаниями и мотивирую тысячи людей вести здоровый образ жизни </Paragraph>
                        <ButtonElem>Перейти в телеграм канал</ButtonElem>
                    </TelegramElemText>
                    <TelegramElemImage>
                        <img src={Image.IceCream} alt=""
                        style={{position: "absolute",
                                bottom: "-19%",
                                left: "18%",
                                zIndex:"2",
                                maxHeight: "265px",
                                maxWidth: "330px",}}/>
                    </TelegramElemImage>
                </TelegramElem>
            </div>
        </Section>

    )
}